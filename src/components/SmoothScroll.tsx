import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const hash = anchor.getAttribute("href");
      if (!hash) return;

      const id = hash === "#" ? "" : decodeURIComponent(hash.slice(1));
      const element = id ? document.getElementById(id) : null;
      if (hash !== "#" && !element) return;

      event.preventDefault();
      if (id) {
        window.history.pushState(null, "", `#${encodeURIComponent(id)}`);
      } else {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
      }
      lenis.scrollTo(element ?? 0, { offset: -80, duration: 1.4 });
    };

    document.addEventListener("click", handleAnchorClick);

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };
    frameId = window.requestAnimationFrame(raf);

    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const element = document.getElementById(id);
      if (element) {
        window.setTimeout(() => {
          lenis.scrollTo(element, { offset: -80, duration: 1.4 });
        }, 0);
      }
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useLenisScroll();
  return children;
}

export default SmoothScroll;
