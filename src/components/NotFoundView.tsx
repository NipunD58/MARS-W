import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "./SiteNavbar";
import { SiteFooter } from "./SiteFooter";

export function NotFoundView() {
  const quickLinks = [
    { n: "01", label: "Thesis & Manifesto", href: "/#thesis", desc: "MARS deployment strategy" },
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
                MARS's robotics portfolio and thesis.
              </p>
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

      <SiteFooter />
    </div>
  );
}

export default NotFoundView;
