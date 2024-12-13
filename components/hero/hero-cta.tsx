'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link href="/contact">
        <Button 
          size="lg" 
          className="group flex items-center gap-2 text-base px-8 py-6 bg-[#f0562b] hover:bg-black transition-all duration-300"
        >
          Demander un devis
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
      <Link href="/contact">
        <Button
          variant="outline"
          size="lg"
          className="group flex items-center gap-2 text-base px-8 py-6 hover:bg-[#f0562b] hover:text-white hover:border-[#f0562b] transition-all duration-300"
        >
          <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Nous contacter
        </Button>
      </Link>
    </motion.div>
  );
}