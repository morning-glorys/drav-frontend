"use client";

import React, { useState } from "react";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<"credit_card" | "paypal">(
    "credit_card",
  );
  const inputClass =
    "w-full bg-surface-container-lowest focus:bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-0 outline-none px-sm py-sm rounded text-body-lg font-body-lg text-on-surface transition-colors";

  return (
    <section className="flex flex-col gap-md">
      <div>
        <h2 className="font-h2 text-h2 text-primary">Payment Method</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className="flex flex-col gap-sm">
        {/* Credit Card Option */}
        <label
          className={`relative flex items-center p-md border rounded-lg cursor-pointer transition-colors ${paymentMethod === "credit_card" ? "border-primary bg-surface-container-lowest" : "border-surface-variant bg-surface-container-lowest hover:bg-surface-container-low"}`}
        >
          <input
            type="radio"
            name="payment"
            className="text-primary focus:ring-primary h-4 w-4 cursor-pointer"
            checked={paymentMethod === "credit_card"}
            onChange={() => setPaymentMethod("credit_card")}
          />
          <div className="ml-sm flex-grow flex justify-between items-center">
            <span
              className={`font-body-lg text-body-lg ${paymentMethod === "credit_card" ? "text-on-surface font-medium" : "text-on-surface"}`}
            >
              Credit Card
            </span>
            <span className="material-symbols-outlined text-on-surface-variant">
              credit_card
            </span>
          </div>
        </label>

        {/* Credit Card Sub-form (Muncul jika dipilih) */}
        {paymentMethod === "credit_card" && (
          <div className="bg-surface-container-low p-md rounded-lg flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label text-label text-on-surface uppercase">
                Card Number
              </label>
              <input
                className={inputClass}
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label text-label text-on-surface uppercase">
                  Expiration (MM/YY)
                </label>
                <input className={inputClass} placeholder="12/25" type="text" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label text-label text-on-surface uppercase">
                  Security Code
                </label>
                <input className={inputClass} placeholder="123" type="text" />
              </div>
            </div>
          </div>
        )}

        {/* PayPal Option */}
        <label
          className={`relative flex items-center p-md border rounded-lg cursor-pointer transition-colors ${paymentMethod === "paypal" ? "border-primary bg-surface-container-lowest" : "border-surface-variant bg-surface-container-lowest hover:bg-surface-container-low"}`}
        >
          <input
            type="radio"
            name="payment"
            className="text-primary focus:ring-primary h-4 w-4 cursor-pointer"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          <div className="ml-sm flex-grow flex justify-between items-center">
            <span
              className={`font-body-lg text-body-lg ${paymentMethod === "paypal" ? "text-on-surface font-medium" : "text-on-surface"}`}
            >
              PayPal
            </span>
            <span className="material-symbols-outlined text-on-surface-variant">
              account_balance_wallet
            </span>
          </div>
        </label>
      </div>
    </section>
  );
}
