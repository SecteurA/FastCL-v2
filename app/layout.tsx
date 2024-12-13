import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation/navigation';
import { Toaster } from '@/components/ui/toaster';
import { OrganizationJsonLd } from '@/components/seo/json-ld';
import { siteMetadata } from '@/components/seo/metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <OrganizationJsonLd />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}