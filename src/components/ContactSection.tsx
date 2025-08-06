
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar via WhatsApp
    const message = `Olá! Vim pelo site da DIA LEINN.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5562994518406?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar a peça perfeita. 
            Fale conosco e descubra como podemos tornar seu estilo ainda mais especial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Vamos Conversar?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossa equipe está pronta para oferecer o melhor atendimento 
                e ajudar você a encontrar exatamente o que procura.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">(62) 99451-8406</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">dialeinnmodas@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-gradient p-8 rounded-2xl text-gray-900 text-center">
              <h4 className="text-2xl font-playfair font-bold mb-4">
                Siga-nos nas Redes Sociais
              </h4>
              <p className="mb-6 opacity-90">
                Acompanhe nossas novidades e inspirações de moda
              </p>
              <a
                href="https://instagram.com/dia_leinn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gold-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                @dia_leinn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-b from-gold-50 to-white p-8 rounded-2xl elegant-shadow">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gold-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gold-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gold-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="(62) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gold-500 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gold-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Como podemos ajudar você?"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 elegant-shadow flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
