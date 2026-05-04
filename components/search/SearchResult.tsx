import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Essential Heavyweight Hoodie",
    material: "100% Organic Cotton",
    price: 145,
    src: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
  },
  {
    id: 2,
    title: "Tech-Knit Pullover",
    material: "Merino Blend",
    price: 185,
    src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
  },
  {
    id: 3,
    title: "Structured Zip Hoodie",
    material: "Japanese French Terry",
    price: 195,
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    id: 4,
    title: "Oversized Lounge Hoodie",
    material: "Brushed Cotton",
    price: 120,
    src: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
  },
];

const colors = ["#111", "#e5e5e5", "#6b7280", "#1e3a5f"];

export default function SearchResults() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-8 font-['Space_Grotesk']">
      {/* Title + active filter chip */}
      <h1 className="text-2xl font-bold text-zinc-900 mb-4">Search Results</h1>
      <div className="flex items-center gap-2 mb-8">
        <span className="flex items-center gap-2 bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1.5 rounded-full">
          Filtering for: Black, Minimalist, Hoodie, &lt; $200
          <button className="text-zinc-400 hover:text-zinc-700 ml-1">✕</button>
        </span>
      </div>

      <div className="flex gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block w-44 shrink-0">
          {/* Category */}
          <div className="mb-7">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Category
            </p>
            {["Hoodies & Sweatshirts", "Jackets", "Knitwear"].map((cat, i) => (
              <label
                key={cat}
                className="flex items-center gap-2.5 mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={i === 0}
                  className="rounded accent-zinc-900"
                />
                <span className="text-sm text-zinc-700">{cat}</span>
              </label>
            ))}
          </div>

          {/* Color */}
          <div className="mb-7">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Color
            </p>
            <div className="flex gap-2">
              {colors.map((c, i) => (
                <button
                  key={c}
                  className={`w-6 h-6 rounded-full border-2 ${
                    i === 0 ? "border-zinc-900" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Price
            </p>
            {["Under $100", "Under $200", "$200 - $500"].map((p, i) => (
              <label
                key={p}
                className="flex items-center gap-2.5 mb-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="price"
                  defaultChecked={i === 1}
                  className="accent-zinc-900"
                />
                <span className="text-sm text-zinc-700">{p}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {products.map((p) => (
            <a key={p.id} href="#" className="group block">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100 mb-3">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {p.title}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">{p.material}</p>
                </div>
                <p className="text-sm font-bold text-zinc-900">${p.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
