/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Gera arquivos estáticos para GitHub Pages
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Ajusta o caminho base
    assetPrefix: process.env.NEXT_PUBLIC_SITE_URL || '', // Para assets (CSS, JS, imagens)
    images: {
        unoptimized: true, // Desativa otimização de imagens (obrigatório no `next export`)
    },
};

module.exports = nextConfig;