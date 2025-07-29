
import React from 'react';

const FinalCTA = () => {
  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para produtos da URBNSZN.");
    const whatsappNumber = "5511999999999"; // Número fictício
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Video Background Simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-urban-black/80 sm:bg-urban-black/75"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-urban-neon rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-urban-flame rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-urban-electric rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-orbitron font-black text-white mb-6 sm:mb-8 leading-tight px-2">
          <span className="block">VOCÊ NÃO SEGUE</span>
          <span className="hero-text animate-glow block">TENDÊNCIAS.</span>
          <span className="text-urban-flame block">VOCÊ COMEÇA ELAS.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
          Junte-se ao movimento que está redefinindo o streetwear brasileiro. 
          Vista a revolução.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={handleWhatsAppQuote}
            className="group relative overflow-hidden bg-urban-flame text-white px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-urban-flame/50 w-full sm:w-auto"
          >
            <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
            <div className="absolute inset-0 bg-urban-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button className="group border-2 border-urban-neon text-urban-neon px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 hover:bg-urban-neon hover:text-urban-black hover:scale-105 w-full sm:w-auto">
            VER CATÁLOGO
          </button>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-urban-neon rounded-full"></span>
            <span>Frete grátis acima de R$ 199</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-urban-flame rounded-full"></span>
            <span>Troca grátis em 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-urban-electric rounded-full"></span>
            <span>Parcelamento em até 12x</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
