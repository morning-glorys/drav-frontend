import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  const activityProducts = [
    {
      id: 1,
      title: "Heavyweight Tee",
      price: 45,
      imageSrc:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      imageAlt: "White t-shirt",
    },
    {
      id: 2,
      title: "Mono Watch",
      price: 185,
      imageSrc:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Minimalist watch",
    },
    {
      id: 3,
      title: "Studio Tote",
      price: 320,
      imageSrc:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Leather tote bag",
    },
    {
      id: 4,
      title: "Eclipse Frames",
      price: 150,
      imageSrc:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Sunglasses",
    },
  ];

  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-4 md:px-gutter py-xl flex flex-col gap-xl">
        {/* Welcome & AI Search Section */}
        <section className="flex flex-col items-center text-center gap-md py-lg">
          {/* FIX: Ubah ke ukuran px pasti */}
          <h1 className="font-h1 text-h1 text-on-surface max-w-[672px]">
            Curated just for you.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px]">
            Discover minimalist essentials tailored to your unique style
            profile.
          </p>
          <div className="w-full max-w-[448px] mt-sm relative flex items-center">
            <Search
              size={20}
              strokeWidth={1.5}
              className="absolute left-4 text-on-surface-variant pointer-events-none"
            />
            <input
              className="w-full bg-surface-container-high border border-transparent rounded-lg py-3 pr-4 pl-12 text-on-surface font-body-lg text-body-lg focus:bg-surface-container-lowest focus:border-outline focus:ring-0 outline-none transition-all duration-300 placeholder:text-on-surface-variant"
              placeholder="Search for anything..."
              type="text"
            />
          </div>
        </section>

        {/* "For You" Section */}
        <section className="flex flex-col gap-lg">
          <div className="flex justify-between items-end border-b border-surface-variant pb-2">
            <h2 className="font-h2 text-h2 text-on-surface">For you</h2>
            <Link
              href="/search"
              className="font-label text-label text-on-surface-variant hover:text-primary transition-colors"
            >
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <Link href="#" className="group md:col-span-2 flex flex-col gap-2">
              <div className="aspect-[4/3] w-full bg-surface-container-high rounded-lg overflow-hidden relative isolate">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                  alt="Minimalist clothing flatlay"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="font-body-lg text-body-lg text-on-surface font-medium">
                    The Linen Collection
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Breathable essentials.
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-gutter">
              <Link href="#" className="group flex flex-col gap-2 flex-1">
                <div className="aspect-square w-full bg-surface-container-high rounded-lg overflow-hidden relative isolate">
                  <Image
                    src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?q=80&w=800&auto=format&fit=crop"
                    alt="Ceramic vase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-label text-[10px] tracking-widest font-semibold text-on-surface">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mt-1">
                  <h3 className="font-body-lg text-body-lg text-on-surface">
                    Structural Vase
                  </h3>
                  <span className="font-price text-price text-on-surface">
                    $120
                  </span>
                </div>
              </Link>

              <Link href="#" className="group flex flex-col gap-2 flex-1">
                <div className="aspect-square w-full bg-surface-container-high rounded-lg overflow-hidden relative isolate">
                  <Image
                    src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop"
                    alt="Denim jeans"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start mt-1">
                  <h3 className="font-body-lg text-body-lg text-on-surface">
                    Raw Denim Core
                  </h3>
                  <span className="font-price text-price text-on-surface">
                    $210
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Based on your activity */}
        <section className="flex flex-col gap-lg pt-xl">
          <div className="flex justify-between items-end border-b border-surface-variant pb-2">
            <h2 className="font-h2 text-h2 text-on-surface">
              Based on your activity
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {activityProducts.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
