import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe2 } from 'lucide-react';

export const GlobalReachGlobe: React.FC = () => {
  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#072C42] via-[#0A3B59] to-[#051824] p-8 md:p-12 text-[#F2F7FA] shadow-2xl overflow-hidden border border-[#0084C9]/30">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#0084C9]/20 animate-spin" style={{ animationDuration: '40s' }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#E5A853]/20 animate-spin" style={{ animationDuration: '60s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0084C9]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Context */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0084C9]/20 border border-[#0084C9]/35 text-[#2FA0E0] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-[#E5A853]" />
            Global B2B Supply Chain
          </div>

          <h3 className="font-serif-editorial text-3xl md:text-4xl text-white leading-tight font-bold">
            Rooted in India. <br />
            <span className="italic text-[#0084C9]">Connected to the World.</span>
          </h3>

          <p className="text-sm md:text-base text-[#F2F7FA]/80 leading-relaxed font-light">
            From our primary manufacturing facility in Seithur, Tamil Nadu, Venuss Herbo Aromatics delivers natural essential oils, oleoresins, and botanical extracts to international flavor houses, fragrance manufacturers, food processors, and cosmetic formulators worldwide.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0084C9]/20">
            <div>
              <span className="block text-2xl font-serif-editorial font-bold text-[#E5A853]">1986</span>
              <span className="text-xs text-[#F2F7FA]/70 uppercase tracking-wider font-semibold">Established Heritage</span>
            </div>
            <div>
              <span className="block text-2xl font-serif-editorial font-bold text-[#0084C9]">Strict QC</span>
              <span className="text-xs text-[#F2F7FA]/70 uppercase tracking-wider font-semibold">International Compliance</span>
            </div>
          </div>
        </div>

        {/* Right Column: World Map Visual & Nodes in Glass Bay */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] max-w-2xl bg-[#0A3B59]/60 backdrop-blur-xl rounded-2xl border border-[#0084C9]/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* World Map Stylized Dots Canvas SVG */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#0084C9_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Hub Nodes */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              
              {/* Origin Marker: India */}
              <a 
                href="https://maps.app.goo.gl/1QdcQLAz73MbKVB39?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[48%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform z-20"
                title="View on Google Maps"
              >
                <motion.div 
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="w-8 h-8 rounded-full bg-[#E5A853]/30 flex items-center justify-center border border-[#E5A853]"
                >
                  <div className="w-3 h-3 rounded-full bg-[#E5A853] shadow-[0_0_15px_#E5A853]" />
                </motion.div>
                <div className="mt-2 bg-[#072C42]/95 border border-[#0084C9]/60 px-3 py-1 rounded-full text-center shadow-lg backdrop-blur-md group-hover:bg-[#0A3B59]/95 group-hover:border-[#E5A853] transition-colors">
                  <span className="block text-[11px] font-bold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E5A853]" /> Venuss Origin Facility
                  </span>
                  <span className="block text-[9px] text-[#0084C9] font-semibold">Tamil Nadu, India</span>
                </div>
              </a>

              {/* Connecting Supply Vectors SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 350">
                {/* Connection to Europe */}
                <path d="M370 168 Q 280 100 240 110" fill="none" stroke="#E5A853" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                {/* Connection to Americas */}
                <path d="M370 168 Q 200 80 110 140" fill="none" stroke="#0084C9" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* Connection to Middle East */}
                <path d="M370 168 Q 330 150 310 160" fill="none" stroke="#E5A853" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Connection to East Asia */}
                <path d="M370 168 Q 440 180 490 170" fill="none" stroke="#0084C9" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Animated Light Pulse Nodes */}
                <circle cx="240" cy="110" r="4" fill="#0084C9" />
                <circle cx="110" cy="140" r="4" fill="#E5A853" />
                <circle cx="310" cy="160" r="4" fill="#0084C9" />
                <circle cx="490" cy="170" r="4" fill="#E5A853" />
              </svg>

              {/* Network Legend */}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#F2F7FA]/80 border-t border-[#0084C9]/20 pt-4 z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5A853]" />
                  <span className="font-medium">Manufacturing & R&D Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0084C9]" />
                  <span className="font-medium">Verified B2B Export Supply Network</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReachGlobe;
