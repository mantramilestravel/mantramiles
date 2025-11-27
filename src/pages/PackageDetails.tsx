import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PDFViewer from "@/components/PDFViewer";
import { packagesData } from "@/components/packages";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";
import { useMetaPixel } from "@/hooks/useMetaPixel";

/**
 * PackageDetails.tsx
 * - 3-up gallery with hover highlight
 * - modal gallery with left/right navigation (no X on image)
 * - back button only
 * - short description
 * - day-wise itinerary cards
 * - inclusions/exclusions/terms AFTER itinerary
 * - booking CTA on right (sticky on large screens)
 */

type ItineraryItem = { day: string; detail: string };
type PackageType = {
  id: string;
  name: string;
  destinations: string;
  duration: string;
  description: string;
  price: string;
  rating: number;
  type: string;
  coverImage?: string;
  images: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  pdf?: string;
  terms?: string[];
};

export default function PackageDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { trackPackageView, trackCustomizeProduct, isEnabled } = useMetaPixel();
  const pkg = packagesData.find((p: PackageType) => p.id === id) || (packagesData[0] as PackageType);
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; pdfUrl: string; title: string }>({
    isOpen: false,
    pdfUrl: '',
    title: ''
  });

  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  // PDF viewer functions
  const openPdfViewer = async (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePdfViewer = () => {
    setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
  };

  // Helper function to get browser fingerprinting data
  const getBrowserData = () => {
    // Get Facebook browser ID (fbp) and click ID (fbc) from cookies
    const getFacebookCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return undefined;
    };

    return {
      fbp: getFacebookCookie('_fbp'),
      fbc: getFacebookCookie('_fbc'),
      userAgent: navigator.userAgent,
      // Generate a simple client identifier based on browser characteristics
      clientId: btoa(`${navigator.userAgent}-${screen.width}x${screen.height}-${navigator.language}`).slice(0, 32)
    };
  };

  // Create fallback user data with browser fingerprinting
  const createFallbackUserData = (): import('@/types/metaPixel').UserFormData => {
    const browserData = getBrowserData();
    return {
      // Use client ID as external ID for anonymous users
      ...(browserData.clientId && { external_id: browserData.clientId }),
      // Include Facebook cookies if available
      ...(browserData.fbp && { fbp: browserData.fbp }),
      ...(browserData.fbc && { fbc: browserData.fbc }),
      // Include user agent for better matching
      ...(browserData.userAgent && { client_user_agent: browserData.userAgent })
    };
  };

  // Track ViewContent event when component mounts
  useEffect(() => {
    if (isEnabled && !hasTrackedView && pkg) {
      const packageInfo = {
        id: pkg.id,
        name: pkg.name,
        category: pkg.type || 'travel_package',
        price: parseFloat(pkg.price.replace(/[^\d.]/g, '')) || 0,
        currency: 'INR',
        duration: pkg.duration
      };

      const fallbackUserData = createFallbackUserData();

      try {
        trackPackageView(packageInfo, fallbackUserData);
        setHasTrackedView(true);
      } catch (error) {
        console.warn('Meta Pixel tracking failed for package view:', error);
        setHasTrackedView(true); // Still mark as tracked to avoid retries
      }
    }
  }, [isEnabled, hasTrackedView, pkg, trackPackageView]);

  // keyboard navigation for modal
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (modalIndex === null) return;
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowLeft") setModalIndex((i) => (i === null ? null : (i - 1 + pkg.images.length) % pkg.images.length));
      if (e.key === "ArrowRight") setModalIndex((i) => (i === null ? null : (i + 1) % pkg.images.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalIndex, pkg.images.length]);

  if (!pkg) return <div className="py-24 text-center">Package not found</div>;

  // modal helpers
  const openModalAt = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalIndex((i) => (i === null ? null : (i - 1 + pkg.images.length) % pkg.images.length));
  };
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalIndex((i) => (i === null ? null : (i + 1) % pkg.images.length));
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Back button (left only as requested) */}
      <div className="flex justify-start mb-8">
        <Button variant="outline" className="rounded-full px-5" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2" size={16} /> Back to Packages
        </Button>
      </div>

      {/* Title + short summary */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <Badge className="px-3 py-1">⭐ {pkg.rating}</Badge>
          <span className="text-xl font-semibold text-green-700">{pkg.price}</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-3">{pkg.name}</h1>
        <div className="text-gray-600 mb-2">{pkg.destinations} • {pkg.duration}</div>
        <p className="text-lg text-muted-foreground max-w-3xl">{pkg.description}</p>
      </header>

      {/* Gallery: 3-up on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {pkg.images.map((src, i) => (
          <div
            key={i}
            onClick={() => openModalAt(i)}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openModalAt(i)}
          >
            <img src={src} alt={`${pkg.name} ${i + 1}`} className="w-full h-56 md:h-72 object-cover rounded-2xl" />
            {/* subtle overlay gloss on hover */}
            <div className="absolute inset-0 pointer-events-none transition-opacity opacity-0 hover:opacity-30 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Main grid: itinerary (left wide) + CTA (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

          {/* Inclusions / Exclusions / Terms - AFTER itinerary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Inclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {(pkg.inclusions || []).map((inc, i) => <li key={i}>{inc}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {(pkg.exclusions || []).map((exc, i) => <li key={i}>{exc}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {(pkg.terms || []).map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA on right */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="p-6 shadow-2xl border-2 border-green-50">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Book This Package</h3>
                <div className="text-sm text-muted-foreground mt-1">Starting from</div>
                <div className="text-3xl font-extrabold text-green-600 mt-2">{pkg.price}</div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li>✔ Flexible dates available</li>
                <li>✔ Group discounts available</li>
                <li>✔ Luxury accommodations</li>
                <li>✔ Private transportation</li>
              </ul>

              <QuoteDialog destination={pkg.name}>
                <Button className="w-full overflow-auto mb-4 py-4 text-lg">Get Quote</Button>
              </QuoteDialog>

              <Button variant="outline" className="w-full py-4 text-lg" onClick={() => openPdfViewer(pkg.pdf, pkg.name)}>
                View Itinerary
              </Button>

              <div className="text-xs text-muted-foreground text-center mt-4">
                24/7 Customer Support · Free cancellation up to 48hrs
              </div>
            </Card>
          </div>
        </aside>
      </div>

      {/* Modal Gallery - custom overlay with arrows (no X on image) */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal} // clicking backdrop closes
        >
          {/* left arrow */}
          <button
            aria-label="previous"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center px-6"
            onClick={(e) => e.stopPropagation()} // clicking image area shouldn't close
          >
            <img src={pkg.images[modalIndex]} alt={`modal-${modalIndex}`} className="max-w-full max-h-full rounded-2xl shadow-2xl" />
          </div>

          {/* right arrow */}
          <button
            aria-label="next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* PDF Viewer */}
      {pdfViewer.isOpen && (
        <PDFViewer
          isOpen={pdfViewer.isOpen}
          pdfUrl={pdfViewer.pdfUrl}
          title={pdfViewer.title}
          onClose={closePdfViewer}
        />
      )}

    </div>
  );
}
