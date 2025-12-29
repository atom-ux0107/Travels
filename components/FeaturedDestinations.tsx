
import React, { useEffect, useRef, useState } from 'react';
import { Star, MapPin, Heart, X, CheckCircle2 } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  { 
    id: '1', 
    name: 'Amalfi Coast', 
    location: 'Italy', 
    price: '$1,299', 
    rating: 4.9, 
    tags: ['Romantic', 'Coastal'], 
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800',
    summary: 'Experience the crown jewel of Italy’s coastline. From the vertical village of Positano to the historic heights of Ravello, every turn offers a postcard-perfect view of the Mediterranean.',
    included: ['Luxury cliffside accommodation', 'Private boat tour of Capri', 'Michelin-star dinner reservation', 'Private airport transfers']
  },
  { 
    id: '2', 
    name: 'Kyoto Temples', 
    location: 'Japan', 
    price: '$949', 
    rating: 4.8, 
    tags: ['Culture', 'Peace'], 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    summary: 'Step back in time to the heart of traditional Japan. Kyoto is a sanctuary of zen gardens, mysterious geisha districts, and thousands of classical Buddhist temples.',
    included: ['Traditional Ryokan stay', 'Tea ceremony experience', 'Guided temple hiking tour', 'Unlimited rail pass for Kyoto']
  },
  { 
    id: '3', 
    name: 'Bora Bora', 
    location: 'French Polynesia', 
    price: '$2,499', 
    rating: 5.0, 
    tags: ['Luxury', 'Island'], 
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800',
    summary: 'The ultimate paradise on earth. Famous for its turquoise lagoons and overwater bungalows, Bora Bora is the pinnacle of tropical luxury and seclusion.',
    included: ['Overwater bungalow villa', 'Daily shark & ray snorkeling', 'Island helicopter tour', 'All-inclusive premium dining']
  },
  { 
    id: '4', 
    name: 'Swiss Alps', 
    location: 'Switzerland', 
    price: '$1,599', 
    rating: 4.7, 
    tags: ['Nature', 'Snow'], 
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    summary: 'A majestic winter wonderland or a lush summer paradise. The Swiss Alps offer world-class skiing, pristine glacial lakes, and charming alpine villages.',
    included: ['Mountain view chalet stay', 'VIP Ski/Hiking pass', 'Glacier Express train tickets', 'Daily gourmet breakfast']
  },
  { 
    id: '5', 
    name: 'Cappadocia', 
    location: 'Turkey', 
    price: '$899', 
    rating: 4.9, 
    tags: ['Unique', 'Adventure'], 
    image: 'https://images.unsplash.com/photo-1544833058-e70f9ca25c17?auto=format&fit=crop&q=80&w=800',
    summary: 'Explore a landscape that feels like another planet. Famous for its "fairy chimneys" and cave dwellings, Cappadocia is best viewed from a hot air balloon at dawn.',
    included: ['Luxury cave hotel suite', 'Sunrise hot air balloon flight', 'Underground city guided tour', 'Traditional Turkish dinner show']
  },
  { 
    id: '6', 
    name: 'Bali Jungles', 
    location: 'Indonesia', 
    price: '$749', 
    rating: 4.8, 
    tags: ['Zen', 'Adventure'], 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    summary: 'Deep in the emerald heart of Ubud. Immerse yourself in the spiritual energy of Bali, featuring ancient temples, cascading waterfalls, and vibrant rice terraces.',
    included: ['Private pool jungle villa', 'Yoga & Wellness retreat access', 'Sacred Monkey Forest tour', 'Rice terrace sunset experience']
  },
];

const FeaturedDestinations: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = scrollRef.current?.children;
    if (children) {
      Array.from(children).forEach(child => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Global Selection</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Destinations for every soul.</h3>
          </div>
          <p className="text-slate-500 max-w-sm">Explore our curated list of the most breathtaking locations across the globe.</p>
        </div>

        <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={dest.id} 
              onClick={() => setSelectedDest(dest)}
              className="group cursor-pointer relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-12 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {dest.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all"
                  onClick={(e) => { e.stopPropagation(); }}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    {dest.location}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    {dest.rating}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900">{dest.name}</h4>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div>
                    <span className="text-sm text-slate-400">Starting from</span>
                    <p className="text-2xl font-black text-blue-600">{dest.price}</p>
                  </div>
                  <button className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedDest && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedDest(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-300 ease-out">
            <button 
              onClick={() => setSelectedDest(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white text-slate-900 rounded-full shadow-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full relative overflow-hidden">
                <img 
                  src={selectedDest.image} 
                  alt={selectedDest.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:hidden"></div>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4" /> {selectedDest.location}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{selectedDest.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i <= Math.floor(selectedDest.rating) ? 'fill-current' : ''}`} />)}
                    </div>
                    <span className="text-sm font-bold text-slate-500">{selectedDest.rating} (1,200+ reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Experience Summary</h4>
                  <p className="text-slate-600 leading-relaxed italic">"{selectedDest.summary}"</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">What's Included</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedDest.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-slate-400 font-medium">Full package starts at</span>
                    <p className="text-3xl font-black text-blue-600">{selectedDest.price}</p>
                  </div>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                    Book This Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);

export default FeaturedDestinations;
