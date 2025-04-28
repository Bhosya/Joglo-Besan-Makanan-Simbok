import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Informasi', href: '#info' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Reservasi', href: '#reservation' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-800 text-amber-50 shadow-md py-2' : 'bg-transparent text-amber-50 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8" />
            <div className="font-serif">
              <h1 className="text-xl font-bold tracking-tight leading-none">Joglo Besan</h1>
              <p className="text-xs tracking-wider">Makanan Simbok</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-amber-50 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium hover:text-amber-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#reservation');
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              Reservasi
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible mt-4' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-2 text-sm hover:bg-stone-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#reservation');
              }}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 transition-colors"
            >
              Reservasi
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;