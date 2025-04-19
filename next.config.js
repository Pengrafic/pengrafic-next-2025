/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 'localhost' puede omitirse si estás usando el puerto estándar (3000)
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // No es necesario especificar port: "" - puedes omitirlo
      },
      // Puedes añadir más patrones según necesites
    ],
    // Opciones adicionales recomendadas:
    formats: ["image/avif", "image/webp"], // Formatos modernos de imagen
    minimumCacheTTL: 60, // Tiempo mínimo de caché en segundos
    // contentSecurityPolicy: "default-src 'self'", // Para mayor seguridad
  },
  // Otras configuraciones recomendadas:
  reactStrictMode: true,
  swcMinify: true, // Usar el minificador SWC (más rápido)
  // poweredByHeader: false, // Para ocultar el header X-Powered-By
  // compress: true, // Compresión gzip (activada por defecto)
};

module.exports = nextConfig;