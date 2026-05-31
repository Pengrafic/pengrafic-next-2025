/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // ✅ Solo remotePatterns, eliminamos domains
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
            // Agrega más si necesitas otras fuentes de imágenes
        ],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60,
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;