import React from "react";

export default function HeroSearch() {
  return (
    <section className="py-xl flex flex-col items-center justify-center text-center mt-lg mb-lg">
      <h1 className="font-h1 text-h1 text-on-surface mb-md">
        Find your essentials.
      </h1>
      <div className="w-full max-w-2xl relative group">
        <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          type="text"
          className="w-full bg-surface-container-low border-0 text-on-surface font-body-lg text-body-lg rounded-full py-md pl-[60px] pr-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-outline-variant focus:outline-none transition-colors placeholder:text-outline"
          placeholder="Try: black minimalist hoodie under 200k"
        />
        <button className="absolute inset-y-2 right-2 bg-primary text-on-primary rounded-full px-md flex items-center justify-center font-label text-label hover:bg-tertiary-container transition-colors">
          Search
        </button>
      </div>
    </section>
  );
}
