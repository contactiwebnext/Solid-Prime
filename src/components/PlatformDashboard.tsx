import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  AlertTriangle,
  Layers,
  BarChart2,
  PieChart,
  ShieldCheck,
  Zap,
  Clock,
  ArrowUpRight,
  Info,
  Maximize2,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { WatchlistItem, AIInsight, ActivityItem } from '../types';

export const PlatformDashboard: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('NVDA');
  const [showIndicators, setShowIndicators] = useState<boolean>(true);

  // Fictional sample watchlist items
  const watchlist: WatchlistItem[] = [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 128.40,
      change: 2.70,
      changePercent: 2.15,
      volume: '42.8M',
      marketCap: '$3.15T',
      aiSignal: 'Bullish Bias',
      aiScore: 88,
      dataPoints: [118, 120, 119, 122, 125, 124, 128.4],
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 224.80,
      change: 0.72,
      changePercent: 0.32,
      volume: '31.2M',
      marketCap: '$3.42T',
      aiSignal: 'Neutral',
      aiScore: 71,
      dataPoints: [221, 222, 220, 223, 225, 224, 224.8],
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 428.15,
      change: -1.05,
      changePercent: -0.24,
      volume: '18.4M',
      marketCap: '$3.18T',
      aiSignal: 'Accumulation',
      aiScore: 82,
      dataPoints: [432, 430, 429, 431, 427, 429, 428.15],
    },
    {
      symbol: 'QQQ',
      name: 'Invesco QQQ Trust',
      price: 489.60,
      change: 4.10,
      changePercent: 0.84,
      volume: '36.5M',
      marketCap: '$268B',
      aiSignal: 'Bullish Bias',
      aiScore: 85,
      dataPoints: [478, 480, 482, 484, 485, 487, 489.6],
    },
    {
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      price: 584.20,
      change: 3.75,
      changePercent: 0.64,
      volume: '48.1M',
      marketCap: '$580B',
      aiSignal: 'Neutral',
      aiScore: 76,
      dataPoints: [575, 577, 579, 580, 581, 582, 584.2],
    },
  ];

  const currentAsset = watchlist.find((item) => item.symbol === selectedSymbol) || watchlist[0];

  // AI Insights demo data
  const aiInsights: AIInsight[] = [
    {
      id: 'ins-1',
      title: 'Volatility Compression & Breakout Signal',
      category: 'Pattern Detection',
      summary: 'Bollinger Band width on NVDA has tightened to 90th percentile historical minimum, signaling impending directional expansion.',
      asset: 'NVDA',
      confidence: 89,
      timestamp: '12m ago',
      impact: 'High',
    },
    {
      id: 'ins-2',
      title: 'Macro Liquidity Inflow Divergence',
      category: 'Macro Flow',
      summary: 'Cross-market order book surveillance detects positive institutional absorption across large-cap tech during midday session.',
      asset: 'QQQ',
      confidence: 84,
      timestamp: '34m ago',
      impact: 'Medium',
    },
    {
      id: 'ins-3',
      title: 'Treasury Yield Curve Realignment',
      category: 'Risk Boundary',
      summary: '2Y/10Y curve steepening detected. Portfolio asset allocation maintains defensive fixed-income duration buffer.',
      asset: 'US 10Y',
      confidence: 92,
      timestamp: '1h ago',
      impact: 'Medium',
    },
  ];

  // Simulated activity items
  const recentActivities: ActivityItem[] = [
    {
      id: 'act-1',
      type: 'REBALANCE',
      asset: 'QQQ / SPY',
      quantity: 'Simulated Shift 2.4%',
      price: '$489.60',
      status: 'Simulated',
      time: '14:28:10 UTC',
    },
    {
      id: 'act-2',
      type: 'ALERT',
      asset: 'NVDA',
      quantity: 'RSI Divergence 68.4',
      price: '$128.40',
      status: 'Monitored',
      time: '13:45:00 UTC',
    },
    {
      id: 'act-3',
      type: 'BUY',
      asset: 'MSFT',
      quantity: '15.00 Units (Paper)',
      price: '$428.15',
      status: 'Simulated',
      time: '11:15:22 UTC',
    },
    {
      id: 'act-4',
      type: 'ALERT',
      asset: 'PORTFOLIO',
      quantity: 'VaR Threshold Check: OK',
      price: '2.14% Risk',
      status: 'Triggered',
      time: '09:30:00 UTC',
    },
  ];

  // SVG Chart path generation based on timeframe and current asset
  const generateChartPoints = () => {
    const base = currentAsset.dataPoints;
    const factor = activeTimeframe === '1D' ? 1 : activeTimeframe === '1W' ? 1.05 : activeTimeframe === '1M' ? 1.12 : activeTimeframe === '3M' ? 1.25 : 1.4;
    return base.map((val, idx) => {
      const x = (idx / (base.length - 1)) * 600;
      // normalize y between 40 and 220
      const min = Math.min(...base) * 0.95;
      const max = Math.max(...base) * factor * 1.05;
      const y = 220 - ((val - min) / (max - min)) * 180;
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <section id="platform" className="py-24 bg-[#020617] relative border-t border-white/10">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Platform Preview</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sophisticated Trading Terminal
            </h2>
            <p className="mt-2 text-slate-300 text-base max-w-2xl leading-relaxed">
              Explore our simulated environment combining real-time market surveillance, quantitative risk bounds, and algorithmic pattern synthesis.
            </p>
          </div>

          {/* Location & Demo Badge */}
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-xs font-mono text-cyan-300 font-semibold bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
              Excelsior, MN • Terminal v3.4 Demo
            </span>
          </div>
        </div>

        {/* COMPLIANCE / DEMO NOTICE BANNER (Prominent as required) */}
        <div className="mb-6 p-3.5 rounded-xl bg-white/[0.04] border border-amber-400/25 flex items-center justify-between gap-3 text-xs text-amber-200 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              <strong>Fictional Demonstration Interface:</strong> All portfolio balances, asset prices, and performance indicators shown below are simulated sample data for product visualization. They do not represent actual customer returns or financial guarantees.
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase font-bold tracking-wider">
            Sample Data Only
          </span>
        </div>

        {/* Terminal Container Box with Frosted Glass Aesthetics */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-medium text-slate-300 ml-2">
                Solid Prime Quantitative Workspace — Excelsior Engine
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Engine Latency: 4ms</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-300 font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <span>Risk Engine: Active</span>
              </div>
            </div>
          </div>

          {/* 1. Portfolio Overview Metric Strip */}
          <div className="p-5 border-b border-white/10 bg-white/[0.02] grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all">
              <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                <span>SIMULATED PORTFOLIO</span>
                <span className="text-[10px] text-cyan-300 font-semibold bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">DEMO</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white tracking-tight">
                $142,850.20
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400 font-medium font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+$1,624.80 (+1.14% 24h)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all">
              <div className="text-xs font-mono text-slate-400 mb-1">
                AVAILABLE LIQUIDITY
              </div>
              <div className="text-2xl font-mono font-bold text-slate-100">
                $14,285.00
              </div>
              <div className="mt-1 text-xs text-slate-400 font-mono">
                10.0% Cash Reserve Target
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all">
              <div className="text-xs font-mono text-slate-400 mb-1">
                VALUE AT RISK (95% 1D)
              </div>
              <div className="text-2xl font-mono font-bold text-cyan-400">
                2.14% <span className="text-sm text-slate-400 font-normal">(-$3,056)</span>
              </div>
              <div className="mt-1 text-xs text-emerald-400 font-mono">
                Within 3.0% Risk Tolerance
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all">
              <div className="text-xs font-mono text-slate-400 mb-1">
                SHARPE RATIO / BETA
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                1.84 <span className="text-slate-500 font-normal">/</span> 0.92
              </div>
              <div className="mt-1 text-xs text-slate-400 font-mono">
                Balanced Volatility Profile
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Watchlist Sidebar (Col 3) */}
            <div className="lg:col-span-3 p-4 bg-transparent flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-slate-400">
                <span>WATCHLIST & SIGNALS</span>
                <span className="text-[10px] text-slate-400">CLICK TO INSPECT</span>
              </div>

              <div className="flex flex-col gap-2">
                {watchlist.map((item) => {
                  const isSelected = item.symbol === currentAsset.symbol;
                  return (
                    <button
                      key={item.symbol}
                      onClick={() => setSelectedSymbol(item.symbol)}
                      className={`w-full text-left p-3 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                        isSelected
                          ? 'bg-white/10 border-white/20 shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-900/40 border-white/5 hover:bg-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white text-sm flex items-center gap-1.5">
                            <span>{item.symbol}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate max-w-[120px]">
                            {item.name}
                          </div>
                        </div>

                        <div className="text-right font-mono">
                          <div className="text-sm font-semibold text-white">
                            ${item.price.toFixed(2)}
                          </div>
                          <div
                            className={`text-[11px] font-medium ${
                              item.change >= 0 ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {item.change >= 0 ? '+' : ''}
                            {item.changePercent}%
                          </div>
                        </div>
                      </div>

                      {/* AI Signal pill */}
                      <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">Signal:</span>
                        <span
                          className={`font-semibold px-2 py-0.5 rounded-md ${
                            item.aiSignal === 'Bullish Bias'
                              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                              : item.aiSignal === 'Accumulation'
                              ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          {item.aiSignal} ({item.aiScore})
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Main Interactive Chart Area (Col 6) */}
            <div className="lg:col-span-6 p-5 bg-white/[0.02] flex flex-col justify-between">
              <div>
                {/* Asset Header & Timeframes */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-display font-extrabold text-white">
                          {currentAsset.symbol}
                        </h3>
                        <span className="text-xs text-slate-400">{currentAsset.name}</span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/25 text-[10px] font-mono backdrop-blur-sm">
                          AI Score: {currentAsset.aiScore}/100
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-mono font-bold text-white">
                          ${currentAsset.price.toFixed(2)}
                        </span>
                        <span
                          className={`text-sm font-mono font-semibold ${
                            currentAsset.change >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {currentAsset.change >= 0 ? '+' : ''}
                          {currentAsset.change.toFixed(2)} ({currentAsset.changePercent}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeframe selector */}
                  <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md text-xs font-mono">
                    {(['1D', '1W', '1M', '3M', '1Y'] as const).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setActiveTimeframe(tf)}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          activeTimeframe === tf
                            ? 'bg-white text-slate-950 font-bold shadow-md shadow-white/10'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive SVG Chart Canvas */}
                <div className="relative mt-4 h-[260px] w-full rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 p-4 overflow-hidden flex flex-col justify-between">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4 opacity-15">
                    <div className="w-full border-b border-dashed border-slate-400" />
                    <div className="w-full border-b border-dashed border-slate-400" />
                    <div className="w-full border-b border-dashed border-slate-400" />
                    <div className="w-full border-b border-dashed border-slate-400" />
                  </div>

                  {/* SVG Chart Line */}
                  <svg
                    viewBox="0 0 600 240"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible z-10"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <polygon
                      points={`0,240 ${generateChartPoints()} 600,240`}
                      fill="url(#chartGradient)"
                    />

                    {/* Main price line */}
                    <polyline
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={generateChartPoints()}
                    />

                    {/* Moving average line if toggled */}
                    {showIndicators && (
                      <polyline
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity="0.8"
                        points="0,150 100,145 200,140 300,132 400,128 500,120 600,115"
                      />
                    )}
                  </svg>

                  {/* Chart Overlay Badges */}
                  <div className="z-20 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-cyan-400">
                        <span className="w-2 h-0.5 bg-cyan-400" /> Price Path
                      </span>
                      {showIndicators && (
                        <span className="flex items-center gap-1 text-amber-400">
                          <span className="w-2 h-0.5 bg-amber-400 border-dashed" /> 20-MA Trend
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setShowIndicators(!showIndicators)}
                      className="text-slate-400 hover:text-white underline text-[10px]"
                    >
                      {showIndicators ? 'Hide Overlay' : 'Show 20-MA'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Asset Allocation Mini-Bar */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <PieChart className="w-3.5 h-3.5 text-cyan-400" />
                    <span>TARGET ASSET ALLOCATION</span>
                  </div>
                  <span>Total Capital: $142,850</span>
                </div>

                {/* Stacked Progress Bar */}
                <div className="w-full h-3 rounded-full bg-slate-900/80 border border-white/10 overflow-hidden flex">
                  <div style={{ width: '58%' }} className="bg-cyan-500 h-full" title="Equities 58%" />
                  <div style={{ width: '18%' }} className="bg-blue-600 h-full" title="Fixed Income 18%" />
                  <div style={{ width: '14%' }} className="bg-emerald-500 h-full" title="Thematic AI 14%" />
                  <div style={{ width: '10%' }} className="bg-slate-600 h-full" title="Cash 10%" />
                </div>

                <div className="grid grid-cols-4 gap-2 mt-2 text-[10px] font-mono text-slate-400 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>Equities 58%</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Fixed Inc. 18%</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>AI Thematic 14%</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                    <span>Cash 10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: AI Insights & Activity Feed (Col 3) */}
            <div className="lg:col-span-3 p-4 bg-transparent flex flex-col gap-4">
              {/* AI Insights Header */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>AI INSIGHTS PANEL</span>
                  </div>
                  <span className="text-[10px] bg-white/10 border border-white/10 px-2 py-0.5 rounded-md text-slate-300">LIVE FEED</span>
                </div>

                <div className="flex flex-col gap-2.5 mt-3">
                  {aiInsights.map((insight) => (
                    <div
                      key={insight.id}
                      className="p-3 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                        <span className="text-cyan-400 font-semibold">{insight.asset}</span>
                        <span className="text-slate-400">{insight.timestamp}</span>
                      </div>
                      <div className="text-xs font-bold text-white mb-1">
                        {insight.title}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        {insight.summary}
                      </p>
                      <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Confidence: {insight.confidence}%</span>
                        <span className="text-amber-400">Impact: {insight.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Mini-Feed */}
              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>SIMULATED ACTIVITY</span>
                  </div>
                  <span className="text-[10px] text-slate-400">AUDIT LOG</span>
                </div>

                <div className="space-y-2">
                  {recentActivities.slice(0, 3).map((act) => (
                    <div
                      key={act.id}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-white/5 text-xs font-mono"
                    >
                      <div>
                        <div className="text-white font-semibold text-[11px]">
                          {act.type} • {act.asset}
                        </div>
                        <div className="text-[10px] text-slate-400">{act.quantity}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/5">
                          {act.status}
                        </span>
                        <div className="text-[9px] text-slate-400 mt-0.5">{act.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Footer Bar */}
          <div className="px-5 py-3 bg-white/5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono backdrop-blur-md">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Solid Prime Execution Engine • Strict Risk Bound Architecture</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Demo Client ID: SP-MN-DEMO-08 • Excelsior, MN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
