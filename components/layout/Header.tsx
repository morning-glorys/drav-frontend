import React from "react";
import { Search, ShoppingBag, User, Menu, Link } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-surface-variant">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-16">
        {/* Brand */}
        <Link
          className="text-xl font-bold tracking-widest text-on-surface"
          href="/"
        >
          LUXE
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-semibold text-on-surface border-b border-on-surface pb-0.5"
            href="#"
          >
            Shop
          </Link>
          <Link
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            New Arrivals
          </Link>
          <Link
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            Collections
          </Link>
          <Link
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            Journal
          </Link>
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
          <button
            aria-label="Shopping bag"
            className="hover:text-on-surface-variant transition-colors active:scale-95"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* Account — hidden di mobile */}
          <button
            aria-label="Account"
            className="hidden md:block hover:text-on-surface-variant transition-colors active:scale-95"
          >
            <User size={20} strokeWidth={1.5} />
          </button>

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
