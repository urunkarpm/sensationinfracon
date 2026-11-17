'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface LogoSliceIntroProps {
  onComplete?: () => void;
}

export default function LogoSliceIntro({ onComplete }: LogoSliceIntroProps) {
  // Animation phases:
  // 'entering' -> Logo scales and fades in smoothly (0ms - 800ms)
  // 'split'    -> Logo slices down the middle and halves smoothly glide apart (800ms - 1300ms)
  // 'opening'  -> Panels glide outward smoothly revealing the page (1300ms - 2200ms)
  // 'done'     -> Completely unmounted from DOM
  const [phase, setPhase] = useState<'entering' | 'split' | 'opening' | 'done'>('entering');
  const [mounted, setMounted] = useState(false);

  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  const completedRef = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Clear all pending timeouts
  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    clearAllTimers();
    // Restore body scroll
    document.body.style.overflow = '';
    setPhase('done');
    if (onComplete) onComplete();
  }, [clearAllTimers, onComplete]);

  // Smooth fast-forward skip on click, key, or scroll
  const handleSkip = useCallback(() => {
    if (completedRef.current || phaseRef.current === 'done') return;
    clearAllTimers();
    setPhase('opening');
    const skipTimer = setTimeout(() => {
      handleFinish();
    }, 450);
    timersRef.current.push(skipTimer);
  }, [clearAllTimers, handleFinish]);

  // Main lifecycle: runs ONCE on mount with empty deps to avoid teardown/restart loops
  useEffect(() => {
    if (completedRef.current) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleFinish();
      return;
    }

    // Lock body scroll during intro presentation
    document.body.style.overflow = 'hidden';

    // 0. Trigger smooth fade-in after initial mount
    const timerMount = setTimeout(() => {
      setMounted(true);
    }, 30);
    timersRef.current.push(timerMount);

    // 1. Smooth slice: logo halves separate at 800ms
    const timerSplit = setTimeout(() => {
      setPhase('split');
    }, 800);
    timersRef.current.push(timerSplit);

    // 2. Door panels slide open smoothly at 1300ms
    const timerOpen = setTimeout(() => {
      setPhase('opening');
      // Re-enable body scroll as panels start opening
      document.body.style.overflow = '';
    }, 1300);
    timersRef.current.push(timerOpen);

    // 3. Conclude animation and unmount cleanly at 2200ms
    const timerDone = setTimeout(() => {
      handleFinish();
    }, 2200);
    timersRef.current.push(timerDone);

    // Escape listeners: click, scroll wheel, or keyboard
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Escape', ' ', 'Enter', 'ArrowDown'].includes(e.key)) {
        handleSkip();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 15) {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      clearAllTimers();
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [clearAllTimers, handleFinish, handleSkip]);

  if (phase === 'done' || completedRef.current) return null;

  const isEntering = phase === 'entering';
  const isSplit = phase === 'split' || phase === 'opening';
  const isOpening = phase === 'opening';

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] overflow-hidden select-none cursor-pointer transition-opacity duration-300 ${
        isOpening ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      role="banner"
      aria-hidden={isOpening}
      aria-label="Sensation Infracon introduction animation"
    >
      {/* ========================================================
          LEFT PANEL (covers 0 to 50% of viewport)
          Glides smoothly to the left on opening
          ======================================================== */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
          isOpening ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          background: '#090D16',
        }}
      >
        {/* Full-viewport canvas spanning 200% width of parent (= 100% viewport width) */}
        <div className="absolute top-0 left-0 w-[200%] h-full pointer-events-none">
          {/* Logo container placed at 50% of viewport width */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform ${
              isSplit
                ? '-translate-x-[calc(50%+35px)] sm:-translate-x-[calc(50%+45px)]'
                : '-translate-x-1/2'
            } ${isSplit ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoIcon />
          </div>
        </div>
      </div>

      {/* ========================================================
          RIGHT PANEL (covers 50% to 100% of viewport)
          Glides smoothly to the right on opening
          ======================================================== */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
          isOpening ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          background: '#090D16',
        }}
      >
        {/* Full-viewport canvas spanning 200% width of parent (= 100% viewport width) */}
        <div className="absolute top-0 right-0 w-[200%] h-full pointer-events-none">
          {/* Logo container placed at 50% of viewport width */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform ${
              isSplit
                ? '-translate-x-[calc(50%-35px)] sm:-translate-x-[calc(50%-45px)]'
                : '-translate-x-1/2'
            } ${isSplit ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoIcon />
          </div>
        </div>
      </div>

      {/* ========================================================
          UNIFIED CENTER LOGO (Active during 'entering')
          Ensures 100% seamless, crisp appearance before slice
          ======================================================== */}
      {isEntering && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <LogoIcon />
        </div>
      )}
    </div>
  );
}

/**
 * Pure company logo with zero text.
 */
function LogoIcon() {
  return (
    <div className="relative w-36 h-40 sm:w-48 sm:h-52 md:w-56 md:h-60 flex items-center justify-center select-none">
      <Image
        src="/images/logo.png"
        alt="Sensation Infracon"
        width={224}
        height={240}
        priority
        className="object-contain"
      />
    </div>
  );
}
