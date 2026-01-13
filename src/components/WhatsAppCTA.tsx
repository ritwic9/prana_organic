import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello! I'm interested in Prana Organic Farms vermicompost products. Please share more details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppCTA;
