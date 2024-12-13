'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SustainabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  delay?: number;
}

export function SustainabilityCard({ icon: Icon, title, description, stats, delay = 0 }: SustainabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#f0562b]/10 text-[#f0562b] group-hover:bg-[#f0562b] group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {stats}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f0562b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}