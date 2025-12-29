
import React, { useEffect, useRef } from 'react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', alt: 'Mountain Landscape', span: 'md:col-span-2 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600', alt: 'Lake View', span: 'md:col-span-1 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600', alt: 'Italian Coast', span: 'md:col-span-1 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=600', alt: 'Venice Canal', span: 'md:col-span-1 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', alt: 'Paris Streets', span: 'md:col-span-2 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600', alt: 'Kyoto Temple', span: 'md:col-span-1 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', alt: 'Bali Nature', span: 'md:col-span-2 md:row-span-1' },
];

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = containerRef.current?.querySelectorAll('.gallery-item');
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs">Visual Stories</h2>
          <h3 className="text-5xl font-black text-slate-900">Captured Moments</h3>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`gallery-item opacity-0 translate-y-10 transition-all duration-700 ease-out overflow-hidden rounded-[2.5rem] relative group ${img.span}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
