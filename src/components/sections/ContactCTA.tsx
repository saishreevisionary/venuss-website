import React from 'react';
import { Mail, PhoneCall, Sparkles } from 'lucide-react';

interface ContactCTAProps {
  onOpenQuoteModal: () => void;
  onContactTeam: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenQuoteModal, onContactTeam }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#072C42] via-[#0A3B59] to-[#072C42] text-[#F2F7FA] relative overflow-hidden border-b border-[#0084C9]/30">
      
      {/* Background Decorative Ambient Blue Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0084C9]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0084C9]/20 border border-[#0084C9]/35 text-[#2FA0E0] text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
          B2B DISCOVERY & SAMPLING
        </div>

        <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight text-white">
          Looking for a specific <br />
          <span className="italic text-[#0084C9]">natural botanical ingredient?</span>
        </h2>

        <p className="text-sm md:text-base text-[#F2F7FA]/80 max-w-xl mx-auto font-light leading-relaxed">
          Tell us what you're looking for and our technical team can help you explore the right botanical extract, essential oil, or custom oleoresin specification.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#0084C9]/30 transition-all shadow-lg"
          >
            <Mail className="w-4 h-4 text-[#E5A853]" />
            REQUEST A QUOTE
          </button>

          <button
            onClick={onContactTeam}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#0084C9]/40 bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#0084C9]" />
            CONTACT OUR TEAM
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
