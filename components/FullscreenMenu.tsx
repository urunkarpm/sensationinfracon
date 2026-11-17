'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services & Advisory', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Hospitality Partners', href: '/hospitality-partners' },
  { label: 'Channel Partners', href: '/channel-partners' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Journal & Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const pathname = usePathname();

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Listen for global custom open-menu event (from FullpagePresentation or other components)
  useEffect(() => {
    const handleOpenMenuEvent = () => {
      if (!isOpen) {
        // Trigger via header or component
      }
    };
    window.addEventListener('open-slide-menu', handleOpenMenuEvent);
    return () => window.removeEventListener('open-slide-menu', handleOpenMenuEvent);
  }, [isOpen]);

  return (
    <>
      {/* Dark backdrop overlay mask (Gray & Farrar .mask-open-menu) */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Off-canvas slide drawer from the right (Gray & Farrar .navbar-default) */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 h-full w-full sm:w-[50vw] max-w-[560px] bg-[#F5F6F2] border-l border-mist shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col justify-between transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top bar with Brand Logo, strapline and Close button */}
        <div className="w-full h-20 sm:h-24 px-6 sm:px-12 flex items-center justify-between border-b border-black/[0.06] select-none">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-9 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Sensation Infracon Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#13284A]">
                Sensation Infracon
              </span>
              <span className="font-mono text-[9px] tracking-luxury uppercase text-[#ba9168] mt-0.5">
                Private Land Advisory &amp; Capital
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="group flex items-center gap-2.5 text-[#505454] hover:text-[#ba9168] transition-colors focus:outline-none"
            aria-label="Close navigation menu"
          >
            <span className="font-mono text-[10px] tracking-luxury uppercase font-medium">
              Close
            </span>
            <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#ba9168] text-xs transition-colors">
              ✕
            </div>
          </button>
        </div>

        {/* Center Navigation Links (Gray & Farrar Signature .navbar-nav) */}
        <div className="px-6 sm:px-12 py-8 overflow-y-auto flex-1 flex flex-col justify-start">
          <h4 className="font-brandon text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#ba9168] font-medium mb-6 select-none">
            Menu
          </h4>

          <nav className="flex flex-col space-y-1 sm:space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between py-2 text-[19px] sm:text-[21px] font-brandon uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#ba9168] font-medium'
                      : 'text-[#505454] hover:text-[#ba9168]'
                  }`}
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span
                    className={`font-mono text-sm transition-all duration-200 ${
                      isActive
                        ? 'text-[#ba9168] opacity-100 translate-x-0'
                        : 'text-[#ba9168] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Details & Direct Line */}
        <div className="w-full px-6 sm:px-12 py-6 border-t border-black/[0.06] select-none text-[11px] font-mono tracking-wide text-[#505454]/80 flex flex-col gap-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="uppercase text-[#ba9168] font-medium">Head Office</span>
            <span>Banjara Hills, Hyderabad, India</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="uppercase text-[#ba9168] font-medium">Private Line</span>
            <a
              href="tel:+919885333333"
              className="text-[#505454] hover:text-[#ba9168] transition-colors"
            >
              +91 98853 33333
            </a>
          </div>

          <div className="pt-2 text-[10px] tracking-luxury uppercase border-t border-black/[0.04]">
            <a
              href="https://sensationecrp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ba9168] hover:underline inline-flex items-center gap-1"
            >
              <span>Partner Referral Desk (sensationecrp.com)</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
