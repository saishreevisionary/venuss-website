import React from 'react';
import { FlaskConical } from 'lucide-react';
import { RnDSection } from '../components/sections/RnDSection';

interface RnDPageProps {
  onOpenQuoteModal: (productId?: string) => void;
}

export const RnDPage: React.FC<RnDPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0084C9]/10 text-[#0084C9] text-xs font-bold uppercase tracking-widest border border-[#0084C9]/25">
            <FlaskConical className="w-3.5 h-3.5 text-[#E5A853]" />
            BOTANICAL EXTRACTION RESEARCH
          </div>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0B2536] font-bold">
            Botanical Innovation & Development
          </h1>
          <p className="text-sm md:text-base text-[#162E3F] font-normal max-w-xl mx-auto leading-relaxed">
            Exploring new extraction parameters, volatile oil stabilization, and high-purity natural oleoresin isolates.
          </p>
        </div>

        <RnDSection onExploreProduct={(id) => onOpenQuoteModal(id)} />

      </div>
    </div>
  );
};

export default RnDPage;
