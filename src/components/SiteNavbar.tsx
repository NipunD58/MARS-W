import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  ["Architecture", "/#architecture"],
  ["Investments", "/#investments"],
  ["Awards", "/#awards"],
  ["Team", "/#team"],
  ["Contact", "/#contact"],
];

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="relative border-b border-border bg-background px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="transition-opacity hover:opacity-85">
          <span className="font-display text-2xl uppercase leading-none md:text-3xl">MARS</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="grid h-10 w-10 place-items-center border border-foreground lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-6 top-full z-50 flex-col border border-foreground bg-background text-xs uppercase shadow-[0_18px_50px_rgba(0,0,0,0.16)] lg:static lg:flex lg:w-auto lg:flex-row lg:shadow-none lg:text-sm`}
          onClick={() => setMenuOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
        >
          {navLinks.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`px-4 py-3 transition-colors hover:bg-foreground hover:text-background lg:px-3 lg:py-2 ${index < navLinks.length - 1 ? "border-b border-foreground lg:border-b-0" : ""
                } ${index ? "lg:border-l lg:border-foreground" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteNavbar;
