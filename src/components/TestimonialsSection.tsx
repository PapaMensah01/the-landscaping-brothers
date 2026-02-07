"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS } from "@/app/testimonials-data";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative border-b border-accent-dark bg-accent-dark py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
          <span className="block">What our clients</span>
          <span className="block">say about us</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/20 order-1">
            <Image src="/gallery/IMG_2840.jpeg" alt="" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>

          <div className="relative order-2 pl-0 md:pl-2">
            <span className="font-heading text-8xl font-bold leading-none text-white md:text-9xl" aria-hidden>
              &ldquo;
            </span>
            <blockquote className="mt-1">
              <p className="text-lg leading-relaxed text-white md:text-xl">{t.quote}</p>
              <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-7 w-7 text-amber-400 md:h-8 md:w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <cite className="mt-3 block font-bold not-italic text-white">{t.name}</cite>
            </blockquote>
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-dark transition hover:bg-white/90"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
