"use server";

import { Resend } from "resend";
import { getSupabaseServer, RESUMES_BUCKET } from "@/lib/supabase-server";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL ?? "The Landscaping Brothers <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "office@thelandscapingbrothers.com";

/** Escape user content for safe use in HTML email body */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type ContactResult = { ok: true } | { ok: false; error: string };
export type CareersResult = { ok: true } | { ok: false; error: string };

const HONEYPOT_FIELD = "company_website";

async function sendContactEmail(formData: FormData): Promise<ContactResult> {
  try {
    if ((formData.get(HONEYPOT_FIELD) as string)?.trim()) return { ok: true };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { ok: false, error: "Email is not configured. Please set RESEND_API_KEY." };

    const firstName = (formData.get("firstName") as string)?.trim() ?? "";
    const lastName = (formData.get("lastName") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const streetAddress = (formData.get("streetAddress") as string)?.trim() ?? "";
    const city = (formData.get("city") as string)?.trim() ?? "";
    const state = (formData.get("state") as string)?.trim() ?? "";
    const zipCode = (formData.get("zipCode") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";
    const referral = (formData.get("referral") as string) ?? "";
    const referralOther = (formData.get("referralOther") as string)?.trim() ?? "";
    const marketingEmail = formData.get("marketingEmail");
    const marketingSms = formData.get("marketingSms");

    const referralLine = referral === "Other" && referralOther ? `${referral}: ${referralOther}` : referral;
    const marketing = [marketingEmail && "Email", marketingSms && "SMS"].filter(Boolean).join(", ") || "None";

    // Optional: save to Supabase (skip if this email already exists)
    const supabase = getSupabaseServer();
    if (supabase) {
      const { data: existing } = await supabase
        .from("contact_submissions")
        .select("id")
        .eq("email", email.toLowerCase())
        .maybeSingle();
      if (!existing) {
        const { error: insertError } = await supabase.from("contact_submissions").insert({
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(),
          phone,
          street_address: streetAddress,
          city,
          state,
          zip_code: zipCode,
          message,
          referral,
          referral_other: referral === "Other" ? referralOther || null : null,
          marketing_email: !!marketingEmail,
          marketing_sms: !!marketingSms,
        });
        if (insertError) console.error("Supabase contact_submissions insert error:", insertError.message);
      }
    }

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Address:</strong> ${escapeHtml(streetAddress)}, ${escapeHtml(city)}, ${escapeHtml(state)} ${escapeHtml(zipCode)}</p>
      <p><strong>How they heard about us:</strong> ${escapeHtml(referralLine || "—")}</p>
      <p><strong>Marketing consent:</strong> ${escapeHtml(marketing)}</p>
      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Contact form: ${firstName} ${lastName}`,
      html,
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to send email.";
    return { ok: false, error: message };
  }
}

const MAX_RESUME_BYTES = 10 * 1024 * 1024; // 10MB

async function sendCareersEmail(formData: FormData): Promise<CareersResult> {
  try {
    if ((formData.get(HONEYPOT_FIELD) as string)?.trim()) return { ok: true };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { ok: false, error: "Email is not configured. Please set RESEND_API_KEY." };

    const firstName = (formData.get("firstName") as string)?.trim() ?? "";
    const lastName = (formData.get("lastName") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";
    const howDidYouHear = (formData.get("howDidYouHear") as string) ?? "";
    const referralName = (formData.get("referralName") as string)?.trim() ?? "";
    const howDidYouHearOther = (formData.get("howDidYouHearOther") as string)?.trim() ?? "";

    const resumeFile = formData.get("resume") as File | null;
    if (!resumeFile || resumeFile.size === 0) return { ok: false, error: "Resume is required." };
    if (resumeFile.size > MAX_RESUME_BYTES) return { ok: false, error: "Resume must be 10MB or less." };

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const base64 = buffer.toString("base64");

    // Optional: save to Supabase (table + storage) when env is set
    const supabase = getSupabaseServer();
    let resumePath = "";
    if (supabase) {
      const safeName = resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const storagePath = `applications/${Date.now()}-${safeName}`;
      const { error: uploadError } = await supabase.storage
        .from(RESUMES_BUCKET)
        .upload(storagePath, buffer, { contentType: resumeFile.type || "application/octet-stream", upsert: false });
      if (!uploadError) {
        resumePath = storagePath;
        const { error: insertError } = await supabase.from("career_applications").insert({
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
          resume_path: resumePath,
          fit_answer: message,
          how_heard: howDidYouHear,
          how_heard_detail: howDidYouHear === "Referral from someone" ? referralName || null : howDidYouHear === "Other" ? howDidYouHearOther || null : null,
        });
        if (insertError) {
          console.error("Supabase career_applications insert error:", insertError.message);
        }
      } else {
        console.error("Supabase resume upload error:", uploadError.message);
      }
    }

    const howLine = howDidYouHear === "Referral from someone" && referralName
      ? `${howDidYouHear} (${referralName})`
      : howDidYouHear === "Other" && howDidYouHearOther
        ? `${howDidYouHear}: ${howDidYouHearOther}`
        : howDidYouHear;

    const html = `
      <h2>New careers application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>How they heard about us:</strong> ${howLine || "—"}</p>
      <h3>Why they're a good fit</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <p><em>Resume attached.</em></p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Careers application: ${firstName} ${lastName}`,
      html,
      attachments: [{ filename: resumeFile.name, content: base64 }],
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to send application.";
    return { ok: false, error: message };
  }
}

/** Use with useActionState in Contact form */
export async function contactAction(_prev: ContactResult | null, formData: FormData): Promise<ContactResult> {
  return sendContactEmail(formData);
}

/** Use with useActionState in Careers form */
export async function careersAction(_prev: CareersResult | null, formData: FormData): Promise<CareersResult> {
  return sendCareersEmail(formData);
}
