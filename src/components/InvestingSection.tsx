import React, { useState } from 'react';
import {
  PieChart,
  LineChart,
  Search,
  ShieldAlert,
  Bell,
  Cpu,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const InvestingSection: React.FC = () => {
  // Interactive Position Sizing & Risk Awareness Calculator state
  const [accountSize, setAccountSize] = useState<number>(50000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [stopLossPercent, setStopLossPercent] = useState<number>(4.0);

  const maxDollarRisk = (accountSize * (riskPercent / 100));
  const suggestedPositionSize = stopLossPercent > 0 ? (maxDollarRisk / (stopLossPercent / 100)) : 0;
  const portfolioAllocation = (suggestedPositionSize / accountSize) * 100;

  const features = [
    {
      title: 'Portfolio Management',
      description:
        'Construct and rebalance diversified holdings across asset classes. Maintain customized target weights, minimize portfolio drift, and automate allocation discipline.',
      icon: PieChart,
      tag: 'Strategic Allocation',
    },
    {
      title: 'Market Insights',
      description:
        'Access synthesized macroeconomic liquidity trends, sector rotation dynamics, and volume flow data distilled into actionable dashboards for thoughtful analysis.',
      icon: LineChart,
      tag: 'Macro & Micro Data',
    },
    {
      title: 'Investment Research',
      description:
        'Leverage curated institutional-grade fundamental screeners, consensus earnings expectations, and historical multi-factor valuations without promotional noise.',
      icon: Search,
      tag: 'Evidence-Based Screening',
    },
    {
      title: 'Risk Awareness',
      description:
        'Evaluate portfolio vulnerability before committing capital using Value-at-Risk modeling, historical scenario stress-testing, and drawdown boundary alerts.',
      icon: ShieldAlert,
      tag: 'Capital Preservation',
    },
    {
      title: 'Portfolio Monitoring',
      description:
        'Continuous surveillance flags unexpected volatility expansion, correlation shifts among holdings, and threshold violations in real time.',
      icon: Bell,
      tag: 'Real-Time Alerts',
    },
    {
      title: 'AI-Assisted Analysis',
      description:
        'Machine intelligence algorithms detect statistical anomalies, sentiment distributions, and technical patterns to support human judgment, never replace it.',
      icon: Cpu,
      tag: 'Algorithmic Augmentation',
    },
  ];

  return (
    <section id="investing" className="py-24 bg-[#020617] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            Core Investing Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Disciplined Framework for Modern Investors
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Solid Prime equips self-directed investors and traders with institutional-grade analytical tooling, systematic risk controls, and clear market synthesis.
          </p>
        </div>

        {/* Feature Cards Grid (6 cards required) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-7 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-white group-hover:text-slate-950 transition-all backdrop-blur-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-slate-400 gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Integrated within Solid Prime Terminal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Risk & Position Sizing Calculator (Practical Tool) */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 shadow-2xl shadow-black/40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 mb-3 backdrop-blur-md">
                <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Tool • Risk Calibration</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Experience Quantitative Position Sizing
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Disciplined investing begins with mathematics, not optimism. Test how Solid Prime calculates capital allocation based on predetermined risk limits rather than arbitrary guesses.
              </p>

              {/* Sliders */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Hypothetical Account Size:</span>
                    <span className="text-cyan-400 font-bold">${accountSize.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Account Risk Tolerance Per Trade:</span>
                    <span className="text-cyan-400 font-bold">{riskPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.5"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Planned Stop-Loss Distance:</span>
                    <span className="text-amber-400 font-bold">{stopLossPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="15.0"
                    step="0.5"
                    value={stopLossPercent}
                    onChange={(e) => setStopLossPercent(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                  />
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="w-full lg:w-80 p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  System Calculations
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-400">Max Tolerable Capital Risk:</div>
                    <div className="text-xl font-mono font-bold text-rose-400">
                      ${maxDollarRisk.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400">Recommended Position Cap:</div>
                    <div className="text-2xl font-mono font-bold text-cyan-400">
                      ${suggestedPositionSize.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-slate-400">Portfolio Weight:</div>
                    <div className="text-sm font-mono font-semibold text-white">
                      {portfolioAllocation.toFixed(1)}% of total portfolio
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 leading-snug flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Simulated sample calculator for risk management education. Past metrics do not guarantee returns.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
