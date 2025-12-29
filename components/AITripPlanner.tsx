
import React, { useState } from 'react';
import { Sparkles, Calendar, Wallet, Compass, Loader2, CheckCircle2 } from 'lucide-react';
import { generateTripPlan } from '../services/geminiService';
import { TripPlan, Vibe } from '../types';

const AITripPlanner: React.FC = () => {
  const [preferences, setPreferences] = useState({
    vibe: Vibe.Adventure,
    budget: 'Medium',
    duration: 5,
    interests: ''
  });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateTripPlan(preferences);
      setPlan(result);
    } catch (error) {
      console.error("Failed to generate plan", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="planner" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Form */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold bg-blue-100/50 px-4 py-2 rounded-full text-xs">
                <Sparkles className="w-4 h-4" />
                POWERED BY GEMINI 3.0
              </div>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">Your AI Travel <br/> Concierge.</h2>
              <p className="text-slate-500 text-lg">Answer a few questions and let our advanced AI craft a personalized itinerary just for you.</p>
            </div>

            <div className="bg-white p-8 rounded-[3rem] shadow-xl space-y-8 border border-slate-100">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-600" /> What's the vibe?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.values(Vibe).map(v => (
                    <button 
                      key={v}
                      onClick={() => setPreferences({ ...preferences, vibe: v })}
                      className={`py-3 px-4 rounded-2xl text-sm font-bold transition-all ${preferences.vibe === v ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" /> Duration (Days)
                  </label>
                  <input 
                    type="number" 
                    min="1" max="14"
                    value={preferences.duration}
                    onChange={(e) => setPreferences({ ...preferences, duration: parseInt(e.target.value) })}
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-blue-600" /> Budget Range
                  </label>
                  <select 
                    value={preferences.budget}
                    onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600"
                  >
                    <option>Budget</option>
                    <option>Medium</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-900">Specific Interests?</label>
                <textarea 
                  placeholder="e.g. Sushi, hiking, photography, history..."
                  value={preferences.interests}
                  onChange={(e) => setPreferences({ ...preferences, interests: e.target.value })}
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 h-24 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <> <Loader2 className="animate-spin" /> Thinking... </>
                ) : (
                  <> <Sparkles /> Generate Itinerary </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Results */}
          <div className="relative min-h-[600px]">
            {!plan && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
                <div className="bg-slate-50 p-6 rounded-full mb-6">
                  <Compass className="w-12 h-12 text-slate-300" />
                </div>
                <h4 className="text-2xl font-bold text-slate-400 mb-2">Ready to explore?</h4>
                <p className="text-slate-400">Your personalized plan will appear here.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] shadow-sm animate-pulse">
                <div className="space-y-4 w-full">
                  <div className="h-8 bg-slate-100 rounded-full w-2/3 mx-auto"></div>
                  <div className="h-4 bg-slate-50 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-50 rounded-full w-5/6 mx-auto"></div>
                  <div className="pt-8 space-y-4">
                    {[1,2,3].map(i => <div key={i} className="h-20 bg-slate-50 rounded-3xl"></div>)}
                  </div>
                </div>
              </div>
            )}

            {plan && (
              <div className="bg-white rounded-[3rem] shadow-2xl p-10 animate-in zoom-in duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">Recommended</p>
                    <h3 className="text-4xl font-black text-slate-900">{plan.destination}</h3>
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-black">
                    {plan.budget_level}
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">{plan.summary}</p>
                
                <div className="space-y-6">
                  <h5 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Daily Journey</h5>
                  {plan.itinerary.map((item) => (
                    <div key={item.day} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {item.day}
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-slate-900">{item.activity}</p>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-slate-900 rounded-[2rem] text-white">
                  <h6 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-green-400 w-4 h-4" /> Trip Highlights
                  </h6>
                  <div className="grid grid-cols-2 gap-4">
                    {plan.highlights.map((h, i) => (
                      <div key={i} className="text-xs opacity-80 flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full"></div> {h}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-8 border-2 border-slate-900 py-4 rounded-3xl font-bold hover:bg-slate-900 hover:text-white transition-all">
                  Download Full Itinerary
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITripPlanner;
