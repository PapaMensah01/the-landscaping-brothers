import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        {/* Logo / brand centered at top */}
        <div className="mb-12 flex justify-center">
          <Link href="/" className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              The Landscaping Brothers
            </span>
            <span className="mt-1 inline-block rounded bg-accent px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
              Landscaping &amp; Hardscapes
            </span>
          </Link>
        </div>

        {/* Four columns */}
        <div className="grid gap-10 border-b border-white/20 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li><Link href="/" className="block py-2.5 transition duration-200 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="block py-2.5 transition duration-200 hover:text-white">About</Link></li>
              <li><Link href="/project-highlights" className="block py-2.5 transition duration-200 hover:text-white">Gallery</Link></li>
              <li><Link href="/testimonials" className="block py-2.5 transition duration-200 hover:text-white">Our Testimonials</Link></li>
              <li><Link href="/contact" className="block py-2.5 transition duration-200 hover:text-white">Contact</Link></li>
              <li><Link href="/contact" className="block py-2.5 transition duration-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/contact" className="block py-2.5 transition duration-200 hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white">Our Team at The Landscaping Brothers</h3>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Landscaping ▾</Link></li>
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Hardscape ▾</Link></li>
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Grading &amp; Drainage</Link></li>
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Sod Installation</Link></li>
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Ground Cover</Link></li>
              <li><Link href="/#services" className="block py-2.5 transition duration-200 hover:text-white">Concrete ▾</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white">Service Areas</h3>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>Alpharetta, GA</li>
              <li>Berkeley Lake, GA</li>
              <li>Dunwoody, GA</li>
              <li>Johns Creek, GA</li>
              <li>Milton, GA</li>
              <li>Norcross, GA</li>
              <li>Peachtree Corners, GA</li>
              <li>Roswell, GA</li>
              <li>And surrounding areas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+14706095370" className="flex items-center gap-2 py-2.5 transition duration-200 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  (470) 609-5370
                </a>
              </li>
              <li>
                <a href="mailto:office@thelandscapingbrothers.com" className="flex items-center gap-2 py-2.5 transition duration-200 hover:text-white break-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  office@thelandscapingbrothers.com
                </a>
              </li>
              <li className="flex items-center gap-2 py-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Peachtree Corners, GA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: separator, copyright */}
        <div className="mt-8 flex flex-col items-center justify-center border-t border-white/20 pt-8">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} The Landscaping Brothers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
