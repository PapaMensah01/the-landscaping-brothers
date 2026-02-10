import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Rock Installation | The Landscaping Brothers",
  description:
    "Decorative rock, river rock, and stone installation for lasting, low-maintenance landscape features in the Atlanta area.",
};

const LARGE_ROCK_OPTIONS = [
  { label: "3-5\" LARGE MULTI-COLOR RIVER ROCK", image: "/gallery/IMG_3628.jpeg" },
  { label: "3-5\" SMALL MULTI-COLOR RIVER ROCK", image: "/gallery/IMG_3629.jpeg" },
  { label: "3-5\" ILLINOIS BULK", image: "/gallery/IMG_3630.jpeg" },
  { label: "3-5\" PENNSYLVANIA BULK", image: "/gallery/IMG_3631.jpeg" },
  { label: "LARGE CRIMSON GRAVEL", image: "/gallery/IMG_3626.jpeg" },
  { label: "4-10\" TENNESSEE BULK", image: "/gallery/IMG_3633.jpeg" },
  { label: "4-10\" TAN RIVER ROCK", image: "/gallery/IMG_3632.jpeg" },
  { label: "3-5\" WHITE RIVER ROCK", image: "/gallery/IMG_3634.jpeg" },
] as const;

const SMALL_ROCK_OPTIONS = [
  { label: "SLATE CHIPS", image: "/gallery/IMG_3618.jpeg" },
  { label: "EGG ROCK", image: "/gallery/IMG_3616.jpeg" },
  { label: "PEA GRAVEL", image: "/gallery/IMG_3615.jpeg" },
  { label: "MINI CRIMSON", image: "/gallery/IMG_3617.jpeg" },
  { label: "MINI MARBLE", image: "/gallery/IMG_3621.jpeg" },
  { label: "MARBLE", image: "/gallery/IMG_3620.jpeg" },
  { label: "3/8\" PEA INDIANA", image: "/gallery/IMG_3622.jpeg" },
  { label: "RIVER SAND", image: "/gallery/IMG_3619.jpeg" },
] as const;

const FAQ_ITEMS = [
  { q: "What kinds of rock do you install?", a: "We install river rock, pea gravel, crushed stone, decorative stone, Mexican beach pebbles, and landscape boulders. We can help you choose the right type and color for your beds, paths, or accents." },
  { q: "Why use rock instead of mulch or grass?", a: "Rock is low-maintenance, doesn’t need watering or replacing every year, and holds up in sun and heavy rain. It’s great for dry creek beds, borders, paths, and areas where you want a clean, lasting look." },
  { q: "How do you install decorative rock?", a: "We prep the area (weed barrier, edging if needed), then spread the rock to the depth you want. For boulders or larger stone we place and set them so they look natural and stay in place." },
  { q: "Can rock help with drainage?", a: "Yes. Rock and gravel are often used in drainage swales, French drains, and dry creek beds to move water away while still looking intentional in the landscape." },
  { q: "How much does rock installation cost?", a: "Cost depends on the type of rock, how much you need, and how much prep or labor is involved. We’re happy to give a free quote after we see the area and talk through what you want." },
  { q: "Do I need edging or fabric under the rock?", a: "We usually recommend a weed barrier and some form of edging so the rock stays where it should and weeds don’t come through. We’ll suggest what makes sense for your project." },
  { q: "How long does a rock installation take?", a: "Many residential rock jobs are done in a day or two. Bigger projects or ones that include boulders and grading take longer. We’ll give you a timeline when we scope the work." },
  { q: "Can you combine rock with plants or mulch?", a: "Absolutely. Rock works well with ornamental grasses, succulents, and drought-tolerant plants. We can also mix rock and mulch in different zones for contrast and interest." },
] as const;

export default function RockInstallationPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/#services"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← All Services
        </Link>

        {/* Hero – blue block, headline + intro left, image right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
              Rock &amp; Stone in Atlanta
            </h1>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We install decorative rock, river rock, pea gravel, and boulders so your beds, paths, and accents look great with minimal upkeep. Get a lasting, low-maintenance look that holds up to weather and traffic.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg">
            <Image
              src="/gallery/IMG_3040.jpeg"
              alt="Rock and stone installation—The Landscaping Brothers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Large Rock / Drain Rock / Landscape Stones */}
        <section className="mt-10 sm:mt-14 md:mt-20">
          <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Large Rock / Drain Rock / Landscape Stones
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-accent sm:w-32" aria-hidden />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-8 md:gap-6">
            {LARGE_ROCK_OPTIONS.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden border-2 border-accent bg-white md:col-span-2"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="border-t-2 border-accent px-3 py-3 text-center sm:px-4 sm:py-4">
                  <p className="font-heading text-xs font-bold uppercase leading-tight tracking-tight text-foreground sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Small Rock / Firepit / Path / Rock Bed */}
        <section className="mt-12 sm:mt-16 md:mt-24">
          <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Small Rock / Firepit / Path / Rock Bed
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-accent sm:w-32" aria-hidden />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-8 md:gap-6">
            {SMALL_ROCK_OPTIONS.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden border-2 border-accent bg-white md:col-span-2"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="border-t-2 border-accent px-3 py-3 text-center sm:px-4 sm:py-4">
                  <p className="font-heading text-xs font-bold uppercase leading-tight tracking-tight text-foreground sm:text-sm">
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
            Ready for rock or stone on your property? Get in touch for a free quote and we’ll help you choose and install the right look.
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
