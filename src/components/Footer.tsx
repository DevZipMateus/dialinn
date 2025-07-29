
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-urban-black border-t border-urban-concrete-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-orbitron font-black text-urban-neon mb-4">
              URBNSZN
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mais que roupas, somos um movimento. Representando a cultura urbana 
              autêntica desde 2020.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-urban-concrete rounded-full flex items-center justify-center hover:bg-urban-neon hover:text-urban-black transition-colors duration-300 cursor-pointer">
                <span className="font-bold">IG</span>
              </div>
              <div className="w-10 h-10 bg-urban-concrete rounded-full flex items-center justify-center hover:bg-urban-neon hover:text-urban-black transition-colors duration-300 cursor-pointer">
                <span className="font-bold">TT</span>
              </div>
              <div className="w-10 h-10 bg-urban-concrete rounded-full flex items-center justify-center hover:bg-urban-neon hover:text-urban-black transition-colors duration-300 cursor-pointer">
                <span className="font-bold">YT</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">SHOP</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Coleções</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Lançamentos</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Sale</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">SUPORTE</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Trocas & Devoluções</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-urban-neon transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-urban-concrete-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 URBNSZN. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-urban-neon transition-colors duration-300">Privacidade</a>
            <a href="#" className="hover:text-urban-neon transition-colors duration-300">Termos</a>
            <a href="#" className="hover:text-urban-neon transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
