import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Building className="w-3.5 h-3.5" />
            DIRECT FACTORY CONTACT
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            Connect with our team.
          </h2>
          <p className="text-sm sm:text-base text-[#162E3F] font-normal leading-relaxed">
            Contact our Rajapalayam production facility directly for commercial inquiries, technical COAs, and B2B sample requests.
          </p>
        </div>

        {/* Centered Glass Bay Contact Card */}
        <div className="max-w-3xl mx-auto glass-bay rounded-3xl p-8 md:p-12 border border-[#0084C9]/25 shadow-xl space-y-8">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A853]">
              REGISTERED OFFICE & PLANT
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#0B2536] mt-2">
              {COMPANY_INFO.name}
            </h3>
            <span className="text-xs sm:text-sm text-[#162E3F] italic block mt-1 font-semibold">
              Established May 22, 1986 • ROC Chennai
            </span>
          </div>

          <div className="space-y-6 text-sm text-[#0B2536] border-t border-[#0084C9]/15 pt-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/25 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#0B2536] text-base block">Facility Address:</span>
                <p className="leading-relaxed mt-1 text-xs sm:text-sm">{COMPANY_INFO.address.fullAddress}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/25 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#0B2536] text-base block">Telephone / Mobile:</span>
                <p className="leading-relaxed mt-1 text-xs sm:text-sm font-medium text-[#0B2536]">
                  {COMPANY_INFO.contact.phoneLandline} / {COMPANY_INFO.contact.phoneMobile}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/25 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#0B2536] text-base block">Business Emails:</span>
                <p className="leading-relaxed mt-1 text-xs sm:text-sm font-medium text-[#0084C9]">
                  <a href={`mailto:${COMPANY_INFO.contact.emailGeneral}`} className="hover:underline">{COMPANY_INFO.contact.emailGeneral}</a> / <a href={`mailto:${COMPANY_INFO.contact.emailDirector}`} className="hover:underline">{COMPANY_INFO.contact.emailDirector}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/25 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#0B2536] text-base block">Working Hours:</span>
                <p className="leading-relaxed mt-1 text-xs sm:text-sm">{COMPANY_INFO.contact.workingHours}</p>
              </div>
            </div>

          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-[#0084C9]/20 text-xs sm:text-sm text-[#456375] flex items-center gap-3 shadow-sm font-medium">
            <ShieldCheck className="w-6 h-6 text-[#0084C9] shrink-0" />
            <span>Direct factory inquiries are reviewed within 24 business hours.</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
