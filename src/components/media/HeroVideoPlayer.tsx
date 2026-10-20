import React, { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import heroVideoUrl from '../../assets/hero_video.mp4';

export const HeroVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video autoplay error:', err);
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black group border border-[#0084C9]/25 shadow-xl">
      
      {/* Ambient Looping Venuss Facility Extraction Video */}
      <video
        ref={videoRef}
        src={heroVideoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Cinematic Sapphire & Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#072C42]/70 via-black/10 to-transparent pointer-events-none" />

      {/* Bottom Information HUD Overlay */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 p-2.5 sm:p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#0084C9]/20 shadow-lg flex items-center justify-between z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0084C9] text-white flex items-center justify-center font-bold shadow-sm shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
          </div>
          <div>
            <span className="block text-[11px] sm:text-xs font-bold text-[#0B2536]">Venuss Facility Extraction Reel</span>
            <span className="block text-[9px] sm:text-[10px] text-[#456375]">Seithur Facility • Live Production Plant</span>
          </div>
        </div>

        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E5A853] px-2.5 py-0.5 rounded-full bg-[#F2F7FA] border border-[#0084C9]/20 shrink-0">
          HD LIVE REEL
        </span>
      </div>

    </div>
  );
};

export default HeroVideoPlayer;
