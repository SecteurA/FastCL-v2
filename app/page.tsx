import { Hero } from '@/components/hero/hero';
import { Features } from '@/components/features/features';
import { Services } from '@/components/services/services';
import { CTA } from '@/components/cta/cta';
import { Sustainability } from '@/components/sustainability/sustainability';
import { Emergency } from '@/components/emergency/emergency';
import { Reviews } from '@/components/reviews/reviews';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CTA />
      <Sustainability />
      <Emergency />
      <Reviews />
      <Footer />
    </>
  );
}