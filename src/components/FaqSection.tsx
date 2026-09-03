import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is Solid Prime and who is it built for?',
      answer:
        'Solid Prime is an online investing and financial technology platform based in Excelsior, Minnesota. It is designed for self-directed investors, active market participants, and quantitative researchers who want institutional-grade market surveillance, portfolio analytics, and AI-assisted insights in a unified, modern interface.',
    },
    {
      question: 'Does Solid Prime guarantee investment profits or returns?',
      answer:
        'No. Solid Prime does not guarantee profits, eliminate investment risk, or claim to predict future market prices with certainty. All investing involves risk of loss, and past performance does not guarantee future results. Our AI technology is designed purely for data synthesis, pattern detection, and risk management assistance.',
    },
    {
      question: 'How does AI assist in the trading and investing workflow?',
      answer:
        'Solid Prime uses machine learning algorithms to continuously scan multi-asset price feeds, liquidity depth, volatility distributions, and technical patterns. The system synthesizes vast volumes of market data into clear probabilities and risk boundaries, helping human investors make disciplined, evidence-based decisions rather than emotional choices.',
    },
    {
      question: 'Is the data shown on the platform real or simulated?',
      answer:
        'The interactive dashboard on our website is an analytical demonstration environment utilizing simulated sample market data to showcase UI functionality and risk modeling. In production accounts, the terminal connects to verified market data feeds and custodian infrastructure.',
    },
    {
      question: 'Where is Solid Prime located and how can I get in touch?',
      answer:
        'Solid Prime is headquartered in Excelsior, Minnesota. You can contact our team directly at 615-853-0515, by emailing johnkruzum16@gmail.com, or by submitting an inquiry via the Contact section on this website.',
    },
    {
      question: 'What risk management tools are integrated into the terminal?',
      answer:
        'The platform includes historical Value-at-Risk (VaR) calculations, dynamic Beta tracking, Sharpe ratio evaluations, asset covariance matrices, automated drawdown threshold alerts, and mathematical position-sizing calculators.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#020617] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Answers to Key Questions
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about Solid Prime technology, our responsible philosophy, and operational framework.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden shadow-lg shadow-black/20"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0 transition-transform duration-200 backdrop-blur-sm ${
                      isOpen ? 'rotate-180 bg-white/20 text-cyan-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
