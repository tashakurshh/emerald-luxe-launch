import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route changes start at the top of the page (fixes "navigates but stays scrolled down").
 * If a hash is present, scrolls to that element instead.
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Let the next paint happen so the new route DOM exists.
    requestAnimationFrame(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
