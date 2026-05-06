import React from "react";
import { Truck, Banknote, PackageMinus, RefreshCcw } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function ShippingPage() {
  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-6 md:px-8 py-xl">
        <header className="mb-lg md:mb-xl text-center max-w-[768px] mx-auto">
          <h1 className="font-h1 text-h1 text-primary mb-sm">
            Simple, clear shipping
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We believe the post-purchase experience should be as seamless as the
            shopping itself.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-gutter max-w-[1024px] mx-auto">
          {/* Delivery */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-surface-variant/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 flex flex-col gap-sm">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-xs">
              <Truck className="text-primary" size={24} strokeWidth={1.5} />
            </div>
            <h2 className="font-h2 text-h2 text-primary">Delivery</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              3-5 business days, carbon-neutral shipping.
            </p>
            <p className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant/30">
              All standard deliveries are fully tracked.
            </p>
          </div>

          {/* Shipping Cost */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-surface-variant/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 flex flex-col gap-sm">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-xs">
              <Banknote className="text-primary" size={24} strokeWidth={1.5} />
            </div>
            <h2 className="font-h2 text-h2 text-primary">Shipping Cost</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Free on all orders over $150.
            </p>
            <p className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant/30">
              Flat rate of $10 for orders under $150.
            </p>
          </div>

          {/* Returns */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-surface-variant/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 flex flex-col gap-sm">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-xs">
              <PackageMinus
                className="text-primary"
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-h2 text-h2 text-primary">Returns</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Easy 30-day returns. No questions asked.
            </p>
            <p className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant/30">
              Items must be unworn and in original packaging.
            </p>
          </div>

          {/* Refunds */}
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-surface-variant/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 flex flex-col gap-sm">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-xs">
              <RefreshCcw
                className="text-primary"
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-h2 text-h2 text-primary">Refunds</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Processed within 48 hours of arrival.
            </p>
            <p className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant/30">
              Funds may take 3-5 days to appear on your statement.
            </p>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
