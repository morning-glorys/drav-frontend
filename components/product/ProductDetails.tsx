"use client";

import React, { useState } from "react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL"];

  return (
    <section className="flex-1 flex flex-col pt-md">
      {/* Header */}
      <div className="mb-lg">
        <h1 className="font-h1 text-h1 text-on-surface mb-xs">
          Minimalist Cotton Hoodie
        </h1>
        <p className="font-price text-price text-on-surface-variant">$125.00</p>
      </div>

      {/* Description */}
      <div className="mb-lg">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose">
          Engineered for essential comfort. Crafted from heavyweight, ethically
          sourced organic cotton, this hoodie features a relaxed, architectural
          fit. Stripped of unnecessary logos and aggressive hardware, it stands
          as a testament to pure form and superior tactile quality.
        </p>
      </div>

      {/* Size Selector */}
      <div className="mb-lg">
        <div className="flex justify-between items-center mb-sm">
          <span className="font-label text-label text-on-surface uppercase">
            Size
          </span>
          <a
            className="font-label text-label text-on-surface-variant hover:text-on-surface underline underline-offset-4"
            href="#"
          >
            Size Guide
          </a>
        </div>
        <div className="flex gap-sm">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-sm border rounded bg-surface-container-lowest text-on-surface font-body-sm transition-colors ${
                selectedSize === size
                  ? "border-on-surface ring-1 ring-on-surface"
                  : "border-outline-variant hover:border-on-surface"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Area */}
      <div className="flex flex-col gap-sm mb-lg border-b border-surface-variant pb-lg">
        <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-body-lg font-medium hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
          Add to Cart
        </button>
        <button className="w-full bg-surface-container-lowest text-on-surface py-4 border border-outline-variant rounded-lg font-body-lg hover:bg-surface-container-low transition-colors">
          Save to Wishlist
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="flex flex-col gap-xs items-start">
          <span className="material-symbols-outlined text-on-surface-variant font-light mb-1">
            local_shipping
          </span>
          <span className="font-label text-label text-on-surface">
            Free Shipping
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
            On orders over $200
          </span>
        </div>
        <div className="flex flex-col gap-xs items-start">
          <span className="material-symbols-outlined text-on-surface-variant font-light mb-1">
            eco
          </span>
          <span className="font-label text-label text-on-surface">
            Ethically Sourced
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
            100% Organic Cotton
          </span>
        </div>
        <div className="flex flex-col gap-xs items-start">
          <span className="material-symbols-outlined text-on-surface-variant font-light mb-1">
            refresh
          </span>
          <span className="font-label text-label text-on-surface">
            30-Day Returns
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
            No questions asked
          </span>
        </div>
      </div>
    </section>
  );
}
