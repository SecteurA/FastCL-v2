'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewCard } from './review-card';

const reviews = [
  {
    content: "Un partenaire logistique fiable qui a considérablement optimisé notre chaîne d'approvisionnement.",
    author: "Marie Laurent",
    role: "Directrice Supply Chain",
    company: "Tech Industries",
    rating: 5
  },
  {
    content: "Service exceptionnel et suivi rigoureux de nos expéditions. Hautement recommandé!",
    author: "Ahmed Benali",
    role: "Responsable Logistique",
    company: "Global Trade SA",
    rating: 5
  },
  {
    content: "Une expertise remarquable dans le transport Europe-Afrique. Délais respectés et marchandises sécurisées.",
    author: "Sophie Martin",
    role: "Directrice des Opérations",
    company: "Euro Solutions",
    rating: 5
  }
];

export function Reviews() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi les entreprises leaders choisissent Fast CHEETAH Logistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}