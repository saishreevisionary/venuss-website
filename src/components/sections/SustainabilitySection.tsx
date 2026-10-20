import React from 'react';
import { Leaf, Recycle, Users, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface SustainabilitySectionProps {
  onExploreSustainability?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onExploreSustainability }) => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Ethical & Direct Farm Sourcing',
      desc: 'Collaborating directly with regional agrarians across Tamil Nadu & Kerala. We ensure fair compensation, safe working conditions, and 100% farm-gate raw material origin tracking.'
    },
    {
      icon: Recycle,
      title: 'Green Distillation & Zero Discharge',
      desc: 'Operating closed-loop steam distillation units and >98% solvent recovery. Spent botanical biomass is upcycled into bio-pellets with zero untreated wastewater release.'
    },
    {
      icon: Sparkles,
      title: 'Transparent Batch Traceability',
      desc: 'Maintaining a clear, documented path from farm to flask. Every commercial extraction batch is verified with GC-MS chemical fingerprinting and analytical COAs.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      desc: 'Reinvesting in local agricultural communities around Rajapalayam and Seithur, supporting livelihoods with stable contract farming and technical guidance.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#072C42] via-[#0A3B59] to-[#051824] border-b border-[#0084C9]/30 relative overflow-hidden text-[#F2F7FA]">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 C20,50 80,50 100,0 L100,100 Z" fill="#2FA0E0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A853]/20 text-[#E5A853] text-xs font-bold uppercase tracking-widest border border-[#E5A853]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
            SUSTAINABILITY & ETHICAL PRACTICES
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Growing responsibly, extracting pure.
          </h2>
          <p className="text-sm text-[#F2F7FA]/80 font-light max-w-2xl mx-auto leading-relaxed">
            We operate by rigorous international fair trade and green extraction guidelines, prioritizing eco-friendly processing and sustainable agricultural partnerships.
          </p>
        </div>

        {/* Operational Commitment Notice */}
        <div className="max-w-4xl mx-auto glass-bay-dark rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F2F7FA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0084C9]/25 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/40">
              <ShieldCheck className="w-5 h-5 text-[#2FA0E0]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">Green Extraction Framework</span>
                <span className="text-[10px] bg-[#0084C9] text-white font-bold px-2 py-0.5 rounded-full uppercase">100% Operational Compliance</span>
              </div>
              <p className="text-xs text-[#F2F7FA]/75 mt-0.5">
                Full operational adherence maintained across all environmental parameters (solvent recovery, zero-discharge, eco-sourcing).
              </p>
            </div>
          </div>
          {onExploreSustainability && (
            <button
              onClick={onExploreSustainability}
              className="shrink-0 px-4 py-2 rounded-full bg-[#0084C9]/20 hover:bg-[#0084C9]/40 text-[#2FA0E0] text-xs font-bold uppercase tracking-wider border border-[#0084C9]/30 flex items-center gap-1.5 transition-colors"
            >
              <span>View Audit Parameters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 4 Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                className="glass-bay-dark rounded-3xl p-8 hover:border-[#0084C9] shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E5A853]/15 flex items-center justify-center border border-[#E5A853]/30">
                  <IconComp className="w-6 h-6 text-[#E5A853]" />
                </div>

                <h3 className="font-serif-editorial text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-[#F2F7FA]/75 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        {onExploreSustainability && (
          <div className="text-center pt-4">
            <button
              onClick={onExploreSustainability}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#0084C9]/30 transition-all shadow-lg"
            >
              <span>EXPLORE FULL SUSTAINABILITY CHARTER</span>
              <ArrowRight className="w-4 h-4 text-[#E5A853]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default SustainabilitySection;
