import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CurvedFooterWordmark } from "@/components/CurvedFooterWordmark";

const sectionLinks = [
  ["Home", "/#thesis"],
  ["Architecture", "/#architecture"],
  ["Investments", "/#investments"],
  ["Awards", "/#awards"],
  ["Team", "/#team"],
  ["Contact", "/#contact"],
];

function CornerDots() {
  return (
    <span aria-hidden="true" className="grid grid-cols-3 gap-[3px]">
      {Array.from({ length: 9 }, (_, index) => (
        <span key={index} className="h-[3px] w-[3px] rounded-full bg-[#dce0d8]/75" />
      ))}
    </span>
  );
}

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={footerRef} className="bg-[#080c09] px-3 py-3 text-[#e7e9e5] sm:px-5 sm:py-5">
      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-[1920px] flex-col overflow-hidden rounded-2xl border border-[#dce0d8]/10 p-2.5 sm:min-h-[calc(100svh-2.5rem)] sm:p-4">
        <div className="pointer-events-none absolute left-3 top-3 sm:left-4 sm:top-4">
          <CornerDots />
        </div>
        <div className="pointer-events-none absolute right-3 top-3 sm:right-4 sm:top-4">
          <CornerDots />
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <CornerDots />
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
          <CornerDots />
        </div>

        <div className="mx-auto my-auto grid w-full max-w-[1440px] flex-1 gap-2 px-1 pb-10 pt-10 sm:gap-2.5 sm:px-8 md:grid-cols-[1.05fr_1fr_.78fr] md:grid-rows-[minmax(12rem,1fr)_auto]">
          <nav
            aria-label="Footer page navigation"
            className="rounded-xl border border-[#dce0d8]/10 p-5 sm:p-7 md:row-span-2 md:p-9"
          >
            <ul>
              {sectionLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex min-h-12 items-center border-b border-[#dce0d8]/10 text-sm font-medium text-[#e7e9e5]/90 transition-colors hover:text-[#9ee65a] sm:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/#investments"
            className="group flex min-h-36 items-center justify-center gap-3 rounded-xl border border-[#dce0d8]/10 px-5 py-8 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#e7e9e5]/90 transition-colors hover:border-[#dce0d8]/25 hover:text-[#9ee65a] sm:text-sm"
          >
            Explore the investments
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex min-h-36 items-center justify-center rounded-xl border border-[#dce0d8]/10 px-5 py-4 text-[#e7e9e5]">
            <span className="font-sans text-2xl font-medium sm:text-3xl">MARS</span>
          </div>

          <div className="grid min-h-24 grid-cols-2 items-center justify-items-center gap-x-3 gap-y-1 rounded-xl border border-[#dce0d8]/10 px-4 py-3 text-xs font-medium text-[#e7e9e5]/90 sm:text-sm md:col-span-2 xl:grid-cols-4">
            <Link
              to="/privacy"
              className="flex min-h-11 items-center justify-center text-center transition-colors hover:text-[#9ee65a]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="flex min-h-11 items-center justify-center text-center transition-colors hover:text-[#9ee65a]"
            >
              Terms &amp; Conditions
            </Link>
            <a
              href="mailto:contact@MARScapital.ai"
              className="flex min-h-11 items-center justify-center text-center transition-colors hover:text-[#9ee65a]"
            >
              Contact
            </a>
            <a
              href="/#thesis"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 text-center transition-colors hover:text-[#9ee65a]"
            >
              Back to top <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-2 sm:px-8">
        <CurvedFooterWordmark scrollTarget={footerRef} />
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[#dce0d8]/15 py-4 font-sans text-xs uppercase tracking-[0.1em] text-[#e7e9e5]/75 sm:py-5 sm:text-sm">
          <span>© 2026 MARS Capital Management</span>
        </div>
      </div>
    </footer>
  );
}
