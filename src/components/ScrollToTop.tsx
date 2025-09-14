import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  /** Show button after this many pixels scrolled (default 300) */
  threshold?: number;
  /** Size of the button (Tailwind width/height classes) */
  sizeClass?: string;
}

export default function ScrollToTop({
  threshold = 300,
  sizeClass = "w-12 h-12",
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // 🔹 Auto scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  // 🔹 Show/hide button on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setVisible(window.scrollY > threshold);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // 🔹 Button click -> smooth scroll
  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={handleClick}
          aria-label="Scroll to top"
          title="Back to top"
          className={`
            fixed z-50 right-6 bottom-6 ${sizeClass} flex items-center justify-center
            rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            focus-visible:ring-indigo-500 bg-white dark:bg-slate-800/90 border border-slate-200
            hover:scale-105 transform transition-transform
          `}
        >
          {/* chevron up icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
