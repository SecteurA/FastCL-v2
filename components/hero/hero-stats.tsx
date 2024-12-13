'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Satisfaits",
  },
  {
    icon: TrendingUp,
    value: "15K+",
    label: "Livraisons Réussies",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taux de Satisfaction",
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100"
          >
            <div className="p-3 bg-[#f0562b]/10 rounded-full">
              <Icon className="h-6 w-6 text-[#f0562b]" />
            </div>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}