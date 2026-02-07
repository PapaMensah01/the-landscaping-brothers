"use client";

import Image from "next/image";
import { useState } from "react";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

interface HomeGalleryProps {
  images: string[];
}

export function HomeGallery({ images }: HomeGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visible = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, images.length));
  };

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((filename) => (
          <div
            key={filename}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border transition duration-300 hover:shadow-md"
          >
            <Image
              src={`/gallery/${filename}`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={loadMore}
            className="min-h-[48px] rounded-full border-2 border-accent bg-transparent px-8 py-3 font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
