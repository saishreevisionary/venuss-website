import React, { useState } from 'react';
import { Leaf, Recycle, Users, Sparkles, ShieldCheck, CheckCircle2, Factory, ArrowRight, FileCheck } from 'lucide-react';

interface SustainabilityPageProps {
  onOpenQuoteModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenQuoteModal, setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sourcing' | 'extraction' | 'waste' | 'community'>('all');

  const pillars = [
    {
      id: 'sourcing',
      category: 'sourcing',
      icon: Leaf,
      title: 'Ethical & Direct Agrarian Sourcing',
      shortDesc: 'Empowering regional farmers with fair pricing and sustainable cultivation guidance.',
      details: [
        'Direct contract farming and long-term partnerships with cardamom growers in the Western Ghats and basil/jasmine cultivators in Tamil Nadu.',
        'Strict rejection of raw materials harvested using prohibited pesticides or non-sustainable practices.',
        'Guidance on soil conservation, organic composting, and natural crop preservation techniques to protect local biodiversity.',
        '100% farm-gate origin batch tracking ensuring transparent botanical provenance.'
      ],
      metrics: '100% Regional Farm Direct Sourcing'
    },
    {
      id: 'extraction',
      category: 'extraction',
      icon: Factory,
      title: 'Green Extraction & Energy Conservation',
      shortDesc: 'Low-energy steam distillation and food-grade eco-solvent recovery systems.',
      details: [
        'Low-temperature steam distillation designed to minimize thermal energy consumption while preserving volatile aromatic terpene profiles.',
        'Closed-loop solvent recovery units operating at >98% efficiency to eliminate atmospheric hydrocarbon emissions.',
        'Continuous process optimization reducing heat loss across extraction vessels and condensers.',
        'Integration of energy-efficient motor drives and biomass thermal support units.'
      ],
      metrics: '>98% Solvent Recovery Rate'
    },
    {
      id: 'waste',
      category: 'waste',
      icon: Recycle,
      title: 'Zero Discharge & Biomass Upcycling',
      shortDesc: 'Converting spent botanical residues into bio-energy and soil nutrients.',
      details: [
        'Spent botanical biomass (distilled cardamom husk, spent leaves, and bark residue) is dried and converted into organic bio-pellets and fertilizer.',
        'Industrial wastewater treatment plant ensuring zero untreated effluent discharge into surrounding soil or waterways.',
        'Closed-circuit cooling water loops recirculating 95%+ of heat exchanger cooling water.',
        'Responsible sorting and recycling of standard packaging and drum materials.'
      ],
      metrics: 'Zero Untreated Effluent Discharge'
    },
    {
      id: 'community',
      category: 'community',
      icon: Users,
      title: 'Fair Workplace & Community Welfare',
      shortDesc: 'Ensuring occupational safety, fair compensation, and community development.',
      details: [
        'Equal opportunity, fair living wages, and comprehensive health & safety protocols for plant technicians and laboratory staff.',
        'Routine safety training, ergonomic workstations, and complete Personal Protective Equipment (PPE) enforcement in extraction zones.',
        'Active investment in the local agricultural community surrounding Rajapalayam and Seithur in Tamil Nadu.',
        'Ethical labor compliance aligned with Indian labor frameworks and international fair trade benchmarks.'
      ],
      metrics: '40+ Years Local Community Trust'
    }
  ];

  const auditChecklist = [
    {
      parameter: 'Sustainable Botanical Extraction Framework',
      standard: 'Global Sustainable Sourcing & Processing Standards',
      implementation: 'Full operational adherence across extraction purity, volatile conservation, and eco-sourcing protocols.',
      status: 'Fully Implemented'
    },
    {
      parameter: 'Pesticide & Heavy Metal Residue Control',
      standard: 'Maximum Residue Limits (MRL) & Food Safety',
      implementation: 'Routine batch testing by accredited analytical laboratories for zero pesticide residue.',
      status: 'Fully Implemented'
    },
    {
      parameter: 'Solvent Residue & Extraction Safety',
      standard: 'Food & Cosmetic Grade Solvent Cleanliness',
      implementation: 'Ultra-low solvent residue limits using food-grade hexane/alcohol with complete recovery.',
      status: 'Fully Implemented'
    },
    {
      parameter: 'Effluent & Waste Water Discharge',
      standard: 'State Pollution Control Board & ZLD Protocols',
      implementation: 'On-site effluent treatment plant (ETP) and water recycling loop.',
      status: 'Fully Implemented'
    },
    {
      parameter: 'Botanical Traceability & Identity',
      standard: 'GC-MS Chemical Fingerprinting',
      implementation: 'Every production lot mapped with Certificate of Analysis (COA) and batch tracking number.',
      status: 'Fully Implemented'
    }
  ];

  const filteredPillars = activeCategory === 'all' 
    ? pillars 
    : pillars.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Banner */}
        <div className="bg-gradient-to-br from-[#072C42] via-[#0A3B59] to-[#051824] text-[#F2F7FA] rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl border border-[#0084C9]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0084C9]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A853]/20 text-[#E5A853] text-xs font-bold uppercase tracking-widest border border-[#E5A853]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
              SUSTAINABILITY & ECO-EXTRACTION CHARTER
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Pure nature. <br />
              <span className="italic text-[#0084C9]">Responsible chemistry.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#F2F7FA]/85 font-light leading-relaxed">
              At <strong>Venuss Herbo Aromatics</strong>, sustainability is embedded into how we source fresh spices and leaves, distil volatile essential oils, manage process wastewater, and support agrarian farming communities in South India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#0084C9]/30 transition-all shadow-md"
              >
                REQUEST TECHNICAL COA & SAMPLE
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 rounded-full bg-[#0A3B59] border border-[#0084C9]/40 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#072C42] transition-all"
              >
                CONTACT PLANT DIRECTORS
              </button>
            </div>

          </div>
        </div>

        {/* Standard Alignment Card */}
        <div className="glass-bay rounded-3xl p-8 md:p-10 border border-[#0084C9]/25 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
                <ShieldCheck className="w-4 h-4 text-[#0084C9]" />
                INTERNATIONAL SUSTAINABILITY & EXTRACTION STANDARDS
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#0B2536] font-bold">
                Operating in complete harmony with global eco-extraction guidelines.
              </h2>
              <p className="text-xs sm:text-sm text-[#0B2536] leading-relaxed font-normal">
                Our Seithur manufacturing plant operates by rigorous environmental, quality, and ethical parameters established across global flavor, fragrance, and essential oil processing standards—ensuring every batch is produced safely and sustainably.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#0084C9]/20 shrink-0 w-full lg:w-80 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center shrink-0 border border-[#0084C9]/30">
                  <ShieldCheck className="w-5 h-5 text-[#0084C9]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0B2536] block">Green Refinery Standard</span>
                  <span className="text-[11px] text-[#0084C9] font-bold block">100% Operational Compliance</span>
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-[#162E3F] leading-normal font-normal">
                All manufacturing protocols, green extraction limits, zero-discharge waste management, and farm sourcing comply with stringent industry eco-guidelines.
              </p>
            </div>

          </div>
        </div>

        {/* Key Sustainability Metrics Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 shadow-sm text-center space-y-1">
            <span className="block font-serif-editorial text-3xl font-bold text-[#0084C9]">100%</span>
            <span className="text-xs text-[#0B2536] uppercase tracking-wider font-bold">Natural Origins</span>
            <p className="text-[10px] text-[#0B2536] font-semibold mt-1">Direct Indian botanical sourcing</p>
          </div>
          <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 shadow-sm text-center space-y-1">
            <span className="block font-serif-editorial text-3xl font-bold text-[#E5A853]">&gt;98%</span>
            <span className="text-xs text-[#0B2536] uppercase tracking-wider font-bold">Solvent Recovery</span>
            <p className="text-[10px] text-[#0B2536] font-semibold mt-1">Closed-loop clean extraction</p>
          </div>
          <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 shadow-sm text-center space-y-1">
            <span className="block font-serif-editorial text-3xl font-bold text-[#0084C9]">0%</span>
            <span className="text-xs text-[#0B2536] uppercase tracking-wider font-bold">Hazardous Discharge</span>
            <p className="text-[10px] text-[#0B2536] font-semibold mt-1">Effluent treatment & water reuse</p>
          </div>
          <div className="glass-bay rounded-2xl p-6 border border-[#0084C9]/20 shadow-sm text-center space-y-1">
            <span className="block font-serif-editorial text-3xl font-bold text-[#E5A853]">40+</span>
            <span className="text-xs text-[#0B2536] uppercase tracking-wider font-bold">Years Trust</span>
            <p className="text-[10px] text-[#0B2536] font-semibold mt-1">Established May 22, 1986</p>
          </div>
        </div>

        {/* Sustainability Pillars Matrix Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5A853]">OUR 4 PILLARS OF RESPONSIBLE PRACTICE</span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#0B2536] font-bold mt-1">
                How we deliver true eco-consciousness.
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Pillars' },
                { id: 'sourcing', label: 'Farm Sourcing' },
                { id: 'extraction', label: 'Green Distillation' },
                { id: 'waste', label: 'Zero Waste' },
                { id: 'community', label: 'Community' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === tab.id
                      ? 'bg-[#0084C9] text-white shadow-md'
                      : 'bg-white text-[#0B2536] border border-[#0084C9]/20 hover:bg-[#0084C9]/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="glass-bay rounded-3xl p-8 border border-[#0084C9]/20 shadow-md glass-card-hover space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center border border-[#0084C9]/25">
                        <IconComp className="w-6 h-6 text-[#0084C9]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A853] bg-[#E5A853]/15 px-3 py-1 rounded-full border border-[#E5A853]/30">
                        {pillar.metrics}
                      </span>
                    </div>

                    <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536]">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0B2536] font-normal leading-relaxed">
                      {pillar.shortDesc}
                    </p>

                    <div className="border-t border-[#0084C9]/15 pt-4 space-y-2.5">
                      {pillar.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B2536] font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#0084C9] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audit Criteria & Operational Verification Table */}
        <div className="glass-bay rounded-3xl p-8 md:p-10 border border-[#0084C9]/25 shadow-md space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A853]">TRANSPARENT AUDIT MATRIX</span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#0B2536] font-bold mt-1">
              Sustainability & Operational Audit Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#162E3F] font-medium mt-1">
              Detailed operational status of parameters evaluated during quality and international trade compliance reviews.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#0B2536] border-collapse">
              <thead>
                <tr className="border-b border-[#0084C9]/20 bg-[#0084C9]/5">
                  <th className="p-4 font-bold uppercase tracking-wider text-[#0B2536]">Audit Area / Parameter</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[#0B2536]">Target Guideline</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[#0B2536]">Venuss Operational Practice</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[#0B2536]">Verification Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0084C9]/15">
                {auditChecklist.map((row, i) => (
                  <tr key={i} className="hover:bg-[#0084C9]/5 transition-colors">
                    <td className="p-4 font-bold text-[#0B2536]">{row.parameter}</td>
                    <td className="p-4 text-[#162E3F] font-normal">{row.standard}</td>
                    <td className="p-4 text-[#0B2536] leading-relaxed font-normal">{row.implementation}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#0084C9]/15 text-[#0084C9] border border-[#0084C9]/30">
                        <FileCheck className="w-3.5 h-3.5" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#072C42] via-[#0A3B59] to-[#051824] text-[#F2F7FA] rounded-3xl p-8 md:p-12 border border-[#0084C9]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif-editorial text-2xl md:text-3xl font-bold">
              Require batch-specific sustainability declarations?
            </h3>
            <p className="text-xs md:text-sm text-[#F2F7FA]/80 font-light">
              Our quality and regulatory team provides custom analytical disclosures, GC-MS reports, and botanical origin certification documentation for global industrial buyers.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/30 transition-all shadow-md flex items-center gap-2"
            >
              REQUEST COA & DECLARATION
              <ArrowRight className="w-4 h-4 text-[#E5A853]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SustainabilityPage;
