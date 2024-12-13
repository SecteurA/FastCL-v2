'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  className?: string;
  imagePath?: string;
  alt: string;
}

export function HeroBackground({ className, imagePath = '/images/side.jpg', alt }: HeroBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 z-10" />
      
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-full"
      >
        <Image
          src={imagePath}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </motion.div>
      
      {/* Enhanced gradient overlays for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-20" />
    </div>
  );
}