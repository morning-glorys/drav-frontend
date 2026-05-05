import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function LoginPage() {
  return (
    <MainLayout>
      <main className="flex-grow flex items-center justify-center p-md py-xl px-4 md:px-gutter">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg w-full max-w-[480px]">
          <div className="text-center mb-lg">
            <Link href="/">
              <h1 className="font-h1 text-h1 text-primary mb-base tracking-tighter cursor-pointer">
                DRAV
              </h1>
            </Link>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-md">
            <div className="space-y-xs">
              <label
                className="font-label text-label text-on-surface block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-surface-container-high border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg py-sm px-sm font-body-sm text-body-sm text-on-surface outline-none transition-colors"
                id="email"
                placeholder="name@example.com"
                type="email"
              />
            </div>

            <div className="space-y-xs">
              <div className="flex items-center justify-between">
                <label
                  className="font-label text-label text-on-surface block"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="font-label text-label text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <input
                className="w-full bg-surface-container-high border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg py-sm px-sm font-body-sm text-body-sm text-on-surface outline-none transition-colors"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <button
              className="w-full bg-primary text-on-primary font-label text-label py-sm rounded-lg hover:opacity-90 transition-opacity"
              type="button"
            >
              Sign In
            </button>
          </form>

          <div className="mt-md relative flex items-center py-base">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink-0 mx-base font-body-sm text-body-sm text-on-surface-variant">
              or
            </span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>

          <button
            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-label text-label py-sm rounded-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-sm mt-base"
            type="button"
          >
            <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Continue with Google
          </button>

          <div className="mt-lg text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {`Don't have an account?`}
              <Link
                className="text-primary font-medium hover:underline underline-offset-4"
                href="/register"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
