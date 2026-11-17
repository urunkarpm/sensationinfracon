import React from 'react';

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1"
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = '16/9',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative w-full bg-[#E5E9E6] border border-mist flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Cadastral corner crosshairs */}
      <span className="absolute top-2 left-2 text-[10px] font-mono text-text/40">+</span>
      <span className="absolute top-2 right-2 text-[10px] font-mono text-text/40">+</span>
      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-text/40">+</span>
      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-text/40">+</span>

      {/* Cadastral diagonal subtle guide */}
      <div className="flex flex-col items-center justify-center z-10 max-w-[85%]">
        <div className="w-6 h-6 mb-2 border border-text/30 flex items-center justify-center text-[10px] font-mono text-text/50">
          PLT
        </div>
        <span className="font-heading text-xs sm:text-sm font-medium text-text/80 leading-snug">
          {label}
        </span>
        <span className="font-mono text-[10px] text-text/50 mt-1 uppercase tracking-wider">
          Architectural placeholder
        </span>
      </div>
    </div>
  );
}
