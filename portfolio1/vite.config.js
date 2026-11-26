import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.85', changefreq: 'monthly' },
  { path: '/projects', priority: '0.95', changefreq: 'weekly' },
  { path: '/experience', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.85', changefreq: 'monthly' },
]

const DEFAULT_SITE_URL = 'https://mohamedmufassir.me'

function seoBuildPlugin(siteUrl) {
  const cleanUrl = (siteUrl || DEFAULT_SITE_URL).trim().replace(/\/+$/, '')

  return {
    name: 'portfolio-seo-build',
    transformIndexHtml(html) {
      if (!cleanUrl) return html
      return html
        .replaceAll(DEFAULT_SITE_URL, cleanUrl)
        .replace(
          '<meta property="og:image" content="/images/og-cover.jpg" />',
          `<meta property="og:image" content="${cleanUrl}/images/og-cover.jpg" />`
        )
        .replace(
          '<meta name="twitter:image" content="/images/og-cover.jpg" />',
          `<meta name="twitter:image" content="${cleanUrl}/images/og-cover.jpg" />`
        )
        .replace(
          '  </head>',
          `    <link rel="canonical" href="${cleanUrl}/" />\n    <meta property="og:url" content="${cleanUrl}/" />\n  </head>`
        )
    },
    closeBundle() {
      if (!cleanUrl) return
      const distDir = path.resolve(process.cwd(), 'dist')
      const today = new Date().toISOString().split('T')[0]

      const sitemapXml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...ROUTES.map(
          (r) =>
            `  <url>\n    <loc>${cleanUrl}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
        ),
        '</urlset>',
        '',
      ].join('\n')

      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8')
      fs.writeFileSync(
        path.join(distDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${cleanUrl}/sitemap.xml\n`,
        'utf8'
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL

  return {
    plugins: [react(), tailwindcss(), seoBuildPlugin(siteUrl)],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/motion') ||
              id.includes('node_modules/gsap') ||
              id.includes('node_modules/@gsap') ||
              id.includes('node_modules/lenis')
            ) {
              return 'vendor-motion'
            }
            if (
              id.includes('node_modules/lucide-react') ||
              id.includes('node_modules/embla-carousel') ||
              id.includes('node_modules/cmdk')
            ) {
              return 'vendor-ui'
            }
            return undefined
          },
        },
      },
    },
  }
})
