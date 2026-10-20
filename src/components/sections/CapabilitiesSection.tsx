import React from 'react';
import { FlaskConical, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface CapabilitiesSectionProps {
  onLearnMore?: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            MANUFACTURING INFRASTRUCTURE
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            Precision processing units.
          </h2>
          <p className="text-sm text-[#456375] font-light">
            Our Tamil Nadu production facility operates specialized extraction units configured for natural botanical integrity and B2B commercial scale.
          </p>
        </div>

        {/* 4 Core Units Grid in Glass Bay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY_INFO.capabilities.map((cap, i) => (
            <div
              key={i}
              className="glass-bay rounded-3xl p-8 border border-[#0084C9]/20 hover:border-[#0084C9] shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between glass-card-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A853] px-3 py-1 rounded-full bg-[#E5A853]/15 border border-[#E5A853]/30">
                    UNIT 0{i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center border border-[#0084C9]/25">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536]">
                    {cap.title}
                  </h3>
                  <span className="text-xs font-bold text-[#0084C9] uppercase tracking-wider block mt-1">
                    {cap.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#456375] leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0084C9]/15 flex items-center justify-between text-xs font-bold text-[#0B2536]">
                <span>Standardized B2B Batch Control</span>
                <button onClick={onLearnMore} className="text-[#0084C9] hover:text-[#006CA5]">Verified Unit →</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
