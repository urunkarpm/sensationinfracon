import React from 'react';
import type { Metadata } from 'next';
import { getOffices, getSiteConfig } from '@/lib/content';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Sensation Infracon offices across Hyderabad, Mumbai, Bengaluru, Chennai, Goa, Visakhapatnam, and Dubai. Connect with our developer desk directly.',
};

export default function ContactPage() {
  const offices = getOffices();
  const site = getSiteConfig();

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-mist pb-8 mb-12">
          <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-2">
            Developer communication desk
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink mb-4">
            Contact Sensation Infracon
          </h1>
          <p className="font-body text-base text-text/75 max-w-3xl leading-relaxed">
            Direct coordination for institutional capital, joint venture land evaluations, and channel partner empanelment.
          </p>
        </div>

        {/* 2-Column Split: Enquiry Form (Left) & Direct Channels (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm projectContext="Central contact page" />
          </div>

          {/* Quick Contact & Direct Lines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-paper border border-mist rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-heading text-xl font-bold text-ink border-b border-mist pb-3">
                Direct developer channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="font-mono text-xs text-text/50 block mb-0.5">
                    Central telephone
                  </span>
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, '')}`}
                    className="font-medium text-ink hover:text-brass transition-colors font-mono"
                  >
                    {site.phone}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs text-text/50 block mb-0.5">
                    Executive email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-ink hover:text-brass transition-colors"
                  >
                    {site.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs text-text/50 block mb-0.5">
                    Instant messaging desk
                  </span>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-brass hover:underline"
                  >
                    WhatsApp developer line (+91 98853 33333) ↗
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs text-text/50 block mb-0.5">
                    Consultant referral program
                  </span>
                  <a
                    href={site.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-text hover:text-brass"
                  >
                    Sensation ECRP portal (sensationecrp.com) ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Head Office Highlight */}
            <div className="bg-[#13284A] text-paper border border-ink rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="font-heading text-lg font-semibold text-paper">
                  Hyderabad head office
                </span>
                <span className="text-[10px] font-mono text-brass bg-brass/20 px-2 py-0.5 rounded-full">
                  Primary headquarters
                </span>
              </div>
              <div className="font-body text-xs text-paper/75 space-y-1 leading-relaxed mb-4">
                <p>Door No. 8-2-616/1, 2nd and 4th Floor, Saha Building</p>
                <p>Road No. 11, Near Hotel Minerva Grand, Banjara Hills</p>
                <p>Hyderabad 500034, Telangana, India</p>
              </div>
              <a
                href="https://maps.google.com/?q=Saha+Building,+Road+No+11,+Banjara+Hills,+Hyderabad+500034"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brass hover:underline inline-flex items-center gap-1"
              >
                Open Google Maps direction ↗
              </a>
            </div>
          </div>
        </div>

        {/* Directory of All 7 Regional Offices */}
        <section className="pt-12 border-t border-mist">
          <div className="mb-8">
            <span className="text-xs font-mono text-brass uppercase tracking-wider block mb-1">
              National & International Desks
            </span>
            <h2 className="font-heading text-2xl font-bold text-ink">
              All seven registered offices
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-paper border border-mist rounded-2xl p-6 flex flex-col justify-between hover:border-ink/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-mist pb-2 mb-3">
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {office.city}
                    </h3>
                    <span className="text-[10px] font-mono text-text/50">
                      {office.designation}
                    </span>
                  </div>

                  <div className="font-body text-xs text-text/75 space-y-0.5 mb-4 leading-relaxed">
                    {office.addressLines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-mist/60 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-text/60 hover:text-ink"
                  >
                    {office.phone}
                  </a>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brass hover:underline flex items-center gap-1"
                  >
                    Google Map ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
