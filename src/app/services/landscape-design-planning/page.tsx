import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Landscape Design & Planning | The Landscaping Brothers",
  description:
    "Tailored landscape designs, site assessments, and comprehensive planning to bring your vision to life. From consultation through completion.",
};

export default function LandscapeDesignPlanningPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/#services"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← All Services
        </Link>

        {/* Section 1: Dark – headline + intro left, design drawing right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
              Landscape Design Services in Atlanta
            </h1>
            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-white"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We provide full-service landscape design across the Atlanta region
              and work with you to turn your ideas into a custom outdoor space.
              From quiet gardens and refined courtyards to practical areas for
              entertaining, we tailor every detail to how you live and use your
              property.
            </p>
          </div>
          <div className="min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/gallery/IMG_1111.jpeg"
                alt="Landscape design plan or project by The Landscaping Brothers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Dark – image left, “Why choose us” right */}
        <section className="mt-8 grid gap-6 rounded-2xl bg-accent px-4 py-10 text-white sm:mt-10 sm:gap-8 sm:px-6 sm:py-12 md:mt-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:gap-16">
          <div className="min-w-0 md:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/gallery/IMG_1112.jpeg"
                alt="Landscape design or project by The Landscaping Brothers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Landscape Design Services in Atlanta
            </p>
            <h2 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
              Why Choose Us for Landscape Design?
            </h2>
            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-white"
              aria-hidden
            />
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                  aria-hidden
                />
                <span>
                  <strong className="font-semibold text-white">
                    Local know-how:
                  </strong>{" "}
                  We design with Georgia&apos;s climate, native species, and
                  regional style in mind so your yard looks great and thrives
                  where you live.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                  aria-hidden
                />
                <span>
                  <strong className="font-semibold text-white">
                    Quality materials:
                  </strong>{" "}
                  We use top-grade plants, hardscape, and lighting so your
                  landscape holds up and looks good for years.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                  aria-hidden
                />
                <span>
                  <strong className="font-semibold text-white">
                    We put you first:
                  </strong>{" "}
                  We focus on what you want from the initial plan through to the
                  last plant in the ground.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-6 px-4 text-center sm:mt-12 md:mt-16">
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
