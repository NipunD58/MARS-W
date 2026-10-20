import Lenis from "lenis";
import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

interface SmoothScrollProps {
  children: ReactNode;
}

function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false,
      anchors: { duration: 1.1 },
    });
    lenisRef.current = lenis;

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };
    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    const lenis = lenisRef.current;
    if (!target || !lenis) return;

    const timer = window.setTimeout(() => {
      lenis.scrollTo(target, { duration: 1.1, offset: 0 });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useLenisScroll();
  return children;
}

export default SmoothScroll;
