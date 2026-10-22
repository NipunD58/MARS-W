import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
const LetterM = lazy(() => import("@/components/LetterM"));
import { InvestmentsSection } from "@/components/InvestmentsSection";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { AwardsSection } from "@/components/AwardsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { investments } from "@/data/investments";
import { seoHead } from "@/lib/seo";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const team = [
  {
    name: "Nipun Dhawan",
    role: "Founder",
    img: team1,
    bio: "Robotics enthusiast with experience in robotics and automation. Spent a lot of time building robotic systems for recycling and reuse to extend product lifecycles.",
    track: [
      ["Robotics enthusiast", "10+ years"],
      ["Recycling", "Built robotic systems for recycling and reuse"],
      ["MARS", "Founder"],
    ],
  },

];

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "MARS | Agricultural Robotics",
      description:
        "MARS stands for multifunctional agricultural robotic system which is made to help farmers",
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
      <section
        id="thesis"
        className="grid border-b border-border md:min-h-screen md:grid-cols-[1fr_2fr]"
      >
        <header className="relative z-50 col-span-1 flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6 md:col-span-2 md:px-7 md:py-5">
          <a href="#" className="shrink-0" aria-label="MARS home">
            <Logo className="text-3xl" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center border border-foreground lg:hidden"
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
            {[
              ["Architecture", "#architecture"],
              ["Investments", "#investments"],
              ["Awards", "#awards"],
              ["Team", "#team"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`border-b px-4 py-3 text-left transition-colors hover:bg-foreground hover:text-background last:border-b-0 lg:border-b-0 lg:px-3 lg:py-2 ${index ? "lg:border-l lg:border-foreground" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>
        <div className="flex min-w-0 flex-col border-border px-5 pt-6 sm:px-6 sm:pt-8 md:border-r md:px-7">
          <div className="relative h-[36vh] min-h-[220px] flex-1 cursor-grab active:cursor-grabbing md:h-auto">
            {mounted && (
              <Suspense fallback={null}>
                <LetterM />
              </Suspense>
            )}
          </div>
          <ul className="mb-6 text-xs uppercase sm:mb-8 sm:text-sm">
            <li className="flex gap-6 border-y border-border py-2.5 sm:gap-10 sm:py-3">
              <span className="w-4">⊢</span>Investments
            </li>
            {investments.map((inv) => (
              <li key={inv.n}>
                <a
                  href={`#${inv.anchorId}`}
                  className="flex gap-6 border-b border-border py-2.5 transition-colors hover:text-muted-foreground sm:gap-10 sm:py-3"
                >
                  <span className="w-4">{inv.n}</span>
                  {inv.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex min-w-0 flex-col px-5 pt-8 pb-8 sm:px-6 md:px-7">
          <h1 className="mt-0 max-w-4xl font-serif text-[2.7rem] leading-[0.95] tracking-tight sm:mt-6 sm:text-5xl md:text-7xl lg:text-8xl">
            Robotics will reshape the global economy. MARS is there to help the farmer.
          </h1>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 pt-0 sm:mt-auto sm:pt-16">
            <a
              href="#contact"
              className="relative flex h-28 w-full max-w-sm items-end bg-brand p-4 text-xl text-brand-foreground transition-opacity hover:opacity-90 sm:h-32 sm:p-6 sm:text-2xl"
            >
              <span className="absolute right-4 top-4 h-8 w-8 border-l border-t border-brand-foreground/80 [transform:scaleX(-1)]" />
              Join the revolution
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border py-4">
        <div className="flex w-max animate-marquee gap-8 font-display text-base uppercase sm:gap-12 sm:text-xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "precision farming",
              "sustainable farming",
              "optimization",
              "logistics",
              "agriculture",
              "AI",
            ].map((w) => (
              <span key={w + k} className="flex items-center gap-8 sm:gap-12">
                {w}
                <span className="h-2 w-2 bg-accent" />
              </span>
            )),
          )}
        </div>
      </div>

      <FeaturesCarousel />

      <InvestmentsSection />

      <AwardsSection />

      <section
        id="team"
        className="grid grid-cols-1 bg-team text-team-foreground md:grid-cols-[1fr_2fr]"
      >
        <div className="border-team-foreground/25 px-6 py-16 md:border-r md:px-7">
          <span className="font-sans text-xs uppercase tracking-widest font-medium">⊢ Team</span>
        </div>
        <div className="px-6 py-16 md:px-7">
          <h2 className="max-w-3xl font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
            Agricultural robots are common. Affordable ecosystem-based robots are not.
          </h2>
          {team.map((m) => (
            <div
              key={m.name}
              className="mt-20 grid gap-8 border-t border-team-foreground/25 pt-6 md:grid-cols-[180px_160px_1fr]"
            >
              <div className="text-sm uppercase leading-snug">
                <p>{m.name}</p>
                <p>{m.role}</p>
                <a href="#" className="text-team-foreground/60 hover:text-team-foreground">
                  LinkedIn
                </a>
              </div>
              <img
                src={m.img}
                alt={m.name}
                width={816}
                height={816}
                loading="lazy"
                className="aspect-square w-40 object-cover grayscale mix-blend-multiply"
              />
              <div>
                <p className="max-w-xl text-lg text-team-foreground/85">{m.bio}</p>
                <dl className="mt-10 text-sm uppercase">
                  {m.track.map(([a, b]) => (
                    <div
                      key={a}
                      className="grid grid-cols-2 border-t border-team-foreground/25 py-3 last:border-b"
                    >
                      <dt className="text-team-foreground/70">{a}</dt>
                      <dd>{b}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-foreground px-6 py-24 text-background md:px-10">
        <h2 className="max-w-4xl font-display text-3xl uppercase md:text-6xl">
          The future of agricultural robotics begins here
        </h2>
        <p className="mt-6 font-sans text-sm opacity-70">Join the MARS movement</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
            alert("Thanks — we'll be in touch.");
          }}
          className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-background/40 bg-transparent px-4 py-3 font-sans text-sm outline-none placeholder:text-background/50 focus:border-accent"
          />
          <button className="bg-accent px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold text-foreground">
            Submit
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
