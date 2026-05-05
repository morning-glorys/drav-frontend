import React from "react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";

export default function ProductPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-gutter py-lg md:py-xl flex flex-col md:flex-row gap-lg md:gap-[80px]">
      <ProductGallery />
      <ProductDetails />
    </main>
  );
}
