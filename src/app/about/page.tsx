import Link from "next/link";

const PLACEHOLDER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const metadata = {
  title: "About Us | The Landscaping Brothers",
  description: "Learn about The Landscaping Brothers—quality work, tailored designs, and a client-focused approach to landscaping and hardscaping.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About Us
        </h1>
        <p className="mt-2 text-muted">Complete landscaping services and the team behind them.</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Complete Landscaping Services
            </h2>
            <p className="mt-4 text-muted">
              The Landscaping Brothers specializes in custom landscaping and hardscapes, serving both residential and commercial clients. Our team is committed to excellence and making your property look its best.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Quality work with precision and professionalism.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Tailored designs and complete landscaping solutions.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Strong reputation backed by 5-star client reviews.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full border-2 border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-border bg-border">
                  {PLACEHOLDER_SVG}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-cream/50 p-6">
              <p className="font-heading text-lg font-semibold text-foreground">Brothers who care about the details</p>
              <p className="mt-2 text-sm text-muted">
                We’re a family-run company built on quality work and trust. From the first site visit to the final cleanup, we provide clear communication, dependable timelines, and a client-focused experience.
              </p>
            </div>
          </div>
        </div>

        {/* The Landscaping Brothers Standard */}
        <section className="mt-20 border-t border-border pt-16">
          <h2 className="font-heading text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            The Landscaping Brothers Standard
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { letter: "T", title: "Trust", body: "From the first site visit to the final cleanup, we provide clear communication, dependable timelines, and a client-focused experience that makes transforming your outdoor space straightforward and stress-free." },
              { letter: "L", title: "Lasting", body: "Landscaping and hardscaping demand careful work—and that’s what we deliver. Every cut, placement, grade, and plant selection is done with precision for long-lasting results and a finished look that enhances your property." },
              { letter: "B", title: "Brothers", body: "We hold ourselves to the highest standards. Quality materials, expert installation, and uncompromising professionalism are the backbone of every project. We create outdoor spaces that stand the test of time." },
            ].map((item) => (
              <div key={item.letter} className="rounded-xl border border-border bg-cream/30 p-6 text-center">
                <span className="font-heading text-4xl font-extrabold text-accent">{item.letter}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
