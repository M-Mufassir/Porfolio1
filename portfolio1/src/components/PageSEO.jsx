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

const DEFAULT_SITE_URL = 'https://mohamedmufassir.me'

/**
 * Updates page-specific title, meta description, canonical URL, Open Graph,
 * and Twitter tags cleanly across multi-page React Router transitions.
 */
export function PageSEO({ title, description, path = '/', keywords }) {
  useEffect(() => {
    const baseUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const fullUrl = `${baseUrl}${normalizedPath === '/' ? '/' : normalizedPath}`
    const imageUrl = `${baseUrl}/images/og-cover.jpg`

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

    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertMeta('property', 'og:url', fullUrl)
    upsertLink('canonical', fullUrl)
  }, [title, description, path, keywords])

  return null
}
