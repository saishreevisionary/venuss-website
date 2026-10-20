import { type Product } from './products';

// Mapping of high quality product botanical and product specimen images
export const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  // 1. Essential Oils
  'betel-leaf-oil': [
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80', // Fresh green leaves
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Essential oil vial
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Distillation unit
  ],
  'davana-oil': [
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', // Aromatic Artemisia herb
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Amber bottle oil
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // Lab analysis
  ],
  'palmarosa-oil': [
    'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80', // Wild green grass harvest
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Distilled pure oil
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80', // Distillation steam plant
  ],

  // 2. Spice Oils
  'basil-oil': [
    'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=800&q=80', // Fresh sweet basil leaves
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Basil pure oil
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Processing plant
  ],
  'cardamom-oil': [
    'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80', // Green cardamom pods
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Cardamom steam-distilled oil
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // Lab assay
  ],
  'celery-oil': [
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80', // Celery seeds and botanicals
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Celery oil extract
  ],
  'cumin-oil': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Whole cumin seeds
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Cumin spice oil
  ],
  'curry-leaf-oil': [
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', // Fresh curry leaves
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Curry leaf pure distillate
  ],
  'ginger-oil': [
    'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80', // Fresh ginger rhizome
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Warm golden ginger oil
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80', // Distillation setup
  ],
  'mace-oil': [
    'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80', // Mace aril and nutmeg spices
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Clear mace oil
  ],
  'nutmeg-oil': [
    'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80', // Whole nutmeg seeds
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Nutmeg liquid oil
  ],
  'onion-oil': [
    'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80', // Fresh red onions
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Distilled onion oil
  ],

  // 3. Spice Oleoresins
  'cardamom-oleoresin': [
    'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80', // Cardamom seeds
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80', // Oleoresin viscous concentrate
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Solvent extraction unit
  ],
  'cumin-oleoresin': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Cumin seeds
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80', // Resinous dark concentrate
  ],
  'celery-oleoresin': [
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80', // Celery seeds
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80', // Dark oleoresin liquid
  ],
  'turmeric-oleoresin': [
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', // Fresh turmeric roots
    'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80', // High curcumin oleoresin paste
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // Lab spectrophotometry
  ],
  'saffron-oleoresin': [
    'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80', // Saffron crocus filaments
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80', // Golden saffron resin
  ],

  // 4. Floral Concretes
  'jasmine-grandiflorum-concrete': [
    'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80', // Fresh blooming Jasmine Grandiflorum
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', // Waxy concrete solid
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Extraction vessels
  ],
  'jasmine-sambac-concrete': [
    'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80', // White Jasmine Sambac (Mogra) flowers
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', // Floral concrete waxy mass
  ],
  'tuberose-concrete': [
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80', // Fragrant white tuberose stalks
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', // Waxy tuberose mass
  ],

  // 5. Floral Absolutes
  'jasmine-grandiflorum-absolute': [
    'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80', // Jasmine flower harvest
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Deep reddish-brown absolute
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // GC-MS purity test
  ],
  'jasmine-sambac-absolute': [
    'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80', // Fresh Sambac blossom
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Viscous golden absolute
  ],
  'tuberose-absolute': [
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80', // Fresh tuberose blooms
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', // Precious liquid absolute
  ],

  // 6. Spice Powders
  'cardamom-powder': [
    'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80', // Whole green cardamom
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Finely milled cardamom powder
  ],
  'cumin-powder': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Cumin seeds & fine powder
  ],
  'saffron-powder': [
    'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80', // Saffron crocus
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', // Golden saffron powder
  ],
  'turmeric-powder': [
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', // Turmeric roots & vibrant golden powder
  ],
};

// Default fallback images for each category
export const CATEGORY_FALLBACK_IMAGES: Record<string, string[]> = {
  'essential-oils': [
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
  ],
  'spice-oils': [
    'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  ],
  'spice-oleoresins': [
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
  ],
  'floral-concretes': [
    'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
  ],
  'floral-absolutes': [
    'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  ],
  'spice-powders': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  ],
};

export const getProductImages = (product: Product): string[] => {
  if (product.images && product.images.length > 0) return product.images;
  if (PRODUCT_IMAGE_MAP[product.id]) return PRODUCT_IMAGE_MAP[product.id];
  if (product.image) return [product.image];
  if (CATEGORY_FALLBACK_IMAGES[product.category]) return CATEGORY_FALLBACK_IMAGES[product.category];
  return ['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80'];
};
