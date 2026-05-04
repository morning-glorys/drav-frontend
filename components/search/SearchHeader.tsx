import React from "react";

export default function SearchHeader() {
  return (
    <div className="mb-8">
      <h1 className="font-h1 text-h1 text-on-surface mb-3">Search Results</h1>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-low rounded-full text-sm text-on-surface">
          Filtering for: Black, Minimalist, Hoodie, &lt; $200
          <button
            aria-label="Clear filter"
            className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "15px" }}
            >
              close
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
