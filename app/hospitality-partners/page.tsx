import React from 'react';
import type { Metadata } from 'next';
import { getPartners } from '@/lib/content';
import PlaceholderImage from '@/components/PlaceholderImage';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Hospitality partners',
  description:
    'Sensation Infracon partners with premier hospitality operators for digital detox resorts and destination leisure developments across India.',
};

export default function HospitalityPartnersPage() {
  const { hospitality } = getPartners();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            {hospitality.tag}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            {hospitality.title}
          </h1>
          <p className="font-body text-base sm:text-lg text-text/80 max-w-4xl leading-relaxed">
            {hospitality.intro}
          </p>
        </div>

        {/* Operating Model Arc */}
        <section className="mb-16">
          <h2 className="font-heading text-xl font-bold text-ink mb-6">
            Collaboration workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitality.model.map((m: { step: string; title: string; desc: string }) => (
              <div
                key={m.step}
                className="p-6 bg-paper border border-mist rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-brass block mb-2">
                    PHASE {m.step}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-ink mb-2">
                    {m.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text/75 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder Logo Grid */}
        <section className="mb-20 pt-8 border-t border-mist">
          <div className="mb-6">
            <span className="text-xs font-mono text-text/50 uppercase tracking-widest block mb-1">
              Operator Network
            </span>
            <h2 className="font-heading text-xl font-bold text-ink">
              Empanelled hospitality operators
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitality.partnerLogos.map((logo: { id: string; name: string; code: string }) => (
              <div key={logo.id} className="space-y-2">
                <PlaceholderImage
                  label={`${logo.name} (${logo.code})`}
                  aspectRatio="16/9"
                />
                <p className="font-mono text-xs text-text/60 text-center">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="pt-8 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm
            projectContext="Hospitality partnership"
            defaultRole="channel partner"
          />
        </section>
      </div>
    </div>
  );
}
