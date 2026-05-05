import React from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";

export default function Header() {
  // TODO: Ganti dengan state autentikasi sebenarnya dari backend Golang/Gin kamu
  // (misalnya menggunakan Context, Zustand, atau mengecek token/cookies).
  const isLoggedIn = false;

  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-surface-variant">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-16">
        {/* Brand */}
        <Link href="/">
          <span className="text-xl font-bold tracking-widest text-on-surface">
            DRAV
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-semibold text-on-surface border-b border-on-surface pb-0.5"
            href="#"
          >
            Shop
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            New Arrivals
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            Collections
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            Journal
          </a>
        </nav>

        {/* Icon Actions */}
        <div className="flex items-center gap-5 text-on-surface">
          {/* Search */}
          <button
            aria-label="Search"
            className="hover:text-on-surface-variant transition-colors active:scale-95"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="hover:text-on-surface-variant transition-colors active:scale-95 flex items-center"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>

          {/* Logika Autentikasi (Account vs Sign In/Register) */}
          {isLoggedIn ? (
            <Link
              href="/dashboard"
              aria-label="Account"
              className="hidden md:flex hover:text-on-surface-variant transition-colors active:scale-95 items-center"
            >
              <User size={20} strokeWidth={1.5} />
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-4 border-l border-surface-variant pl-5 ml-1">
              <Link
                href="/login"
                className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-primary text-on-primary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Create Account
              </Link>
            </div>
          )}

          {/* Hamburger — mobile only */}
          <button
            aria-label="Menu"
            className="md:hidden hover:text-on-surface-variant transition-colors active:scale-95"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
