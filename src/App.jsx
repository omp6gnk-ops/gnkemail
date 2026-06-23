import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { BookOpen, Mail, Menu, X } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        
        {/* Decorative Blur Backdrops */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
        <div className="absolute top-[60vh] right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 h-16 flex items-center justify-between px-6 md:px-12">
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-650 flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-base md:text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
              GNK Education
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-650">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 font-extrabold" : "hover:text-slate-900 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 font-extrabold" : "hover:text-slate-900 transition-colors"
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 font-extrabold" : "hover:text-slate-900 transition-colors"
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="mailto:sales@gnkedu.online"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              sales@gnkedu.online
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden pt-16">
            <div className="fixed inset-0 bg-slate-900/25 backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)}></div>
            <nav className="relative bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 text-sm font-bold uppercase text-slate-700">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1 border-b border-slate-50">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1 border-b border-slate-50">About Us</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1 border-b border-slate-50">Contact Us</Link>
              <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold pt-2 flex items-center gap-1.5 normal-case">
                <Mail className="w-4 h-4" />
                sales@gnkedu.online
              </a>
            </nav>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="*" element={<Link to="/" className="text-center block py-20 text-xs text-slate-400">Page not found. Return Home</Link>} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-450 py-12 px-6 md:px-12 border-t border-slate-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                GNK Education & Digital Services
              </span>
            </div>

            {/* Footer Policy Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-405">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>

            <div className="text-center md:text-right text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} GNK Education & Digital Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
