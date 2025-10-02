import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  threshold?: number;
  sizeClass?: string;
  whatsappMessage?: string;
  whatsappSizeClass?: string;
}

/**
 * - Auto-scroll to top on route change
 * - Scroll-to-top floating button (appears after threshold)
 * - Always-visible WhatsApp button (bottom-right, above scroll-to-top)
 */
export default function ScrollToTop({
  threshold = 300,
  sizeClass = "w-12 h-12",
  whatsappMessage = "",
  whatsappSizeClass = "w-16 h-16", // WhatsApp slightly bigger
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Hard-coded WhatsApp number
  const WHATSAPP_NUMBER = "919972816108"; // <-- Replace with your number

  // Auto scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  // Show/hide scroll-to-top button on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setVisible(window.scrollY > threshold);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // Scroll-to-top click -> smooth scroll
  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build WhatsApp link
  const buildWhatsAppHref = () => {
    const encoded = encodeURIComponent(whatsappMessage || "");
    return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ""}`;
  };

  return (
    <>
      {/* WhatsApp button (always visible) */}
      <a
        href={buildWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={`
          fixed z-50 right-6 bottom-24 ${whatsappSizeClass} flex items-center justify-center
          rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          focus-visible:ring-green-500 bg-green-600 hover:scale-105 transform transition-transform
          border border-green-700
        `}
      >
        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .002 5.373 0 12c0 2.116.553 4.183 1.608 6.01L0 24l6.146-1.6A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12 0-3.207-1.26-6.214-3.48-8.52zM12 21.5c-1.24 0-2.457-.27-3.57-.8l-.26-.12-3.65.95.98-3.55-.16-.29A9.5 9.5 0 012.5 12C2.5 6.21 6.21 2.5 12 2.5S21.5 6.21 21.5 12 17.79 21.5 12 21.5z" />
          <path d="M17.3 14.1c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.63.8-.77.97-.14.17-.29.2-.54.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.43-.57-.43-.15 0-.33-.02-.5-.02-.17 0-.44.07-.67.33-.23.26-.85.82-.85 2 0 1.18.87 2.33.99 2.49.12.17 1.71 2.7 4.14 3.78 2.43 1.07 2.43.72 2.87.68.44-.04 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.47-.28z" fill="white"/>
        </svg>
      </a>

      {/* Scroll-to-top button */}
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
          {/* chevron up icon */}
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
