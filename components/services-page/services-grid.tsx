'use client';

import { motion } from 'framer-motion';
import { Truck, PackageCheck, Clock, Shield, Scale, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "Transport International",
    description: "Services de transport routier entre l'Europe et l'Afrique via le Maroc, adaptés à vos besoins spécifiques."
  },
  {
    icon: PackageCheck,
    title: "Groupage",
    description: "Solutions optimisées pour le transport de marchandises en groupage, permettant des économies d'échelle."
  },
  {
    icon: Clock,
    title: "Express & Urgent",
    description: "Service express pour vos livraisons urgentes avec des délais garantis et un suivi en temps réel."
  },
  {
    icon: Shield,
    title: "Sécurité & Assurance",
    description: "Protection complète de vos marchandises avec des solutions d'assurance adaptées à vos besoins."
  },
  {
    icon: Scale,
    title: "Douane & Conformité",
    description: "Gestion complète des formalités douanières et respect des réglementations internationales."
  },
  {
    icon: FileCheck,
    title: "Conseil Logistique",
    description: "Expertise et conseils personnalisés pour optimiser votre chaîne logistique internationale."
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}