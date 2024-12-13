'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmergencyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  delay?: number;
}

export function EmergencyCard({ icon: Icon, title, description, action, delay = 0 }: EmergencyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-[#f0562b] text-white">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        
        <Button
          variant="outline"
          className="w-full justify-center bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white"
        >
          {action}
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f0562b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}