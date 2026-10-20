import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, Play, Eye } from 'lucide-react';
import { HeroBotanicalScene } from '../3d/HeroBotanicalScene';
import { HeroVideoPlayer } from '../media/HeroVideoPlayer';
import { COMPANY_INFO } from '../../data/company';

interface HeroProps {
  onExplore: () => void;
  onPartner?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [visualMode, setVisualMode] = useState<'3d' | 'video'>('video');

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-28 pb-16 flex flex-col justify-between bg-gradient-to-b from-[#F2F7FA] via-[#E8F2F8]/60 to-[#F2F7FA] overflow-hidden border-b border-[#0084C9]/15">
      
      {/* Ambient Sapphire & Blue Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#0084C9]/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#2FA0E0]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Story Intro */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0084C9]/10 border border-[#0084C9]/25 text-[#0084C9] text-xs font-bold uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
              ESTABLISHED 1986 • BOTANICAL EXTRACT MANUFACTURER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#0B2536] font-normal leading-[1.1] tracking-tight"
            >
              Nature, extracted <br />
              <span className="italic font-semibold text-[#0084C9]">with precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#162E3F] max-w-xl font-normal leading-relaxed"
            >
              {COMPANY_INFO.subTagline} Premium essential oils, spice oleoresins, floral absolutes, and spice powders processed for global Flavor, Fragrance, Food, and Personal Care industries.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#0084C9]/30 hover:scale-105 transition-all shadow-md group border border-[#2FA0E0]/30"
              >
                <span>EXPLORE OUR INGREDIENTS</span>
                <ArrowRight className="w-4 h-4 text-[#E5A853] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick B2B Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-[#0084C9]/25 grid grid-cols-3 gap-4 text-left"
            >
              <div>
                <span className="block text-xl font-serif-editorial font-bold text-[#0B2536]">40+ Yrs</span>
                <span className="text-[11px] text-[#0B2536] uppercase tracking-wider font-bold">Manufacturing Heritage</span>
              </div>
              <div>
                <span className="block text-xl font-serif-editorial font-bold text-[#0084C9]">Tamil Nadu</span>
                <span className="text-[11px] text-[#0B2536] uppercase tracking-wider font-bold">Botanical Sourcing</span>
              </div>
              <div>
                <span className="block text-xl font-serif-editorial font-bold text-[#0B2536]">100% Direct</span>
                <span className="text-[11px] text-[#0B2536] uppercase tracking-wider font-bold">B2B Reliability</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Showcase (Video & 3D Interactive in Glass Bay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Top Visual Mode Switcher Pills */}
            <div className="flex items-center justify-end gap-2 mb-3">
              <button
                onClick={() => setVisualMode('video')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border ${
                  visualMode === 'video'
                    ? 'bg-[#0084C9] text-white border-[#0084C9] shadow-md shadow-[#0084C9]/20'
                    : 'bg-white/80 text-[#0B2536] border-[#0084C9]/20 hover:bg-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 text-[#E5A853] fill-[#E5A853]" />
                <span>CINEMATIC VIDEO</span>
              </button>

              <button
                onClick={() => setVisualMode('3d')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border ${
                  visualMode === '3d'
                    ? 'bg-[#0084C9] text-white border-[#0084C9] shadow-md shadow-[#0084C9]/20'
                    : 'bg-white/80 text-[#0B2536] border-[#0084C9]/20 hover:bg-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-[#0084C9]" />
                <span>INTERACTIVE 3D</span>
              </button>
            </div>

            <div className="glass-bay relative w-full rounded-3xl p-2.5 md:p-3 border border-[#0084C9]/25 shadow-2xl overflow-hidden">
              {visualMode === 'video' ? (
                <HeroVideoPlayer />
              ) : (
                <div className="relative w-full h-full min-h-[420px] md:min-h-[550px]">
                  <HeroBotanicalScene />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#0084C9]/20 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center font-bold">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[#0B2536]">3D Analytical Specimen View</span>
                        <span className="block text-[10px] text-[#456375]">Interactive Extraction Composition</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#E5A853] tracking-wider hidden sm:block">
                      WEBGL REALTIME
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full text-center pt-8 z-10">
        <button
          onClick={onExplore}
          className="inline-flex flex-col items-center gap-1 text-[11px] font-bold tracking-widest text-[#0084C9] hover:text-[#006CA5] uppercase transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#E5A853]" />
        </button>
      </div>

    </section>
  );
};

export default Hero;
