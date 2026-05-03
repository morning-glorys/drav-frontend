import React from "react";
import Image from "next/image";

export default function Curated() {
  return (
    <section className="py-lg border-t border-surface-variant">
      <div className="flex justify-between items-end mb-lg">
        <h2 className="font-h2 text-h2 text-on-surface">Curated for You</h2>
      </div>
      {/* Container utama Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter min-h-[400px]">
        {/* Large Feature (Sneaker) */}
        <a
          className="md:col-span-2 relative group overflow-hidden rounded-lg bg-surface-container-low block h-full min-h-[300px]"
          href="#"
        >
          {/* Ubah ke layout="fill" atau cukup tambahkan properti fill */}
          <Image
            alt="Premium Sneaker"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDChIgx8kGKqQ2Shu7nY42TaFjB4Ov7nK2TPO4PU_5TgqpJbJnfim-2C_799o9WRZusB6gFeoJta_RL5mYXrTJtblhiKPSjjMlL0k2gI7ghYZuMlAHgvDRpWiFT3W29mifIPl7YX52ONkWHcEXjUVyiRQKeJPWB0KoHl6eRXOIuGXEKew3GtX7G2XZqX0C9s8Nu2oiD4xB8bDjnCgO58Dh_2DR-biqx-sSPaCIIz3Ga5oBkNM3kky9sypnybgNSLmxV_xg0bkZKjQJi"
            fill
            className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute bottom-0 left-0 p-lg w-full bg-gradient-to-t from-black/20 to-transparent">
            <span className="inline-block bg-surface-container-lowest text-on-surface font-label text-label px-sm py-xs rounded-full mb-base shadow-sm">
              Featured
            </span>
            <h3 className="font-h2 text-h2 text-surface-container-lowest">
              The Essential Trainer
            </h3>
          </div>
        </a>

        {/* Stacked Features */}
        <div className="grid grid-rows-2 gap-gutter h-full">
          {/* Headphones */}
          <a
            className="relative group overflow-hidden rounded-lg bg-surface-container-low block min-h-[180px]"
            href="#"
          >
            <Image
              alt="Wireless Headphones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk45L3kqoKfROS3dcYwcJ3edZxiIVCbkoqZmGM2QWugUzhm_SwVJkWkyq9wPEQnUUM3lbrfu51HG7Z3OJjByGQHa39Ax1wFfjnmKIojgvQ4tg9ALgTxkjVOWKirCkuZ15t7gmdueZCooJppKAeSh78OJKG8HfqG0rHZWBrHKOkMMniE1kmdvltlJSb82JWitqj-E68TENeB-MtMrmLJ6Hm6clG4dwke6EZIGq3Q76revDg3l5JJmPNy8f7mIqM6NlD4VUx08aHtq1u"
              fill
              className="object-cover mix-blend-multiply p-4 sm:p-8 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 p-md z-10">
              <h3 className="font-body-lg text-body-lg font-medium text-on-surface">
                Audio Series 1
              </h3>
            </div>
          </a>
          {/* Mug */}
          <a
            className="relative group overflow-hidden rounded-lg bg-surface-container-low block min-h-[180px]"
            href="#"
          >
            <Image
              alt="Ceramic Mug"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRdcjpt-6CNmIL_0aiSCRdJA0JZrqtQBrvaO26ianP-f7BU2IH3TlTBIDZBSP4MEMc1hVoEmDt0XNA0ES4eF93QLV7yJHpYQlGqBkmXkldekLX3eLcvJI30x5JYFm_3zApNIM8jalQJwL3QdG5hsTkwHD_q54YeuHrWuRArkSQMb1T3arpT7yAr8Gj7iEaDTDosmvodNZ8bC1ON8DK4vBPi1yyaBT-msaUO8vxRqKdi5Riizx3HgMra2QJA3MEN-ah-NpodnzI-6s"
              fill
              className="object-cover mix-blend-multiply p-4 sm:p-8 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 p-md z-10">
              <h3 className="font-body-lg text-body-lg font-medium text-on-surface">
                Morning Rituals
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
