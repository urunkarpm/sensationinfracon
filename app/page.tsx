import React from 'react';
import type { Metadata } from 'next';
import FullpagePresentation from '@/components/FullpagePresentation';

export const metadata: Metadata = {
  title: 'Home | Sensation Infracon',
  description:
    'Fullpage luxury presentation with snap scrolling, animated line-art illustrations, and bespoke advisory.',
};

export default function HomePage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <FullpagePresentation />
    </main>
  );
}
