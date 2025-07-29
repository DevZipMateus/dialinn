
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload da logo
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = '/lovable-uploads/4bd8f6d7-814e-446e-88c1-5094e42d494d.png';
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio', route: '/' },
    { name: 'Sobre', href: '#sobre', route: '/' },
    { name: 'Serviços', href: '#servicos', route: '/' },
    { name: 'Galeria', href: '/galeria', route: '/galeria' },
    { name: 'Depoimentos', href: '#depoimentos', route: '/' },
    { name: 'Localização', href: '#localizacao', route: '/' },
    { name: 'Contato', href: '#contato', route: '/' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.href.startsWith('#')) {
      // Se é uma âncora, navega para home primeiro se necessário
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se é uma rota, navega diretamente
      navigate(item.href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            {logoLoaded ? (
              <img 
                src="/lovable-uploads/4bd8f6d7-814e-446e-88c1-5094e42d494d.png" 
                alt="DIA LEINN Logo" 
                className="h-12 md:h-14 w-auto"
                loading="eager"
                onError={(e) => {
                  console.error('Erro ao carregar logo:', e);
                  // Fallback: mostrar texto se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="h-12 md:h-14 w-24 bg-gold-200 animate-pulse rounded"></div>
            )}
            <noscript>
              <span className="text-xl font-bold text-gold-600">DIA LEINN</span>
            </noscript>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-gold-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
