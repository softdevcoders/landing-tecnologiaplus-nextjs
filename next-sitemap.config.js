/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/", // Cámbialo por tu dominio de prueba
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" }, // Allow all by default
        ],
    },
    exclude: ['/404', '/500'], // Exclude error pages
    generateIndexSitemap: true,
    changefreq: 'daily',
    priority: 0.7,
};
