import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest font-['Space_Grotesk'] text-sm tracking-wide w-full border-t border-outline-variant mt-auto">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-10 gap-6">
        {/* Brand */}
        <div className="text-lg font-bold text-on-surface">DRAV</div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/transparency"
            className="text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
          >
            Trust & Transparency
          </Link>
          <Link
            href="/sustainability"
            className="text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
          >
            Sustainability
          </Link>
          <Link
            href="/shipping"
            className="text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
          >
            Shipping & Returns
          </Link>
          <Link
            href="/privacy"
            className="text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
          >
            Privacy & Terms
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-on-surface-variant text-center md:text-right text-xs">
          © 2026 DRAV MINIMAL. SECURE PAYMENTS.
        </div>
      </div>
    </footer>
  );
}
