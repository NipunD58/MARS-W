import { Link } from "@tanstack/react-router";

export function SiteNavbar() {
  return (
    <header className="border-b border-border bg-background px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo and Manifesto */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="transition-opacity hover:opacity-85">
            <span className="font-display text-2xl uppercase leading-none md:text-3xl">AXIOM</span>
          </Link>

          <Link
            to="/"
            hash="thesis"
            className="flex items-center gap-3 text-sm uppercase tracking-wider text-foreground transition-opacity hover:opacity-75"
          >
            <span className="grid h-8 w-8 place-items-center border border-foreground">
              <span className="h-4 w-4 border border-foreground" />
            </span>
            <span className="hidden sm:inline">Manifesto</span>
          </Link>
        </div>

        {/* Segmented framed navigation */}
        <nav className="flex border border-foreground text-xs uppercase md:text-sm">
          {[
            ["Architecture", "/#architecture"],
            ["Investments", "/#investments"],
            ["Awards", "/#awards"],
            ["Team", "/#team"],
            ["Contact", "/#contact"],
          ].map(([l, h], i) => (
            <a
              key={l}
              href={h}
              className={`px-3 py-2 transition-colors hover:bg-foreground hover:text-background ${
                i ? "border-l border-foreground" : ""
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteNavbar;
