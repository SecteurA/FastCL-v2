'use client';

import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Notre Localisation</h2>
          <p className="mt-4 text-lg text-gray-600">
            Retrouvez-nous à notre siège social à Rabat
          </p>
        </motion.div>

        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4314506383847!2d-6.8683218!3d34.0204289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9326ecd%3A0x27c1d35b4dd5c63b!2sHay%20Riad%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1647081148765!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}