import React from 'react';
import { Sliders, Cpu, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Define Investment Objectives & Risk Parameters',
      description:
        'Set custom portfolio mandates, asset allocation targets, maximum drawdown thresholds, and liquidity preferences suited to your financial goals.',
      icon: Sliders,
      highlight: 'Risk-Engine Calibration',
    },
    {
      step: '02',
      title: 'Continuous Algorithmic Market Surveillance',
      description:
        'Our computational pipeline ingests real-time order books, macro liquidity metrics, price action momentum, and volatility distributions across major asset classes.',
      icon: Cpu,
      highlight: 'Sub-second Data Synthesis',
    },
    {
      step: '03',
      title: 'Receive Data-Driven AI Market Insights',
      description:
        'Machine learning pattern detectors highlight statistical divergences, sector rotations, and potential risk clustering without relying on speculative emotion.',
      icon: LineChart,
      highlight: 'Objective Pattern Detection',
    },
    {
      step: '04',
      title: 'Execute Disciplined, Risk-Aware Decisions',
      description:
        'Review transparent analytical summaries, model portfolio simulations, and automated position sizing guidelines before committing real capital.',
      icon: ShieldCheck,
      highlight: 'Controlled Execution',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#020617] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            System Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Solid Prime Operates
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            A disciplined four-step methodology uniting quantitative market intelligence, computational analysis, and human decision governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/40"
              >
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-sm">
                    STEP {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{item.highlight}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
