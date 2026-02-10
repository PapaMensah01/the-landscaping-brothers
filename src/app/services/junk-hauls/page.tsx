import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Junk Hauls | The Landscaping Brothers",
  description:
    "Junk removal and debris hauling to clear your property quickly and keep it clean and clutter-free. Serving the Atlanta area.",
};

const FAQ_ITEMS = [
  { q: "What do you haul away?", a: "We remove yard debris, old mulch, broken branches, construction leftovers, furniture, appliances, and general clutter. If it’s junk or debris on your property, we can usually haul it." },
  { q: "How quickly can you come out?", a: "We work with your schedule. Contact us with what you need removed and we’ll set a time that works. Many jobs are scheduled within a few days." },
  { q: "Do I need to be there?", a: "It helps if you’re there to point out what goes, but we can work with instructions if you’re not. We’ll confirm the scope before we start." },
  { q: "How is pricing determined?", a: "We consider the volume of stuff, how heavy it is, and how much labor is involved. We’ll give you a clear quote so you know the cost up front." },
  { q: "Where does the junk go?", a: "We take it to approved disposal or recycling facilities. We handle loading, transport, and disposal so you don’t have to." },
  { q: "Can you do a full yard or garage cleanout?", a: "Yes. We do one-off pickups and full cleanouts—yards, garages, sheds, and driveways. Tell us what you have and we’ll plan the job." },
  { q: "Do you take construction or renovation debris?", a: "Yes. We haul drywall, lumber, old fixtures, and other renovation debris. We can work around your project timeline." },
  { q: "How do I get a quote?", a: "Reach out by phone or the contact form. Describe what you need removed and, if you can, share a photo or two. We’ll give you a quote and schedule." },
] as const;

export default function JunkHaulsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/#services"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← All Services
        </Link>

        {/* Hero section – headline + intro left, image right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
              Junk Hauls in Atlanta
            </h1>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We haul away junk and debris so your property stays clean. From yard waste and old mulch to furniture, appliances, and renovation debris—we load it, take it, and leave you with a clear space.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg">
            <Image
              src="/gallery/IMG_3016.jpeg"
              alt="Junk removal and hauling—The Landscaping Brothers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* FAQ – blue theme, card style */}
        <section className="mt-10 rounded-2xl bg-accent px-4 py-8 sm:mt-14 sm:px-6 sm:py-10 md:mt-20 md:px-10 md:py-14">
          <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
          <ul className="mt-6 space-y-3 sm:mt-8">
            {FAQ_ITEMS.map((faq, i) => (
              <li key={i}>
                <details className="group rounded-lg border border-white/20 bg-white/10 shadow-sm">
                  <summary className="flex min-h-[48px] cursor-pointer list-none items-center gap-3 px-4 py-4 text-left font-semibold text-white transition hover:bg-white/10 sm:gap-4 sm:px-5 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1 text-[15px] leading-snug sm:text-base">{faq.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-accent transition group-open:rotate-180" aria-hidden>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-white/20 px-4 pb-4 pt-2 sm:px-5">
                    <p className="text-sm leading-relaxed text-white/90">{faq.a}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center md:mt-16">
          <p className="text-muted">
            Ready to clear the junk? Get in touch for a quote and we’ll get you on the schedule.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-accent-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
