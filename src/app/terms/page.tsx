export const metadata = {
  title: "Terms and Conditions | The Landscaping Brothers",
  description: "Terms and conditions for using The Landscaping Brothers website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-muted">Last updated: February 2025</p>

        <div className="mt-10 space-y-6 text-foreground">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Use of this website</h2>
            <p className="mt-2 text-muted leading-relaxed">
              By using this website, you agree to these terms. The content on this site is for general information about The Landscaping Brothers and our services. We do not guarantee that the site will be error-free or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Estimates and services</h2>
            <p className="mt-2 text-muted leading-relaxed">
              Contact form submissions and quote requests do not create a binding contract. Services, pricing, and scheduling are subject to a separate agreement. We will respond to your inquiries in good faith and provide estimates as described on our site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-2 text-muted leading-relaxed">
              The Landscaping Brothers name, logo, and content on this website are our property. You may not copy, reproduce, or use them for commercial purposes without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2 text-muted leading-relaxed">
              Questions about these terms? Contact us at{" "}
              <a href="mailto:office@thelandscapingbrothers.com" className="text-accent hover:underline">
                office@thelandscapingbrothers.com
              </a>{" "}
              or (470) 609-5370.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
