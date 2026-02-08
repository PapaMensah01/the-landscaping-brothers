import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Sod Installation | The Landscaping Brothers",
  description:
    "Professional sod installation for a full, green lawn that boosts your property's curb appeal.",
};

const SOD_OPTIONS = [
  {
    name: "Tif Tuf Bermuda",
    description:
      "Strong turf that looks good and holds up in dry spells. Handles wear well and bounces back quickly, so it's a solid choice for an active lawn.",
    image: "/gallery/IMG_3045.jpeg",
  },
  {
    name: "Zeon Zoysia",
    description:
      "Popular for good reason—works in both hot and cooler Southern climates. Holds up against disease and keeps a dense, medium-textured look.",
    image: "/gallery/IMG_3044.jpeg",
  },
  {
    name: "Elite Tall Fescue",
    description:
      "Cool-season mix that does well in sun or partial shade with a few hours of sun. Deep green color and medium texture, and it tolerates wetter soil.",
    image: "/gallery/IMG_3046.jpeg",
  },
] as const;

const INSTALL_STEPS = [
  "Picking the right sod for your property and conditions",
  "Prepping soil, improving drainage, and light grading so the lawn can thrive",
  "Laying sod for a smooth, healthy lawn",
  "Sharing clear aftercare so the lawn stays in great shape",
  "Leaving the site clean so you can enjoy your new lawn",
] as const;

const FAQ_ITEMS = [
  { q: "What does sod installation involve?", a: "We bring pre-grown grass in rolls or strips and install it on prepared soil so you get a full lawn right away. We prep the site, lay and roll the sod, then give you simple aftercare steps." },
  { q: "Why choose sod instead of seed?", a: "Sod gives you an instant lawn, fewer weeds early on, and you can use it sooner. Seed takes longer to fill in and needs more attention at first." },
  { q: "How do I pick the right sod for my yard?", a: "We help you decide based on sun, shade, foot traffic, and how you plan to use the space. We offer Tif Tuf Bermuda, Zeon Zoysia, and Elite Tall Fescue to match different sites." },
  { q: "What steps are included in sod installation?", a: "We handle soil prep and drainage, grade as needed, lay and roll the sod for good contact, then clean up and walk you through watering and care." },
  { q: "How long until new sod takes root?", a: "With proper watering, roots usually start to anchor in a couple of weeks. Full establishment is often within a few weeks to a couple of months." },
  { q: "When can I use the lawn after installation?", a: "Light use is usually fine after a week or two once roots are taking hold. We'll give you specific guidance for your sod and site." },
  { q: "How often should I water new sod?", a: "New sod needs regular, light watering at first so it doesn't dry out. We'll give you a simple watering schedule and adjust for your soil and weather." },
  { q: "What upkeep does the lawn need after sod is installed?", a: "Routine mowing, watering as needed, and occasional fertilizing. We'll provide a short aftercare guide so you know what to do and when." },
  { q: "Can you install sod any time of year?", a: "We install when conditions are best for establishment—usually spring and fall in our area. We can talk timing when you get in touch." },
  { q: "How long does a typical sod job take?", a: "Most residential jobs are finished in one to a few days depending on size. We'll give you a clearer timeline once we see your property." },
  { q: "Is sod more expensive than seeding?", a: "Sod typically costs more upfront than seed but gives you an instant lawn and less follow-up work. We're happy to provide a free quote so you can compare." },
  { q: "How do I get my yard ready for sod?", a: "We take care of soil prep, grading, and drainage as part of the job. If you have existing grass or debris, we can discuss removal and prep when you contact us." },
  { q: "What sod works well in shady spots?", a: "Shade-tolerant types like some tall fescues do better with limited sun. We'll suggest varieties that match your light conditions." },
  { q: "How does sod help with erosion?", a: "Sod covers the ground quickly with living roots that hold soil in place, helping reduce erosion on slopes and bare areas." },
  { q: "What should I look for in a sod installer?", a: "Look for experience, a clear process, quality sod options, and good communication. We're happy to explain our process and share references." },
] as const;

export default function SodInstallationPage() {
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
              Sod Installation in Atlanta
            </h1>
            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-white"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We install sod across the Atlanta area so you get a full, green
              lawn without the wait. From soil prep to cleanup, we handle the
              work and leave you with clear aftercare steps so your lawn stays
              healthy and looks great.
            </p>
          </div>
          <div className="min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/gallery/IMG_1114.jpeg"
                alt="Sod installation by The Landscaping Brothers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Blue – image left, Our Installation Process right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="min-w-0 md:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/gallery/IMG_2846.jpeg"
                alt="Sod installation by The Landscaping Brothers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Sod Installation
            </p>
            <h2 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
              Our Installation Process
            </h2>
            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-white"
              aria-hidden
            />
            <ul className="mt-6 space-y-5">
              {INSTALL_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-white/95">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Intro block before sod types – centered heading + line + paragraph */}
        <section className="mt-10 px-4 py-10 sm:mt-14 sm:px-6 sm:py-12 md:mt-20 md:px-10 md:py-16">
          <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Our Sod Options
          </h2>
          <div className="mx-auto mt-3 flex justify-center" aria-hidden>
            <div className="h-0.5 w-14 rounded-full bg-accent" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground">
            We partner with top sod suppliers in the Southeast and have sod
            delivered straight to your job site. Below are the varieties we use
            most often.
          </p>
        </section>

        {/* Sod types – cards grid */}
        <section className="mt-8 sm:mt-10 md:mt-14">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SOD_OPTIONS.map((sod) => (
              <article
                key={sod.name}
                className="flex flex-col overflow-hidden rounded-lg border-2 border-accent bg-white"
              >
                <div className="relative aspect-[4/3] w-full shrink-0">
                  <Image
                    src={sod.image}
                    alt={sod.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t-4 border-accent p-5">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-accent">
                    {sod.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {sod.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ – blue theme, card style */}
        <section className="mt-10 rounded-2xl bg-accent px-4 py-8 sm:mt-14 sm:px-6 sm:py-10 md:mt-20 md:px-10 md:py-14">
          <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
          <ul className="mt-8 space-y-3">
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

        {/* CTA – matches landscape design */}
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
