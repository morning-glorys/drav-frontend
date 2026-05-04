import React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  price: number;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  price,
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <a href="#" className="group block">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-3">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-on-surface truncate">
            {title}
          </p>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xs text-on-surface-variant mt-0.5">{subtitle}</p>
          )}

          {/* Rating — untuk homepage */}
          {rating !== undefined && reviews !== undefined && (
            <div className="flex items-center gap-1 mt-1">
              <span
                className="material-symbols-outlined text-amber-400"
                style={{ fontSize: "14px" }}
              >
                star
              </span>
              <span className="text-xs text-on-surface-variant">
                {rating.toFixed(1)} ({reviews})
              </span>
            </div>
          )}
        </div>

        <p className="text-sm font-bold text-on-surface shrink-0">${price}</p>
      </div>
    </a>
  );
}
