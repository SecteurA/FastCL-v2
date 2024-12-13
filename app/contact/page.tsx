'use client';

import { ContactHero } from '@/components/contact/contact-hero';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactForm } from '@/components/contact/contact-form';
import { Footer } from '@/components/footer/footer';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
}