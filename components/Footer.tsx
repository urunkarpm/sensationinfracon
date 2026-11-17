'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import officesData from '@/content/offices.json';
import siteData from '@/content/site.json';

export default function Footer() {
  const pathname = usePathname();
  const [showDirectory, setShowDirectory] = useState(false);

  // Suppress footer completely on the standalone welcome page
  if (pathname === '/welcome') {
    return null;
  }

  const isHome = pathname === '/';

  return (
    <>
      {/* Minimal bottom bar with expandable directory */}
      {isHome ? (
        <footer className="w-full bg-[#F5F6F2] border-t border-mist/80 py-6 px-4 sm:px-8 text-center text-text/70 select-none">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-luxury uppercase">
            <button
              type="button"
              onClick={() => setShowDirectory(!showDirectory)}
              className="text-brass hover:text-ink transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>{showDirectory ? 'Hide' : 'View'} Registered Offices ({officesData.length} Cities)</span>
              <span>{showDirectory ? '↑' : '↓'}</span>
            </button>

            <div className="flex items-center gap-4 text-text/60">
              <Link href="/contact" className="hover:text-ink transition-colors">
                Privacy &amp; Regulatory Disclosures
              </Link>
              <span>|</span>
              <span className="inline-flex items-center gap-2">
                <Image src="/images/logo.png" alt="Sensation Infracon" width={14} height={15} className="object-contain" />
                <span>© Sensation Infracon Pvt. Ltd. 2026</span>
              </span>
            </div>
          </div>

          {/* Collapsible Registered Offices Directory Drawer */}
          {showDirectory && (
            <div className="max-w-[1200px] mx-auto mt-8 pt-8 border-t border-mist grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {officesData.map((office) => (
                <div key={office.id} className="p-4 rounded-xl bg-white/60 border border-mist">
                  <span className="font-mono text-[9px] text-brass uppercase block tracking-luxury">
                    {office.designation} · {office.city}
                  </span>
                  <p className="font-mono text-[10px] text-text/80 mt-1 uppercase leading-relaxed">
                    {office.addressLines.join(', ')}
                  </p>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[9px] text-brass hover:text-ink transition-colors mt-2 inline-block uppercase"
                  >
                    View Map ↗
                  </a>
                </div>
              ))}
            </div>
          )}
        </footer>
      ) : (
        /* Full Archival Directory on Internal Content Pages */
        <footer className="w-full bg-[#0E1B2E] text-paper border-t border-mist/30 mt-24">
          <div className="border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="relative w-12 h-14 sm:w-14 sm:h-16 flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Sensation Infracon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-block text-brass text-[10px] font-mono tracking-luxury uppercase mb-1">
                    Private developer &amp; capital partner
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-paper font-semibold tracking-tight">
                    Sensation Infracon Pvt. Ltd.
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-paper/70 mt-1 max-w-xl leading-relaxed">
                    Real estate development and capital partner for plotted communities, hospitality sanctuaries, and serviced living across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={siteData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brass text-paper hover:bg-brass/90 px-6 py-3 rounded-full text-xs font-mono tracking-luxury uppercase font-semibold transition-colors"
                >
                  WhatsApp developer desk ↗
                </a>
                <a
                  href={`tel:${siteData.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-paper text-paper px-6 py-3 rounded-full text-xs font-mono tracking-luxury uppercase font-medium transition-colors"
                >
                  Call {siteData.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-[10px] font-mono tracking-luxury text-brass uppercase mb-1">
                Regional Presence
              </div>
              <h4 className="font-heading text-xl sm:text-2xl text-paper font-semibold">
                Registered offices &amp; project desks
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-white/10">
              {officesData.map((office) => (
                <div
                  key={office.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brass/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-brass tracking-wider uppercase">
                        [{office.city}]
                      </span>
                      <span className="font-mono text-[10px] text-paper/60 uppercase">
                        {office.designation}
                      </span>
                    </div>
                    <p className="font-body text-xs text-paper/80 leading-relaxed">
                      {office.addressLines.join(', ')}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brass hover:text-paper transition-colors uppercase"
                    >
                      Map pin ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper/60">
              <div>
                © 2026 Sensation Infracon Pvt. Ltd. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <Link href="/contact" className="hover:text-brass transition-colors">
                  Privacy policy
                </Link>
                <Link href="/contact" className="hover:text-brass transition-colors">
                  Terms of advisory
                </Link>
                <Link href="/contact" className="hover:text-brass transition-colors">
                  Regulatory disclosures
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
