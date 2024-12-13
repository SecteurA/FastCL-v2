'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Truck, PackageCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: "Demande",
    description: "Soumettez votre demande de transport avec les détails de votre expédition."
  },
  {
    icon: Truck,
    title: "Planification",
    description: "Nous organisons le transport optimal selon vos besoins spécifiques."
  },
  {
    icon: PackageCheck,
    title: "Suivi",
    description: "Suivez votre expédition en temps réel tout au long du trajet."
  },
  {
    icon: CheckCircle,
    title: "Livraison",
    description: "Livraison à destination avec confirmation et preuve de réception."
  }
];

export function ServicesProcess() {
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
          <h2 className="text-3xl font-bold text-gray-900">Notre Processus</h2>
          <p className="mt-4 text-xl text-gray-600">
            Un processus simple et efficace pour vos expéditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-primary/20">
                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}