'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Logo invert />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#f0562b]" />
                <div>
                  <p>Over Solutions Maroc</p>
                  <p>2 Rue Annabia, Maroc</p>
                  <p>Hay Riad</p>
                  <p>Rabat 10100</p>
                  <p>Morocco</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f0562b]" />
                <a href="tel:+212500000000" className="hover:text-[#f0562b] transition-colors">
                  +212 5XX-XXXXXX
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f0562b]" />
                <a href="mailto:contact@fastcl.com" className="hover:text-[#f0562b] transition-colors">
                  contact@fastcl.com
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Fast CHEETAH Logistics. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}