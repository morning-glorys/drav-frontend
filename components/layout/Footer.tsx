export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 font-['Space_Grotesk'] text-sm mt-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-8 gap-4">
        <div className="text-base font-bold tracking-widest text-zinc-900">
          DRAV
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            "Sustainability",
            "Shipping & Returns",
            "Privacy",
            "Terms",
            "Contact",
          ].map((link) => (
            <a
              key={link}
              className="text-zinc-400 hover:text-zinc-900 transition-colors"
              href="#"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="text-zinc-400 text-xs text-center">
          © 2024 DRAV. SECURE PAYMENTS VIA STRIPE & PAYPAL.
        </div>
      </div>
    </footer>
  );
}
