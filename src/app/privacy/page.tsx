export const metadata = {
  title: "Privacy Policy | The Landscaping Brothers",
  description: "Privacy policy for The Landscaping Brothers. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-muted">Last updated: February 2025</p>

        <div className="mt-10 space-y-6 text-foreground">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2 text-muted leading-relaxed">
              When you contact us or request an estimate, we collect the information you provide: name, email, phone number, address, and your message. If you apply for a job, we also collect your resume and the details you submit on the careers form. We use this information to respond to your requests and to communicate with you about our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Marketing communications</h2>
            <p className="mt-2 text-muted leading-relaxed">
              If you opt in to receive marketing emails or SMS from us, we may use your contact information to send you updates, offers, and news about our services. You can unsubscribe from emails at any time or reply STOP to SMS messages to opt out.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Analytics</h2>
            <p className="mt-2 text-muted leading-relaxed">
              We use Google Analytics to understand how visitors use our website (e.g. page views, how you found us, device type). This does not include your name, email, or other contact details. Google may collect data according to its{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">How we protect your information</h2>
            <p className="mt-2 text-muted leading-relaxed">
              We take reasonable steps to protect the information you provide. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact us</h2>
            <p className="mt-2 text-muted leading-relaxed">
              If you have questions about this privacy policy or your personal information, contact us at{" "}
              <a href="mailto:office@thelandscapingbrothers.com" className="text-accent hover:underline">
                office@thelandscapingbrothers.com
              </a>{" "}
              or call (470) 609-5370.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
