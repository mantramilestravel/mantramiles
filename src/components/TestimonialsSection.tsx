import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


    const testimonials = [
  {
    id: 1,
    name: "Madhusudan Iyengar",
    location: "Bangalore",
    text: "I've embarked on numerous spiritual quests, but my recent pilgrimage with MantraMiles was exceptional. The attention to spiritual detail and personalized guidance made it truly enlightening.",
    rating: 5,
    trip: "Chardham Yatra Package",
  },
  {
    id: 2,
    name: "Anirudh Singh",
    location: "Bangalore",
    text: "This was the most profound spiritual experience I've ever had! Everything exceeded my expectations. MantraMiles truly knows how to create unforgettable spiritual journeys.",
    rating: 5,
    trip: "Chardham Yatra Package",
  },
  {
    id: 3,
    name: "Ritu M",
    location: "Bangalore",
    text: "MantraMiles transformed my spiritual journey into a once-in-a-lifetime experience. Their expertise and dedication to crafting unique itineraries truly set them apart.",
    rating: 5,
    trip: "Chardham Yatra Package",
  },
  {
    id: 4,
    name: "Anirudh Singh",
    location: "Bangalore",
    text: "This was the most profound spiritual experience I've ever had! Everything exceeded my expectations. MantraMiles truly knows how to create unforgettable spiritual journeys.",
    rating: 4,
    trip: "Chardham Yatra Tour",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    location: "Bangalore",
    text: "Mantra Miles made our Chardham Yatra absolutely divine! The arrangements were perfect and the spiritual journey was life-changing. Highly recommend their services.",
    rating: 5,
    trip: "Chardham Yatra Package",
  }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bronze-600 font-semibold text-lg">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the clients who have experienced 
            the Mantramiles travels firsthand.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-12 h-12 text-bronze-600 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div>
                <h4 className="font-bold text-navy-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-bronze-600 font-medium">{testimonials[currentIndex].location}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].trip}</p>
              </div>
            </CardContent>
          </Card>

          {/* Nav Buttons */}
          <button
            onClick={() =>
              setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-bronze-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
