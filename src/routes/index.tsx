import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowDownRight, Bot, Menu, Play, Sparkles, X } from "lucide-react";
const LetterM = lazy(() => import("@/components/LetterM"));
import { ProblemSection } from "@/components/ProblemSection";
import { InvestmentsSection } from "@/components/InvestmentsSection";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { VideoSection } from "@/components/VideoSection";
import { AwardsSection } from "@/components/AwardsSection";
import { FuturePlansSection } from "@/components/FuturePlansSection";
import { SiteFooter } from "@/components/SiteFooter";
import { seoHead } from "@/lib/seo";
import team1 from "@/assets/team-1.jpg";

const team = [
  {
    name: "Nipun Dhawan",
    role: "Founder & Robotics Developer",
    img: team1,
    bio: "Robotics and automation researcher dedicated to building accessible, field-ready physical systems. Engineered MARS to bridge the gap between high-end precision robotics and the 80% of smallholder farmers in India left behind by industrial tractors.",
    track: [
      ["Robotics & Embedded Systems", "10+ years"],
      ["Autonomous Field Testing", "ESP32, 4x4 Mobility & Closed-Loop Irrigation"],
      ["MARS Project", "Founder & Lead Developer"],
    ],
  },
];

const navigationItems = [
  ["Problem", "#problem"],
  ["Challenges", "#challenges"],
  ["Methods", "#methods"],
  ["Video & IoT", "#video"],
  ["SDGs & Impact", "#observations"],
  ["Roadmap", "#future"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

const systemIndex = [
  { n: "01", name: "Problem & Abstract", href: "#problem" },
  { n: "02", name: "Challenges & Solutions", href: "#challenges" },
  { n: "03", name: "Methods & Architecture", href: "#methods" },
  { n: "04", name: "Field Video & IoT", href: "#video" },
  { n: "05", name: "SDG Goals & Observations", href: "#observations" },
  { n: "06", name: "Future Plans & Roadmap", href: "#future" },
];

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "MARS | Multifunctional Agricultural Robotic System",
      description:
        "Affordable AI & IoT-powered agricultural robotics engineered for small and marginal farmers in India. Sub-₹45,000 modular field rover.",
      path: "/",
    }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return <span className={`font-display uppercase leading-none ${className}`}>MARS</span>;
}

function Index() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section
        id="thesis"
        className="grid border-b border-border md:min-h-screen md:grid-cols-[1fr_2fr]"
      >
        <header className="relative z-50 col-span-1 flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6 md:col-span-2 md:px-7 md:py-5">
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="MARS home">
            <Logo className="text-3xl font-bold" />

          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center border border-foreground lg:hidden cursor-pointer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="home-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <nav
            id="home-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute right-5 top-full z-50 w-[min(22rem,calc(100vw-2.5rem))] flex-col border border-foreground bg-background text-xs uppercase shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:right-6 lg:static lg:flex lg:w-auto lg:flex-row lg:flex-nowrap lg:border-0 lg:bg-transparent lg:text-xs lg:shadow-none xl:text-sm`}
            onClick={() => setMenuOpen(false)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }
            }}
          >
            {navigationItems.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`border-b px-4 py-3 text-left transition-colors hover:bg-foreground hover:text-background last:border-b-0 lg:border-b-0 lg:px-3 lg:py-2 ${index ? "lg:border-l lg:border-foreground" : ""
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* Hero Left Column: 3D Model & System Index */}
        <div className="flex min-w-0 flex-col border-border px-5 pt-6 sm:px-6 sm:pt-8 md:border-r md:px-7">
          <div className="relative h-[36vh] min-h-[220px] flex-1 cursor-grab active:cursor-grabbing md:h-auto">
            {mounted && (
              <Suspense fallback={null}>
                <LetterM />
              </Suspense>
            )}
          </div>
          <ul className="mb-6 text-xs uppercase sm:mb-8 sm:text-sm">
            <li className="flex gap-6 border-y border-border py-2.5 sm:gap-10 sm:py-3 font-semibold text-muted-foreground">
              <span className="w-4">⊢</span> System Index
            </li>
            {systemIndex.map((item) => (
              <li key={item.n}>
                <a
                  href={item.href}
                  className="flex gap-6 border-b border-border py-2.5 transition-colors hover:text-accent sm:gap-10 sm:py-3"
                >
                  <span className="w-4 font-mono font-bold text-accent">{item.n}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Right Column: Big Editorial Statement & Stats */}
        <div className="relative flex min-w-0 flex-col px-5 pt-8 pb-8 sm:px-6 md:px-7 justify-between">
          <div>


            <h1 className="mt-0 max-w-4xl font-serif text-[2.7rem] leading-[0.95] tracking-tight sm:mt-4 sm:text-5xl md:text-7xl lg:text-[5.5rem]">
              Robotics will reshape agriculture. MARS empowers the smallholder farmer.
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-foreground/80 font-normal">
              About 80% of farmers in India own less than five acres of land. Heavy tractors cannot fit or be afforded. MARS introduces a sub-₹45,000 modular, autonomous robotic platform with closed-loop precision farming and real-time IoT telemetry.
            </p>

            {/* Quick Hero Metrics Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl font-sans text-xs">
              <div className="rounded-xl border border-border bg-card/70 p-3">
                <span className="font-display text-lg font-bold text-foreground block">80%</span>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider">Marginal Farmers</span>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-3">
                <span className="font-display text-lg font-bold text-foreground block">&lt; ₹45k</span>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider">System Unit Cost</span>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-3">
                <span className="font-display text-lg font-bold text-foreground block">24/7</span>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider">Continuous Work</span>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-3">
                <span className="font-display text-lg font-bold text-foreground block">6 Sensors</span>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider">Live IoT Matrix</span>
              </div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-4 pt-6 border-t border-border/80">
            <a
              href="#video"
              className="relative inline-flex items-center gap-3 bg-foreground px-6 py-4 font-sans text-xs uppercase tracking-widest font-bold text-background transition-opacity hover:opacity-90"
            >
              <Play className="h-4 w-4 fill-accent text-accent" />
              Watch Video Demonstration
            </a>
            <a
              href="#problem"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-4 font-sans text-xs uppercase tracking-widest font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Problem &amp; Abstract
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="overflow-hidden border-y border-border py-4 bg-muted/20">
        <div className="flex w-max animate-marquee gap-8 font-display text-xs uppercase tracking-widest sm:gap-12 sm:text-sm">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "PRECISION FARMING",
              "AUTONOMOUS SOWING",
              "WEEDING & HARVESTING",
              "ESP32 ROBOTICS",
              "SUB-₹45K HARDWARE",
              "SDG 2: ZERO HUNGER",
              "SDG 9: INNOVATION",
              "AI PEST DETECTION",
              "REAL-TIME IOT TELEMETRY",
              "CLOSED-LOOP IRRIGATION",
            ].map((w) => (
              <span key={w + k} className="flex items-center gap-8 sm:gap-12">
                {w}
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
            )),
          )}
        </div>
      </div>

      {/* 01: Problem Statement & Abstract */}
      <ProblemSection />

      {/* 02: Challenges & How MARS Overcomes Them */}
      <InvestmentsSection />

      {/* 03: Methods & Technical Architecture */}
      <FeaturesCarousel />

      {/* 04: Demonstration Video & IoT Dashboard */}
      <VideoSection />

      {/* 05: SDG Goals, Field Observations & Conclusions */}
      <AwardsSection />

      {/* 06: Future Plans & Research Roadmap */}
      <FuturePlansSection />

      {/* 07: Team Section */}
      <section
        id="team"
        className="grid grid-cols-1 bg-team text-team-foreground md:grid-cols-[1fr_2fr]"
      >
        <div className="border-team-foreground/25 px-6 py-16 md:border-r md:px-7">
          <span className="font-sans text-xs uppercase tracking-widest font-medium">⊢ Team &amp; Mission</span>
        </div>
        <div className="px-6 py-16 md:px-7">
          <h2 className="max-w-3xl font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
            Agricultural robots are common. Affordable ecosystem-based robots are not.
          </h2>
          {team.map((m) => (
            <div
              key={m.name}
              className="mt-16 grid gap-8 border-t border-team-foreground/25 pt-6 md:grid-cols-[180px_160px_1fr]"
            >
              <div className="text-sm uppercase leading-snug">
                <p className="font-bold">{m.name}</p>
                <p className="text-xs text-team-foreground/80 mt-1">{m.role}</p>
              </div>
              <img
                src={m.img}
                alt={m.name}
                width={816}
                height={816}
                loading="lazy"
                className="aspect-square w-40 object-cover grayscale mix-blend-multiply rounded-xl"
              />
              <div>
                <p className="max-w-xl text-base sm:text-lg text-team-foreground/90 leading-relaxed">{m.bio}</p>
                <dl className="mt-8 text-xs sm:text-sm uppercase">
                  {m.track.map(([a, b]) => (
                    <div
                      key={a}
                      className="grid grid-cols-2 border-t border-team-foreground/25 py-3 last:border-b"
                    >
                      <dt className="text-team-foreground/70 font-medium">{a}</dt>
                      <dd className="font-semibold">{b}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08: Contact & Community Section */}
      <section id="contact" className="bg-foreground px-6 py-24 text-background md:px-10">
        <h2 className="max-w-4xl font-display text-3xl uppercase md:text-6xl">
          The future of agricultural robotics begins here
        </h2>
        <p className="mt-6 font-sans text-sm sm:text-base opacity-75 max-w-2xl leading-relaxed">
          Join the MARS movement. Connect with us for field trial deployments, research collaborations, or bringing affordable agricultural automation to your region.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
            alert("Thank you for your interest in MARS! We will be in touch shortly.");
          }}
          className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-background/40 bg-transparent px-4 py-3 font-sans text-sm outline-none placeholder:text-background/50 focus:border-accent"
          />
          <button className="bg-accent px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold text-foreground cursor-pointer hover:opacity-90 transition-opacity">
            Connect
          </button>
        </form>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
