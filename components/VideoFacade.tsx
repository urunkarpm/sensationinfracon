'use client';

import React, { useState } from 'react';

interface VideoFacadeProps {
  videoId?: string;
  title?: string;
}

export default function VideoFacade({
  videoId = 'g4SHLYYno60',
  title = 'Sensation Infracon Developer Presentation',
}: VideoFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl border border-mist bg-[#13284A] overflow-hidden flex items-center justify-center">
      {/* Corner crosshairs */}
      <span className="absolute top-3 left-3 text-xs font-mono text-mist/60 z-20">+</span>
      <span className="absolute top-3 right-3 text-xs font-mono text-mist/60 z-20">+</span>
      <span className="absolute bottom-3 left-3 text-xs font-mono text-mist/60 z-20">+</span>
      <span className="absolute bottom-3 right-3 text-xs font-mono text-mist/60 z-20">+</span>

      {isLoaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-paper relative">
          {/* Subtle architectural background linework */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #DCE2DE 1px, transparent 1px), linear-gradient(to bottom, #DCE2DE 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="z-10 flex flex-col items-center max-w-md">
            <span className="text-[11px] font-mono text-brass uppercase tracking-widest mb-3">
              Corporate video brief
            </span>
            <h4 className="font-heading text-lg sm:text-2xl font-semibold mb-6">
              Sensation Infracon overview & vision
            </h4>

            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="group flex items-center gap-3 bg-brass text-paper hover:bg-brass/90 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
              aria-label={`Play presentation video: ${title}`}
            >
              <span className="w-6 h-6 rounded-full bg-paper/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                ▶
              </span>
              Load & watch presentation
            </button>

            <span className="text-[10px] text-paper/60 font-mono mt-4">
              Click to load YouTube player (privacy-enhanced mode)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
