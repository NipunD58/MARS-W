import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "./SiteNavbar";

export function NotFoundView() {
  const quickLinks = [
    { n: "01", label: "Thesis & Manifesto", href: "/#thesis", desc: "Axiom deployment strategy" },
    {
      n: "02",
      label: "Portfolio Investments",
      href: "/#investments",
      desc: "Active robotics rollouts",
    },
    { n: "03", label: "Leadership & Team", href: "/#team", desc: "Founding partners & operators" },
    {
      n: "04",
      label: "Investor Inquiries",
      href: "/#contact",
      desc: "Direct communications channel",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-background font-sans text-foreground">
      {/* Unified Site Navbar */}
      <SiteNavbar />

      {/* Main 404 Stage */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-16 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left Column: Number & Status */}
          <div className="flex flex-col justify-between border-border lg:border-r lg:pr-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                ⊢ Error 404
              </span>
              <div className="mt-4 font-serif text-7xl font-normal tracking-tight text-foreground md:text-9xl">
                404
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <span className="font-sans text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Status Code
              </span>
              <p className="mt-1 font-sans text-sm text-foreground font-medium">
                HTTP 404 — Not Found
              </p>
            </div>
          </div>

          {/* Right Column: Statement & Directory */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="font-serif text-3xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                The page you are looking for does not exist or has been relocated.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
                Please verify the destination URL, or use the index below to navigate back to
                Axiom's robotics portfolio and thesis.
              </p>
            </div>

            {/* Quick Directory Grid */}
            <div className="border-t border-border pt-6">
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                Navigation Directory
              </span>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {quickLinks.map((item) => (
                  <a
                    key={item.n}
                    href={item.href}
                    className="group flex items-center justify-between border border-border p-4 transition-colors hover:border-foreground hover:bg-card"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
                        <span className="font-semibold">{item.n}</span>
                        <span>•</span>
                        <span className="text-foreground group-hover:underline font-medium">
                          {item.label}
                        </span>
                      </div>
                      <p className="mt-1 font-sans text-[11px] text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-foreground px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold text-background transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Overview
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-border px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 font-sans text-xs">
          <span className="text-muted-foreground">
            © 2026 Axiom Capital Management. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-6 uppercase text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a
              href="mailto:contact@axiomcapital.ai"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundView;
