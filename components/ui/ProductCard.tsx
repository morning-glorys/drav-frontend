import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: number | string;
  subtitle?: string;
  highMatch?: boolean;
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  price,
  subtitle,
  highMatch = false,
}: ProductCardProps) {
  return (
    <a className="group flex flex-col h-full cursor-pointer" href="#">
      <div className="bg-surface-container-high rounded-lg mb-sm overflow-hidden relative aspect-[3/4] w-full">
        {highMatch && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1 z-10 border border-surface-variant">
            <Zap size={12} className="text-primary fill-primary" />
            <span className="font-label text-[10px] uppercase tracking-wider text-primary font-semibold">
              High Match
            </span>
          </div>
        )}
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col mt-xs flex-grow justify-start">
        <h3 className="font-body-lg text-body-lg text-primary mb-1 line-clamp-1">
          {title}
        </h3>
        {subtitle && (
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-1 line-clamp-1">
            {subtitle}
          </p>
        )}
        <p className="font-price text-price text-primary mt-auto">
          {typeof price === "number" ? `$${price}` : `Rp ${price}`}
        </p>
      </div>
    </a>
  );
}
