'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Globe } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Faciliter les échanges commerciaux entre l'Europe et l'Afrique en offrant des solutions logistiques fiables et innovantes."
  },
  {
    icon: Shield,
    title: "Notre Vision",
    description: "Devenir le partenaire logistique de référence pour les entreprises opérant entre l'Europe et l'Afrique."
  },
  {
    icon: Globe,
    title: "Notre Impact",
    description: "Contribuer au développement économique durable en connectant efficacement les marchés européens et africains."
  }
];

export function AboutMission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mission.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}