'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Award, Network } from 'lucide-react';
import { ServiceCard } from './service-card';

const services = [
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Notre service clientèle est disponible 24h/24, prêt à traiter vos demandes et emails avec réactivité et efficacité, à tout moment.",
  },
  {
    icon: Users,
    title: "Équipe professionnelle",
    description: "Notre équipe de plus de 50 professionnels dynamiques est dédiée à vous offrir des solutions de transport innovantes, adaptées à vos besoins spécifiques.",
  },
  {
    icon: Network,
    title: "Partenaires de Confiance",
    description: "Grâce à notre réseau, nous assurons une gestion complète et fiable de vos opérations de transport, de la planification à la livraison.",
  },
  {
    icon: Award,
    title: "Expertise Logistique",
    description: "Nous assurons une gestion intégrale de vos transports, incluant la planification, les réservations et la livraison de vos marchandises dans les meilleures conditions.",
  }
];

export function Services() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages d&apos;un service professionnel pour tous vos besoins en matière de transport routier au Maroc et en Europe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}