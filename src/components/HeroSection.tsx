
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/bff28d63-8e60-4f7c-aa2a-300e95e8952a.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70 sm:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-black mb-4 sm:mb-6 leading-tight">
          <span className="hero-text block sm:inline">VISTA A ATITUDE.</span>
          <br className="hidden sm:block" />
          <span className="hero-text block sm:inline">SINTA O PESO DA RUA.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto font-inter px-2">
          Coleções autênticas para quem vive o agora. Bem-vindo à URBNSZN.
        </p>

        <button className="group relative overflow-hidden bg-urban-neon text-urban-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-urban-neon/50 w-full sm:w-auto max-w-xs sm:max-w-none">
          <span className="relative z-10">VER COLEÇÃO AGORA</span>
          <div className="absolute inset-0 bg-urban-flame transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-urban-neon rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-urban-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
