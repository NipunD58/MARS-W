import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
const LetterM = lazy(() => import("@/components/LetterM"));
import { InvestmentsSection } from "@/components/InvestmentsSection";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { AwardsSection } from "@/components/AwardsSection";
import { investments } from "@/data/investments";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const team = [
  {
    name: "Daniel Reyes",
    role: "Founding Partner",
    img: team1,
    bio: "Former VP of Operations at an industrial automation company. Led deployment of 2,000+ robotic cells across North America.",
    track: [
      ["Angel investor", "60+ deals"],
      ["Automation operator", "VP Operations"],
      ["Recycling", "Board member"],
      ["Robotics fund I", "General partner"],
    ],
  },
  {
    name: "Maya Laurent",
    role: "Partner",
    img: team2,
    bio: "Mechanical engineer turned investor. Previously built the surgical robotics program at a medtech scale-up from prototype to FDA clearance.",
    track: [
      ["Medtech", "Head of robotics"],
      ["Deeptech fund", "Principal"],
      ["Engineering", "MSc, robotics"],
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axiom — Robotics Capital for Legacy Industries" },
      {
        name: "description",
        content:
          "Axiom invests in and deploys physical automation across recycling, healthcare and heavy manufacturing.",
      },
      { property: "og:title", content: "Axiom — Robotics Capital" },
      { property: "og:description", content: "Physical automation for legacy industries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return <span className={`font-display uppercase leading-none ${className}`}>AXIOM</span>;
}

function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <section
        id="thesis"
        className="grid border-b border-border md:min-h-screen md:grid-cols-[1fr_2fr]"
      >
        <div className="flex min-w-0 flex-col border-border px-5 pt-6 sm:px-6 sm:pt-8 md:border-r md:px-7">
          <a href="#">
            <Logo className="text-3xl" />
          </a>
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
          <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <a href="#thesis" className="flex items-center gap-3 text-sm uppercase">
              <span className="grid h-8 w-8 place-items-center border border-foreground">
                <span className="h-4 w-4 border border-foreground" />
              </span>
              Manifesto
            </a>
            <nav className="flex w-full max-w-full flex-wrap border border-foreground text-[10px] uppercase sm:w-auto sm:flex-nowrap sm:text-xs md:text-sm">
              {[
                ["Architecture", "#architecture"],
                ["Investments", "#investments"],
                ["Awards", "#awards"],
                ["Team", "#team"],
                ["Contact", "#contact"],
              ].map(([l, h], i) => (
                <a
                  key={l}
                  href={h}
                  className={`min-w-0 flex-1 px-1.5 py-2 text-center transition-colors hover:bg-foreground hover:text-background sm:flex-none sm:px-3 sm:text-left ${i ? "border-l border-foreground" : ""}`}
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <h1 className="mt-2 max-w-4xl font-serif text-[2.7rem] leading-[0.95] tracking-tight sm:mt-6 sm:text-5xl md:text-7xl lg:text-8xl">
            Robotics will reshape the global economy. Axiom deploys physical automation into legacy
            industries
          </h1>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 pt-0 sm:mt-auto sm:pt-16">
            <div className="flex items-center text-xs uppercase sm:text-sm">
              <span className="border border-foreground px-2.5 py-2 sm:px-3">PE discipline</span>
              <span className="h-px w-7 bg-foreground" />
              <span className="rounded-full border border-foreground px-2.5 py-2 sm:px-3">
                VC upside
              </span>
            </div>
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
              "recycling",
              "healthcare",
              "manufacturing",
              "logistics",
              "agriculture",
              "construction",
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
            Capital is common. Operators who have shipped robots are not.
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
          The future of robotics begins here
        </h2>
        <p className="mt-6 font-sans text-sm opacity-70">Invest with us or share an opportunity.</p>
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

      <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-border px-6 py-8 md:px-10">
        <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Logo className="text-3xl md:text-4xl" />
          <span className="font-sans text-xs text-muted-foreground">
            © 2026 Axiom Capital Management. All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-sans text-xs uppercase tracking-wider">
          <Link
            to="/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms & Conditions
          </Link>
          <a
            href="mailto:contact@axiomcapital.ai"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
