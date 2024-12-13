'use client';

import { motion } from 'framer-motion';
import { Truck, Globe, Shield } from 'lucide-react';
import { Feature } from './feature';

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services de Transport International
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Des solutions logistiques complètes et personnalisées pour répondre à tous vos besoins en transport international.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={Truck}
            title="Solutions Logistiques Complètes"
            description="Transport en groupage ou camions complets adaptés à vos besoins spécifiques, avec une flexibilité maximale."
          />
          <Feature
            icon={Globe}
            title="Réseau International"
            description="Couverture étendue des principaux marchés européens et africains, avec une expertise locale approfondie."
          />
          <Feature
            icon={Shield}
            title="Sécurité Garantie"
            description="Suivi rigoureux et sécurisé de vos marchandises avec des systèmes de traçabilité avancés."
          />
        </div>
      </div>
    </section>
  );
}