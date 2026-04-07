import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/573000000000?text=Hola%2C%20quiero%20optimizar%20mi%20operaci%C3%B3n%20log%C3%ADstica"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-subtle"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
