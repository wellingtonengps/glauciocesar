/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_SITE_URL || '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;