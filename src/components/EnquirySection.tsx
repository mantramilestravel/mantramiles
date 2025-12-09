import { useState, useCallback, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { UserFormData } from "@/types/metaPixel";
import emailjs from "emailjs-com";

export const EnquirySection = () => {
  const { toast } = useToast();
  const { trackLeadGeneration, trackLocationSearch, isEnabled } = useMetaPixel();
  const [budget, setBudget] = useState([50000]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    duration: "",
    travelers: "",
    budget: 50000,
    packageType: "",
    message: ""
  });

  // Debounce timer for location search
  const locationSearchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (locationSearchTimeoutRef.current) {
        clearTimeout(locationSearchTimeoutRef.current);
      }
    };
  }, []);

  // Helper function to get browser fingerprinting data
  const getBrowserData = useCallback(() => {
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
      clientId: btoa(`${navigator.userAgent}-${screen.width}x${screen.height}-${navigator.language}`).slice(0, 32)
    };
  }, []);

  // EmailJS config
  const SERVICE_ID = "service_30wnvqu";
  const TEMPLATE_ID = "template_y3evqpn";
  // Set VITE_EMAILJS_USER in .env.local or your host; fallback to empty string
  const USER_ID = (import.meta.env.VITE_EMAILJS_USER as string) || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Meta Pixel Lead tracking (best-effort)
    if (isEnabled) {
      try {
        const browserData = getBrowserData();
        const userData: UserFormData = {
          firstName: formData.name.split(' ')[0] || '',
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          ...(browserData.clientId && { external_id: browserData.clientId }),
          ...(browserData.fbp && { fbp: browserData.fbp }),
          ...(browserData.fbc && { fbc: browserData.fbc }),
          ...(browserData.userAgent && { client_user_agent: browserData.userAgent })
        };
        const packageInfo = formData.destination ? {
          id: formData.destination.toLowerCase().replace(/\s+/g, '-'),
          name: formData.destination,
          category: formData.packageType || 'travel_package',
          price: formData.budget,
          currency: 'INR'
        } : undefined;
        await trackLeadGeneration(userData, packageInfo);
      } catch (err) {
        console.warn("Meta Pixel lead generation tracking failed:", err);
      }
    }

    // Prepare EmailJS payload (must match template variable names)
    const payload = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      travelDates: formData.travelDates,
      duration: formData.duration,
      travelers: formData.travelers,
      budget: formData.budget,
      packageType: formData.packageType,
      message: formData.message,
      pageUrl: typeof window !== "undefined" ? window.location.href : ""
    };

    try {
      if (!USER_ID) {
        // If USER_ID is not supplied, warn and still attempt send (EmailJS may reject)
        console.warn("VITE_EMAILJS_USER not set. Please add VITE_EMAILJS_USER to your .env (EmailJS user/public key).");
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID);

      toast({
        title: "Enquiry Submitted!",
        description: "Thank you — our team will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelDates: "",
        duration: "",
        travelers: "",
        budget: 50000,
        packageType: "",
        message: ""
      });
      setBudget([50000]);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Submission failed",
        description: "We couldn't send your enquiry. Try again or email connect@mantramiles.in.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = async (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Track FindLocation event when user searches for destination with debouncing
    if (field === 'destination' && value.length > 2 && isEnabled) {
      if (locationSearchTimeoutRef.current) {
        clearTimeout(locationSearchTimeoutRef.current);
      }

      locationSearchTimeoutRef.current = setTimeout(async () => {
        try {
          const browserData = getBrowserData();
          const fallbackUserData: UserFormData = {
            ...(browserData.clientId && { external_id: browserData.clientId }),
            ...(browserData.fbp && { fbp: browserData.fbp }),
            ...(browserData.fbc && { fbc: browserData.fbc }),
            ...(browserData.userAgent && { client_user_agent: browserData.userAgent })
          };
          await trackLocationSearch(value, fallbackUserData);
        } catch (error) {
          console.warn('Meta Pixel location search tracking failed:', error);
        }
      }, 500);
    }
  };

  return (
    <section id="enquiry" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plan Your Perfect Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Share your travel dreams with us and let our experts craft the perfect itinerary for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground">+91 99728 16108</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <p className="font-medium text-foreground">WhatsApp Us</p>
                  <a
                    href="https://wa.me/+919972816108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    +91 99728 16108
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground">connect@mantramiles.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">
                      Mantra Miles - Victory Flag Journey,
                      <br />
                      Ullal Lake Trail,
                      <br />
                      {"SMV Layout 5th block, Bengaluru 560091."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM On Call</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    🛕 <strong>Mantra Miles</strong> - Your trusted travel partner for spiritual and adventure journeys across India and beyond.
                  </p>
                </div>
                <div className="pt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.42892474482!2d77.54402309340274!3d12.921716205644842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b3bb3a6a3b7%3A0xa602637ad3766e8b!2sMantra%20Miles!5e0!3m2!1sen!2sin!4v1694700000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Travel Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Input
                        id="destination"
                        value={formData.destination}
                        onChange={(e) => handleInputChange("destination", e.target.value)}
                        placeholder="e.g., Chardham, Kerala, Golden Triangle"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Travel Dates</Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange("travelDates", e.target.value)}
                        placeholder="e.g., March 2024"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 Days</SelectItem>
                          <SelectItem value="4-7">4-7 Days</SelectItem>
                          <SelectItem value="8-14">8-14 Days</SelectItem>
                          <SelectItem value="15+">15+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select onValueChange={(value) => handleInputChange("travelers", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-5">3-5 People</SelectItem>
                          <SelectItem value="6-10">6-10 People</SelectItem>
                          <SelectItem value="10+">10+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Budget Range (₹)</Label>
                    <div className="px-3">
                      <Slider
                        value={budget}
                        onValueChange={(value) => {
                          setBudget(value);
                          handleInputChange("budget", value[0].toString());
                        }}
                        max={500000}
                        min={10000}
                        step={5000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>₹10,000</span>
                        <span className="font-medium text-primary">₹{budget[0].toLocaleString()}</span>
                        <span>₹5,00,000+</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="packageType">Package Type</Label>
                    <Select onValueChange={(value) => handleInputChange("packageType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select package type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spiritual">Spiritual/Religious Tours</SelectItem>
                        <SelectItem value="adventure">Adventure Tours</SelectItem>
                        <SelectItem value="cultural">Cultural Heritage Tours</SelectItem>
                        <SelectItem value="nature">Nature & Wildlife</SelectItem>
                        <SelectItem value="beach">Beach & Relaxation</SelectItem>
                        <SelectItem value="honeymoon">Honeymoon Special</SelectItem>
                        <SelectItem value="family">Family Vacation</SelectItem>
                        <SelectItem value="corporate">Corporate Travel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your specific requirements, preferences, or any special arrangements needed..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
