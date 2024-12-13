'use client';

import { ServicesHero } from '@/components/services-page/services-hero';
import { ServicesGrid } from '@/components/services-page/services-grid';
import { ServicesCoverage } from '@/components/services-page/services-coverage';
import { ServicesProcess } from '@/components/services-page/services-process';
import { Footer } from '@/components/footer/footer';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCoverage />
      <ServicesProcess />
      <Footer />
    </>
  );
}