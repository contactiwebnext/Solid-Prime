import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Geometric Modern Fintech Symbol */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400/50 transition-colors`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="solidPrimeGrad1" x1="2" y1="4" x2="34" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="solidPrimeGrad2" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Abstract S & Forward Dynamic Geometric Facets */}
          <path
            d="M8 12C8 7.58172 11.5817 4 16 4H26C27.1046 4 28 4.89543 28 6V11C28 12.1046 27.1046 13 26 13H15C13.8954 13 13 13.8954 13 15V16C13 17.1046 13.8954 18 15 18H23C27.4183 18 31 21.5817 31 26V26C31 30.4183 27.4183 34 23 34H11C9.89543 34 9 33.1046 9 32V27C9 25.8954 9.89543 25 11 25H23C24.1046 25 25 24.1046 25 23V22C25 20.8954 24.1046 20 23 20H15C10.5817 20 7 16.4183 7 12V12Z"
            fill="url(#solidPrimeGrad1)"
            opacity="0.95"
          />
          {/* Subtle node accent */}
          <circle cx="27" cy="8" r="2.5" fill="#38BDF8" />
          <circle cx="10" cy="30" r="2" fill="#00F2FE" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold tracking-tight text-white ${textSizes[size]}`}>
            SOLID<span className="text-cyan-400 ml-1 font-semibold">PRIME</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-0.5">
            Excelsior, MN
          </span>
        )}
      </div>
    </div>
  );
};
