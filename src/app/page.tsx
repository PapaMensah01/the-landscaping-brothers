"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn, AnimateInStagger } from "@/components/AnimateIn";
import { SERVICES } from "./services/services-data";
import { HomeGallery } from "@/components/HomeGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GALLERY_IMAGES } from "./gallery-images";

const HERO_IMAGE = "/gallery/IMG_3014.jpeg";
const COMPLETE_LANDSCAPING_IMAGE = "/gallery/IMG_2861.jpeg";

const BANNER_IMAGES = [
  {
    title: "Pinestraw",
    description: "We offer high grade long & short needle pinestraw installation, providing a clean natural look that enhances curb appeal while helping to retain moisture and prevent weeds.",
    src: "/gallery/IMG_2871.WEBP",
  },
  {
    title: "Mulch",
    description: "We offer professional mulch installations adding a fresh polished look to your landscape while improving soil health, moisture retention and weed control.",
    src: "/gallery/IMG_2875.JPG",
  },
  {
    title: "Sod",
    description: "We offer professional sod installations, delivering instant lush green lawns that improve curb appeal and create a healthy, even surface for your property.",
    src: "/gallery/IMG_3586.jpeg",
    objectPosition: "center 80%",
    zoomOut: 20,
  },
  {
    title: "Junk Hauls",
    description: "We offer junk removal services helping you clear out unwanted debris quickly and efficiently to keep your property clean and clutter-free.",
    src: "/gallery/IMG_3016.jpeg",
  },
];

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-border text-muted ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [openBanner, setOpenBanner] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - background image, left-aligned headline, bottom-right brand */}
      <section className="relative min-h-[70vh] overflow-hidden border-b border-border pt-16 pb-24 md:min-h-[75vh] md:pt-24 md:pb-32">
        <div className="absolute inset-0">
          <Image src={HERO_IMAGE} alt="" fill className="object-cover object-[center_35%]" priority sizes="100vw" quality={95} />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col px-6 md:min-h-[65vh]">
          {/* Left: stacked headline + subtitle + CTA */}
          <div className="flex flex-1 flex-col justify-center text-left">
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="hero-line block">The</span>
              <span className="hero-line block">Landscaping</span>
              <span className="hero-line block">Brothers</span>
            </h1>
            <p className="hero-line mt-4 text-lg text-white/95 md:text-xl">
              Custom Landscaping, Lawn Care & Hardscapes
            </p>
            <a
              href="/contact"
              className="hero-line mt-8 inline-flex min-h-[48px] w-fit items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:bg-accent-dark hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Intro - Complete Landscaping Services (image left, text right, success badge) */}
      <section id="about" className="border-b border-border py-16 md:py-20" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: single image with black border (top/left), shadow, and success-rate badge */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative overflow-hidden"
                style={{
                  borderTop: "4px solid #1a1a1a",
                  borderLeft: "4px solid #1a1a1a",
                  boxShadow: "6px 6px 0 rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={COMPLETE_LANDSCAPING_IMAGE} alt="Our landscaping work" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                {/* Success rate badge - bottom left, pill shape */}
                <div className="absolute bottom-4 left-0 flex items-center gap-3 rounded-r-full bg-accent px-4 py-2.5 pl-4 pr-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                  <div>
                    <span className="block text-xl font-bold leading-none">99%</span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-95">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: heading, paragraph, list with checkmarks, CTA button */}
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Complete Landscaping Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The Landscaping Brothers specializes in custom landscaping and hardscapes, serving both residential and commercial clients. Our team is committed to excellence and making your property look its best.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Expert execution and a professional standard on every project.",
                  "Custom plans and full-service design and installation.",
                  "A track record of 5-star reviews and satisfied clients.",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-6 w-6 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/about"
                className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:bg-accent-dark hover:shadow-md"
              >
                More About Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Customized Landscape Planning and Design - centered intro */}
      <section className="border-b border-border py-16 md:py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <AnimateIn className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl" style={{ color: "#333333" }}>
            <span className="block">Customized Landscape Planning</span>
            <span className="block">and Design</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed" style={{ color: "#666666" }}>
            We take care of everything before construction—site assessments, scheduling, and permits—so your project gets off to a smooth start. We also offer custom landscape design, planning, seasonal cleanups, sod installation, and other services. You get design and installation from one team in your area.
          </p>
        </AnimateIn>
      </section>

      {/* Two stacked image banners with overlay and centered text + hover/tap to reveal description */}
      <section className="border-b border-border">
        {BANNER_IMAGES.map((banner) => (
          <AnimateIn
            key={banner.title}
            as="div"
            className="group relative flex h-[55vh] w-full cursor-pointer items-center justify-center overflow-hidden md:cursor-default md:h-[60vh]"
          >
            <div
              className="absolute inset-0 z-20 md:pointer-events-none"
              role="button"
              tabIndex={0}
              onClick={() => setOpenBanner((prev) => (prev === banner.title ? null : banner.title))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenBanner((prev) => (prev === banner.title ? null : banner.title));
                }
              }}
              aria-expanded={openBanner === banner.title}
              aria-label={`${banner.title}. Tap to ${openBanner === banner.title ? "collapse" : "read"} description`}
            />
            {"src" in banner && banner.src ? (
              <div
                className="absolute transition duration-300 group-hover:scale-105"
                style={"zoomOut" in banner && typeof banner.zoomOut === "number" ? { inset: `-${banner.zoomOut}%` } : { inset: "-15%" }}
              >
                <Image
                  src={banner.src}
                  alt=""
                  fill
                  className={`object-cover ${"objectPosition" in banner && banner.objectPosition ? `object-[${banner.objectPosition}]` : "object-center"}`}
                  sizes="250vw"
                  quality={100}
                  unoptimized
                />
              </div>
            ) : (
              <ImagePlaceholder className="absolute inset-0 transition duration-300 group-hover:scale-105" />
            )}
            <div className="absolute inset-0 bg-foreground/55 transition duration-300 group-hover:bg-foreground/65" />
            <div className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center pointer-events-none">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                {banner.title}
              </h2>
              {/* Mobile: tap to reveal (state). Desktop: hover to reveal (group-hover). */}
              <div
                className={`mt-4 transition duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
                  openBanner === banner.title ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <p className="text-white/95 text-sm leading-relaxed md:text-base">
                  {banner.description}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* Our Services - card grid with Learn More */}
      <section id="services" className="border-b border-border bg-cream/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              We handle planning, design, installation, and maintenance—so your project runs smoothly from start to finish.
            </p>
          </AnimateIn>
          <AnimateInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={100}>
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 text-sm font-semibold text-accent transition duration-200 hover:text-accent-dark">
                  Learn More →
                </Link>
              </div>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* The Landscaping Brothers Standard - split: image left with overlay, content right */}
      <AnimateIn as="section" className="border-b border-border flex flex-col md:flex-row min-h-[480px] md:min-h-[520px]">
        {/* Left ~40%: photo with dark overlay + "THE LANDSCAPING BROTHERS STANDARD" */}
        <div className="relative flex min-h-[280px] w-full flex-1 basis-0 items-center justify-center overflow-hidden bg-foreground md:min-h-0 md:w-[40%] md:max-w-[40%]">
          <Image src="/gallery/IMG_2839.PNG" alt="" fill className="object-cover object-[center_35%]" sizes="50vw" />
          <div className="absolute inset-0 bg-foreground/70" />
          <h2 className="relative z-10 px-6 text-center font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
            <span className="block">The Landscaping Brothers</span>
            <span className="block">Standard</span>
          </h2>
        </div>
        {/* Right ~60%: solid accent bg, large letters T L B, three content blocks */}
        <div className="flex w-full flex-col justify-center bg-accent px-8 py-12 md:w-[60%] md:max-w-[60%] md:px-12 md:py-16">
          {[
            { letter: "T", title: "Trust", body: "At The Landscaping Brothers, trust is the foundation of everything we do. From transparent pricing to clear communication and reliable service, we focus on building strong relationships and earning our clients' confidence on every project." },
            { letter: "L", title: "Lasting", body: "We create landscapes with lasting quality in mind. Through skilled craftsmanship, attention to detail, and the use of quality materials, our work is designed to stand the test of time and add long-term value to your property." },
            { letter: "B", title: "Brotherhood", body: "Brotherhood represents both who we are and how we operate. As a family-owned business, we treat our clients like family—working with integrity, respect, and a shared commitment to excellence in everything we do." },
          ].map((item) => (
            <div key={item.letter} className="flex gap-6 border-b border-white/20 py-6 first:pt-0 last:border-b-0 last:pb-0">
              <span className="font-heading text-6xl font-extrabold leading-none text-white md:text-7xl lg:text-8xl" aria-hidden>
                {item.letter}
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase text-white md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Gallery - Our Latest Projects */}
      <section id="gallery" className="border-b border-border bg-background py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Latest Project Triumphs
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              From patios and sod to full yard transformations—see what we’ve been up to.
            </p>
          </AnimateIn>
          <HomeGallery images={GALLERY_IMAGES} />
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact CTA - Contact Us Today (inverted: light bg, dark text) */}
      <section id="contact" className="border-b border-border bg-background py-12 md:py-20">
        <AnimateIn className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contact Us Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Get your project started with The Landscaping Brothers. From design to execution, we’re here to transform your property from start to finish.
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <a href="mailto:office@thelandscapingbrothers.com" className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent-dark sm:px-8 sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span className="whitespace-nowrap">office@thelandscapingbrothers.com</span>
            </a>
            <a href="tel:+14706095370" className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-accent bg-transparent px-6 py-4 text-sm font-semibold text-accent transition hover:bg-accent/10 sm:px-8 sm:text-base">
              (470) 609-5370
            </a>
          </div>
          <a href="/contact" className="mt-6 inline-block text-sm font-semibold text-accent underline decoration-2 underline-offset-2 transition hover:text-accent-dark hover:no-underline">
            Contact Us Today!
          </a>
        </AnimateIn>
      </section>
    </div>
  );
}
