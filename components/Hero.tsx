
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-blue-50 rounded-bl-[10rem] opacity-70"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
            <Globe className="w-4 h-4" />
            BEYOND BOUNDARIES
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Escape the <span className="text-blue-600 italic">Ordinary.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Curated travel experiences for the modern explorer. We don't just book trips; we design memories that last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#destinations" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1">
              Explore Destinations <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Our Story
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-slate-100">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+10}/100`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
              ))}
            </div>
            <div>
              <p className="font-bold text-slate-900">4.9/5 Rating</p>
              <p className="text-sm text-slate-500">From 12,000+ explorers</p>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover rounded-[3rem] shadow-2xl animate-float" alt="Beach" />
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800" className="w-full h-48 object-cover rounded-[2rem] shadow-xl" alt="Mountain" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800" className="w-full h-48 object-cover rounded-[2rem] shadow-xl" alt="Lake" />
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover rounded-[3rem] shadow-2xl animate-float" style={{ animationDelay: '1s' }} alt="Nature" />
            </div>
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-xl">
                <MapPin className="text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Spot</p>
                <p className="text-lg font-black text-slate-900">Santorini, Greece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

export default Hero;
