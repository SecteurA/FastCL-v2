'use client';

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fast CHEETAH Logistics",
          "url": "https://fastcl.com",
          "logo": "https://i.postimg.cc/MGqC0md0/cheetah.webp",
          "description": "Leader du transport routier international entre l'Europe et l'Afrique",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2 Rue Annabia",
            "addressLocality": "Rabat",
            "postalCode": "10100",
            "addressCountry": "MA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212-5XX-XXXXX",
            "contactType": "customer service",
            "availableLanguage": ["French", "Arabic", "English"]
          }
        })
      }}
    />
  );
}