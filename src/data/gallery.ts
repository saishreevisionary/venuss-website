export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl: string;
  caption: string;
  location: string;
  isLandscape?: boolean;
  hideText?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Primary Facility Campus (Main Landscape - Clean, No Text Overlay)
  {
    id: 'campus-facility-landscape',
    title: 'Corporate Campus & Distillation Facility',
    type: 'image',
    mediaUrl: '/assets/1.JPG',
    thumbnailUrl: '/assets/1.JPG',
    caption: 'Official entrance and processing campus of Venuss Herbo Aromatics Private Limited at Muhavoor Road, Seithur, Tamil Nadu.',
    location: 'Muhavoor Road, Seithur, Tamil Nadu',
    isLandscape: true,
    hideText: true,
  },
  // Distillation Vessels (Small Grid Card - Clean, No Text)
  {
    id: 'facility-vessels-portrait',
    title: 'Distillation Vessels & Extraction Unit',
    type: 'image',
    mediaUrl: '/assets/3.JPG',
    thumbnailUrl: '/assets/3.JPG',
    caption: 'Industrial steam distillation vessels, extraction tanks, and condenser piping at Seithur facility.',
    location: 'Seithur Facility',
    hideText: true,
  },
  // Cooling Tower & Utility Plant (Landscape in Small Grid - Clean, No Text)
  {
    id: 'cooling-tower-landscape',
    title: 'Cooling Tower & Auxiliary Utility Plant',
    type: 'image',
    mediaUrl: '/assets/4.JPG',
    thumbnailUrl: '/assets/4.JPG',
    caption: 'Continuous water cooling tower and circulation system supporting condensation and low-temperature extraction at Seithur facility.',
    location: 'Seithur Facility',
    hideText: true,
  },
];
