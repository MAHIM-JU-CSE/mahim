'use client';

import { useEffect } from 'react';

export default function Breadcrumb() {
  useEffect(() => {
    const breadcrumbScript = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mahbubislammahim.github.io/mahim/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://mahbubislammahim.github.io/mahim/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Experience",
          "item": "https://mahbubislammahim.github.io/mahim/#experience"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Research",
          "item": "https://mahbubislammahim.github.io/mahim/#research"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbScript);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
