'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Un partenaire logistique fiable qui a considérablement optimisé notre chaîne d'approvisionnement.",
    author: "Marie Laurent",
    role: "Directrice Supply Chain",
    company: "Tech Industries"
  },
  {
    content: "Service exceptionnel et suivi rigoureux de nos expéditions. Hautement recommandé!",
    author: "Ahmed Benali",
    role: "Responsable Logistique",
    company: "Global Trade SA"
  },
  {
    content: "Une expertise remarquable dans le transport Europe-Afrique. Délais respectés et marchandises sécurisées.",
    author: "Sophie Martin",
    role: "Directrice des Opérations",
    company: "Euro Solutions"
  }
];

const partners = [
  { name: "DHL", logo: "https://images.unsplash.com/photo-1624921244760-977b0d3d6a60?w=160&h=80&fit=crop&auto=format" },
  { name: "Maersk", logo: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=160&h=80&fit=crop&auto=format" },
  { name: "CMA CGM", logo: "https://images.unsplash.com/photo-1563905463861-7d77975b3a44?w=160&h=80&fit=crop&auto=format" },
];

export function Trust() {
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
            Ils Nous Font Confiance
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi les entreprises leaders choisissent Fast CHEETAH Logistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-gray-50 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-40 h-20"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}