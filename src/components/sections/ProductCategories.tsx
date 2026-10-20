import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Flame, Flower2, Layers, Sparkles, Wind, Sparkle } from 'lucide-react';

interface ProductCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'essential-oils',
      title: 'ESSENTIAL OILS',
      icon: Droplets,
      accentColor: '#0084C9',
      description: 'Volatile aromatic liquids steam-distilled from Indian botanicals.',
      sampleProducts: 'Betel Leaf Oil, Davana Oil, Palmarosa Oil',
    },
    {
      id: 'spice-oils',
      title: 'SPICE OILS',
      icon: Wind,
      accentColor: '#E5A853',
      description: 'Steam-distilled spice oils offering rich volatile aromatic signatures.',
      sampleProducts: 'Basil, Cardamom, Celery, Cumin, Curry Leaf, Ginger, Mace, Nutmeg, Onion Oils',
    },
    {
      id: 'spice-oleoresins',
      title: 'SPICE OLEORESINS',
      icon: Flame,
      accentColor: '#0084C9',
      description: 'Concentrated natural flavor & resin extracts with standardized pungency.',
      sampleProducts: 'Cardamom, Cumin, Celery, Turmeric, Saffron Oleoresins',
    },
    {
      id: 'floral-concretes',
      title: 'FLORAL CONCRETES',
      icon: Flower2,
      accentColor: '#2FA0E0',
      description: 'Pure solid waxy floral extracts from handpicked South Indian blossoms.',
      sampleProducts: 'Jasmine Grandiflorum, Jasmine Sambac, Tuberose Concretes',
    },
    {
      id: 'floral-absolutes',
      title: 'FLORAL ABSOLUTES',
      icon: Sparkle,
      accentColor: '#E5A853',
      description: 'Refined liquid floral absolutes of exceptional purity for fine fragrance.',
      sampleProducts: 'Jasmine Grandiflorum, Jasmine Sambac, Tuberose Absolutes',
    },
    {
      id: 'spice-powders',
      title: 'SPICE POWDERS',
      icon: Layers,
      accentColor: '#0084C9',
      description: 'Precision milled and sterilized ground spices for industrial food applications.',
      sampleProducts: 'Cardamom, Cumin, Saffron, Turmeric Powders',
    },
  ];

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
              <Sparkles className="w-3.5 h-3.5" />
              PRODUCT CATEGORIES
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
              Explore our product library.
            </h2>
            <p className="text-sm sm:text-base text-[#162E3F] max-w-xl font-normal leading-relaxed">
              Structured categories containing verified Indian botanical extracts, essential oils, oleoresins, floral absolutes, and powders.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0084C9] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006CA5] transition-colors self-start md:self-auto shadow-md"
          >
            VIEW ALL PRODUCTS <ArrowRight className="w-4 h-4 text-[#E5A853]" />
          </button>
        </div>

        {/* 6 Interactive Glass Bay Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative glass-bay rounded-3xl p-7 border border-[#0084C9]/20 hover:border-[#0084C9] shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-15 group-hover:opacity-30 transition-opacity blur-2xl pointer-events-none"
                  style={{ backgroundColor: cat.accentColor }}
                />

                <div className="space-y-5 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#0084C9] flex items-center justify-center border border-[#0084C9]/20 group-hover:scale-110 transition-transform shadow-sm">
                    <IconComponent className="w-6 h-6" style={{ color: cat.accentColor }} />
                  </div>

                  <div>
                    <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536] group-hover:text-[#0084C9] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B2536] mt-2 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#0084C9]/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5A853] block mb-1">
                      Included Items:
                    </span>
                    <span className="text-xs text-[#0B2536] font-semibold italic block leading-relaxed">
                      {cat.sampleProducts}
                    </span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#0084C9]/15 flex items-center justify-between z-10">
                  <span className="text-[10px] text-[#0B2536] font-bold uppercase tracking-wider">
                    B2B Grade
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0084C9] group-hover:text-[#006CA5] transition-colors uppercase tracking-wider">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;
