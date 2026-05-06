import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

export default function DiscoverPage() {
  const inspirations = [
    {
      id: 1,
      tag: "Outerwear Focus",
      aspectRatio: "aspect-[3/4]",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXkjLkRRm2YBYLV3xbGKBf15vjFVL2D3A1ZyMXRgB-Jtu9Ej6C6FLiD3hdV7HchUG3KyQ9u_CebNMysBA4Yv_najDo-kWruJQUzEneMqGje3MAJ_0XnwNlaHugz5vhlQ_eIcepiJbUlgB7DpOVD7obUMCwyGkPTjkOnCtyJW8RR--H9dnJQzdHMcEK7OLikNOV9H0Ik3u7n1di7nu824H6Xv0c1bCSP_s4dE98ZEpCCYYokTkTNsAs6xIsshLNLnNAMFr-a5fbMOne",
    },
    {
      id: 2,
      tag: "Minimal Accessories",
      aspectRatio: "aspect-[4/5]",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvb1q2-lwwBu7bbOCyGs7Ox8ocJosEOTwBOnqwZ4yTw5oCMIWcblQeEVnAnGwe9UqDpjiJT0TV4hU3hJZGzXDpx0tUh2-C9YRLSnQGluJVQGnOA6JrWJm74XXm590SU_IB1WCxNv8HKmBU22GGF_F9vNk4lnnTNBacxA6EmqBVfi4jUoJmHW_j384aSAdv6_FxhoueykoIEELqKKtmJQN7GcfIqTZlh6t282W_gBJHs0wjeHKdWy7pW2y7HK3TI8HcFgI3UZj086_E",
    },
    {
      id: 3,
      tag: "Everyday Essentials",
      aspectRatio: "aspect-square",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlEBNigH-NPos24fKut955LoLXs4fiC33fohM166eVKcm4dlZsIlEwhqoOhp6onmYoiOLjtZs9vbNNB5GnJ_pvEhKGs548FbkqeOY1M02yaI6_OgsqJSKAwP9Uuq05_k06JtO0nHFqSsgN56FAehiSNr87ygyHIzUC1Lw0-vO-nJRZsAlGJRncl7sfjndacbdlxiq4WR5m92l8mLG65ycydLFcGugsUIVLkz-pZf437nqp8EbKGSE5PBmh0nTjufMSnWyfG3fESgYT",
    },
    {
      id: 4,
      tag: "Leather Goods",
      aspectRatio: "aspect-[4/5]",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvcwdLGINVfJy7fPEXpvb0fDEhMy4JBnxo2QjV_MCXXzyti2XvllQAcJOfcGXf5RMvYTue9H16Rkkgh-UDth5QMiTcUacOA5XnOBxXhRgbEbQiujF0ipDMFicIHAGmFhDMfZ5wvj_zvu9nkx1MvMw4hK_kEpMOoAZPeE19jn_si7Lh9vFGoJVXa3X9wAKhgnlhEMm-xxE5lx5HjaalAL58lOlF_fUoBNarVt4dtunJ0RTkiw2cC7YyaObvNU94c5WlI7u9wGu_B2bh",
    },
    {
      id: 5,
      tag: "Tonal Tailoring",
      aspectRatio: "aspect-[3/4]",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNn-wkdiRbeeOOLPa2Ftt7TZNzKlGD0LnSZOdR-yYV69PCUVPG1PctZp8obsA5vIhU_NJUKM-JfaCw7BcfMONn92L2l-3fOF70XrDuIDmq0Q7_yf9IpAD7FCNjk8H0vxRn6FlgBLpPy_TY4JsuFuICISxojbjh8sj87YIQeg7mE9VSNAcDIILvX6XQC7-wfbV1_Fm-tbVtz4JJ0OXcbXnoKmZpIwB2nX6o6SsXtYp0Riv6zm_z1ahDwSf19gZQ2fBraH78n9vz_rzW",
    },
    {
      id: 6,
      tag: "Texture Detail",
      aspectRatio: "aspect-square",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0-spQYwMoBzWoxlEJJQwE-eE_7shaomr_pIj3sAhgijf-HifCf0_5FDjtNOI7FMhT3lZXosdGOuphpfupb8MCnX__ps4AQt8eH8AY_mCzKumTA7ZsySFmPEP8xJ-i08et9Gnv-3lud96sg40fKsAy9gqPpU7WkuC7cLnBtmNV75m5eA23SVts-JKddtuAXcDv2-CJN77-4VP8seQezTU95fNkC0NLEH1NawU4sVPFpQ8cutqsWEEvx6hKPfoQHUnw8acmwhS8SsF",
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <header className="max-w-[1280px] mx-auto px-4 md:px-gutter pt-xl pb-lg text-center">
        <h1 className="font-h1 text-h1 text-on-surface mb-sm">Discover</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
          Explore curated aesthetics and styling inspiration designed for the
          modern minimalist. Elevate your everyday uniform with intentional
          pieces and effortless silhouettes.
        </p>
      </header>

      {/* Masonry Grid Content */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-gutter pb-xl columns-1 sm:columns-2 lg:columns-3 gap-md space-y-md">
        {inspirations.map((item) => (
          <div
            key={item.id}
            className={`break-inside-avoid relative group cursor-pointer bg-surface-container rounded-lg overflow-hidden ${item.aspectRatio}`}
          >
            <Image
              src={item.imageSrc}
              alt={item.tag}
              fill
              className="object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <button className="bg-surface-container-lowest text-on-surface font-label text-label uppercase px-md py-sm rounded shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:bg-surface-container-high transition-colors">
                Shop this look
              </button>
            </div>
            {/* Bottom Gradient & Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="font-label text-label text-surface-container-lowest uppercase tracking-widest">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </main>
    </MainLayout>
  );
}
