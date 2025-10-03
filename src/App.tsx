import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PackageDetails from "@/pages/PackageDetails";
import PaymentGateway from "@/pages/PaymentGateway";
import Contact from "@/pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { MetaPixelProvider, MetaPixelNoticeBanner } from "@/contexts/MetaPixelContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MetaPixelProvider autoInitialize={true}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="/payment/:id" element={<PaymentGateway />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Meta Pixel Notice Banner */}
          <MetaPixelNoticeBanner />
        </BrowserRouter>

      </TooltipProvider>
    </MetaPixelProvider>
  </QueryClientProvider>
);

export default App;
