
import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-playfair font-bold text-gradient mb-4">
              DIA LEINN
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Criando peças exclusivas para acompanhar o dia a dia de mulheres elegantes. 
              Moda inclusiva do P ao G5, com muito estilo, elegância e conforto.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dia_leinn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <a href="tel:62994518406" className="hover:text-gold-300 transition-colors">
                  (62) 99451-8406
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <a href="mailto:dialeinnmodas@gmail.com" className="hover:text-gold-300 transition-colors">
                  dialeinnmodas@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <span>Av. Contorno, R. 302<br />Setor Norte Ferroviário<br />Goiânia - GO, 74063-390</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="#inicio" 
                  className="hover:text-gold-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="hover:text-gold-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="hover:text-gold-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="hover:text-gold-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DIA LEINN. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com ❤️ para mulheres que valorizam elegância e inclusão.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
