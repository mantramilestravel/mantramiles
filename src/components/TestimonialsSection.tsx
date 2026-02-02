import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mediaModules = import.meta.glob('/src/assets/gallery/*.{jpeg,jpg,png,gif,mp4,webm,ogg}');
const media = Object.keys(mediaModules);

export const TestimonialsSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Madhusudan Iyengar",
      location: "Bangalore",
      text: "I've embarked on numerous spiritual quests, but my recent pilgrimage with Mantra Miles was exceptional. The attention to spiritual detail and personalized guidance made it truly enlightening.",
      rating: 5,
      trip: "Chardham Yatra Package",
    },
    {
      id: 2,
      name: "Anirudh Singh",
      location: "Bangalore",
      text: "This was the most profound spiritual experience I've ever had! Everything exceeded my expectations. Mantra Miles truly knows how to create unforgettable spiritual journeys.",
      rating: 5,
      trip: "Chardham Yatra Package",
    },
    {
      id: 3,
      name: "Ritu M",
      location: "Bangalore",
      text: "Mantra Miles transformed my spiritual journey into a once-in-a-lifetime experience. Their expertise and dedication to crafting unique itineraries truly set them apart.",
      rating: 5,
      trip: "Chardham Yatra Package",
    },
    {
      id: 4,
      name: "Anirudh Singh",
      location: "Bangalore",
      text: "This was the most profound spiritual experience I've ever had! Everything exceeded my expectations. Mantra Miles truly knows how to create unforgettable spiritual journeys.",
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
      setTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (media.length > 10) {
      const numSlides = Math.ceil(media.length / 4);
      const timer = setInterval(() => {
        setGalleryIndex((prevIndex) => (prevIndex === numSlides - 1 ? 0 : prevIndex + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [media.length]);

  const openLightbox = (index: number) => {
    setSelectedMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextMedia = () => {
    setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevMedia = () => {
    setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

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
            the Mantra Miles travels firsthand.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl px-16">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-12 h-12 text-bronze-600 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[testimonialIndex].text}"
              </blockquote>
              <div>
                <h4 className="font-bold text-navy-900 text-lg">
                  {testimonials[testimonialIndex].name}
                </h4>
                <p className="text-bronze-600 font-medium">{testimonials[testimonialIndex].location}</p>
                <p className="text-gray-500 text-sm">{testimonials[testimonialIndex].trip}</p>
              </div>
            </CardContent>
          </Card>

          {/* Nav Buttons */}
          <button
            onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === testimonialIndex ? "bg-bronze-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
              Glimpses of Our Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of beautiful moments from our travelers' spiritual adventures.
            </p>
          </div>

          {media.length > 10 ? (
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(media.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-4 gap-4 px-16">
                      {media.slice(slideIndex * 4, slideIndex * 4 + 4).map((src, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden rounded-lg shadow-lg border-2 border-white aspect-w-1 aspect-h-1 cursor-pointer" onClick={() => openLightbox(slideIndex * 4 + imgIndex)}>
                          {/\.(mp4|webm|ogg)$/i.test(src) ? (
                            <video src={src} muted loop playsInline className="w-full h-full object-cover" />
                          ) : (
                            <img src={src} alt={`Gallery image ${slideIndex * 4 + imgIndex + 1}`} className="w-full h-full object-cover" />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setGalleryIndex((galleryIndex - 1 + Math.ceil(media.length / 4)) % Math.ceil(media.length / 4))}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setGalleryIndex((galleryIndex + 1) % Math.ceil(media.length / 4))}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(media.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === galleryIndex ? "bg-bronze-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {media.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg border-2 border-white aspect-w-1 aspect-h-1 cursor-pointer" onClick={() => openLightbox(index)}>
                  {/\.(mp4|webm|ogg)$/i.test(src) ? (
                    <video src={src} muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center animate-fadeIn" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-5 right-5 text-white text-4xl z-50 hover:text-gray-300 transition-colors">
            &times;
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevMedia(); }} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {media[selectedMediaIndex] && /\.(mp4|webm|ogg)$/i.test(media[selectedMediaIndex]) ? (
              <video src={media[selectedMediaIndex]} controls autoPlay className="w-full h-full object-contain rounded-lg shadow-2xl" />
            ) : (
              <img src={media[selectedMediaIndex]} alt="Lightbox" className="w-full h-full object-contain rounded-lg shadow-2xl" />
            )}
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextMedia(); }} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};
