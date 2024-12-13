import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Transport International Europe-Afrique | Fast CHEETAH Logistics',
  description: 'Leader du transport routier international entre l\'Europe et l\'Afrique. Solutions logistiques fiables et innovantes, expertise en transport de marchandises via le Maroc. Service 24/7, suivi en temps réel.',
  keywords: 'transport international, logistique Maroc, transport Europe Afrique, transport routier international, fret routier, transport marchandises Maroc, logistique internationale',
  openGraph: {
    title: 'Transport International Europe-Afrique | Fast CHEETAH Logistics',
    description: 'Leader du transport routier international entre l\'Europe et l\'Afrique. Solutions logistiques fiables et innovantes.',
    images: [
      {
        url: 'https://i.postimg.cc/MGqC0md0/cheetah.webp',
        width: 1200,
        height: 630,
        alt: 'Fast CHEETAH Logistics - Transport International',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport International Europe-Afrique | Fast CHEETAH Logistics',
    description: 'Leader du transport routier international entre l\'Europe et l\'Afrique. Solutions logistiques fiables et innovantes.',
    images: ['https://i.postimg.cc/MGqC0md0/cheetah.webp'],
  },
  alternates: {
    canonical: 'https://fastcl.com',
  },
};