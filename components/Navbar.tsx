
import React, { useState, useEffect } from 'react';
import { Menu, X, PlaneTakeoff } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PlaneTakeoff className="text-blue-600 w-8 h-8" />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">VANDERLUST</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Destinations</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Our Story</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          <a href="#experiences" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Experiences</a>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#destinations" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
          <a href="#contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#experiences" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Experiences</a>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Book Your Trip</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
