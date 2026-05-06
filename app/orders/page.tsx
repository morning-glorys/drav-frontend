import React from "react";
import Image from "next/image";
import { CheckCircle2, RotateCcw } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";

export default function OrdersPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-xl grid grid-cols-1 md:grid-cols-12 gap-gutter min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <AccountSidebar />

        {/* Main Orders Content */}
        <section className="md:col-span-9">
          <header className="mb-lg">
            <h1 className="font-h1 text-h1 text-primary mb-xs">
              Order History
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Track recent shipments and review your past purchases.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-lg">
            {/* Active Order Tracking (Bento/Card) */}
            <div>
              <h2 className="font-h2 text-h2 text-primary mb-md">
                Active Order
              </h2>
              <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-md lg:p-lg flex flex-col md:flex-row gap-lg">
                {/* Order Summary */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-md">
                    <div>
                      <span className="font-label text-label text-on-surface-variant uppercase tracking-wider block mb-xs">
                        Order #LX-8492
                      </span>
                      <h3 className="font-body-lg text-body-lg font-semibold text-primary">
                        Arriving Tomorrow
                      </h3>
                    </div>
                    <span className="bg-surface-container-high text-primary font-label text-label px-sm py-xs rounded-full inline-block">
                      In Transit
                    </span>
                  </div>
                  <div className="flex items-center gap-md mb-md">
                    <div className="w-24 h-24 bg-surface-container-low rounded shrink-0 relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMEnPWaOGciGoKlANvNiwO1rCZw_DGRA58XXfHscnRvoUSFRUW83KbZeKh2l8x0xH2HQTNdy4IovnzQJdQq_ravCzSW8irm2GM2zOY-tXyWg3aJWB1MtwKGdMdF7RC3fpeEEnXTYTET6ZDaW2i4JuVxY00qfp6rsdhNCpTLZIA25UFz0KBa1IVO4SNyPBkBRfqF3dA8vH_qv8pZnTdmK9kyivrsm0qfGVzKy-lT8_uHN_RR9JSSP4NlG4j07RwBKVaDqeZkFBcYEqC"
                        alt="Minimalist Tote Bag"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-primary mb-xs">
                        Minimalist Tote Bag
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">
                        Taupe Leather
                      </p>
                      <p className="font-price text-price text-primary">
                        $345.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="flex-1 md:border-l md:border-surface-variant md:pl-lg">
                  <h4 className="font-body-sm text-body-sm font-semibold text-primary mb-md">
                    Tracking Progress
                  </h4>
                  <div className="relative border-l border-surface-variant ml-xs space-y-md">
                    <div className="relative pl-md">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
                      <p className="font-label text-label text-on-surface-variant mb-1">
                        Oct 24, 09:41 AM
                      </p>
                      <p className="font-body-sm text-body-sm text-primary">
                        Out for delivery
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-sm">
                        New York, NY
                      </p>
                    </div>
                    <div className="relative pl-md">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
                      <p className="font-label text-label text-on-surface-variant mb-1">
                        Oct 23, 08:15 PM
                      </p>
                      <p className="font-body-sm text-body-sm text-primary">
                        Arrived at local facility
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-sm">
                        New Jersey Sorting Center
                      </p>
                    </div>
                    <div className="relative pl-md">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
                      <p className="font-label text-label text-on-surface-variant mb-1">
                        Oct 22, 11:30 AM
                      </p>
                      <p className="font-body-sm text-body-sm text-primary">
                        Package shipped
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-sm">
                        Los Angeles, CA
                      </p>
                    </div>
                    <div className="relative pl-md pb-xs">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
                      <p className="font-label text-label text-on-surface-variant mb-1">
                        Oct 21, 02:20 PM
                      </p>
                      <p className="font-body-sm text-body-sm text-primary">
                        Order confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Orders List */}
            <div>
              <h2 className="font-h2 text-h2 text-primary mb-md">
                Past Orders
              </h2>
              <div className="space-y-md">
                {/* Delivered Item */}
                <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                  <div className="flex items-center gap-md w-full sm:w-auto">
                    <div className="w-20 h-20 bg-surface-container-low rounded shrink-0 relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqwPcN34tb9R8UTO9KSDpnpJAKTAy7D8rTku8ySKaGjBIbegaoRWUJCYG02O6s9TSV0-S7ianIQKn__dAvG-eYlXSvQkWfCas1PCh2qTkpjMuxcJ42AqOVKutFfLm1URv5IYDYl4dlzkVR-NaThe9dV4dnpQyMmeAninmN8XcakCZZXt7G2j6nNsnpvDmu1rTXy5BnU4rcs7ifjVLRQvl-QMc7WIhEvvVJy8JLjTneOzqrpR_5VLsG1O8bK9NfpjcEMue6Nrd9rnm9"
                        alt="Chelsea Leather Boots"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-label text-label text-on-surface-variant uppercase block mb-xs">
                        Sep 15, 2023 • #LX-7321
                      </span>
                      <h4 className="font-body-lg text-body-lg text-primary">
                        Chelsea Leather Boots
                      </h4>
                      <p className="font-price text-price text-primary mt-1">
                        $280.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-md border-t sm:border-t-0 border-surface-variant pt-md sm:pt-0 mt-sm sm:mt-0">
                    <span className="bg-surface-container-low text-on-surface-variant font-label text-label px-sm py-xs rounded-full inline-flex items-center gap-1">
                      <CheckCircle2 size={16} /> Delivered
                    </span>
                    <button className="font-body-sm text-body-sm font-medium text-primary underline underline-offset-4 hover:opacity-70 transition-opacity">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Returned Item */}
                <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                  <div className="flex items-center gap-md w-full sm:w-auto">
                    <div className="w-20 h-20 bg-surface-container-low rounded shrink-0 opacity-70 relative overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgzABlXEpBpm8D4zkQ9fK-xy8uucK71qxdCrFMk5dn2JZ2HO89pncOu0fkYTiUp3305--JH79S-a6L5Y-y68sZET_mppr7i_mEBWbl8BrgjLpXJlUTUrU7VEZijOr2tbPNcPBTGqtcgtXaOODlWaaI1X4LLZe8nktUqB7KycRUE0q7uVV4ZZ15yRhcvg1tSoN24-Bc2ltti247K5BpPG1K_y-eCBVyZU1KWs861UINGHUQnSea3Wpem3dqNkCflCnj-noOPNUuSS6"
                        alt="Knit Cotton Sweater"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-label text-label text-on-surface-variant uppercase block mb-xs">
                        Jun 18, 2023 • #LX-5192
                      </span>
                      <h4 className="font-body-lg text-body-lg text-primary">
                        Knit Cotton Sweater
                      </h4>
                      <p className="font-price text-price text-primary mt-1">
                        $155.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-md border-t sm:border-t-0 border-surface-variant pt-md sm:pt-0 mt-sm sm:mt-0">
                    <span className="bg-surface-container-high text-on-surface-variant font-label text-label px-sm py-xs rounded-full inline-flex items-center gap-1">
                      <RotateCcw size={16} /> Returned
                    </span>
                    <button className="font-body-sm text-body-sm font-medium text-primary underline underline-offset-4 hover:opacity-70 transition-opacity">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
