
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Executiva',
      rating: 5,
      text: 'Encontrei na DIA LEINN exatamente o que procurava: elegância e conforto. As peças são maravilhosas e o atendimento é excepcional!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c-94c3b4ca?q=80&w=400'
    },
    {
      name: 'Ana Costa',
      role: 'Empresária',
      rating: 5,
      text: 'Sou tamanho G4 e sempre tive dificuldade para encontrar roupas elegantes. A DIA LEINN mudou isso completamente! Peças lindas e inclusivas.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400'
    },
    {
      name: 'Carla Santos',
      role: 'Advogada',
      rating: 5,
      text: 'A qualidade das peças é incomparável. Cada detalhe é pensado com carinho. Virei cliente fiel da marca!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            O Que Nossas <span className="text-gradient">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de mulheres que encontraram na DIA LEINN 
            a elegância que sempre buscaram.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gold-50 to-white p-8 rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-6 right-6 text-gold-300">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-3 border-gold-200"
                />
                <div>
                  <h4 className="font-playfair font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold-600 font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gold-50 via-white to-gold-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Faça Parte da Nossa História
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de mulheres que já descobriram o prazer 
            de vestir elegância todos os dias.
          </p>
          <div className="flex justify-center">
            <button 
              className="gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 elegant-shadow"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossa Coleção
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
