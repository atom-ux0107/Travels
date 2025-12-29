
import React from 'react';
import { Award, ShieldCheck, Heart, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold">
              OUR MISSION
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Curating <span className="text-blue-600">Unforgettable</span> Journeys Since 2012.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Vanderlust was born from a simple belief: that travel should be more than just a change of scenery—it should be a soul-stirring experience. We started as a small group of explorers and have grown into a global concierge, but our heart remains in the hidden alleys of Kyoto and the quiet coasts of Amalfi.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900">Award Winning</p>
                <p className="text-sm text-slate-500">Voted Top Agency 2023</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900">Secure Travel</p>
                <p className="text-sm text-slate-500">End-to-end protection</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                  <Heart className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900">Passion First</p>
                <p className="text-sm text-slate-500">Expertly curated spots</p>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[2rem] shadow-xl w-full h-64 object-cover" 
                  alt="Team"
                />
                <div className="bg-blue-600 p-8 rounded-[2rem] text-white">
                  <p className="text-3xl font-black">98%</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[2rem] shadow-xl w-full h-96 object-cover" 
                  alt="Exploring"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div id="contact" className="bg-slate-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-slate-900">Let's craft your next <br /><span className="text-blue-600">masterpiece.</span></h3>
              <p className="text-slate-500 text-lg">Our experts are available around the clock to assist you with your personalized travel needs.</p>
              
              <div className="space-y-8 pt-4">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Send us an email</p>
                    <p className="text-xl font-bold text-slate-900">hello@vanderlust.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call our concierge</p>
                    <p className="text-xl font-bold text-slate-900">+1 (555) 000-1234</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit our studio</p>
                    <p className="text-xl font-bold text-slate-900">7th Ave, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl space-y-8">
              <h4 className="text-2xl font-black text-slate-900">Reach Out Instantly</h4>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600" />
                <textarea placeholder="How can we help?" rows={4} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600"></textarea>
                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all">Send Message</button>
              </div>
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <span className="text-xs font-bold uppercase tracking-widest">Follow us on</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
