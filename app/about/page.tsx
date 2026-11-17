import React from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/content';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Sensation Infracon is a partner for real estate investment in premium properties across India. Learn about our business model and value pillars.',
};

export default function AboutPage() {
  const site = getSiteConfig();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            Corporate thesis & operations
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink">
            About Sensation Infracon
          </h1>
        </div>

        {/* 1. Intro Text Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-text/50 uppercase tracking-widest block">
                Overview
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-lg sm:text-xl text-text/90 leading-relaxed">
                {site.home.introText}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Business Model ("How we do it") */}
        <section className="mb-20 pt-16 border-t border-mist">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
                The Operating Model
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink mb-4">
                How we do it
              </h2>
              <div className="p-6 bg-white border border-mist rounded-xl mb-4">
                <span className="text-xs font-mono text-ink/70 block mb-1">
                  Structure
                </span>
                <p className="font-heading text-lg font-bold text-ink">
                  95% of projects use joint development.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-mist">
              {site.home.howWeDoIt.points.map((point, index) => (
                <div key={index} className="py-5 flex gap-4 items-start">
                  <span className="font-mono text-xs text-brass pt-1">
                    0{index + 1}
                  </span>
                  <p className="font-body text-base text-text/85 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Value Section (Sensation Capital) */}
        <section className="mb-20 pt-16 border-t border-mist">
          <div className="mb-8">
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              Sensation Capital
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
              Value pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {site.home.valueSection.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 bg-paper border border-mist rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-brass block mb-2">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                    {pillar.name}
                  </h3>
                  <div className="text-xs font-mono text-text/60 border-b border-mist pb-3 mb-4">
                    {pillar.metrics}
                  </div>
                </div>
                <p className="font-body text-xs sm:text-sm text-text/80 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Section */}
        <section className="pt-16 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm projectContext="About page inquiry" />
        </section>
      </div>
    </div>
  );
}
