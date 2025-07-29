
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  // Coordenadas aproximadas para R. José Sinimbu Filho, 135 - Setor Norte Ferroviário, Goiânia - GO
  const latitude = -16.6689;
  const longitude = -49.2394;
  
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
                R. José Sinimbu Filho, 135<br />
                Setor Norte Ferroviário<br />
                Goiânia - GO, 74063-340
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
            <div className="w-full h-96 relative">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização DIA LEINN - R. José Sinimbu Filho, 135, Goiânia - GO"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-sm">
                  <a 
                    href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 transition-colors"
                  >
                    Ver no OpenStreetMap
                  </a>
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
