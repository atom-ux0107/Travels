
import React from 'react';
import { PlaneTakeoff, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-10">
        {/* Center-aligned Company Branding */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-100">
            <PlaneTakeoff className="text-white w-8 h-8" />
          </div>
          <span className="text-4xl font-black tracking-tighter text-slate-900">VANDERLUST</span>
        </div>
        
        {/* Simplified Company Description */}
        <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
          We are dedicated curators of life-changing journeys. Our mission is to 
          bring the world's most breathtaking hidden gems closer to you, 
          providing world-class travel experiences that inspire and transform.
        </p>

        {/* Centered Social Icons */}
        <div className="flex items-center justify-center gap-10">
          <Instagram className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer transition-all hover:scale-125" />
          <Twitter className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer transition-all hover:scale-125" />
          <Facebook className="w-6 h-6 text-slate-400 hover:text-blue-600 cursor-pointer transition-all hover:scale-125" />
        </div>

        {/* Minimal Middle-Aligned Copyright */}
        <div className="pt-12 border-t border-slate-50 w-full text-slate-400 text-sm font-semibold tracking-wide">
          <p>© 2024 Vanderlust Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
