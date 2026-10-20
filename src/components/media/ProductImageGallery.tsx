import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  categoryLabel?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
  categoryLabel,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // If no images provided, render a fallback placeholder
  const displayImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
  ];

  const currentImage = displayImages[activeIndex] || displayImages[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Image Showcase */}
      <div 
        className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#072C42]/5 border border-[#0084C9]/25 shadow-inner group cursor-pointer"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img
          src={currentImage}
          alt={`${productName} view ${activeIndex + 1}`}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
            isZoomed ? 'scale-125' : 'group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Gradient Overlay for aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#072C42]/70 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0084C9] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/40">
            {categoryLabel || 'Product Specimen'}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#072C42]/80 backdrop-blur-md text-white/90 text-[10px] font-semibold flex items-center gap-1.5">
            <ImageIcon className="w-3 h-3 text-[#E5A853]" />
            {activeIndex + 1} / {displayImages.length}
          </span>
        </div>

        {/* Zoom Hint Icon */}
        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-md text-[#072C42] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-4 h-4" />
        </div>

        {/* Bottom Caption */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none text-white">
          <h4 className="font-serif-editorial text-lg md:text-xl font-bold drop-shadow-md">
            {productName}
          </h4>
          <span className="text-xs text-white/80 drop-shadow-sm font-light">
            Click image to {isZoomed ? 'reset zoom' : 'zoom'}
          </span>
        </div>

        {/* Navigation Arrows (if multiple images) */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B2536] shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-[#0084C9]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B2536] shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-[#0084C9]" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Strip */}
      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {displayImages.map((img, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsZoomed(false);
                }}
                className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-[#0084C9] ring-2 ring-[#0084C9]/40 scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-[#0084C9]/40'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
