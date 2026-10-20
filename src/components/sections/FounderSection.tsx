import React, { useState } from 'react';
import { Calendar, Sparkles, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const FounderSection: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      
      {/* Archival Line Art Decoration */}
      <div className="absolute top-8 left-8 text-[#0084C9]/10 pointer-events-none select-none font-serif-editorial text-[140px] font-bold leading-none opacity-30">
        1986
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            HERITAGE & LEADERSHIP
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            A legacy rooted in nature.
          </h2>
          <p className="text-sm sm:text-base text-[#162E3F] font-normal leading-relaxed">
            Founded in 1986 with a vision to transform raw Indian botanicals into world-class aromatic ingredients.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Founder Portrait Component with Real Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl glass-bay p-3 border border-[#0084C9]/25 shadow-xl overflow-hidden group">
              
              <div className="relative w-full aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-[#0084C9]/20">
                {!imageError ? (
                  <img
                    src="/assets/founder.jpeg"
                    alt={COMPANY_INFO.leadership[0].name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-[#0084C9]/20 via-[#F2F7FA] to-[#2FA0E0]/20 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center border-2 border-dashed border-[#0084C9]/30 mb-4 shadow-inner">
                      <UserCheck className="w-10 h-10 text-[#0084C9]" />
                    </div>
                    <p className="text-xs text-[#0B2536] font-bold">
                      {COMPANY_INFO.leadership[0].name}
                    </p>
                  </div>
                )}

                {/* Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072C42]/90 via-[#072C42]/20 to-transparent opacity-85" />

                {/* Founder Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <span className="px-3 py-1 rounded-full bg-[#E5A853] text-[#072C42] text-[10px] font-bold uppercase tracking-widest inline-block shadow-sm mb-1">
                    FOUNDER & DIRECTOR
                  </span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-white drop-shadow-md">
                    {COMPANY_INFO.leadership[0].name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#F2F7FA]/80 pt-2 border-t border-white/20">
                    <span>{COMPANY_INFO.leadership[0].role}</span>
                    <span className="font-bold italic text-[#E5A853]">Est. 1986</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Founder Story & Company Origin */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0084C9]/10 text-[#0084C9] text-xs font-bold uppercase tracking-wider border border-[#0084C9]/25">
              <Calendar className="w-3.5 h-3.5 text-[#E5A853]" />
              ESTABLISHED IN SEITHUR, TAMIL NADU — MAY 1986
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#0B2536] leading-snug font-bold">
              "True aromatic quality comes from understanding the plant, the soil, and the science of steam."
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#0B2536] leading-relaxed font-normal">
              <p>
                In 1986, <strong className="font-bold text-[#0B2536]">{COMPANY_INFO.name}</strong> was established in the lush botanical heartland of Rajapalayam, Tamil Nadu. Situated near the Western Ghats—one of India's richest biodiversity hotspots—the company recognized the immense potential of indigenous spices, leaves, and flowers.
              </p>
              <p>
                From humble beginnings as a specialized steam distillation unit, the founder established uncompromising principles: pure raw material selection, meticulous temperature control, zero artificial dilution, and direct transparency with international B2B partners.
              </p>
              <p>
                Today, leadership continues this legacy, expanding into advanced solvent extraction for spice oleoresins, floral absolutes, and micro-sterilized spice powders while retaining 1986's foundational commitment to natural integrity.
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#0084C9]/25">
              <div className="p-4 rounded-xl glass-bay border border-[#0084C9]/25">
                <span className="block text-2xl font-serif-editorial font-bold text-[#0084C9]">1986</span>
                <span className="text-xs text-[#0B2536] font-bold">Distillation Unit Established</span>
              </div>
              <div className="p-4 rounded-xl glass-bay border border-[#0084C9]/25">
                <span className="block text-2xl font-serif-editorial font-bold text-[#E5A853]">2000s</span>
                <span className="text-xs text-[#0B2536] font-bold">Oleoresin & Floral Expansion</span>
              </div>
              <div className="p-4 rounded-xl glass-bay border border-[#0084C9]/25">
                <span className="block text-2xl font-serif-editorial font-bold text-[#0084C9]">Present</span>
                <span className="text-xs text-[#0B2536] font-bold">Global B2B Ingredient Partner</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
