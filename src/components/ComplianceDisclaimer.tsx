import React from 'react';
import { ShieldAlert, Info, Scale } from 'lucide-react';

export const ComplianceDisclaimer: React.FC = () => {
  return (
    <section id="disclosures" className="py-12 bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-white/10">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-slate-300">Regulatory & Risk Disclosures — Solid Prime (Excelsior, MN)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-white">Investment Risk Notice:</strong> Trading equities, options, indices, and financial instruments involves substantial risk of capital loss. Market prices fluctuate, and investors may lose part or all of their invested capital. Past performance, whether actual or indicated by historical simulations, does not guarantee or predict future results.
              </p>
              <p>
                <strong className="text-white">Nature of AI-Assisted Insights:</strong> Algorithmic pattern recognition, machine learning models, and quantitative metrics provided by Solid Prime are designed strictly for educational, informational, and analytical workflow assistance. They do not constitute deterministic forecasts, guaranteed predictions, or automated trading advice.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-white">Independent Due Diligence:</strong> Users of the Solid Prime platform must independently evaluate all investment opportunities and determine suitability based on their individual financial situation, risk tolerance, and investment objectives. Solid Prime is not an individualized financial advisory service. Users should consider consulting a qualified, licensed financial professional before making financial commitments.
              </p>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 font-mono text-[11px]">
                <strong className="text-slate-300">[Business Owner Regulatory Status Placeholder]:</strong> Solid Prime operates in Excelsior, Minnesota. Formal broker-dealer, investment advisor, or registered entity disclosures are subject to jurisdictional requirements and verified documentation prior to live custody onboarding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
