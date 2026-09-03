import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { PlatformDashboard } from './components/PlatformDashboard';
import { InvestingSection } from './components/InvestingSection';
import { AITradingSection } from './components/AITradingSection';
import { Interactive3DSection } from './components/Interactive3DSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ComplianceDisclaimer } from './components/ComplianceDisclaimer';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { GetStartedModal } from './components/GetStartedModal';

export default function App() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const handleOpenGetStarted = () => {
    setGetStartedOpen(true);
  };

  const handleCloseGetStarted = () => {
    setGetStartedOpen(false);
  };

  const handleExplorePlatform = () => {
    const platformEl = document.getElementById('platform');
    if (platformEl) {
      platformEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Frosted Glass Atmospheric Ambient Background Glows */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="fixed top-2/3 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* 1. Sticky Navigation */}
      <Navbar onOpenGetStarted={handleOpenGetStarted} />

      <main id="main-content" className="relative z-10">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenGetStarted={handleOpenGetStarted}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* 3. How Solid Prime Works */}
        <HowItWorks />

        {/* 4. Platform (Interactive Demo Trading Dashboard) */}
        <PlatformDashboard />

        {/* 5. Investing Section */}
        <InvestingSection />

        {/* 6. AI Trading Section */}
        <AITradingSection />

        {/* 7. Interactive 3D Section */}
        <Interactive3DSection />

        {/* 8. About Section */}
        <AboutSection />

        {/* 9. Contact Section */}
        <ContactSection />

        {/* 10. FAQ Section */}
        <FaqSection />

        {/* 11. Final CTA */}
        <CtaSection
          onOpenGetStarted={handleOpenGetStarted}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* 12. Trust, Risk & Compliance Disclaimers */}
        <ComplianceDisclaimer />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating AI Chatbot Widget */}
      <ChatbotWidget />

      {/* 15. Scroll-to-Top Floating Button */}
      <ScrollToTop />

      {/* 16. Get Started / Demo Modal */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={handleCloseGetStarted}
        onExploreDemo={handleExplorePlatform}
      />
    </div>
  );
}
