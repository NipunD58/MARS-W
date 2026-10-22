import type { RefObject } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function CurvedFooterWordmark({
  scrollTarget,
}: {
  scrollTarget: RefObject<HTMLElement | null>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const path = useTransform(scrollYProgress, (progress) => {
    const curve = prefersReducedMotion ? 0 : 1 - Math.min(1, Math.max(0, progress));
    const controlY = 480 - 200 * curve;
    return `M 0 480 Q 720 ${controlY} 1440 480`;
  });

  return (
    <div className="flex h-full min-h-36 w-full items-center overflow-hidden" aria-label="MARS">
      <span className="sr-only">MARS</span>
      <svg
        aria-hidden="true"
        className="block h-auto w-[112%] -translate-x-[5.4%]"
        viewBox="0 0 1440 520"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path id="mars-footer-curve" d={path} fill="none" />
        <text
          fill="currentColor"
          fontFamily="Archivo, sans-serif"
          fontSize="520"
          fontWeight="900"
          letterSpacing="-0.07em"
        >
          <textPath href="#mars-footer-curve" startOffset="50%" textAnchor="middle">
            MARS
          </textPath>
        </text>
      </svg>
    </div>
  );
}
