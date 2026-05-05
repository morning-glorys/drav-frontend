import React from "react";

export default function ShippingForm() {
  const inputClass =
    "w-full bg-surface-container-low focus:bg-surface-container-lowest border border-transparent focus:border-primary focus:ring-0 outline-none px-sm py-sm rounded text-body-lg font-body-lg text-on-surface transition-colors";

  return (
    <section className="flex flex-col gap-md">
      <h1 className="font-h2 text-h2 text-primary">Shipping Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="flex flex-col gap-xs">
          <label className="font-label text-label text-on-surface uppercase">
            Email Address
          </label>
          <input
            className={inputClass}
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label text-label text-on-surface uppercase">
            Phone Number
          </label>
          <input
            className={inputClass}
            placeholder="+1 (555) 000-0000"
            type="tel"
          />
        </div>
        <div className="flex flex-col gap-xs sm:col-span-2">
          <label className="font-label text-label text-on-surface uppercase">
            Full Name
          </label>
          <input className={inputClass} placeholder="John Doe" type="text" />
        </div>
        <div className="flex flex-col gap-xs sm:col-span-2">
          <label className="font-label text-label text-on-surface uppercase">
            Street Address
          </label>
          <input
            className={inputClass}
            placeholder="123 Luxury Ave, Apt 4B"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label text-label text-on-surface uppercase">
            City
          </label>
          <input className={inputClass} placeholder="New York" type="text" />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label text-label text-on-surface uppercase">
            Postal Code
          </label>
          <input className={inputClass} placeholder="10001" type="text" />
        </div>
      </div>
    </section>
  );
}
