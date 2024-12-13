'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from '@/components/shared/hero-background';

export function ServicesHero() {
  return (
    <section className="relative min-h-[500px] flex items-center">
      <HeroBackground 
        alt="Services de transport international"
      />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Des solutions logistiques complètes et personnalisées pour vos besoins en transport international
          </p>
        </motion.div>
      </div>
    </section>
  );
}