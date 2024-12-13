'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const routes = [
  {
    region: "France",
    cities: [
      {
        from: ["Paris", "Lyon", "Marseille"],
        to: ["Tanger", "Casablanca"]
      }
    ]
  },
  {
    region: "Espagne",
    cities: [
      {
        from: ["Madrid", "Barcelone", "Valence"],
        to: ["Tanger", "Nador"]
      }
    ]
  },
  {
    region: "Allemagne",
    cities: [
      {
        from: ["Berlin", "Munich", "Francfort"],
        to: ["Casablanca", "Tanger"]
      }
    ]
  },
  {
    region: "Italie",
    cities: [
      {
        from: ["Milan", "Rome"],
        to: ["Casablanca", "Agadir"]
      }
    ]
  },
  {
    region: "Belgique",
    cities: [
      {
        from: ["Bruxelles", "Anvers"],
        to: ["Tanger", "Casablanca"]
      }
    ]
  },
  {
    region: "Pays-Bas",
    cities: [
      {
        from: ["Amsterdam", "Rotterdam"],
        to: ["Casablanca", "Tanger"]
      }
    ]
  }
];

export function ServicesCoverage() {
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
          <h2 className="text-3xl font-bold text-gray-900">Zone de Couverture</h2>
          <p className="mt-4 text-xl text-gray-600">
            Liaisons directes entre les principales villes européennes et marocaines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">{route.region}</h3>
              </div>
              
              {route.cities.map((connection, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <p className="font-medium text-gray-700">Départ :</p>
                    <div className="flex flex-wrap gap-2">
                      {connection.from.map((city, cityIdx) => (
                        <span
                          key={cityIdx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <p className="font-medium text-gray-700">Arrivée :</p>
                    <div className="flex flex-wrap gap-2">
                      {connection.to.map((city, cityIdx) => (
                        <span
                          key={cityIdx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}