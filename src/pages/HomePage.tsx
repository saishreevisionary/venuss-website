import React from 'react';
import { Hero } from '../components/sections/Hero';
import { CompanyIntro } from '../components/sections/CompanyIntro';
import { ProductCategories } from '../components/sections/ProductCategories';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { SustainabilitySection } from '../components/sections/SustainabilitySection';
import { GoogleMapLocation } from '../components/maps/GoogleMapLocation';
import { ContactCTA } from '../components/sections/ContactCTA';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: (productId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  return (
    <div className="w-full">
      {/* 1. HERO REEL & POSITIONING */}
      <Hero
        onExplore={() => setActiveTab('products')}
        onPartner={() => onOpenQuoteModal()}
      />

      {/* 2. BRIEF COMPANY OVERVIEW */}
      <CompanyIntro onDiscover={() => setActiveTab('about')} />

      {/* 3. BOTANICAL CATEGORIES OVERVIEW */}
      <ProductCategories onSelectCategory={() => setActiveTab('products')} />

      {/* 4. EXTRACTION PROCESS TIMELINE TEASER */}
      <ProcessTimeline />

      {/* 5. SUSTAINABILITY & ETHICAL PRACTICES */}
      <SustainabilitySection onExploreSustainability={() => setActiveTab('sustainability')} />

      {/* 6. GOOGLE MAP FACILITY LOCATION */}
      <section className="py-20 bg-[#F2F7FA] border-b border-[#0084C9]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMapLocation />
        </div>
      </section>

      {/* 6. DIRECT PRODUCT DISCOVERY & QUOTE CTA */}
      <ContactCTA
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onContactTeam={() => setActiveTab('contact')}
      />
    </div>
  );
};
