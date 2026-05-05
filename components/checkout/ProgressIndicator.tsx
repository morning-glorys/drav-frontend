import { ChevronRight } from "lucide-react";

export default function ProgressIndicator() {
  return (
    <nav
      aria-label="Progress"
      className="flex items-center gap-sm font-label text-label uppercase tracking-widest text-on-surface-variant"
    >
      <span>Cart</span>

      <ChevronRight size={14} />

      <span className="text-primary font-bold">Checkout</span>

      <ChevronRight size={14} />

      <span>Success</span>
    </nav>
  );
}
