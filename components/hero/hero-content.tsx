'use client';

import { motion } from 'framer-motion';

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
}

export function HeroContent({ title, subtitle, description }: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="block">{title}</span>
          <span className="block mt-2 text-[#f0562b]">
            {subtitle}
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-8 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}