import React from 'react';
import {
  Cpu,
  Eye,
  GitBranch,
  ShieldCheck,
  AlertCircle,
  BarChart,
  Check,
  X,
  Sparkles,
  Layers,
  Network,
} from 'lucide-react';

export const AITradingSection: React.FC = () => {
  const capabilities = [
    {
      title: 'AI-Assisted Market Analysis',
      description:
        'Analyzes multi-timeframe price series, order-flow density, and cross-asset momentum simultaneously, filtering out short-term market noise.',
      icon: Cpu,
    },
    {
      title: 'Pattern Recognition',
      description:
        'Identifies geometric formations, support/resistance clustering, and historical volatility compressions without emotional bias or fatigue.',
      icon: Eye,
    },
    {
      title: 'Data-Driven Insights',
      description:
        'Converts terabytes of real-time market data into synthesized signals, statistical ranges, and probabilistic distributions.',
      icon: GitBranch,
    },
    {
      title: 'Automated Monitoring',
      description:
        'Performs round-the-clock surveillance across global equity, index, and currency markets, flagging unusual liquidity movements instantly.',
      icon: Network,
    },
    {
      title: 'Portfolio Analytics',
      description:
        'Computes dynamic covariance matrices, factor sensitivities, beta exposures, and scenario stress tests across all your active demo holdings.',
      icon: BarChart,
    },
  ];

  return (
    <section id="ai-trading" className="py-24 bg-[#020617] relative border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Machine Intelligence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI-Assisted Trading Intelligence
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Harnessing computational machine learning to enhance market surveillance, identify structural patterns, and strengthen risk management workflows.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-7 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/40 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Location & Architecture Callout Card */}
          <div className="p-7 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-cyan-500/30 flex flex-col justify-between shadow-2xl shadow-cyan-500/10">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                Solid Prime Engine • Excelsior, MN
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Engineered for Precision & Clarity
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Built to elevate market participants from emotional reactivity to systematic discipline with institutional computational architecture.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              Latency Target: &lt; 10ms • Cloud Node Security
            </div>
          </div>
        </div>

        {/* Responsible Boundaries Matrix: What AI Does vs What AI Does NOT Do */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
          <div className="p-6 sm:p-8 bg-white/5 border-b border-white/10 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                  Transparency & Risk Boundaries
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                  Responsible AI Principles
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  We believe clear ethical boundaries and transparent limitations are essential for credible financial technology.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-slate-200 backdrop-blur-sm">
                  Zero Financial Hype
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* What AI Does (Green) */}
            <div className="p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  What Solid Prime AI Delivers
                </h4>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Algorithmic Pattern Detection:</strong> Scans millions of order book and price data points continuously to identify statistical breakouts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Multi-Factor Risk Modeling:</strong> Calculates portfolio Value-at-Risk, beta divergence, and volatility correlation matrices.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Objective Data Synthesis:</strong> Provides structured, transparent analytical summaries to inform human decision-making.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Automated Condition Alerts:</strong> Notifies you when predefined risk boundaries or market conditions are met.
                  </span>
                </li>
              </ul>
            </div>

            {/* What AI Does NOT Do (Red / Caution) */}
            <div className="p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <X className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  What Solid Prime AI Does NOT Claim
                </h4>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">No Guaranteed Returns:</strong> We never promise profits or claim to consistently outperform benchmark markets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">No Elimination of Risk:</strong> Financial markets are subject to systematic risks and unexpected events that no model can eliminate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">No Infallible Predictions:</strong> Models calculate statistical probabilities based on historical data, never deterministic certainty.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">No Substitute for Due Diligence:</strong> All insights require independent investor judgment or consultation with licensed financial professionals.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
