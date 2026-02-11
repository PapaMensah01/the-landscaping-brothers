import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../services-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | The Landscaping Brothers`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <Link
          href="/#services"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent transition hover:text-accent-dark"
        >
          ← All Services
        </Link>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {service.description}
        </p>
        <p className="mt-6 text-muted">
          Ready to get started? Get in touch for a free quote and we&apos;ll help bring your project to life.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-accent-dark"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
