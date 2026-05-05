"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function CartPage() {
  // Simulasi data state cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhoRieEu7aN5t8E8OxQodBjh-UnNvvUfnSx2VK3WF1S9tA56001MuWKkzwgcyuhmavq1bRYFEago6cECUOFGAn3tLuKL6UbnXlSVxc7boOXn55OvEEGgRNf44XAYAeJ1Y0qyy97nZw0h3iI4XG2Cy722m79MLNspq0DzBqOizIhXhv36-77NvSg3HSOHCJPAaIXXrMJYFOUmPr3VGyz0UUNcD0N4ev6RSzkLs9hDokFLNO_OFTwKRe9MIZN3qk97vhosPEIysSRJ8U",
      title: "Obsidian Ceramic Vase",
      color: "Matte Black",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdJ3Uf2t0dQphUFwfzwxYbXgNkptbviwJ-5TMnwm7FPrehXcmKP6kmaq77ZdH0guMPQB9orXWA4KSaZ9EYJgK31eFO5uQlPIUihB2eoMXKCJmalxgUR61ksUmNe25NrB7Y64suYOXN_Yxnfy6E4z6SVELukKJSLx2HwsPgKe6duQyapzNhuanQ7fKXEuC0No45RRcPHioDRWP_JBBNxDkKRdQHboErxR5BkH2gfAljEsceP_dELgjYDlnSJSPEOIxgIjF7bU7l5K1h",
      title: "Signature Leather Journal",
      color: "Stone",
      price: 45,
      quantity: 2,
    },
  ]);

  // Fungsi untuk update quantity
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  // Fungsi untuk hapus item
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-gutter py-xl min-h-[60vh]">
        <h1 className="font-h1 text-h1 text-on-surface mb-lg">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-xl">
            {/* Left Column: Cart Items */}
            <div className="flex-1 flex flex-col gap-lg w-full">
              <div className="hidden sm:grid grid-cols-12 gap-4 pb-sm border-b border-surface-variant font-label text-label uppercase tracking-widest text-on-surface-variant">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center py-4 border-b border-surface-variant last:border-0"
                >
                  {/* Product Details */}
                  <div className="col-span-1 sm:col-span-6 flex items-center gap-md">
                    <div className="w-24 aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden relative flex-shrink-0">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/product/${item.id}`}
                        className="font-body-lg text-body-lg text-on-surface font-medium hover:underline underline-offset-4"
                      >
                        {item.title}
                      </Link>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Color: {item.color}
                      </span>
                      <span className="font-price text-price text-on-surface mt-2 sm:hidden">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center items-center mt-2 sm:mt-0">
                    <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-body-lg text-body-lg text-on-surface w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="col-span-1 sm:col-span-2 text-left sm:text-right hidden sm:block font-price text-price text-on-surface">
                    ${item.price * item.quantity}
                  </div>

                  {/* Remove Button */}
                  <div className="col-span-1 flex justify-end absolute sm:relative right-4 sm:right-0 mt-[-80px] sm:mt-0">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-outline hover:text-error transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <X size={20} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary */}
            <aside className="w-full lg:w-[380px] flex-shrink-0">
              <div className="sticky top-24 bg-surface-container-low p-lg rounded-xl flex flex-col gap-md border border-surface-variant">
                <h2 className="font-h2 text-h2 text-on-surface mb-2">
                  Summary
                </h2>

                <div className="flex justify-between items-center font-body-lg text-body-lg text-on-surface-variant border-b border-outline-variant pb-md">
                  <span>Subtotal</span>
                  <span className="font-price text-on-surface">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Shipping and taxes calculated at checkout.
                </p>

                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-body-lg text-body-lg py-4 rounded-lg hover:opacity-90 transition-opacity mt-sm"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} strokeWidth={2} />
                </Link>

                <Link
                  href="/search"
                  className="text-center font-body-sm text-body-sm text-on-surface hover:text-surface-tint underline underline-offset-4 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-xl text-center">
            <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-md text-outline">
              <ShoppingBag size={48} strokeWidth={1} />
            </div>
            <h2 className="font-h2 text-h2 text-on-surface mb-2">
              Your cart is empty
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-md">
              {`Looks like you haven't added anything to your cart yet. Discover
              our premium collections to find your essentials.`}
            </p>
            <Link
              href="/search"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body-lg hover:opacity-90 transition-opacity"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </main>
    </MainLayout>
  );
}
