'use client';

import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, Bus, 
  Eye, EyeOff, CheckCircle2, Loader2, Copy 
} from 'lucide-react';

export default function ContactPage() {
  // 1. STATE: Hybrid Map Logic
  // We only track if color is 'forced' (for mobile). 
  // Desktop relies on CSS hover, so it doesn't need state.
  const [forceMapColor, setForceMapColor] = useState(false);

  // 2. STATE: Form Handling
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Simulator for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network delay (Replace with real Formspree/API call later)
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus('success');
  };

  // Utility to copy info to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, trigger a toast notification here
    alert(`Copied: ${text}`);
  };

  return (
    <div className="min-h-screen bg-naramat-surface pb-20 font-sans">
      
      {/* --- HEADER --- */}
      <div className="bg-naramat-brand text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-naramat-light text-lg">
            We are located in the serene environment of Oloolua Ward, Ngong.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT COLUMN: INFO CARDS --- */}
          <div className="space-y-6">
            
            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-naramat-brand shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Naramat Academy<br />
                  Oloolua Ward, Ngong Hills<br />
                  Kajiado North, Kenya
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-naramat-gold bg-yellow-50 px-3 py-1 rounded-full">
                  <Bus size={12} /> Near Oloolua Shopping Center
                </div>
              </div>
            </div>

            {/* Contacts Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-naramat-brand shrink-0">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Contact Details</h3>
                <p className="text-gray-600 text-sm mb-4">Mon - Fri, 8:00am - 5:00pm</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between group cursor-pointer" onClick={() => copyToClipboard('+254700000000')}>
                    <a href="tel:+254700000000" className="text-gray-900 font-bold hover:text-naramat-brand transition-colors">+254 700 000 000</a>
                    <Copy size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex items-center justify-between group cursor-pointer" onClick={() => copyToClipboard('info@naramatacademy.sc.ke')}>
                    <a href="mailto:info@naramatacademy.sc.ke" className="text-gray-900 font-bold hover:text-naramat-brand transition-colors text-sm">info@naramatacademy.sc.ke</a>
                    <Copy size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>

             {/* Visiting Hours */}
             <div className="bg-naramat-brand text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
               <Clock className="absolute -bottom-4 -right-4 text-white/10 w-32 h-32 group-hover:rotate-12 transition-transform duration-500" />
               <h3 className="font-bold text-lg mb-4 relative z-10">School Tours</h3>
               <div className="space-y-2 relative z-10 text-sm">
                 <div className="flex justify-between border-b border-white/10 pb-2">
                   <span>Mon - Fri</span>
                   <span className="font-bold text-naramat-gold">8:00 AM - 4:00 PM</span>
                 </div>
                 <div className="flex justify-between border-b border-white/10 pb-2">
                   <span>Saturday</span>
                   <span className="font-bold text-naramat-gold">9:00 AM - 1:00 PM</span>
                 </div>
               </div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: MAP & FORM --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* --- UPGRADED MAP SECTION --- */}
            {/* 'group' class allows us to trigger hover effects on children when the parent is hovered */}
            <div className="relative group w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
              
              {/* MOBILE TOGGLE BUTTON (Hidden on Desktop 'md:hidden') */}
              <button 
                onClick={() => setForceMapColor(!forceMapColor)}
                className="md:hidden absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg text-gray-700 border border-gray-200 active:scale-95 transition-all"
                aria-label="Toggle Map Color"
              >
                {forceMapColor ? <EyeOff size={20} className="text-naramat-brand" /> : <Eye size={20} />}
              </button>
              
              {/* Mobile Helper Badge */}
              {!forceMapColor && (
                <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full pointer-events-none uppercase tracking-wide">
                  Tap eye to view color
                </div>
              )}

              {/* The Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6355228108614!2d36.686085!3d-1.3951696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f03f1ed9b6e87%3A0x9b2556ff44e2739a!2sNaramat%20Academy!5e0!3m2!1sen!2ske!4v1771402933067!5m2!1sen!2ske"  
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                // THE HYBRID LOGIC:
                // 1. If forceMapColor (Mobile Toggle) is ON -> remove grayscale.
                // 2. OR: If on Desktop (md), and Group is Hovered -> remove grayscale.
                // 3. Otherwise -> grayscale.
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  forceMapColor ? 'grayscale-0' : 'grayscale md:group-hover:grayscale-0'
                }`}
              />
            </div>

            {/* --- UPGRADED FORM --- */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900">Send us a Message</h2>
                {formStatus === 'success' && (
                  <span className="text-green-600 text-sm font-bold flex items-center gap-1 animate-fade-in">
                    <CheckCircle2 size={16} /> Message Sent!
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Parent's Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-naramat-brand/20 focus:border-naramat-brand transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <input required type="tel" placeholder="+254 7..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-naramat-brand/20 focus:border-naramat-brand transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-naramat-brand/20 focus:border-naramat-brand transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Inquiry Type</label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-naramat-brand/20 focus:border-naramat-brand transition-all">
                    <option>Admission Inquiry</option>
                    <option>Fee Structure Request</option>
                    <option>Job Application</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea required rows={4} placeholder="How can we help you?" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-naramat-brand/20 focus:border-naramat-brand transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                    formStatus === 'success' 
                      ? 'bg-green-600 text-white cursor-default'
                      : 'bg-naramat-brand text-white hover:bg-purple-900 active:scale-[0.99]'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : formStatus === 'success' ? (
                    <><CheckCircle2 size={18} /> Sent Successfully</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}