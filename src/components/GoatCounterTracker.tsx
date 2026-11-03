import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    goatcounter?: { count?: (opts: { path: string }) => void };
  }
}

// Records pageviews on in-app navigation (the script counts the first load itself).
const GoatCounterTracker = () => {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.goatcounter?.count?.({ path: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return null;
};

export default GoatCounterTracker;
