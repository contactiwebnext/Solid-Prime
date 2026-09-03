import React from 'react';
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onOpenGetStarted: () => void;
  onExplorePlatform: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenGetStarted,
  onExplorePlatform,
}) => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Excelsior, Minnesota • Ready When You Are</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Step Into the Future of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Intelligent Investing
          </span>
        </h2>

        <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience algorithmic market surveillance, multi-factor risk bounds, and quantitative analysis built for disciplined investors.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-get-started-btn"
            onClick={onOpenGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-xl shadow-cyan-500/25 transition-all duration-200 group active:scale-[0.99]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="final-cta-explore-platform-btn"
            onClick={onExplorePlatform}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl backdrop-blur-md transition-all"
          >
            <span>Explore Demo Terminal</span>
          </button>
        </div>

        {/* Contact Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <a href="tel:615-853-0515" className="hover:text-cyan-400 transition-colors">
              615-853-0515
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <a href="mailto:johnkruzum16@gmail.com" className="hover:text-cyan-400 transition-colors">
              johnkruzum16@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Excelsior, Minnesota</span>
          </div>
        </div>
      </div>
    </section>
  );
};
