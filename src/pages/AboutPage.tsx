import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { FounderSection } from '../components/sections/FounderSection';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0084C9]/10 text-[#0084C9] text-xs font-bold uppercase tracking-widest border border-[#0084C9]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
            FOUR DECADES OF BOTANICAL EXCELLENCE
          </div>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0B2536] font-bold leading-tight">
            Rooted in India. <br />
            <span className="italic text-[#0084C9]">Growing through innovation.</span>
          </h1>
          <p className="text-sm md:text-base text-[#162E3F] font-normal max-w-xl mx-auto leading-relaxed">
            Incorporated on May 22, 1986 in Tamil Nadu, Venuss Herbo Aromatics delivers natural botanical extracts, essential oils, oleoresins, and floral absolutes for international industries.
          </p>
        </div>

        {/* Company Heritage & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A853]">OUR BOTANICAL HERITAGE</span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#0B2536] font-bold">
              Extracting pure natural essence since 1986.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#0B2536] leading-relaxed font-normal">
              <p>
                Located in Seithur near Rajapalayam, Tamil Nadu, <strong className="font-bold text-[#0B2536]">Venuss Herbo Aromatics Private Limited</strong> operates at the foothills of the Western Ghats—one of the world's primary biodiversity regions for aromatic flora, cardamom, and fresh spices.
              </p>
              <p>
                Our processing facility combines low-pressure steam distillation, food-grade solvent extraction, and controlled size reduction units to extract concentrated active aromatic fractions with zero artificial alteration.
              </p>
              <p>
                As a B2B ingredient manufacturer, we prioritize analytical consistency, batch traceability, and direct technical transparency for flavorists, perfumers, food processors, and pharmaceutical manufacturers across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0084C9]/25">
              <div>
                <span className="block text-2xl font-serif-editorial font-bold text-[#0084C9]">1986</span>
                <span className="text-xs text-[#162E3F] uppercase tracking-wider font-bold">Incorporation Milestone</span>
              </div>
              <div>
                <span className="block text-2xl font-serif-editorial font-bold text-[#E5A853]">Seithur, TN</span>
                <span className="text-xs text-[#162E3F] uppercase tracking-wider font-bold">Primary Production Facility</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 glass-bay rounded-3xl p-8 border border-[#0084C9]/25 shadow-xl space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536]">
              Corporate & Manufacturing Directives
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0084C9]/25 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0084C9] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-[#0B2536] text-sm sm:text-base font-bold block">Factual Product Standards</strong>
                  <span className="text-xs sm:text-sm text-[#162E3F] leading-relaxed font-normal block">Operating without exaggerated marketing claims. Every batch specification backed by analytical laboratory COA.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0084C9]/25 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0084C9] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-[#0B2536] text-sm sm:text-base font-bold block">Authentic Indian Botanical Origin</strong>
                  <span className="text-xs sm:text-sm text-[#162E3F] leading-relaxed font-normal block">Direct sourcing of cardamom, basil leaves, davana, turmeric, and fresh jasmine from regional South Indian harvests.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0084C9]/25 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0084C9] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-[#0B2536] text-sm sm:text-base font-bold block">Standardized B2B Commercial Batch Supply</strong>
                  <span className="text-xs sm:text-sm text-[#162E3F] leading-relaxed font-normal block">Packaged in food-grade aluminum bottles, lined steel drums, and bulk export containers.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/30 transition-all shadow-md"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 03 — Founder Heritage Component */}
        <FounderSection />

      </div>
    </div>
  );
};

export default AboutPage;
