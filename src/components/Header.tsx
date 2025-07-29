import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'COLEÇÃO',
    href: '#collection'
  }, {
    name: 'LOOKBOOK',
    href: '#lookbook'
  }, {
    name: 'SOBRE',
    href: '#about'
  }, {
    name: 'CONTATO',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-orbitron font-black text-urban-neon">
            URBNSZN
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-white font-medium hover:text-urban-neon transition-colors duration-300 relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-urban-neon transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-urban-neon transition-colors duration-300">
              
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-urban-neon transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full glass-effect">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="block text-white font-medium hover:text-urban-neon transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;