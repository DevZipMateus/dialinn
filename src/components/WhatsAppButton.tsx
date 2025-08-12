
import React from 'react';

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
      <img 
        src="/lovable-uploads/bee06576-1f82-4a5a-bfb3-78dbee4b0ce2.png" 
        alt="WhatsApp" 
        className="w-12 h-12"
      />
    </button>
  );
};

export default WhatsAppButton;
