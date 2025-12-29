
import React, { useState } from 'react';
import { User, Mail, CreditCard, Upload, Send, CheckCircle } from 'lucide-react';

const TravelerForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black text-slate-900">Registration Complete!</h2>
          <p className="text-lg text-slate-500">Our concierge team will review your ID and contact you within 24 hours to finalize your itinerary.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold hover:underline"
          >
            Submit another registration
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-3">
            <div className="bg-slate-900 p-12 text-white space-y-8 lg:col-span-1">
              <h2 className="text-3xl font-black">Register Your Trip</h2>
              <p className="text-slate-400">Secure your spot and provide necessary identification for international clearance.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Personal Details</p>
                    <p className="text-xs text-slate-500">Name & Contact</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Identity Verification</p>
                    <p className="text-xs text-slate-500">ID / Passport Scan</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-12 lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Passport / National ID Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    required
                    type="text" 
                    placeholder="E.g. X1234567"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Upload Document Copy (JPEG/PDF)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-600 transition-all cursor-pointer group">
                  <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2 group-hover:text-blue-600 transition-all" />
                  <p className="text-sm text-slate-500 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400">Max size: 5MB</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all transform hover:shadow-xl shadow-blue-200"
              >
                {loading ? 'Submitting...' : (
                  <>Submit Registration <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerForm;
