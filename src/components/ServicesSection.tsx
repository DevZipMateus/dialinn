import React from 'react';
import { Scissors, Shirt, Crown, Sparkles, Package, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: 'Peças Exclusivas',
      description: 'Criações únicas desenvolvidas especialmente para mulheres que valorizam a elegância e sofisticação no dia a dia.',
      features: ['Design autoral', 'Acabamento premium', 'Edições limitadas']
    },
    {
      icon: Users,
      title: 'Moda Inclusiva',
      description: 'Coleções pensadas para todos os biótipos, do P ao G1, garantindo que cada mulher encontre sua peça ideal.',
      features: ['Tamanhos P ao G1', 'Modelagem inclusiva', 'Consultoria de estilo']
    },
    {
      icon: Sparkles,
      title: 'Atendimento Personalizado',
      description: 'Cuidado especial em cada interação, construindo relacionamentos duradouros baseados na confiança e excelência.',
      features: ['Atendimento individual', 'Sugestões personalizadas', 'Pós-venda dedicado']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gold-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos mais que roupas: proporcionamos experiências únicas que 
            valorizam a beleza natural de cada mulher.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300 animate-fade-in border border-gold-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-gradient rounded-full text-white mb-6">
                <service.icon size={40} />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gold-gradient rounded-2xl p-12 text-center text-gray-900">
          <Shirt className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Experimente a Diferença DIA LEINN
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada peça é pensada para realçar sua beleza única e proporcionar 
            o máximo de conforto e elegância.
          </p>
          <button 
            className="bg-white text-gold-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
