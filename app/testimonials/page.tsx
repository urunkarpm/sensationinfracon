import React from 'react';
import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/content';
import PlaceholderImage from '@/components/PlaceholderImage';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Verified investor, landowner, and partner experiences with Sensation Infracon developments.',
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            Client feedback
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            Investor and partner testimonials
          </h1>
          <p className="font-body text-base text-text/75 max-w-3xl leading-relaxed">
            Read testimonials from private investors, joint-development landowners, and empanelled channel partners.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-paper border border-mist rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder */}
                <div className="mb-6">
                  <PlaceholderImage
                    label={t.photoPlaceholder}
                    aspectRatio="1/1"
                    className="max-w-[80px] max-h-[80px] rounded-xl"
                  />
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm sm:text-base text-text/85 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-mist/70">
                <span className="font-heading text-base font-semibold text-ink block">
                  {t.name}
                </span>
                <span className="font-body text-xs text-text/60 block mt-0.5">
                  {t.designation}
                </span>
                <span className="font-mono text-[11px] text-brass block mt-1">
                  Project: {t.project} ({t.city})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Section */}
        <section className="pt-8 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm
            projectContext="Testimonials page enquiry"
            defaultRole="investor"
          />
        </section>
      </div>
    </div>
  );
}
