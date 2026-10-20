import React from 'react';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface GoogleMapLocationProps {
  className?: string;
}

export const GoogleMapLocation: React.FC<GoogleMapLocationProps> = ({ className = '' }) => {
  // Google Maps embed URL centered precisely on Seithur, Rajapalayam, Tamil Nadu 626121
  const mapEmbedUrl = "https://maps.google.com/maps?q=VENUSS+HERBO+AROMATICS+PRIVATE+LIMITED,+Muhavoor+Road,+Seithur,+Tamil+Nadu+626121&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const directMapsUrl = "https://maps.app.goo.gl/1QdcQLAz73MbKVB39?g_st=aw";

  return (
    <div className={`relative w-full rounded-3xl bg-white shadow-xl border border-[#0084C9]/25 overflow-hidden ${className}`}>
      
      {/* Header bar above map */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-[#072C42] via-[#0A3B59] to-[#072C42] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#0084C9]/30">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0084C9]/25 text-[#2FA0E0] text-[11px] font-bold uppercase tracking-wider border border-[#0084C9]/30">
            <MapPin className="w-3.5 h-3.5 text-[#E5A853]" />
            Official Registered Factory Location
          </div>
          <h3 className="font-serif-editorial text-2xl md:text-3xl font-bold text-white">
            Visit Our Seithur Processing Facility
          </h3>
          <p className="text-xs md:text-sm text-[#F2F7FA]/80 max-w-2xl font-light">
            {COMPANY_INFO.address.fullAddress}
          </p>
        </div>

        <a
          href={directMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/30 hover:scale-105 transition-all shrink-0 self-start md:self-auto border border-[#2FA0E0]/30"
        >
          <Navigation className="w-4 h-4 text-[#E5A853]" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      {/* Google Map Embedded Iframe View */}
      <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-[#E8F2F8]">
        <iframe
          title="Venuss Herbo Aromatics Facility Location Google Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter saturate-[1.1] contrast-[1.02]"
        />

        {/* Floating Quick Navigation Chip */}
        <div className="absolute bottom-4 left-4 z-10 max-w-xs p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#0084C9]/30 text-[#0B2536] hidden sm:block">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0084C9]">
            <MapPin className="w-4 h-4 text-[#E5A853] shrink-0" />
            <span>Seithur Industrial Plant</span>
          </div>
          <p className="text-[11px] text-[#456375] mt-1 line-clamp-2">
            Rajapalayam Taluk, Virudhunagar District, Tamil Nadu (Western Ghats Foothills)
          </p>
          <div className="mt-2 pt-2 border-t border-[#0084C9]/15 flex items-center justify-between text-[10px] text-[#456375]">
            <span className="flex items-center gap-1 font-semibold text-[#0B2536]">
              <ShieldCheck className="w-3 h-3 text-[#0084C9]" /> Verified Facility
            </span>
            <a
              href={directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0084C9] font-bold hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>

      </div>

      {/* Footer Info Strip */}
      <div className="p-4 sm:p-5 bg-[#F2F7FA] border-t border-[#0084C9]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#456375]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A853] animate-pulse" />
          <span>Factory Visits: By Prior Commercial Appointment Only (Mon - Sat, 9:00 AM - 6:00 PM IST)</span>
        </div>
        <div>
          <span className="font-semibold text-[#0B2536]">Phone:</span> {COMPANY_INFO.contact.phoneLandline} / {COMPANY_INFO.contact.phoneMobile}
        </div>
      </div>

    </div>
  );
};

export default GoogleMapLocation;
