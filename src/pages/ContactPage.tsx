import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { GoogleMapLocation } from '../components/maps/GoogleMapLocation';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ContactSection />
        <GoogleMapLocation />
      </div>
    </div>
  );
};

export default ContactPage;
