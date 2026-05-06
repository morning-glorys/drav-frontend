import React from "react";
import { Wand2 } from "lucide-react";
import FilterSidebar from "@/components/search/FilterSideBar";
import ProductCard from "@/components/ui/ProductCard";
import MainLayout from "@/components/layout/MainLayout";

const searchResults = [
  {
    id: 1,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgpkUPalXK_ZhHvUbO1I1e5CKAdgb8Z_MjSn_Yatjicfvc7PGH3sTePyVzgzeZDctzvjPkQQHkZOg3tXwztdkTqqKEJ40nTt9TB6lcd2YW-9HsHtqOXmHHoRP_zjNZ4vu5pRkkYAa_UaKXlWe-jc8Z8_l69eSNpDHuPlBbYnxVbxVoxVDCQ1Ptf1qHWW9Poa1HUfcknUogE8kpzha5L7ZdeCCHLr5_difOpjA0rYjOINpkSK0u8QgVlYgeQx1ZIVvepIlQtzDku4il",
    imageAlt: "Essential Heavyweight Hoodie",
    title: "Essential Heavyweight Hoodie",
    subtitle: "100% Organic Cotton",
    price: 185,
    highMatch: true,
  },
  {
    id: 2,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALstMEyqkg5ujOgtZQ5HENk2vViICY_J4rcExfkzZIxPZTD3f_sIg1tfNq8-_dNqMSy37f553gnY7hD8D7BceK809e_CgqQV2K57-Ik5BXDr9dYf1td8xm9eikX2Lx3zX_eggFWXylbTQKgzz6WD43SlLUoaKfjz1DvoqZFl-u12zsZ2ZJ8MvKcqKf6uETh6KwJka1K1Eai_x_WPAKJRxJcAMfGcINjwwDM2jmoRhXI1LX_9nXTF8lXfCgIOt6wIK0kK8DYVZL8jaS",
    imageAlt: "Oversized Minimal Pullover",
    title: "Oversized Minimal Pullover",
    subtitle: "Merino Blend",
    price: 195,
    highMatch: false,
  },
  {
    id: 3,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8UDAqp0dGsgbk3iDH01JRjG_P4JHhXtJivkP4qgiLvXQPmH4DJb1CwiqCXHwT86bln0bjap_FKSQeYvWQQPj_H-eMG1JDIuO6xNAaJK6nioT5cJirmz6nU9AaN6bFtVlHei5naheimmBze-VX5s-0It9CywTtTudRBjCRRuuUgs40OF2DIhqT8MhQEWiW3uE7EVkA0qgx5kJcWStvByRnA6hIPVCX6ebbzeQyWMWMASocrV8Y-UFmiFBsBLmYn67PC_LSCUkFjBuZ",
    imageAlt: "Core Zip-Up Hoodie",
    title: "Core Zip-Up Hoodie",
    subtitle: "Japanese French Terry",
    price: 170,
    highMatch: false,
  },
  {
    id: 4,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCldkdLuCjcklww5w7bOz3DczrvhY1y3A6bb1PQD2S822Tt0_2BSPZ9fh-gwwQOU-I2a-Hx6pfwM6cAj2TGJ_bSYSBTlwx5RX5Ptw6-jzC7spg36nvZig7i_RSsm7eMBrgFphZ81s4_ii-WIBuOpy6hAcCcW3fLtpz2PNVTBV4VwznrjkzMUM10xElSg1-q-u7cCQc_7OIXeDEBdaSjR63SIMpYFrLnyLeGmDWxiBDtBbahbeaD0qrHQbwlHfpSXv57ya8ZtbJ4b9zD",
    imageAlt: "Tech Fleece Pullover",
    title: "Tech Fleece Pullover",
    subtitle: "Brushed Cotton",
    price: 199,
    highMatch: false,
  },
];

export default function SearchPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* AI Interpretation Header */}
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
          {/* Smart Filters (Menggunakan komponen lamamu) */}
          <FilterSidebar />

          <div className="col-span-1 md:col-span-9">
            {/* Toolbar */}
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

            {/* Grid */}
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
