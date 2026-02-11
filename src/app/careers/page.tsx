import { CareersForm } from "@/components/CareersForm";

export const metadata = {
  title: "Careers | The Landscaping Brothers",
  description: "Join The Landscaping Brothers. We're always looking for talented people who love the outdoors and quality work.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Careers
        </h1>
        <p className="mt-2 text-muted">
          Join our team. Fill out the form below to apply—all fields are required.
        </p>

        <CareersForm />

        <div className="mt-10 border-t border-border pt-10">
          <p className="font-heading text-lg font-semibold text-foreground">Questions?</p>
          <p className="mt-3 text-muted">
            Email{" "}
            <a href="mailto:office@thelandscapingbrothers.com" className="whitespace-nowrap text-accent transition hover:text-accent-dark">
              office@thelandscapingbrothers.com
            </a>
            {" "}or call{" "}
            <a href="tel:+14706095370" className="text-accent transition hover:text-accent-dark">(470) 609-5370</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
