'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2015",
    title: "Création",
    description: "Lancement de Fast CHEETAH Logistics avec une vision innovante du transport international."
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Ouverture de nouveaux bureaux en Europe et développement du réseau africain."
  },
  {
    year: "2020",
    title: "Innovation",
    description: "Intégration de solutions technologiques avancées pour le suivi en temps réel."
  },
  {
    year: "2023",
    title: "Leadership",
    description: "Reconnaissance comme leader du transport routier Europe-Afrique."
  }
];

export function AboutHistory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Notre Histoire</h2>
          <p className="mt-4 text-xl text-gray-600">
            Un parcours d&apos;excellence et d&apos;innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } md:w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-md">
                  <div className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-primary" />
                  <span className="text-primary font-bold text-xl mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}