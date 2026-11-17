'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import IntroMask from '@/components/IntroMask';

interface WelcomeScreenProps {
  enterTargetId?: string;
  isStandalone?: boolean;
}

export default function WelcomeScreen({
  enterTargetId = 'portfolio',
  isStandalone = false,
}: WelcomeScreenProps) {
  // Mode toggle: 'gf' for 100% exact 1:1 Gray & Farrar clone; 'sensation' for Sensation Infracon adaptation
  const [brandMode, setBrandMode] = useState<'gf' | 'sensation'>('sensation');
  const [maskDone, setMaskDone] = useState(false);

  const handleEnterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isStandalone) {
      e.preventDefault();
      const el = document.getElementById(enterTargetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 1. THE SIGNATURE 1:1 BLACK CURTAIN INTRO MASK ANIMATION */}
      <IntroMask onComplete={() => setMaskDone(true)} brandMode={brandMode} />

      {/* 2. THE WELCOME SCREEN CANVAS */}
      <div className="min-h-screen w-full flex flex-col justify-between items-center py-8 sm:py-12 px-4 relative select-none bg-[#E9E9E9] bg-[url('/images/bg-pattern-grey.png')] bg-[length:1100px_30px]">
        {/* Header with Centered Brand Insignia & Strapline */}
        <header className="w-full flex flex-col items-center justify-center pt-2 sm:pt-4">
          <div className="flex flex-col items-center text-center">
            {brandMode === 'gf' ? (
              <a
                href={isStandalone ? '/#portfolio' : `#${enterTargetId}`}
                onClick={handleEnterClick}
                className="inline-block focus:outline-none"
                aria-label="Gray &amp; Farrar"
              >
                <div className="relative w-[280px] h-[75px] sm:w-[340px] sm:h-[85px]">
                  <Image
                    src="/images/logo-full-with-strapline-grey_gold.png"
                    alt="Gray &amp; Farrar"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </a>
            ) : (
              <a
                href={isStandalone ? '/#portfolio' : `#${enterTargetId}`}
                onClick={handleEnterClick}
                className="flex flex-col items-center focus:outline-none"
                aria-label="Sensation Infracon"
              >
                <div className="relative w-10 h-12 sm:w-12 sm:h-14 mb-2.5">
                  <Image
                    src="/images/logo.webp"
                    alt="Sensation Infracon"
                    width={48}
                    height={56}
                    priority
                    className="object-contain mx-auto"
                  />
                </div>
                <span className="block font-heading text-lg sm:text-xl font-bold tracking-[0.2em] text-[#13284A] uppercase">
                  Sensation Infracon
                </span>
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-[#B38B2E] uppercase font-medium mt-1">
                  Private Land Development &amp; Capital Partner · Hyderabad
                </span>
              </a>
            )}
          </div>
        </header>

        {/* Centered Editorial Box (max-w 590px, exact 1:1 typography) */}
        <main className="w-full max-w-[590px] mx-auto text-center my-auto py-8 sm:py-10">
          {brandMode === 'gf' ? (
            <div className="space-y-5 sm:space-y-6 font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[21px] sm:leading-[23px]">
              <p>
                Our clients belong to an unashamedly select group of international people. They expect the best and we don’t disappoint.
              </p>

              <p>
                Quintessentially British but with a truly global reach, our approach is reassuringly traditional with personal service and attentiveness at its very core. We don’t do digital anything. Our matchmaking simply relies on human expertise, experience and knowing the right people. This has resulted in a private client list and a global reputation that is as exceptional as our success rate.
              </p>

              <p>
                Our acceptance process is rigorous and we are certainly not right for everyone. We are as selective about who we choose to work for as our clients are in their choice of partner.
              </p>

              <p className="text-[#13284A] font-semibold">
                Compromise is simply not an option. For them, or us.
              </p>
            </div>
          ) : (
            <div className="space-y-5 sm:space-y-6 font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[21px] sm:leading-[23px]">
              <p>
                Our clients belong to an unashamedly select group of investors, landowners and institutional partners. They expect the best and we don’t disappoint.
              </p>

              <p>
                Quintessentially grounded but with a national reach, our approach is reassuringly traditional with personal due diligence and attentiveness at its very core. We don’t do speculative shortcuts. Our value creation simply relies on cadastral precision, in-house due diligence and knowing the right landowners. This has resulted in a private land bank and a reputation that is as exceptional as our track record.
              </p>

              <p>
                Our acceptance process is rigorous and we are certainly not right for everyone. We are as selective about who we choose to partner with as our clients are in their choice of capital allocation.
              </p>

              <p className="text-[#13284A] font-semibold">
                Compromise is simply not an option. For them, or us.
              </p>
            </div>
          )}

          {/* 3. The Signature 90x90px Circular SVG "ENTER" Button with Patterned Gold Ring */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href={isStandalone ? '/#portfolio' : `#${enterTargetId}`}
              onClick={handleEnterClick}
              className="group relative w-[90px] h-[90px] rounded-full flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-105"
              aria-label="Enter site"
            >
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <pattern id="btnPattern" patternUnits="userSpaceOnUse" width="90" height="90">
                    <image xlinkHref="/images/btn-circle.png" width="90" height="90" />
                  </pattern>
                </defs>

                {/* Subtle base guide circle */}
                <circle
                  cx="45"
                  cy="45"
                  r="40"
                  stroke="#DCE2DE"
                  strokeWidth="1.5"
                  fill="transparent"
                />

                {/* Animated Gold Pattern Circle Stroke */}
                <circle
                  cx="45"
                  cy="45"
                  r="40"
                  stroke="url(#btnPattern)"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  fill="transparent"
                  className="animate-circle-border"
                />
              </svg>

              {/* Centered Typography: "Enter" */}
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#ba9168] group-hover:text-[#13284A] font-medium transition-colors duration-200 z-10">
                Enter
              </span>
            </a>
          </div>
        </main>

        {/* Footer with Discreet View Toggle */}
        <footer className="w-full flex items-center justify-between px-2 sm:px-6 pt-4 text-[10px] font-mono tracking-luxury uppercase text-[#505454]/60">
          <div>
            <span>1:1 Clone Engine</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBrandMode(brandMode === 'gf' ? 'sensation' : 'gf')}
              className="px-3 py-1 rounded-full border border-[#ba9168]/40 hover:border-[#ba9168] text-[#ba9168] hover:text-[#13284A] transition-colors focus:outline-none bg-white/40"
            >
              {brandMode === 'gf'
                ? 'Switch to Sensation Infracon Copy →'
                : '← Switch to Gray & Farrar Original'}
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
