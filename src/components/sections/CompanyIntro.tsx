import React from 'react';
import { ArrowRight, Leaf, Shield, TestTube2, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface CompanyIntroProps {
  onDiscover: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onDiscover }) => {
  return (
    <section className="py-20 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
              <span className="w-8 h-0.5 bg-[#E5A853]" />
              COMPANY POSITIONING
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] leading-tight font-bold">
              Where nature becomes <br />
              <span className="italic text-[#0084C9]">an ingredient.</span>
            </h2>

            <p className="text-base text-[#456375] leading-relaxed font-light">
              Incorporated on May 22, 1986, <strong>{COMPANY_INFO.name}</strong> has spent four decades mastering the art and science of extracting pure aromatic compounds from India's richest botanical reserves.
            </p>

            <div>
              <button
                onClick={onDiscover}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0084C9] hover:text-[#006CA5] transition-colors group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E5A853]" />
              </button>
            </div>
          </div>

          {/* Right Highlights & Metrics Grid in Glass Bay Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 space-y-3 glass-card-hover">
              <div className="w-10 h-10 rounded-xl bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center font-bold border border-[#0084C9]/20">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif-editorial text-xl font-bold text-[#0B2536]">Indian Botanical Origin</h4>
              <p className="text-xs text-[#456375] leading-relaxed font-light">
                Directly sourcing fresh cardamom, basil leaves, davana, turmeric, and jasmine blossoms from trusted regional agrarian partners across South India.
              </p>
            </div>

            <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 space-y-3 glass-card-hover">
              <div className="w-10 h-10 rounded-xl bg-[#E5A853]/15 text-[#E5A853] flex items-center justify-center font-bold border border-[#E5A853]/20">
                <TestTube2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif-editorial text-xl font-bold text-[#0B2536]">Scientific Extraction</h4>
              <p className="text-xs text-[#456375] leading-relaxed font-light">
                Utilizing low-temperature steam distillation, food-grade solvent extraction, and controlled milling units preserving sensitive volatile aroma profiles.
              </p>
            </div>

            <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 space-y-3 glass-card-hover">
              <div className="w-10 h-10 rounded-xl bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center font-bold border border-[#0084C9]/20">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif-editorial text-xl font-bold text-[#0B2536]">Quality Systems & R&D</h4>
              <p className="text-xs text-[#456375] leading-relaxed font-light">
                Maintaining rigorous analytical laboratory oversight from raw material intake through final standardization for B2B export compliance.
              </p>
            </div>

            <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 space-y-3 glass-card-hover">
              <div className="w-10 h-10 rounded-xl bg-[#E5A853]/15 text-[#E5A853] flex items-center justify-center font-bold border border-[#E5A853]/20">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-serif-editorial text-xl font-bold text-[#0B2536]">Global B2B Supply</h4>
              <p className="text-xs text-[#456375] leading-relaxed font-light">
                Supplying bulk essential oils, oleoresins, floral absolutes, and sterilized powders to flavor, fragrance, food, and pharmaceutical industries worldwide.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;
