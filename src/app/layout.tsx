// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "../styles/index.css"; // ✅ CSS global aquí

import RootClientLayout from './RootClientLayout';

export const metadata: Metadata = {
    title: 'Pengrafic: Agencia de Marketing Digital y Desarrollo Web',
    description: 'Tu descripción del sitio web de Pengrafic...',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/pen2025.png',
    },
    verification: {
        google: 'xIiLIUqqWxzZ6XSXF7YQ-GKiOKmlUnUdIrTsd3fnceg',
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
            <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
                <RootClientLayout>
                    {children}
                </RootClientLayout>
            </body>
        </html>
    );
}


