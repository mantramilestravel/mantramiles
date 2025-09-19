// src/components/TopPackagesSection.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import packagesData from "@/components/packages";

type PackageType = {
  id: string;
  name: string;
  destinations: string;
  duration: string;
  description: string;
  price: string;
  rating: number;
  type: string;
  tag?: string;
  coverImage: string; // imported image
  images?: string[];
};

export const TopPackagesSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { trackWishlistAdd, isEnabled } = useMetaPixel();
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(new Set());

  const handleViewDetails = (id: string) => {
    navigate(`/package/${id}`);
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

  const handleWishlistToggle = async (pkg: PackageType) => {
    const isWishlisted = wishlistedItems.has(pkg.id);
    
    if (isWishlisted) {
      setWishlistedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(pkg.id);
        return newSet;
      });
      toast({
        title: "Removed from Wishlist",
        description: `${pkg.name} has been removed from your wishlist.`,
      });
    } else {
      setWishlistedItems(prev => new Set(prev).add(pkg.id));
      
      // Track AddToWishlist event with fallback user data
      if (isEnabled) {
        const packageInfo = {
          id: pkg.id,
          name: pkg.name,
          category: pkg.type,
          price: parseInt(pkg.price.replace(/[^\d]/g, '')),
          currency: 'INR'
        };
        
        // Get browser fingerprinting data for anonymous tracking
        const browserData = getBrowserData();
        
        // Create fallback user data with browser fingerprinting
        const fallbackUserData: import('@/types/metaPixel').UserFormData = {
          // Use client ID as external ID for anonymous users
          ...(browserData.clientId && { external_id: browserData.clientId }),
          // Include Facebook cookies if available
          ...(browserData.fbp && { fbp: browserData.fbp }),
          ...(browserData.fbc && { fbc: browserData.fbc }),
          // Include user agent for better matching
          ...(browserData.userAgent && { client_user_agent: browserData.userAgent })
        };
        
        try {
          await trackWishlistAdd(packageInfo, fallbackUserData);
        } catch (error) {
          console.warn('Meta Pixel tracking failed for wishlist add:', error);
          // Continue with the UI update even if tracking fails
        }
      }
      
      toast({
        title: "Added to Wishlist",
        description: `${pkg.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            🌍 Best-Selling Travel Packages 2025
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover handpicked adventures — spiritual journeys, scenic escapes and curated experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg: PackageType) => (
            <article
              key={pkg.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.coverImage}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-white/90 text-gray-900 text-xs">{pkg.type}</Badge>
                  {pkg.tag && <Badge className="bg-emerald-600 text-white text-xs">{pkg.tag}</Badge>}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishlistToggle(pkg);
                    }}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      wishlistedItems.has(pkg.id)
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                    title={wishlistedItems.has(pkg.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-all ${
                        wishlistedItems.has(pkg.id) ? 'fill-current' : ''
                      }`} 
                    />
                  </button>
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 text-sm font-medium text-gray-800 shadow">
                    <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                    {pkg.rating}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <p className="text-sm font-semibold text-emerald-300">From {pkg.price}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{pkg.destinations}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {pkg.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-emerald-600 text-emerald-600 font-semibold py-3 rounded-xl"
                  onClick={() => handleViewDetails(pkg.id)}
                >
                  View Details →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
