import React from "react";
import Image from "next/image";

export default function Curated() {
  return (
    <section className="py-10 border-t border-zinc-100">
      <h2 className="text-xl font-bold text-zinc-900 mb-6">Curated for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[400px]">
        {/* Large Feature */}
        <a
          className="md:col-span-2 relative group overflow-hidden rounded-xl bg-zinc-100 block h-full min-h-[300px]"
          href="#"
        >
          <Image
            alt="Premium Sneaker"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDChIgx8kGKqQ2Shu7nY42TaFjB4Ov7nK2TPO4PU_5TgqpJbJnfim-2C_799o9WRZusB6gFeoJta_RL5mYXrTJtblhiKPSjjMlL0k2gI7ghYZuMlAHgvDRpWiFT3W29mifIPl7YX52ONkWHcEXjUVyiRQKeJPWB0KoHl6eRXOIuGXEKew3GtX7G2XZqX0C9s8Nu2oiD4xB8bDjnCgO58Dh_2DR-biqx-sSPaCIIz3Ga5oBkNM3kky9sypnybgNSLmxV_xg0bkZKjQJi"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/30 to-transparent">
            <span className="inline-block bg-white text-zinc-900 text-xs font-medium px-3 py-1 rounded-full mb-2 shadow-sm">
              Featured
            </span>
            <h3 className="text-2xl font-bold text-white">
              The Essential Trainer
            </h3>
          </div>
        </a>

        {/* Stacked */}
        <div className="grid grid-rows-2 gap-4 h-full">
          {[
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk45L3kqoKfROS3dcYwcJ3edZxiIVCbkoqZmGM2QWugUzhm_SwVJkWkyq9wPEQnUUM3lbrfu51HG7Z3OJjByGQHa39Ax1wFfjnmKIojgvQ4tg9ALgTxkjVOWKirCkuZ15t7gmdueZCooJppKAeSh78OJKG8HfqG0rHZWBrHKOkMMniE1kmdvltlJSb82JWitqj-E68TENeB-MtMrmLJ6Hm6clG4dwke6EZIGq3Q76revDg3l5JJmPNy8f7mIqM6NlD4VUx08aHtq1u",
              alt: "Wireless Headphones",
              label: "Audio Series 1",
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjRdcjpt-6CNmIL_0aiSCRdJA0JZrqtQBrvaO26ianP-f7BU2IH3TlTBIDZBSP4MEMc1hVoEmDt0XNA0ES4eF93QLV7yJHpYQlGqBkmXkldekLX3eLcvJI30x5JYFm_3zApNIM8jalQJwL3QdG5hsTkwHD_q54YeuHrWuRArkSQMb1T3arpT7yAr8Gj7iEaDTDosmvodNZ8bC1ON8DK4vBPi1yyaBT-msaUO8vxRqKdi5Riizx3HgMra2QJA3MEN-ah-NpodnzI-6s",
              alt: "Ceramic Mug",
              label: "Morning Rituals",
            },
          ].map((item) => (
            <a
              key={item.label}
              className="relative group overflow-hidden rounded-xl bg-zinc-100 block min-h-[180px]"
              href="#"
            >
              <Image
                alt={item.alt}
                src={item.src}
                fill
                className="object-cover p-4 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-sm font-semibold text-zinc-900">
                  {item.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
