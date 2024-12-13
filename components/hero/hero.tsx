'use client';

import { HeroBackground } from '@/components/shared/hero-background';
import { HeroContent } from './hero-content';
import { HeroCTA } from './hero-cta';

export function Hero() {
  return (
    <div className="relative min-h-[700px] flex items-center">
      <HeroBackground 
        alt="Transport routier international Fast CHEETAH Logistics"
      />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <HeroContent 
            title="Transport routier international"
            subtitle="Europe - Maroc - Afrique"
            description="Fast CHEETAH Logistics assure une gestion optimale de vos flux de marchandises avec expertise et fiabilité, connectant l'Europe à l'Afrique via le Maroc."
          />
          <HeroCTA />
        </div>
      </div>
    </div>
  );
}