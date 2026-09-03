import React, { useState } from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { Eye, Shield, Cpu, RefreshCw, Layers, Sparkles } from 'lucide-react';

export const Interactive3DSection: React.FC = () => {
  const [activeTelemetry, setActiveTelemetry] = useState<string>('nodes');

  const telemetryModes = [
    {
      id: 'nodes',
      title: 'Global Market Node Mesh',
      metric: '160 Active Vectors',
      detail: 'Simultaneous surveillance across equities, fixed income, currency swaps, and volatility indices.',
    },
    {
      id: 'latency',
      title: 'Execution Sub-Network',
      metric: '&lt; 4ms Propagation',
      detail: 'Ultra-low latency data ingestion processing real-time order books and quote depth.',
    },
    {
      id: 'risk',
      title: 'Covariance Boundaries',
      metric: '95% Confidence Band',
      detail: 'Continuous portfolio correlation analysis calculating dynamic risk barriers in real time.',
    },
  ];

  return (
    <section id="interactive-3d" className="py-24 bg-[#020617] relative border-t border-white/10 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Interactive Switchers */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Multi-Dimensional Intelligence</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Interactive 3D Algorithmic Surveillance Matrix
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Experience the computational topology underpinning Solid Prime. Our models process multi-asset price action as high-dimensional geometric manifolds to spot correlation shifts before they impact portfolio stability.
            </p>

            {/* Interactive Telemetry Toggles */}
            <div className="mt-8 space-y-3">
              {telemetryModes.map((mode) => {
                const isActive = activeTelemetry === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveTelemetry(mode.id)}
                    className={`w-full text-left p-4 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                      isActive
                        ? 'bg-white/10 border-white/20 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/[0.04] border-white/5 hover:bg-white/[0.08] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">
                        {mode.title}
                      </span>
                      <span
                        className="text-xs font-mono font-semibold text-cyan-400"
                        dangerouslySetInnerHTML={{ __html: mode.metric }}
                      />
                    </div>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {mode.detail}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Interactive: Hover over the 3D visualizer to rotate spatial perspective.</span>
            </div>
          </div>

          {/* Right 3D Canvas Box */}
          <div className="lg:col-span-6">
            <div className="relative h-[480px] w-full rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden p-2">
              {/* Three.js 3D WebGL Canvas */}
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <ThreeCanvas className="w-full h-full" interactive={true} />

                {/* Overlay HUD indicators */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <div className="flex items-center gap-2 bg-slate-950/60 border border-white/10 backdrop-blur-xl px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Live 3D Topological Simulation</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/60 border border-white/10 backdrop-blur-xl px-3.5 py-2 rounded-xl">
                  <span>Renderer: WebGL 2.0 • Three.js</span>
                  <span className="text-cyan-400">Engine: Excelsior Node Cluster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
