import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Grading & Drainage | The Landscaping Brothers",
  description:
    "Site grading and drainage work across Atlanta—keep your lot dry and safeguard your home and landscape.",
};

const FAQ_ITEMS = [
  { q: "What does grading mean for my landscape?", a: "Grading means reshaping the earth so the surface slopes the way you need—away from the house and away from low spots. It creates the right pitch for runoff and gets the area ready for lawn, pavers, or plantings." },
  { q: "Why should I care about getting my lot graded?", a: "When the lot is graded correctly, runoff leaves the foundation, you get fewer puddles and less washout, and patios and plantings stay put. Skipping it can lead to wet basements, erosion, and expensive repairs down the road." },
  { q: "What do you actually do on a grading and drainage job?", a: "We walk the property, check where water goes, then reshape the soil and add or fix drainage as needed—things like French drains or channel drains. We can also extend downspouts so roof water is sent away from the house." },
  { q: "Does grading reduce erosion?", a: "Yes. By controlling slope and where water goes, grading keeps runoff from cutting gullies and carrying soil off. We can pair it with mulch, sod, or walls where it makes sense so the ground stays put." },
  { q: "What kind of machinery do you use for grading?", a: "We bring in compact loaders, excavators, and hand grading tools so we can move dirt and fine-tune the surface. What we use depends on the job size and whether we’re doing bulk shaping, finish grading, or putting in drainage." },
  { q: "How many days does a grading job usually take?", a: "A lot of home grading and drainage projects wrap up in a day or a short run of days. Bigger or trickier sites take longer. We’ll give you a realistic schedule once we’ve seen the property." },
  { q: "Will regrading solve my wet yard or standing water?", a: "In many cases, yes. Puddles, mushy spots, and water sitting against the foundation often improve with regrading and sometimes added drainage. We’ll tell you what we think after we take a look." },
  { q: "What are the steps for a grading job?", a: "We come out, look at the slope and where water goes, then propose a plan and timeline. Once you’re good with it, we schedule the work, reshape the land, add any drainage, and leave the site ready for whatever comes next—sod, patio, etc." },
  { q: "When should grading happen in my landscape project?", a: "Grading should come first. It’s the foundation for lawn, beds, patios, and paths. Doing it early means better drainage, a solid base, and no need to redo things later." },
  { q: "How do I know if my yard needs regrading?", a: "Watch for water that sits after rain, dirt or mulch that keeps washing away, moisture in the basement or crawl space, or spots that stay wet. If you see that, having the site evaluated is a good idea." },
  { q: "Do I need grading before a new patio or deck?", a: "In most cases, yes. A flat, well-draining base limits settling and stops water from collecting under or beside the structure. We can handle the grading as part of your patio or deck job." },
  { q: "Does grading add value to my home?", a: "Solid grading and drainage protect the house and yard and cut the chance of water issues. That tends to make the property more appealing to buyers and can help you steer clear of problems that hurt value or slow a sale." },
  { q: "What’s the difference between rough grading and finish grading?", a: "Rough grading gets the site to the main shape and slope, often early in a project. Finish grading smooths the surface right before you lay sod or seed so the result is even and ready to grow." },
  { q: "Can grading help with a wet basement?", a: "It often does. Moving water away from the foundation with grading and downspouts means less water reaching the basement. For bigger issues we might suggest grading plus other drainage options; we’ll say what we think after we look." },
  { q: "How do you decide what grading and drainage I need?", a: "We consider the current slope, where water flows, the soil, and how you use the yard. Then we suggest a plan that fits the site and your budget." },
] as const;

export default function GradingDrainagePage() {
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
              Grading &amp; Drainage in Atlanta
            </h1>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-white" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-white/90">
              We reshape the land and fix drainage so runoff leaves your house and yard instead of pooling or causing damage. Whether you need the lot regraded, erosion slowed, French drains, or downspouts extended, we get the site ready for lawn, hardscape, and planting.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg">
            <Image
              src="/gallery/IMG_3038.JPG"
              alt="Site grading and drainage—The Landscaping Brothers"
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
            Want to fix your lot’s slope and drainage? Contact us for a free estimate and we’ll put together a plan that works for your property.
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
