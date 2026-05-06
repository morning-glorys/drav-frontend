import React from "react";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: "Ceramic Form Vase",
      color: "Matte White",
      price: 145,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQSHD7xpjg-ZwLFLm6QmgDmKiX66cumSr9rjX4eWAqKBAGqlcsP2erzcjCIbCmWjDup1jX1cfuZHAkMiBvgM4lU9JLFhnhYj4BskK05-FZ-LQ3XnUZV--rGh8JKKH1reCyxPsAkRID5Pnv3bNR-c01uKsL9B2rjS2ZUENmEAAt2OqnQ-tQcKqfoOG6GIWL-IyXl2MwatfGw9CmSh0rvctrnW1pYmjjPJFtq035sbftE7RYKhS0ldkL2sUhgr9mVZ0gTDODt8c_QaSG",
    },
    {
      id: 2,
      name: "Architect Lounge Chair",
      color: "Black Leather",
      price: 1250,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbwhbRsIPZ1HWaflF5b_zOI91-2I-CFR3tkUbGUlndgGqMlashbcp9De92sV6h8ItScOECQexbzqE4A-DEi80uPeiT9KLJ72SMeCGw9YRWSYqJuvZCqHseTWQSpwpMAg2uxkfF7nfyjbGgWexg_cFflu6mmfgOsvrr-SCxzxNv3v8sa1zBp8x91365USmb5gvJpwgVFUTUt0tF3DEXjibJdp0vaOEzdPwenQc-KvW64OaihcBS4mO87QoWwrVvVFTIMNczqQjKzo6p",
    },
    {
      id: 3,
      name: "Linear Task Lamp",
      color: "Brushed Steel",
      price: 280,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASTXGke0J7GIrD8KDes6Qk_Dr6kI70c4HKDAOdVmWhx7qCsLorNmnGoPDz_cypJtNMf-tkQMx1H0S0vC-A-j67MYpDm7mnGW3q4_cn6mRfSXTbMnDOTLw9LsuoJqDfV1nI7VtXftgmYfDOL6OWOG8iqxUNw_3SFYMRW91Pcb5E34qncQDqB48IFX532lB0lYkQZvThGe7TbtemtfoMTuVawAQLwuotwn0wbpfcW7ssxHz0gOl5xwRvmrixpwQ0mcW4IL-TPVKj7mZf",
    },
    {
      id: 4,
      name: "Artisan Tea Cup",
      color: "Charcoal Glaze",
      price: 45,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC6t_9YmGSOU_5LoGL2xTd-T0IxhF69qmGzis7vR4BBeZlZXcCE9cFePNjXnarXE-vv5WeVcN68USl94gipXlLmgVE8QCtY4bH8oeZit-bumngofRNPuTJC1S3bIZlKngLEBCL4xz4iD0I7vHcDHGMtLBDqcBvTf8-4akI0UsPGJzyZ3Ir_kDgGz0jZuoqSmxaNT1_uNN-O2_9HrIWqLK-On_ywoej-iDxxZottpmk9-WL2K5AcV6HzeGR_nXcdS4ZHVu_hs0Ucu0UQ",
    },
  ];

  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] mx-auto w-full px-4 md:px-8 py-xl min-h-[70vh]">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-xl text-center">
          <h1 className="font-h1 text-h1 text-on-surface mb-xs">
            Your Wishlist
          </h1>
          {/* FIX: Ubah max-w-md menjadi max-w-[480px] agar tidak menabrak spacing scale */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
            Curated pieces saved for later. Review your selections or move them
            to your cart.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-lg">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group flex flex-col relative">
              <button
                aria-label="Remove from wishlist"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full text-on-surface transition-colors shadow-sm"
              >
                <X size={18} strokeWidth={2} />
              </button>
              <div className="bg-surface-container-high aspect-[3/4] relative overflow-hidden mb-sm flex items-center justify-center">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-xs flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-body-lg text-body-lg text-on-surface">
                    {item.name}
                  </h3>
                  <span className="font-price text-price text-on-surface">
                    ${item.price}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.color}
                </p>
              </div>
              <button className="mt-base w-full bg-primary text-on-primary py-3 rounded hover:opacity-90 transition-opacity font-label text-label uppercase tracking-widest flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
