"use client";

import Link from "next/link";
import { useState } from "react";

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
            <a href="mailto:office@thelandscapingbrothers.com" className="flex items-center gap-2 font-medium text-white transition hover:opacity-90 min-h-[44px] items-center break-all text-center justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              office@thelandscapingbrothers.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header / nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <nav className="mx-auto flex h-14 min-h-[44px] max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6" aria-label="Main navigation">
          <Link href="/" className="font-heading text-lg font-bold tracking-tight text-foreground md:text-xl shrink-0 min-h-[44px] flex items-center">
            The Landscaping Brothers
          </Link>

          {/* Desktop nav */}
          <div className="hidden gap-8 md:flex md:items-center">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted transition hover:text-foreground py-2"
                aria-expanded="false"
                aria-haspopup="true"
              >
                About
                <svg className="h-4 w-4 transition group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="min-w-[180px] rounded-lg border border-border bg-background py-1 shadow-lg transition duration-200">
                  <Link href="/about" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">About Us</Link>
                  <Link href="/testimonials" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Testimonials</Link>
                  <Link href="/project-highlights" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Project Highlights</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted transition hover:text-foreground py-2"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services
                <svg className="h-4 w-4 transition group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="min-w-[200px] rounded-lg border border-border bg-background py-1 shadow-lg">
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Landscape Design & Planning</Link>
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Lawn Care & Sod</Link>
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Ground Cover & Mulch</Link>
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Grading & Drainage</Link>
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Hardscaping</Link>
                  <Link href="/#services" className="block px-4 py-2.5 text-sm text-muted transition hover:bg-cream hover:text-foreground">Commercial Maintenance</Link>
                </div>
              </div>
            </div>
            <Link href="/project-highlights" className="text-sm font-medium text-muted transition hover:text-foreground py-2">Gallery</Link>
            <Link href="/contact" className="text-sm font-medium text-muted transition hover:text-foreground py-2">Contact</Link>
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md min-h-[44px]"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
                <Link href="/project-highlights" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Project Highlights</Link>
              </li>
              <li>
                <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Services</span>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Landscape Design & Planning</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Lawn Care & Sod</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Ground Cover & Mulch</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Grading & Drainage</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Hardscaping</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream">Commercial Maintenance</Link>
              </li>
              <li>
                <Link href="/project-highlights" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-foreground transition hover:bg-cream min-h-[44px] flex items-center">Gallery</Link>
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
