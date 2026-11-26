import { useEffect } from 'react'

function upsertMeta(attrName, attrValue, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(jsonLd) {
  const existing = document.head.querySelector('script[data-page-seo="true"]')
  if (!jsonLd) {
    if (existing) existing.remove()
    return
  }
  let el = existing
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.setAttribute('data-page-seo', 'true')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(jsonLd)
}

const DEFAULT_SITE_URL = 'https://www.mohamedmufassir.me'

/**
 * Updates page-specific title, meta description, canonical URL, Open Graph,
 * Twitter tags, and optional page-level JSON-LD across React Router transitions.
 */
export function PageSEO({
  title,
  description,
  path = '/',
  keywords,
  ogType = 'website',
  ogImage,
  jsonLd = null,
}) {
  useEffect(() => {
    const baseUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const fullUrl = `${baseUrl}${normalizedPath === '/' ? '/' : normalizedPath}`
    const resolvedImage = ogImage
      ? ogImage.startsWith('http')
        ? ogImage
        : `${baseUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`
      : `${baseUrl}/images/og-cover.jpg`

    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
      upsertMeta('name', 'twitter:title', title)
    }

    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }

    if (keywords) {
      upsertMeta('name', 'keywords', keywords)
    }

    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:image', resolvedImage)
    upsertMeta('name', 'twitter:image', resolvedImage)
    upsertMeta('property', 'og:url', fullUrl)
    upsertLink('canonical', fullUrl)
    upsertJsonLd(jsonLd)
  }, [title, description, path, keywords, ogType, ogImage, jsonLd])

  return null
}
