'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-naramat-brand text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Pattern - Subtle vector overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               {/* Use the SVG logo we made earlier */}
               <img src="/naramat.svg" alt="Naramat Logo" className="w-12 h-12" />
               <div>
                  <h3 className="text-xl font-serif font-bold tracking-tight">NARAMAT</h3>
                  <p className="text-[10px] text-naramat-gold font-bold tracking-widest uppercase">ACADEMY</p>
               </div>
            </div>
            <p className="text-naramat-light text-sm leading-relaxed">
              We are a premier mixed day school in Ngong, committed to academic excellence and moral stewardship. Determined to excel in every aspect of a child's growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-naramat-gold hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-naramat-gold hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-naramat-gold hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-naramat-light">
              {['About Us', 'Admissions', 'Fee Structure', 'Academic Calendar', 'School Transport', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-naramat-gold hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-naramat-gold rounded-full" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Crucial for Local SEO) */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm text-naramat-light">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-naramat-gold mt-1" size={18} />
                <span>
                  Oloolua Ward, Ngong Hills<br/>
                  Kajiado North, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-naramat-gold" size={18} />
                <a href="tel:+254700000000" className="hover:text-white">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-naramat-gold" size={18} />
                <a href="mailto:info@naramatacademy.sc.ke" className="hover:text-white">info@naramatacademy.sc.ke</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Portal */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Parent Portal</h4>
            <p className="text-sm text-naramat-light mb-4">
              Access your child's performance reports, fee balances, and homework assignments.
            </p>
            <Link 
               href="/portal"
               className="w-full bg-naramat-gold text-naramat-brand font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
               Log In to Portal <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-naramat-light/60">
          <p>&copy; {currentYear} Naramat Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}