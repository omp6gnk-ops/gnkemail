import React from 'react';
import { BookOpen, GraduationCap, Laptop, ShieldCheck, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-4">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 uppercase tracking-wider">
          Who We Are
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          About GNK Education & Digital Services
        </h1>
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          GNK Education & Digital Services is a premier academic counseling and technology consultancy firm. We guide students toward global academic achievements and professional growth.
        </p>
      </div>

      {/* Corporate Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-200/80 pt-12">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">Our Story & Mission</h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Founded with the vision to bridge the gap between academic aspirations and execution, GNK Education & Digital Services has been at the forefront of counseling, documentation review, and technical mentoring.
          </p>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            We understand that admissions and technical coursework can be challenging. Our mission is to simplify these complex pathways, providing structured guidance and personalized academic mentorship to every student we work with.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-105 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Academic Placement</h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">Guidance for college selections, admissions counseling, and application optimization.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-105 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Technical Mentoring</h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">Thesis support, programming coaching, and full-stack software development mentoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">Our Core Principles</h2>
          <p className="text-xs text-slate-400">The values that drive our consultations and services every day.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Integrity & Quality</h3>
            <p className="text-xs text-slate-500 leading-normal">
              We uphold absolute transparency in admissions and maintain high standards in code quality and technical reports.
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Student-Centric</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Every counseling session is custom-tailored to the student's unique academic background, career goals, and requirements.
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Absolute Support</h3>
            <p className="text-xs text-slate-500 leading-normal">
              From application submissions to final project execution reviews, our team stands by the student step-by-step.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
