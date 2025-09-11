import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Check, X, Star, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";

const packageData = {
  // Domestic Destinations
  goa: {
    name: "Goa",
    packages: [
      {
        title: "Beach Bliss Getaway",
        duration: "4 Days / 3 Nights",
        overview: "Relax on pristine beaches, explore Portuguese heritage, and enjoy vibrant nightlife in North and South Goa.",
        inclusions: ["Beach resort accommodation", "Airport transfers", "Guided heritage tour", "Water sports activities"],
        exclusions: ["Flight tickets", "Personal expenses", "Meals (except breakfast)"],
        price: "₹15,999",
        rating: 4.8,
        itinerary: [
          { day: "Day 1", details: "Arrival in Goa, check-in at beach resort, evening leisure on the beach." },
          { day: "Day 2", details: "Full-day North Goa sightseeing – Fort Aguada, Baga Beach, Calangute, Anjuna." },
          { day: "Day 3", details: "South Goa heritage tour – Basilica of Bom Jesus, Se Cathedral, Miramar Beach, Dona Paula." },
          { day: "Day 4", details: "Morning at leisure, transfer to airport." }
        ]
      },
      {
        title: "Adventure & Culture",
        duration: "6 Days / 5 Nights",
        overview: "Complete Goa experience with adventure sports, cultural sites, spice plantations, and beach relaxation.",
        inclusions: ["Deluxe hotel stay", "All transfers", "Spice plantation tour", "Dudhsagar Falls trip"],
        exclusions: ["Airfare", "Alcohol", "Adventure sports fees"],
        price: "₹24,999",
        rating: 4.9
      }
    ]
  },
  kerala: {
    name: "Kerala",
    packages: [
      {
        title: "Backwaters & Hills",
        duration: "7 Days / 6 Nights",
        overview: "Experience serene backwaters in Alleppey, tea gardens in Munnar, and wildlife in Thekkady.",
        inclusions: ["Houseboat stay", "Hill station resort", "Elephant ride", "Tea garden visit"],
        exclusions: ["Flight tickets", "Personal shopping", "Optional activities"],
        price: "₹28,999",
        rating: 4.7
      },
      {
        title: "Ayurveda Wellness",
        duration: "10 Days / 9 Nights",
        overview: "Rejuvenate with authentic Ayurvedic treatments, yoga sessions, and peaceful backwater cruises.",
        inclusions: ["Ayurveda resort stay", "Daily treatments", "Yoga classes", "Meditation sessions"],
        exclusions: ["Travel insurance", "Extra treatments", "Shopping"],
        price: "₹45,999",
        rating: 4.9
      }
    ]
  },
  agra: {
    name: "Agra",
    packages: [
      {
        title: "Golden Triangle Express",
        duration: "3 Days / 2 Nights",
        overview: "Visit the iconic Taj Mahal, Agra Fort, and explore the rich Mughal heritage of this historic city.",
        inclusions: ["Heritage hotel stay", "Taj Mahal guided tour", "Agra Fort visit", "Local transportation"],
        exclusions: ["Train/flight tickets", "Meals", "Shopping expenses"],
        price: "₹12,999",
        rating: 4.6
      }
    ]
  },
  // International Destinations
  maldives: {
    name: "Maldives",
    packages: [
      {
        title: "Tropical Paradise",
        duration: "5 Days / 4 Nights",
        overview: "Overwater villas, crystal-clear lagoons, world-class diving, and pristine white sand beaches.",
        inclusions: ["Overwater villa", "All meals", "Airport transfers", "Snorkeling gear"],
        exclusions: ["Flight tickets", "Spa treatments", "Alcoholic beverages"],
        price: "₹89,999",
        rating: 4.9
      },
      {
        title: "Luxury Honeymoon",
        duration: "7 Days / 6 Nights",
        overview: "Ultimate romantic escape with private pools, sunset dining, and couples' spa treatments.",
        inclusions: ["Premium villa", "Private dining", "Couples massage", "Sunset cruise"],
        exclusions: ["International flights", "Personal expenses", "Photography"],
        price: "₹1,50,999",
        rating: 5.0
      }
    ]
  },
  switzerland: {
    name: "Switzerland",
    packages: [
      {
        title: "Alpine Adventure",
        duration: "8 Days / 7 Nights",
        overview: "Explore Zurich, Interlaken, and Jungfraujoch with scenic train rides and mountain adventures.",
        inclusions: ["4-star hotels", "Swiss Travel Pass", "Jungfraujoch tour", "City tours"],
        exclusions: ["International flights", "Travel insurance", "Optional excursions"],
        price: "₹1,25,999",
        rating: 4.8
      }
    ]
  },
  paris: {
    name: "Paris",
    packages: [
      {
        title: "Romantic Paris",
        duration: "6 Days / 5 Nights",
        overview: "Experience the Eiffel Tower, Louvre Museum, Seine River cruise, and charming Montmartre.",
        inclusions: ["Central hotel", "Museum passes", "Seine cruise", "City walking tour"],
        exclusions: ["Flights", "Meals", "Shopping", "Optional shows"],
        price: "₹95,999",
        rating: 4.7
      }
    ]
  }
};

interface PackagesSectionProps {
  destination: string;
  onBack: () => void;
}

export const PackagesSection = ({ destination, onBack }: PackagesSectionProps) => {
  const [openItinerary, setOpenItinerary] = useState<number | null>(null);
  const [openQuote, setOpenQuote] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<{ title: string; destination: string; price: string } | null>(null);

  const destinationData = packageData[destination as keyof typeof packageData];

  const handleOpenQuote = (pkg: { title: string; price: string }) => {
    setSelectedPkg({ title: pkg.title, destination: destinationData.name, price: pkg.price });
    setOpenQuote(true);
  };

  if (!destinationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <Button onClick={onBack}>Back to Destinations</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-6">
            ← Back to Destinations
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {destinationData.name} Packages
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Discover our carefully curated travel packages for {destinationData.name}
          </p>
        </div>

        <div className="grid gap-8">
          {destinationData.packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">{pkg.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {pkg.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left side */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Overview</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{pkg.overview}</p>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setOpenItinerary(openItinerary === index ? null : index)}
                      >
                        {openItinerary === index ? (
                          <>
                            Hide Itinerary <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            See Full Itinerary <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      <QuoteDialog destination={destinationData.name}>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleOpenQuote(pkg)}
                      >
                        Get Quote
                      </Button>
                      </QuoteDialog>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="space-y-4">
                    {/* Inclusions */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Inclusions
                      </h4>
                      <ul className="space-y-1">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        Exclusions
                      </h4>
                      <ul className="space-y-1">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <X className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Itinerary expand */}
                {openItinerary === index && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Detailed Itinerary</h4>
                    <ul className="space-y-4">
                      {pkg.itinerary?.map((day, dIndex) => (
                        <li key={dIndex} className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{day.day}: </span>
                          {day.details}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quote Dialog */}
    </section>
  );
};
