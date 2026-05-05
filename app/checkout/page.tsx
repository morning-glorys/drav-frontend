import React from "react";
import ProgressIndicator from "@/components/checkout/ProgressIndicator";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import MainLayout from "@/components/layout/MainLayout";

export default function CheckoutPage() {
  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] mx-auto w-full px-4 md:px-gutter py-lg flex flex-col gap-xl">
        {/* Main Checkout Canvas */}
        <div className="flex flex-col lg:flex-row gap-xl">
          {/* Left Column: Forms */}
          <div className="flex-1 flex flex-col gap-lg w-full max-w-2xl">
            <ProgressIndicator />
            <ShippingForm />
            <hr className="border-surface-variant my-sm" />
            <PaymentMethod />
          </div>

          {/* Right Column: Order Summary */}
          <OrderSummary />
        </div>
      </main>
    </MainLayout>
  );
}
