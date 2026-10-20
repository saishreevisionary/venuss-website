import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sprout, Cpu, TestTube2, Sliders, Truck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SOURCE',
      subtitle: 'Raw Botanical Selection',
      icon: Sprout,
      desc: 'Sourcing fresh green cardamom, basil leaves, davana, and fresh jasmine directly from certified South Indian agricultural partners.',
    },
    {
      num: '02',
      title: 'PROCESS',
      subtitle: 'Scientific Extraction',
      icon: Cpu,
      desc: 'Applying low-pressure steam distillation, food-grade solvent extraction, or micro-sterilized size reduction based on botanical matrix.',
    },
    {
      num: '03',
      title: 'ANALYSE',
      subtitle: 'Laboratory Quality Control',
      icon: TestTube2,
      desc: 'Conducting in-house analytical testing for volatile oil content, moisture, physical parameters, and sensory consistency.',
    },
    {
      num: '04',
      title: 'REFINE',
      subtitle: 'Standardization',
      icon: Sliders,
      desc: 'Controlled manufacturing and batch blending ensuring strict uniformity across commercial drum and container lots.',
    },
    {
      num: '05',
      title: 'DELIVER',
      subtitle: 'Global B2B Supply',
      icon: Truck,
      desc: 'Packaging in food-grade lined aluminum containers, HDPE drums, or bulk containers with full COA documentation for global export.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#072C42] via-[#0A3B59] to-[#051824] text-[#F2F7FA] relative overflow-hidden border-b border-[#0084C9]/30">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0084C9]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0084C9]/20 border border-[#0084C9]/35 text-[#2FA0E0] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
            EXTRACTION PROCESS
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            From nature to concentrate.
          </h2>
          <p className="text-sm text-[#F2F7FA]/80 font-light">
            A controlled 5-step manufacturing journey translating raw harvests into standardized B2B active concentrates.
          </p>
        </div>

        {/* 5-Step Timeline Grid in Glass Bay Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative glass-bay-dark rounded-2xl p-6 border border-[#0084C9]/25 flex flex-col justify-between hover:border-[#0084C9] transition-all group shadow-xl"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-editorial text-2xl font-bold text-[#E5A853]">
                    {s.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#0084C9]/20 text-[#0084C9] flex items-center justify-center border border-[#0084C9]/30 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5 text-[#2FA0E0]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0084C9] block">
                    {s.title}
                  </span>
                  <h4 className="font-serif-editorial text-lg font-bold text-white leading-snug">
                    {s.subtitle}
                  </h4>
                  <p className="text-xs text-[#F2F7FA]/75 leading-relaxed font-light pt-2 border-t border-[#0084C9]/20">
                    {s.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
