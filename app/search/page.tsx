import React from "react";
import { Wand2 } from "lucide-react";
import FilterSidebar from "@/components/search/FilterSideBar";
import ProductCard from "@/components/ui/ProductCard";
import MainLayout from "@/components/layout/MainLayout";

const searchResults = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Essential Heavyweight Hoodie",
    title: "Essential Heavyweight Hoodie",
    subtitle: "100% Organic Cotton",
    price: "185.000",
    highMatch: true,
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Oversized Minimal Pullover",
    title: "Oversized Minimal Pullover",
    subtitle: "Merino Blend",
    price: "195.000",
    highMatch: false,
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Core Zip-Up Hoodie",
    title: "Core Zip-Up Hoodie",
    subtitle: "Japanese French Terry",
    price: "170.000",
    highMatch: false,
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1572495641004-28421ae52e52?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Tech Fleece Pullover",
    title: "Tech Fleece Pullover",
    subtitle: "Brushed Cotton",
    price: "199.000",
    highMatch: false,
  },
];

export default function SearchPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <section className="mb-lg border-b border-surface-variant pb-md">
          <h1 className="font-h1 text-h1 text-primary mb-2">Search Results</h1>
          <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg inline-flex">
            <Wand2 size={18} className="text-secondary" />
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Showing results for:{" "}
              <strong className="text-primary font-medium">
                minimalist black hoodie under Rp200.000
              </strong>
            </p>
          </div>
          <p className="font-label text-label text-on-surface-variant mt-3 max-w-[480px]">
            Based on your search, we selected relevant items emphasizing minimal
            design, black colorway, and price constraint.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <FilterSidebar />

          <div className="col-span-1 md:col-span-9">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-surface-variant">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Showing {searchResults.length} items
              </span>
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Sort by:
                </span>
                <select className="bg-transparent border-none font-body-sm text-body-sm text-primary font-medium focus:ring-0 cursor-pointer p-0 pr-6">
                  <option>Relevance (AI)</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                  highMatch={product.highMatch}
                />
              ))}
            </div>

            <div className="mt-lg text-center">
              <button className="bg-white border border-outline-variant text-primary font-body-lg text-body-lg px-8 py-3 rounded hover:bg-surface-container-low transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
