import React from "react";
import Image from "next/image";
import { BadgeCheck, Star, StarHalf } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function SellerProfilePage() {
  const sellerProducts = [
    {
      id: 1,
      name: "Matte Ceramic Vase",
      price: 145.0,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCje1bVmAub9qsdgyzKPCeFXXdi_Ou0fer7kdj3cwhUPjBwFlU-NoOJiJesPcBeet6MwjvPIwQamCCc0fx4USonCudIngvh0E4oQ5grlLp4rXy8OscLMtVuzqSGRLvYPCKvmOZ0-e8GYahDBLs2z7yqe_wNVq0uCqlYL8RK0RdF5KhoTM87Z82ACKwSLaw_1am178e2aZQNFM3fICxiYm1NPh-6g89U-HQKk04xSdBFPaQvpRsGkwfApQ13PIFMKEH14Dz5Xfsq5mWb",
    },
    {
      id: 2,
      name: "Odin Lounge Chair",
      price: 890.0,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB9fTdao0PT6jQnJXj6djmcvbi2lrN0HkiTPzImUoT9ZY6gdwZ1yoUEuNsOr5tJuzK-N8Oyhd9Rie3AV29es8uJ9vZc4-OyRLGkSvVoZVAfiRIpkQDzfZF3QmMKShUIq8_OTIvEk0KFdF4fAzuFTbs-tKY9jt67MhkzdZcus4VhSt2GvRz2lbV4Y1hQu3050cz2oV_-oHz7hV6d3i41sljz1SsQlNYBnwcbZi8NCnxVsdWw8WpxbGPOVxQYiaAqAONWJOfnmLzLvKsL",
    },
    {
      id: 3,
      name: "Linear Table Lamp",
      price: 220.0,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcXwEJBDn9IxeyENPK_exPwdCMLP73OnHOcLDUxEg9ufPLBeAmA6tPG07a0k4QV62VpUFv4uo2xujGeLT2UvHTOjFWl8X7Yi19oO-I5vr3FbDGi0wl_1DyVovHuTLIwHQgr1KLu1XK9XSwlejrfjZU5ooUcnMo345H7YuAbrwLTgW5HnuGfG-JDu3abUj4DJnNsmw6iBGgIJOSeVsxZwlOcHbcO8INDJ35L7FBAdbKnjE-9DdYSsdtEwj5ApUKjed2posN1B8BIW_r",
    },
    {
      id: 4,
      name: "Woven Linen Throw",
      price: 110.0,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBR5SQcEtYTVw9WtGP4Trh2W2LCJR490VoJFJfnA9yuRlKgWdfMp3wZeStUovaV0WUgeigb2lA9YUGkpYYSLbB2jjqtpExQmJ3wVLMtul9HIQU2fOp70Xe7WIaxxAwm8dCwXVdK7GAfLZKV6B3tZwGXaEZU2ScexM027Usv0f6ycjl6NCENJXAWMGtoyd_9PLP3B71o9TBOflJD9NcGd3uOrHx0UZJnE6ak1X7X5P1lKs-hR0BYnV0bXkjy9VgYJP9-u_v7bIOU0Jq5",
    },
  ];

  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] mx-auto w-full px-4 md:px-gutter py-lg">
        {/* Seller Profile Header */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-lg mb-xl flex flex-col md:flex-row items-start md:items-center gap-md">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 bg-surface-container-high border border-outline-variant relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYObe9I2GcKTA9-BjGE2tjHKfOQ6BHPBTXBkNnwegUssJsixNiz0G37Klwl85V74WANZxKL9SSh6xkGEa8Wz7Lk6KNtrNdfpTI1E9wVj9rzb628MVeUlOPL9YQkXjjS3RbX21niNUKEBRcpTenJaDamfpbT3izsW3LFS7uXq0z9VNDQADv_UYlTE02KiD4u8rNSUmXI7sxk_yIVneRyrjQnZ2ENl4szkzEE6qxX5v6Y5aOoQpdQuwgtEZP2HWfJb_OvJn8htljNLPF"
              alt="Studio Minimal Avatar"
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-grow">
            <div className="flex items-center gap-sm mb-xs">
              <h1 className="font-h1 text-h1 text-on-surface">
                Studio Minimal
              </h1>
              <div className="flex items-center gap-xs bg-surface-container-high px-sm py-xs rounded-full border border-outline-variant">
                <BadgeCheck size={16} className="text-primary" />
                <span className="font-label text-label text-on-surface uppercase">
                  Verified
                </span>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-sm">
              Curating refined, minimalist objects for the modern home. Focus on
              sustainable materials and timeless silhouettes. Based in
              Copenhagen.
            </p>
            <div className="flex items-center gap-sm">
              <div className="flex text-primary">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <StarHalf size={18} fill="currentColor" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                4.9 (128 Reviews)
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Joined 2021
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="shrink-0 flex flex-col gap-sm w-full md:w-auto mt-md md:mt-0">
            <button className="bg-primary text-on-primary font-label text-label py-sm px-md rounded w-full md:w-auto hover:opacity-90 transition-opacity">
              Follow Seller
            </button>
            <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-label text-label py-sm px-md rounded w-full md:w-auto hover:bg-surface-container transition-colors">
              Contact
            </button>
          </div>
        </section>

        {/* Seller Products Grid */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md border-b border-outline-variant pb-sm gap-4">
            <h2 className="font-h2 text-h2 text-on-surface">
              Curated Collection
            </h2>
            <div className="flex flex-wrap gap-sm">
              <button className="bg-surface-container text-on-surface font-label text-label py-xs px-sm rounded-full hover:bg-surface-container-high transition-colors">
                All
              </button>
              <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-label text-label py-xs px-sm rounded-full hover:bg-surface-container transition-colors">
                Ceramics
              </button>
              <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-label text-label py-xs px-sm rounded-full hover:bg-surface-container transition-colors">
                Furniture
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-lg">
            {sellerProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-high rounded mb-sm overflow-hidden relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-body-lg text-body-lg text-on-surface">
                    {product.name}
                  </h3>
                  <p className="font-price text-price text-on-surface mt-xs">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-lg text-center">
            <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-label text-label py-sm px-lg rounded hover:bg-surface-container transition-colors">
              Load More
            </button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
