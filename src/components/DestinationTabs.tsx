// src/components/DestinationTabs.tsx
import { useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { UserFormData } from "@/types/metaPixel";

import goaImage from "@/assets/goa.jpg";
import keralaImage from "@/assets/kerala.jpg";
import rajasthanImage from "@/assets/rajasthan.jpg";
import himachalImage from "@/assets/himachal.jpg";
import northeastImage from "@/assets/northeast.jpg";
import kashmirImage from "@/assets/kashmir_top.jpg";
import gujaratImage from "@/assets/gujarat.jpg";
import andamanImage from "@/assets/andaman.jpg";

// Import International Destinations Images
import srilankaImage from "@/assets/srilanka_top.png";
import switzerlandImage from "@/assets/switzerland.jpeg";
import vietnamImage from "@/assets/vietnam.jpg";
import dubaiImage from "@/assets/dubai.jpg";
import thailandImage from "@/assets/thailand.jpg";
import australiaImage from "@/assets/australia.png";
import singaporeImage from "@/assets/singapore.jpg";
import baliImage from "@/assets/bali.jpeg";

// Domestic Destinations
const domesticDestinations = [
  { id: "goa", name: "Goa", tagline: "Sun, sand, and endless beaches", image: goaImage },
  { id: "kerala", name: "Kerala", tagline: "God's own country", image: keralaImage },
  { id: "rajasthan", name: "Rajasthan", tagline: "Land of kings and palaces", image: rajasthanImage },
  { id: "himachal", name: "Himachal Pradesh", tagline: "Adventure in the mountains", image: himachalImage },
  { id: "northeast", name: "Northeast", tagline: "Explore untouched beauty", image: northeastImage },
  { id: "kashmir", name: "Kashmir", tagline: "Paradise on earth", image: kashmirImage },
  { id: "gujarat", name: "Gujarat", tagline: "Culture, heritage & wildlife", image: gujaratImage },
  { id: "andaman", name: "Andaman", tagline: "Pristine beaches & history", image: andamanImage }
];

// International Destinations
const internationalDestinations = [
  { id: "srilanka", name: "Sri Lanka", tagline: "Tropical paradise awaits", image: srilankaImage },
  { id: "switzerland", name: "Switzerland", tagline: "Alpine beauty & luxury", image: switzerlandImage },
  { id: "vietnam", name: "Vietnam", tagline: "Heritage meets modern vibes", image: vietnamImage },
  { id: "dubai", name: "Dubai", tagline: "Luxury & innovation", image: dubaiImage },
  { id: "thailand", name: "Thailand", tagline: "Land of smiles & temples", image: thailandImage },
  { id: "australia", name: "Australia", tagline: "Nature, beaches & adventure", image: australiaImage },
  { id: "singapore", name: "Singapore", tagline: "Tradition meets innovation", image: singaporeImage },
  { id: "bali", name: "Bali", tagline: "Island of gods & beaches", image: baliImage }
];

interface DestinationTabsProps {
  onDestinationClick: (destination: string) => void;
}

export const DestinationTabs: React.FC<DestinationTabsProps> = ({ onDestinationClick }) => {
  const [activeTab, setActiveTab] = useState("domestic");
  const { trackSearch, isEnabled } = useMetaPixel();

  // Browser fingerprinting for anonymous user tracking
  const getBrowserData = useCallback((): UserFormData => {
    try {
      // Get Facebook cookies
      const fbp = document.cookie
        .split('; ')
        .find(row => row.startsWith('_fbp='))
        ?.split('=')[1] || '';
      
      const fbc = document.cookie
        .split('; ')
        .find(row => row.startsWith('_fbc='))
        ?.split('=')[1] || '';
      
      // Generate client ID based on browser characteristics
      const clientId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      return {
        external_id: clientId,
        fbp: fbp || undefined,
        fbc: fbc || undefined,
        client_user_agent: navigator.userAgent
      };
    } catch (error) {
      console.warn('Error collecting browser data:', error);
      return {
        external_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        client_user_agent: navigator.userAgent
      };
    }
  }, []);

  const DestinationGrid = ({ destinations }: { destinations: typeof domesticDestinations }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* Background image */}
          <div className="relative h-72 w-full overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            {/* Softer bottom-only gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold drop-shadow-md">{destination.name}</h3>
            <p className="text-sm text-gray-200 mb-4">{destination.tagline}</p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-white text-white bg-black/40 hover:bg-white hover:text-emerald-600 transition"
                onClick={async () => {
                  // Track Search event for destination exploration
                  if (isEnabled) {
                    try {
                      const browserData = getBrowserData();
                      await trackSearch({
                        search_string: destination.name,
                        content_category: activeTab === 'domestic' ? 'domestic_travel' : 'international_travel'
                      }, browserData);
                    } catch (error) {
                      console.warn('Meta Pixel tracking failed:', error);
                    }
                  }
                  onDestinationClick(destination.id);
                }}
              >
                Explore
              </Button>
              <QuoteDialog destination={destination.name}>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                >
                  Get Quote
                </Button>
              </QuoteDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Discover Amazing Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            From breathtaking local gems to exotic international wonders, find your perfect getaway destination.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center w-full max-w-md mx-auto mb-12 bg-white/80 border border-gray-200 rounded-full shadow-md">
            <TabsTrigger
              value="domestic"
              className="flex items-center gap-2 rounded-full px-6 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white transition"
            >
              <MapPin className="h-4 w-4" />
              Domestic
            </TabsTrigger>
            <TabsTrigger
              value="international"
              className="flex items-center gap-2 rounded-full px-6 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white transition"
            >
              <Plane className="h-4 w-4" />
              International
            </TabsTrigger>
          </TabsList>

          <TabsContent value="domestic" className="animate-fade-in">
            <DestinationGrid destinations={domesticDestinations} />
          </TabsContent>
          <TabsContent value="international" className="animate-fade-in">
            <DestinationGrid destinations={internationalDestinations} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
