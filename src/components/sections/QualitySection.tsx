import React from 'react';
import { CheckCircle2, Award, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certifications';

interface QualitySectionProps {
  onOpenQuoteModal?: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = () => {
  const qcWorkflow = [
    { step: '01', title: 'RAW MATERIAL INTAKE', desc: 'Sampling fresh botanical harvests for identity, moisture, and sensory purity.' },
    { step: '02', title: 'INSPECTION & SORTING', desc: 'Physical cleaning and removal of extraneous matter prior to processing.' },
    { step: '03', title: 'EXTRACTION CONTROL', desc: 'Continuous monitoring of steam pressure, temperature, and solvent recovery.' },
    { step: '04', title: 'LAB ANALYTICAL TESTING', desc: 'Verifying specific gravity, refractive index, optical rotation, and active volatile content.' },
    { step: '05', title: 'FINAL STANDARDIZATION', desc: 'Batch blending and COA issuance for direct export dispatch.' }
  ];

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
            <Sparkles className="w-3.5 h-3.5" />
            B2B TRUST & COMPLIANCE
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
            Quality at every stage.
          </h2>
          <p className="text-sm sm:text-base text-[#162E3F] font-normal leading-relaxed">
            Our analytical laboratory systems ensure every kilogram of essential oil, oleoresin, and powder meets international B2B buyer specifications.
          </p>
        </div>

        {/* Quality Control Workflow Strip in Glass Bay */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0084C9] mb-6 text-center">
            5-Stage Quality Assurance Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {qcWorkflow.map((w, idx) => (
              <div key={idx} className="p-5 rounded-2xl glass-bay border border-[#0084C9]/20 relative space-y-2 glass-card-hover">
                <span className="font-serif-editorial text-xl font-bold text-[#E5A853] block">{w.step}</span>
                <h4 className="text-xs font-bold text-[#0B2536] uppercase tracking-wider">{w.title}</h4>
                <p className="text-xs text-[#0B2536] leading-relaxed font-normal">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Badges Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#0084C9]/15 pb-4">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536]">
              Certifications & Quality Frameworks
            </h3>
            <p className="text-xs text-[#162E3F] font-medium">
              Maintained certifications as listed on company record.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 hover:border-[#0084C9] shadow-sm hover:shadow-xl transition-all space-y-3 glass-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0084C9]/15 text-[#0084C9] text-[10px] font-bold uppercase tracking-wider border border-[#0084C9]/20">
                    {cert.code}
                  </span>
                  <Award className="w-5 h-5 text-[#E5A853]" />
                </div>

                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-[#0B2536]">
                    {cert.title}
                  </h4>
                  <span className="text-[11px] text-[#0084C9] font-semibold block mt-0.5">
                    {cert.issuingBody}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#0B2536] leading-relaxed font-normal">
                  {cert.description}
                </p>

                <div className="pt-3 border-t border-[#0084C9]/15 flex items-center justify-between text-[10px] text-[#0B2536] font-medium">
                  <span className="flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0084C9]" />
                    {cert.validityStatus}
                  </span>
                  {cert.certNumberPlaceholder && (
                    <span className="font-mono text-[#0084C9] font-semibold">{cert.certNumberPlaceholder}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualitySection;
