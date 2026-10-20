export interface Certification {
  id: string;
  code: string;
  title: string;
  issuingBody: string;
  category: string;
  description: string;
  validityStatus: 'Active Verification Badge' | 'Listed on Record';
  certNumberPlaceholder?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
    issuingBody: 'International Organization for Standardization',
    category: 'Quality Systems',
    description: 'Ensures structured quality management, standard operating procedures, and continuous process optimization across all manufacturing facilities.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. IS-9001-VEN-2015'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    title: 'Environmental Management System',
    issuingBody: 'International Organization for Standardization',
    category: 'Sustainability & Environment',
    description: 'Validates strict compliance with environmental protection, waste reduction, emission control, and sustainable resource management.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. EV-14001-VEN-2015'
  },
  {
    id: 'ohsas-18001',
    code: 'OHSAS 18001:2007',
    title: 'Occupational Health & Safety',
    issuingBody: 'Occupational Health & Safety Advisory Board',
    category: 'Workplace Safety',
    description: 'Standard for maintaining clean, ergonomic, and safe manufacturing conditions for laboratory and extraction plant staff.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. OHS-18001-VEN-2007'
  },
  {
    id: 'fssc-22000',
    code: 'FSSC 22000',
    title: 'Food Safety System Certification',
    issuingBody: 'Foundation for Food Safety Certification',
    category: 'Food Safety',
    description: 'Robust food safety framework covering hazard analysis, critical control points (HACCP), and global hygiene standards.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. FSSC-22K-VEN'
  },
  {
    id: 'spice-board-srm',
    code: 'SPICE BOARD / SRM 8000',
    title: 'Spices Board India Registration',
    issuingBody: 'Spices Board, Ministry of Commerce & Industry',
    category: 'Export Compliance',
    description: 'Government recognized exporter certification ensuring quality testing, phytosanitary standards, and authentic Indian origin.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. SBI-EXP-8000'
  },
  {
    id: 'halal',
    code: 'HALAL CERTIFIED',
    title: 'Halal Quality Compliance',
    issuingBody: 'Halal Certification Board',
    category: 'Religious & Dietary Standard',
    description: 'Guarantees that extraction methods, solvents, and raw botanical sourcing strictly comply with global Halal dietary requirements.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. HAL-VEN-882'
  },
  {
    id: 'kosher',
    code: 'KOSHER CERTIFIED',
    title: 'Kosher Quality Standard',
    issuingBody: 'Kosher Certification Council',
    category: 'Religious & Dietary Standard',
    description: 'Verifies purity, absence of cross-contamination, and strict adherence to Kosher food and ingredient manufacturing rules.',
    validityStatus: 'Listed on Record',
    certNumberPlaceholder: 'Cert No. KSH-VEN-991'
  }
];
