import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-lg font-bold">Prana Organic Farms</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium organic vermicompost producer and exporter. Committed to sustainable agriculture and healthier soil worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/product" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Product</Link>
              <Link to="/quality" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Quality</Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@pranaorganicfarms.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                info@pranaorganicfarms.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Organic Farm Road, Agricultural District, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Prana Organic Farms | Organic Vermicompost Exporter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
