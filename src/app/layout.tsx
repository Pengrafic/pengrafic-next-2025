// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from "next/font/google";

// Importamos el Componente de Cliente (que contendrá toda la lógica UI)
import RootClientLayout from './RootClientLayout'; 


// ------------------------------------------------------------------
// 1. Definir Metadatos Globales (Favicon, Título y Verificación de Google)
// Next.js usa este objeto para inyectar todo en la etiqueta <head>
export const metadata: Metadata = {
    title: 'Pengrafic: Agencia de Marketing Digital y Desarrollo Web',
    description: 'Tu descripción del sitio web de Pengrafic...',
    icons: {
        icon: '/favicon.ico', // Asegúrate que este archivo está en /public
        shortcut: '/pen2025.png',
    },
    verification: {
        google: 'xIiLIUqqWxzZ6XSXF7YQ-GKiOKmlUnUdIrTsd3fnceg', // Verificación de Google
    },
};
// ------------------------------------------------------------------


// Next.js Font para pasar a los componentes de cliente
const inter = Inter({ subsets: ["latin"] });


// 2. Componente de Servidor que renderiza el Cliente Wrapper
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            {/* Este componente RootClientLayout contendrá la etiqueta <body> y la UI interactiva */}
            <RootClientLayout interFont={inter}> 
                {children}
            </RootClientLayout>
        </html>
    );
}


