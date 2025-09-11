import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

import { packagesData } from "@/components/packages";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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
  terms?: string[];
  itinerary?: ItineraryItem[];
};

export default function PackageDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packagesData.find((p: PackageType) => p.id === id) || (packagesData[0] as PackageType);

  const [modalIndex, setModalIndex] = useState<number | null>(null);

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

  // PDF generation - paginate if many items
  const handleDownloadPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    let y = 60;

    doc.setFontSize(18);
    doc.text(pkg.name, margin, y);
    y += 26;

    doc.setFontSize(12);
    doc.text(`Duration: ${pkg.duration}`, margin, y);
    y += 18;
    doc.text(`Price: ${pkg.price}`, margin, y);
    y += 30;

    doc.setFontSize(14);
    doc.text("Day-wise Itinerary:", margin, y);
    y += 20;

    doc.setFontSize(11);
    const lineHeight = 16;
    (pkg.itinerary || []).forEach((it, idx) => {
      const text = `${it.day} — ${it.detail}`;
      const splitted = doc.splitTextToSize(text, 520);
      if (y + splitted.length * lineHeight > 800) {
        doc.addPage();
        y = 60;
      }
      doc.text(splitted, margin, y);
      y += splitted.length * lineHeight + 6;
    });

    // Add a page for inclusions/exclusions/terms
    doc.addPage();
    y = 60;
    doc.setFontSize(14);
    doc.text("Inclusions", margin, y);
    doc.setFontSize(11);
    y += 18;
    (pkg.inclusions || []).forEach((i) => {
      const lines = doc.splitTextToSize(`• ${i}`, 520);
      doc.text(lines, margin, y);
      y += lines.length * lineHeight;
    });

    y += 10;
    doc.setFontSize(14);
    doc.text("Exclusions", margin, y);
    doc.setFontSize(11);
    y += 18;
    (pkg.exclusions || []).forEach((i) => {
      const lines = doc.splitTextToSize(`• ${i}`, 520);
      doc.text(lines, margin, y);
      y += lines.length * lineHeight;
    });

    y += 10;
    doc.setFontSize(14);
    doc.text("Terms & Conditions", margin, y);
    doc.setFontSize(11);
    y += 18;
    (pkg.terms || []).forEach((i) => {
      const lines = doc.splitTextToSize(`• ${i}`, 520);
      doc.text(lines, margin, y);
      y += lines.length * lineHeight;
    });

    doc.save(`${pkg.id}-itinerary.pdf`);
  };

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
          {/* Itinerary */}
          <h2 className="text-3xl font-bold mb-6">Day-wise Itinerary</h2>
          <div className="space-y-6 mb-8">
            {(pkg.itinerary || []).map((it, idx) => (
              <Card key={idx} className="shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-green-700">{it.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{it.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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

              <Button className="w-full mb-4 py-4 text-lg">Get Quote</Button>
              <Button variant="outline" className="w-full py-4 text-lg" onClick={handleDownloadPDF}>
                Download Itinerary
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
    </div>
  );
}
