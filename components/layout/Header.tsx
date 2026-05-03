export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 font-['Space_Grotesk'] antialiased tracking-tight">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-20">
        <a
          className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 opacity-90 active:scale-95 transition-transform"
          href="#"
        >
          DRAV
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-zinc-900 dark:text-zinc-50 font-bold border-b-2 border-zinc-900 dark:border-zinc-50 pb-1 opacity-90 active:scale-95 transition-transform"
            href="#"
          >
            Shop
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 opacity-90 active:scale-95 transition-transform"
            href="#"
          >
            New Arrivals
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 opacity-90 active:scale-95 transition-transform"
            href="#"
          >
            Collections
          </a>
          <a
            className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 opacity-90 active:scale-95 transition-transform"
            href="#"
          >
            Journal
          </a>
        </nav>
        <div className="flex items-center gap-6 text-zinc-900 dark:text-zinc-100">
          <button
            aria-label="search"
            className="opacity-90 active:scale-95 transition-transform hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
          >
            <span className="material-symbols-outlined font-light">search</span>
          </button>
          <button
            aria-label="shopping_cart"
            className="opacity-90 active:scale-95 transition-transform hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
          >
            <span className="material-symbols-outlined font-light">
              shopping_cart
            </span>
          </button>
          <button
            aria-label="account_circle"
            className="hidden md:block opacity-90 active:scale-95 transition-transform hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
          >
            <span className="material-symbols-outlined font-light">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
