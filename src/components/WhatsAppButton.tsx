import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "237697190774";
  const message = "Bonjour, je souhaite obtenir des informations sur vos services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-primary-light text-white p-4 rounded-full shadow-2xl hover:bg-primary transition-all duration-300 z-40 hover:scale-110 animate-pulse-green"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;