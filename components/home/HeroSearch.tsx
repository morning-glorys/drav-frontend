import React from "react";

export default function HeroSearch() {
  return (
    <section className="py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-6">
        Find your essentials.
      </h1>
      <div className="w-full max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </div>
        <input
          type="text"
          className="w-full bg-zinc-100 text-zinc-900 text-sm rounded-full py-3.5 pl-12 pr-28 focus:bg-white focus:ring-1 focus:ring-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-400"
        />
        <button className="absolute inset-y-1.5 right-1.5 bg-zinc-900 text-white rounded-full px-5 text-sm font-medium hover:bg-zinc-700 transition-colors">
          Search
        </button>
      </div>
    </section>
  );
}
