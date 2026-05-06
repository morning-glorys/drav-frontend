import React from "react";
import { Database, ShieldCheck, UserCheck, Lock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <main className="flex-grow max-w-[1280px] mx-auto px-4 md:px-gutter py-xl w-full">
        <header className="mb-xl text-center max-w-[768px] mx-auto">
          <h1 className="font-h1 text-h1 text-primary mb-sm">Your Privacy</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We believe in complete transparency. Our privacy practices are
            designed to protect your data while providing a seamless,
            personalized shopping experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg max-w-[1024px] mx-auto">
          <section className="bg-surface-container-low p-md rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-sm">
              <Database className="text-secondary" size={24} />
              <h2 className="font-h2 text-h2 text-primary">1. Collection</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm">
              {`"We only collect what's necessary to process your order."`}
            </p>
            <ul className="list-disc list-inside font-body-sm text-body-sm text-on-surface-variant space-y-xs ml-base">
              <li>Shipping and billing addresses.</li>
              <li>Contact information (email, phone).</li>
              <li>Order history for seamless returns.</li>
            </ul>
          </section>

          <section className="bg-surface-container-low p-md rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-sm">
              <ShieldCheck className="text-secondary" size={24} />
              <h2 className="font-h2 text-h2 text-primary">2. Usage</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm">
              {`"Your data is never sold. Ever."`}
            </p>
            <ul className="list-disc list-inside font-body-sm text-body-sm text-on-surface-variant space-y-xs ml-base">
              <li>Used exclusively to fulfill your purchases.</li>
              <li>Internal analytics to improve our store.</li>
              <li>No third-party data brokering.</li>
            </ul>
          </section>

          <section className="bg-surface-container-low p-md rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-sm">
              <UserCheck className="text-secondary" size={24} />
              <h2 className="font-h2 text-h2 text-primary">3. Your Rights</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm">
              {`"Full control over your data, at any time."`}
            </p>
            <ul className="list-disc list-inside font-body-sm text-body-sm text-on-surface-variant space-y-xs ml-base">
              <li>Request full data deletion.</li>
              <li>Opt-out of marketing communications instantly.</li>
              <li>Access a copy of your stored data.</li>
            </ul>
          </section>

          <section className="bg-surface-container-low p-md rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-sm">
              <Lock className="text-secondary" size={24} />
              <h2 className="font-h2 text-h2 text-primary">4. Security</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm">
              {`"Encrypted payments via Stripe & PayPal."`}
            </p>
            <ul className="list-disc list-inside font-body-sm text-body-sm text-on-surface-variant space-y-xs ml-base">
              <li>End-to-end encryption on all transactions.</li>
              <li>We do not store your raw credit card numbers.</li>
              <li>Regular security audits and updates.</li>
            </ul>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}
