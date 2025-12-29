
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AITripPlanner from './components/AITripPlanner';
import TravelerForm from './components/TravelerForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Intro Hero */}
        <Hero />

        {/* Dynamic Destinations Grid with Popups */}
        <FeaturedDestinations />

        {/* AI Trip Planner Section */}
        <AITripPlanner />

        {/* Combined About Us and Contact Details Section */}
        <AboutUs />

        {/* Experience Section - Visual Mid Page Banner */}
        <section className="pt-24 px-6">
          <div className="max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt="Road Trip"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-20 left-12 md:left-24 max-w-2xl space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">It's a big world. <br/> Go explore.</h2>
              <p className="text-xl text-white/80">From the bustling streets of Tokyo to the quiet fjords of Norway, we bring you closer to the world's most hidden gems.</p>
            </div>
          </div>
        </section>

        {/* Visual Gallery Section */}
        <Gallery />

        {/* Stats Section */}
        <section className="py-24 bg-white border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Destinations', val: '250+' },
              { label: 'Happy Travelers', val: '120k' },
              { label: 'Trip Types', val: '45+' },
              { label: 'Expert Guides', val: '800' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl font-black text-blue-600 tracking-tighter">{stat.val}</p>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Testimonials */}
        <section id="experiences" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs">Testimonials</h2>
              <h3 className="text-5xl font-black text-slate-900">Voices of Wanderlust</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Elena Gilbert', role: 'Adventure Blogger', text: 'Vanderlust completely changed how I plan my trips. The simple booking process and detailed inclusions made everything stress-free.' },
                { name: 'Marcus Chen', role: 'Business Traveler', text: 'I needed a quick getaway that felt luxurious but not cliché. They found me a boutique villa in Tuscany that was absolute perfection.' },
                { name: 'Sarah Jenkins', role: 'Family of 4', text: 'Traveling with kids is hard, but the itinerary was so well-paced. The activities were fun for both parents and little ones.' }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[3rem] space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                  <div className="flex gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(j => <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed italic">"{item.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <TravelerForm />

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-blue-600">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight italic">Your next story is waiting to be written.</h2>
            <div className="flex justify-center">
              <a href="#contact" className="bg-white text-blue-600 px-12 py-5 rounded-3xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Contact Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
