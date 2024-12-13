'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HeroFeature({ icon: Icon, title, description }: HeroFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute -top-4 left-6">
        <div className="inline-flex items-center justify-center p-3 bg-[#f0562b] text-white rounded-xl shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}