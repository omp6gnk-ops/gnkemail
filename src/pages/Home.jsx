import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Laptop, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'University Admission Guidance',
      desc: 'Expert counseling and mentoring for students navigating college selection, application processes, and course registry approvals.',
      icon: GraduationCap,
      color: 'bg-blue-50 border-blue-100 text-blue-600',
      bullets: [
        'Personalized college & course match profiling',
        'SOP & Letter of Recommendation mentoring',
        'Direct admission process counseling',
        'Scholarship and financial aid guidance'
      ]
    },
    {
      title: 'Academic Project Assistance',
      desc: 'Guidance on structural research formatting, code implementations, software execution, and academic writing standards.',
      icon: Laptop,
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
      bullets: [
        'Thesis research methodology structure support',
        'Software implementation (Web, AI, Data Science)',
        'Comprehensive documentation & presentation slides',
        'Technical report formatting & plagiarism checks'
      ]
    },
    {
      title: 'Digital Skill Mentoring',
      desc: 'One-on-one coding coaching, software development workshops, and programming mentorship to boost career readiness.',
      icon: Code,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      bullets: [
        'Interactive coding lessons (JavaScript, Python, React)',
        'Full-stack software engineering project reviews',
        'Data structures and systems architecture principles',
        'Industry-standard Git workflows and clean code practices'
      ]
    }
  ];

  const highlights = [
    { title: 'Verified Experts', desc: 'Our team comprises certified academic advisors and seasoned tech specialists.', icon: Users },
    { title: 'Data Confidentiality', desc: 'We protect your research records and project source codes with absolute privacy.', icon: ShieldCheck },
    { title: 'Verified Results', desc: 'Successfully helped 1,500+ students secure seats in prestigious colleges globally.', icon: Award },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-4">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-755 bg-blue-50 border border-blue-100 tracking-wide uppercase">
            Official Academic & Digital Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Empowering Students with <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700">
              Academic Support & Digital Services
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-550 leading-relaxed max-w-lg">
            GNK Education & Digital Services guides your academic journey. From securing university placements to processing crucial academic research and delivering tailored software project assistance, we provide reliable, secure, and professional guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#services"
              className="btn-primary flex items-center justify-center gap-2 !py-3 !px-6 !text-xs font-bold !bg-blue-600 hover:!bg-blue-700 cursor-pointer shadow-[0_4px_14px_rgba(37,99,235,0.2)]"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/contact"
              className="btn-secondary flex items-center justify-center gap-2 !py-3 !px-6 !text-xs font-bold cursor-pointer"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>

        {/* Hero Decorative Mockup */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 bg-white border border-slate-200/85 rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
              <span className="text-xs font-extrabold text-slate-900 tracking-tight">Active Consultations</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">B.Tech Admission</span>
                  <span className="text-xs text-slate-800 font-semibold">University Match Found</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Research Paper</span>
                  <span className="text-xs text-slate-800 font-semibold">Methodology Finalized</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Code className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Web App Mentoring</span>
                  <span className="text-xs text-slate-800 font-semibold">Coding Session Scheduled</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-4 text-center">
              <span className="text-[10px] text-slate-450">Total Consultations: <strong className="text-blue-600">99.8% Approval</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white border-y border-slate-200/60 py-24 px-6 md:px-12 -mx-6 md:-mx-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Expertise Fields</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">Our Professional Offerings</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              We leverage years of experience in the digital and education sectors to offer comprehensive guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-6 flex flex-col justify-between border border-slate-200/85 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="space-y-5">
                    {/* Icon Box */}
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${svc.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-base">{svc.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{svc.desc}</p>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {svc.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link 
                      to="/contact"
                      className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 group"
                    >
                      Inquire Details 
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Service Standards</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">Why Choose GNK Services?</h2>
            <p className="text-sm text-slate-550 leading-relaxed">
              We understand the pressures students face regarding admission documentation, deadlines, and project submissions. Our agency delivers transparent pricing, prompt answers, and professional mentorship.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-5 space-y-3.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-normal mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-850 text-white py-16 px-6 md:px-12 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Have an Academic or Digital Service Query?</h2>
          <p className="text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
            Reach out directly. Our support staff is active to answer admissions questions, project guidelines, and mentoring inquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href="mailto:sales@gnkedu.online"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-700 font-bold px-6 py-3 rounded-lg text-xs transition-all shadow-md hover:scale-[1.01]"
            >
              <Mail className="w-4 h-4" />
              sales@gnkedu.online
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-650 hover:bg-blue-600 border border-blue-500 text-white font-bold px-6 py-3 rounded-lg text-xs transition-all shadow-md hover:scale-[1.01]"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
