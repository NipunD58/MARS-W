import { useState } from "react";
import { Award, ChevronDown, ChevronUp, Sparkles, ShieldCheck } from "lucide-react";
import {
  awardsData,
  awardCategories,
  awardStats,
  type AwardCategory,
  type AwardItem,
} from "@/data/awards";

export function AwardsSection() {
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory>("All");
  const [expandedId, setExpandedId] = useState<string>("ieee-2025");

  const filteredAwards = awardsData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  );

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="awards"
      aria-label="Awards and Industry Recognition"
      className="grid grid-cols-1 border-b border-border bg-background md:grid-cols-[1fr_2fr]"
    >
      {/* Left Column: Metadata, Filters & Institutional Stats */}
      <div className="flex flex-col border-border px-6 py-16 md:border-r md:px-7">
        <div className="space-y-10 md:sticky md:top-12 md:space-y-12">
          {/* Section Marker */}
          <div>
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
              ⊢ Recognition
            </span>
            <div className="mt-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-foreground" />
              <h3 className="font-display text-xl uppercase tracking-tight text-foreground">
                Awards Won
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-sans">
              International peer recognitions across robotics engineering, on-premise AI, and
              deeptech investment performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div>
            <span className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-3">
              Filter by Discipline:
            </span>
            <div className="flex flex-wrap gap-2">
              {awardCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3 py-1.5 font-sans text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-foreground text-background shadow-xs font-semibold"
                        : "border border-border bg-card/60 text-muted-foreground hover:border-foreground hover:text-foreground font-medium"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Institutional Stats Summary */}
          <div className="border-t border-border pt-6">
            <span className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-4">
              Institutional Track Record:
            </span>
            <dl className="grid grid-cols-2 gap-4">
              {awardStats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-foreground pl-3">
                  <dd className="font-display text-2xl font-bold text-foreground">{stat.value}</dd>
                  <dt className="mt-1 font-sans text-[10px] uppercase font-semibold text-muted-foreground tracking-wider leading-tight">
                    {stat.label}
                  </dt>
                  <p className="mt-0.5 text-[10px] text-muted-foreground/75 font-sans">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Verified Quality Seal */}
          <div className="rounded-xl border border-border bg-card/60 p-4 font-sans text-xs shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#AAE841]" />
              <span className="uppercase text-[11px] tracking-wider">
                Independent Jury Validation
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground font-sans">
              All listed distinctions represent non-sponsored competitive evaluations validated by
              academic, engineering, and tier-1 industrial committees.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Editorial Headline & Interactive Award List */}
      <div className="px-6 py-16 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 font-sans text-[11px] uppercase tracking-wider font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-[#AAE841]" />
            <span>Competitive Honors &amp; Benchmarks</span>
          </div>

          <h2 className="mt-4 font-serif text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Engineering excellence proven under industrial conditions.
          </h2>

          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-muted-foreground md:text-sm font-medium">
            Peer-reviewed breakthroughs in physical robotics, edge AI inference, and deeptech scale:
          </p>
        </div>

        {/* Awards Accordion List */}
        <div className="mt-12 divide-y divide-border border-y border-border">
          {filteredAwards.map((item: AwardItem) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                key={item.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? "bg-card/40" : "hover:bg-card/20"
                }`}
              >
                {/* Clickable Row Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors cursor-pointer"
                >
                  <div className="flex-1 space-y-2">
                    {/* Meta Row: Year + Category + Organization */}
                    <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
                      <span className="rounded border border-foreground/30 bg-foreground/5 px-2 py-0.5 font-bold text-foreground">
                        {item.year}
                      </span>
                      <span className="text-muted-foreground">/</span>
                      <span className="text-muted-foreground uppercase font-medium">
                        {item.category}
                      </span>
                      <span className="text-muted-foreground">/</span>
                      <span className="font-semibold text-foreground/90">{item.organization}</span>
                      {item.isFeatured && (
                        <span className="ml-auto inline-flex items-center rounded-full bg-[#AAE841]/20 px-2.5 py-0.5 font-sans text-[10px] font-bold text-foreground border border-[#AAE841]">
                          ★ {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Award Title */}
                    <h3 className="font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl pt-1">
                      {item.title}
                    </h3>

                    {/* Associated Project / Technology */}
                    <p className="font-sans text-xs text-muted-foreground">
                      <span className="text-foreground/70 font-medium">Nominated Work:</span>{" "}
                      {item.project}
                    </p>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300">
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* Expandable Citation & Metric Drawer */}
                {isExpanded && (
                  <div className="pb-8 pt-2 transition-all">
                    <div className="grid gap-6 rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-6 md:grid-cols-[2fr_1fr]">
                      {/* Jury Citation */}
                      <div>
                        <h4 className="font-sans text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                          Official Jury Citation
                        </h4>
                        <blockquote className="mt-2 text-base leading-relaxed text-foreground/95 font-serif italic border-l-2 border-foreground pl-4">
                          "{item.citation}"
                        </blockquote>
                        <div className="mt-4 flex items-center gap-2 font-sans text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>Issuing Authority: {item.organization}</span>
                        </div>
                      </div>

                      {/* Verified Impact Metric Box */}
                      <div className="flex flex-col justify-between rounded-xl border border-border bg-muted/40 p-4">
                        <div>
                          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                            Verified Metric
                          </span>
                          <p className="mt-1 font-display text-3xl font-extrabold text-foreground">
                            {item.impactMetric.value}
                          </p>
                          <p className="font-sans text-xs text-foreground/80 font-medium">
                            {item.impactMetric.label}
                          </p>
                        </div>

                        <div className="mt-4 border-t border-border pt-2 font-sans text-[10px] text-muted-foreground flex justify-between">
                          <span>AUDIT STATUS</span>
                          <span className="font-bold text-foreground">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Footer Note & Document Link */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 font-sans text-xs text-muted-foreground">
          <span>Total archive: 18 competitive awards &amp; citations (2020 – 2026)</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 uppercase tracking-wider text-foreground hover:underline underline-offset-4 font-semibold"
          >
            <span>Request full institutional dossier</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
