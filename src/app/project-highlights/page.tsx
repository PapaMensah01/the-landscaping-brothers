import Image from "next/image";
import { GALLERY_IMAGES } from "../gallery-images";

export const metadata = {
  title: "Project Highlights | The Landscaping Brothers",
  description: "Browse our latest landscaping and hardscaping projects—patios, sod, full yard transformations and more.",
};

export default function ProjectHighlightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Our Latest Project Triumphs
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-muted">
          From patios and sod to full yard transformations—see what we’ve been up to.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((filename) => (
            <div
              key={filename}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border transition duration-300 hover:shadow-md"
            >
              <Image
                src={`/gallery/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
