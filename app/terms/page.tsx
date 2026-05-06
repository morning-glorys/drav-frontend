import React from "react";
import { UserCog, CreditCard, Shield } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function TermsPage() {
  return (
    <MainLayout>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-xl md:px-lg md:py-[120px]">
        <header className="max-w-[768px] mx-auto text-center mb-xl">
          <h1 className="font-h1 text-h1 text-primary mb-sm">
            Terms of Service
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
            Effective as of October 2026. Please read these terms carefully
            before using our platform. They outline the rules, responsibilities,
            and guidelines for a secure shopping experience.
          </p>
        </header>

        <article className="max-w-[768px] mx-auto space-y-lg">
          <section className="bg-surface-container-low rounded-lg p-md md:p-lg border border-surface-variant/50">
            <div className="flex items-start gap-md mb-sm">
              <UserCog className="text-secondary mt-1 shrink-0" size={32} />
              <div>
                <h2 className="font-h2 text-h2 text-primary mb-xs">
                  1. Account
                </h2>
                <p className="font-label text-label text-secondary uppercase tracking-widest mb-sm">
                  Fair usage for fair shopping.
                </p>
                <div className="font-body-lg text-body-lg text-on-surface-variant space-y-sm">
                  <p>
                    By creating an account on DRAV, you agree to provide
                    accurate, current, and complete information. You are solely
                    responsible for maintaining the confidentiality of your
                    account credentials and for all activities that occur under
                    your account.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate accounts that
                    violate our fair usage policy, including automated
                    purchasing attempts or fraudulent activities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low rounded-lg p-md md:p-lg border border-surface-variant/50">
            <div className="flex items-start gap-md mb-sm">
              <CreditCard className="text-secondary mt-1 shrink-0" size={32} />
              <div>
                <h2 className="font-h2 text-h2 text-primary mb-xs">
                  2. Payments
                </h2>
                <p className="font-label text-label text-secondary uppercase tracking-widest mb-sm">
                  Secure, transparent transactions.
                </p>
                <div className="font-body-lg text-body-lg text-on-surface-variant space-y-sm">
                  <p>
                    All transactions are securely processed through trusted
                    third-party providers. DRAV does not store sensitive credit
                    card information on our servers.
                  </p>
                  <p>
                    Prices are listed in your local currency where applicable.
                    We reserve the right to modify prices at any time, but any
                    changes will not affect orders that have already been
                    confirmed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low rounded-lg p-md md:p-lg border border-surface-variant/50">
            <div className="flex items-start gap-md mb-sm">
              <Shield className="text-secondary mt-1 shrink-0" size={32} />
              <div>
                <h2 className="font-h2 text-h2 text-primary mb-xs">
                  3. Responsibilities
                </h2>
                <p className="font-label text-label text-secondary uppercase tracking-widest mb-sm">
                  Clarity in every interaction.
                </p>
                <div className="font-body-lg text-body-lg text-on-surface-variant space-y-sm">
                  <p>
                    While we strive to ensure that all information on our site
                    is accurate and up-to-date, we do not warrant the
                    completeness or accuracy of the content. Product
                    descriptions and images are provided for reference.
                  </p>
                  <p>
                    In no event shall DRAV be liable for any indirect,
                    incidental, or consequential damages arising out of your use
                    of the platform or purchased products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-md text-center">
            <button className="bg-primary text-on-primary rounded px-md py-sm font-label text-label hover:opacity-90 transition-opacity">
              Accept & Continue
            </button>
          </div>
        </article>
      </main>
    </MainLayout>
  );
}
