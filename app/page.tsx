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
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC_wc7GQ5qm7roWfrd8U2v1a9s_UZg6xh1OZWcu5XFY8ZmKRPsEyFHu2cAQoGo2_Sd-pQITKdgRTr726PHeq26GwWJ7ulRmyboD8rNNlnjBb8BiyVcyanEXLb4Et6mREzJ7bTheol3FJ0j8ggruCd4S1raiN0n7qBvH9WSk0AR5dmV9opFdW2bq3KhBu28mLs4wVRoOkn8RzKNHmz_oiuMLWHEfsGG02rasXPOGGobiq9g7cuO426MOJMonSLvNTfyjY8lI9ngW0ebG",
      imageAlt: "White t-shirt",
    },
    {
      id: 2,
      title: "Mono Watch",
      price: 185,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQe8QSQaprcKAb0Bx6M5NrxBSjGqEWTl4Zodj1E8hRSuEfgwQXVAWLe24GyN6sSYrmfD3cL0VxfojSQ-7bvMVd7jYXy_XQLvWhpBJzKQsf8GBCJkTQZ8xGOsxw_UshmGIV_1leUwZzHuQ9_7_o-y-If1AHD0GapJIsWbRpd-pj15AG1Zc1GKUtgzjgXBw4bew20qlpHrDkuTlnFjK1Ao0UTImv4CSoCXcWACpPnsbIsaozmwuI0Iab0rgh34hzON8A2Mi92s-wgzp9",
      imageAlt: "Minimalist watch",
    },
    {
      id: 3,
      title: "Studio Tote",
      price: 320,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-rFzlvFCuOhIcOL9eoXQjdEsf2c66i9gpMWoQ0XODHLOb-9QwnKF8OUPQbm4CCPLubKLzgjHMbS2e7-AVAFMDb1iYV7gZ-boo7KszKMrjQaok19GBqHHJNTDjx1TlXcmHkTzaxgPO8_sDPtCvBbe5G53boFaRQIhLEAs6lNUHhfDo2nG4H4PgrF7w_jT55Fct8Gj_P1g6Gtg4iXr1EIJqGD0GaQ75kJlz8msVGqkEB7-sDBXOqjmX6xqVmF_UF_Z_9EQ-Qkc7cCAa",
      imageAlt: "Leather tote bag",
    },
    {
      id: 4,
      title: "Eclipse Frames",
      price: 150,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZF8In06YP9qghY59OaS1c1dEbBfoGP5pitCSdHTGVhoAMQ-Ucr9PX_ICf9imA55tCWqCvFfajp-FEUZvIOdIu1Migj2CTm7ZWhhvnC0ndtUokxOSJyHzNtt6Fvv4uWjC4M6Aj2Ps-uJ_DOQv9GDmbppYEeqgIUeOvOlZnEB4g2258xCUL5p0GTkSISh76tG0zqmPxR9TzvMVB38j1dHhJ3H3tzFu7ohrq4NRTx6eI1xBacCdTnPDszUqwP8erpSTvLUY6YZoBLZWR",
      imageAlt: "Sunglasses",
    },
  ];

  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-4 md:px-gutter py-xl flex flex-col gap-xl">
        {/* Welcome & AI Search Section */}
        <section className="flex flex-col items-center text-center gap-md py-lg">
          <h1 className="font-h1 text-h1 text-on-surface max-w-[672px]">
            Curated just for you.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px]">
            Discover minimalist essentials tailored to your unique style
            profile.
          </p>

          {/* Form Search dengan style persis Google Stitch */}
          <div className="w-full max-w-[448px] mt-sm relative flex items-center">
            <Search
              size={20}
              strokeWidth={1.5}
              className="absolute left-sm ml-xs text-on-surface-variant pointer-events-none"
            />
            <input
              className="w-full bg-zinc-100 text-zinc-900 text-sm rounded-full py-3.5 pl-12 pr-28 focus:bg-white focus:ring-1 focus:ring-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-400"
              type="text"
              placeholder="Search for anything..."
            />
          </div>
        </section>

        {/* "For You" Section (Bento Grid) */}
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
            {/* Large Feature Item */}
            <Link href="#" className="group md:col-span-2 flex flex-col gap-2">
              <div className="aspect-[4/3] w-full bg-surface-container-high rounded-lg overflow-hidden relative isolate">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHX9E5duLX157lDaSIUtP18sPsGA-_-rCsABDclh7yxoNoKe_lkYTSZkG6jTEn6x-jhgrOaCKC66H8d7nFiUoiaUDlzBXFbuJqABZqNbqo1X9ivsH6RrwiHxLPB64dqlTeinACknpCEAPbTpwz3N873gZ3Ej8lr_KRuPh3ioKyXv1hRWR3tI9pa9Y_9TvAgDclczu6AylgtgG4g25aMk7Wyr90IxgI2VYi7xuGH06Bs557yy6OaxZ85zGgm_S4-boFUporZzKkLdvB"
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

            {/* Two Smaller Items Stacked */}
            <div className="flex flex-col gap-gutter">
              <Link href="#" className="group flex flex-col gap-2 flex-1">
                <div className="aspect-square w-full bg-surface-container-high rounded-lg overflow-hidden relative isolate">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWOtff1bgN9AVvffOBcp5DOKedYC0sJadw1VxIAwOEoD4HPZxEaI24fiXWiqRHwnvags6PSRPwdHrhcbh9CWaLq3OpetOtL1Fz6A2vh_iV6ZxIE8DKZ3c3SOGBNh4bqXyTDENuGzQqFfw-PGUB03aPipkbNMooHzkIUwKpkQPAh9zTeHiUCyAjwiSu2AF33hYCnnk_58BNs1AIexOK0xtkFqcR0W3t82PjGQBfaFKnv4PBFj0SbYZ_6aJSJQogEbSwD9CGrpcqYTp2"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_O5EKOLXmFDtCEHBfyIc9zvICVPOQbPL6JfzHUB6mlTuNrTC6_iHqVnHMEXkBcvETZOxsjDxTmfL_sZudxTh8kys3n8Td9FLsKoMfSBIexNn5A-QbCkheG9Cqs0pYe6f0iRv3jr1XkjBPso1tXoXn9iOiacB_plRQVvh8BSBqWQi-bCk_8ATGrdtBA1EoRGSuqbl9MRJpHvtSK3wPZy6FHNvKdt6XIyrBE4on5iPGNfH5fj8TFGf-oxfKpo1bD7KswBWfysNtLffn"
                    alt="Denim jeans close up"
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
