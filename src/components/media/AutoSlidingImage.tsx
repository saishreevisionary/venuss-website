import React, { useState, useEffect } from 'react';

interface AutoSlidingImageProps {
  images: string[];
  productName: string;
  categoryLabel?: string;
  extractionMethod?: string;
  intervalMs?: number;
}

export const AutoSlidingImage: React.FC<AutoSlidingImageProps> = ({
  images,
  productName,
  categoryLabel,
  extractionMethod,
  intervalMs = 3800,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fallback if images array is empty
  const displayImages = images && images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  ];

  // Auto-slide effect slowly transitioning between images
  useEffect(() => {
    if (displayImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [displayImages.length, intervalMs]);

  return (
    <div className="relative w-full h-52 overflow-hidden bg-[#072C42]/5 group">
      {/* Sliding Images Stack */}
      {displayImages.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${idx + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              loading="lazy"
            />
          </div>
        );
      })}

      {/* Gentle gradient overlay for high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-20 pointer-events-none" />

      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-none">
        {categoryLabel && (
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0084C9] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/50">
            {categoryLabel}
          </span>
        )}
        {extractionMethod && (
          <span className="px-2.5 py-1 rounded-full bg-[#072C42]/85 backdrop-blur-md text-[#E5A853] text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {extractionMethod}
          </span>
        )}
      </div>

      {/* Bottom Progress Indicator Dots */}
      {displayImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-30 pointer-events-none">
          {displayImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-5 bg-white shadow-sm'
                  : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSlidingImage;
