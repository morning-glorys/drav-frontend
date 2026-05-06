import React from "react";
import Image from "next/image";
import { Tag, ShieldCheck, MessageSquareHeart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function TransparencyPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-xl">
        {/* Hero Section */}
        <section className="text-center mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-md">
            Our Commitment to Transparency
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
            We believe in a calm, honest shopping experience. No aggressive
            sales tactics, no artificial urgency. Just exceptional products and
            clear communication.
          </p>
        </section>

        {/* Editorial Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl">
          {/* Bento Box 1: No Fake Discounts */}
          <div className="bg-surface-container-low rounded-xl p-lg flex flex-col justify-center items-start border border-outline-variant/30">
            <Tag size={40} strokeWidth={1.5} className="text-primary mb-md" />
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">
              No fake discounts.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {` We price our items fairly from the start. You won't see "mark up
              to mark down" tactics here. The price you see reflects the true
              value of the craftsmanship and materials.`}
            </p>
          </div>

          {/* Image Block */}
          <div className="rounded-xl overflow-hidden h-[400px] relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD90WaO4H9N6-RvMtktHrI6Dq4znn9s5DULEInuDIXhsv3Tf_J7BflMf8IeBk88Gyn6hhowSa8kdKhLWhD3W2yhtUOtQqRtOdnZsDVuRSS-7OQYYD7lHYuFtPWoQyPa-2r0Iv5h3fsuCzMt8dO3OXrgf_fJ1iFkA7fN5spMSKss5j3a7_z8P0KzrKTG4PYfls-qTi-Ify7lhoOCY5-QYwSacwwNvoOrkbQqEnWT6vl8I9GG0jRXI2qqY0SlBVOxI1-xhKu-fNai6h9G"
              alt="Minimalist still life"
              fill
              className="object-cover"
            />
          </div>

          {/* Image Block */}
          <div className="rounded-xl overflow-hidden h-[400px] relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHlm2YpRFooH7RzgokmGapGbj3a7t1wsZnkW_IYfZ4DyNeryVwVavpaxMj_WMjCFDIMW6-zn-3y1XawSijWjJrLz2iKn4uX80TtZGq8kCm0MLoAOqBMEXJCt52VD48IgMdFaPFAqRvQnNn0LtKQvQi91tWmsoviGsepXKmTeKwzKBPI0J-9qpx1KHy66ZUjv1s--rqs10KGhBsMaKIZ0YYTsDqO51NdQiXce8KmhhGff1qKDeUyAPN4g2g7ExOogrZTHRZODvFS1t2"
              alt="Premium material close-up"
              fill
              className="object-cover"
            />
          </div>

          {/* Bento Box 2: Verified Sellers */}
          <div className="bg-surface-container-low rounded-xl p-lg flex flex-col justify-center items-start border border-outline-variant/30">
            <ShieldCheck
              size={40}
              strokeWidth={1.5}
              className="text-primary mb-md"
            />
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">
              Verified sellers.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Every partner in our network undergoes a rigorous vetting process.
              We ensure they meet our strict standards for quality, ethical
              production, and reliability before they reach our platform.
            </p>
          </div>

          {/* Bento Box 3: Real Reviews (Spans 2 columns) */}
          <div className="md:col-span-2 bg-surface-container-high rounded-xl p-lg flex flex-col md:flex-row gap-lg items-center border border-outline-variant/30">
            <div className="flex-1">
              <MessageSquareHeart
                size={40}
                strokeWidth={1.5}
                className="text-primary mb-md"
              />
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">
                Real reviews only.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {` We don't curate out the criticism. Our reviews are sourced
                exclusively from verified purchasers. Honest feedback helps us
                improve and helps you make informed decisions in a quiet,
                unpressured environment.`}
              </p>
            </div>
            <div className="flex-1 w-full rounded-lg overflow-hidden h-[300px] relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL3_NyhQeMxkef8ekDQD-jQH9OJGnXJn1LJfuhKKOPpoJ4tDZoMzfMitCCAfeVNFvH5KHuooRb7Glwqk-y7oZE5bGp0mhRsgXaQz9d-46sPjOJPnKHkFNprXc6t7mCH608WCJvZu6-w7hOdly_T1-6EBPupRftk5MNI5CNlQJEppcWacTw-iQMntxmVjtm8gs0Zoi9M1XClrdD-Qd4vWMVV2wZhpPL6RUIOlYBa2zL-kqsF300orqWHUTCQC3wrZRldLGTZq-P5zTB"
                alt="Minimalist architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Final Assurance */}
        <section className="text-center py-xl border-t border-surface-variant">
          <h2 className="font-h2 text-h2 text-on-surface mb-sm">
            Shop with Confidence
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md max-w-[576px] mx-auto">
            Experience the difference of a platform built on trust.
          </p>
          <button className="bg-primary text-on-primary font-label text-label px-6 py-3 rounded hover:bg-inverse-surface transition-colors uppercase tracking-widest">
            Explore the Collection
          </button>
        </section>
      </main>
    </MainLayout>
  );
}
