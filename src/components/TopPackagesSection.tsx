// src/components/TopPackagesSection.tsx
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

  const handleViewDetails = (id: string) => {
    navigate(`/package/${id}`);
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
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 text-sm font-medium text-gray-800 shadow">
                  <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  {pkg.rating}
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
