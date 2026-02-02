import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import PackageDetails from "@/pages/PackageDetails";
import PaymentGateway from "@/pages/PaymentGateway";
import Contact from "@/pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { MetaPixelProvider, MetaPixelNoticeBanner } from "@/contexts/MetaPixelContext";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsAndConditions from "@/components/TermsAndConditions";
import InfoPopup from "@/components/InfoPopup";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 3000); // Show popup after 3 seconds

    // Ensure a single canonical favicon at runtime (non-invasive — no index.html edit required)
    const canonical = "/favicon.png"; // change to "/favicon.ico" if you prefer
    // find existing icon link
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
    const prevHref = link ? link.getAttribute("href") : null;

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Also ensure apple-touch-icon (if present) points to a canonical file
    const apple = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement | null;
    if (apple) apple.setAttribute("href", "/apple-touch-icon.png");

    return () => {
      clearTimeout(timer);
      // restore previous favicon when unmounting (rare for App but safe)
      if (!link) return;
      if (prevHref) link.setAttribute("href", prevHref);
      else link.parentNode?.removeChild(link);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MetaPixelProvider autoInitialize={true}>
        <TooltipProvider>
          {/* UI toasters */}
          <Toaster />
          <Sonner />

          {isPopupVisible && <InfoPopup onClose={handleClosePopup} />}

          <BrowserRouter>
            {/* scroll to top on route change */}
            <ScrollToTop />

            {/* App routes */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/package/:id" element={<PackageDetails />} />
              <Route path="/payment/:id" element={<PaymentGateway />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Global notice (Meta Pixel consent banner) */}
            <MetaPixelNoticeBanner />
          </BrowserRouter>
        </TooltipProvider>
      </MetaPixelProvider>
    </QueryClientProvider>
  );
};

export default App;
