// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // 1. Importar Script
import "../styles/index.css";

import RootClientLayout from "./RootClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pengrafic.com"),
  title: "Pengrafic: Agencia de Marketing Digital y Desarrollo Web",
  description: "Tu descripción del sitio web de Pengrafic...",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/pen2025.png", sizes: "32x32", type: "image/png" },
      { url: "/pen2025.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/pen2025.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "xIiLIUqWxzZ6SXF7YQ-GKiOKmlUnUdIrTsd3fnceg",
    other: {
      "msvalidate.01": "F132A4356CE0D3262956FB8597A4BD7",
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://pengrafic.com/#organization",
      name: "Pengrafic",
      url: "https://pengrafic.com",
      logo: "https://pengrafic.com/logo.png",
      image: "https://pengrafic.com/og-image.jpg",
      description:
        "Agencia digital especializada en desarrollo web full-stack, diseño de marca, interfaz UI/UX y estrategias de marketing digital de alto rendimiento.",
      telephone: "+51992870423",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Comas",
        addressLocality: "Comas",
        addressRegion: "Lima",
        postalCode: "15054",
        addressCountry: "PE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -11.9333,
        longitude: -77.05,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Peru",
        },
        {
          "@type": "AdministrativeArea",
          name: "Lima",
        },
      ],
      sameAs: [
        "https://www.facebook.com/pengrafic",
        "https://www.instagram.com/pengrafic_",
        "https://www.linkedin.com/company/pengrafic",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Desarrollo y Diseño Digital",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo Web Full-Stack y Landing Pages",
              description:
                "Desarrollo de aplicaciones web y e-commerce con rendimiento optimizado usando Next.js, Astro y Supabase.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Branding e Identidad Visual",
              description:
                "Diseño de identidad corporativa, logotipos y activos de marca para entornos digitales y físicos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Analítica e Integración de Datos (GA4 + Clarity)",
              description:
                "Implementación de seguimiento conductual, Google Analytics 4, Microsoft Clarity y dashboards en Looker Studio.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://pengrafic.com/#website",
      url: "https://pengrafic.com",
      name: "Pengrafic",
      publisher: {
        "@id": "https://pengrafic.com/#organization",
      },
      inLanguage: "es-PE",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BDY2J5917"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1BDY2J5917');
      `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "yzsdku97ww");
      `}
        </Script>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-bg-color-dark ${inter.className}`}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
