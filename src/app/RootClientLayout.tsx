
// app/RootClientLayout.tsx
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
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
        </>
    );
}