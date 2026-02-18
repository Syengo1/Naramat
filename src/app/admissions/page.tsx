import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, CheckCircle, Calendar, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions | Naramat Academy',
  description: 'Join the Naramat family. View our 2026 fee structure and admission requirements.',
};

export default function AdmissionsPage() {
  return (
    <div className="bg-naramat-surface min-h-screen pb-20">
      
      {/* --- 1. HEADER BANNER --- */}
      <div className="bg-naramat-brand text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" /> {/* Overlay for contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join the Family</h1>
          <p className="text-naramat-light text-lg max-w-2xl mx-auto">
            We are accepting applications for the 2026 Academic Year for Playgroup, PP1, PP2, and Grades 1-6.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- 2. LEFT COLUMN: THE PROCESS --- */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-naramat-brand text-white text-sm font-bold">1</span>
              Admission Process
            </h2>
            
            {/* Timeline Steps */}
            <div className="space-y-10 pl-4 border-l-2 border-naramat-light/20 ml-3">
              
              {/* Step 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-naramat-gold ring-4 ring-white" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Submit an Inquiry</h3>
                <p className="text-gray-600 mb-4">
                  Fill out the online form or visit our administration office in Ngong. We will schedule a date for an assessment.
                </p>
                <Link href="/contact" className="text-naramat-brand font-semibold text-sm hover:underline flex items-center gap-1">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 ring-4 ring-white" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Student Assessment</h3>
                <p className="text-gray-600">
                  Your child will undergo a simple oral or written assessment (depending on the grade) to understand their learning needs.
                </p>
                <div className="mt-3 flex gap-2 text-xs font-medium text-gray-500 bg-gray-50 p-2 rounded-lg inline-block">
                  <Calendar size={14} className="inline mr-1" /> Available Mon - Fri (8:00 AM - 1:00 PM)
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 ring-4 ring-white" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Admission & Orientation</h3>
                <p className="text-gray-600">
                  Upon success, you will receive an Admission Letter. Pay the admission fee to secure the slot and collect the uniform.
                </p>
              </div>

            </div>
          </div>

          {/* --- 3. RIGHT COLUMN: FEE STRUCTURE CARD (The Highlight) --- */}
          <div className="space-y-6">
            
            {/* THE DOWNLOAD CARD */}
            <div className="bg-naramat-brand text-white rounded-2xl shadow-xl overflow-hidden relative group">
              {/* Decorative Background Icon */}
              <FileText className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              
              <div className="p-8 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Download className="text-naramat-gold" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">2026 Fee Structure</h3>
                <p className="text-naramat-light text-sm mb-8">
                  Download the comprehensive fee guide for all grades, including transport charges and uniform costs.
                </p>

                <button className="w-full bg-white text-naramat-brand font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-naramat-gold hover:text-white transition-all duration-300 shadow-lg">
                  <Download size={18} /> Download PDF
                </button>
                
                <p className="text-xs text-center text-naramat-light mt-4 opacity-70">
                  PDF Size: 1.2 MB • Updated Jan 2026
                </p>
              </div>
            </div>

            {/* NEED HELP CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-gray-900 mb-4">Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Our admissions office is open daily from 8:00 AM to 4:00 PM.
              </p>
              <a href="tel:+254700000000" className="flex items-center gap-3 text-gray-900 font-bold hover:text-naramat-brand transition-colors">
                <div className="w-10 h-10 rounded-full bg-naramat-surface flex items-center justify-center text-naramat-brand">
                   <Phone size={18} />
                </div>
                +254 700 000 000
              </a>
            </div>

          </div>
        </div>

        {/* --- 4. REQUIREMENTS CHECKLIST --- */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Copy of Birth Certificate",
              "2 Recent Passport Photos",
              "Copy of Parent's ID",
              "Report Form from previous school",
              "NEMIS Number (if transferring)",
              "Completed Admission Form"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}