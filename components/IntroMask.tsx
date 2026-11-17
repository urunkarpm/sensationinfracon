'use client';

import React from 'react';
import LogoSliceIntro from '@/components/LogoSliceIntro';

interface IntroMaskProps {
  onComplete?: () => void;
}

export default function IntroMask({ onComplete }: IntroMaskProps) {
  return <LogoSliceIntro onComplete={onComplete} />;
}
