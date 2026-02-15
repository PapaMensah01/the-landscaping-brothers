import Link from "next/link";
import Image from "next/image";
import { LOGO_PATH } from "@/app/site";
import { SERVICES } from "@/app/services/services-data";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-12 sm:pb-8">
        {/* Logo / brand centered at top - blend so logo black matches footer background */}
        <div className="mb-10 flex justify-center sm:mb-12">
          <Link href="/" className="flex flex-col items-center bg-foreground" aria-label="The Landscaping Brothers - Home">
            <Image src={LOGO_PATH} alt="" width={440} height={88} className="h-20 w-auto object-contain md:h-28 mix-blend-lighten" unoptimized />
            <span className="mt-2 inline-block rounded bg-accent px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
              Landscaping &amp; Hardscapes
            </span>
          </Link>
        </div>

        {/* Four columns */}
        <div className="grid gap-8 border-b border-white/20 pb-8 sm:gap-10 sm:pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Company</h3>
            <ul className="mt-3 space-y-0 text-sm text-white/70">
              <li><Link href="/" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">About</Link></li>
              <li><Link href="/project-highlights" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Gallery</Link></li>
              <li><Link href="/testimonials" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Our Testimonials</Link></li>
              <li><Link href="/contact" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Services</h3>
            <ul className="mt-3 space-y-0 text-sm text-white/70">
              {SERVICES.map((service) => (
                <li key={service.slug}><Link href={`/services/${service.slug}`} className="flex min-h-[44px] items-center py-2.5 transition duration-200 hover:text-white">{service.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Service Areas</h3>
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
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+14706095370" className="flex min-h-[44px] items-center gap-2 py-2.5 transition duration-200 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  (470) 609-5370
                </a>
              </li>
              <li>
                <a href="mailto:office@thelandscapingbrothers.com" className="flex min-h-[44px] items-center gap-2 py-2.5 transition duration-200 hover:text-white sm:whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="h-4 w-4 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <span className="text-xs">office@thelandscapingbrothers.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 py-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Peachtree Corners, GA
              </li>
              <li>
                <a href="https://www.instagram.com/thelandscapingbrothersatl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 transition duration-200 hover:text-white" aria-label="Follow us on Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @thelandscapingbrothersatl
                </a>
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
