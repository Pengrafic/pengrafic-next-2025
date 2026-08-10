// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import Script from 'next/script'; // 1. Importar Script
import "../styles/index.css";

import RootClientLayout from './RootClientLayout';

export const metadata: Metadata = {
  title: 'Pengrafic: Agencia de Marketing Digital y Desarrollo Web',
  description: 'Tu descripción del sitio web de Pengrafic...',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/pen2025.png',
  },
  verification: {
    google: 'xIiLIUqWxzZ6SXF7YQ-GKiOKmlUnUdIrTsd3fnceg',
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head>
        {/* 2. Google Analytics en el Server Component */}
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
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-bg-color-dark ${inter.className}`}>
  <RootClientLayout>{children}</RootClientLayout>
</body>
    </html>
  );
}

