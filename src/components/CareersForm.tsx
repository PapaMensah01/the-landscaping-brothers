"use client";

import { useRef, useState } from "react";

const HOW_DID_YOU_HEAR_OPTIONS = [
  "Job board (Indeed, LinkedIn, etc.)",
  "Company website",
  "Referral from someone",
  "Social media",
  "Signs / Trucks / Trailers",
  "Other",
];

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
const labelClassName = "block text-sm font-medium text-foreground";
const requiredStar = <span className="text-red-500">*</span>;

function getFileIconLabel(file: File): string {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "PDF";
  if (ext === "doc" || ext === "docx") return "DOC";
  return ext.toUpperCase() || "FILE";
}

export function CareersForm() {
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setFile = (file: File | null) => {
    setResumeFile(file);
    const input = fileInputRef.current;
    if (input) {
      if (file) {
        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;
      } else {
        input.value = "";
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && /\.(pdf|doc|docx)$/i.test(file.name)) setFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleBrowseClick = () => fileInputRef.current?.click();

  return (
    <form
      action="#"
      method="post"
      encType="multipart/form-data"
      className="mt-10 space-y-6 rounded-2xl border border-border bg-cream/30 p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="careers-firstName" className={labelClassName}>
            First name {requiredStar}
          </label>
          <input
            type="text"
            id="careers-firstName"
            name="firstName"
            required
            className={inputClassName}
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="careers-lastName" className={labelClassName}>
            Last name {requiredStar}
          </label>
          <input
            type="text"
            id="careers-lastName"
            name="lastName"
            required
            className={inputClassName}
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="careers-phone" className={labelClassName}>
          Phone number {requiredStar}
        </label>
        <input
          type="tel"
          id="careers-phone"
          name="phone"
          required
          className={inputClassName}
          placeholder="(470) 555-1234"
        />
      </div>

      <div>
        <label htmlFor="careers-email" className={labelClassName}>
          Email {requiredStar}
        </label>
        <input
          type="email"
          id="careers-email"
          name="email"
          required
          className={inputClassName}
          placeholder="you@example.com"
        />
      </div>

      <div className="rounded-xl border border-border bg-background p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Upload resume {requiredStar}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          id="careers-resume"
          name="resume"
          required
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setResumeFile(file);
          }}
        />
        {resumeFile && (
          <div className="mb-3 flex items-center gap-3 rounded-lg border border-border bg-cream/30 px-3 py-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-accent text-xs font-bold text-white">
              {getFileIconLabel(resumeFile)}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm text-foreground">
              {resumeFile.name}
            </span>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="shrink-0 rounded p-1 text-red-500 transition hover:bg-red-50 hover:text-red-600"
              aria-label="Remove resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        )}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleBrowseClick}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-8 transition ${
            isDragging ? "border-accent bg-cream/50" : "border-border bg-cream/20 hover:border-accent/50"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-wide text-foreground">
            Drag resume here
          </p>
          <p className="mt-1 text-sm">
            <span className="text-muted">or </span>
            <span className="font-semibold uppercase tracking-wide text-accent">browse</span>
          </p>
          <p className="mt-2 text-xs text-muted">PDF, DOC, or DOCX. Max 10MB.</p>
        </div>
      </div>

      <div>
        <label htmlFor="careers-message" className={labelClassName}>
          Why are you interested and why would you be a good fit? {requiredStar}
        </label>
        <textarea
          id="careers-message"
          name="message"
          required
          rows={5}
          className={`${inputClassName} resize-y`}
          placeholder="Tell us about your experience, why you want to join our team, and what makes you a great fit."
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-foreground">
          How did you hear about us? {requiredStar}
        </legend>
        <div className="mt-3 space-y-2.5" role="group">
          {HOW_DID_YOU_HEAR_OPTIONS.map((value) => (
            <div key={value} className="space-y-2">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="howDidYouHear"
                  value={value}
                  required
                  checked={howDidYouHear === value}
                  onChange={() => setHowDidYouHear(value)}
                  className="h-4 w-4 border-border text-accent focus:ring-accent"
                />
                <span className="text-sm text-foreground">{value}</span>
              </label>
              {value === "Referral from someone" && howDidYouHear === "Referral from someone" && (
                <div className="ml-7">
                  <label htmlFor="careers-referralName" className={labelClassName}>
                    Who referred you? {requiredStar}
                  </label>
                  <input
                    type="text"
                    id="careers-referralName"
                    name="referralName"
                    required
                    className={inputClassName}
                    placeholder="Name of person who referred you"
                  />
                </div>
              )}
              {value === "Other" && howDidYouHear === "Other" && (
                <div className="ml-7">
                  <label htmlFor="careers-howOther" className="sr-only">
                    Please specify
                  </label>
                  <input
                    type="text"
                    id="careers-howOther"
                    name="howDidYouHearOther"
                    className={inputClassName}
                    placeholder="Please specify how you heard about us"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-4 text-base font-semibold text-white transition hover:bg-accent-dark md:w-auto md:px-8"
      >
        Submit application
      </button>
    </form>
  );
}
