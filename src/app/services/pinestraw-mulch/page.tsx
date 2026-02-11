import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pinestraw & Mulch | The Landscaping Brothers",
  description:
    "High-grade pinestraw and professional mulch installation for a polished look and healthier soil.",
};

const GROUND_COVER_OPTIONS = [
  { label: "Black", image: "/gallery/IMG_3047.jpeg" },
  { label: "Brown", image: "/gallery/IMG_3048.jpeg" },
  { label: "Red", image: "/gallery/IMG_3049.jpeg" },
  { label: "Cypress", image: "/gallery/IMG_3050.jpeg" },
  { label: "Playground", image: "/gallery/IMG_3051.jpeg" },
  { label: "Premium Long Needle Pinestraw", image: "/gallery/IMG_3052.jpeg" },
  { label: "Wheat Straw", image: "/gallery/IMG_3053.jpeg" },
] as const;

const FAQ_ITEMS = [
  { q: "What does mulch and pinestraw installation involve?", a: "We deliver the material to your property, spread it in your beds at the right depth, and edge or tidy the area as needed. We can top off existing ground cover or do a full install in bare beds." },
  { q: "Why choose mulch or pinestraw over other ground cover?", a: "Mulch and pinestraw look finished, hold moisture, and help with weeds. They’re versatile and we offer several colors and types so you can match your landscape." },
  { q: "How do I pick the right mulch or pinestraw for my yard?", a: "We help you choose based on sun, drainage, and the look you want. We offer black, brown, red, cypress, and playground mulch, plus farm-fresh long-needle pinestraw and wheat straw." },
  { q: "What steps are included in mulch or pinestraw installation?", a: "We deliver the material, spread it to an even depth (typically 2–3 inches), and clean up. We can work in existing beds or prep the area first if needed." },
  { q: "How long does mulch or pinestraw last before it needs refreshing?", a: "Mulch often looks best for about a year; pinestraw can last a bit longer. We can suggest a refresh schedule based on your beds and conditions." },
  { q: "When can I walk on or use the area after installation?", a: "You can use the area right away. We’ll leave the beds neat and stable so you can enjoy them immediately." },
  { q: "How much mulch or pinestraw do I need?", a: "It depends on bed size and depth. We’ll measure or you can share dimensions, and we’ll recommend how much to order and deliver accordingly." },
  { q: "What upkeep do mulch and pinestraw beds need?", a: "Rake or fluff occasionally if it compacts, and add a refresh when it thins or fades. We can come back for top-offs or full refreshes when you’re ready." },
  { q: "Can you install mulch and pinestraw any time of year?", a: "Yes. Spring and fall are common, but we can install in summer or winter when the ground isn’t frozen. We’ll work around your schedule." },
  { q: "How long does a typical mulch or pinestraw job take?", a: "Most residential jobs are done in a day or less depending on how many beds and how much material. We’ll give you a clearer timeline when we see the property." },
  { q: "How much does mulch or pinestraw installation cost?", a: "Cost depends on the type of material, how much you need, and whether we’re topping off or doing a full install. We’re happy to give a free quote." },
  { q: "How do I get my beds ready for mulch or pinestraw?", a: "We can clear weeds or old material and grade the bed if needed. If you have specific prep in mind, we can discuss it when you contact us." },
  { q: "What works best in shady or wet areas?", a: "Cypress mulch handles moisture well; pinestraw also does well in shade. We’ll recommend options that suit your site." },
  { q: "How do mulch and pinestraw help with erosion?", a: "A layer of mulch or pinestraw protects the soil from rain and runoff and helps hold it in place on slopes or bare spots." },
  { q: "What should I look for in a mulch or pinestraw installer?", a: "Look for reliable delivery, even installation, and clear pricing. We’re happy to explain our process and give you a detailed quote." },
] as const;

export default function PinestrawMulchPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/#services"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← All Services
        </Link>

        {/* Section 1: Blue – headline + intro left, image right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
              Pinestraw &amp; Mulch in Atlanta
            </h1>
            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-white"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We supply and install mulch and pinestraw so your beds look
              finished and your soil stays healthier. Choose from several mulch
              colors and textures, plus farm-fresh long-needle pinestraw and
              wheat straw, to match your site and the look you want.
            </p>
          </div>
          <div className="min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/gallery/IMG_2878.JPG"
                alt="Pinestraw and mulch installation by The Landscaping Brothers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 2880px"
              />
            </div>
          </div>
        </section>

        {/* Enhancing Outdoor Spaces – grid of ground cover types */}
        <section className="mt-10 sm:mt-14 md:mt-20">
          <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Enhancing Outdoor Spaces
          </h2>
          <div className="mx-auto mt-3 flex justify-center gap-1" aria-hidden>
            <div className="h-0.5 w-12 rounded-full bg-accent" />
            <div className="h-0.5 w-12 rounded-full bg-accent" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-foreground">
            We offer five mulch options—black, brown, red, cypress, and
            playground—plus farm-fresh long-needle pinestraw and wheat straw
            for your ground cover needs, so you can match both your site
            conditions and the look you want.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-8 md:gap-8">
            {GROUND_COVER_OPTIONS.map((item, i) => (
              <div
                key={item.label}
                className={`overflow-hidden rounded-lg border-2 border-accent bg-white md:col-span-2 ${i === 4 ? "md:col-start-2" : i === 5 ? "md:col-start-4" : i === 6 ? "md:col-start-6" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="border-t-2 border-accent px-3 py-2.5 sm:px-4 sm:py-3">
                  <p className="font-heading text-center text-xs font-bold uppercase leading-tight tracking-tight text-foreground break-words sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
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
            Want to get started? Reach out for a free quote and we&apos;ll work
            with you to make your project a reality.
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
