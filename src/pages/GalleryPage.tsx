import React from 'react';
import { Camera } from 'lucide-react';
import { GallerySection } from '../components/sections/GallerySection';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0084C9]/10 text-[#0084C9] text-xs font-bold uppercase tracking-widest border border-[#0084C9]/25">
            <Camera className="w-3.5 h-3.5 text-[#E5A853]" />
            FACILITY, PRODUCTION & HARVEST MEDIA
          </div>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0B2536] font-bold leading-tight">
            Factory & Botanical Gallery
          </h1>
          <p className="text-sm md:text-base text-[#162E3F] font-normal max-w-xl mx-auto leading-relaxed">
            High-definition visual showcase of our steam distillation plant, closed-loop solvent extraction units, analytical chemistry laboratories, and South Indian harvest fields.
          </p>
        </div>

        <GallerySection />

      </div>
    </div>
  );
};

export default GalleryPage;
