'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: [
      "Over Solutions Maroc",
      "2 Rue Annabia, Maroc",
      "Hay Riad",
      "Rabat 10100",
      "Morocco"
    ]
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: [
      "+212 5XX-XXXXXX",
      "+212 6XX-XXXXXX"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "contact@fastcheetah.com",
      "support@fastcheetah.com"
    ]
  },
  {
    icon: Clock,
    title: "Horaires",
    details: [
      "Lundi - Vendredi: 9h - 18h",
      "Samedi: 9h - 13h",
      "Dimanche: Fermé"
    ]
  }
];

export function ContactInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}