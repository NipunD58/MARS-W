import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Maximize2, X } from "lucide-react";
import { featureLayers, type FeatureLayer } from "@/data/features";

export function FeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedBrief, setSelectedBrief] = useState<FeatureLayer | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const total = featureLayers.length;
  const activeLayer = featureLayers[activeIndex] ?? featureLayers[0];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBrief) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, selectedBrief]);

  // Touch and pointer dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = e.clientX - startXRef.current;
    if (diff < -50) goToNext();
    else if (diff > 50) goToPrev();
  };

  if (!activeLayer) return null;

  return (
    <section id="methods" className="border-b border-border bg-background py-14 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Headline matching reference style */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-3 font-serif text-3xl leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
            Five core methods. One autonomous agricultural system.
          </h2>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-muted-foreground md:text-sm font-medium">
            Engineered from the ground up for small and marginal fields in India:
          </p>
        </div>

        {/* Pill Selection Tabs at the Top */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {featureLayers.map((layer, idx) => {
            const isCurrent = activeIndex === idx;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`rounded-full px-4 py-2 font-sans text-xs uppercase font-medium tracking-wider transition-all duration-300 cursor-pointer ${isCurrent
                    ? "bg-foreground text-background shadow-md"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                aria-pressed={isCurrent}
              >
                {layer.tabLabel}
              </button>
            );
          })}
        </div>

        {/* 3D Rotating Carousel Stage */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="relative mx-auto mt-10 h-[410px] w-full max-w-5xl select-none overflow-hidden [perspective:1400px] sm:mt-14 md:h-[510px]"
        >
          {/* Subtle curved orbit guideline */}
          <div className="pointer-events-none absolute bottom-12 left-1/2 h-44 w-[85%] -translate-x-1/2 rounded-[100%] border-b border-border/60 opacity-60" />

          {/* Cards positioned along 3D cylindrical arc */}
          <div className="relative h-full w-full [transform-style:preserve-3d]">
            {featureLayers.map((layer, idx) => {
              // Calculate circular offset relative to active card (-2, -1, 0, 1, 2)
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              // 3D positioning coordinates
              const translateX = offset * (isMobile ? 155 : 290);
              const translateZ = -Math.abs(offset) * (isMobile ? 70 : 110);
              const rotateY = -offset * (isMobile ? 18 : 24);
              const scale = 1 - Math.abs(offset) * (isMobile ? 0.15 : 0.12);
              const baseOpacity = isMobile ? (isCenter ? 1 : 0.35) : 1 - Math.abs(offset) * 0.35;
              const opacity = isVisible ? baseOpacity : 0;
              const zIndex = 30 - Math.abs(offset) * 10;

              return (
                <div
                  key={layer.id}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedBrief(layer);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: isVisible ? opacity : 0,
                    zIndex,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  className={`absolute top-4 left-1/2 -ml-[140px] h-[350px] w-[280px] rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:-ml-[160px] sm:h-[390px] sm:w-[320px] md:-ml-[175px] md:h-[420px] md:w-[350px] cursor-pointer ${layer.isAccent
                      ? "bg-[#AAE841] text-black shadow-2xl ring-2 ring-[#AAE841]/50"
                      : "border border-border bg-card text-card-foreground shadow-xl hover:border-foreground/40"
                    } ${isCenter ? "shadow-2xl ring-1 ring-border" : "hover:opacity-100"}`}
                >
                  {/* Card Inner Content */}
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl">
                    {/* Rendered graphic / blueprint */}
                    <div className="flex-1">{layer.renderGraphic()}</div>

                    {/* Footer bar with Brief Action */}
                    <div
                      className={`flex items-center justify-between border-t px-6 py-3.5 ${layer.isAccent
                          ? "border-black/20 text-black bg-black/5"
                          : "border-border bg-card/80 text-muted-foreground"
                        }`}
                    >
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                        {isCenter ? "Click to view brief" : "Select layer"}
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${layer.isAccent
                            ? "bg-black text-[#AAE841]"
                            : "border border-border text-foreground group-hover:border-foreground"
                          }`}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Arrow Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-40 md:left-6">
            <button
              type="button"
              onClick={goToPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-all hover:border-foreground hover:bg-card cursor-pointer"
              aria-label="Previous layer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-40 md:right-6">
            <button
              type="button"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-all hover:border-foreground hover:bg-card cursor-pointer"
              aria-label="Next layer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Feature Brief Drawer / Bottom Panel */}
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <p className="font-sans text-xs text-muted-foreground tracking-wide font-medium">
            Layer {activeLayer.tag} —{" "}
            <span className="text-foreground font-semibold">
              {activeLayer.title.replace("* ", "")}
            </span>
          </p>

          <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">
            {activeLayer.summary}
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setSelectedBrief(activeLayer)}
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-medium text-foreground underline underline-offset-4 hover:opacity-75 cursor-pointer"
            >
              <span>Inspect complete layer specification</span>
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Modal Brief Dialog */}
      {selectedBrief && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
        >
          <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl sm:p-6 md:p-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {selectedBrief.tag}
                </span>
                <h3 className="mt-1 font-display text-2xl uppercase tracking-tight text-foreground md:text-3xl">
                  {selectedBrief.title.replace("* ", "")}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBrief(null)}
                className="rounded border border-border p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                  Architecture Overview
                </h4>
                <p className="mt-2 text-base leading-relaxed text-foreground/90">
                  {selectedBrief.brief.overview}
                </p>
              </div>

              {/* Hardware specifications */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                  Industrial Hardware Stack
                </h4>
                <ul className="mt-2 space-y-1.5 font-sans text-xs text-foreground/85">
                  {selectedBrief.brief.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Metrics */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                  Telemetry Benchmarks
                </h4>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                  {selectedBrief.metrics.map(([label, value]) => (
                    <div key={label} className="border-l-2 border-foreground pl-3">
                      <dd className="font-display text-xl font-bold text-foreground md:text-2xl">
                        {value}
                      </dd>
                      <dt className="mt-0.5 font-sans text-[10px] uppercase font-medium text-muted-foreground tracking-wider">
                        {label}
                      </dt>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Safety Guarantee */}
              <div className="rounded-lg border border-border bg-muted/30 p-3.5 font-sans text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Operational Guarantee: </span>
                {selectedBrief.brief.assurance}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedBrief(null)}
                className="bg-foreground px-5 py-2 font-sans text-xs uppercase tracking-widest font-bold text-background transition-opacity hover:opacity-90 cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturesCarousel;
