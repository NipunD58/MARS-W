import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

interface SmoothScrollProps {
  children: ReactNode;
}

function HashScrollHandler() {
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    if (!lenis) return;

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      }
    }
  }, [lenis, location.pathname, location.hash]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: false,
        anchors: true,
      }}
    >
      <HashScrollHandler />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
