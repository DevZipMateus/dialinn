
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim pelo site da DIA LEINN e gostaria de conhecer mais sobre suas peças exclusivas. Vocês ficam na Av. Contorno com R. 302, no Setor Norte Ferroviário?";
    const whatsappUrl = `https://wa.me/5562994518406?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
