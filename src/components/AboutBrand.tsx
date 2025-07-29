
import React from 'react';

const AboutBrand = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 urban-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-6 sm:mb-8 px-2">
            SOBRE A <span className="text-urban-electric">URBNSZN</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed px-2">
              Nascemos nas ruas, crescemos com a cultura. A URBNSZN não é apenas uma marca - 
              é um movimento que representa a autenticidade da vida urbana.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              Desde 2020, criamos peças que dialogam com o hip-hop, o grafite, o skate e toda 
              a energia que pulsa nas metrópoles. Cada coleção é uma homenagem àqueles que 
              não se conformam, que criam sua própria trilha sonora e que vestem a atitude 
              como segunda pele.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              Nossa missão é simples: vestir quem não tem medo de se expressar. Somos para 
              os rebeldes, os sonhadores, os que transformam concreto em arte e fazem da 
              rua seu palco.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-urban-neon mb-2">100%</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm sm:text-base">Autêntico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-urban-flame mb-2">24/7</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm sm:text-base">Atitude</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-urban-electric mb-2">∞</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm sm:text-base">Estilo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
