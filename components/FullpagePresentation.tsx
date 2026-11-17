'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlotSurveyHero from '@/components/PlotSurveyHero';
import EnquiryForm from '@/components/EnquiryForm';

interface FullpagePresentationProps {
  onOpenMenu?: () => void;
}

export default function FullpagePresentation({
  onOpenMenu,
}: FullpagePresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides && !isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentSlide(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 900);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    } else {
      // Loop or go to contact
      goToSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent default browser jump to ensure smooth fullpage snap
      if (Math.abs(e.deltaY) > 25 && !isTransitioning.current) {
        if (e.deltaY > 0) {
          if (currentSlide < totalSlides - 1) {
            e.preventDefault();
            nextSlide();
          }
        } else {
          if (currentSlide > 0) {
            e.preventDefault();
            prevSlide();
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 50 && !isTransitioning.current) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-paper bg-[#F5F6F2] select-none">
      {/* ========================================================
          SLIDES WRAPPER (Transform-based 100vh viewport slider)
          ======================================================== */}
      <div
        className="w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {/* ========================================================
            SLIDE 01: "London calling" (Left Text, Right Visual)
            ======================================================== */}
        <section className="w-full h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-16 pt-20 pb-16">
          <div
            className={`max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              currentSlide === 0 ? 'slide-content-visible' : 'slide-content-hidden'
            }`}
          >
            {/* Left Content Box */}
            <div className="text-center space-y-6 max-w-lg mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#505454] font-normal tracking-tight leading-[1.1]">
                Hyderabad <span className="text-[#ba9168]">calling</span>
              </h2>

              <p className="font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[22px] sm:leading-[24px]">
                WE ARE A PREMIER REAL ESTATE AND CAPITAL DEVELOPMENT ADVISORY WITH A NATIONAL REACH AND A SELECT PRIVATE CLIENTELE. OUR HEADQUARTERS IS A DISCREET DESK IN BANJARA HILLS, HYDERABAD, BUT OUR DISCERNING INVESTORS ARE TRULY COSMOPOLITAN, ACQUIRING STRATEGIC ASSETS ACROSS INDIA’S HIGH-GROWTH REGIONS. OUR NETWORK MAY BE EXCLUSIVE, BUT IT KNOWS NO BORDERS.
              </p>
            </div>

            {/* Right Visual Box */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-[480px] p-6 rounded-2xl bg-white/70 border border-mist shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-mist text-[10px] font-mono text-[#505454] tracking-luxury uppercase">
                  <span>[CADASTRE 01]</span>
                  <span className="text-[#ba9168]">Master Plot Drawing</span>
                </div>
                <PlotSurveyHero />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SLIDE 02: "It can be lonely at the top" (Left Visual, Right Text)
            ======================================================== */}
        <section className="w-full h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-16 pt-20 pb-16">
          <div
            className={`max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              currentSlide === 1 ? 'slide-content-visible' : 'slide-content-hidden'
            }`}
          >
            {/* Left Visual Box (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 lg:order-1 w-full flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[16/11] rounded-2xl overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/Untitled-design-25-1024x427.webp"
                  alt="Master Land Parcels"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Box */}
            <div className="order-1 lg:order-2 text-center space-y-6 max-w-lg mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#505454] font-normal tracking-tight leading-[1.1]">
                Uncompromising <span className="text-[#ba9168]">due diligence</span>
              </h2>

              <p className="font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[22px] sm:leading-[24px]">
                OUR CLIENTS DON’T COMPROMISE AND NEITHER DO WE. OUR SELECTION PROCESS IS RIGOROUS — RUTHLESS, EVEN — AND HAS RESULTED IN A PRIVATE LAND BANK THAT IS THE ENVY OF MANY. HIGH-ACHIEVING, HIGH-PERFORMING, AND WITH MEASURED CAPITAL PRESERVATION AS THEIR PRIORITY, OUR PARTNERS ARE PART OF A SELECT GROUP WHERE EQUALS ARE FEW AND FAR BETWEEN. WE SAFEGUARD THEIR CAPITAL AND EXECUTE VALUE SELECTIVELY, SEAMLESSLY AND DISCREETLY.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            SLIDE 03: "A wealth of experience" (Left Text, Right Visual)
            ======================================================== */}
        <section className="w-full h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-16 pt-20 pb-16">
          <div
            className={`max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              currentSlide === 2 ? 'slide-content-visible' : 'slide-content-hidden'
            }`}
          >
            {/* Left Content Box */}
            <div className="text-center space-y-6 max-w-lg mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#505454] font-normal tracking-tight leading-[1.1]">
                A wealth <span className="text-[#ba9168]">of experience</span>
              </h2>

              <p className="font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[22px] sm:leading-[24px]">
                SENSATION INFRACON IS A DISCREET DEVELOPMENT AND CAPITAL INSTITUTION. WITH EXTENSIVE COMBINED LEADERSHIP IN LAND ACQUISITION, CLEAR-TITLE DUE DILIGENCE, AND HIGH-YIELD ASSET STRUCTURING, WE ARE RECOGNIZED AS PIONEERS OF THE JOINT DEVELOPMENT FRAMEWORK. COUPLED WITH OUR RIGOROUS IN-HOUSE LEGAL PROTOCOLS, OUR PEDIGREE AND FLAWLESS DELIVERY RECORD HAVE SEEN US WELCOMED BY INDIA’S MOST REPUTED LANDOWNERS.
              </p>
            </div>

            {/* Right Visual Box */}
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[16/11] rounded-2xl overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/from-renting-to-owning-mumbais-real-etate-revolution-1-1024x427.webp"
                  alt="Institutional Capital Exits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SLIDE 04: "Tangible, not speculative..." (Left Visual, Right Text)
            ======================================================== */}
        <section className="w-full h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-16 pt-20 pb-16">
          <div
            className={`max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              currentSlide === 3 ? 'slide-content-visible' : 'slide-content-hidden'
            }`}
          >
            {/* Left Visual Box */}
            <div className="order-2 lg:order-1 w-full flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[16/11] rounded-2xl overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/goa-getaways-your-real-estate-escape-plan-1-1024x427.webp"
                  alt="Hospitality and Retreat Sanctuaries"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Box */}
            <div className="order-1 lg:order-2 text-center space-y-6 max-w-lg mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#505454] font-normal tracking-tight leading-[1.1]">
                Tangible, <span className="text-[#ba9168]">not speculative...</span>
              </h2>

              <p className="font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[22px] sm:leading-[24px]">
                SENSATION INFRACON IS ABOUT REAL LAND, TANGIBLE ASSETS AND STATUTORY SECURITY. NO SPECULATIVE APPS OR ALGORITHMIC COMMISSIONS. WE ARE THE VERY OPPOSITE OF THE FACELESS IMPERSONALITY OF GENERIC BROKERAGE. WE BELIEVE IN TRADITIONAL FACE-TO-FACE ENGAGEMENT, RIGOROUS PHYSICAL VERIFICATION, AND SAFEGUARDING OUR PARTNERS’ CAPITAL AT ALL COSTS.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            SLIDE 05: Private Advisory & Direct Form
            ======================================================== */}
        <section className="w-full h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-16 pt-20 pb-16">
          <div
            className={`max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
              currentSlide === 4 ? 'slide-content-visible' : 'slide-content-hidden'
            }`}
          >
            {/* Left: Contact Info */}
            <div className="text-center lg:text-left space-y-6 max-w-lg mx-auto lg:mx-0">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#505454] font-normal tracking-tight leading-[1.1]">
                Private <span className="text-[#ba9168]">advisory</span>
              </h2>

              <p className="font-mono text-xs sm:text-[12.5px] uppercase tracking-[0.08em] text-[#505454] leading-[22px] sm:leading-[24px]">
                DIRECT PRINCIPAL ENGAGEMENT. INITIATE A CONFIDENTIAL ENQUIRY TO DISCUSS BESPOKE ALLOCATIONS, JOINT DEVELOPMENTS OR REGIONAL CORRIDOR STRATEGIES.
              </p>

              <div className="p-6 rounded-2xl bg-white/70 border border-mist text-left space-y-2">
                <span className="font-mono text-[10px] text-[#ba9168] tracking-luxury uppercase block font-medium">
                  Direct Private Desk
                </span>
                <p className="font-heading text-xl font-bold text-[#13284A]">
                  Sensation Infracon Pvt. Ltd.
                </p>
                <p className="font-mono text-xs text-[#505454]">
                  Banjara Hills, Hyderabad · Mumbai · Bengaluru · Dubai
                </p>
                <div className="pt-2 flex gap-3">
                  <a
                    href="https://wa.me/919885333333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#13284A] hover:bg-[#ba9168] text-white rounded-full text-[11px] font-mono tracking-luxury uppercase transition-colors"
                  >
                    WhatsApp Desk ↗
                  </a>
                  <a
                    href="tel:+919885333333"
                    className="px-5 py-2.5 border border-mist hover:border-[#13284A] text-[#13284A] rounded-full text-[11px] font-mono tracking-luxury uppercase transition-colors"
                  >
                    Call Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Direct Form */}
            <div className="w-full max-w-lg mx-auto">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          RIGHT SIDE NAVIGATION DOTS
          ======================================================== */}
      <nav
        aria-label="Slide navigation"
        className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3.5"
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative p-1.5 focus:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? 'w-3 h-3 bg-[#ba9168] ring-2 ring-[#ba9168]/40 ring-offset-2 ring-offset-[#F5F6F2]'
                  : 'w-2 h-2 bg-[#505454]/40 hover:bg-[#ba9168]'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* ========================================================
          BOTTOM CENTER MOUSE SCROLL INDICATOR / CIRCULAR MENU BUTTON
          ======================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center select-none">
        {currentSlide < totalSlides - 1 ? (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Scroll down to next slide"
            className="group flex flex-col items-center gap-2 text-[#ba9168] hover:text-[#13284A] transition-colors focus:outline-none"
          >
            {/* Minimal SVG mouse silhouette */}
            <div className="w-5 h-8 rounded-full border-2 border-[#ba9168] group-hover:border-[#13284A] flex justify-center pt-1.5 transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#ba9168] group-hover:bg-[#13284A] animate-mouse-dot transition-colors" />
            </div>
            <span className="font-mono text-[9px] tracking-luxury uppercase text-[#505454]/70 group-hover:text-[#13284A] transition-colors">
              Scroll
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-3">
            {/* Circular Menu Button on Final Slide */}
            <button
              type="button"
              onClick={() => {
                if (onOpenMenu) {
                  onOpenMenu();
                } else if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-slide-menu'));
                }
              }}
              aria-label="Open site menu"
              className="group relative w-14 h-14 rounded-full border-2 border-dashed border-[#ba9168] hover:border-solid hover:scale-105 bg-[#F5F6F2]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 focus:outline-none shadow-sm"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#ba9168] font-medium group-hover:text-[#13284A] transition-colors">
                Menu
              </span>
            </button>

            {/* Back to Top */}
            <button
              type="button"
              onClick={() => goToSlide(0)}
              aria-label="Back to top slide"
              className="group flex items-center gap-1.5 px-3 py-2 rounded-full border border-black/10 bg-white/80 hover:bg-[#13284A] hover:border-[#13284A] text-[#505454] hover:text-white transition-all font-mono text-[10px] tracking-luxury uppercase focus:outline-none shadow-sm"
            >
              <span>Top</span>
              <span>↑</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================
          MINIMAL BOTTOM-RIGHT LEGAL / PRIVACY BAR
          ======================================================== */}
      <div className="fixed bottom-6 right-6 z-20 hidden md:flex items-center gap-3 text-[10px] font-mono tracking-luxury uppercase text-[#505454]/60">
        <Link href="/contact" className="hover:text-[#ba9168] transition-colors">
          Privacy Policy
        </Link>
        <span>|</span>
        <span>
          © Sensation Infracon Pvt. Ltd. 2026
        </span>
      </div>
    </div>
  );
}
