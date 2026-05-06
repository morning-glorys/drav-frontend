import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-gutter pt-xl pb-xl flex flex-col lg:flex-row gap-xl items-center justify-center min-h-[80vh]">
        {/* Imagery Context */}
        <div className="hidden lg:block w-full max-w-[448px] h-[600px] rounded-lg overflow-hidden bg-surface-container relative">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
            alt="Minimalist office space"
            fill
            className="object-cover absolute inset-0 mix-blend-multiply opacity-90"
          />
        </div>

        {/* Contact Form Canvas */}
        <div className="w-full max-w-[512px] flex flex-col gap-lg bg-surface p-0 lg:p-md rounded-xl">
          <div className="flex flex-col gap-sm text-center lg:text-left">
            <h1 className="font-h1 text-h1 text-on-surface">
              {` We're here to help`}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[448px]">
              Whether you have a question about our collections, need assistance
              with an order, or just want to share your thoughts, our team is
              ready to assist you.
            </p>
          </div>

          <form className="flex flex-col gap-md mt-md">
            <div className="flex flex-col gap-xs">
              <label
                className="font-label text-label text-on-surface-variant"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-lg px-sm py-sm font-body-lg text-body-lg text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface transition-colors outline-none"
                id="name"
                name="name"
                placeholder="Jane Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label
                className="font-label text-label text-on-surface-variant"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-lg px-sm py-sm font-body-lg text-body-lg text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface transition-colors outline-none"
                id="email"
                name="email"
                placeholder="jane@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label
                className="font-label text-label text-on-surface-variant"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-surface-container border-none rounded-lg px-sm py-sm font-body-lg text-body-lg text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface transition-colors resize-none outline-none"
                id="message"
                name="message"
                placeholder="How can we assist you today?"
                rows={4}
              ></textarea>
            </div>
            <div className="flex flex-col gap-sm mt-xs">
              <button
                className="w-full bg-primary text-on-primary font-body-sm text-body-sm font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
                type="submit"
              >
                Send message
              </button>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-2 flex items-center justify-center gap-2">
                <Clock size={16} />
                Typical response time: Under 4 hours.
              </p>
            </div>
          </form>
        </div>
      </main>
    </MainLayout>
  );
}
