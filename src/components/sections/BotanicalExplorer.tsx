import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface BotanicalItem {
  id: string;
  name: string;
  botanicalName: string;
  origin: string;
  icon: string;
  formats: {
    title: string;
    type: string;
    extraction: string;
    desc: string;
  }[];
}

export const BotanicalExplorer: React.FC = () => {
  const botanicals: BotanicalItem[] = [
    {
      id: 'cardamom',
      name: 'Cardamom',
      botanicalName: 'Elettaria cardamomum',
      origin: 'Southern India',
      icon: '🌱',
      formats: [
        { title: 'Cardamom Oil', type: 'Spice Oil', extraction: 'Steam Distillation', desc: 'Warm, spicy aromatic oil for fine fragrances, confectionery & flavorings.' },
        { title: 'Cardamom Oleoresin', type: 'Spice Oleoresin', extraction: 'Solvent Extraction', desc: 'Concentrated natural extract containing volatile oil and non-volatile flavor active components.' },
        { title: 'Cardamom Powder', type: 'Spice Powder', extraction: 'Controlled Milling', desc: 'Precision milled green cardamom seed powder preserving volatile aromatic notes.' },
      ]
    },
    {
      id: 'jasmine',
      name: 'Jasmine',
      botanicalName: 'Jasminum grandiflorum / Sambac',
      origin: 'Tamil Nadu, India',
      icon: '🌸',
      formats: [
        { title: 'Jasmine Grandiflorum Concrete', type: 'Floral Concrete', extraction: 'Solvent Extraction', desc: 'Solid waxy floral mass extracted from fresh hand-picked Grandiflorum blossoms.' },
        { title: 'Jasmine Sambac Absolute', type: 'Floral Absolute', extraction: 'Alcohol Extraction of Concrete', desc: 'Precious liquid absolute featuring rich exotic floral and green undertones.' },
      ]
    },
    {
      id: 'turmeric',
      name: 'Turmeric',
      botanicalName: 'Curcuma longa',
      origin: 'Tamil Nadu, India',
      icon: '✨',
      formats: [
        { title: 'Turmeric Oleoresin', type: 'Spice Oleoresin', extraction: 'Solvent Extraction', desc: 'Standardized curcuminoid extract used as a vibrant natural food colorant & nutraceutical.' },
        { title: 'Turmeric Powder', type: 'Spice Powder', extraction: 'Milling & Sterilization', desc: 'Sterilized golden yellow powder with guaranteed curcumin content.' },
      ]
    },
    {
      id: 'davana',
      name: 'Davana',
      botanicalName: 'Artemisia pallens',
      origin: 'South India',
      icon: '🌾',
      formats: [
        { title: 'Davana Oil', type: 'Essential Oil', extraction: 'Steam Distillation', desc: 'Rare Indian botanical extract with sweet, tea-like fruity top notes highly prized in niche perfumery.' },
      ]
    },
    {
      id: 'betel-leaf',
      name: 'Betel Leaf',
      botanicalName: 'Piper betle',
      origin: 'Tamil Nadu, India',
      icon: '🍃',
      formats: [
        { title: 'Betel Leaf Oil', type: 'Essential Oil', extraction: 'Steam Distillation', desc: 'Specialty aromatic oil with distinct phenolic, fresh herbaceous notes for oral care and perfumery.' },
      ]
    },
    {
      id: 'saffron',
      name: 'Saffron',
      botanicalName: 'Crocus sativus',
      origin: 'India',
      icon: '🌺',
      formats: [
        { title: 'Saffron Oleoresin', type: 'Spice Oleoresin', extraction: 'Solvent Extraction', desc: 'Exquisite standardized extract derived from saffron filaments, delivering rich golden hue.' },
        { title: 'Saffron Powder', type: 'Spice Powder', extraction: 'Controlled Milling', desc: 'Finely ground saffron filaments providing rich natural color and distinct aroma.' },
      ]
    },
    {
      id: 'cumin',
      name: 'Cumin',
      botanicalName: 'Cuminum cyminum',
      origin: 'India',
      icon: '🌾',
      formats: [
        { title: 'Cumin Oil', type: 'Spice Oil', extraction: 'Steam Distillation', desc: 'Intense green-spicy aromatic oil distilled from crushed cumin seeds.' },
        { title: 'Cumin Oleoresin', type: 'Spice Oleoresin', extraction: 'Solvent Extraction', desc: 'Concentrated resinous extract for industrial spice seasonings and savory food processing.' },
        { title: 'Cumin Powder', type: 'Spice Powder', extraction: 'Controlled Milling', desc: 'Milled sterilized cumin seed powder delivering consistent spicy green aroma.' },
      ]
    }
  ];

  const [selectedId, setSelectedId] = useState<string>('cardamom');
  const activeBotanical = botanicals.find(b => b.id === selectedId) || botanicals[0];

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            BOTANICAL EXTRACTION MATRIX
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            One plant. Specialized ingredient formats.
          </h2>
          <p className="text-sm text-[#456375] font-light">
            Select an Indian botanical below to view its extracted formats.
          </p>
        </div>

        {/* Botanical Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {botanicals.map((b) => {
            const isActive = b.id === selectedId;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0084C9] text-white shadow-md shadow-[#0084C9]/20 border border-[#0084C9] scale-105'
                    : 'bg-white text-[#0B2536] border border-[#0084C9]/20 hover:bg-[#0084C9]/10'
                }`}
              >
                <span>{b.icon}</span>
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Matrix Display Box in Glass Bay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBotanical.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-bay rounded-3xl p-8 md:p-12 border border-[#0084C9]/25 shadow-xl relative overflow-hidden"
          >
            {/* Top Botanical Identity Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#0084C9]/15 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-3xl flex items-center justify-center border border-[#0084C9]/20 shadow-sm">
                  {activeBotanical.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A853]">
                    Botanical Specimen
                  </span>
                  <h3 className="font-serif-editorial text-3xl font-bold text-[#0B2536]">
                    {activeBotanical.name}
                  </h3>
                  <span className="text-xs italic text-[#456375] font-medium">
                    {activeBotanical.botanicalName} • Origin: {activeBotanical.origin}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#0084C9]/20 text-xs font-bold text-[#0084C9] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#0084C9]" />
                <span>{activeBotanical.formats.length} Extracted Format(s)</span>
              </div>
            </div>

            {/* Formats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {activeBotanical.formats.map((fmt, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-[#0084C9]/20 space-y-4 hover:border-[#0084C9] transition-all shadow-sm glass-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#0084C9] text-white">
                      {fmt.type}
                    </span>
                    <span className="text-[10px] font-bold text-[#E5A853] uppercase tracking-wider">
                      {fmt.extraction}
                    </span>
                  </div>

                  <h4 className="font-serif-editorial text-xl font-bold text-[#0B2536]">
                    {fmt.title}
                  </h4>

                  <p className="text-xs text-[#456375] leading-relaxed font-light">
                    {fmt.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default BotanicalExplorer;
