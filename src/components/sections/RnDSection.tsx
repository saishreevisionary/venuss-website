import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FlaskConical, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

interface RnDSectionProps {
  onExploreProduct?: (productId: string) => void;
}

export const RnDSection: React.FC<RnDSectionProps> = ({ onExploreProduct }) => {
  const rndProducts = PRODUCTS.filter((p) => p.isRnDFeatured);
  const [activeProductId, setActiveProductId] = useState<string>(rndProducts[0]?.id || 'cardamom-oil');
  const activeProduct = rndProducts.find((p) => p.id === activeProductId) || rndProducts[0];

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            RESEARCH & DEVELOPMENT
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            Innovation begins with nature.
          </h2>
          <p className="text-sm sm:text-base text-[#162E3F] font-normal leading-relaxed">
            Our R&D focuses on refining extraction efficiency, isolating active aromatic fractions, and expanding specialized Indian botanical oils.
          </p>
        </div>

        {/* R&D Product Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {rndProducts.map((prod) => {
            const isActive = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#0084C9] text-white border-[#0084C9] shadow-md shadow-[#0084C9]/20 scale-105'
                    : 'bg-white text-[#0B2536] border-[#0084C9]/20 hover:bg-[#0084C9]/10'
                }`}
              >
                {prod.name}
              </button>
            );
          })}
        </div>

        {/* Interactive R&D Showcase Card in Glass Bay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-bay rounded-3xl p-8 md:p-12 border border-[#0084C9]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A853]/15 text-[#E5A853] text-xs font-bold uppercase tracking-wider border border-[#E5A853]/30">
                <FlaskConical className="w-3.5 h-3.5" />
                Featured R&D Extract Development
              </div>

              <div>
                <h3 className="font-serif-editorial text-3xl md:text-4xl font-bold text-[#0B2536]">
                  {activeProduct.name}
                </h3>
                {activeProduct.botanicalName && (
                  <span className="text-sm italic text-[#162E3F] block mt-1 font-semibold">
                    Botanical Specimen: {activeProduct.botanicalName}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-[#0B2536] leading-relaxed font-normal">
                {activeProduct.description}
              </p>

              {/* Process & Extraction Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0084C9]/15">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0084C9]">Extraction Method</span>
                  <span className="block text-xs font-semibold text-[#0B2536] mt-0.5">{activeProduct.extractionMethod}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0084C9]">Origin</span>
                  <span className="block text-xs font-semibold text-[#0B2536] mt-0.5">{activeProduct.origin}</span>
                </div>
              </div>

              {/* B2B Applications */}
              <div>
                <span className="text-[10px] uppercase font-bold text-[#E5A853] block mb-2">Target B2B Formulations</span>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white text-xs text-[#0B2536] border border-[#0084C9]/20 font-semibold shadow-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Scientific Journey Diagram */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#0084C9]/20 space-y-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0084C9] block border-b border-[#0084C9]/15 pb-2">
                R&D Extraction Progression
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F2F7FA] border border-[#0084C9]/15">
                  <span className="w-7 h-7 rounded-full bg-[#0084C9]/15 text-[#0084C9] font-bold text-xs flex items-center justify-center">1</span>
                  <div>
                    <span className="text-xs font-bold text-[#0B2536] block">Botanical Specimen</span>
                    <span className="text-[10px] text-[#162E3F] font-medium">Selected raw leaves, seeds or rhizomes</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F2F7FA] border border-[#0084C9]/15">
                  <span className="w-7 h-7 rounded-full bg-[#2FA0E0]/20 text-[#0084C9] font-bold text-xs flex items-center justify-center">2</span>
                  <div>
                    <span className="text-xs font-bold text-[#0B2536] block">Aromatic Molecular Fractions</span>
                    <span className="text-[10px] text-[#162E3F] font-medium">Controlled volatile separation</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F2F7FA] border border-[#0084C9]/15">
                  <span className="w-7 h-7 rounded-full bg-[#E5A853]/20 text-[#E5A853] font-bold text-xs flex items-center justify-center">3</span>
                  <div>
                    <span className="text-xs font-bold text-[#0B2536] block">Standardized Pure Extract</span>
                    <span className="text-[10px] text-[#162E3F] font-medium">Commercial batch readiness</span>
                  </div>
                </div>
              </div>

              {onExploreProduct && (
                <button
                  onClick={() => onExploreProduct(activeProduct.id)}
                  className="w-full py-2.5 rounded-xl bg-[#0084C9] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006CA5] transition-colors flex items-center justify-center gap-2 mt-4 shadow-sm"
                >
                  <span>TECHNICAL SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5A853]" />
                </button>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default RnDSection;
