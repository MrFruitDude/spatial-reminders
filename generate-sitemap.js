const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://spatialreminders.ca' });

    const pages = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
        { url: '/privacy-policy', changefreq: 'yearly', priority: 0.6 },
        // Add other routes as needed
    ];

    pages.forEach(page => sitemap.write(page));

    sitemap.end();

    const sitemapData = await streamToPromise(sitemap);
    createWriteStream('./public/sitemap.xml').write(sitemapData);
}

generateSitemap().then(() => {
    console.log('Sitemap generated successfully!');
}).catch(err => {
    console.error('Error generating sitemap:', err);
});