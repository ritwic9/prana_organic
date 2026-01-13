import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppCTA = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello! I'm interested in Prana Organic Farms vermicompost products. Please share more details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3.5 rounded-full shadow-2xl group overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-whatsapp to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full animate-ping bg-whatsapp/50 opacity-75" style={{ animationDuration: '2s' }} />
      
      <MessageCircle className="h-5 w-5 relative z-10" />
      <span className="hidden sm:inline font-medium relative z-10">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppCTA;