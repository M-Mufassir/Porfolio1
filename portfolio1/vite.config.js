import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {
  freelanceFaqs,
  freelanceTracks,
  projectCards,
  roboticsLearnings,
} from './src/data/portfolio.js'

const DEFAULT_SITE_URL = 'https://www.mohamedmufassir.me'

const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/projects', priority: '0.95', changefreq: 'weekly' },
  { path: '/robotics', priority: '0.9', changefreq: 'weekly' },
  { path: '/freelance', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.85', changefreq: 'monthly' },
  { path: '/experience', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.85', changefreq: 'monthly' },
]

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function serializeJsonLd(obj) {
  return JSON.stringify(obj).replaceAll('<', '\\u003c')
}

function buildPageDescriptors(siteUrl) {
  const pages = [
    {
      outputRelPath: '_pages/about.html',
      routePath: '/about',
      title: 'About & Engineering Stack | Mohamed Mufassir — SLIIT & TechTitude Labs',
      description:
        'Technical philosophy, embedded C & AVR Assembly skills, closed-loop PID robotics, optical telecom infrastructure, and 5-step engineering workflow of Mohamed Mufassir.',
      keywords:
        'Mohamed Mufassir skills, AVR Assembly, Embedded C, PID Control, Optical Fiber, SLIIT Computer Systems Engineering',
      bodyHtml: `<main><h1>Systems Architecture, Firmware & Control — Mohamed Mufassir</h1><p>Computer Systems Engineering undergraduate at SLIIT and Co-Founder of TechTitude Labs engineering bare-metal firmware, autonomous robotics, and telecommunications systems.</p></main>`,
    },
    {
      outputRelPath: '_pages/projects.html',
      routePath: '/projects',
      title: 'Projects — Robotics, AVR Assembly, ESP32-CAM & Software | Mohamed Mufassir',
      description:
        'Explore 11+ engineered systems by Mohamed Mufassir: AVR assembly autonomous parking car, ESP32-CAM live streaming rover, Raspberry Pi PID motor controller, IoT surveillance, Electron POS, and Spring Boot apps.',
      keywords:
        'AVR assembly robot, ESP32-CAM car, Raspberry Pi PID motor control, IoT surveillance, Electron POS, Mohamed Mufassir projects',
      bodyHtml: `<main><h1>Robotics, Embedded & Software Projects — Mohamed Mufassir</h1><ul>${projectCards
        .map(
          (p) =>
            `<li><a href="/projects/${escapeHtml(p.slug)}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.summary)}</li>`
        )
        .join('')}</ul></main>`,
    },
    {
      outputRelPath: '_pages/robotics.html',
      routePath: '/robotics',
      title: 'Robotics & Embedded Engineering Learnings | Mohamed Mufassir',
      description:
        'Hands-on engineering learnings from Mohamed Mufassir across autonomous robotics, bare-metal AVR Assembly, closed-loop PID motor speed control, ESP32-CAM IoT, and digital FSM hardware.',
      keywords:
        'Mohamed Mufassir robotics, embedded systems learnings, PID motor control, AVR assembly robot, ESP32-CAM robotics, TechTitude Labs',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Robotics, Embedded Systems & Control Engineering Learnings — Mohamed Mufassir',
        url: `${siteUrl}/robotics`,
        author: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Mohamed Mufassir' },
      },
      bodyHtml: `<main><h1>Robotics, Embedded & Control Learnings — Mohamed Mufassir</h1>${roboticsLearnings
        .map(
          (item) =>
            `<section><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.summary)}</p><ul>${item.takeaways
              .map((t) => `<li>${escapeHtml(t)}</li>`)
              .join('')}</ul></section>`
        )
        .join('')}</main>`,
    },
    {
      outputRelPath: '_pages/freelance.html',
      routePath: '/freelance',
      title: 'Freelance Software, IoT, Embedded & Robotics Developer | Mohamed Mufassir',
      description:
        'Hire Mohamed Mufassir for freelance Software Engineering (React, Electron.js, Spring Boot), IoT (ESP32), Embedded Firmware (C/AVR), and Autonomous Robotics prototypes in Sri Lanka & remote.',
      keywords:
        'freelance embedded engineer Sri Lanka, freelance IoT developer, freelance robotics prototyper, React Electron Spring Boot freelancer, hire Mohamed Mufassir',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: 'Mohamed Mufassir — Freelance Software, IoT, Embedded Systems & Robotics Engineering',
            url: `${siteUrl}/freelance`,
            provider: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Mohamed Mufassir' },
            areaServed: ['Sri Lanka', 'Remote Worldwide'],
            serviceType: freelanceTracks.map((t) => t.title),
          },
          {
            '@type': 'FAQPage',
            mainEntity: freelanceFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
        ],
      },
      bodyHtml: `<main><h1>Freelance Software, IoT, Embedded & Robotics Engineer — Mohamed Mufassir</h1>${freelanceTracks
        .map(
          (track) =>
            `<section><h2>${escapeHtml(track.title)}</h2><p>${escapeHtml(track.description)}</p></section>`
        )
        .join('')}<p>Contact: mufassirriswan@gmail.com | +94 77 423 3426 | +94 71 423 3425</p></main>`,
    },
    {
      outputRelPath: '_pages/experience.html',
      routePath: '/experience',
      title: 'Experience & Technical CV | Mohamed Mufassir — TechTitude Labs',
      description:
        'Career ledger of Mohamed Mufassir: Fiber Project Management Intern, Co-Founder & Tech Lead at TechTitude Labs, Software Engineering Intern at ZILLIT Technologies, and Freelance Developer.',
      keywords:
        'Mohamed Mufassir experience, TechTitude Labs Co-Founder, ZILLIT Technologies, Fiber Project Management, Technical CV',
      bodyHtml: `<main><h1>Experience & Technical CV — Mohamed Mufassir</h1><p>Fiber Project Management Intern, Co-Founder & Tech Lead at TechTitude Labs, Software Engineering Intern at ZILLIT Technologies, and Freelance Developer.</p></main>`,
    },
    {
      outputRelPath: '_pages/contact.html',
      routePath: '/contact',
      title: 'Hire & Contact Mohamed Mufassir | Freelance Software, IoT, Embedded & Robotics',
      description:
        'Contact Mohamed Mufassir (+94 77 423 3426, +94 71 423 3425, mufassirriswan@gmail.com) for freelance Software, IoT, Embedded Systems, and Robotics projects.',
      keywords:
        'Hire Mohamed Mufassir, Freelance Embedded Engineer Sri Lanka, IoT Developer, Robotics Freelancer, Software Developer Sri Lanka',
      bodyHtml: `<main><h1>Hire & Contact Mohamed Mufassir</h1><p>Direct channels for Software, IoT, Embedded Systems & Robotics inquiries: mufassirriswan@gmail.com, +94 77 423 3426, +94 71 423 3425.</p></main>`,
    },
  ]

  for (const project of projectCards) {
    const canonicalUrl = `${siteUrl}/projects/${project.slug}`
    const primaryImg = project.images?.[0] || '/images/og-cover.jpg'
    const ogImg = primaryImg.startsWith('http') ? primaryImg : `${siteUrl}${primaryImg}`

    pages.push({
      outputRelPath: `_pages/projects/${project.slug}.html`,
      routePath: `/projects/${project.slug}`,
      title: project.seoTitle || `${project.title} — Mohamed Mufassir`,
      description: project.seoDescription || project.summary,
      keywords: (project.keywords || project.stack).join(', '),
      ogType: 'article',
      ogImage: ogImg,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects` },
              { '@type': 'ListItem', position: 3, name: project.title, item: canonicalUrl },
            ],
          },
          {
            '@type': 'CreativeWork',
            '@id': `${canonicalUrl}#project`,
            name: project.title,
            headline: project.title,
            description: project.seoDescription || project.summary,
            url: canonicalUrl,
            image: ogImg,
            author: {
              '@type': 'Person',
              '@id': `${siteUrl}/#person`,
              name: 'Mohamed Mufassir',
              url: `${siteUrl}/`,
            },
            about: project.domainLabel,
            keywords: (project.keywords || project.stack).join(', '),
          },
        ],
      },
      bodyHtml: [
        '<main><article>',
        `<p>${escapeHtml(project.domainLabel)} — ${escapeHtml(project.type)}</p>`,
        `<h1>${escapeHtml(project.title)}</h1>`,
        `<p>${escapeHtml(project.summary)}</p>`,
        '<h2>System Architecture &amp; Implementation</h2>',
        `<p>${escapeHtml(project.architectureOverview)}</p>`,
        '<h2>Engineering Learnings &amp; Challenges Solved</h2>',
        `<p>${escapeHtml(project.challengesAndLearnings)}</p>`,
        '<h2>Key Deliverables</h2>',
        `<ul>${project.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}</ul>`,
        `<h2>Technologies &amp; Hardware</h2><p>${escapeHtml(project.stack.join(', '))}</p>`,
        '<nav>',
        '<a href="/projects">All Projects</a> | ',
        '<a href="/robotics">Robotics &amp; Embedded Learnings</a> | ',
        '<a href="/freelance">Freelance Services</a>',
        '</nav></article></main>',
      ].join(''),
    })
  }

  return pages
}

function renderStaticRouteHtml(baseHtml, siteUrl, descriptor) {
  const fullUrl = `${siteUrl}${descriptor.routePath}`
  const ogImg = descriptor.ogImage || `${siteUrl}/images/og-cover.jpg`
  const ogType = descriptor.ogType || 'website'
  const safeTitle = escapeHtml(descriptor.title)
  const safeDesc = escapeHtml(descriptor.description)
  const safeKeywords = escapeHtml(descriptor.keywords)

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
      `<meta name="keywords" content="${safeKeywords}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta property="og:type" content="[^"]*" \/>/,
      `<meta property="og:type" content="${escapeHtml(ogType)}" />`
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${escapeHtml(ogImg)}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${escapeHtml(fullUrl)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${escapeHtml(ogImg)}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${escapeHtml(fullUrl)}" />`
    )

  if (descriptor.jsonLd) {
    html = html.replace(
      '  </head>',
      `    <script type="application/ld+json" data-page-seo="true">${serializeJsonLd(descriptor.jsonLd)}</script>\n  </head>`
    )
  }

  if (descriptor.bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${descriptor.bodyHtml}</div>`)
  }

  return html
}

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

      const sitemapRoutes = [
        ...STATIC_ROUTES,
        ...projectCards.map((p) => ({
          path: `/projects/${p.slug}`,
          priority: '0.9',
          changefreq: 'monthly',
        })),
      ]

      const sitemapXml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemapRoutes.map(
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

      const distIndexPath = path.join(distDir, 'index.html')
      if (fs.existsSync(distIndexPath)) {
        const baseHtml = fs.readFileSync(distIndexPath, 'utf8')
        const descriptors = buildPageDescriptors(cleanUrl)

        for (const page of descriptors) {
          const outPath = path.join(distDir, page.outputRelPath)
          fs.mkdirSync(path.dirname(outPath), { recursive: true })
          fs.writeFileSync(outPath, renderStaticRouteHtml(baseHtml, cleanUrl, page), 'utf8')
        }
      }
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
