import React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  rating,
  reviews,
  price,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col cursor-pointer">
      {/* Container gambar: Perhatikan bahwa ini HARUS memiliki 'relative' */}
      <div className="bg-surface-container-low rounded-lg aspect-[4/5] mb-md overflow-hidden relative">
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-body-lg text-body-lg text-on-surface mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-surface-tint">
            <span
              className="material-symbols-outlined text-[14px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-body-sm text-body-sm">
              {rating} ({reviews})
            </span>
          </div>
        </div>
        <span className="font-price text-price text-on-surface">${price}</span>
      </div>
    </div>
  );
}
