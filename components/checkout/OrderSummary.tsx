import React from "react";
import Image from "next/image";

export default function OrderSummary() {
  return (
    <aside className="w-full lg:w-[400px] flex-shrink-0">
      <div className="sticky top-gutter flex flex-col gap-md bg-surface-container-low p-md rounded-lg">
        <h3 className="font-h2 text-h2 text-primary border-b border-surface-variant pb-sm">
          Order Summary
        </h3>

        {/* Items List */}
        <div className="flex flex-col gap-md py-sm">
          {/* Item 1 */}
          <div className="flex items-center gap-sm">
            <div className="w-20 h-24 bg-surface-container-highest rounded overflow-hidden flex-shrink-0 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoRieEu7aN5t8E8OxQodBjh-UnNvvUfnSx2VK3WF1S9tA56001MuWKkzwgcyuhmavq1bRYFEago6cECUOFGAn3tLuKL6UbnXlSVxc7boOXn55OvEEGgRNf44XAYAeJ1Y0qyy97nZw0h3iI4XG2Cy722m79MLNspq0DzBqOizIhXhv36-77NvSg3HSOHCJPAaIXXrMJYFOUmPr3VGyz0UUNcD0N4ev6RSzkLs9hDokFLNO_OFTwKRe9MIZN3qk97vhosPEIysSRJ8U"
                alt="Ceramic Vase"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow flex flex-col">
              <span className="font-body-lg text-body-lg text-on-surface font-medium">
                Obsidian Ceramic Vase
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Color: Matte Black
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Qty: 1
              </span>
            </div>
            <span className="font-price text-price text-primary">$120.00</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-sm">
            <div className="w-20 h-24 bg-surface-container-highest rounded overflow-hidden flex-shrink-0 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJ3Uf2t0dQphUFwfzwxYbXgNkptbviwJ-5TMnwm7FPrehXcmKP6kmaq77ZdH0guMPQB9orXWA4KSaZ9EYJgK31eFO5uQlPIUihB2eoMXKCJmalxgUR61ksUmNe25NrB7Y64suYOXN_Yxnfy6E4z6SVELukKJSLx2HwsPgKe6duQyapzNhuanQ7fKXEuC0No45RRcPHioDRWP_JBBNxDkKRdQHboErxR5BkH2gfAljEsceP_dELgjYDlnSJSPEOIxgIjF7bU7l5K1h"
                alt="Leather Journal"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow flex flex-col">
              <span className="font-body-lg text-body-lg text-on-surface font-medium">
                Signature Leather Journal
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Color: Stone
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Qty: 2
              </span>
            </div>
            <span className="font-price text-price text-primary">$90.00</span>
          </div>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-xs border-t border-surface-variant pt-sm">
          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span>Subtotal</span>
            <span>$210.00</span>
          </div>
          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span>Taxes</span>
            <span>Calculated at next step</span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-surface-variant pt-sm mb-sm">
          <span className="font-h2 text-h2 text-primary">Total</span>
          <span className="font-price text-price text-primary text-[24px]">
            $210.00
          </span>
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary text-on-primary font-body-lg text-body-lg py-sm px-gutter rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-xs">
          <span className="material-symbols-outlined text-[20px]">lock</span>
          Complete Purchase
        </button>
      </div>
    </aside>
  );
}
