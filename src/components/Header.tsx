import Link from "next/link";

export function Header() {
  return (
    <>
      {/* Top contact bar - accent color */}
      <div className="border-b border-accent bg-accent text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-2.5 sm:flex-row">
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Office Hours: 8:00 AM – 6:00 PM
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="tel:+14706095370" className="flex items-center gap-2 font-medium text-white transition hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (470) 609-5370
            </a>
            <a href="mailto:office@thelandscapingbrothers.com" className="flex items-center gap-2 font-medium text-white transition hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
            The Landscaping Brothers
          </Link>
          <div className="hidden gap-8 md:flex md:items-center">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted transition hover:text-foreground"
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
                className="flex items-center gap-1 text-sm font-medium text-muted transition hover:text-foreground"
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
            <Link href="/project-highlights" className="text-sm font-medium text-muted transition hover:text-foreground">Gallery</Link>
            <Link href="/contact" className="text-sm font-medium text-muted transition hover:text-foreground">Contact</Link>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </header>
    </>
  );
}
