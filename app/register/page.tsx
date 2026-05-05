import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function RegisterPage() {
  return (
    <MainLayout>
      <main className="flex-grow flex items-center justify-center py-xl px-4 md:px-gutter">
        <div className="w-full max-w-[480px]">
          {/* Logo / Brand Anchor */}
          <div className="text-center mb-lg">
            <Link href="/">
              <span className="inline-block text-h2 font-h2 tracking-tighter text-primary cursor-pointer">
                LUXE
              </span>
            </Link>
          </div>

          {/* Register Card */}
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-surface-variant">
            <div className="text-center mb-lg">
              <h1 className="font-h2 text-h2 text-primary mb-sm">
                Create Account
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Join LUXE to manage your orders and preferences.
              </p>
            </div>

            <form action="#" className="space-y-md" method="POST">
              {/* Name Input */}
              <div className="space-y-base">
                <label
                  className="block font-label text-label text-on-surface"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    className="block w-full pl-[40px] pr-sm py-sm bg-surface-container-low border-transparent rounded-lg focus:bg-surface-container-lowest focus:border-primary focus:ring-0 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant transition-colors"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    type="text"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-base">
                <label
                  className="block font-label text-label text-on-surface"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="block w-full pl-[40px] pr-sm py-sm bg-surface-container-low border-transparent rounded-lg focus:bg-surface-container-lowest focus:border-primary focus:ring-0 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant transition-colors"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-base">
                <label
                  className="block font-label text-label text-on-surface"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="block w-full pl-[40px] pr-sm py-sm bg-surface-container-low border-transparent rounded-lg focus:bg-surface-container-lowest focus:border-primary focus:ring-0 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant transition-colors"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-sm">
                <button
                  className="w-full flex justify-center py-sm px-md border border-transparent rounded-lg shadow-sm font-label text-label text-on-primary bg-primary hover:bg-inverse-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="mt-lg relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-surface-variant"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-sm bg-surface-container-lowest font-label text-label text-outline">
                  OR
                </span>
              </div>
            </div>

            {/* Google Auth Button */}
            <div className="mt-lg">
              <button
                className="w-full flex items-center justify-center py-sm px-md border border-surface-variant rounded-lg bg-surface-container-lowest font-label text-label text-on-surface hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px] mr-sm"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#4285F4"
                  ></path>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="mt-md text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Already have an account?{" "}
                <Link
                  className="font-label text-label text-primary hover:text-surface-tint underline underline-offset-4 transition-colors"
                  href="/login"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
