import React from 'react';
import { Heart, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Inclusão',
      description: 'Valorização de todos os biótipos, do P ao G1, promovendo autoestima e confiança.'
    },
    {
      icon: Users,
      title: 'Relacionamento',
      description: 'Construção de relações duradouras com nossas clientes através da excelência.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Superação constante de expectativas com peças de alta qualidade e acabamento.'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Busca constante por novas ideias, melhorias e adaptação às mudanças do mercado.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Sobre a <span className="text-gradient">DIA LEINN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa marca surgiu da vontade de criar peças exclusivas para acompanhar 
            o dia a dia de mulheres elegantes, que não abrem mão de se vestir com elegância e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 text-center lg:text-left">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gold-50 p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gold-600 mb-4 flex items-center gap-3">
                <Target className="w-8 h-8" />
                Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Valorizar todos os biótipos do P ao G1, promovendo inclusão e buscando 
                superar expectativas, construindo uma relação duradoura com nossas clientes 
                com muito estilo e elegância.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gold-600 mb-4">
                Nossos Valores
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                  Capacidade de superar desafios
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                  Estimular a originalidade promovendo equilíbrio ambiental, econômico e social
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                  Adaptar-se às mudanças e manter-se competitivo no mercado
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                  Busca constante por novas ideias e melhorias
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <video
              src="/lovable-uploads/galeria/videos/dialinn.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-2xl w-full h-auto"
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gold-50 elegant-shadow hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-gradient rounded-full text-gray-900 mb-6">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
