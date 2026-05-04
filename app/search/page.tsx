import React from "react";
import SearchHeader from "@/components/search/SearchHeader";
import FilterSidebar from "@/components/search/FilterSideBar";
import ProductCard from "@/components/ui/ProductCard";

const searchResults = [
  {
    id: 1,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_60sa1tZuqjb_uuh2-n0aqNcJUBVNhBnPQ5jlkjbA2PGdTMletWt_iAjfYXZu89JKSGJ9_ZHBE7EyixHuahN1qIJVe0ibD6Yut_SZO5HDsof8wsK29v3q-ABXg5ermc5mpd_p8OStMrtzKaUVqd_mTrWRat_LHCkUCNSS5Lu3ybEONERDaxdWVc2dRvvBXF44k9Z85AJSYr_U3F_xGhDowqQpGe4GaJ4bWhM3ywMEG7jll9FpFTf-Ttc7cFm4GPMrK11hEU3rfb3r",
    imageAlt: "Essential Heavyweight Hoodie",
    title: "Essential Heavyweight Hoodie",
    subtitle: "100% Organic Cotton",
    price: 145,
  },
  {
    id: 2,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb7r4ZRGZgh7A8nLgFG3cZPr3MxEIltPb3cn2Oz8Df3NajPi0L5RMWdDazYlj4fR0BCM-7YG8D-qcBDY_ZL4OxT1WuGz34njJUer_5AfGdSyugzqsWtjzsrpucY4Po8oF1THxK1ujWrn_xMxHqfFVoJGISSMu3wxir-KLJ6ifEwx3VR_ZiTYv6BFNM6htAfIsp0FNctgyrSYW-izKHvQjA5KmaNDDv81vUqUH1Nmyklq0YeKMXE5uFtU0pWImSi2hG9KWw3op4LqZf",
    imageAlt: "Tech-Knit Pullover",
    title: "Tech-Knit Pullover",
    subtitle: "Merino Blend",
    price: 185,
  },
  {
    id: 3,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7f1Av5x7CH2_cQrp49ud0pzOvJJ_W-eTsU3So_e5V6ehyFkqbCNicH0Ix_Lcz2NtTm9KcglvymVvnYo6oT8eZ4SlL6ozJIrTi-Ob5XiMBggR5xgtA3Z9HjaVq7lD9XUARfrksFGGzjbh3wWtUzWOuu8vqFFsVWzcziN7w0tMhzstzfIgq4DSX6h03NmGhuGDdkXFzEnx0VnTQQ6mXn0q73hN7FBBiatlSqt4T63OpBD0BBtPvw5t5JTNC1TsaMR1kC7WPFaJR8Tk5",
    imageAlt: "Structured Zip Hoodie",
    title: "Structured Zip Hoodie",
    subtitle: "Japanese French Terry",
    price: 195,
  },
  {
    id: 4,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIlY9zk4PSqZY8wvAxAAruv4Ixbko_aGty308oBGLRyUwCa55vhne15UQ7SOYR8axOhCo-SN6QJ-5e20kMtaiIpmbLejRaPN6ESdN3m_4BD94bWrH1r77dvxPxl_pflHlHDUIDh014_E-sxeNuHKMA_zaBmpjSG6UJtSLoafaqquNFR9FTLsjLm3rT9F9lXnr1wLLP3tIWB25Tg99OLIG5dmtT2uE6an4VHq12TgBpRaLVSaFY4kk-hHrgVKvyLmeBmbiFibO0tSP6",
    imageAlt: "Oversized Lounge Hoodie",
    title: "Oversized Lounge Hoodie",
    subtitle: "Brushed Cotton",
    price: 120,
  },
];

export default function SearchPage() {
  return (
    <main className="max-w-[7xl] mx-auto px-4 md:px-8 py-8 md:py-12">
      <SearchHeader />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <FilterSidebar />
        <div className="col-span-1 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
