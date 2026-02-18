'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Shield, Users, Lightbulb, Trophy } from 'lucide-react';

// Data Source - Easy to edit text later
const FEATURES = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Stewardship (Naramat)",
    description: "True to our name, we nurture every child with care, treating them as unique individuals with distinct talents.",
    color: "bg-pink-500" // Unique accent for this card
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Academic Excellence",
    description: "Our 'Determined to Excel' motto drives a rigorous curriculum that consistently produces top-tier results.",
    color: "bg-naramat-brand"
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Discipline & Integrity",
    description: "We instill strong moral character, ensuring students grow into responsible, respectful citizens.",
    color: "bg-blue-600"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "CBC Compliant",
    description: "Fully equipped for the Competency Based Curriculum with modern learning resources and practical lessons.",
    color: "bg-emerald-500"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Close-knit Classes",
    description: "With a 20:1 student-teacher ratio, no child gets left behind. Every student receives personal attention.",
    color: "bg-orange-500"
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Holistic Growth",
    description: "Beyond books, we focus on sports, arts, and digital literacy to build well-rounded future leaders.",
    color: "bg-purple-500"
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Each card appears 0.1s after the previous one
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-naramat-light/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-naramat-brand mb-4">
            Why Parents Trust <span className="text-naramat-brand">Naramat</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don't just teach; we nurture. Our philosophy rests on three pillars: 
            Excellence in class, Discipline in character, and Stewardship in community.
          </p>
        </div>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }} // Subtle lift effect on hover
              className="group relative p-8 bg-naramat-surface rounded-2xl border border-naramat-light/10 hover:border-naramat-brand/20 hover:shadow-xl hover:shadow-naramat-brand/5 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-naramat-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner (Visual Polish) */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 rounded-full bg-naramat-gold" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}