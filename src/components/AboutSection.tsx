import React from 'react';
import { Target, Cpu, Users, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#020617] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            About Solid Prime
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional Intelligence for Modern Investors
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Headquartered in Excelsior, Minnesota, Solid Prime is dedicated to bringing advanced algorithmic market intelligence and disciplined investing technology to modern market participants.
          </p>
        </div>

        {/* 3 Core Pillars: Mission, Technology-Focused, Customer-Focused */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group shadow-2xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To bridge the technological divide in financial markets by making institutional-grade market surveillance, portfolio analytics, and AI-assisted insights accessible to independent investors and traders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
              Democratizing Advanced Analytics
            </div>
          </div>

          {/* Technology-Focused Approach */}
          <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group shadow-2xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Technology-Focused Approach
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We replace emotional trading impulses with quantitative rigor. Our systems continuously parse multi-asset order books, pattern divergences, and covariance matrices with sub-second analytical latency.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
              Quantitative Discipline
            </div>
          </div>

          {/* Customer-Focused Philosophy */}
          <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group shadow-2xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Customer-Focused Philosophy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Transparency and responsible investing form our core foundation. We refuse to make deceptive profit claims or push reckless leverage, prioritizing long-term risk awareness and education.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
              Uncompromising Transparency
            </div>
          </div>
        </div>

        {/* Location & Verified Contact Anchor Box */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Headquarters Location
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  Excelsior, Minnesota
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  United States
                </div>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Telephone
                </div>
                <a
                  href="tel:615-853-0515"
                  className="text-base font-bold text-white hover:text-cyan-400 transition-colors mt-0.5 block font-mono"
                >
                  615-853-0515
                </a>
                <div className="text-xs text-slate-400 mt-0.5">
                  Monday – Friday, 8am – 5pm CT
                </div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Official Email
                </div>
                <a
                  href="mailto:johnkruzum16@gmail.com"
                  className="text-base font-bold text-white hover:text-cyan-400 transition-colors mt-0.5 block truncate font-mono text-sm sm:text-base"
                >
                  johnkruzum16@gmail.com
                </a>
                <div className="text-xs text-slate-400 mt-0.5">
                  Direct Inquiries & Platform Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
