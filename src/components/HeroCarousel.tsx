import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import ayodhya from "@/assets/ayodhya_top.jpg";
import dubai from "@/assets/dubai_top.jpg";
import kashmir from "@/assets/kashmir_top.jpg";
import ahobilam from "@/assets/ahobilam_top.jpg";
import puri from "@/assets/puri_top.jpg";
import kamakya from "@/assets/kamakya_top1.jpg";

const heroImages = [
  {
    id: 'dubai',
    image: dubai,
    title: "Dubai, UAE",
    subtitle: "Explore Dubai: The Jewel of the Middle East",
    highlight: "Experience the future of tourism with Dubai",
    cta: "Reserve My Seat",
  },
  {
    id: 'kashi-ayodhya-pilgrimage',
    image: ayodhya,
    title: "Varanasi & Ayodhya Ram Lala Pilgrimage",
    subtitle: "Experience India`s most sacred spiritual circuit — 3 Days / 2 Nights",
    highlight: "Departure from Bangalore",
    cta: "Join the Pilgrimage",
  },
  {
    id: 'kashmir',
    image: kashmir,
    title: "Kashmir, India",
    subtitle: "Celebrate Christmas in the snow-clad paradise of the Himalayas",
    highlight: "Special Christmas 2025 Winter Tour",
    cta: "Reserve My Seat",
  },
  {
    id: 'ahobilam-narasimha-pilgrimage',
    image: ahobilam,
    title: "Ahobilam, Andhra Pradesh",
    subtitle: "Journey to the sacred Nava-Narasimha temples",
    highlight: "Special 2025 Pilgrimage Departures",
    cta: "Enquire Now",
  },
  {
    id: 'puri-jagannath',
    image: puri,
    title: "Jagannath Puri & Mayapur, India",
    subtitle: "Experience the sacred journey from the holy city of Lord Jagannath to the spiritual heart of Mayapur",
    highlight: "Includes visits to Kolkata, Puri, Bhubaneswar, Konark & Sri Mayapur Dham",
    cta: "Book My Seat",
  },
  {
  id: 'kamakhya-shillong-kaziranga',
  image: kamakya, 
  title: "Kamakhya – Shillong – Kaziranga Sacred Nature Yatra",
  subtitle: "A soulful journey through Shakti temples, misty hills, living root bridges, pristine rivers, and wild forests",
  highlight: "Kamakhya Shakti Peetha • Living Root Bridges • Dawki River • Cherrapunji • Kaziranga National Park",
  cta: "Reserve My Seat"
},
];

interface HeroCarouselProps {
  onDestinationClick: (destination: string, id?: string) => void;
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
                    onClick={() => onDestinationClick(item.title, item.id)}
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
