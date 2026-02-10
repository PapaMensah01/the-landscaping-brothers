import Link from "next/link";
import Image from "next/image";

const ABOUT_IMAGE = "/gallery/IMG_2839.PNG";
const ABOUT_IMAGE_2 = "/gallery/IMG_1240.JPG";

export const metadata = {
  title: "About Us | The Landscaping Brothers",
  description:
    "Learn about The Landscaping Brothers—quality work, tailored designs, and a client-focused approach to landscaping and hardscaping.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← Home
        </Link>

        {/* Hero: Our Story – blue section with headline + tagline */}
        <section className="mt-6 rounded-2xl bg-accent px-4 py-8 text-white sm:mt-8 sm:px-6 sm:py-12 md:mt-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Our Story
            </h1>
            <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg">
              Family-owned. Built on trust and hard work.
            </p>
          </div>
        </section>

        {/* Story: two paragraphs, readable width */}
        <section className="mx-auto max-w-3xl py-8 sm:py-12 md:py-20">
          <p className="text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
            My brother and I started The Landscaping Brothers in 2020. From a
            small family-run business operating out of our dad&apos;s truck, it
            has now evolved into a large-scale landscaping company, servicing
            hundreds of clients across the Greater Atlanta area. Our credibility
            is built on years of real-world experience, consistent results, and
            a track record of satisfied customers. With our love for the great
            outdoors, we pride ourselves in treating every home as our own.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
            Guided by Colossians 3:23 — &ldquo;Whatever you do, work at it with
            all your heart, as working for the Lord, not for human
            masters&rdquo; — our team is committed to treating every property
            as if it were our own. We provide everything from routine
            maintenance to full-scale landscaping projects, and we build
            long-term relationships based on trust, integrity, and hard work.
          </p>
        </section>

        {/* Two images: side by side on desktop, stacked on mobile */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-accent shadow-md">
              <Image
                src={ABOUT_IMAGE}
                alt="The Landscaping Brothers at work"
                fill
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-accent shadow-md">
              <Image
                src={ABOUT_IMAGE_2}
                alt="The Landscaping Brothers landscaping work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Complete Landscaping Services – full width */}
        <section className="py-8 sm:py-12 md:py-20">
          <div className="flex flex-col rounded-2xl bg-accent px-4 py-8 text-white sm:px-6 sm:py-10 md:px-10 md:py-14">
            <h2 className="font-heading text-lg font-bold uppercase tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
              Complete Landscaping Services
            </h2>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base">
              From design to build, we handle landscaping and hardscaping for
              homes and businesses. We aim for top-quality results and a
              property you&apos;re proud of.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/95 sm:mt-6 sm:space-y-3 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                Every job done with care and a professional standard.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                Design and installation in one place—no juggling multiple contractors.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                Trusted by homeowners and businesses, with top ratings from our clients.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent transition hover:bg-white/95 sm:mt-8 sm:w-fit sm:px-8"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
