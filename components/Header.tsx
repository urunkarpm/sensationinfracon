'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import FullscreenMenu from '@/components/FullscreenMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Listen for global custom open-slide-menu event
  useEffect(() => {
    const handleOpen = () => setIsMenuOpen(true);
    const handleToggle = () => setIsMenuOpen((prev) => !prev);
    window.addEventListener('open-slide-menu', handleOpen);
    window.addEventListener('toggle-slide-menu', handleToggle);
    return () => {
      window.removeEventListener('open-slide-menu', handleOpen);
      window.removeEventListener('toggle-slide-menu', handleToggle);
    };
  }, []);

  // Suppress completely on the dedicated welcome page
  if (pathname === '/welcome') {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-[#F5F6F2]/95 backdrop-blur-md border-b border-mist/80 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between relative">
          {/* Left: Private Advisory Desk shortcut */}
          <div className="w-1/4 hidden md:flex items-center">
            <Link
              href="/contact"
              className="font-mono text-[10px] tracking-luxury uppercase text-[#505454]/80 hover:text-[#ba9168] transition-colors"
            >
              Private Advisory Desk
            </Link>
          </div>

          {/* Center: Sensation Infracon Brand Logo & Strapline */}
          <div className="flex-1 md:w-2/4 flex items-center justify-center text-center">
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none py-1"
              aria-label="Sensation Infracon Home"
            >
              <div className="relative w-9 h-10 sm:w-11 sm:h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sensation Infracon Emblem"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-[#13284A] leading-tight">
                  Sensation Infracon
                </span>
                <span className="font-mono text-[8.5px] sm:text-[9.5px] tracking-luxury uppercase text-[#ba9168] font-medium">
                  Private Land Advisory &amp; Capital
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Navigation Drawer Menu Hamburger */}
          <div className="w-1/4 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="group flex flex-col items-center justify-center py-1 px-2 hover:opacity-85 transition-opacity focus:outline-none cursor-pointer"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {/* 3-bar slider hamburger icon */}
              <div className="relative w-[30px] h-[18px] flex flex-col justify-between items-center">
                {/* Top bar */}
                <span
                  className={`block h-[2px] w-[30px] bg-[#ba9168] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-y-[8px] rotate-45' : ''
                  }`}
                />
                {/* Middle bar */}
                <span
                  className={`block h-[2px] w-[30px] bg-[#ba9168] transition-all duration-200 ease-in-out ${
                    isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                {/* Bottom bar */}
                <span
                  className={`block h-[2px] w-[30px] bg-[#ba9168] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''
                  }`}
                />
              </div>

              {/* Hamburger title */}
              <span
                className={`font-mono text-[9px] tracking-[0.16em] uppercase text-[#ba9168] mt-1 font-medium transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0 select-none' : 'opacity-100'
                }`}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas Slide Menu Drawer */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
