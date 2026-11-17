import React from 'react';
import type { Metadata } from 'next';
import WelcomeScreen from '@/components/WelcomeScreen';

export const metadata: Metadata = {
  title: 'Welcome | Sensation Infracon',
  description:
    'Sensation Infracon - Private land development and real estate investment partner across India.',
};

export default function WelcomePage() {
  return <WelcomeScreen isStandalone={true} enterTargetId="portfolio" />;
}
