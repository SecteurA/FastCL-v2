'use client';

import { motion } from 'framer-motion';
import { Leaf, Recycle } from 'lucide-react';
import { SustainabilityCard } from './sustainability-card';

const initiatives = [
  {
    icon: Leaf,
    title: "Engagement Environnemental",
    description: "Réduction active de notre empreinte carbone et adoption de pratiques écologiques",
    stats: "30% de réduction CO₂"
  },
  {
    icon: Recycle,
    title: "Impact Carbone",
    description: "Suivi et optimisation continue de notre impact environnemental",
    stats: "Objectif -50% CO₂"
  }
];

export function Sustainability() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#f0562b] font-semibold">Notre Engagement</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Développement Durable
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à réduire notre impact environnemental tout en maintenant l&apos;excellence de nos services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <SustainabilityCard
              key={index}
              icon={initiative.icon}
              title={initiative.title}
              description={initiative.description}
              stats={initiative.stats}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}