import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Solid Prime unites modern investing tools, quantitative market intelligence, and AI-assisted analysis in one streamlined platform.
            </p>
            <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Headquartered in Excelsior, MN</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Platform Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Trading Dashboard
                </a>
              </li>
              <li>
                <a href="#investing" className="hover:text-cyan-400 transition-colors">
                  Investing Solutions
                </a>
              </li>
              <li>
                <a href="#ai-trading" className="hover:text-cyan-400 transition-colors">
                  AI-Assisted Trading
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Solid Prime
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Contact Details
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Excelsior, Minnesota, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:615-853-0515" className="hover:text-cyan-400 font-mono transition-colors">
                  615-853-0515
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:johnkruzum16@gmail.com"
                  className="hover:text-cyan-400 font-mono transition-colors truncate"
                >
                  johnkruzum16@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust Philosophy */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Responsible Ethos
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              We uphold algorithmic integrity with transparent risk boundaries. Investing involves capital risk; no guaranteed returns or profit promises.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-sm">
              Solid Prime • Excelsior, Minnesota
            </div>
          </div>
        </div>

        {/* Bottom Legal & Mandatory Developer Attribution */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-3 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Solid Prime. All rights reserved. Excelsior, MN.
          </div>

          {/* MANDATORY FOOTER ATTRIBUTION AS PER INSTRUCTIONS */}
          <div className="text-xs font-medium text-slate-300">
            Developed by{' '}
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
            >
              iWebNext
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
