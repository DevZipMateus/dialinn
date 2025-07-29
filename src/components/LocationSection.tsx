
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gold-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha nos conhecer pessoalmente e descobrir de perto 
            a qualidade e elegância das nossas peças.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="text-gold-500 w-8 h-8" />
                Endereço
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Rua Jose Sinimbu Filho<br />
                Goiânia - GO
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="text-gold-500 w-8 h-8" />
                Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-gold-500 w-5 h-5" />
                  <a href="tel:62994518406" className="text-gray-700 hover:text-gold-600 transition-colors">
                    (62) 99451-8406
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gold-500 w-5 h-5" />
                  <a href="mailto:dialeinnmodas@gmail.com" className="text-gray-700 hover:text-gold-600 transition-colors">
                    dialeinnmodas@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-2xl elegant-shadow">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-gold-500 w-8 h-8" />
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl elegant-shadow overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
              <div className="text-center text-gold-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">
                  Mapa Interativo<br />
                  Em Breve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
