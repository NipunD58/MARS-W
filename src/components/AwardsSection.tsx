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
  const [selectedId, setSelectedId] = useState("ieee-2025");
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
    <section id="awards" className="bg-[#151515] text-white" aria-label="Awards and recognition">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20">
          <div>
            <h2 className="max-w-sm font-serif text-5xl leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl md:text-8xl">
              Recognition that survives contact with reality.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/60">
              A record of work evaluated by the engineering, industrial, and capital communities
              MARS serves.
            </p>

            <dl className="mt-12 grid grid-cols-2 border-t border-white/15">
              {awardStats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-white/15 py-5 pr-4">
                  <dd className="font-display text-2xl text-[#AAE841]">{stat.value}</dd>
                  <dt className="mt-2 text-[10px] uppercase leading-tight tracking-wider text-white/55">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/55">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#AAE841]" />
              <span>Independent jury validation across every listed distinction.</span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-white/50">
                The archive / 2023—2025
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white transition-colors hover:text-[#AAE841] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AAE841]"
              >
                Request dossier <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Award categories">
              {awardCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AAE841] ${selectedCategory === category
                      ? "bg-[#AAE841] text-black"
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
                    className={`border-b border-white/15 transition-colors ${isSelected ? "bg-white/[0.06]" : ""
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className="grid w-full grid-cols-[50px_1fr_24px] items-start gap-4 px-3 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#AAE841] sm:grid-cols-[70px_1fr_24px] sm:px-5"
                      aria-expanded={isSelected}
                    >
                      <span className="font-display text-xs text-[#AAE841]">{item.year}</span>
                      <span>
                        <span className="block font-sans text-base font-semibold leading-tight text-white sm:text-lg">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-[10px] uppercase tracking-wider text-white/45">
                          {item.organization} / {item.category}
                        </span>
                      </span>
                      <ChevronDown
                        className={`mt-1 h-4 w-4 text-white/50 transition-transform ${isSelected ? "rotate-180 text-[#AAE841]" : ""
                          }`}
                      />
                    </button>

                    {isSelected && (
                      <div className="grid gap-7 px-3 pb-6 sm:grid-cols-[1fr_190px] sm:px-[95px]">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-white/45">
                            Recognized work
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/75">
                            {item.project}
                          </p>
                          <blockquote className="mt-5 border-l border-[#AAE841] pl-4 font-serif text-lg italic leading-relaxed text-white/90">
                            “{item.citation}”
                          </blockquote>
                        </div>
                        <div className="self-start border border-white/15 p-4">
                          <p className="text-[10px] uppercase tracking-wider text-white/45">
                            Verified metric
                          </p>
                          <p className="mt-3 font-display text-2xl text-[#AAE841]">
                            {item.impactMetric.value}
                          </p>
                          <p className="mt-1 text-xs text-white/65">{item.impactMetric.label}</p>
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
