import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Phone, Mountain, Heart, Users, MapPin, Zap, CheckCircle2, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { PaymentSection } from "@/components/PaymentModal";
import { Footer } from "@/components/Footer";
import { QuoteDialog } from "@/components/QuoteDialog";
import PDFViewer from "@/components/PDFViewer";

// Kailash Mansarovar Images
import kailashImage1 from "@/assets/Kailash-Mansarovar-Yatra.jpg";
import kailashImage2 from "@/assets/kailash-mansarovar-4-1.jpg";
import kailashImage3 from "@/assets/mount-kailash.webp";
import kailashImage4 from "@/assets/on-the-way-to-kailash-min.jpg.webp";
import kailashImage5 from "@/assets/Temple-Connect-and-Trip-To-Temples-Join-Hands-to-Enrich-the-Kailash-Mansarovar-Yatra.jpg.webp";

// Premium CTA Animations
const premiumCTAStyles = `
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7), 0 20px 40px rgba(34, 197, 94, 0.2);
    }
    50% {
      box-shadow: 0 0 0 15px rgba(34, 197, 94, 0), 0 20px 40px rgba(34, 197, 94, 0);
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .cta-primary {
    animation: fade-in-up 0.8s ease-out;
  }

  .cta-primary:hover {
    animation: none;
  }

  .pulse-glow {
    animation: pulse-glow 2.5s infinite;
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }
`;

export default function KailashMansarovarYatra() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Kailash package images array
  const kailashImages = [kailashImage1, kailashImage2, kailashImage3, kailashImage4, kailashImage5];

  // PDF Viewer State
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; pdfUrl: string; title: string }>({
    isOpen: false,
    pdfUrl: '',
    title: ''
  });

  // PDF viewer functions
  const openPdfViewer = (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePdfViewer = () => {
    setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
  };

  // Download subsidy PDF
  const downloadSubsidyPDF = async () => {
    try {
      const response = await fetch('/itinerary/Kashi and Chardham Yatra Subsidy.pdf');
      if (!response.ok) throw new Error('Failed to download PDF');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Kashi and Chardham Yatra Subsidy.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Kailash Mansarovar Yatra - Sacred Pilgrimage | Mantra Miles";
  }, []);

  const handleNavigation = () => navigate("/");

  // ===== 1. YATRA PACKAGES =====
  const yatraPackages = [
    {
      id: 1,
      name: "Overland Kailash Mansarovar Yatra",
      duration: "13 Days / 12 Nights",
      eligibility: "Indian Passport holders ONLY",
      eligibilitySubtext: "seeking a land-based pilgrimage from Kathmandu",
      startingPoint: "Kathmandu, Nepal",
      route: "Kathmandu – Kerung – Saga – Mansarovar – Mount Kailash – Return",
      modeOfTravel: "By private air-conditioned and non air-conditioned vehicles",
      accommodation: "Hotels in Kathmandu, guesthouses en-route, and shared rooms in Tibet",
      physicalDemand: "Moderate to strenuous (trekking involved)",
      highlights: [
        "Visit Kathmandu's famous temples and monasteries",
        "Travel through Kerung, enjoying stunning Tibetan landscapes",
        "Perform puja at Mansarovar Lake",
        "Kailash Parikrama covering Dirapuk and Zuthulphuk",
        "Trek across Dolma La Pass, the highest point of the journey"
      ],
      cost: "₹ 2,25,000/- per person",
      badgeColor: "bg-primary",
      pdf: "/itinerary/13Dayskailash.pdf",
      image: kailashImage1
    },
    {
      id: 2,
      name: "Kailash Mansarovar Yatra Overland",
      duration: "16 Days / 15 Nights",
      eligibility: "NON-Indian Passport holders ONLY",
      eligibilitySubtext: "seeking a land-based pilgrimage from Kathmandu",
      startingPoint: "Kathmandu, Nepal (Yatris should reach Kathmandu 5 days before scheduled departure)",
      route: "Kathmandu – Kerung – Saga – Mansarovar – Mount Kailash – Return",
      modeOfTravel: "By luxury air-conditioned coach and non air-conditioned vehicles",
      accommodation: "Hotels in Kathmandu, guesthouses along the route, and shared dormitories in Tibet",
      physicalDemand: "Moderate to strenuous (trekking involved)",
      highlights: [
        "Kathmandu sightseeing: Pashupatinath Temple, Boudhanath, Budhanikantha",
        "Stunning view of Tibetan plateau landscapes and the Brahmaputra River",
        "Parikrama (circumambulation) of Mount Kailash and Mansarovar Lake",
        "Trekking through Dirapuk, Dolma La Pass (5,700m), and Zuthulphuk",
        "Visit the sacred Gauri Kund"
      ],
      cost: "USD $ 3,000/- per person",
      badgeColor: "bg-accent",
      pdf: "/itinerary/kailash-mansarovar-overland.pdf",
      image: kailashImage2
    },
    {
      id: 3,
      name: "Helicopter Tour - Kailash Mansarovar Yatra",
      duration: "11 Days / 10 Nights",
      eligibility: "Indian Passport holders ONLY",
      eligibilitySubtext: "looking for a faster and less physically demanding route",
      startingPoint: "Lucknow, India",
      route: "Kathmandu – Nepalgunj (by road) – Simikot – Hilsa – Taklakot – Mansarovar – Mount Kailash – Return",
      modeOfTravel: "Helicopter, and air-conditioned coach",
      accommodation: "Hotels in Nepalgunj, and Taklakot; guesthouses in Tibet",
      physicalDemand: "Moderate (trekking during Kailash Parikrama)",
      highlights: [
        "Flight from Kathmandu to Nepalgunj and then to Simikot",
        "Helicopter ride from Simikot to Hilsa, offering aerial views of the Himalayas",
        "Kailash Parikrama covering Dirapuk, Dolma La Pass, and Zuthulphuk",
        "Return via the same route, with a stopover at Nepalgunj"
      ],
      cost: "₹ 3,20,000/- per person",
      badgeColor: "bg-primary",
      pdf: "/itinerary/11Days_kailash.pdf",
      image: kailashImage3
    },
    {
      id: 4,
      name: "Helicopter Tour - Kailash Mansarovar Yatra",
      duration: "14 Days / 13 Nights",
      eligibility: "NON-Indian Passport holders ONLY",
      eligibilitySubtext: "seeking a land-based pilgrimage from Kathmandu",
      startingPoint: "Kathmandu, Nepal (Yatris should reach Kathmandu 5 days before scheduled departure)",
      route: "Kathmandu – Nepalgunj – Simikot – Hilsa – Taklakot – Mansarovar – Mount Kailash – Return",
      modeOfTravel: "By flight, helicopter, and air-conditioned coach",
      accommodation: "Hotels in Kathmandu, Nepalgunj, and Taklakot; guesthouses in Tibet",
      physicalDemand: "Moderate (trekking during Kailash Parikrama)",
      highlights: [
        "Flight from Kathmandu to Nepalgunj and then to Simikot",
        "Helicopter ride from Simikot to Hilsa, offering aerial views of the Himalayas",
        "Kailash Parikrama covering Dirapuk, Dolma La Pass, and Zuthulphuk",
        "Return via the same route, with a stopover at Nepalgunj"
      ],
      cost: "USD $ 3,500/- per person",
      badgeColor: "bg-accent",
      pdf: "/itinerary/kailash-mansarovar-helicopter.pdf",
      image: kailashImage4
    },
    {
      id: 5,
      name: "Helicopter Tour - Kailash Mansarovar Yatra",
      duration: "9 Days / 8 Nights",
      eligibility: "Indian Passport holders ONLY",
      eligibilitySubtext: "looking for a faster and less physically demanding route",
      startingPoint: "Lucknow, India",
      route: "Lucknow – Nepalgunj (by road) – Simikot – Hilsa – Taklakot – Mansarovar – Mount Kailash – Return",
      modeOfTravel: "Helicopter, and air-conditioned coach",
      accommodation: "Hotels in Nepalgunj, and Taklakot; guesthouses in Tibet",
      physicalDemand: "Moderate (trekking during Kailash Parikrama)",
      highlights: [
        "Flight from Kathmandu to Nepalgunj and then to Simikot",
        "Helicopter ride from Simikot to Hilsa, offering aerial views of the Himalayas",
        "Kailash Parikrama covering Dirapuk, Dolma La Pass, and Zuthulphuk",
        "Return via the same route, with a stopover at Nepalgunj"
      ],
      cost: "₹ 3,00,000/- per person",
      badgeColor: "bg-primary",
      pdf: "/itinerary/9Days_kailash.pdf",
      image: kailashImage5
    }
  ];

  // ===== 2. RELIGIOUS SIGNIFICANCE =====
  const religionSignificance = [
    {
      name: "Hinduism",
      icon: "ॐ",
      description: "In Hinduism, Mount Kailash is the sacred abode of Lord Shiva, the supreme deity and destroyer of ego. Devout Hindus believe that circumambulating the mountain (Parikrama) purifies the soul and cleanses karmic debts accumulated over lifetimes. Mansarovar Lake, created by the mind of Brahma, is considered one of the most sacred waters where pilgrims seek spiritual liberation (Moksha)."
    },
    {
      name: "Buddhism",
      icon: "☸",
      description: "Buddhist pilgrims revere Mount Kailash as the dwelling place of Chakrasamvara (Demchok), a manifestation of Buddha representing the ultimate state of enlightenment. The mountain's circumambulation is seen as a path to spiritual awakening and the elimination of ego and worldly attachments. For Tibetan Buddhists, completing the Parikrama symbolizes progress toward Nirvana and inner transformation."
    },
    {
      name: "Jainism",
      icon: "🪬",
      description: "Jains hold Mount Kailash as sacred Ashtapada, the mountain of enlightenment where Lord Rishabhanatha (Adinath), the first Tirthankara, attained liberation and infinite knowledge. For Jain pilgrims, the journey to Kailash represents the path of renunciation and non-violence (Ahimsa). The pilgrimage embodies the Jain belief in the conquest of karma and the achievement of spiritual purity and self-realization."
    },
    {
      name: "Tibetan Bon",
      icon: "卍",
      description: "In the ancient Bon tradition of Tibet, Mount Kailash is recognized as the spiritual center of the universe and the seat of the founder, Tonpa Shenrab. Bon practitioners perform a counter-clockwise Parikrama around the mountain to honor the divine energy dwelling within. This sacred pilgrimage represents the harmonious balance between the material and spiritual realms, and the connection with ancestral wisdom and natural forces."
    }
  ];

  // ===== 5. YATRA HIGHLIGHTS =====
  const highlights = [
    { icon: Mountain, title: "Darshan of Mount Kailash", desc: "Sacred views of the divine peak" },
    { icon: Heart, title: "Mansarovar Lake Snan", desc: "Spiritual bathing in sacred waters" },
    { icon: Users, title: "Kailash Parikrama", desc: "Sacred circumambulation (52 km)" },
    { icon: Zap, title: "Dolma La Pass", desc: "Crossing the highest spiritual threshold (5,700m)" },
    { icon: Mountain, title: "Himalayan Landscapes", desc: "Breathtaking terrain and pristine nature" },
    { icon: Heart, title: "Spiritual Ceremonies", desc: "Guided pujas and meditations" }
  ];

  // ===== 6. SAMPLE ITINERARY =====
  const itinerary = [
    { day: "Day 1", title: "Arrival & Preparation", desc: "Arrive in Kathmandu, settle in 3-star hotel. Acclimatization and spiritual preparation begins." },
    { day: "Day 2", title: "Kathmandu Exploration", desc: "Visit Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath. Evening meditation session." },
    { day: "Day 3", title: "Travel to Tibet Border", desc: "Drive to Kerung (Tibet). Explore local culture and markets. Rest and acclimatize." },
    { day: "Day 4", title: "Journey to Saga", desc: "Long drive through Tibetan plateau. Witness stunning landscapes. Stay at guesthouse." },
    { day: "Day 5", title: "Mansarovar Lake Darshan", desc: "Arrive at sacred Lake Mansarovar. Perform ritual bathing and puja. Overnight stay at the lake." },
    { day: "Day 6", title: "Kailash Parikrama Begins", desc: "Start circumambulation. Trek to Dirapuk. Evening prayers at the foot of Mount Kailash." },
    { day: "Day 7", title: "Dolma La Pass - Highest Point", desc: "Trek across the sacred Dolma La Pass (5,700m). Spiritual breakthrough experience. Rest at Zuthulphuk." },
    { day: "Day 8", title: "Parikrama Completion", desc: "Complete the sacred circuit. Descend to lower altitude. Reflection and gratitude ceremonies." },
    { day: "Day 9-12", title: "Return Journey", desc: "Journey back through Tibet and Nepal. Integration and sharing of experiences." },
    { day: "Day 13", title: "Departure", desc: "Depart from Kathmandu with transformed spirit and cherished memories." }
  ];

  // ===== 9. BEST TIME TO VISIT =====
  const bestTimeInfo = {
    season: "June to September",
    reason: "These months offer the best weather conditions for trekking. Temperatures are milder, and roads are accessible.",
    details: [
      "June-July: Early season, fewer pilgrims, slightly cooler",
      "August: Peak season, most departures, good weather",
      "September: Late season, fewer crowds, still accessible"
    ]
  };

  // ===== 12. TESTIMONIALS =====
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Bangalore",
      text: "The Kailash Mansarovar Yatra changed my life. The spiritual energy at Mount Kailash is indescribable. Mantra Miles took care of every detail, allowing me to focus solely on my spiritual journey.",
      rating: 5
    },
    {
      name: "Priya Desai",
      location: "Mumbai",
      text: "I thought I couldn't do it, but Mantra Miles' team made everything possible. From acclimatization to spiritual guidance, they were with us every step. A truly transformative experience.",
      rating: 5
    },
    {
      name: "Dr. Vikram Patel",
      location: "Delhi",
      text: "As a physician, I was concerned about the altitude and physical demands. Mantra Miles' experienced guides and medical support gave me complete confidence. Highly recommended.",
      rating: 5
    }
  ];



  // ===== 11. WHAT IS INCLUDED/EXCLUDED =====
  const inclusions = [
    "Accommodation (hotels, guesthouses, dormitories)",
    "Transportation (coach, flights, or helicopter depending on package)",
    "Vegetarian meals throughout the journey",
    "Sightseeing tours in Kathmandu",
    "Tibetan travel permits and visa fees",
    "Experienced guides, Sherpas, and medical support",
    "Oxygen cylinders for emergency use",
    "Spiritual ceremonies and puja arrangements"
  ];

  const exclusions = [
    "International flights to Kathmandu",
    "Travel insurance and emergency evacuation costs",
    "Personal expenses (shopping, tips, donations)",
    "Horse or porter services for Parikrama (can be hired separately)",
    "Extra accommodation due to weather or visa delays"
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{premiumCTAStyles}</style>
      <Header onNavigate={handleNavigation} currentView="home" onBackToHome={handleNavigation} />

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-700/30 to-amber-900/50 z-10">
            <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-8">
              <Badge className="mb-6 sm:mb-12 bg-primary text-white px-6 py-2 text-base font-semibold animate-pulse">
                Registrations Open
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl text-center leading-tight">
                Kailash Manasa Sarovara Yatra
              </h1>

              <p className="text-lg sm:text-2xl md:text-3xl text-white font-light italic mb-6 sm:mb-8 drop-shadow-lg text-center">
                Complete Kailash Yatra safely with medical support, experienced guides, comfortable logistics, and full assistance during the toughest pilgrimage on Earth.
              </p>

              <p className="text-base sm:text-xl text-white/90 text-center max-w-2xl mb-8 sm:mb-12 drop-shadow-lg">
                A sacred journey that transforms the body, mind, and soul
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full sm:w-auto">
                {/* Premium Primary CTA */}
                <QuoteDialog destination="Kailash Mansarovar Yatra">
                  <Button
                    size="lg"
                    className="cta-primary pulse-glow bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <Phone className="mr-2 sm:mr-3 h-4 sm:h-6 w-4 sm:w-6" />
                    <span className="relative">Speak to Expert</span>
                  </Button>
                </QuoteDialog>

                {/* Secondary WhatsApp CTA */}
                <Button
                  size="lg"
                  onClick={() => window.open('https://wa.me/+919972816108', '_blank')}
                  className="cta-primary bg-green-600 text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-green-700 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 sm:mr-3 h-4 sm:h-6 w-4 sm:w-6" />
                  Connect on WhatsApp
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. INTRODUCTION ===== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Sacred Nature of Mount Kailash
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revered across multiple faiths and cultures as the spiritual epicenter of the universe, Mount Kailash stands as a bridge between the material and divine realms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {religionSignificance.map((religion, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all text-center hover:-translate-y-2">
                <CardContent className="pt-8">
                  <div className="text-6xl mb-4 text-center">{religion.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{religion.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{religion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2B. YATRA PACKAGE OPTIONS ===== */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Choose Your Yatra Package
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Select the package that best suits your needs, fitness level, and spiritual goals
          </p>

          <div className="space-y-8">
            {/* Row 1: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yatraPackages.slice(0, 2).map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${pkg.image})`
                    }}
                  />

                  {/* Duration Bar */}
                  <div className={`${pkg.badgeColor} text-white py-3 px-4 text-center font-bold text-sm`}>
                    {pkg.duration.toUpperCase()}
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground line-clamp-2">
                      {pkg.name}
                    </h3>

                    {/* Eligibility */}
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">{pkg.eligibility}</span>
                        <span className="text-muted-foreground">, {pkg.eligibilitySubtext}</span>
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Starting Point:</span> {pkg.startingPoint}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Route:</span> {pkg.route}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Mode of Travel:</span> {pkg.modeOfTravel}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Accommodation:</span> {pkg.accommodation}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Physical Demand:</span> {pkg.physicalDemand}
                        </div>
                      </div>
                    </div>

                    {/* Tour Highlights */}
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase">Tour Highlights</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cost */}
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Total Cost Estimate:</span>
                      </p>
                      <p className="text-lg font-bold text-foreground">{pkg.cost}</p>
                    </div>

                    {/* Download Itinerary Button */}
                    {pkg.pdf && (
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-sm"
                        onClick={() => openPdfViewer(pkg.pdf, pkg.name)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Itinerary
                      </Button>
                    )}

                    {/* Get More Details Button */}
                  
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yatraPackages.slice(2, 4).map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${pkg.image})`
                    }}
                  />

                  {/* Duration Bar */}
                  <div className={`${pkg.badgeColor} text-white py-3 px-4 text-center font-bold text-sm`}>
                    {pkg.duration.toUpperCase()}
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground line-clamp-2">
                      {pkg.name}
                    </h3>

                    {/* Eligibility */}
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">{pkg.eligibility}</span>
                        <span className="text-muted-foreground">, {pkg.eligibilitySubtext}</span>
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Starting Point:</span> {pkg.startingPoint}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Route:</span> {pkg.route}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Mode of Travel:</span> {pkg.modeOfTravel}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Accommodation:</span> {pkg.accommodation}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Physical Demand:</span> {pkg.physicalDemand}
                        </div>
                      </div>
                    </div>

                    {/* Tour Highlights */}
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase">Tour Highlights</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cost */}
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Total Cost Estimate:</span>
                      </p>
                      <p className="text-lg font-bold text-foreground">{pkg.cost}</p>
                    </div>

                    {/* Download Itinerary Button */}
                    {pkg.pdf && (
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-sm"
                        onClick={() => openPdfViewer(pkg.pdf, pkg.name)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Itinerary
                      </Button>
                    )}

                    {/* Get More Details Button */}
                    
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: 1 Card Centered */}
            <div className="flex justify-center">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full md:max-w-xl">
                {yatraPackages.slice(4, 5).map((pkg) => (
                  <div key={pkg.id}>
                    {/* Image */}
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${pkg.image})`
                      }}
                    />

                    {/* Duration Bar */}
                    <div className={`${pkg.badgeColor} text-white py-3 px-4 text-center font-bold text-sm`}>
                      {pkg.duration.toUpperCase()}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground line-clamp-2">
                        {pkg.name}
                      </h3>

                      {/* Eligibility */}
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">{pkg.eligibility}</span>
                          <span className="text-muted-foreground">, {pkg.eligibilitySubtext}</span>
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground">Starting Point:</span> {pkg.startingPoint}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground">Route:</span> {pkg.route}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground">Mode of Travel:</span> {pkg.modeOfTravel}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground">Accommodation:</span> {pkg.accommodation}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground">Physical Demand:</span> {pkg.physicalDemand}
                          </div>
                        </div>
                      </div>

                      {/* Tour Highlights */}
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2 uppercase">Tour Highlights</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pkg.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cost */}
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">Total Cost Estimate:</span>
                        </p>
                        <p className="text-lg font-bold text-foreground">{pkg.cost}</p>
                      </div>

                      {/* Download Itinerary Button */}
                      {pkg.pdf && (
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-sm"
                          onClick={() => openPdfViewer(pkg.pdf, pkg.name)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Itinerary
                        </Button>
                      )}

                      {/* Button */}
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUBSIDY DOWNLOAD SECTION ===== */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto flex justify-center">
          <button
            onClick={downloadSubsidyPDF}
            className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-1 md:gap-2"
          >
            <Download className="h-4 md:h-5 w-4 md:w-5" />
            Kailash Mansarovar Yatra Subsidy
          </button>
        </div>
      </section>

      {/* ===== 3. THE SPIRITUAL EXPERIENCE ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            The Spiritual Experience
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Kailash Mansarovar Yatra is more than a physical journey—it's a profound spiritual awakening. As you trek through the Himalayas, surrounded by pristine peaks and sacred energy, you'll experience a transformation that resonates at the deepest levels of your being.
            </p>

            <p>
              <span className="font-semibold text-foreground">Inner Awakening:</span> In the silence of the mountains, far from worldly distractions, you'll connect with your innermost self. The circumambulation of Mount Kailash becomes a meditation, each step a prayer, each breath a connection to the divine.
            </p>

            <p>
              <span className="font-semibold text-foreground">The Silence of the Himalayas:</span> Words cannot capture the profound peace found at altitude. The vastness of the landscape humbles the ego, opening the heart to grace and spiritual wisdom that has guided millions of pilgrims for millennia.
            </p>

            <p>
              <span className="font-semibold text-foreground">Sacred Energy of Kailash:</span> Pilgrims from around the world testify to the tangible spiritual energy present at Mount Kailash. Whether you experience it as divine presence, cosmic consciousness, or inner peace, the transformation is undeniable.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 4. WHY TRAVEL WITH MANTRA MILES ===== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Why Travel with Mantra Miles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Pilgrimage Planning",
                desc: "Decades of experience designing transformative spiritual journeys. Every detail meticulously planned for your comfort and spiritual growth.",
                icon: "🎯"
              },
              {
                title: "Small Curated Groups",
                desc: "Intimate groups of 8-15 pilgrims ensuring personalized attention, meaningful connections, and a sacred community atmosphere.",
                icon: "👥"
              },
              {
                title: "Comfortable Logistics",
                desc: "Premium accommodations, nutritious vegetarian meals, reliable transportation, and comprehensive medical support throughout.",
                icon: "🏨"
              },
              {
                title: "Spiritual Guidance",
                desc: "Experienced spiritual guides who enhance your pilgrimage with wisdom, ceremonies, and authentic cultural experiences.",
                icon: "🙏"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. YATRA HIGHLIGHTS ===== */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Yatra Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all text-center">
                  <CardContent className="pt-8">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 8. WHO CAN JOIN ===== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Who Can Join the Yatra
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Fitness Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Moderate Fitness:</span> You should be able to walk 5-10 km daily for 4-6 weeks before departure.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Regular Exercise:</span> Incorporate cardio, breathing exercises, and altitude training.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Medical Clearance:</span> Consult your physician, especially if you have altitude-related concerns.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Age & Special Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">No Age Limit:</span> Pilgrims aged 18-80+ have completed the Yatra successfully.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Elderly Pilgrims:</span> Helicopter options available for those with limited trekking capacity.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Medical Support:</span> Our team includes experienced guides with medical training.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* ===== 10-11. INCLUSIONS & EXCLUSIONS ===== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">What is Included</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">What is NOT Included</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {exclusions.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-red-600 font-bold mt-0.5">—</span>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>


      {/* ===== 14. FINAL CTA ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Are You Ready to Answer the Call of Kailash?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            This is not just a journey—it's a transformation. Walk in the footsteps of millions who have found spiritual liberation at Mount Kailash.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Premium Primary CTA */}
            <QuoteDialog destination="Kailash Mansarovar Yatra">
              <Button
                size="lg"
                className="cta-primary pulse-glow bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 text-gray-900 font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Phone className="mr-3 h-6 w-6 relative" />
                <span className="relative font-extrabold">Speak to Expert</span>
              </Button>
            </QuoteDialog>

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/+919972816108', '_blank')}
              className="cta-primary bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Connect on WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>All Permits Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Sacred Guided Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 15. CLOSING QUOTE ===== */}
      <section className="py-16 px-6 md:px-12 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl font-light italic mb-4">
            "Kailash is not climbed. Kailash is experienced."
          </p>
          <p className="text-lg text-gray-300">— A Tibetan Proverb</p>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {pdfViewer.isOpen && (
        <PDFViewer
          isOpen={pdfViewer.isOpen}
          pdfUrl={pdfViewer.pdfUrl}
          title={pdfViewer.title}
          onClose={closePdfViewer}
        />
      )}

      <PaymentSection />
      <Footer />
    </div>
  );
}
