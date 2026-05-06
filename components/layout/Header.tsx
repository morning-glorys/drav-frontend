import React from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";

export default function Header() {
  const isLoggedIn = true;

  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-surface-variant transition-colors">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 md:px-8 h-16">
        {/* Brand Logo */}
        <Link href="/">
          <span className="text-xl font-bold tracking-widest text-on-surface hover:opacity-80 transition-opacity">
            DRAV
          </span>
        </Link>

        {/* Nav Links Utama (Sudah disambungkan ke semua halaman) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/search"
            className="text-sm font-semibold text-on-surface border-b border-on-surface pb-0.5"
          >
            Shop
          </Link>
          <Link
            href="/discover"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Discover
          </Link>
          <Link
            href="/seller"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Sellers
          </Link>
          <Link
            href="/transparency"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Transparency
          </Link>
        </nav>

        {/* Icon Actions */}
        <div className="flex items-center gap-4 md:gap-5 text-on-surface">
          <Link
            href="/search"
            aria-label="Search"
            className="hover:text-on-surface-variant transition-colors active:scale-95 flex items-center"
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="hover:text-on-surface-variant transition-colors active:scale-95 flex items-center"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>

          {/* Logika Autentikasi */}
          {isLoggedIn ? (
            <>
              {/* Tombol Wishlist */}
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="hidden md:flex hover:text-on-surface-variant transition-colors active:scale-95 items-center"
              >
                <Heart size={20} strokeWidth={1.5} />
              </Link>

              {/* Tombol Account (Dashboard) */}
              <Link
                href="/dashboard"
                aria-label="Account"
                className="hidden md:flex hover:text-on-surface-variant transition-colors active:scale-95 items-center"
              >
                <User size={20} strokeWidth={1.5} />
              </Link>
            </>
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
