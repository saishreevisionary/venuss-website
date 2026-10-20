import React from 'react';
import { Sparkles, Utensils, Sparkle, HeartPulse } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const sectors = [
    {
      title: 'FLAVOR INDUSTRY',
      subtitle: 'Confectionery, Beverages & Savory',
      desc: 'Standardized spice oleoresins, cardamom oil, and ginger extracts offering precise flavor intensity and solubility for beverage premixes, bakery, and sauces.',
      icon: Utensils,
      color: '#E5A853'
    },
    {
      title: 'FINE FRAGRANCE',
      subtitle: 'Perfumes, Colognes & Accords',
      desc: 'Precious Jasmine Grandiflorum & Sambac absolutes, Davana oil, and Tuberose concrete crafting captivating floral and exotic herbal notes.',
      icon: Sparkle,
      color: '#0084C9'
    },
    {
      title: 'FOOD PROCESSING',
      subtitle: 'Prepared Meals & Seasonings',
      desc: 'Micro-sterilized turmeric, cardamom, and basil powders guaranteeing low microbial counts and natural golden color stability.',
      icon: Sparkles,
      color: '#2FA0E0'
    },
    {
      title: 'PERSONAL CARE & COSMETICS',
      subtitle: 'Skincare, Soaps & Balms',
      desc: 'Pure steam-distilled essential oils including Palmarosa, Cajeput, and Basil oil for botanical skincare formulations and aromatherapy.',
      icon: HeartPulse,
      color: '#0084C9'
    }
  ];

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            INDUSTRIAL APPLICATIONS
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            Where nature becomes an ingredient.
          </h2>
          <p className="text-sm text-[#456375] font-light">
            Our extracts are engineered for seamless integration across global B2B manufacturing lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div
                key={idx}
                className="glass-bay rounded-3xl p-6 border border-[#0084C9]/20 hover:border-[#0084C9] shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between glass-card-hover"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#0084C9]/20 shadow-sm">
                    <IconComp className="w-6 h-6" style={{ color: sec.color }} />
                  </div>

                  <div>
                    <h3 className="font-serif-editorial text-xl font-bold text-[#0B2536]">
                      {sec.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#0084C9] block mt-0.5">
                      {sec.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#456375] leading-relaxed font-light">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0084C9]/15 text-[10px] uppercase font-bold text-[#E5A853]">
                  B2B Grade • COA Standardized
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ApplicationsSection;
