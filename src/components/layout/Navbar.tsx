'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, LogIn } from 'lucide-react';
import { clsx } from 'clsx';

// Navigation Data
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-naramat-light/20 shadow-sm py-2'
          : 'bg-white border-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* --- LEFT: LOGO (Always Visible, Far Left) --- */}
          <Link href="/" className="flex-shrink-0 z-20 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
              <img src="/naramat.svg" alt="Naramat Academy" className="object-contain w-full h-full" />
            </div>
          </Link>

          {/* --- CENTER: MOBILE TEXT BRANDING --- */}
          {/* Absolute positioning ensures it is perfectly centered on mobile screens */}
          <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h1 className="text-xl font-serif font-bold text-naramat-brand tracking-tight leading-none">
              NARAMAT
            </h1>
            {/* Custom tracking to make 'ACADEMY' same width as 'NARAMAT' */}
            <p className="text-[10px] text-naramat-gold font-bold tracking-[0.35em] uppercase leading-tight pl-1">
              ACADEMY
            </p>
          </div>

          {/* --- DESKTOP: TEXT BRANDING (Next to Logo) --- */}
          {/* Only visible on medium screens and up */}
          <div className="hidden md:block ml-3">
             <h1 className="text-2xl font-serif font-bold text-naramat-brand tracking-tight leading-none">
               NARAMAT
             </h1>
             <p className="text-[10px] text-naramat-gold font-bold tracking-widest uppercase">
               ACADEMY
             </p>
          </div>

          {/* --- DESKTOP: NAVIGATION LINKS (Far Right) --- */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200 relative group',
                  pathname === link.href
                    ? 'text-naramat-brand font-semibold'
                    : 'text-gray-600 hover:text-naramat-brand'
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-naramat-brand transform transition-transform duration-300 origin-left",
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}

            {/* Desktop CTA Buttons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <Link 
                href="/portal" 
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-naramat-brand transition-colors"
              >
                <LogIn size={18} />
                <span>Portal</span>
              </Link>
              <Link
                href="/admissions/apply"
                className="bg-naramat-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-naramat-brand/20 hover:bg-purple-900 transition-all active:scale-95"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* --- MOBILE: RIGHT ICONS (Phone + Menu) --- */}
          <div className="flex items-center gap-4 md:hidden z-20">
            <a href="tel:+254700000000" className="text-naramat-brand p-2 bg-purple-50 rounded-full">
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-gray-600 hover:text-naramat-brand transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in h-screen">
          <div className="px-4 py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-4 py-4 rounded-lg text-lg font-medium transition-colors border-b border-gray-50',
                  pathname === link.href
                    ? 'text-naramat-brand bg-purple-50'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 flex flex-col gap-4 px-4">
              <Link 
                href="/portal"
                className="w-full flex justify-center items-center gap-2 py-4 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50"
              >
                <LogIn size={20} /> Parent Portal
              </Link>
              <Link 
                href="/admissions/apply"
                className="w-full py-4 rounded-xl bg-naramat-brand text-white font-bold text-center shadow-md text-lg"
              >
                Apply for 2026 Intake
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}