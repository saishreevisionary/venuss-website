import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { CATEGORIES } from '../../data/products';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#072C42] via-[#0A3B59] to-[#051824] text-[#F2F7FA] pt-16 pb-12 border-t border-[#0084C9]/30 relative overflow-hidden">
      
      {/* Background Glass Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0084C9]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2FA0E0]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0084C9]/20">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="h-12 px-3 py-1 rounded-2xl bg-white shadow-lg border border-[#0084C9]/40 flex items-center justify-center shrink-0">
                <img 
                  src="/assets/logo.png" 
                  alt="VENUSS Logo" 
                  className="h-full w-auto object-contain rounded-lg" 
                />
              </div>
              <div>
                <span className="font-serif-editorial text-xl font-bold tracking-tight text-white block leading-tight">
                  VENUSS HERBO AROMATICS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E5A853] font-bold block mt-0.5">
                  PRIVATE LIMITED • EST. 1986
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F2F7FA]/80 leading-relaxed font-light">
              Natural botanical ingredients, essential oils, spice oils, spice oleoresins, floral absolutes, floral concretes, and spice powders from India, crafted for global Flavor, Fragrance, Food, and Personal Care industries.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-[#0084C9]/25 text-xs text-[#F2F7FA]/90 space-y-1">
              <span className="font-semibold text-[#0084C9] block">Positioning Directive:</span>
              <p className="italic text-[#F2F7FA]/80">"Nature, extracted with precision."</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-editorial text-base font-semibold text-[#E5A853] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'products', 'rnd', 'quality', 'sustainability', 'gallery', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item)}
                    className="text-[#F2F7FA]/80 hover:text-[#0084C9] transition-colors uppercase tracking-wider font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Library Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-editorial text-base font-semibold text-[#E5A853] uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav('products')}
                    className="text-[#F2F7FA]/80 hover:text-[#0084C9] transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-editorial text-base font-semibold text-[#E5A853] uppercase tracking-wider">
              Registered Facility
            </h4>
            <div className="space-y-2.5 text-xs text-[#F2F7FA]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0084C9] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0084C9] shrink-0" />
                <span>{COMPANY_INFO.contact.phoneLandline} / {COMPANY_INFO.contact.phoneMobile}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0084C9] shrink-0" />
                <span>{COMPANY_INFO.contact.emailGeneral}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0084C9] shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>


          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F2F7FA]/60">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Incorporated May 22, 1986.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => handleNav('sustainability')} className="hover:text-[#0084C9] transition-colors">Sustainability Charter</button>
            <button onClick={() => handleNav('quality')} className="hover:text-[#0084C9] transition-colors">Quality Systems</button>
            <button onClick={() => handleNav('gallery')} className="hover:text-[#0084C9] transition-colors">Facility Gallery</button>
            <button onClick={() => handleNav('contact')} className="hover:text-[#0084C9] transition-colors">Factory Location</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
