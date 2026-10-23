import { ArrowDownRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import marsField from "@/assets/mars-field.jpg";

export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-border bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>

            <h2 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Problem Statement &amp; Abstract
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
            Empowering the 80% of Indian farmers operating on marginal landholdings with accessible robotics.
          </p>
        </div>

        {/* 2-Column Problem & Statistics Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Problem Statement */}
          <div className="space-y-8">
            <div>

              <h3 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl text-foreground">
                About 80% of farmers in India are small and marginal, owning less than five acres of land.
              </h3>
            </div>

            <ul className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-foreground/80">
              <li className="flex items-start gap-3 border-t border-border/80 pt-4">
                <span className="font-mono text-xs text-accent font-bold mt-1">01</span>
                <div>
                  <strong className="text-foreground block font-semibold">Tractor Dependency &amp; Labor Burden:</strong>
                  These farmers usually rent tractors at steep hourly rates or rely entirely on exhausting manual labor for day-to-day farming activities.
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-border/80 pt-4">
                <span className="font-mono text-xs text-accent font-bold mt-1">02</span>
                <div>
                  <strong className="text-foreground block font-semibold">The 20% Machinery Divide:</strong>
                  Only about 20% of farmers in India own their own tractors. Heavy agricultural machinery remains economically out of reach for the vast majority.
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-border/80 pt-4">
                <span className="font-mono text-xs text-accent font-bold mt-1">03</span>
                <div>
                  <strong className="text-foreground block font-semibold">Affordability &amp; Accessibility Paradox:</strong>
                  Due to high capital expenditure, rental shortages during peak seasons, and narrow field geometries, most smallholders historically prefer manpower over machines.
                </div>
              </li>
            </ul>

            {/* Key Questions Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="font-display text-xs uppercase tracking-wider text-muted-foreground block">
                The Driving Questions
              </span>
              <h4 className="mt-2 font-serif text-2xl text-foreground font-medium">
                How can we make agriculture truly technology-driven?
              </h4>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 font-sans text-xs">
                <div className="rounded-xl border border-border bg-background p-3.5">
                  <span className="font-bold text-accent text-sm block mb-1">01</span>
                  <span className="font-semibold text-foreground block">Reduce Dependence</span>
                  <span className="text-muted-foreground text-[11px] mt-1 block">
                    Eliminate exhausting manual field labor and seasonal worker shortages.
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-background p-3.5">
                  <span className="font-bold text-accent text-sm block mb-1">02</span>
                  <span className="font-semibold text-foreground block">Increase Productivity</span>
                  <span className="text-muted-foreground text-[11px] mt-1 block">
                    Boost crop yields with closed-loop precision sowing, weeding, and water dosing.
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-background p-3.5">
                  <span className="font-bold text-accent text-sm block mb-1">03</span>
                  <span className="font-semibold text-foreground block">Empower Farmers</span>
                  <span className="text-muted-foreground text-[11px] mt-1 block">
                    Free up time to explore alternative revenue streams and entrepreneurship.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Data & Metric Cards */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={marsField}
                alt="MARS agricultural robot operating in rural India"
                className="h-64 sm:h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans">
                <span className="rounded bg-background/90 px-2.5 py-1 font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Sub-5 Acre Terrain Validation
                </span>
                <span className="rounded bg-accent px-2 py-0.5 font-bold text-foreground">
                  4x4 Chassis
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <dd className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">80%</dd>
                <dt className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Small &amp; Marginal Farmers
                </dt>
                <p className="mt-2 text-xs text-muted-foreground leading-normal">
                  Cultivating less than five acres of fragmented land.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <dd className="font-display text-4xl sm:text-5xl font-extrabold text-destructive">20%</dd>
                <dt className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Own Tractors
                </dt>
                <p className="mt-2 text-xs text-muted-foreground leading-normal">
                  Leaving 80% dependent on costly rentals or manual labor.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-5">
              <div className="flex items-center gap-2 text-foreground font-display text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-accent" />
                MARS Value Proposition
              </div>
              <p className="mt-2 font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                Engineered to cost under ₹45,000, MARS replaces bulky ₹8L+ tractors with a lightweight, multi-modular robot suited for small fields where tractors cannot physically navigate.
              </p>
            </div>
          </div>
        </div>

        {/* Abstract Section Banner */}
        <div id="abstract" className="mt-20 rounded-3xl border border-border bg-foreground text-background p-6 sm:p-10 md:p-14 shadow-2xl">
          <div className="max-w-4xl space-y-6">


            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight">
              MARS is a farming robot designed to reduce farmers&apos; fieldwork, allowing them to explore new opportunities and boost crop yields.
            </h3>

            <div className="grid gap-6 pt-6 font-sans text-sm sm:text-base leading-relaxed text-background/85 md:grid-cols-2 border-t border-background/20">
              <p>
                It helps small farmers reduce their dependence on labor and is effective in small fields where tractors cannot be used. By utilizing MARS, farmers can generate additional revenue and enjoy a lifestyle similar to urban residents. This innovation will help transition the nation from an agro-based to an industrialized and mechanized society.
              </p>
              <p>
                Crucially, MARS protects farmers from field-related diseases and improves work consistency by minimizing human errors. MARS robots can operate continuously around the clock, enhancing productivity and addressing sleep-related human limitations. Technology in agriculture, like MARS, will also improve farmers&apos; access to markets, inputs, data, advice, loans, and insurance.
              </p>
            </div>

            {/* Core Abstract Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-background/20 font-sans text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-background font-semibold">Continuous 24/7 Run</strong>
                  Bypasses human fatigue and sleep constraints.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-background font-semibold">Disease Prevention</strong>
                  Protects from chemical &amp; hazardous fieldwork.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <TrendingUp className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-background font-semibold">Consistent Work</strong>
                  Minimizes human errors across sowing and weeding.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-background font-semibold">Ecosystem Access</strong>
                  Connects to inputs, data, loans, and crop insurance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
