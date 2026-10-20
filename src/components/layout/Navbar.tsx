import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'products', label: 'PRODUCTS' },
    { id: 'rnd', label: 'R&D' },
    { id: 'quality', label: 'QUALITY' },
    { id: 'sustainability', label: 'SUSTAINABILITY' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-[#0084C9]/20 py-2.5'
          : 'bg-[#F2F7FA]/80 backdrop-blur-md py-4 border-b border-[#0084C9]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Official Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          <div className="h-11 px-2.5 py-1 rounded-2xl bg-white shadow-md border border-[#0084C9]/25 flex items-center justify-center group-hover:scale-105 transition-all">
            <img 
              src="/assets/logo.png" 
              alt="VENUSS Logo" 
              className="h-full w-auto object-contain rounded-lg" 
            />
          </div>
          <div>
            <span className="font-serif-editorial text-lg md:text-xl font-bold tracking-tight text-[#0B2536] block leading-none group-hover:text-[#0084C9] transition-colors">
              VENUSS
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#0B2536] font-bold block mt-0.5">
              HERBO AROMATICS PVT LTD
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-bold tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#0084C9]'
                    : 'text-[#0B2536] hover:text-[#0084C9]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0084C9] rounded-full animate-fadeIn shadow-sm shadow-[#0084C9]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/30 hover:scale-105 transition-all border border-[#2FA0E0]/30"
          >
            REQUEST A QUOTE
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenQuoteModal}
            className="px-3 py-1.5 rounded-full bg-[#0084C9] text-white text-[11px] font-bold uppercase tracking-wider"
          >
            QUOTE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0B2536] hover:bg-[#0084C9]/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-2xl border-b border-[#0084C9]/20 shadow-2xl p-6 space-y-3 z-50 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#0084C9] text-white shadow-md'
                    : 'text-[#0B2536] hover:bg-[#F2F7FA]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#0084C9]/15 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-[#0084C9] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md"
            >
              REQUEST TECHNICAL QUOTATION
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] text-[#0B2536] font-semibold block">Factory Contact: {COMPANY_INFO.contact.phoneLandline}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
