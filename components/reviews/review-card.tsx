'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: {
    content: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };
  delay?: number;
}

export function ReviewCard({ review, delay = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#f0562b] text-[#f0562b]" />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{review.content}</p>
      <div>
        <p className="font-semibold text-gray-900">{review.author}</p>
        <p className="text-sm text-gray-500">{review.role}</p>
        <p className="text-sm text-[#f0562b]">{review.company}</p>
      </div>
    </motion.div>
  );
}