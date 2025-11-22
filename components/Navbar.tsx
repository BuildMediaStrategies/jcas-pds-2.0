import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Christmas', href: '#christmas' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-white hover:text-gray-200 transition-colors">
              JCAS <span className="font-light">P&D</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-shimmer px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-6">
             <a href="tel:+447000000000" className="text-white hover:text-gray-300">
                <Phone size={22} />
             </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-10 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-xl font-serif font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-10 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm rounded-full w-full text-center btn-shimmer"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;