
// app/RootClientLayout.tsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import { Providers } from "./providers";

// Definición de props (ya no necesita interFont)
type RootClientLayoutProps = {
    children: React.ReactNode;
};

export default function RootClientLayout({ children }: RootClientLayoutProps) {
    return (
        <>
            <Providers>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <WhatsAppButton />
            </Providers>

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
        </>
    );
}