import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send, User, Mail, Phone, Users, CheckCircle2, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { UserFormData } from "@/types/metaPixel";
import emailjs from "emailjs-com";

// Premium Modal Animations
const premiumModalStyles = `
  @keyframes modal-fade-scale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes input-focus-glow {
    from {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
    to {
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
  }

  @keyframes pulse-button {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .premium-dialog {
    animation: modal-fade-scale 0.4s ease-out;
  }

  .premium-input:focus-visible {
    animation: input-focus-glow 0.3s ease-out forwards;
  }

  .pulse-cta {
    animation: pulse-button 2.5s infinite;
  }

  .trust-item {
    animation: slide-in 0.5s ease-out backwards;
  }

  .trust-item:nth-child(1) { animation-delay: 0.1s; }
  .trust-item:nth-child(2) { animation-delay: 0.15s; }
  .trust-item:nth-child(3) { animation-delay: 0.2s; }
`;

interface QuoteDialogProps {
  destination: string;
  children: React.ReactNode;
}

export const QuoteDialog = ({ destination, children }: QuoteDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelers: "",
    budget: "",
    requirements: ""
  });
  const { toast } = useToast();
  const { trackPackageInterest, isEnabled } = useMetaPixel();

  // EmailJS config
   const SERVICE_ID = "service_30wnvqu";
  const TEMPLATE_ID = "template_y3evqpn";
  const USER_ID = import.meta.env.VITE_EMAILJS_USER || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track AddToCart event for quote request
    if (isEnabled) {
      const userData: UserFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      };

      const packageInfo = {
        id: destination.toLowerCase().replace(/\s+/g, "-"),
        name: destination,
        category: "travel_package",
        price: getBudgetValue(formData.budget),
        currency: "INR"
      };

      await trackPackageInterest(packageInfo, userData);
    }

    // Prepare EmailJS payload
    const payload = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      phone: formData.phone,
      travelers: formData.travelers,
      budget: formData.budget,
      travelDate: date ? format(date, "PPP") : "Not specified",
      requirements: formData.requirements,
      destination: destination,
      pageUrl: typeof window !== "undefined" ? window.location.href : ""
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID);

      toast({
        title: "Quote Request Submitted!",
        description: `We’ll send you a customized quote for ${destination} within 24 hours.`,
      });

      setIsOpen(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelers: "",
        budget: "",
        requirements: ""
      });
      setDate(null);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Submission failed",
        description: "We couldn’t send your quote request. Please try again later or email connect@mantramiles.in.",
        variant: "destructive",
      });
    }
  };

  const getBudgetValue = (budgetRange: string): number => {
    switch (budgetRange) {
      case "below-25k": return 20000;
      case "25k-50k": return 37500;
      case "50k-100k": return 75000;
      case "100k-200k": return 150000;
      case "above-200k": return 250000;
      default: return 50000;
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const trustHighlights = [
    "Curated travel experiences",
    "Personalized itineraries",
    "Expert travel advisors",
    "Fast response within 24 hours"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="premium-dialog max-w-lg sm:max-w-5xl p-0 gap-0 overflow-hidden rounded-2xl"
      >
        <style>{premiumModalStyles}</style>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-96">
          {/* Left Panel - Experience Section */}
          <div className="hidden md:flex md:col-span-2 bg-gradient-to-b from-emerald-600 via-teal-600 to-blue-600 p-8 md:p-12 flex-col justify-between text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6" />
                <span className="font-semibold text-emerald-100">Premium Experience</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Start Planning Your Dream Journey
              </h2>

              <p className="text-emerald-100 mb-8 leading-relaxed">
                Tell us a few details and our travel experts will craft a personalized itinerary just for you.
              </p>

              {/* Trust Highlights */}
              <div className="space-y-3">
                {trustHighlights.map((highlight, idx) => (
                  <div key={idx} className="trust-item flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-200" />
                    <span className="text-sm text-emerald-50">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <p className="text-xs text-emerald-100 font-medium">🎯 Join thousands of happy travelers</p>
            </div>
          </div>

          {/* Right Panel - Form Section */}
          <div className="md:col-span-3 p-8 md:p-10 overflow-y-auto max-h-screen md:max-h-[600px]">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Quick Details</h3>
              <p className="text-sm text-gray-600 mt-1">Let’s create your perfect {destination} experience</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-2 block">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="premium-input pl-10 h-11 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-200 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 mb-2 block">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className="premium-input h-11 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-200 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="premium-input pl-10 h-11 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-200 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      placeholder="+91 XXXX XXXX"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="premium-input pl-10 h-11 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-200 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Travelers & Budget Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Travelers</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                    <Select onValueChange={(value) => updateFormData("travelers", value)}>
                      <SelectTrigger className="premium-input pl-10 h-11 border-gray-200 rounded-lg">
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={String(num)} className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">
                            {num} {num === 1 ? "Person" : "People"}
                          </SelectItem>
                        ))}
                        <SelectItem value="5+" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">5+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Budget</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 z-10 pointer-events-none font-semibold">₹</span>
                    <Select onValueChange={(value) => updateFormData("budget", value)}>
                      <SelectTrigger className="premium-input pl-10 h-11 border-gray-200 rounded-lg">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        <SelectItem value="below-25k" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">Below ₹25K</SelectItem>
                        <SelectItem value="25k-50k" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">₹25K - ₹50K</SelectItem>
                        <SelectItem value="50k-100k" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">₹50K - ₹1L</SelectItem>
                        <SelectItem value="100k-200k" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">₹1L - ₹2L</SelectItem>
                        <SelectItem value="above-200k" className="py-2 px-3 cursor-pointer hover:bg-emerald-50 focus:bg-emerald-100">Above ₹2L</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Preferred Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "premium-input w-full justify-start text-left font-normal h-11 border-gray-200 rounded-lg",
                        !date && "text-gray-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date ?? undefined} onSelect={setDate} />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Requirements */}
              <div>
                <Label htmlFor="requirements" className="text-sm font-semibold text-gray-700 mb-2 block">Special Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Any dietary preferences, accessibility needs, or special interests?..."
                  value={formData.requirements}
                  onChange={(e) => updateFormData("requirements", e.target.value)}
                  rows={3}
                  className="premium-input border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-200 transition-all resize-none"
                />
              </div>

              {/* CTA Button */}
              <Button
                type="submit"
                className="pulse-cta w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg text-base shadow-lg hover:shadow-2xl transition-all duration-300 h-12"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get My Personalized Travel Quote
              </Button>

              {/* Trust Indicators */}
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  No spam. Only personalized travel planning.
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Response within 24 hours.
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Trusted by hundreds of happy travelers.
                </p>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
