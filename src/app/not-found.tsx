import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-white relative overflow-hidden">
      
      {/* Background Decor - Subtle Purple Gradients matching the Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] bg-naramat-light/10 rounded-full blur-3xl" />

      {/* Icon Container */}
      <div className="w-24 h-24 bg-naramat-surface rounded-2xl flex items-center justify-center mb-8 border border-naramat-light/20 shadow-xl shadow-naramat-brand/5 rotate-3">
        <Compass className="w-12 h-12 text-naramat-brand -rotate-3" />
      </div>

      {/* Typography matching the site's design system */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
        Page in <span className="text-naramat-brand italic">Development</span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
        We are currently building this section of our digital school. Check back soon as we continue to roll out new features for Naramat Academy.
      </p>

      {/* Primary Action */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-naramat-brand text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-naramat-brand/25 hover:bg-purple-900 hover:-translate-y-1 transition-all duration-300"
      >
        <ArrowLeft size={18} />
        Return to Homepage
      </Link>
    </div>
  );
}