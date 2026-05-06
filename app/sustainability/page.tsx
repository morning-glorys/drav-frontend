import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function SustainabilityPage() {
  return (
    <MainLayout>
      <main className="max-w-[1280px] mx-auto px-8 md:px-gutter py-xl">
        {/* Hero Section */}
        <section className="max-w-[768px] mx-auto text-center mb-xl">
          <h1 className="font-h1 text-h1 text-primary mb-md">
            Built for long-term value, not fast consumption
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto leading-relaxed">
            Sustainability at DRAV is not an afterthought; it is the foundation
            of our design process. We reject the cycle of disposable fashion,
            focusing instead on enduring quality, timeless aesthetics, and
            responsible practices that respect both the wearer and the
            environment.
          </p>
        </section>

        {/* Image Break */}
        <div className="w-full h-64 md:h-96 bg-surface-container-high rounded-xl mb-xl overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Minimalist architectural detail"
            fill
            className="object-cover grayscale opacity-90"
          />
        </div>

        {/* Sections */}
        <div className="max-w-[896px] mx-auto space-y-xl">
          {/* Philosophy */}
          <section className="flex flex-col md:flex-row gap-lg md:gap-xl items-start">
            <div className="md:w-1/3">
              <h2 className="font-h2 text-h2 text-primary border-t border-surface-variant pt-sm">
                Our Philosophy
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body-lg text-body-lg text-primary font-medium mb-sm">
                Quality over quantity. We design for longevity.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Every piece we create is an investment. By prioritizing
                exceptional craftsmanship and durable materials, we ensure our
                products remain functional and beautiful for years. Our
                minimalist approach means avoiding fleeting trends in favor of
                timeless designs that defy obsolescence.
              </p>
            </div>
          </section>

          {/* Sourcing */}
          <section className="flex flex-col md:flex-row gap-lg md:gap-xl items-start">
            <div className="md:w-1/3">
              <h2 className="font-h2 text-h2 text-primary border-t border-surface-variant pt-sm">
                Responsible Sourcing
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body-lg text-body-lg text-primary font-medium mb-sm">
                100% organic materials, ethically sourced partners.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Transparency is non-negotiable. We meticulously trace our supply
                chain, partnering exclusively with suppliers who share our
                commitment to fair labor practices and environmental
                stewardship. From GOTS-certified organic cotton to recycled
                metals, every material is chosen with its ecological footprint
                in mind.
              </p>
              <div className="mt-md flex gap-sm">
                <span className="inline-block px-sm py-xs bg-surface-container rounded-full font-label text-label text-on-surface">
                  Organic
                </span>
                <span className="inline-block px-sm py-xs bg-surface-container rounded-full font-label text-label text-on-surface">
                  Fair Trade
                </span>
                <span className="inline-block px-sm py-xs bg-surface-container rounded-full font-label text-label text-on-surface">
                  Traceable
                </span>
              </div>
            </div>
          </section>

          {/* Commitment */}
          <section className="flex flex-col md:flex-row gap-lg md:gap-xl items-start">
            <div className="md:w-1/3">
              <h2 className="font-h2 text-h2 text-primary border-t border-surface-variant pt-sm">
                Future Commitment
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body-lg text-body-lg text-secondary font-medium mb-sm">
                Our goal is zero waste by 2030.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
                Sustainability is a journey, not a destination. We are
                continuously refining our processes to minimize waste and
                emissions. Our roadmap includes transitioning to fully
                biodegradable packaging, implementing circular repair programs,
                and achieving carbon neutrality across all operations by the end
                of the decade.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-xs font-label text-label text-primary uppercase tracking-widest border-b border-primary pb-xs hover:text-secondary hover:border-secondary transition-colors"
              >
                Read Our Annual Report <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}
