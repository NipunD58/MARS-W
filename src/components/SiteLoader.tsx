import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitDelay = reducedMotion ? 300 : 1500;
    const exitDuration = reducedMotion ? 0 : 1050;

    const exitTimer = window.setTimeout(() => setIsExiting(true), exitDelay);
    const removeTimer = window.setTimeout(() => setIsVisible(false), exitDelay + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`site-loader ${isExiting ? "site-loader--exiting" : ""}`}
      role="status"
      aria-label="Loading Axiom"
    >
      <div className="site-loader__grid" aria-hidden="true" />
      <div className="site-loader__content">
        <div className="site-loader__header">
          <span className="site-loader__mark">A</span>
          <span className="site-loader__label">Axiom / 2026</span>
        </div>

        <div className="site-loader__wordmark" aria-hidden="true">
          AXIOM
        </div>

        <div className="site-loader__footer">
          <span>Physical automation</span>
          <span className="site-loader__status">
            <span className="site-loader__dot" />
            Initializing
          </span>
        </div>

        <div className="site-loader__track" aria-hidden="true">
          <span className="site-loader__progress" />
        </div>
      </div>
    </div>
  );
}

export default SiteLoader;
