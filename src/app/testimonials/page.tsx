export const metadata = {
  title: "Testimonials | The Landscaping Brothers",
  description: "See what our clients say about The Landscaping Brothers—quality landscaping, sod, hardscaping, and customer service.",
};

import { TESTIMONIALS } from "../testimonials-data";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          What our clients say about us
        </h1>
        <p className="mt-2 text-muted">Real feedback from homeowners and businesses we’ve worked with.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <p className="text-muted">"{t.quote}"</p>
              <cite className="mt-4 block font-semibold not-italic text-foreground">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
