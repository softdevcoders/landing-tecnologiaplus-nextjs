/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL, // Cámbialo por tu dominio de prueba
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" }, // Allow all by default
        ],
    },
    exclude: ['/404', '/500'], // Exclude error pages
    generateIndexSitemap: true,
    changefreq: 'daily',
};
