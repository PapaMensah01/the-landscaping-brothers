import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | The Landscaping Brothers",
  description: "Get in touch for a free quote. Tell us about your landscaping or hardscaping project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-muted">
          Tell us about your project and we’ll get back to you with a free, no-obligation quote.
        </p>

        <ContactForm />

        <div className="mt-10 border-t border-border pt-10">
          <p className="font-heading text-lg font-semibold text-foreground">Prefer to reach out directly?</p>
          <ul className="mt-3 space-y-2 text-muted">
            <li>
              <a href="tel:+14706095370" className="text-accent transition hover:text-accent-dark">(470) 609-5370</a>
            </li>
            <li>
              <a href="mailto:office@thelandscapingbrothers.com" className="whitespace-nowrap text-accent transition hover:text-accent-dark">office@thelandscapingbrothers.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
