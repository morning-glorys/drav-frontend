"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0bsb6LWFjr7iDE9r8OJu4yUwxAja9R0NcM6yqVZ33n_MtsAoc3M-7azJABtMLsBR7MPSMGACIGvERGVOpWmC3W9DEbuOmakacacTpbBglp_lfr6ERumuMTu8_6kT3IY5BrEkf0IIQWrH8apFdRJI9AqgurXtBURJBujhs8XoYY3v7cITTlMxgTs-Mp4rRdZ8hGaf8qSFZ9y2csBkek30XdWS5JRxpIgfLDvQKlustUBIr25QTW9YL7ZYD6kBIUics2OUyGbEmEl00",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWmf9IUOdFl9m5qjlYN2P2vxZGLnXP_HFrW0W5wrocW9KqzYKOnPIT4V-4M7Tw4uGuYH5RMbnodmmlrDfHvFs4w8ndLq0yVO9o29tbeo81rwRA8gzLr9xWuS5y5X38Rbxx3-8kObywWrLb9AR67ISWg42PGLnkH3rwVSZWVgI6dfS7yNM3eBOjbjLRk7w1RwI2UKE28UQCp8UXqUI9O5LuS_BPlTGxFP9PmUzxqjYB11lzG5vxR7pvyVwfmBmf1GTL1NH00rgVNwki",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuARBeziomkL9YIM_mSid9edO-wJFq_noTPImhYoToALZEnN4nPH8DxclkchTuy6bADkYGDGUiXGnD-fGbJu31LNjnGFYtSml9q9wsua2OwxQNoBJtweZtame9QkpQTlFMJ1U0mYBMUxWqbEIFEiICJrN-QbdTZeCZBKu834tse0ipUgI_t_tSfpvMu3vnF5j7VCZs4nTs34fav3T4s3W7jvE1NgNSMOAWnoJDJnNTjMJaX7JFfjRtPmr7GJb8x3fbgpxorFXBk-GRZL",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0g5_u9NLjyGvn8or828YyyjJ0FolTtZvyXNiaprZoTxqeEhYm483LjBERQjCWIYTCzAD1HfY3n0Y4gbcRMPaJlTyoPJnicGmt7MQ3ctditnrOe1k7JsEsMPeeDiShP0D-wMXReXR7dDNtONZey4yYXHWipJ0ygQZPPSVeTBuKG1mf6FBngK0-ogpCkPcKJWgb5TaGyY_FUQcfRoxVIQn0iskOmZni4b_ECHsP1T7CNzb6NMkqg-WUqK-81aJDkR-xMIGd-TOj1hGg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBYpCD7QiU4s-Cpzo_wO3hJTfmbOSndjM2j8UVtx7o4WJitFueQ8dsZaBop3eaXmDG6GVyUeFmKKh6KqlDztKlGlS7NgsaHvM2FqrzPLx5V-RMVN4_86e341bglXF_VGeFxOnUjk_8wQF0mfVPaJVRgTNz6PFMec3vJsb_fxGQyzHUKsWXYF6If7NXn8Nc8TqnrU9NbYIYjIQQ0GDA7YYV6ZqEy2AXRpqqNzvTVypOgdek9RqaB9YMqgYw_5zkJMbkPf1SwTAcli_lT",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex-1 flex flex-col gap-sm">
      {/* Main Hero Image */}
      <div className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden rounded-sm relative group cursor-crosshair">
        <Image
          src={images[activeIndex]}
          alt="Minimalist Cotton Hoodie"
          fill
          priority
          className="object-cover mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-sm">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`aspect-square bg-surface-container-low rounded-sm overflow-hidden relative cursor-pointer transition-opacity ${activeIndex === idx ? "ring-2 ring-primary opacity-100" : "opacity-50 hover:opacity-100"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover mix-blend-multiply"
              sizes="(max-width: 768px) 20vw, 10vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
