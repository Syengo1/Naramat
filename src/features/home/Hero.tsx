'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For that premium entrance animation
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-naramat-surface pt-10 pb-20 lg:pt-20 lg:pb-32">
      
      {/* Background Decor - Subtle Purple Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-naramat-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-naramat-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-naramat-brand/20 text-naramat-brand text-xs font-bold tracking-wide uppercase">
              <Star size={12} className="text-naramat-gold fill-naramat-gold" />
              Admissions Open for 2026
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
              Determined to <br />
              <span className="text-naramat-brand italic">
                Excel.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Welcome to Naramat Academy. We are more than a school; we are a community in Ngong dedicated to nurturing academic brilliance and moral stewardship in every child.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/admissions" 
                className="inline-flex justify-center items-center gap-2 bg-naramat-brand text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-naramat-brand/25 hover:bg-purple-900 hover:-translate-y-1 transition-all duration-300"
              >
                Enroll Your Child <ArrowRight size={18} />
              </Link>
              <Link 
                href="/fees" 
                className="inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:border-naramat-brand/30 transition-all duration-300"
              >
                View Fee Structure
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>CBC Curriculum Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>Condusive Learning Environment</span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: VISUALS --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* PLACEHOLDER: Replace this src with a real photo of students later */}
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Naramat Students Learning" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for Text Readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-naramat-brand/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating "Stats" Card - Adds depth */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-naramat-gold/10 rounded-full text-naramat-gold">
                  <Star size={20} fill="currentColor" />
                </div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Rating</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">#1</p>
              <p className="text-sm text-gray-500">Choice for parents in Oloolua Ward</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}