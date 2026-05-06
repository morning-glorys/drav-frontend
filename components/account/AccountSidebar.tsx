import React from "react";
import Link from "next/link";
import { ChevronRight, LogOut } from "lucide-react";

export default function AccountSidebar() {
  return (
    <aside className="md:col-span-3 space-y-md">
      <div className="bg-surface-container-lowest p-md rounded-lg border border-surface-variant">
        <h3 className="font-label text-label text-on-surface-variant mb-sm uppercase tracking-wider">
          My Account
        </h3>
        <nav className="flex flex-col gap-sm">
          <Link
            href="/dashboard"
            className="text-on-surface font-body-lg text-body-lg font-semibold flex items-center justify-between group"
          >
            Account Info
            <ChevronRight
              size={20}
              className="text-on-surface-variant group-hover:text-on-surface transition-colors"
            />
          </Link>
          <Link
            href="/orders"
            className="text-on-surface-variant font-body-lg text-body-lg hover:text-on-surface transition-colors flex items-center justify-between group"
          >
            Orders
            <ChevronRight
              size={20}
              className="opacity-0 group-hover:opacity-100 group-hover:text-on-surface-variant transition-all"
            />
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant font-body-lg text-body-lg hover:text-on-surface transition-colors flex items-center justify-between group"
          >
            Saved Items
            <ChevronRight
              size={20}
              className="opacity-0 group-hover:opacity-100 group-hover:text-on-surface-variant transition-all"
            />
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant font-body-lg text-body-lg hover:text-on-surface transition-colors flex items-center justify-between group"
          >
            Settings
            <ChevronRight
              size={20}
              className="opacity-0 group-hover:opacity-100 group-hover:text-on-surface-variant transition-all"
            />
          </Link>
        </nav>
      </div>
      <button className="text-on-surface-variant font-body-sm text-body-sm hover:text-error transition-colors flex items-center gap-2 px-md">
        <LogOut size={18} />
        Sign Out
      </button>
    </aside>
  );
}
