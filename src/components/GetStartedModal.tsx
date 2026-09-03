import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDemo: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  onExploreDemo,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Intermediate');
  const [riskAcknowledged, setRiskAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !riskAcknowledged) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleLaunchDemo = () => {
    setIsSuccess(false);
    onClose();
    onExploreDemo();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-950/90 border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden backdrop-blur-2xl">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Solid Prime • Excelsior, MN
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Get Started with Solid Prime
            </h3>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/60 flex items-center justify-center text-emerald-400 mx-auto backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Demo Access Granted
            </h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Welcome, <strong className="text-white">{name}</strong>. Your demonstration environment has been provisioned with simulated data.
            </p>
            <div className="pt-4">
              <button
                id="modal-launch-demo-btn"
                onClick={handleLaunchDemo}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Enter Demo Trading Terminal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="modal-name-input" className="block text-xs font-medium text-slate-300 mb-1">
                Your Full Name
              </label>
              <input
                id="modal-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label htmlFor="modal-email-input" className="block text-xs font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                id="modal-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label htmlFor="modal-exp-select" className="block text-xs font-medium text-slate-300 mb-1">
                Market Experience Level
              </label>
              <select
                id="modal-exp-select"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              >
                <option value="Beginner" className="bg-slate-900 text-white">Exploring Financial Technology</option>
                <option value="Intermediate" className="bg-slate-900 text-white">Self-Directed Active Trader</option>
                <option value="Advanced" className="bg-slate-900 text-white">Quantitative / Algorithmic Researcher</option>
              </select>
            </div>

            {/* Risk acknowledgement checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  id="modal-risk-checkbox"
                  type="checkbox"
                  checked={riskAcknowledged}
                  onChange={(e) => setRiskAcknowledged(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 text-cyan-500 focus:ring-cyan-400 bg-slate-900"
                />
                <span>
                  I acknowledge that investing involves financial risk and that Solid Prime does not guarantee returns or provide personalized financial advice.
                </span>
              </label>
            </div>

            <button
              id="modal-submit-btn"
              type="submit"
              disabled={isSubmitting || !riskAcknowledged}
              className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Configuring Demo Environment...</span>
                </>
              ) : (
                <>
                  <span>Launch Demo Access</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-[11px] text-slate-400 pt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Excelsior, Minnesota • Direct Support at 615-853-0515</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
