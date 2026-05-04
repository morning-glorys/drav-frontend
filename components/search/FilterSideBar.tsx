import React from "react";

export default function FilterSidebar() {
  return (
    <aside className="md:col-span-3 space-y-8 hidden md:block">
      {/* Category */}
      <div>
        <h3 className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3 pb-2 border-b border-surface-variant">
          Category
        </h3>
        <ul className="space-y-2.5">
          {["Hoodies & Sweatshirts", "Jackets", "Knitwear"].map((cat, idx) => (
            <li key={idx}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked={idx === 0}
                  className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 accent-current"
                />
                <span
                  className={`text-sm transition-colors group-hover:text-primary ${
                    idx === 0
                      ? "text-on-surface font-medium"
                      : "text-on-surface-variant"
                  }`}
                >
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3 pb-2 border-b border-surface-variant">
          Color
        </h3>
        <div className="flex gap-2.5">
          {[
            { label: "Black", bg: "bg-zinc-900", active: true },
            { label: "White", bg: "bg-zinc-100 border border-outline-variant" },
            { label: "Dark Gray", bg: "bg-[#3d3d3d]" },
            { label: "Navy", bg: "bg-[#1c2a43]" },
          ].map(({ label, bg, active }) => (
            <button
              key={label}
              aria-label={label}
              className={`w-7 h-7 rounded-full ${bg} transition-all focus:outline-none ${
                active
                  ? "ring-2 ring-offset-2 ring-on-surface"
                  : "hover:ring-2 hover:ring-offset-2 hover:ring-outline"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3 pb-2 border-b border-surface-variant">
          Price
        </h3>
        <ul className="space-y-2.5">
          {["Under $100", "Under $200", "$200 - $500"].map((price, idx) => (
            <li key={idx}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  defaultChecked={idx === 1}
                  className="border-outline-variant text-primary focus:ring-primary w-4 h-4 accent-current"
                />
                <span
                  className={`text-sm transition-colors group-hover:text-primary ${
                    idx === 1
                      ? "text-on-surface font-medium"
                      : "text-on-surface-variant"
                  }`}
                >
                  {price}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
