export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 font-['Space_Grotesk'] text-sm tracking-wide mt-xl">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6">
        <div className="text-lg font-bold text-zinc-900 dark:text-zinc-50 opacity-80 hover:opacity-100 transition-opacity">
          DRAV
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-6">
          <a
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Sustainability
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Shipping & Returns
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Contact
          </a>
        </nav>
        <div className="text-zinc-500 dark:text-zinc-400 opacity-80">
          © 2025 DRAV. SECURE PAYMENTS VIA STRIPE & PAYPAL.
        </div>
      </div>
    </footer>
  );
}
