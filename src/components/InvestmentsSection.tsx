import { useEffect, useRef, useState } from "react";
import { investments } from "@/data/investments";

export function InvestmentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const isManualRef = useRef(false);
  const manualTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || isManualRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const current = -rect.top;
      const progress = Math.min(Math.max(current / totalScrollable, 0), 1);

      if (rect.top <= 100 && rect.bottom >= windowHeight - 100) {
        if (progress < 0.35) {
          setActiveIndex(0);
        } else if (progress < 0.7) {
          setActiveIndex(1);
        } else {
          setActiveIndex(2);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (i: number) => {
    if (!sectionRef.current) return;

    if (activeIndex === i) {
      setActiveIndex(null);
      return;
    }

    setActiveIndex(i);
    isManualRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualRef.current = false;
    }, 900);

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    const targetProgress = i === 0 ? 0.05 : i === 1 ? 0.5 : 0.88;
    const targetScroll = window.scrollY + rect.top + totalScrollable * targetProgress;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div ref={sectionRef} className="relative min-h-0 md:min-h-[160vh]">
      {/* Anchor targets for external/hero links */}
      <div id="investments" className="absolute top-0 pointer-events-none" />
      <div id="inv-01" className="absolute top-0 pointer-events-none" />
      <div id="inv-02" className="absolute top-[38%] pointer-events-none" />
      <div id="inv-03" className="absolute top-[75%] pointer-events-none" />

      {/* Sticky viewport frame */}
      <section className="sticky top-0 flex min-h-screen flex-col justify-start px-6 py-8 md:justify-center md:px-10 md:py-12">
        <div className="mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 md:mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                ⊢ Investments
              </h2>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="hidden font-sans text-[11px] uppercase tracking-wider font-medium text-muted-foreground sm:inline-block">
                Robotics Deployments
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Segmented progress indicator */}
              <div className="flex items-center gap-1.5">
                {investments.map((inv, i) => (
                  <button
                    key={inv.n}
                    type="button"
                    onClick={() => handleItemClick(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activeIndex === i
                        ? "w-8 bg-accent"
                        : "w-2 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                    aria-label={`Go to ${inv.name}`}
                  />
                ))}
              </div>

              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                [{activeIndex !== null ? `0${activeIndex + 1}` : "--"} / 03]
              </span>

              <span className="hidden items-center gap-1.5 font-sans text-[10px] uppercase font-medium text-muted-foreground md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Scroll Driven
              </span>
            </div>
          </div>

          {/* Investment list / smooth accordion */}
          <div className="divide-y divide-border border-b border-border">
            {investments.map((inv, i) => {
              const isOpen = activeIndex === i;

              return (
                <article key={inv.n} className="group">
                  <button
                    type="button"
                    onClick={() => handleItemClick(i)}
                    className={`grid w-full grid-cols-12 items-center gap-4 py-4 text-left transition-colors duration-300 md:py-5 cursor-pointer ${
                      isOpen ? "text-foreground" : "text-foreground/80 hover:text-foreground"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="col-span-2 flex items-center gap-2 font-sans text-sm font-semibold md:col-span-1">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          isOpen ? "scale-100 bg-accent" : "scale-0 bg-transparent"
                        }`}
                      />
                      {inv.n}
                    </span>

                    <span className="col-span-7 min-w-0 font-display text-base uppercase tracking-tight transition-transform duration-300 sm:text-lg md:col-span-5 md:text-2xl lg:text-3xl">
                      {inv.name}
                    </span>

                    <span className="hidden gap-2 md:col-span-4 md:flex">
                      {inv.tags.map((t) => (
                        <span
                          key={t}
                          className={`border px-2 py-0.5 font-sans text-[10px] uppercase tracking-wider font-medium transition-colors duration-300 ${
                            isOpen
                              ? "border-foreground/40 bg-foreground/5 text-foreground"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </span>

                    <span className="col-span-3 flex items-center justify-end gap-2 text-right font-sans text-[10px] uppercase tracking-wider sm:text-xs md:col-span-2">
                      <span className="hidden text-muted-foreground sm:inline font-medium">
                        {isOpen ? "Close" : "More"}
                      </span>
                      <span
                        className={`grid h-6 w-6 place-items-center rounded border transition-all duration-300 ${
                          isOpen
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {/* Smooth drawer expansion */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-6 pt-2 pb-6 md:grid-cols-2 md:gap-10 md:pb-8">
                        {/* Image preview */}
                        <div className="relative overflow-hidden rounded border border-border bg-muted">
                          <img
                            src={inv.img}
                            alt={inv.name}
                            width={1280}
                            height={832}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                          />
                          <div className="absolute top-3 left-3 flex items-center gap-2 rounded bg-background/85 px-2.5 py-1 font-sans text-[10px] uppercase tracking-wider font-semibold backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            Active Deployment
                          </div>
                        </div>

                        {/* Description & Metrics */}
                        <div className="flex flex-col justify-between gap-6">
                          <div>
                            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
                              Thesis & Impact
                            </span>
                            <p className="mt-2 text-base leading-relaxed text-foreground/90 md:text-lg font-sans">
                              {inv.body}
                            </p>
                          </div>

                          <dl className="grid grid-cols-3 gap-3 md:gap-4 border-t border-border pt-4">
                            {inv.stats.map(([l, v]) => (
                              <div key={l} className="border-l-2 border-foreground pl-3 md:pl-4">
                                <dd className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                                  {v}
                                </dd>
                                <dt className="mt-1 font-sans text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                                  {l}
                                </dt>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestmentsSection;
