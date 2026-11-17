import React from 'react';
import type { Metadata } from 'next';
import { getPartners } from '@/lib/content';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Channel partners',
  description:
    'Join over 15,000 consultants and channel partners distributing surveyed plotted and serviced living inventory across India.',
};

export default function ChannelPartnersPage() {
  const { channel } = getPartners();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            {channel.tag}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            {channel.title}
          </h1>
          <p className="font-body text-base sm:text-lg text-text/80 max-w-4xl leading-relaxed">
            {channel.intro}
          </p>
        </div>

        {/* Benefits List */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              Network Advantages
            </span>
            <h2 className="font-heading text-2xl font-bold text-ink">
              Channel partner benefits and support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channel.benefits.map((b: { title: string; desc: string }, idx: number) => (
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

        {/* Referral Program Banner */}
        <section className="mb-20 p-8 rounded-2xl bg-white border border-mist flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              External Portal
            </span>
            <h3 className="font-heading text-xl font-bold text-ink">
              Sensation ECRP Referral Program
            </h3>
            <p className="font-body text-xs sm:text-sm text-text/70 mt-1 max-w-xl">
              Log in to the central consultant rewards and project referral portal to track registered leads, status updates, and commission payouts.
            </p>
          </div>
          <a
            href="https://sensationecrp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-ink hover:bg-brass text-paper rounded-full text-xs sm:text-sm font-semibold transition-colors flex-shrink-0"
          >
            Access ECRP portal ↗
          </a>
        </section>

        {/* Enquiry Form */}
        <section className="pt-8 border-t border-mist max-w-4xl mx-auto">
          <EnquiryForm
            projectContext="Channel partner empanelment"
            defaultRole="channel partner"
          />
        </section>
      </div>
    </div>
  );
}
