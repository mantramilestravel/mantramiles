import React from "react";
import { Mail, Phone, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "@/assets/logo.png";
import { useNavigate } from "react-router-dom"; // <-- useNavigate instead of Link

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    // Prefer react-router navigation for SPA behaviour
    try {
      navigate(to);
    } catch {
      // Fallback if router not available for some reason
      window.location.href = to;
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={Image}
                alt="Mantra Miles Logo"
                width={48}
                height={48}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-bold">Mantra Miles</h3>
                <p className="text-xs text-primary-foreground/80">Creating unforgettable journeys since 2015</p>
              </div>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted travel companion — personalised itineraries, handpicked stays and local expertise.
            </p>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <address className="not-italic">
                Mantra Miles - A Unit of Victory Flag Journey, Ground Floor,
                <br />
                F2 Ruby Enclave Apartment 5th cross,
                <br />
                {"Adarsh Nagar, Nagarbhavi, 560072."}
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links" className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-primary-foreground" aria-label="Go to Home">Home</a>
              </li>
              <li>
                <a href="#domestic" className="hover:text-primary-foreground" aria-label="View Domestic tours">Domestic</a>
              </li>
              <li>
                <a href="#international" className="hover:text-primary-foreground" aria-label="View International tours">International</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground" aria-label="About Us section">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground" aria-label="Contact section">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:connect@mantramiles.in"
                  className="hover:text-primary-foreground"
                  aria-label="Email Mantra Miles"
                >
                  connect@mantramiles.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919972816108"
                  className="hover:text-primary-foreground"
                  aria-label="Call Mantra Miles"
                >
                  +91 99728 16108
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <a
                  href="https://wa.me/919972816108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground"
                  aria-label="Chat on WhatsApp"
                >
                  +91 99728 16108
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/mantramiles"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20"
                aria-label="Mantra Miles on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/mantramiles_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20"
                aria-label="Mantra Miles on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <p className="text-xs text-primary-foreground/60">
              Share your travel stories with <span className="font-medium">#MantraMiles</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-primary-foreground/80 text-center md:text-left">
            <div>© 2025 Mantra Miles. All rights reserved.</div>
            <div className="mt-1 hover:text-black cursor-pointer" onClick={() => window.open("https://wa.me/27731108711", "_blank")}>Designed by <span className="font-medium">NamelesTek</span> — +27731108711</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex gap-6">
              {/* use onClick to ensure same-tab SPA navigation */}
              <a
                href="/privacy"
                onClick={(e) => handleNav(e, "/privacy")}
                className="hover:text-primary-foreground"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                onClick={(e) => handleNav(e, "/terms")}
                className="hover:text-primary-foreground"
                aria-label="View Terms of Use"
              >
                Terms of Use
              </a>
            </div>

            <div className="hidden sm:block border-l border-primary-foreground/20 h-6 mx-4" />

            <div className="text-xs text-primary-foreground/60 text-center sm:text-left">
              <div>Ullal Lake Trail, Sir M Visveswaraiah Layout, 5th Block, Bangalore – 560091</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};