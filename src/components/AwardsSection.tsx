import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  awardCategories,
  awardStats,
  awardsData,
  type AwardCategory,
  type AwardItem,
} from "@/data/awards";

export function AwardsSection() {
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory>("All");
  const [selectedId, setSelectedId] = useState("sdg-02");
  const filteredAwards = awardsData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  );
  const selectedAward = filteredAwards.find((item) => item.id === selectedId) ?? filteredAwards[0];

  const selectCategory = (category: AwardCategory) => {
    setSelectedCategory(category);
    const firstMatch = awardsData.find((item) => category === "All" || item.category === category);
    if (firstMatch) setSelectedId(firstMatch.id);
  };

  if (!selectedAward) return null;

  return (
    <section id="observations" className="bg-[#151515] text-white" aria-label="SDG Goals and Observations">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#AAE841]">
              IMPACT, SDGS &amp; OBSERVATIONS
            </span>
            <h2 className="mt-3 max-w-sm font-serif text-4xl leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">
              Validated in the field, aligned with global goals.
            </h2>
            <p className="mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-white/70">
              The MARS project showcases the transformative potential of robots and AI in agriculture: navigating tough terrain, automating labor-intensive tasks, and protecting farmer wellbeing.
            </p>

            <dl className="mt-10 grid grid-cols-2 border-t border-white/15">
              {awardStats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-white/15 py-4 pr-4">
                  <dd className="font-display text-xl sm:text-2xl text-[#AAE841] font-bold">{stat.value}</dd>
                  <dt className="mt-1 text-[10px] uppercase leading-tight tracking-wider text-white/60">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/65">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#AAE841]" />
              <span>Directly targeting UN SDG Goal 2 (Zero Hunger) &amp; Goal 9 (Industry, Innovation &amp; Infrastructure).</span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-white/50">
                SDG Goals, Field Observations &amp; Conclusions
              </p>
              <a
                href="#future"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white transition-colors hover:text-[#AAE841] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AAE841]"
              >
                View Future Roadmap <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Categories">
              {awardCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AAE841] ${
                    selectedCategory === category
                      ? "bg-[#AAE841] text-black font-bold"
                      : "border border-white/20 text-white/60 hover:border-white/60 hover:text-white"
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-9 border-t border-white/20">
              {filteredAwards.map((item: AwardItem) => {
                const isSelected = item.id === selectedAward.id;
                return (
                  <article
                    key={item.id}
                    className={`border-b border-white/15 transition-colors ${
                      isSelected ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className="grid w-full grid-cols-[60px_1fr_24px] items-start gap-4 px-3 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#AAE841] sm:grid-cols-[80px_1fr_24px] sm:px-5 cursor-pointer"
                      aria-expanded={isSelected}
                    >
                      <span className="font-mono text-xs uppercase text-[#AAE841] font-semibold">
                        {item.year}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-serif text-lg leading-tight text-white sm:text-xl font-medium">
                            {item.title}
                          </h3>
                          <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-white/70">
                            {item.category}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-white/50">{item.organization}</p>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-white/40 transition-transform ${
                          isSelected ? "rotate-180 text-[#AAE841]" : ""
                        }`}
                      />
                    </button>

                    {isSelected && (
                      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
                        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#AAE841] font-semibold block">
                              Detailed Analysis
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-white/85">
                              {item.citation}
                            </p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-between">
                            <div>
                              <span className="text-[9px] uppercase tracking-wider text-white/50 block">
                                Key Measured Impact
                              </span>
                              <div className="mt-1 font-display text-2xl font-bold text-[#AAE841]">
                                {item.impactMetric.value}
                              </div>
                              <span className="text-xs text-white/70">
                                {item.impactMetric.label}
                              </span>
                            </div>
                            <div className="mt-4 border-t border-white/10 pt-3 flex items-center justify-between text-[10px] text-white/50">
                              <span>VERIFICATION</span>
                              <span className="text-white font-semibold">{item.badge}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
