'use client';

import { AboutHero } from '@/components/about/about-hero';
import { AboutMission } from '@/components/about/about-mission';
import { AboutValues } from '@/components/about/about-values';
import { Footer } from '@/components/footer/footer';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <Footer />
    </>
  );
}