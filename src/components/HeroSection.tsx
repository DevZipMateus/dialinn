import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/b881d55b-9b98-4e82-b324-830e73c2a46f.png)' }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Pattern - keeping subtle elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Sparkles className="text-gold-500 w-12 h-12 animate-float" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
          <span className="text-white">Elegância que</span>
          <br />
          <span className="text-gradient">Abraça Você</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Peças exclusivas para acompanhar o dia a dia de mulheres elegantes. 
          Moda inclusiva do P ao G5, com muito estilo, elegância e conforto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            className="gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 elegant-shadow group flex items-center gap-2"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossa Coleção
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="border-2 border-gold-500 text-white bg-black/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-50 hover:text-gold-600 hover:scale-105"
            onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Sobre Nós
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-playfair font-bold text-gold-400 mb-2">P ao G5</h3>
            <p className="text-white drop-shadow-md">Tamanhos inclusivos para todas</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-playfair font-bold text-gold-400 mb-2">Exclusividade</h3>
            <p className="text-white drop-shadow-md">Peças únicas e especiais</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-playfair font-bold text-gold-400 mb-2">Elegância</h3>
            <p className="text-white drop-shadow-md">Estilo e conforto em cada detalhe</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
