import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function Header({ language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-heading text-2xl font-bold tracking-tight text-brand"
        >
          NETGARY
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-zinc-500 transition duration-300 hover:text-brand"
          >
            {t.nav.about}
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-zinc-500 transition duration-300 hover:text-brand"
          >
            {t.nav.services}
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-zinc-500 transition duration-300 hover:text-brand"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* LANGUAGE SWITCH - DESKTOP */}
          <div className="hidden items-center gap-2 text-xs font-medium sm:flex">
            <button
              type="button"
              onClick={() => setLanguage("hu")}
              className={`transition duration-300 ${
                language === "hu"
                  ? "text-brand"
                  : "text-zinc-300 hover:text-brand"
              }`}
            >
              HU
            </button>

            <span className="text-zinc-300">/</span>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition duration-300 ${
                language === "en"
                  ? "text-brand"
                  : "text-zinc-300 hover:text-brand"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-xs font-medium text-brand transition duration-300 hover:bg-brand hover:text-white sm:text-sm md:px-5 md:py-2.5"
          >
            {t.nav.letsTalk}

            <ArrowUpRight size={15} strokeWidth={1.8} className="shrink-0" />
          </a>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative flex h-6 w-7 flex-col justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-[1.5px] w-7 bg-brand transition-all duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-7 bg-brand transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-7 bg-brand transition-all duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-[360px] border-t border-border opacity-100"
            : "max-h-0 border-t border-transparent opacity-0"
        }`}
      >
        <nav className="px-6 py-4">
          <a
            href="#about"
            onClick={closeMenu}
            className="block border-b border-border py-4 font-heading text-xl font-medium text-brand"
          >
            {t.nav.about}
          </a>

          <a
            href="#services"
            onClick={closeMenu}
            className="block border-b border-border py-4 font-heading text-xl font-medium text-brand"
          >
            {t.nav.services}
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="block border-b border-border py-4 font-heading text-xl font-medium text-brand"
          >
            {t.nav.contact}
          </a>

          {/* MOBILE LANGUAGE */}
          <div className="flex items-center gap-3 pt-5 text-sm font-medium">
            <button
              type="button"
              onClick={() => setLanguage("hu")}
              className={`transition duration-300 ${
                language === "hu" ? "text-brand" : "text-zinc-300"
              }`}
            >
              HU
            </button>

            <span className="text-zinc-300">/</span>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition duration-300 ${
                language === "en" ? "text-brand" : "text-zinc-300"
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
