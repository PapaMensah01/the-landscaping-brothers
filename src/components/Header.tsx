"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LOGO_PATH } from "@/app/site";
import { SERVICES } from "@/app/services/services-data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top contact bar - accent color */}
      <div className="border-b border-accent bg-accent text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2.5 sm:flex-row sm:px-6">
          <span className="flex items-center gap-2 text-xs font-medium text-white sm:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Office Hours: 8:00 AM – 6:00 PM
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <a href="tel:+14706095370" className="flex items-center gap-2 font-medium text-white transition hover:opacity-90 min-h-[44px] min-w-[44px] items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (470) 609-5370
            </a>
            <a href="mailto:office@thelandscapingbrothers.com" className="flex items-center gap-2 font-medium text-white transition hover:opacity-90 min-h-[44px] items-center whitespace-nowrap text-center justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-[11px] sm:text-xs">office@thelandscapingbrothers.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header / nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <nav className="mx-auto flex h-16 min-h-[44px] max-w-6xl items-center justify-between gap-4 px-4 md:h-24 md:px-6" aria-label="Main navigation">
          <Link href="/" className="relative flex min-h-[44px] shrink-0 items-center self-center md:h-20" aria-label="The Landscaping Brothers - Home">
            <Image src={LOGO_PATH} alt="" width={320} height={64} className="h-14 w-auto object-contain object-left invert md:h-20" priority unoptimized />
          </Link>

          {/* Desktop nav - inspiration: uppercase black links, ample spacing */}
          <div className="hidden gap-x-10 md:flex md:items-center">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 text-base font-semibold uppercase tracking-wide text-foreground transition hover:opacity-80 py-3"
                aria-expanded="false"
                aria-haspopup="true"
              >
                About
                <svg className="h-5 w-5 transition group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="min-w-[200px] rounded-lg border border-border bg-background py-1 shadow-lg transition duration-200">
                  <Link href="/about" className="block px-4 py-3 text-base text-muted transition hover:bg-cream hover:text-foreground">About Us</Link>
                  <Link href="/testimonials" className="block px-4 py-3 text-base text-muted transition hover:bg-cream hover:text-foreground">Testimonials</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 text-base font-semibold uppercase tracking-wide text-foreground transition hover:opacity-80 py-3"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services
                <svg className="h-5 w-5 transition group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="min-w-[220px] rounded-lg border border-border bg-background py-1 shadow-lg">
                  {SERVICES.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="block px-4 py-3 text-base text-muted transition hover:bg-cream hover:text-foreground">{service.title}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/project-highlights" className="text-base font-semibold uppercase tracking-wide text-foreground transition hover:opacity-80 py-3">Gallery</Link>
            <Link href="/careers" className="text-base font-semibold uppercase tracking-wide text-foreground transition hover:opacity-80 py-3">Careers</Link>
            <Link href="/contact" className="text-base font-semibold uppercase tracking-wide text-foreground transition hover:opacity-80 py-3">Contact</Link>
          </div>

          {/* Desktop CTA - rectangular button like reference */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 rounded bg-accent px-6 py-3 text-base font-bold uppercase tracking-wide text-white transition duration-200 hover:bg-accent-dark hover:shadow-md min-h-[48px]"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-cream md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="border-t border-border bg-background px-4 py-4 shadow-lg">
            <ul className="flex flex-col gap-1">
              <li>
                <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">About</span>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">About Us</Link>
                <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Testimonials</Link>
              </li>
              <li>
                <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Services</span>
                {SERVICES.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">{service.title}</Link>
                ))}
              </li>
              <li>
                <Link href="/project-highlights" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream min-h-[44px] flex items-center">Gallery</Link>
              </li>
              <li>
                <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream min-h-[44px] flex items-center">Careers</Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream min-h-[44px] flex items-center">Contact</Link>
              </li>
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-accent-dark min-h-[48px]"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
