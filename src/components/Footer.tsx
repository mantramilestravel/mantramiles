import { Mail, Phone, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "@/assets/logo.png"; // logo import
import PrivacyPdf from "@/assets/Privacy_Policy.pdf";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={Image}
                alt="MantraMiles Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <h3 className="text-xl font-bold">Mantra Miles</h3>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating unforgettable journeys and memories that last a lifetime.
              Your trusted travel companion for over a decade.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>343, Sir M Visveswaraiah Layout, 5th Block, Bangalore - 560110</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary-foreground">Home</a></li>
              <li><a href="#domestic" className="hover:text-primary-foreground">Domestic</a></li>
              <li><a href="#international" className="hover:text-primary-foreground">International</a></li>
              <li><a href="#about" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:mantramiles.01@gmail.com" className="hover:text-primary-foreground">
                  mantramiles.01@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919972816108" className="hover:text-primary-foreground">
                  +91 99728 16108
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <a
                  href="https://wa.me/919972816108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground"
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
              Share your travel stories with #MantraMiles
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-primary-foreground/80">
            © 2025 Mantra Miles. All rights reserved.
            <br />
            Designed by Pramod Ramamurthy - 9739020703
            <br />
          </div>

          <div className="flex gap-6">
            {/* Use imported module as href - download attribute hints to save */}
            <a
              href={PrivacyPdf}
              download="MantraMiles-Privacy-Policy.pdf"
              className="hover:text-primary-foreground"
              aria-label="Download Privacy Policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>

            <a
              href={PrivacyPdf}
              download="MantraMiles-Terms-Of-Use.pdf"
              className="hover:text-primary-foreground"
              aria-label="Download Terms of Use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
