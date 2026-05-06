import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Edit2 } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";

export default function DashboardPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-lg grid grid-cols-1 md:grid-cols-12 gap-gutter min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <AccountSidebar />

        {/* Main Account Info Dashboard */}
        <section className="md:col-span-9 space-y-lg">
          {/* Page Header */}
          <div>
            <h1 className="font-h1 text-h1 text-on-surface mb-xs">
              Account Info
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Manage your personal details and preferences.
            </p>
          </div>

          {/* Bento Grid Layout for Account Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
            {/* Personal Details Card */}
            <div className="bg-surface-container-lowest p-lg rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-surface-variant">
              <div className="flex justify-between items-start mb-md">
                <h2 className="font-h2 text-h2 text-on-surface">
                  Personal Details
                </h2>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <Edit2 size={18} />
                </button>
              </div>
              <div className="space-y-md">
                <div>
                  <span className="block font-label text-label text-on-surface-variant mb-xs">
                    FULL NAME
                  </span>
                  <span className="block font-body-lg text-body-lg text-on-surface">
                    Elena Rostova
                  </span>
                </div>
                <div>
                  <span className="block font-label text-label text-on-surface-variant mb-xs">
                    EMAIL ADDRESS
                  </span>
                  <span className="block font-body-lg text-body-lg text-on-surface">
                    elena.rostova@example.com
                  </span>
                </div>
                <div>
                  <span className="block font-label text-label text-on-surface-variant mb-xs">
                    PHONE NUMBER
                  </span>
                  <span className="block font-body-lg text-body-lg text-on-surface">
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Address Card */}
            <div className="bg-surface-container-lowest p-lg rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-surface-variant flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-md">
                  <h2 className="font-h2 text-h2 text-on-surface">
                    Default Shipping
                  </h2>
                  <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
                <div className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Elena Rostova
                  <br />
                  1200 Minimalist Ave, Suite 4B
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </div>
              </div>
              <div className="mt-md">
                <button className="bg-surface-variant text-on-surface font-body-sm text-body-sm py-sm px-md rounded hover:bg-surface-container-high transition-colors">
                  Manage Addresses
                </button>
              </div>
            </div>

            {/* Recent Order Summary */}
            <div className="bg-surface-container-lowest p-lg rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-surface-variant lg:col-span-2">
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-h2 text-h2 text-on-surface">
                  Latest Order
                </h2>
                <Link
                  href="/orders"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface underline underline-offset-4"
                >
                  View All
                </Link>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-md p-md bg-surface border border-surface-variant rounded">
                <div className="w-24 h-24 bg-surface-container-highest shrink-0 overflow-hidden rounded relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDAwGctdbbShZ7gk8WOAmknbTBnG-RxuHP9dmK8shCoKmaTZYMyhYQ2XHpz47q2HwINO35qYalN4iZY_o1q3Zqsmc-tF6qMmwhJnw4u80d7KaCd620QvrCaZjG6d40yBBk-mp2qPNWYMTpeh4CNFJXmKywqE12ndeQLtgfGEsaJrxFpbW_Kgo6ABCn2j19kO2qlm2VeGV6PXPtgTwfl33DNQEGHEdVrzSMkU4zsSFkjoiv6TezzTf3k7wnMdVVDXTh_JP5ztIrzRRX"
                    alt="Minimalist leather tote bag"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">
                    The Structured Tote - Noir
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">
                    Order #LX-89021 • Placed on Oct 12, 2024
                  </p>
                </div>
                <div className="text-right">
                  <span className="block font-price text-price text-on-surface mb-xs">
                    $450.00
                  </span>
                  <span className="inline-block bg-surface-container-highest px-sm py-xs rounded-full font-label text-label text-on-surface-variant">
                    In Transit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
