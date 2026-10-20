import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Play, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../../data/gallery';

interface GallerySectionProps {
  onViewFullGallery?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewFullGallery }) => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 bg-[#F2F7FA] border-b border-[#0084C9]/15 relative overflow-hidden text-[#0B2536]">
      
      {/* Background Decorative Ambient Blue Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0084C9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A853]">
              <Camera className="w-3.5 h-3.5" />
              FACILITY & BOTANICAL MEDIA
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B2536] font-bold">
              Inside Venuss.
            </h2>
            <p className="text-sm sm:text-base text-[#162E3F] max-w-xl font-normal leading-relaxed">
              General visual showcase of our Tamil Nadu production facility, distillation process videos, analytical laboratory, and quality inspection team.
            </p>
          </div>

          {onViewFullGallery && (
            <button
              onClick={onViewFullGallery}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0084C9] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006CA5] transition-colors self-start md:self-auto shadow-md"
            >
              EXPLORE GALLERY
            </button>
          )}
        </div>

        {/* Media Grid in Glass Bay Cards */}
        <div
          className={`grid gap-8 ${
            GALLERY_ITEMS.filter((i) => !i.isLandscape).length <= 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedMedia(item)}
              className={`group glass-bay rounded-3xl p-3 border border-[#0084C9]/20 hover:border-[#0084C9] shadow-sm hover:shadow-2xl transition-all cursor-pointer overflow-hidden flex flex-col justify-between glass-card-hover ${
                item.isLandscape ? 'col-span-full' : ''
              }`}
            >
              {/* Media Thumbnail Container */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden bg-[#072C42]/10 ${
                  item.isLandscape
                    ? 'aspect-[16/9] md:aspect-[21/9] max-h-[520px]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                {!item.hideText && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072C42]/95 via-[#072C42]/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                )}

                {/* Media Type Badge */}
                {!item.hideText && (
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#0084C9]/20 text-[10px] font-bold uppercase tracking-wider text-[#0B2536] flex items-center gap-1.5 shadow-sm">
                    {item.type === 'video' ? (
                      <Play className="w-3 h-3 text-[#E5A853] fill-[#E5A853]" />
                    ) : (
                      <Camera className="w-3 h-3 text-[#0084C9]" />
                    )}
                    <span>
                      {item.type === 'video'
                        ? 'Video Reel'
                        : item.isLandscape
                        ? 'Campus Facility Photo'
                        : 'Photo'}
                    </span>
                  </div>
                )}

                {/* Zoom Icon Button Overlay */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-[#0084C9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay on Image */}
                {!item.hideText && (
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#F2F7FA]/90 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A853]" />
                      {item.location}
                    </span>
                    <h3
                      className={`font-serif-editorial font-bold text-white leading-tight mt-1 ${
                        item.isLandscape
                          ? 'text-xl sm:text-2xl lg:text-3xl'
                          : 'text-lg'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072C42]/85 backdrop-blur-lg"
          >
            <div className="relative w-full max-w-4xl bg-[#F2F7FA] rounded-3xl border border-[#0084C9]/25 shadow-2xl overflow-hidden text-[#0B2536]">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-[#072C42] via-[#0A3B59] to-[#051824] text-white px-6 py-4 flex items-center justify-between border-b border-[#0084C9]/30">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E5A853] tracking-widest">
                    {selectedMedia.type === 'video' ? 'Facility Video' : 'Facility Photo'}
                  </span>
                  {!selectedMedia.hideText && (
                    <h3 className="font-serif-editorial text-xl font-bold">{selectedMedia.title}</h3>
                  )}
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Media Display Area */}
              <div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.mediaUrl}
                    controls
                    autoPlay
                    className="w-full aspect-[16/9] object-cover"
                  />
                ) : (
                  <div className="max-h-[75vh] w-full flex items-center justify-center p-2">
                    <img
                      src={selectedMedia.mediaUrl}
                      alt={selectedMedia.title || 'Facility Photo'}
                      className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Footer Caption Info */}
              {!selectedMedia.hideText && (
                <div className="p-6 bg-white space-y-2 border-t border-[#0084C9]/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0084C9]">
                    <MapPin className="w-4 h-4 text-[#E5A853]" />
                    <span>{selectedMedia.location}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#0B2536] leading-relaxed font-normal">
                    {selectedMedia.caption}
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;
