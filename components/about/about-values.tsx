'use client';

import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque aspect de nos services."
  },
  {
    icon: Clock,
    title: "Ponctualité",
    description: "Le respect des délais est au cœur de nos engagements."
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "La sécurité et la fiabilité sont nos priorités absolues."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous construisons des partenariats durables basés sur la confiance."
  }
];

export function AboutValues() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
          <p className="mt-4 text-xl text-gray-600">
            Les principes qui guident nos actions au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}