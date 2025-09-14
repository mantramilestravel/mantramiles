import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import angkorwat from "@/assets/image-asset.jpeg-DlCkxpEn.webp";
import kedarnathTemple from "@/assets/kedarnath-temple.jpg";
import badrinathTemple from "@/assets/badrinath-temple.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import gangotriTemple from "@/assets/gangotri-temple.jpg";
import chardham from "@/assets/chardham.jpg";
import swissAlps from "@/assets/swiss-alps-hero.jpg";

const heroImages = [
  {
    id: 1,
    image: chardham,
    title: "Chardham Yatra 2025",
    subtitle: "Join the most revered pilgrimage circuit in India . 11 days/10 nights. ",
    highlight: "Bangalore Departure.",
    cta: "Book Early & Save 10%",
  },
  {
    id: 2,
    image: kedarnathTemple,
    title: "Kedarnath, Uttarakhand",
    subtitle: "Sacred abode of Lord Shiva in the Himalayas",
    highlight: "Spiritual Journey Awaits – Limited Seats",
    cta: "Reserve My Seat",
  },
  {
    id: 3,
    image: keralaBackwaters,
    title: "Kerala, India",
    subtitle: "Cruise through serene backwaters",
    highlight: "Winter 2025 Offers – Don’t Miss Out",
    cta: "Book Early & Save 10%",
  },
  {
    id: 4,
    image: badrinathTemple,
    title: "Badrinath, Uttarakhand",
    subtitle: "Divine temple of Lord Vishnu",
    highlight: "Special 2025 Pilgrimage Packages",
    cta: "Hurry Up – Enquire Now",
  },
  {
    id: 5,
    image: gangotriTemple,
    title: "Gangotri, Uttarakhand",
    subtitle: "Sacred source of the River Ganga",
    highlight: "Limited Seats for the year 2025",
    cta: "Book My Seat",
  },
  {
    id: 6,
    image: angkorwat,
    title: "Angkor Wat & Thailand Discovery – Spiritual Meets Tropical",
    subtitle: "Experience the mystique of Cambodia’s Angkor Wat",
    highlight: "A journey of contrasts and unforgettable memories",
    cta: "Book Early & Save 10%",
  },
  {
    id: 7,
    image: swissAlps, // make sure you import the Swiss Alps image
    title: "Swiss Alps Retreat – Nature, Serenity & Adventure",
    subtitle: "Breathe in the magic of snow-capped peaks and alpine charm",
    highlight: "Where breathtaking landscapes meet soulful escapes",
    cta: "Reserve Your Spot Today",
  }

];

interface HeroCarouselProps {
  onDestinationClick: (destination: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onDestinationClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPackages = () => {
    const section = document.getElementById("top-packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Travel destinations slideshow"
    >
      {heroImages.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
            role="img"
            aria-label={`${item.title} - ${item.subtitle}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white px-6 max-w-3xl animate-fade-in z-20">

                  {/* Highlight ribbon */}
                  {item.highlight && (
                    <p className="inline-block bg-teal-600 text-white text-sm md:text-base font-medium px-4 py-1 rounded-full mb-4 shadow-md">
                      {item.highlight}
                    </p>
                  )}

                  {/* Title + Subtitle */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-8 opacity-90 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* CTA Button (dynamic text) */}
                  <Button
                    size="lg"
                    className="relative z-30 bg-primary text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                    onClick={scrollToPackages}
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full z-40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full z-40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};
