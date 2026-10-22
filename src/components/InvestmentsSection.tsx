import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "motion/react";
import { investments, type InvestmentItem } from "@/data/investments";

const cardColors = ["#dedbd2", "#d0c8bb", "#cbd1c2"];

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
  const cardScale = useTransform(progress, [index * 0.2, 1], [1, targetScale]);

  return (
    <div
      ref={(element) => {
        containerRef.current = element;
        registerCard(index, element);
      }}
      data-index={index}
      className={`relative flex min-h-[max(140svh,760px)] items-start justify-center ${
        index === 0 ? "" : "-mt-[80svh]"
      }`}
    >
      <motion.article
        id={investment.anchorId}
        className="sticky grid h-[min(80svh,720px)] min-h-[min(80svh,520px)] w-full origin-top grid-rows-[0.78fr_1.22fr] overflow-hidden text-[#171714] shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:min-h-[min(80svh,620px)] md:grid-cols-[0.92fr_1.08fr] md:grid-rows-1"
        style={{
          top: `calc(-5svh + ${index * 22}px)`,
          zIndex: index + 1,
          backgroundColor: cardColors[index % cardColors.length],
          scale: reducedMotion ? 1 : cardScale,
        }}
      >
        <div className="flex min-h-0 flex-col justify-between p-5 sm:p-8 md:p-10 lg:p-12">
          <div>
            <div className="flex items-center justify-between border-b border-black/20 pb-4 font-display text-[10px] uppercase tracking-[0.15em] text-black/60">
              <span>Live deployment</span>
              <span>
                {investment.n} / {String(investments.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5c5a51] sm:text-xs">
              {investment.tags.join(" / ")}
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-4xl leading-[0.9] tracking-[-0.025em] sm:text-5xl lg:text-6xl xl:text-7xl">
              {investment.name}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/70 sm:mt-6 sm:text-base">
              {investment.body}
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-black/20 pt-4 sm:gap-5 sm:pt-5">
            {investment.stats.map(([label, value]) => (
              <div key={label}>
                <dd className="font-display text-base tabular-nums sm:text-xl">{value}</dd>
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
              alt={`${investment.name} deployment`}
              width={1280}
              height={832}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <ArrowUpRight
            aria-hidden="true"
            className="absolute bottom-5 right-5 h-7 w-7 text-white drop-shadow sm:bottom-8 sm:right-8 sm:h-8 sm:w-8"
          />
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
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset["index"]);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { rootMargin: "-18% 0px -18% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const registerCard = (index: number, element: HTMLDivElement | null) => {
    cardRefs.current[index] = element;
  };

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const move = (direction: -1 | 1) => {
    scrollToCard((activeIndex + direction + investments.length) % investments.length);
  };

  return (
    <section id="investments" className="border-y border-border bg-[#151513] text-[#f4f1e8]">
      <div className="mx-auto max-w-[1500px] px-5 pt-16 sm:px-8 md:px-12 md:pt-24">
        <div className="grid gap-12 pb-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20 lg:pb-20">
          <div>
            <div className="mb-8 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#c8c5ba]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Capital in motion
            </div>
            <h2 className="max-w-md font-serif text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl md:text-8xl">
              Built for the floor, not the pitch deck.
            </h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-[#c8c5ba]">
              Scroll to move through the systems that make physical automation useful where work
              actually happens.
            </p>
          </div>

          <div className="flex items-end justify-between gap-5 border-b border-[#f4f1e8]/25 pb-4">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.16em] text-[#c8c5ba]">
                Scroll-driven deployments
              </p>
              <p className="mt-3 font-sans text-xs tabular-nums text-[#c8c5ba]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(investments.length).padStart(2, "0")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="grid h-10 w-10 place-items-center border border-[#f4f1e8]/40 transition-colors hover:bg-[#f4f1e8] hover:text-[#151513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Previous investment"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="grid h-10 w-10 place-items-center border border-[#f4f1e8]/40 transition-colors hover:bg-[#f4f1e8] hover:text-[#151513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Next investment"
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
          className="grid grid-cols-3 border-t border-[#f4f1e8]/25 pb-16 md:pb-24"
          aria-label="Investment projects"
        >
          {investments.map((investment, index) => (
            <button
              key={investment.n}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`border-b py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                index === activeIndex
                  ? "border-accent text-[#f4f1e8]"
                  : "border-[#f4f1e8]/25 text-[#c8c5ba] hover:text-[#f4f1e8]"
              }`}
              aria-current={index === activeIndex ? "step" : undefined}
            >
              <span className="block font-sans text-xs tabular-nums">{investment.n}</span>
              <span className="mt-2 block font-display text-[10px] uppercase tracking-tight sm:text-sm">
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
