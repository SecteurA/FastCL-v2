'use client';

import { motion } from 'framer-motion';
import { Phone, Clock } from 'lucide-react';
import { EmergencyCard } from './emergency-card';

const emergencyServices = [
  {
    icon: Phone,
    title: "Support 24/7",
    description: "Une équipe dédiée disponible jour et nuit pour répondre à vos urgences",
    action: "Contactez-nous"
  },
  {
    icon: Clock,
    title: "Intervention Rapide",
    description: "Temps de réponse garanti sous 2 heures pour toute urgence",
    action: "En savoir plus"
  }
];

export function Emergency() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f0562b1a,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services d&apos;Urgence
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Une équipe dédiée 24/7 pour répondre à vos situations d&apos;urgence avec rapidité et efficacité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergencyServices.map((service, index) => (
            <EmergencyCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              action={service.action}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}