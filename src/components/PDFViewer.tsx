'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const MIN_ZOOM = 50; // percent
const MAX_ZOOM = 300; // percent

const stripFragment = (url: string): string => {
  try {
    const u = new URL(url, window.location.origin);
    u.hash = '';
    return u.toString();
  } catch {
    // Fallback: simple split
    return url.split('#')[0];
  }
};

const buildIframeSrc = (baseUrl: string, page: number, zoomPercent: number): string => {
  const urlNoFrag = stripFragment(baseUrl);
  const zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, Math.round(zoomPercent)));
  // Most Chromium-based viewers support #page and #zoom
  return `${urlNoFrag}#page=${page}&zoom=${zoom}`;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const safePdfUrl = useMemo(() => (pdfUrl && pdfUrl !== '#') ? pdfUrl : '#', [pdfUrl]);

  const iframeSrc = useMemo(() => {
    if (!safePdfUrl || safePdfUrl === '#') return '';
    return buildIframeSrc(safePdfUrl, 1, 100);
  }, [safePdfUrl]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          exitFullscreen();
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isFullscreen, onClose]);

  useEffect(() => {
    let mounted = true;
    const preflight = async () => {
      if (!isOpen || !safePdfUrl || safePdfUrl === '#') return;
      setLoading(true);
      setLoadError(null);
      try {
        // Best-effort reachability check; still show iframe regardless
        await fetch(stripFragment(safePdfUrl), { method: 'HEAD', mode: 'cors' }).catch(() => undefined);
      } catch (err: unknown) {
        if (!mounted) return;
        const detail = err instanceof Error ? ` ${err.message}` : '';
        setLoadError(`PDF may be blocked by CORS or authentication. Attempting embedded preview.${detail}`);
        console.error('PDF preflight error:', err);
      } finally {
        setLoading(false);
      }
    };
    preflight();
    return () => { mounted = false; };
  }, [isOpen, safePdfUrl]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ('webkitRequestFullscreen' in element) {
      (element as HTMLElement & { webkitRequestFullscreen(): void }).webkitRequestFullscreen();
    } else if ('msRequestFullscreen' in element) {
      (element as HTMLElement & { msRequestFullscreen(): void }).msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ('webkitExitFullscreen' in document) {
      (document as Document & { webkitExitFullscreen(): void }).webkitExitFullscreen();
    } else if ('msExitFullscreen' in document) {
      (document as Document & { msExitFullscreen(): void }).msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className={`relative bg-white rounded-lg shadow-xl ${isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 max-w-6xl'} flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            {/* Header simplified: removed page navigation and zoom controls */}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-2 space-y-4 bg-gray-50">
          {safePdfUrl === '#' ? (
            <div className="flex h-full items-center justify-center text-gray-500">Itinerary not available. Please Try again Later or Contact Us.</div>
          ) : (
            <div className="flex-1 h-full bg-white rounded-md shadow-sm border border-gray-200">
              {/* Using native browser PDF viewer via iframe with #page and #zoom fragments */}
              <iframe
                key={iframeSrc}
                src={iframeSrc}
                title={title || 'PDF Document'}
                className="w-full h-full"
              />
              {loadError && (
                <div className="p-3 text-sm text-gray-600 border-t">{loadError}</div>
              )}
            </div>
          )}
          {loading && (
            <div className="flex items-center justify-center text-gray-500">Preparing PDF...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;