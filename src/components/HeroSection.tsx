import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronRight, Activity, ShieldAlert, Cpu, BarChart3, TrendingUp, Sparkles, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import heroBgImage from '../assets/images/hero_fintech_background_1788470269304.jpg';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
  onExplorePlatform: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenGetStarted,
  onExplorePlatform,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.defaultMuted = true;
    vid.muted = true;
    vid.playsInline = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoaded = () => setIsVideoLoaded(true);

    vid.addEventListener('play', handlePlay);
    vid.addEventListener('pause', handlePause);
    vid.addEventListener('loadeddata', handleLoaded);

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Video autoplay deferred:', err);
          setIsPlaying(false);
        });
    }

    return () => {
      vid.removeEventListener('play', handlePlay);
      vid.removeEventListener('pause', handlePause);
      vid.removeEventListener('loadeddata', handleLoaded);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Demo ticker feed data with realistic market structures, clearly labeled
  const demoTickerData = [
    { symbol: 'S&P 500 (SPX)', price: '5,842.10', change: '+0.64%', isUp: true },
    { symbol: 'NASDAQ (NDX)', price: '20,412.35', change: '+0.91%', isUp: true },
    { symbol: 'NVDA', price: '128.40', change: '+2.15%', isUp: true },
    { symbol: 'AAPL', price: '224.80', change: '+0.32%', isUp: true },
    { symbol: 'MSFT', price: '428.15', change: '-0.24%', isUp: false },
    { symbol: 'US 10Y YIELD', price: '4.18%', change: '-0.03%', isUp: false },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#020617]"
    >
      {/* Background Video with Poster Fallback - Fully Visible & Vivid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          src="https://qznnc49rwvaxtyky.public.blob.vercel-storage.com/Create_video_for_trading_platform_202609040246.mp4"
          poster={heroBgImage}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-105"
        >
          <source
            src="https://qznnc49rwvaxtyky.public.blob.vercel-storage.com/Create_video_for_trading_platform_202609040246.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft, Transparent Edge Blend to Ensure Smooth Section Boundaries Without Dimming Video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Location & Technology Notice Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider">
              Excelsior, Minnesota
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300 font-medium">
              Next-Gen FinTech
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI-Assisted Market Surveillance</span>
          </div>

          {/* Play/Pause Video Toggle Button */}
          <button
            id="hero-video-play-toggle"
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono backdrop-blur-xl shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-cyan-400" />
                <span>Video: Playing</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Video: Paused</span>
              </>
            )}
          </button>

          {/* Mute/Unmute Video Audio Toggle Button */}
          <button
            id="hero-video-audio-toggle"
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute hero background video audio' : 'Mute hero background video audio'}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono backdrop-blur-xl shadow-lg transition-all duration-200 cursor-pointer active:scale-95 ${
              isMuted
                ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                : 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/50 text-cyan-200 shadow-cyan-500/20'
            }`}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                <span>Audio: Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-medium">Audio: On</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Copy */}
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-lg">
            Smarter Investing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-200">
              Powered by Intelligence.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-md">
            Solid Prime brings modern investing tools, market intelligence, and AI-assisted analysis together in one streamlined platform.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-get-started-btn"
              onClick={onOpenGetStarted}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-xl shadow-white/10 hover:shadow-white/20 transition-all duration-200 group active:scale-[0.99]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-explore-platform-btn"
              onClick={onExplorePlatform}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Responsible Risk & Integrity Sub-line */}
          <div className="mt-8 flex items-start sm:items-center gap-2.5 text-xs text-slate-300 bg-white/[0.04] border border-white/10 rounded-xl p-3.5 max-w-xl backdrop-blur-md">
            <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong className="text-white font-medium">Responsible Investing:</strong> All investing involves capital risk. AI models provide analytical synthesis and pattern detection; they do not guarantee profits or future market performance.
            </p>
          </div>
        </div>

        {/* Quick Simulated Market Feed Bar */}
        <div className="mt-14 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Simulated Real-Time Benchmarks</span>
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] text-slate-200">Demo Data</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="hero-benchmark-play-toggle"
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-cyan-400" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>Play</span>
                  </>
                )}
              </button>
              <button
                id="hero-benchmark-audio-toggle"
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer active:scale-95"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3 h-3 text-rose-400" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3 text-cyan-300 animate-pulse" />
                    <span className="text-cyan-300">Muted</span>
                  </>
                )}
              </button>
              <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Surveillance Active
              </div>
            </div>
          </div>

          {/* Ticker Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {demoTickerData.map((item) => (
              <div
                key={item.symbol}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-3 backdrop-blur-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 truncate">{item.symbol}</span>
                  <span
                    className={`text-[11px] font-mono font-medium ${
                      item.isUp ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
