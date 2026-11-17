import React from 'react';
import type { Metadata } from 'next';
import { getPartners } from '@/lib/content';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Project consultants',
  description:
    'Sensation Infracon collaborates with certified master planners, structural engineers, and environmental consultants across India.',
};

export default function ProjectConsultantsPage() {
  const { consultants } = getPartners();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            {consultants.tag}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            {consultants.title}
          </h1>
          <p className="font-body text-base sm:text-lg text-text/80 max-w-4xl leading-relaxed">
            {consultants.intro}
          </p>
        </div>

        {/* Benefits List (Ruled split layout) */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              Empanelment framework
            </span>
            <h2 className="font-heading text-2xl font-bold text-ink">
              Consultant benefits and engagement terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultants.benefits.map((b: { title: string; desc: string }, idx: number) => (
              <div
                key={idx}
                className="p-6 bg-paper border border-mist rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-brass block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-2">
                    {b.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text/75 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="pt-8 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm
            projectContext="Project consultant empanelment"
            defaultRole="channel partner"
          />
        </section>
      </div>
    </div>
  );
}
