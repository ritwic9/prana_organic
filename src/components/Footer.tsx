import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Prana Organic Farms
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Premium organic vermicompost producer and exporter. Committed to
              sustainable agriculture and healthier soil worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-6 text-lg">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Product", path: "/product" },
                { name: "Quality", path: "/quality" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group w-fit"
                >
                  {link.name}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-6 text-lg">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@pranaorganicfarms.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">sayhello@pranaorganicfarms.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">Karjat, Maharastra, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/60">
            © 2025 Prana Organic Farms | Organic Exporter
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
