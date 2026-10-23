import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "motion/react";
import { investments, type InvestmentItem } from "@/data/investments";

const cardColors = ["#dedbd2", "#d0c8bb", "#cbd1c2", "#e2ded4", "#d4d8cc"];

interface InvestmentCardProps {
  investment: InvestmentItem;
  index: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
  registerCard: (index: number, element: HTMLDivElement | null) => void;
}

function InvestmentCard({
  investment,
  index,
  progress,
  reducedMotion,
  registerCard,
}: InvestmentCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const targetScale = 1 - (investments.length - index) * 0.035;
  const cardScale = useTransform(progress, [index * 0.18, 1], [1, targetScale]);

  return (
    <div
      ref={(element) => {
        containerRef.current = element;
        registerCard(index, element);
      }}
      data-index={index}
      className={`relative flex min-h-[max(140svh,760px)] items-start justify-center ${index === 0 ? "" : "-mt-[80svh]"
        }`}
    >
      <motion.article
        id={investment.anchorId}
        className="sticky grid h-[min(84svh,760px)] min-h-[min(80svh,540px)] w-full origin-top grid-rows-[1.05fr_0.95fr] overflow-hidden text-[#171714] shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:min-h-[min(80svh,640px)] md:grid-cols-[1.1fr_0.9fr] md:grid-rows-1"
        style={{
          top: `calc(-4svh + ${index * 20}px)`,
          zIndex: index + 1,
          backgroundColor: cardColors[index % cardColors.length],
          scale: reducedMotion ? 1 : cardScale,
        }}
      >
        <div className="flex min-h-0 flex-col justify-between overflow-y-auto p-5 sm:p-7 md:p-9 lg:p-11">
          <div>
            <div className="flex items-center justify-between border-b border-black/20 pb-3 font-display text-[10px] uppercase tracking-[0.15em] text-black/60">
              <span>Challenge &amp; Resolution</span>
              <span>
                {investment.n} / {String(investments.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c5a51] sm:text-xs">
              {investment.tags.join(" / ")}
            </p>
            <h3 className="mt-2 max-w-xl font-serif text-3xl leading-[0.95] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              {investment.name}
            </h3>

            {/* Structured Challenge & Solution breakdown */}
            <div className="mt-4 space-y-2.5">
              <div className="rounded-lg border border-black/15 bg-black/[0.04] p-3 text-xs leading-relaxed text-black/80 sm:text-sm">
                <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-black/60 mb-0.5">
                  The Problem
                </span>
                {investment.challenge}
              </div>

              <div className="rounded-lg border border-[#3e6b27]/30 bg-[#3e6b27]/10 p-3 text-xs leading-relaxed text-black font-medium sm:text-sm">
                <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-[#2e5519] mb-0.5">
                  How MARS Overcomes It
                </span>
                {investment.solution}
              </div>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-black/20 pt-4 sm:gap-4 sm:pt-5">
            {investment.stats.map(([label, value]) => (
              <div key={label}>
                <dd className="font-display text-sm tabular-nums sm:text-lg lg:text-xl font-bold">{value}</dd>
                <dt className="mt-1 text-[9px] uppercase leading-tight tracking-[0.04em] text-black/60 sm:text-[10px]">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-0 overflow-hidden md:order-last">
          <motion.div
            className="absolute inset-0"
            style={{ scale: reducedMotion ? 1 : imageScale }}
          >
            <img
              src={investment.img}
              alt={`${investment.name} solution deployment`}
              width={1280}
              height={832}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white drop-shadow">
            <span className="font-sans text-[10px] uppercase tracking-wider font-semibold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
              MARS Autonomous Field System
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6 text-white drop-shadow"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function InvestmentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const registerCard = (index: number, element: HTMLDivElement | null) => {
    cardRefs.current[index] = element;
  };

  const scrollToCard = (index: number) => {
    const el = cardRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const move = (direction: -1 | 1) => {
    scrollToCard((activeIndex + direction + investments.length) % investments.length);
  };

  return (
    <section id="challenges" className="border-y border-border bg-[#151513] text-[#f4f1e8]">
      <div className="mx-auto max-w-[1500px] px-5 pt-16 sm:px-8 md:px-12 md:pt-24">
        <div className="grid gap-12 pb-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20 lg:pb-20">
          <div>
            <h2 className="max-w-md font-serif text-4xl leading-[0.92] tracking-[-0.03em] sm:text-5xl md:text-7xl">
              Five systemic gaps. One robotic answer.
            </h2>
            <p className="mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-[#c8c5ba]">
              Small-scale farmers in India bear the brunt of labor shortages, machinery costs, and climate volatility. Scroll to explore how MARS tackles each barrier.
            </p>
          </div>

          <div className="flex items-end justify-between gap-5 border-b border-[#f4f1e8]/25 pb-4">
            <div>

              <p className="mt-3 font-sans text-xs tabular-nums text-[#c8c5ba]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(investments.length).padStart(2, "0")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="grid h-10 w-10 place-items-center border border-[#f4f1e8]/40 transition-colors hover:bg-[#f4f1e8] hover:text-[#151513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
                aria-label="Previous challenge"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="grid h-10 w-10 place-items-center border border-[#f4f1e8]/40 transition-colors hover:bg-[#f4f1e8] hover:text-[#151513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
                aria-label="Next challenge"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div ref={stackRef}>
          {investments.map((investment, index) => (
            <InvestmentCard
              key={investment.n}
              investment={investment}
              index={index}
              progress={scrollYProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
              registerCard={registerCard}
            />
          ))}
        </div>

        <nav
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-[#f4f1e8]/25 pb-16 md:pb-24 gap-3 pt-4"
          aria-label="Challenges navigation"
        >
          {investments.map((investment, index) => (
            <button
              key={investment.n}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`border-b py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer ${index === activeIndex
                ? "border-accent text-[#f4f1e8]"
                : "border-[#f4f1e8]/25 text-[#c8c5ba] hover:text-[#f4f1e8]"
                }`}
              aria-current={index === activeIndex ? "step" : undefined}
            >
              <span className="block font-sans text-xs tabular-nums text-accent font-semibold">{investment.n}</span>
              <span className="mt-1 block font-display text-[10px] uppercase tracking-tight sm:text-xs truncate">
                {investment.name}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default InvestmentsSection;
