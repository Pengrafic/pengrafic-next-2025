// app/RootClientLayout.tsx

"use client"; // <--- ESTO ES FUNDAMENTAL para la interacción

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Script from "next/script";
import { Providers } from "./providers";
import { Inter } from "next/font/google"; // Necesitas este import si lo usas

// Definición de props
type RootClientLayoutProps = {
    children: React.ReactNode;
    interFont: ReturnType<typeof Inter>; // Tipado para la fuente
};


export default function RootClientLayout({ children, interFont }: RootClientLayoutProps) {
    return (
        <body className={`bg-[#FCFCFC] dark:bg-black ${interFont.className}`}>

            <Providers>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <WhatsAppButton />
            </Providers>

            {/* Google Analytics - Se mantiene aquí ya que son scripts */}
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
        </body>
    );
}