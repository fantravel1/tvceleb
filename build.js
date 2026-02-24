#!/usr/bin/env node
/**
 * TVCeleb.com - Static Site Build Script
 * Generates ~130 static HTML pages from data files
 * Outputs to /docs directory for GitHub Pages
 */

const fs = require('fs');
const path = require('path');

const { shows } = require('./data/shows');
let characters, actors;
try { characters = require('./data/characters').characters; } catch(e) { characters = []; console.warn('Warning: characters.js not found yet'); }
// Try combined actors first, fall back to original
try { actors = require('./data/actors-combined').actors; } catch(e) {
  try { actors = require('./data/actors').actors; } catch(e2) { actors = []; console.warn('Warning: actors.js not found yet'); }
}
// Load quotes and trivia if available
let quotesData = {};
try { quotesData = require('./data/quotes').quotes; } catch(e) { /* optional */ }

const SITE_URL = 'https://tvceleb.com';
const SITE_NAME = 'TVCeleb.com';
const SITE_DESCRIPTION = 'The world\'s largest repository of TV character fan sites, fan social media & aggregated content. Explore characters, fan communities, and ecosystems across every TV show.';
const OUT_DIR = path.join(__dirname, 'docs');

// ========== HELPERS ==========

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

function escapeJsonLd(str) {
  if (!str) return '';
  return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

function getCharacter(slug) { return characters.find(c => c.slug === slug); }
function getActor(slug) { return actors.find(a => a.slug === slug); }
function getShow(slug) { return shows.find(s => s.slug === slug); }

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

// ========== LAYOUT TEMPLATE ==========

function layout(opts) {
  const { title, description, canonical, ogType = 'website', ogImage, ogImageAlt, breadcrumbsHtml, jsonLd = [], bodyClass = '', content } = opts;

  const fullTitle = title.includes('TVCeleb') ? title : `${title} | TVCeleb.com`;
  const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.ico`;
  const resolvedOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : SITE_URL + ogImage)
    : DEFAULT_OG_IMAGE;
  const resolvedOgImageAlt = ogImageAlt || fullTitle;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(fullTitle)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${escapeHtml(canonical)}">
<link rel="alternate" hreflang="en" href="${escapeHtml(canonical)}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="${escapeHtml(fullTitle)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(canonical)}">
<meta property="og:type" content="${escapeHtml(ogType)}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="${escapeHtml(resolvedOgImage)}">
<meta property="og:image:alt" content="${escapeHtml(resolvedOgImageAlt)}">
${ogImage ? `<meta property="og:image:width" content="440">
<meta property="og:image:height" content="600">` : ''}
<meta name="twitter:card" content="${ogImage ? 'summary_large_image' : 'summary'}">
<meta name="twitter:title" content="${escapeHtml(fullTitle)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(resolvedOgImage)}">
<meta name="twitter:image:alt" content="${escapeHtml(resolvedOgImageAlt)}">
<meta name="author" content="TVCeleb.com">
<meta property="article:publisher" content="${SITE_URL}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://upload.wikimedia.org">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/styles.css">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
${jsonLd.map(ld => `<script type="application/ld+json">${ld}</script>`).join('\n')}
</head>
<body class="${bodyClass}">
${headerHtml()}
${breadcrumbsHtml ? `<div class="container">${breadcrumbsHtml}</div>` : ''}
<main id="main-content">
${content}
</main>
${footerHtml()}
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

// ========== HEADER ==========

function headerHtml() {
  return `<header class="header" role="banner">
<div class="header-inner">
<a href="/" class="logo" aria-label="TVCeleb.com Home"><div class="logo-icon">TV</div><span>TVCeleb</span></a>
<nav class="nav-desktop" role="navigation" aria-label="Main navigation">
<a href="/shows/" class="nav-link">Shows</a>
<a href="/characters/" class="nav-link">Characters</a>
<a href="/actors/" class="nav-link">Actors</a>
<a href="/genres/" class="nav-link">Genres</a>
<a href="/networks/" class="nav-link">Networks</a>
<a href="/decades/" class="nav-link">Decades</a>
<a href="/lists/" class="nav-link">Lists</a>
<a href="/search/" class="nav-link nav-search-btn" aria-label="Search"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></a>
</nav>
<button class="hamburger" id="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav">
<span></span><span></span><span></span>
</button>
</div>
</header>
<nav class="mobile-nav" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
<a href="/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>Home</a>
<a href="/shows/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>Shows</a>
<a href="/characters/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Characters</a>
<a href="/actors/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>Actors</a>
<a href="/genres/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11a9 9 0 0118 0"/><path d="M4 11a9 9 0 0018 0"/><circle cx="13" cy="11" r="3"/></svg>Genres</a>
<a href="/networks/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Networks</a>
<a href="/decades/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Decades</a>
<a href="/lists/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>Lists</a>
<a href="/search/" class="mobile-nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Search</a>
</nav>`;
}

// ========== FOOTER ==========

function footerHtml() {
  return `<footer class="footer" role="contentinfo">
<div class="container">
<div class="footer-grid">
<div class="footer-brand">
<a href="/" class="logo"><div class="logo-icon">TV</div><span>TVCeleb</span></a>
<p>The Living Archive of TV Fandom Worldwide. Explore characters, fan communities, and ecosystems across every TV show.</p>
</div>
<nav class="footer-nav" aria-label="Shows">
<h3>Shows</h3>
<div class="footer-links">
${shows.slice(0, 5).map(s => `<a href="/shows/${s.slug}/">${escapeHtml(s.title)}</a>`).join('\n')}
</div>
</nav>
<nav class="footer-nav" aria-label="Explore">
<h3>Explore</h3>
<div class="footer-links">
<a href="/shows/">All Shows</a>
<a href="/characters/">All Characters</a>
<a href="/actors/">All Actors</a>
<a href="/genres/">Browse by Genre</a>
<a href="/networks/">Browse by Network</a>
<a href="/decades/">Browse by Decade</a>
<a href="/lists/">Curated Lists</a>
<a href="/search/">Search</a>
</div>
</nav>
<nav class="footer-nav" aria-label="About">
<h3>About</h3>
<div class="footer-links">
<a href="/about/">About TVCeleb</a>
<a href="/search/">Search TVCeleb</a>
</div>
</nav>
</div>
<div class="footer-bottom">
<p class="footer-copyright">&copy; ${new Date().getFullYear()} TVCeleb.com. All rights reserved. TV show names, characters, and related marks are trademarks of their respective owners.</p>
</div>
</div>
</footer>`;
}

// ========== BREADCRUMBS ==========

function breadcrumbsComponent(items) {
  // items: [{label, url}, ...] last item is current page (no url)
  let html = '<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs-list" itemscope itemtype="https://schema.org/BreadcrumbList">';
  items.forEach((item, i) => {
    const isLast = i === items.length - 1;
    html += `<li class="breadcrumbs-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">`;
    if (isLast) {
      html += `<span class="breadcrumbs-current" itemprop="name">${escapeHtml(item.label)}</span>`;
    } else {
      html += `<a href="${escapeHtml(item.url)}" itemprop="item"><span itemprop="name">${escapeHtml(item.label)}</span></a>`;
      html += `<span class="breadcrumbs-separator" aria-hidden="true">›</span>`;
    }
    html += `<meta itemprop="position" content="${i + 1}">`;
    html += `</li>`;
  });
  html += '</ol></nav>';
  return html;
}

// ========== JSON-LD GENERATORS ==========

function jsonLdWebsite() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "description": SITE_DESCRIPTION,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon.ico`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  });
}

function jsonLdBreadcrumbs(items) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      ...(item.url ? { "item": `${SITE_URL}${item.url}` } : {})
    }))
  });
}

function jsonLdFaqPage(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });
}

function jsonLdTvSeries(show) {
  const charActors = (show.characterSlugs || []).map(slug => {
    const ch = getCharacter(slug);
    if (!ch) return null;
    const ac = getActor(ch.actorSlug);
    return ac ? {
      "@type": "PerformanceRole",
      "actor": { "@type": "Person", "name": ac.name, "url": `${SITE_URL}/actors/${ac.slug}/` },
      "characterName": ch.name
    } : null;
  }).filter(Boolean);

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TVSeries",
    "name": show.title,
    "url": `${SITE_URL}/shows/${show.slug}/`,
    "description": show.synopsisShort || show.synopsis,
    "genre": show.genre,
    "numberOfSeasons": show.seasons,
    "numberOfEpisodes": show.episodes,
    "startDate": show.years.split('–')[0],
    "productionCompany": { "@type": "Organization", "name": show.network },
    ...(charActors.length > 0 ? { "actor": charActors } : {}),
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": (show.fanHeatScore / 10).toFixed(1), "bestRating": "10", "ratingCount": Math.floor(show.fanHeatScore * 100) }
  });
}

function jsonLdCharacter(character) {
  const actor = getActor(character.actorSlug);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": character.name,
    "url": `${SITE_URL}/characters/${character.slug}/`,
    "description": character.characterArc ? character.characterArc.substring(0, 200) + '...' : '',
    "performerIn": {
      "@type": "TVSeries",
      "name": character.showTitle,
      "url": `${SITE_URL}/shows/${character.showSlug}/`
    },
    ...(actor ? {
      "sameAs": [
        actor.socialLinks?.wikipedia,
        actor.socialLinks?.imdb
      ].filter(Boolean)
    } : {})
  });
}

function jsonLdActor(actor) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": actor.name,
    "url": `${SITE_URL}/actors/${actor.slug}/`,
    "description": actor.bio ? actor.bio.substring(0, 200) + '...' : '',
    ...(actor.birthDate ? { "birthDate": actor.birthDate } : {}),
    ...(actor.birthPlace ? { "birthPlace": { "@type": "Place", "name": actor.birthPlace } } : {}),
    "sameAs": [
      actor.socialLinks?.wikipedia,
      actor.socialLinks?.imdb,
      actor.socialLinks?.instagram,
      actor.socialLinks?.twitter
    ].filter(Boolean),
    "performerIn": (actor.knownFor || []).map(role => ({
      "@type": "TVSeries",
      "name": role.showTitle,
      "url": `${SITE_URL}/shows/${role.showSlug}/`,
      "character": { "@type": "Person", "name": role.characterName }
    }))
  });
}

function jsonLdVideo(video, showSlug) {
  if (!video) return null;
  // Use show premiere date if available, otherwise use a reasonable default
  const show = showSlug ? getShow(showSlug) : null;
  const uploadDate = show?.yearStart ? `${show.yearStart}-01-01` : '2020-01-01';
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description || '',
    "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    "embedUrl": `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    "uploadDate": uploadDate
  });
}

// ========== COMPONENT HTML GENERATORS ==========

function fanHeatBadge(score) {
  return `<span class="fan-heat"><span class="fan-heat-bar"><span class="fan-heat-fill" data-width="${score}" style="width:${score}%"></span></span><span class="fan-heat-score">${score}</span></span>`;
}

function fanHeatCircle(score) {
  return `<div class="fan-heat-large"><div class="fan-heat-circle" style="--score:${score}"><div class="fan-heat-circle-inner">${score}</div></div><span class="fan-heat-label">Fan Heat</span></div>`;
}

function tagsHtml(tags, className = 'tag') {
  if (!tags || tags.length === 0) return '';
  return `<div class="tags-row">${tags.map(t => `<span class="${className}">${escapeHtml(t)}</span>`).join('')}</div>`;
}

function faqSectionHtml(faqs) {
  if (!faqs || faqs.length === 0) return '';
  return `<section class="content-section" id="faqs" aria-labelledby="faq-heading">
<h2 id="faq-heading"><span class="section-icon" style="background:rgba(124,58,237,0.15);color:#a78bfa;">?</span> Frequently Asked Questions</h2>
<div class="faq-list">
${faqs.map(faq => `<div class="faq-item">
<button class="faq-question" aria-expanded="false">${escapeHtml(faq.question)}<span class="faq-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></span></button>
<div class="faq-answer"><p>${escapeHtml(faq.answer)}</p></div>
</div>`).join('\n')}
</div>
</section>`;
}

function youtubeEmbed(video) {
  if (!video || !video.youtubeId) return '';
  return `<div class="youtube-facade" data-video-id="${escapeHtml(video.youtubeId)}" data-title="${escapeHtml(video.title)}" role="button" aria-label="Play ${escapeHtml(video.title)}">
<img src="https://img.youtube.com/vi/${escapeHtml(video.youtubeId)}/hqdefault.jpg" alt="${escapeHtml(video.title)} thumbnail" width="480" height="360" loading="lazy">
<div class="youtube-play-btn" aria-hidden="true"></div>
</div>
<p class="video-title">${escapeHtml(video.title)}</p>`;
}

function showCard(show) {
  return `<a href="/shows/${show.slug}/" class="card" data-tags="${escapeHtml((show.genre || []).concat(show.tags || []).join(' ').toLowerCase())}">
<div class="card-body">
<div class="card-meta" style="margin-bottom:0.5rem;">
<span class="tag tag-network">${escapeHtml(show.network)}</span>
<span class="tag ${show.status === 'Ongoing' ? 'tag-status-ongoing' : 'tag-status-ended'}">${escapeHtml(show.status)}</span>
</div>
<h3 class="card-title">${escapeHtml(show.title)}</h3>
<p class="card-subtitle">${escapeHtml(show.years)} &middot; ${show.seasons} Season${show.seasons !== 1 ? 's' : ''}</p>
<p class="card-description">${escapeHtml(show.synopsisShort)}</p>
<div class="card-meta">
${tagsHtml(show.genre.slice(0, 3), 'tag tag-genre')}
${fanHeatBadge(show.fanHeatScore)}
</div>
</div>
</a>`;
}

function characterCard(character) {
  return `<a href="/characters/${character.slug}/" class="card" data-tags="${escapeHtml((character.tags || []).join(' ').toLowerCase())}">
<div class="card-body">
<span class="tag" style="margin-bottom:0.5rem;font-size:0.65rem;">${escapeHtml(character.showTitle)}</span>
<h3 class="card-title">${escapeHtml(character.name)}</h3>
<p class="card-subtitle">Played by ${escapeHtml(character.actorName)}</p>
<div class="card-meta">
<span class="tag tag-genre">${escapeHtml(character.seasonsActive)}</span>
${fanHeatBadge(character.fanHeatIndex?.overall || 0)}
</div>
</div>
</a>`;
}

function actorCard(actor) {
  const mainRole = (actor.knownFor && actor.knownFor[0]) ? actor.knownFor[0] : null;
  return `<a href="/actors/${actor.slug}/" class="card" data-tags="${escapeHtml((actor.tags || []).join(' ').toLowerCase())}">
<div class="card-body">
<h3 class="card-title">${escapeHtml(actor.name)}</h3>
${mainRole ? `<p class="card-subtitle">${escapeHtml(mainRole.characterName)} in ${escapeHtml(mainRole.showTitle)}</p>` : ''}
<div class="card-meta" style="margin-top:auto;">
${actor.knownFor ? `<span class="tag">${actor.knownFor.length} Role${actor.knownFor.length !== 1 ? 's' : ''}</span>` : ''}
</div>
</div>
</a>`;
}

function ecosystemSection(ecosystem) {
  if (!ecosystem) return '<p style="color:var(--color-text-muted);">Fan ecosystem data coming soon.</p>';

  const platforms = [
    { key: 'redditCommunities', name: 'Reddit', icon: '💬', iconClass: 'icon-reddit' },
    { key: 'youtubeChannels', name: 'YouTube', icon: '▶', iconClass: 'icon-youtube' },
    { key: 'instagramAccounts', name: 'Instagram', icon: '📷', iconClass: 'icon-instagram' },
    { key: 'tiktokCreators', name: 'TikTok', icon: '🎵', iconClass: 'icon-tiktok' },
    { key: 'twitterAccounts', name: 'Twitter/X', icon: '🐦', iconClass: 'icon-twitter' },
    { key: 'fanSites', name: 'Fan Sites', icon: '🌐', iconClass: 'icon-web' },
  ];

  let html = '<div class="ecosystem-grid">';
  platforms.forEach(p => {
    const items = ecosystem[p.key];
    if (!items || items.length === 0) return;
    html += `<div class="ecosystem-platform">
<div class="ecosystem-platform-header">
<span class="ecosystem-platform-icon ${p.iconClass}">${p.icon}</span>
<span class="ecosystem-platform-name">${p.name}</span>
</div>
<div class="ecosystem-links">
${items.map(link => `<a href="${escapeHtml(link.url)}" class="ecosystem-link" target="_blank" rel="noopener noreferrer">
<div><span class="ecosystem-link-name">${escapeHtml(link.name)}</span>
${link.description ? `<br><span class="ecosystem-link-desc">${escapeHtml(link.description)}</span>` : ''}</div>
</a>`).join('')}
</div>
</div>`;
  });
  html += '</div>';
  return html;
}

function fanHeatBreakdown(heat) {
  if (!heat) return '';
  const metrics = [
    { label: 'Engagement', key: 'engagement', cls: 'engagement' },
    { label: 'Social Activity', key: 'socialActivity', cls: 'social' },
    { label: 'Meme Velocity', key: 'memeVelocity', cls: 'meme' },
    { label: 'Fan Art Density', key: 'fanArtDensity', cls: 'fanart' },
    { label: 'Fandom Longevity', key: 'fandomLongevity', cls: 'longevity' },
  ];
  return `<div class="heat-breakdown">
${metrics.map(m => `<div class="heat-metric">
<span class="heat-metric-label">${m.label}</span>
<div class="heat-metric-bar"><div class="heat-metric-fill heat-metric-fill-${m.cls}" data-width="${heat[m.key] || 0}" style="width:${heat[m.key] || 0}%"></div></div>
<span class="heat-metric-value">${heat[m.key] || 0}</span>
</div>`).join('\n')}
</div>`;
}

// ========== PAGE BUILDERS ==========

function buildHomepage() {
  console.log('Building: Homepage');

  // Sort characters by fan heat for trending
  const trendingChars = [...characters].sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0)).slice(0, 10);
  const topShows = [...shows].sort((a, b) => b.fanHeatScore - a.fanHeatScore);

  const homeFaqs = [
    { question: 'What is TVCeleb.com?', answer: 'TVCeleb.com is the world\'s largest repository of TV character fan sites, fan social media, and aggregated content. It provides character-centric indexing, fan ecosystem mapping, and aggregated fan-generated content for every major TV show.' },
    { question: 'How is TVCeleb.com different from other TV databases?', answer: 'Unlike traditional TV databases that focus on cast lists and episode guides, TVCeleb.com is character-first. We map entire fan ecosystems including fan sites, social accounts, fan art communities, and discussion hubs for every character across every show.' },
    { question: 'What is the Fan Heat Index?', answer: 'The Fan Heat Index is TVCeleb.com\'s proprietary scoring system that measures a character\'s fandom activity. It combines engagement scores, social activity, meme velocity, fan art density, and fandom longevity into a single 0-100 score.' },
    { question: 'How many TV shows does TVCeleb.com cover?', answer: 'TVCeleb.com currently covers 10 major TV shows across multiple genres including drama, comedy, fantasy, sci-fi, thriller, and romance, with over 60 character profiles and 50 actor pages. We are constantly expanding our coverage.' },
    { question: 'Can I search for specific characters or shows on TVCeleb.com?', answer: 'Yes! TVCeleb.com features a comprehensive search function that lets you find characters by name, show, actor, genre, or tags. You can search from the homepage or use the dedicated search page.' },
  ];

  const content = `
<section class="hero">
<div class="container hero-content">
<span class="hero-badge">The Global TV Character Index</span>
<h1>The Living Archive of <span class="gradient-text">TV Fandom</span></h1>
<p class="hero-description">Explore characters, fan communities, and ecosystems across every TV show. Discover fan sites, social accounts, and aggregated content all in one place.</p>
<form id="hero-search-form" class="search-container" role="search" aria-label="Search TVCeleb">
<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
<input type="search" class="search-input" placeholder="Search characters, shows, actors..." aria-label="Search characters, shows, and actors" autocomplete="off">
</form>
<div class="hero-stats">
<div class="hero-stat"><div class="hero-stat-number">${shows.length}</div><div class="hero-stat-label">TV Shows</div></div>
<div class="hero-stat"><div class="hero-stat-number">${characters.length}</div><div class="hero-stat-label">Characters</div></div>
<div class="hero-stat"><div class="hero-stat-number">${actors.length}</div><div class="hero-stat-label">Actors</div></div>
</div>
</div>
</section>

${trendingChars.length > 0 ? `<section class="section" aria-labelledby="trending-heading">
<div class="container">
<div class="section-header">
<h2 id="trending-heading" class="section-title">Trending Characters</h2>
<p class="section-subtitle">Characters with the highest Fan Heat Index scores right now</p>
</div>
<div class="scroll-section"><div class="scroll-row">
${trendingChars.map(ch => characterCard(ch)).join('\n')}
</div></div>
</div>
</section>` : ''}

<section class="section" aria-labelledby="shows-heading">
<div class="container">
<div class="section-header">
<h2 id="shows-heading" class="section-title">Featured Shows</h2>
<p class="section-subtitle">Explore the most iconic TV shows and their fan ecosystems</p>
</div>
<div class="card-grid">
${topShows.map(s => showCard(s)).join('\n')}
</div>
</div>
</section>

${trendingChars.length > 0 ? `<section class="section" aria-labelledby="leaders-heading">
<div class="container container-narrow">
<div class="section-header">
<h2 id="leaders-heading" class="section-title">Fan Heat Leaders</h2>
<p class="section-subtitle">The most beloved characters by fandom activity</p>
</div>
<div class="leaderboard">
${trendingChars.map((ch, i) => `<a href="/characters/${ch.slug}/" class="leaderboard-item">
<span class="leaderboard-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</span>
<div class="leaderboard-info"><span class="leaderboard-name">${escapeHtml(ch.name)}</span><span class="leaderboard-show">${escapeHtml(ch.showTitle)}</span></div>
<div class="leaderboard-score">${fanHeatBadge(ch.fanHeatIndex?.overall || 0)}</div>
</a>`).join('\n')}
</div>
</div>
</section>` : ''}

<section class="section" aria-labelledby="home-faq-heading">
<div class="container container-narrow">
<div class="section-header">
<h2 id="home-faq-heading" class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list">
${homeFaqs.map(faq => `<div class="faq-item">
<button class="faq-question" aria-expanded="false">${escapeHtml(faq.question)}<span class="faq-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></span></button>
<div class="faq-answer"><p>${escapeHtml(faq.answer)}</p></div>
</div>`).join('\n')}
</div>
</div>
</section>`;

  const jsonLd = [jsonLdWebsite()];
  const faqLd = jsonLdFaqPage(homeFaqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'index.html'), layout({
    title: 'TVCeleb.com - The Living Archive of TV Fandom',
    description: SITE_DESCRIPTION,
    canonical: SITE_URL + '/',
    jsonLd,
    content
  }));
}

function buildShowsDirectory() {
  console.log('Building: Shows Directory');
  const allGenres = [...new Set(shows.flatMap(s => s.genre))].sort();

  const bc = [{ label: 'Home', url: '/' }, { label: 'Shows' }];
  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">All TV Shows</h1>
<p class="section-subtitle">Explore ${shows.length} iconic TV shows and their character fan ecosystems</p>
</div>
<div class="filter-bar" data-target="shows-grid" role="group" aria-label="Filter shows by genre">
<button class="filter-btn active" data-filter="all">All</button>
${allGenres.map(g => `<button class="filter-btn" data-filter="${escapeHtml(g.toLowerCase())}">${escapeHtml(g)}</button>`).join('\n')}
</div>
<div class="card-grid" id="shows-grid">
${shows.map(s => showCard(s)).join('\n')}
</div>
</div>
</section>`;

  const itemListLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All TV Shows on TVCeleb.com",
    "numberOfItems": shows.length,
    "itemListElement": shows.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": s.title,
      "url": `${SITE_URL}/shows/${s.slug}/`
    }))
  });

  writeFile(path.join(OUT_DIR, 'shows', 'index.html'), layout({
    title: 'All TV Shows - Browse the Complete Directory',
    description: `Browse all ${shows.length} TV shows on TVCeleb.com. Filter by genre and explore character fan ecosystems for each show.`,
    canonical: SITE_URL + '/shows/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc), itemListLd],
    content
  }));
}

function buildShowPage(show) {
  console.log(`Building: Show - ${show.title}`);
  const showCharacters = (show.characterSlugs || []).map(getCharacter).filter(Boolean);
  const relatedShows = (show.relatedShowSlugs || []).map(getShow).filter(Boolean);
  const bc = [{ label: 'Home', url: '/' }, { label: 'Shows', url: '/shows/' }, { label: show.title }];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>${escapeHtml(show.title)}</h1>
<div class="page-hero-meta">
<span class="tag tag-network">${escapeHtml(show.network)}</span>
<span class="page-hero-meta-divider">&middot;</span>
<span>${escapeHtml(show.years)}</span>
<span class="page-hero-meta-divider">&middot;</span>
<span>${show.seasons} Season${show.seasons !== 1 ? 's' : ''}</span>
<span class="page-hero-meta-divider">&middot;</span>
<span>${show.episodes} Episodes</span>
<span class="page-hero-meta-divider">&middot;</span>
<span class="tag ${show.status === 'Ongoing' ? 'tag-status-ongoing' : 'tag-status-ended'}">${escapeHtml(show.status)}</span>
</div>
<div style="margin-top:var(--space-3);">${tagsHtml(show.genre, 'tag tag-genre')}</div>
<div style="margin-top:var(--space-4);">${fanHeatCircle(show.fanHeatScore)}</div>
</div>
</div>
</div>
</section>

<div class="container">
<section class="content-section" id="synopsis" aria-labelledby="synopsis-heading">
<h2 id="synopsis-heading">About ${escapeHtml(show.title)}</h2>
<div class="character-arc"><p>${escapeHtml(show.synopsis)}</p></div>
</section>

${showCharacters.length > 0 ? `<section class="content-section" id="characters" aria-labelledby="characters-heading">
<h2 id="characters-heading">Characters (${showCharacters.length})</h2>
<div class="card-grid">
${showCharacters.map(ch => characterCard(ch)).join('\n')}
</div>
</section>` : ''}

${show.videos && show.videos.length > 0 ? `<section class="content-section" id="videos" aria-labelledby="videos-heading">
<h2 id="videos-heading">Videos</h2>
<div class="videos-grid">
${show.videos.map(v => `<div>${youtubeEmbed(v)}</div>`).join('\n')}
</div>
</section>` : ''}

${relatedShows.length > 0 ? `<section class="content-section" id="related" aria-labelledby="related-heading">
<h2 id="related-heading">Related Shows</h2>
<div class="card-grid">
${relatedShows.map(s => showCard(s)).join('\n')}
</div>
</section>` : ''}

${faqSectionHtml(show.faqs)}
</div>`;

  const jsonLd = [jsonLdTvSeries(show), jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(show.faqs);
  if (faqLd) jsonLd.push(faqLd);
  show.videos?.forEach(v => { const vld = jsonLdVideo(v, show.slug); if (vld) jsonLd.push(vld); });

  writeFile(path.join(OUT_DIR, 'shows', show.slug, 'index.html'), layout({
    title: `${show.title} - Characters, Fan Ecosystem & Community`,
    description: `Explore ${show.title} (${show.years}) on TVCeleb.com. ${show.synopsisShort} Browse ${(show.characterSlugs || []).length} characters, fan communities, and more.`,
    canonical: `${SITE_URL}/shows/${show.slug}/`,
    ogType: 'video.tv_show',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

function buildCharactersDirectory() {
  console.log('Building: Characters Directory');
  const allShows = [...new Set(characters.map(c => c.showTitle))].sort();
  const bc = [{ label: 'Home', url: '/' }, { label: 'Characters' }];

  const sortedChars = [...characters].sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0));

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">All Characters</h1>
<p class="section-subtitle">Explore ${characters.length} TV characters and their fan ecosystems</p>
</div>
<div class="filter-bar" data-target="chars-grid" role="group" aria-label="Filter characters by show">
<button class="filter-btn active" data-filter="all">All</button>
${allShows.map(s => `<button class="filter-btn" data-filter="${escapeHtml(s.toLowerCase())}">${escapeHtml(s)}</button>`).join('\n')}
</div>
<div class="card-grid" id="chars-grid">
${sortedChars.map(ch => {
  const card = characterCard(ch);
  // Add show name to data-tags for filtering
  return card.replace('data-tags="', `data-tags="${escapeHtml(ch.showTitle.toLowerCase())} `);
}).join('\n')}
</div>
</div>
</section>`;

  const charListLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All TV Characters on TVCeleb.com",
    "numberOfItems": sortedChars.length,
    "itemListElement": sortedChars.slice(0, 50).map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "url": `${SITE_URL}/characters/${c.slug}/`
    }))
  });

  writeFile(path.join(OUT_DIR, 'characters', 'index.html'), layout({
    title: 'All TV Characters - The Global Character Index',
    description: `Browse all ${characters.length} TV characters on TVCeleb.com. Discover character arcs, fan ecosystems, and community hubs across ${shows.length} shows.`,
    canonical: SITE_URL + '/characters/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc), charListLd],
    content
  }));
}

function buildCharacterPage(character) {
  console.log(`Building: Character - ${character.name}`);
  const show = getShow(character.showSlug);
  const actor = getActor(character.actorSlug);
  const relatedChars = (character.relatedCharacterSlugs || []).map(getCharacter).filter(Boolean);

  const bc = [
    { label: 'Home', url: '/' },
    { label: 'Shows', url: '/shows/' },
    ...(show ? [{ label: show.title, url: `/shows/${show.slug}/` }] : []),
    { label: character.name }
  ];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content">
${character.image?.src ? `<img class="page-hero-image" src="${escapeHtml(character.image.src)}" alt="${escapeHtml(character.image.alt || character.actorName + ' as ' + character.name)}" width="${character.image.width || 240}" height="${character.image.height || 320}" loading="eager" fetchpriority="high">` : `<div class="page-hero-image placeholder-img" aria-hidden="true">${escapeHtml(character.name[0])}</div>`}
<div class="page-hero-info">
<h1>${escapeHtml(character.name)}</h1>
<div class="page-hero-meta">
${actor ? `<span>Played by <a href="/actors/${actor.slug}/">${escapeHtml(actor.name)}</a></span>` : `<span>Played by ${escapeHtml(character.actorName)}</span>`}
<span class="page-hero-meta-divider">&middot;</span>
${show ? `<a href="/shows/${show.slug}/">${escapeHtml(show.title)}</a>` : `<span>${escapeHtml(character.showTitle)}</span>`}
<span class="page-hero-meta-divider">&middot;</span>
<span>${escapeHtml(character.seasonsActive)}</span>
</div>
<div style="margin-top:var(--space-3);">${tagsHtml(character.tags)}</div>
<div style="margin-top:var(--space-4);">${fanHeatCircle(character.fanHeatIndex?.overall || 0)}</div>
</div>
</div>
</div>
</section>

<div class="container">
${character.characterArc ? `<section class="content-section" id="character-arc" aria-labelledby="arc-heading">
<h2 id="arc-heading">Character Arc</h2>
<div class="character-arc">${character.characterArc.split('\n\n').map(p => `<p>${escapeHtml(p.trim())}</p>`).join('\n')}</div>
</section>` : ''}

${character.keyEpisodes && character.keyEpisodes.length > 0 ? `<section class="content-section" id="key-episodes" aria-labelledby="episodes-heading">
<h2 id="episodes-heading">Key Episodes</h2>
<div class="episodes-list">
${character.keyEpisodes.map(ep => `<article class="episode-item">
<div class="episode-number">S${ep.season}<br>E${ep.episode}</div>
<div class="episode-info"><h4>${escapeHtml(ep.title)}</h4><p>${escapeHtml(ep.description)}</p></div>
</article>`).join('\n')}
</div>
</section>` : ''}

<section class="content-section" id="fan-ecosystem" aria-labelledby="ecosystem-heading">
<h2 id="ecosystem-heading"><span class="section-icon icon-web">🌐</span> Fan Ecosystem</h2>
${ecosystemSection(character.fanEcosystem)}
</section>

${character.videos && character.videos.length > 0 ? `<section class="content-section" id="content-feed" aria-labelledby="feed-heading">
<h2 id="feed-heading"><span class="section-icon icon-youtube">▶</span> Videos &amp; Content</h2>
<div class="videos-grid">
${character.videos.map(v => `<div>${youtubeEmbed(v)}</div>`).join('\n')}
</div>
</section>` : ''}

${character.fanHeatIndex ? `<section class="content-section" id="fan-heat" aria-labelledby="heat-heading">
<h2 id="heat-heading">Fan Heat Index Breakdown</h2>
${fanHeatBreakdown(character.fanHeatIndex)}
</section>` : ''}

${relatedChars.length > 0 ? `<section class="content-section" id="related-characters" aria-labelledby="related-heading">
<h2 id="related-heading">Related Characters</h2>
<div class="card-grid">
${relatedChars.map(ch => characterCard(ch)).join('\n')}
</div>
</section>` : ''}

${quotesSection(character)}

${faqSectionHtml(character.faqs)}

${character.image?.attribution ? `<aside class="content-section" style="padding-top:var(--space-4);"><p style="font-size:var(--text-xs);color:var(--color-text-muted);">Photo: ${escapeHtml(character.image.attribution)}</p></aside>` : ''}
</div>`;

  const jsonLd = [jsonLdCharacter(character), jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(character.faqs);
  if (faqLd) jsonLd.push(faqLd);
  character.videos?.forEach(v => { const vld = jsonLdVideo(v, character.showSlug); if (vld) jsonLd.push(vld); });

  const descArc = character.characterArc ? character.characterArc.substring(0, 140).replace(/\n/g, ' ') + '...' : '';

  writeFile(path.join(OUT_DIR, 'characters', character.slug, 'index.html'), layout({
    title: `${character.name} - ${character.showTitle} Character Fan Hub`,
    description: `${character.name} from ${character.showTitle}, played by ${character.actorName}. ${descArc} Explore the fan ecosystem, content feed, and community.`,
    canonical: `${SITE_URL}/characters/${character.slug}/`,
    ogType: 'profile',
    ogImage: character.image?.src,
    ogImageAlt: character.image?.alt || `${character.name} from ${character.showTitle}`,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

function buildActorsDirectory() {
  console.log('Building: Actors Directory');
  const bc = [{ label: 'Home', url: '/' }, { label: 'Actors' }];

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">All Actors</h1>
<p class="section-subtitle">Explore ${actors.length} actors and their iconic TV roles</p>
</div>
<div class="card-grid" id="actors-grid">
${actors.map(a => actorCard(a)).join('\n')}
</div>
</div>
</section>`;

  const actorListLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All TV Actors on TVCeleb.com",
    "numberOfItems": actors.length,
    "itemListElement": actors.slice(0, 50).map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": a.name,
      "url": `${SITE_URL}/actors/${a.slug}/`
    }))
  });

  writeFile(path.join(OUT_DIR, 'actors', 'index.html'), layout({
    title: 'All Actors - TV Actor Directory',
    description: `Browse all ${actors.length} TV actors on TVCeleb.com. Discover their iconic roles, career highlights, and fan communities.`,
    canonical: SITE_URL + '/actors/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc), actorListLd],
    content
  }));
}

function buildActorPage(actor) {
  console.log(`Building: Actor - ${actor.name}`);
  const bc = [{ label: 'Home', url: '/' }, { label: 'Actors', url: '/actors/' }, { label: actor.name }];

  const roles = (actor.knownFor || []).map(role => {
    const ch = getCharacter(role.characterSlug);
    const show = getShow(role.showSlug);
    return { ...role, character: ch, show };
  });

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content">
${actor.image?.src ? `<img class="page-hero-image" src="${escapeHtml(actor.image.src)}" alt="${escapeHtml(actor.image.alt || actor.name)}" width="${actor.image.width || 240}" height="${actor.image.height || 320}" loading="eager" fetchpriority="high">` : `<div class="page-hero-image placeholder-img" aria-hidden="true">${escapeHtml(actor.name[0])}</div>`}
<div class="page-hero-info">
<h1>${escapeHtml(actor.name)}</h1>
<div class="page-hero-meta">
${actor.birthPlace ? `<span>${escapeHtml(actor.birthPlace)}</span>` : ''}
${actor.birthDate ? `<span class="page-hero-meta-divider">&middot;</span><span>Born <time datetime="${escapeHtml(actor.birthDate)}">${escapeHtml(actor.birthDate)}</time></span>` : ''}
</div>
${actor.socialLinks ? `<div class="social-links" style="margin-top:var(--space-4);">
${actor.socialLinks.imdb ? `<a href="${escapeHtml(actor.socialLinks.imdb)}" class="social-link" target="_blank" rel="noopener noreferrer">IMDb</a>` : ''}
${actor.socialLinks.wikipedia ? `<a href="${escapeHtml(actor.socialLinks.wikipedia)}" class="social-link" target="_blank" rel="noopener noreferrer">Wikipedia</a>` : ''}
${actor.socialLinks.instagram ? `<a href="${escapeHtml(actor.socialLinks.instagram)}" class="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>` : ''}
${actor.socialLinks.twitter ? `<a href="${escapeHtml(actor.socialLinks.twitter)}" class="social-link" target="_blank" rel="noopener noreferrer">Twitter/X</a>` : ''}
</div>` : ''}
</div>
</div>
</div>
</section>

<div class="container">
${actor.bio ? `<section class="content-section" id="biography" aria-labelledby="bio-heading">
<h2 id="bio-heading">Biography</h2>
<div class="character-arc">${actor.bio.split('\n\n').map(p => `<p>${escapeHtml(p.trim())}</p>`).join('\n')}</div>
</section>` : ''}

${roles.length > 0 ? `<section class="content-section" id="roles" aria-labelledby="roles-heading">
<h2 id="roles-heading">Known For</h2>
<div class="roles-grid">
${roles.map(r => `<a href="${r.character ? `/characters/${r.character.slug}/` : `/shows/${r.showSlug}/`}" class="role-card">
<div class="role-card-info">
<h3>${escapeHtml(r.characterName)}</h3>
<span class="role-card-show">${escapeHtml(r.showTitle)}</span>
<span class="role-card-years">${escapeHtml(r.years || '')}</span>
</div>
</a>`).join('\n')}
</div>
</section>` : ''}

${actor.otherNotableRoles && actor.otherNotableRoles.length > 0 ? `<section class="content-section" id="other-roles" aria-labelledby="other-heading">
<h2 id="other-heading">Other Notable Roles</h2>
<ul style="display:flex;flex-direction:column;gap:var(--space-2);">
${actor.otherNotableRoles.map(r => `<li style="color:var(--color-text-secondary);padding:var(--space-2) 0;border-bottom:1px solid var(--color-border);">${escapeHtml(r)}</li>`).join('\n')}
</ul>
</section>` : ''}

${actor.awards && actor.awards.length > 0 ? `<section class="content-section" id="awards" aria-labelledby="awards-heading">
<h2 id="awards-heading">Awards &amp; Recognition</h2>
<ul style="display:flex;flex-direction:column;gap:var(--space-2);">
${actor.awards.map(a => `<li style="color:var(--color-gold);padding:var(--space-2) 0;border-bottom:1px solid var(--color-border);">🏆 ${escapeHtml(a)}</li>`).join('\n')}
</ul>
</section>` : ''}

${faqSectionHtml(actor.faqs)}

${actor.image?.attribution ? `<aside class="content-section" style="padding-top:var(--space-4);"><p style="font-size:var(--text-xs);color:var(--color-text-muted);">Photo: ${escapeHtml(actor.image.attribution)}</p></aside>` : ''}
</div>`;

  const jsonLd = [jsonLdActor(actor), jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(actor.faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'actors', actor.slug, 'index.html'), layout({
    title: `${actor.name} - TV Roles, Career & Fan Community`,
    description: `${actor.name} actor profile on TVCeleb.com. ${actor.bio ? actor.bio.substring(0, 130).replace(/\n/g, ' ') + '...' : `Known for ${(actor.knownFor || []).map(r => r.characterName + ' in ' + r.showTitle).join(', ')}.`}`,
    canonical: `${SITE_URL}/actors/${actor.slug}/`,
    ogType: 'profile',
    ogImage: actor.image?.src,
    ogImageAlt: actor.image?.alt || actor.name,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

function buildSearchPage() {
  console.log('Building: Search Page');
  const bc = [{ label: 'Home', url: '/' }, { label: 'Search' }];

  const content = `<section class="search-page">
<div class="container">
<div class="section-header">
<h1 class="section-title">Search TVCeleb</h1>
<p class="section-subtitle">Find characters, shows, and actors across the TV fandom universe</p>
</div>
<div class="search-container">
<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
<input type="search" id="search-input" class="search-input" placeholder="Search characters, shows, actors..." aria-label="Search TVCeleb" autocomplete="off">
</div>
<div id="search-results"></div>
</div>
</section>`;

  writeFile(path.join(OUT_DIR, 'search', 'index.html'), layout({
    title: 'Search - Find Characters, Shows & Actors',
    description: 'Search TVCeleb.com to find TV characters, shows, actors, and fan communities. The most comprehensive TV character search engine.',
    canonical: SITE_URL + '/search/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
    content
  }));
}

function build404Page() {
  console.log('Building: 404 Page');
  const content = `<section class="not-found">
<div class="container">
<h1 class="gradient-text">404</h1>
<p>This page doesn't exist — but plenty of great TV characters do.</p>
<a href="/" class="btn btn-primary">Back to Homepage</a>
<div style="margin-top:var(--space-8);">
<a href="/characters/" class="btn btn-outline">Browse Characters</a>
<a href="/shows/" class="btn btn-outline" style="margin-left:var(--space-3);">Browse Shows</a>
</div>
</div>
</section>`;

  writeFile(path.join(OUT_DIR, '404.html'), layout({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist on TVCeleb.com.',
    canonical: SITE_URL + '/404.html',
    content
  }));
}

// ========== GENRE PAGES ==========

function getGenreSlug(genre) {
  return genre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getGenreDescription(genre) {
  const descriptions = {
    'Drama': 'Explore the most compelling TV dramas featuring complex characters, intricate storylines, and powerful performances that define the golden age of television.',
    'Comedy': 'Discover the funniest TV comedies that have made audiences laugh for decades, from workplace sitcoms to heartfelt comedic gems.',
    'Crime': 'Dive into the world of TV crime dramas featuring antiheroes, mob bosses, and the thin line between law and lawlessness.',
    'Thriller': 'Experience the most gripping TV thrillers that keep you on the edge of your seat with suspense, twists, and high stakes.',
    'Sci-Fi': 'Explore sci-fi TV series that push the boundaries of imagination with parallel dimensions, space travel, and futuristic technology.',
    'Fantasy': 'Enter the world of fantasy TV shows featuring epic battles, mythical creatures, and richly imagined worlds.',
    'Romance': 'Discover the most captivating TV romances that have captured hearts worldwide, from period dramas to modern love stories.',
    'Horror': 'Explore the scariest TV horror series featuring supernatural creatures, psychological terror, and spine-chilling mysteries.',
    'Action': 'Discover action-packed TV series featuring epic battles, daring adventures, and thrilling stunts.',
    'Adventure': 'Explore TV adventures that take viewers on incredible journeys across galaxies, kingdoms, and uncharted territories.',
    'Satire': 'Discover TV satires that use sharp wit and dark humor to comment on power, wealth, and modern society.',
    'Sports': 'Explore TV shows centered on sports, teamwork, and the spirit of competition.',
    'Survival': 'Discover intense survival TV dramas where characters must fight for their lives against impossible odds.',
    'Western': 'Explore modern and classic TV westerns featuring rugged landscapes, family dynasties, and frontier justice.',
    'Period Drama': 'Step back in time with TV period dramas featuring lavish costumes, historical settings, and timeless stories.',
    'Biography': 'Discover TV biographical dramas that bring real historical figures and events to vivid life on screen.',
    'Teen': 'Explore teen TV dramas that capture the intensity of adolescence, identity, and growing up in the modern world.',
    'Mockumentary': 'Discover TV mockumentaries that blend documentary-style filmmaking with scripted comedy for uniquely hilarious results.',
    'Post-Apocalyptic': 'Explore post-apocalyptic TV series set in worlds devastated by catastrophe, where survival is the only goal.',
  };
  return descriptions[genre] || `Explore the best ${genre} TV shows, characters, and fan communities on TVCeleb.com.`;
}

function buildGenresDirectory() {
  console.log('Building: Genres Directory');
  const allGenres = [...new Set(shows.flatMap(s => s.genre))].sort();
  const bc = [{ label: 'Home', url: '/' }, { label: 'Genres' }];

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">Browse by Genre</h1>
<p class="section-subtitle">Explore ${allGenres.length} TV genres and discover shows, characters, and fan communities</p>
</div>
<div class="card-grid">
${allGenres.map(genre => {
  const genreShows = shows.filter(s => s.genre.includes(genre));
  const genreChars = characters.filter(c => {
    const show = getShow(c.showSlug);
    return show && show.genre.includes(genre);
  });
  return `<a href="/genres/${getGenreSlug(genre)}/" class="card">
<div class="card-body">
<h3 class="card-title">${escapeHtml(genre)}</h3>
<p class="card-subtitle">${genreShows.length} Show${genreShows.length !== 1 ? 's' : ''} &middot; ${genreChars.length} Characters</p>
<p class="card-description">${escapeHtml(getGenreDescription(genre).substring(0, 120))}...</p>
</div>
</a>`;
}).join('\n')}
</div>
</div>
</section>`;

  const genreFaqs = [
    { question: 'What TV genres does TVCeleb.com cover?', answer: `TVCeleb.com covers ${allGenres.length} genres including ${allGenres.slice(0, 5).join(', ')}, and more. Each genre page features all shows and characters within that genre.` },
    { question: 'How are TV shows categorized by genre?', answer: 'TV shows on TVCeleb.com can belong to multiple genres. For example, a show might be both Drama and Crime. We tag each show with all applicable genres to help you discover new favorites.' },
  ];

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(genreFaqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'genres', 'index.html'), layout({
    title: 'TV Genres - Browse Shows by Genre',
    description: `Browse ${allGenres.length} TV genres on TVCeleb.com. Explore drama, comedy, thriller, sci-fi, and more with full character and fan ecosystem coverage.`,
    canonical: SITE_URL + '/genres/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content: content + faqSectionHtml(genreFaqs)
  }));
}

function buildGenrePage(genre) {
  const slug = getGenreSlug(genre);
  console.log(`Building: Genre - ${genre}`);
  const genreShows = shows.filter(s => s.genre.includes(genre));
  const genreChars = characters.filter(c => {
    const show = getShow(c.showSlug);
    return show && show.genre.includes(genre);
  }).sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0));

  const bc = [{ label: 'Home', url: '/' }, { label: 'Genres', url: '/genres/' }, { label: genre }];

  const faqs = [
    { question: `What are the best ${genre} TV shows?`, answer: `TVCeleb.com covers ${genreShows.length} ${genre} shows including ${genreShows.slice(0, 3).map(s => s.title).join(', ')}${genreShows.length > 3 ? ' and more' : ''}. Each show page features detailed character profiles and fan ecosystem mapping.` },
    { question: `How many ${genre} characters are on TVCeleb.com?`, answer: `There are currently ${genreChars.length} characters from ${genre} TV shows on TVCeleb.com, each with detailed character arcs, fan community links, and Fan Heat Index scores.` },
  ];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>${escapeHtml(genre)} TV Shows &amp; Characters</h1>
<p class="hero-description">${escapeHtml(getGenreDescription(genre))}</p>
<div class="hero-stats" style="margin-top:var(--space-4);">
<div class="hero-stat"><div class="hero-stat-number">${genreShows.length}</div><div class="hero-stat-label">Shows</div></div>
<div class="hero-stat"><div class="hero-stat-number">${genreChars.length}</div><div class="hero-stat-label">Characters</div></div>
</div>
</div>
</div>
</div>
</section>

<div class="container">
<section class="content-section" id="shows" aria-labelledby="genre-shows-heading">
<h2 id="genre-shows-heading">${escapeHtml(genre)} Shows (${genreShows.length})</h2>
<div class="card-grid">
${genreShows.map(s => showCard(s)).join('\n')}
</div>
</section>

${genreChars.length > 0 ? `<section class="content-section" id="characters" aria-labelledby="genre-chars-heading">
<h2 id="genre-chars-heading">Top ${escapeHtml(genre)} Characters (${genreChars.length})</h2>
<div class="card-grid">
${genreChars.slice(0, 24).map(ch => characterCard(ch)).join('\n')}
</div>
</section>` : ''}

${faqSectionHtml(faqs)}
</div>`;

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'genres', slug, 'index.html'), layout({
    title: `${genre} TV Shows - Best ${genre} Series & Characters`,
    description: `Explore ${genreShows.length} ${genre} TV shows and ${genreChars.length} characters on TVCeleb.com. ${getGenreDescription(genre).substring(0, 100)}`,
    canonical: `${SITE_URL}/genres/${slug}/`,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

// ========== NETWORK PAGES ==========

function getNetworkSlug(network) {
  return network.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getNetworkDescription(network) {
  const descriptions = {
    'HBO': 'Home Box Office is the premium cable network behind some of the most acclaimed series in television history, from The Sopranos to Game of Thrones.',
    'Netflix': 'Netflix is the world\'s leading streaming entertainment service with original series that have redefined global television.',
    'NBC': 'NBC is one of the oldest American television networks, home to iconic comedies and dramas that have shaped popular culture.',
    'AMC': 'AMC Networks is known for groundbreaking dramas that have pushed the boundaries of television storytelling.',
    'FX': 'FX Networks is known for bold, critically acclaimed original programming that consistently pushes creative boundaries.',
    'BBC': 'The BBC is the world\'s oldest and largest national broadcaster, producing iconic British television for global audiences.',
    'Disney+': 'Disney+ is the streaming home for content from Disney, Pixar, Marvel, Star Wars, and National Geographic.',
    'Apple TV+': 'Apple TV+ features critically acclaimed original series and films from the world\'s most creative storytellers.',
    'Paramount Network': 'Paramount Network is known for programming that captures the spirit of American storytelling and the modern West.',
    'CBC/Pop TV': 'CBC (Canadian Broadcasting Corporation) and Pop TV bring Canadian content and sleeper hits to audiences worldwide.',
  };
  return descriptions[network] || `Explore TV shows from ${network} and their characters, fan communities, and ecosystems.`;
}

function buildNetworksDirectory() {
  console.log('Building: Networks Directory');
  const allNetworks = [...new Set(shows.map(s => s.network))].sort();
  const bc = [{ label: 'Home', url: '/' }, { label: 'Networks' }];

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">Browse by Network</h1>
<p class="section-subtitle">Explore TV shows organized by network and streaming platform</p>
</div>
<div class="card-grid">
${allNetworks.map(network => {
  const networkShows = shows.filter(s => s.network === network);
  return `<a href="/networks/${getNetworkSlug(network)}/" class="card">
<div class="card-body">
<h3 class="card-title">${escapeHtml(network)}</h3>
<p class="card-subtitle">${networkShows.length} Show${networkShows.length !== 1 ? 's' : ''}</p>
<p class="card-description">${escapeHtml(getNetworkDescription(network).substring(0, 120))}...</p>
<div class="card-meta" style="margin-top:var(--space-3);">
${networkShows.slice(0, 3).map(s => `<span class="tag">${escapeHtml(s.title)}</span>`).join('')}
</div>
</div>
</a>`;
}).join('\n')}
</div>
</div>
</section>`;

  writeFile(path.join(OUT_DIR, 'networks', 'index.html'), layout({
    title: 'TV Networks - Browse Shows by Network & Platform',
    description: `Browse TV shows by network on TVCeleb.com. Explore series from HBO, Netflix, NBC, AMC, and more with full character and fan ecosystem coverage.`,
    canonical: SITE_URL + '/networks/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
    content
  }));
}

function buildNetworkPage(network) {
  const slug = getNetworkSlug(network);
  console.log(`Building: Network - ${network}`);
  const networkShows = shows.filter(s => s.network === network);
  const networkChars = characters.filter(c => {
    const show = getShow(c.showSlug);
    return show && show.network === network;
  }).sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0));

  const bc = [{ label: 'Home', url: '/' }, { label: 'Networks', url: '/networks/' }, { label: network }];

  const faqs = [
    { question: `What shows does ${network} have on TVCeleb.com?`, answer: `TVCeleb.com covers ${networkShows.length} ${network} shows: ${networkShows.map(s => s.title).join(', ')}. Each show page features detailed character profiles and fan ecosystem mapping.` },
    { question: `How many characters from ${network} shows are featured?`, answer: `There are ${networkChars.length} characters from ${network} shows on TVCeleb.com, each with Fan Heat Index scores, character arcs, and fan community links.` },
  ];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>${escapeHtml(network)} TV Shows</h1>
<p class="hero-description">${escapeHtml(getNetworkDescription(network))}</p>
<div class="hero-stats" style="margin-top:var(--space-4);">
<div class="hero-stat"><div class="hero-stat-number">${networkShows.length}</div><div class="hero-stat-label">Shows</div></div>
<div class="hero-stat"><div class="hero-stat-number">${networkChars.length}</div><div class="hero-stat-label">Characters</div></div>
</div>
</div>
</div>
</div>
</section>

<div class="container">
<section class="content-section" id="shows" aria-labelledby="network-shows-heading">
<h2 id="network-shows-heading">${escapeHtml(network)} Shows (${networkShows.length})</h2>
<div class="card-grid">
${networkShows.map(s => showCard(s)).join('\n')}
</div>
</section>

${networkChars.length > 0 ? `<section class="content-section" id="characters" aria-labelledby="network-chars-heading">
<h2 id="network-chars-heading">Top ${escapeHtml(network)} Characters</h2>
<div class="leaderboard">
${networkChars.slice(0, 15).map((ch, i) => `<a href="/characters/${ch.slug}/" class="leaderboard-item">
<span class="leaderboard-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</span>
<div class="leaderboard-info"><span class="leaderboard-name">${escapeHtml(ch.name)}</span><span class="leaderboard-show">${escapeHtml(ch.showTitle)}</span></div>
<div class="leaderboard-score">${fanHeatBadge(ch.fanHeatIndex?.overall || 0)}</div>
</a>`).join('\n')}
</div>
</section>` : ''}

${faqSectionHtml(faqs)}
</div>`;

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'networks', slug, 'index.html'), layout({
    title: `${network} TV Shows - Characters & Fan Communities`,
    description: `Explore ${networkShows.length} ${network} TV shows and ${networkChars.length} characters on TVCeleb.com. ${getNetworkDescription(network).substring(0, 100)}`,
    canonical: `${SITE_URL}/networks/${slug}/`,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

// ========== CURATED LIST PAGES ==========

function getCuratedLists() {
  return [
    {
      slug: 'greatest-tv-villains',
      title: 'Greatest TV Villains of All Time',
      description: 'The most iconic, terrifying, and complex villains in television history. These antagonists elevated their shows and became cultural touchstones.',
      intro: 'Television has given us some of the most memorable villains in storytelling history. From cunning drug lords to ruthless mob bosses, these characters are defined by their complexity, menace, and the performances that brought them to life.',
      tags: ['villain', 'antagonist', 'anti-hero'],
      filterFn: (ch) => {
        const villainSlugs = ['gus-fring', 'cersei-lannister', 'nate-jacobs', 'jang-deok-su', 'moff-gideon', 'the-front-man', 'tony-soprano', 'thomas-shelby', 'logan-roy'];
        return villainSlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'Who is the greatest TV villain of all time?', answer: 'While opinions vary, characters like Gus Fring from Breaking Bad, Cersei Lannister from Game of Thrones, and Tony Soprano from The Sopranos consistently rank among the greatest TV villains ever. Their complexity and memorable performances set the standard for television antagonists.' },
        { question: 'What makes a great TV villain?', answer: 'The best TV villains are complex characters with clear motivations, compelling backstories, and nuanced performances. They challenge the protagonist in meaningful ways and often blur the line between hero and villain, making viewers question their own moral compass.' },
      ]
    },
    {
      slug: 'most-iconic-tv-duos',
      title: 'Most Iconic TV Duos & Partnerships',
      description: 'The greatest partnerships in TV history - from crime partners to unlikely friendships, these duos defined their shows.',
      intro: 'Some of television\'s greatest moments come from the chemistry between two characters. These iconic duos have captivated audiences with their dynamic relationships, whether built on friendship, rivalry, or something more complex.',
      tags: ['duo', 'partnership', 'chemistry'],
      customEntries: [
        { name: 'Walter White & Jesse Pinkman', show: 'Breaking Bad', slugs: ['walter-white', 'jesse-pinkman'], description: 'The teacher-student meth partnership that became TV\'s most complex relationship.' },
        { name: 'Joel & Ellie', show: 'The Last of Us', slugs: ['joel-miller', 'ellie-williams'], description: 'A surrogate father-daughter bond forged in a post-apocalyptic world.' },
        { name: 'Din Djarin & Grogu', show: 'The Mandalorian', slugs: ['din-djarin', 'grogu'], description: 'The bounty hunter and Baby Yoda became the galaxy\'s most beloved duo.' },
        { name: 'Ross & Rachel', show: 'Friends', slugs: ['ross-geller', 'rachel-green'], description: 'TV\'s most famous will-they-won\'t-they romance spanning 10 seasons.' },
        { name: 'David & Patrick', show: "Schitt's Creek", slugs: ['david-rose', 'patrick-brewer'], description: 'A love story that became one of TV\'s most celebrated LGBTQ+ romances.' },
        { name: 'Ted & Rebecca', show: 'Ted Lasso', slugs: ['ted-lasso-character', 'rebecca-welton'], description: 'An unlikely friendship built on mutual respect that transformed AFC Richmond.' },
        { name: 'Carmy & Sydney', show: 'The Bear', slugs: ['carmy-berzatto', 'sydney-adamu'], description: 'Chef partners pushing each other toward culinary greatness and personal growth.' },
        { name: 'Tony & Dr. Melfi', show: 'The Sopranos', slugs: ['tony-soprano', 'jennifer-melfi'], description: 'The groundbreaking therapist-patient dynamic that anchored prestige TV.' },
      ],
      faqs: [
        { question: 'What are the most iconic TV duos?', answer: 'Some of the most iconic TV duos include Walter White & Jesse Pinkman (Breaking Bad), Joel & Ellie (The Last of Us), Ross & Rachel (Friends), and Din Djarin & Grogu (The Mandalorian). These partnerships defined their respective shows.' },
        { question: 'Why are TV duos so popular?', answer: 'TV duos resonate because they represent fundamental human relationships - mentorship, friendship, romance, and rivalry. The dynamic between two characters creates tension, humor, and emotional depth that single characters can\'t achieve alone.' },
      ]
    },
    {
      slug: 'best-character-arcs',
      title: 'Best Character Arcs in TV History',
      description: 'Characters who underwent the most dramatic and compelling transformations in television history.',
      intro: 'The greatest character arcs in television take familiar characters and transform them in ways that are surprising yet inevitable. These characters evolved, devolved, or revolutionized themselves across their series, creating some of the most memorable journeys in TV history.',
      tags: ['character-arc', 'transformation', 'development'],
      filterFn: (ch) => {
        const arcSlugs = ['walter-white', 'jesse-pinkman', 'jamie-tartt', 'nate-shelley', 'jaime-lannister', 'steve-harrington', 'ruth-langmore', 'david-rose', 'kendall-roy', 'thomas-shelby', 'daenerys-targaryen', 'beth-dutton'];
        return arcSlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'What is the best character arc in TV history?', answer: 'Walter White\'s transformation from mild-mannered chemistry teacher to ruthless drug lord Heisenberg in Breaking Bad is widely considered the greatest character arc in TV history. Other standout arcs include Jaime Lannister in Game of Thrones, Jamie Tartt in Ted Lasso, and Jesse Pinkman in Breaking Bad.' },
        { question: 'What makes a great character arc?', answer: 'A great character arc involves meaningful, believable change driven by the character\'s experiences and choices. The best arcs feel both surprising and inevitable, with each step of the transformation feeling earned and organic to the story.' },
      ]
    },
    {
      slug: 'fan-favorite-characters',
      title: 'Fan Favorite Characters - Highest Fan Heat Index',
      description: 'The characters with the most passionate fan followings, measured by our Fan Heat Index scoring system.',
      intro: 'The Fan Heat Index measures fandom activity across engagement, social media presence, meme velocity, fan art density, and fandom longevity. These characters have the most passionate, active, and creative fan communities in all of television.',
      tags: ['fan-favorite', 'popular', 'trending'],
      filterFn: (ch) => (ch.fanHeatIndex?.overall || 0) >= 88,
      faqs: [
        { question: 'What is the Fan Heat Index?', answer: 'The Fan Heat Index is TVCeleb.com\'s scoring system that measures a character\'s fandom activity on a scale of 0-100. It combines five sub-scores: engagement, social activity, meme velocity, fan art density, and fandom longevity.' },
        { question: 'Which TV character has the highest Fan Heat Index?', answer: 'Characters like Grogu (Baby Yoda) from The Mandalorian, Tony Soprano from The Sopranos, and Thomas Shelby from Peaky Blinders consistently rank among the highest Fan Heat scores due to their massive, active fan communities.' },
      ]
    },
    {
      slug: 'best-tv-antiheroes',
      title: 'Greatest TV Antiheroes',
      description: 'The morally complex protagonists who blurred the line between hero and villain, redefining television storytelling.',
      intro: 'The antihero revolution changed television forever. These morally ambiguous protagonists made audiences root for characters who lie, cheat, steal, and worse. Their complexity redefined what a TV lead could be.',
      tags: ['anti-hero', 'complex', 'morally-ambiguous'],
      filterFn: (ch) => {
        const antiHeroSlugs = ['walter-white', 'tony-soprano', 'thomas-shelby', 'marty-byrde', 'wendy-byrde', 'ruth-langmore', 'beth-dutton', 'kendall-roy', 'rue-bennett', 'seong-gi-hun'];
        return antiHeroSlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'Who is the greatest TV antihero?', answer: 'Tony Soprano is often credited as the original TV antihero who launched the Golden Age of Television. Walter White from Breaking Bad is frequently cited as the greatest antihero arc. Thomas Shelby, Marty Byrde, and Rue Bennett are modern examples of the archetype.' },
        { question: 'What defines a TV antihero?', answer: 'A TV antihero is a protagonist who lacks conventional heroic qualities. They may be morally ambiguous, self-interested, or outright villainous, yet the show frames them as the central character audiences follow and often root for despite their flaws.' },
      ]
    },
    {
      slug: 'best-comedy-characters',
      title: 'Funniest TV Characters of All Time',
      description: 'The most hilarious TV characters who made us laugh until we cried, from sitcom legends to dark comedy icons.',
      intro: 'Comedy is subjective, but these characters have proven their ability to make audiences laugh across generations. From Michael Scott\'s cringe-worthy antics to Moira Rose\'s theatrical vocabulary, these are the characters who defined TV comedy.',
      tags: ['comedy', 'funny', 'hilarious'],
      filterFn: (ch) => {
        const comedySlugs = ['michael-scott', 'dwight-schrute', 'chandler-bing', 'joey-tribbiani', 'phoebe-buffay', 'moira-rose', 'david-rose', 'ted-lasso-character', 'roy-kent', 'paulie-gualtieri', 'richie-jerimovich', 'alfie-solomons', 'ava-coleman', 'louis-litt'];
        return comedySlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'Who is the funniest TV character ever?', answer: 'Characters like Michael Scott (The Office), Chandler Bing (Friends), and Moira Rose (Schitt\'s Creek) are frequently cited as the funniest TV characters of all time. Each brought a unique style of humor that has become iconic.' },
        { question: 'What makes a TV character funny?', answer: 'The funniest TV characters often combine relatable human flaws with exaggerated personality traits. Great comedic characters work because they are written with consistency, performed with commitment, and placed in situations that naturally generate humor.' },
      ]
    },
    {
      slug: 'best-tv-couples',
      title: 'Best TV Couples of All Time',
      description: 'The most beloved, passionate, and unforgettable romantic relationships in television history.',
      intro: 'From slow-burn romances to love-at-first-sight pairings, these TV couples captured hearts and defined what on-screen chemistry looks like. Whether they ended happily or tragically, their love stories remain iconic.',
      tags: ['romance', 'couples', 'love-story'],
      customEntries: [
        { name: 'Harvey & Donna', show: 'Suits', slugs: ['harvey-specter', 'donna-paulsen'], description: 'Years of unresolved tension that became one of TV\'s most anticipated payoffs.' },
        { name: 'Ross & Rachel', show: 'Friends', slugs: ['ross-geller', 'rachel-green'], description: 'The original will-they-won\'t-they that defined a generation of sitcom romance.' },
        { name: 'Mike & Rachel', show: 'Suits', slugs: ['mike-ross', 'rachel-zane'], description: 'A romance complicated by secrets, tested by prison, and sealed at the altar.' },
        { name: 'Jimmy & Kim', show: 'Better Call Saul', slugs: ['jimmy-mcgill', 'kim-wexler'], description: 'A love story between two lawyers whose mutual appetite for deception led to tragedy.' },
        { name: 'David & Patrick', show: "Schitt's Creek", slugs: ['david-rose', 'patrick-brewer'], description: 'A tender, joyful love story that became one of TV\'s most celebrated LGBTQ+ romances.' },
        { name: 'Hughie & Starlight', show: 'The Boys', slugs: ['hughie-campbell', 'starlight'], description: 'An unlikely romance between a vigilante and a superhero, defying sides in a corrupt world.' },
        { name: 'Vi & Caitlyn', show: 'Arcane', slugs: ['vi-arcane', 'caitlyn-arcane'], description: 'A love story that crosses class lines in a divided city, celebrated by fans worldwide.' },
        { name: 'Fleabag & The Priest', show: 'Fleabag', slugs: ['fleabag', 'the-priest'], description: 'A forbidden romance between a woman in crisis and a man of faith, ending in devastating beauty.' },
      ],
      faqs: [
        { question: 'What are the best TV couples of all time?', answer: 'Some of the most beloved TV couples include Ross & Rachel (Friends), Harvey & Donna (Suits), David & Patrick (Schitt\'s Creek), Jimmy & Kim (Better Call Saul), and Fleabag & The Priest (Fleabag). Each pair brought unique chemistry and emotional depth to their shows.' },
        { question: 'What makes a great TV couple?', answer: 'Great TV couples have undeniable chemistry, face meaningful obstacles that test their bond, and evolve together throughout the series. The best pairings feel authentic and make audiences emotionally invested in their outcome.' },
      ]
    },
    {
      slug: 'best-animated-characters',
      title: 'Best Characters in Animated TV',
      description: 'The most compelling characters from animated television series, proving that animation is a medium, not a genre.',
      intro: 'Animation allows storytelling unbounded by the limits of live action. These characters from animated series are as complex, compelling, and emotionally resonant as any live-action counterpart — often surpassing them in visual artistry and narrative ambition.',
      tags: ['animated', 'animation'],
      filterFn: (ch) => {
        const animSlugs = ['jinx', 'vi-arcane', 'caitlyn-arcane', 'grogu'];
        return animSlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'What are the best animated TV shows for adults?', answer: 'Arcane (League of Legends) is widely considered one of the best animated series ever made. Other acclaimed animated shows include Invincible, Castlevania, and Primal. These shows prove that animation can tell sophisticated, mature stories.' },
        { question: 'Is Arcane the best animated TV show?', answer: 'Arcane is frequently cited as one of the greatest animated series in television history. Its stunning animation by Fortiche Production, complex characters like Jinx and Vi, and emotionally devastating storytelling earned universal critical acclaim and multiple awards.' },
      ]
    },
    {
      slug: 'most-powerful-tv-women',
      title: 'Most Powerful Women in TV',
      description: 'The strongest, most commanding female characters in television history — leaders, fighters, strategists, and survivors.',
      intro: 'These women commanded empires, led revolutions, broke barriers, and shaped the course of their shows. From queens and managing partners to teachers and rebels, they represent the best of female character writing in television.',
      tags: ['powerful', 'women', 'leader'],
      filterFn: (ch) => {
        const womenSlugs = ['daenerys-targaryen', 'cersei-lannister', 'jessica-pearson', 'kim-wexler', 'ruth-langmore', 'wendy-byrde', 'beth-dutton', 'queen-charlotte', 'queen-elizabeth', 'starlight', 'eleven', 'donna-paulsen', 'lady-mariko', 'barbara-howard', 'fleabag', 'janine-teagues', 'jinx', 'vi-arcane', 'helly-riggs', 'rhaenyra-targaryen'];
        return womenSlugs.includes(ch.slug);
      },
      faqs: [
        { question: 'Who are the most powerful women in TV?', answer: 'Some of the most powerful women in TV include Daenerys Targaryen (Game of Thrones), Kim Wexler (Better Call Saul), Jessica Pearson (Suits), Ruth Langmore (Ozark), and Beth Dutton (Yellowstone). Each commanded their respective shows with strength, intelligence, and complexity.' },
        { question: 'Has representation of women in TV improved?', answer: 'Yes, significantly. From the complex antiheroes of prestige drama to the leaders of workplace comedies, modern TV features more diverse, nuanced, and powerful female characters than ever before. Shows like Better Call Saul, Abbott Elementary, and Arcane have set new standards.' },
      ]
    },
    {
      slug: 'best-tv-mentors',
      title: 'Greatest TV Mentors & Teachers',
      description: 'The mentors who shaped heroes, taught lessons, and left lasting impacts on TV\'s greatest characters.',
      intro: 'Behind every great TV character is often a mentor who guided, challenged, and inspired them. These teachers, bosses, and father figures shaped the heroes and antiheroes we love, sometimes through wisdom and sometimes through hard lessons.',
      tags: ['mentor', 'teacher', 'guide'],
      customEntries: [
        { name: 'Harvey Specter to Mike Ross', show: 'Suits', slugs: ['harvey-specter', 'mike-ross'], description: 'A mentor who took a chance on a brilliant fraud and forged a brotherhood.' },
        { name: 'Ted Lasso to AFC Richmond', show: 'Ted Lasso', slugs: ['ted-lasso-character', 'jamie-tartt'], description: 'The coach who proved that believing in people matters more than winning.' },
        { name: 'Barbara Howard to Janine', show: 'Abbott Elementary', slugs: ['barbara-howard', 'janine-teagues'], description: 'A veteran teacher showing a young idealist how to make a lasting difference.' },
        { name: 'Jessica Pearson to Harvey', show: 'Suits', slugs: ['jessica-pearson', 'harvey-specter'], description: 'The managing partner who pulled Harvey from the mailroom and made him who he is.' },
        { name: 'Mike Ehrmantraut to Nacho', show: 'Better Call Saul', slugs: ['mike-ehrmantraut-bcs', 'nacho-varga'], description: 'A reluctant mentor in the criminal underworld, bound by respect and tragedy.' },
        { name: 'Toranaga to Blackthorne', show: 'Shogun', slugs: ['toranaga', 'john-blackthorne'], description: 'A feudal lord who taught a European navigator to see Japan — and himself — clearly.' },
      ],
      faqs: [
        { question: 'Who are the best mentors in TV?', answer: 'The greatest TV mentors include Harvey Specter (Suits), Ted Lasso (Ted Lasso), Barbara Howard (Abbott Elementary), and Jessica Pearson (Suits). These characters guided others through professional and personal growth, leaving lasting impacts.' },
        { question: 'Why are mentor relationships so compelling on TV?', answer: 'Mentor relationships resonate because they reflect universal experiences of learning, growing, and being shaped by those who believe in us. The best TV mentorships feature complex power dynamics, genuine growth, and emotional stakes.' },
      ]
    },
  ];
}

function buildListsDirectory() {
  console.log('Building: Lists Directory');
  const lists = getCuratedLists();
  const bc = [{ label: 'Home', url: '/' }, { label: 'Lists' }];

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">Curated Lists</h1>
<p class="section-subtitle">Handpicked collections of TV's greatest characters, moments, and achievements</p>
</div>
<div class="card-grid">
${lists.map(list => `<a href="/lists/${list.slug}/" class="card">
<div class="card-body">
<h3 class="card-title">${escapeHtml(list.title)}</h3>
<p class="card-description">${escapeHtml(list.description)}</p>
</div>
</a>`).join('\n')}
</div>
</div>
</section>`;

  writeFile(path.join(OUT_DIR, 'lists', 'index.html'), layout({
    title: 'Curated TV Lists - Best Characters, Duos, Villains & More',
    description: 'Explore curated lists of the greatest TV characters, iconic duos, best villain, top antiheroes, and more on TVCeleb.com.',
    canonical: SITE_URL + '/lists/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
    content
  }));
}

function buildListPage(list) {
  console.log(`Building: List - ${list.title}`);
  const bc = [{ label: 'Home', url: '/' }, { label: 'Lists', url: '/lists/' }, { label: list.title }];

  let listItems = [];

  if (list.filterFn) {
    listItems = characters.filter(list.filterFn).sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0));
  }

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>${escapeHtml(list.title)}</h1>
<p class="hero-description">${escapeHtml(list.intro)}</p>
</div>
</div>
</div>
</section>

<div class="container">
${list.customEntries ? `<section class="content-section" id="entries" aria-labelledby="entries-heading">
<h2 id="entries-heading">The List</h2>
<div class="leaderboard">
${list.customEntries.map((entry, i) => {
  const primaryChar = getCharacter(entry.slugs[0]);
  return `<div class="leaderboard-item" style="cursor:default;">
<span class="leaderboard-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</span>
<div class="leaderboard-info">
<span class="leaderboard-name">${escapeHtml(entry.name)}</span>
<span class="leaderboard-show">${escapeHtml(entry.show)}</span>
<span style="display:block;margin-top:4px;font-size:var(--text-sm);color:var(--color-text-muted);">${escapeHtml(entry.description)}</span>
</div>
${primaryChar ? `<div class="leaderboard-score">${fanHeatBadge(primaryChar.fanHeatIndex?.overall || 0)}</div>` : ''}
</div>`;
}).join('\n')}
</div>
<div class="card-grid" style="margin-top:var(--space-6);">
${list.customEntries.flatMap(e => e.slugs).map(getCharacter).filter(Boolean).map(ch => characterCard(ch)).join('\n')}
</div>
</section>` : ''}

${listItems.length > 0 ? `<section class="content-section" id="rankings" aria-labelledby="rankings-heading">
<h2 id="rankings-heading">Rankings</h2>
<div class="leaderboard">
${listItems.map((ch, i) => `<a href="/characters/${ch.slug}/" class="leaderboard-item">
<span class="leaderboard-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</span>
<div class="leaderboard-info"><span class="leaderboard-name">${escapeHtml(ch.name)}</span><span class="leaderboard-show">${escapeHtml(ch.showTitle)}</span></div>
<div class="leaderboard-score">${fanHeatBadge(ch.fanHeatIndex?.overall || 0)}</div>
</a>`).join('\n')}
</div>
<div class="card-grid" style="margin-top:var(--space-6);">
${listItems.map(ch => characterCard(ch)).join('\n')}
</div>
</section>` : ''}

${faqSectionHtml(list.faqs)}
</div>`;

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(list.faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'lists', list.slug, 'index.html'), layout({
    title: `${list.title} - TVCeleb.com`,
    description: list.description,
    canonical: `${SITE_URL}/lists/${list.slug}/`,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

// ========== QUOTES & TRIVIA SECTION (added to character pages) ==========

function quotesSection(character) {
  const charQuotes = quotesData[character.slug];
  if (!charQuotes || (!charQuotes.quotes?.length && !charQuotes.trivia?.length)) return '';

  let html = '';

  if (charQuotes.quotes && charQuotes.quotes.length > 0) {
    html += `<section class="content-section" id="quotes" aria-labelledby="quotes-heading">
<h2 id="quotes-heading">Memorable Quotes</h2>
<div class="quotes-list">
${charQuotes.quotes.map(q => `<blockquote class="character-quote">
<p>"${escapeHtml(q.text)}"</p>
${q.context ? `<cite>— ${escapeHtml(character.name)}, ${escapeHtml(q.context)}</cite>` : `<cite>— ${escapeHtml(character.name)}</cite>`}
</blockquote>`).join('\n')}
</div>
</section>`;
  }

  if (charQuotes.trivia && charQuotes.trivia.length > 0) {
    html += `<section class="content-section" id="trivia" aria-labelledby="trivia-heading">
<h2 id="trivia-heading">Trivia &amp; Fun Facts</h2>
<ul class="trivia-list">
${charQuotes.trivia.map(t => `<li class="trivia-item">${escapeHtml(t)}</li>`).join('\n')}
</ul>
</section>`;
  }

  return html;
}

function buildSearchIndex() {
  console.log('Building: Search Index');
  const index = [];

  shows.forEach(s => {
    index.push({
      type: 'show', name: s.title, url: `/shows/${s.slug}/`,
      tags: [...(s.genre || []), ...(s.tags || []), s.network],
      network: s.network, description: s.synopsisShort
    });
  });

  characters.forEach(c => {
    index.push({
      type: 'character', name: c.name, url: `/characters/${c.slug}/`,
      show: c.showTitle, tags: c.tags || [],
      description: c.characterArc ? c.characterArc.substring(0, 100) + '...' : ''
    });
  });

  actors.forEach(a => {
    index.push({
      type: 'actor', name: a.name, url: `/actors/${a.slug}/`,
      tags: a.tags || [],
      description: (a.knownFor || []).map(r => `${r.characterName} in ${r.showTitle}`).join(', ')
    });
  });

  // Add genres to search index
  const searchGenres = [...new Set(shows.flatMap(s => s.genre))];
  searchGenres.forEach(g => {
    const genreShows = shows.filter(s => s.genre.includes(g));
    index.push({
      type: 'genre', name: g, url: `/genres/${getGenreSlug(g)}/`,
      tags: [g], description: `${genreShows.length} shows in ${g}: ${genreShows.map(s => s.title).join(', ')}`
    });
  });

  // Add networks to search index
  const searchNetworks = [...new Set(shows.map(s => s.network))];
  searchNetworks.forEach(n => {
    const networkShows = shows.filter(s => s.network === n);
    index.push({
      type: 'network', name: n, url: `/networks/${getNetworkSlug(n)}/`,
      tags: [n], description: `${networkShows.length} shows on ${n}: ${networkShows.map(s => s.title).join(', ')}`
    });
  });

  // Add curated lists to search index
  const searchLists = getCuratedLists();
  searchLists.forEach(l => {
    index.push({
      type: 'list', name: l.title, url: `/lists/${l.slug}/`,
      tags: ['list', 'curated'], description: l.description
    });
  });

  // Add decades to search index
  const searchDecades = getDecades();
  searchDecades.forEach(d => {
    index.push({
      type: 'decade', name: `TV Shows of the ${d.label}`, url: `/decades/${d.decade}s/`,
      tags: ['decade', d.label], description: `${d.shows.length} shows from the ${d.label}: ${d.shows.map(s => s.title).join(', ')}`
    });
  });

  // Add about page to search index
  index.push({
    type: 'page', name: 'About TVCeleb.com', url: '/about/',
    tags: ['about', 'info'], description: 'Learn about TVCeleb.com, the Fan Heat Index, and our mission to catalog TV fandom.'
  });

  writeFile(path.join(OUT_DIR, 'search-index.json'), JSON.stringify(index));
}

function buildSitemap() {
  console.log('Building: sitemap.xml');
  const today = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily', lastmod: today },
    { loc: '/shows/', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { loc: '/characters/', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { loc: '/actors/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/search/', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { loc: '/genres/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/networks/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/lists/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/decades/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { loc: '/about/', priority: '0.6', changefreq: 'monthly', lastmod: today },
  ];

  shows.forEach(s => urls.push({ loc: `/shows/${s.slug}/`, priority: '0.8', changefreq: 'weekly', lastmod: today }));
  characters.forEach(c => urls.push({ loc: `/characters/${c.slug}/`, priority: '0.8', changefreq: 'weekly', lastmod: today }));
  actors.forEach(a => urls.push({ loc: `/actors/${a.slug}/`, priority: '0.7', changefreq: 'monthly', lastmod: today }));

  // Genre pages
  const sitemapGenres = [...new Set(shows.flatMap(s => s.genre))];
  sitemapGenres.forEach(g => urls.push({ loc: `/genres/${getGenreSlug(g)}/`, priority: '0.7', changefreq: 'weekly', lastmod: today }));

  // Network pages
  const sitemapNetworks = [...new Set(shows.map(s => s.network))];
  sitemapNetworks.forEach(n => urls.push({ loc: `/networks/${getNetworkSlug(n)}/`, priority: '0.7', changefreq: 'weekly', lastmod: today }));

  // List pages
  const sitemapLists = getCuratedLists();
  sitemapLists.forEach(l => urls.push({ loc: `/lists/${l.slug}/`, priority: '0.7', changefreq: 'monthly', lastmod: today }));

  // Decade pages
  const sitemapDecades = getDecades();
  sitemapDecades.forEach(d => urls.push({ loc: `/decades/${d.decade}s/`, priority: '0.7', changefreq: 'monthly', lastmod: today }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${SITE_URL}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;

  writeFile(path.join(OUT_DIR, 'sitemap.xml'), xml);
}

function buildRobotsTxt() {
  console.log('Building: robots.txt');
  writeFile(path.join(OUT_DIR, 'robots.txt'), `# TVCeleb.com Robots.txt
# https://tvceleb.com

User-agent: *
Allow: /
Disallow: /search-index.json
Crawl-delay: 1

# Googlebot (no crawl-delay needed)
User-agent: Googlebot
Allow: /
Disallow: /search-index.json

# Bingbot
User-agent: Bingbot
Allow: /
Disallow: /search-index.json
Crawl-delay: 2

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: PerplexityBot
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Host
Host: ${SITE_URL}
`);
}

function buildLlmsTxt() {
  console.log('Building: llms.txt');
  const showsList = shows.map(s => `- ${s.title}: ${SITE_URL}/shows/${s.slug}/`).join('\n');
  const content = `# TVCeleb.com

> TVCeleb.com is the world's largest repository of TV character fan sites, fan social media & aggregated content. Explore characters, fan communities, and ecosystems across every TV show.

## Site Overview

TVCeleb.com covers ${shows.length} TV shows, ${characters.length} characters, and ${actors.length} actors with detailed profiles including:
- Character arcs and key episodes
- Fan ecosystem links (Reddit, YouTube, Twitter, fan wikis, TikTok)
- Fan Heat Index scores measuring engagement, social activity, and fandom longevity
- Frequently asked questions with detailed answers
- Curated video content
- Actor biographies and filmographies

## Main Sections

- Shows Directory: ${SITE_URL}/shows/
- Characters Directory: ${SITE_URL}/characters/
- Actors Directory: ${SITE_URL}/actors/
- Genres: ${SITE_URL}/genres/
- Networks: ${SITE_URL}/networks/
- Curated Lists: ${SITE_URL}/lists/
- Decades: ${SITE_URL}/decades/
- About: ${SITE_URL}/about/

## Shows Covered

${showsList}

## Contact

For inquiries about TVCeleb.com, visit ${SITE_URL}/about/
`;
  writeFile(path.join(OUT_DIR, 'llms.txt'), content);
}

function copyStaticFiles() {
  console.log('Copying static files...');
  // Copy CSS
  ensureDir(path.join(OUT_DIR, 'css'));
  fs.copyFileSync(path.join(__dirname, 'src/css/styles.css'), path.join(OUT_DIR, 'css/styles.css'));

  // Copy JS
  ensureDir(path.join(OUT_DIR, 'js'));
  fs.copyFileSync(path.join(__dirname, 'src/js/main.js'), path.join(OUT_DIR, 'js/main.js'));

  // CNAME
  writeFile(path.join(OUT_DIR, 'CNAME'), 'tvceleb.com');

  // .nojekyll
  writeFile(path.join(OUT_DIR, '.nojekyll'), '');

  // Favicon (simple placeholder SVG converted to base64 ICO substitute)
  writeFile(path.join(OUT_DIR, 'favicon.ico'), '');
}

// ========== MAIN BUILD ==========

// ========== DECADE PAGES ==========

function getPremiereYear(show) {
  const m = show.years && show.years.match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : null;
}

function getDecade(year) {
  return Math.floor(year / 10) * 10;
}

function getDecades() {
  const decadeMap = {};
  shows.forEach(s => {
    const year = getPremiereYear(s);
    if (!year) return;
    const decade = getDecade(year);
    if (!decadeMap[decade]) decadeMap[decade] = [];
    decadeMap[decade].push(s);
  });
  return Object.keys(decadeMap).map(Number).sort().map(d => ({
    decade: d,
    label: `${d}s`,
    shows: decadeMap[d].sort((a, b) => (getPremiereYear(a) || 0) - (getPremiereYear(b) || 0))
  }));
}

function buildDecadesDirectory() {
  console.log('Building: Decades Directory');
  const decades = getDecades();
  const bc = [{ label: 'Home', url: '/' }, { label: 'Decades' }];

  const content = `<section class="section">
<div class="container">
<div class="section-header">
<h1 class="section-title">Browse by Decade</h1>
<p class="section-subtitle">Explore TV shows organized by the decade they premiered</p>
</div>
<div class="card-grid">
${decades.map(d => `<a href="/decades/${d.decade}s/" class="card">
<div class="card-body">
<h3 class="card-title">The ${d.label}</h3>
<p class="card-description">${d.shows.length} show${d.shows.length !== 1 ? 's' : ''}: ${d.shows.slice(0, 4).map(s => s.title).join(', ')}${d.shows.length > 4 ? '...' : ''}</p>
</div>
</a>`).join('\n')}
</div>
</div>
</section>`;

  writeFile(path.join(OUT_DIR, 'decades', 'index.html'), layout({
    title: 'Browse TV Shows by Decade',
    description: 'Explore TV shows organized by decade. From 1990s classics to 2020s hits, browse the best television from every era.',
    canonical: SITE_URL + '/decades/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
    content
  }));
}

function buildDecadePage(decadeInfo) {
  const { decade, label, shows: decadeShows } = decadeInfo;
  console.log(`Building: Decade - ${label}`);
  const bc = [{ label: 'Home', url: '/' }, { label: 'Decades', url: '/decades/' }, { label: `The ${label}` }];

  const decadeChars = characters.filter(c => decadeShows.some(s => s.slug === c.showSlug))
    .sort((a, b) => (b.fanHeatIndex?.overall || 0) - (a.fanHeatIndex?.overall || 0));

  const decadeDescriptions = {
    1990: 'The 1990s saw the rise of must-see TV with shows that became cultural phenomena. From the coffee shop conversations of Friends to the genre-defining mob drama of The Sopranos, this decade laid the groundwork for the Golden Age of Television.',
    2000: 'The 2000s brought the rise of prestige television and long-form storytelling. Workplace comedies found new life through the mockumentary format, and serialized dramas began attracting cinematic talent.',
    2010: 'The 2010s were defined by peak TV — an explosion of quality television across broadcast, cable, and the rise of streaming platforms. Fantasy epics, crime dramas, and innovative comedies competed for attention in an era of unprecedented choice.',
    2020: 'The 2020s have been shaped by streaming wars, pandemic-era production, and a new wave of global television. International hits, animated masterpieces, and bold new takes on familiar genres have defined this decade so far.'
  };

  const faqs = [
    { question: `What are the best TV shows from the ${label}?`, answer: `The ${label} featured outstanding shows including ${decadeShows.slice(0, 5).map(s => s.title).join(', ')}. These shows defined the television landscape of their era and continue to influence TV today.` },
    { question: `How many shows from the ${label} are on TVCeleb?`, answer: `TVCeleb currently features ${decadeShows.length} show${decadeShows.length !== 1 ? 's' : ''} that premiered in the ${label}, with ${decadeChars.length} characters across those shows.` }
  ];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>TV Shows of the ${label}</h1>
<p class="hero-description">${escapeHtml(decadeDescriptions[decade] || `Explore ${decadeShows.length} TV shows that premiered in the ${label}.`)}</p>
<div class="hero-stats">
<div class="stat"><span class="stat-value">${decadeShows.length}</span><span class="stat-label">Shows</span></div>
<div class="stat"><span class="stat-value">${decadeChars.length}</span><span class="stat-label">Characters</span></div>
</div>
</div>
</div>
</div>
</section>

<div class="container">
<section class="content-section" id="shows" aria-labelledby="decade-shows-heading">
<h2 id="decade-shows-heading">${label} Shows (${decadeShows.length})</h2>
<div class="card-grid">
${decadeShows.map(s => showCard(s)).join('\n')}
</div>
</section>

${decadeChars.length > 0 ? `<section class="content-section" id="characters" aria-labelledby="decade-chars-heading">
<h2 id="decade-chars-heading">Top ${label} Characters</h2>
<div class="leaderboard">
${decadeChars.slice(0, 20).map((ch, i) => `<a href="/characters/${ch.slug}/" class="leaderboard-item">
<span class="leaderboard-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</span>
<div class="leaderboard-info"><span class="leaderboard-name">${escapeHtml(ch.name)}</span><span class="leaderboard-show">${escapeHtml(ch.showTitle)}</span></div>
<div class="leaderboard-score">${fanHeatBadge(ch.fanHeatIndex?.overall || 0)}</div>
</a>`).join('\n')}
</div>
</section>` : ''}

${faqSectionHtml(faqs)}
</div>`;

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'decades', `${decade}s`, 'index.html'), layout({
    title: `Best TV Shows of the ${label} - Characters & Fan Communities`,
    description: `Explore ${decadeShows.length} TV shows from the ${label} and ${decadeChars.length} characters on TVCeleb.com. ${(decadeDescriptions[decade] || '').substring(0, 100)}`,
    canonical: `${SITE_URL}/decades/${decade}s/`,
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

// ========== ABOUT PAGE ==========

function buildAboutPage() {
  console.log('Building: About Page');
  const bc = [{ label: 'Home', url: '/' }, { label: 'About' }];

  const totalQuotes = Object.values(quotesData).reduce((sum, d) => sum + (d.quotes?.length || 0), 0);
  const totalTrivia = Object.values(quotesData).reduce((sum, d) => sum + (d.trivia?.length || 0), 0);
  const allGenres = [...new Set(shows.flatMap(s => s.genre))];
  const allNetworks = [...new Set(shows.map(s => s.network))];

  const faqs = [
    { question: 'What is TVCeleb.com?', answer: 'TVCeleb.com is the world\'s largest repository of TV character fan sites, fan social media, and aggregated content. We provide comprehensive profiles for characters, actors, and shows with fan community links, quotes, trivia, and curated content.' },
    { question: 'How is the Fan Heat Index calculated?', answer: 'The Fan Heat Index measures fandom activity on a scale of 0-100 using five dimensions: engagement (community activity), social activity (social media presence), meme velocity (viral content spread), fan art density (creative output), and fandom longevity (sustained interest over time).' },
    { question: 'How many shows and characters does TVCeleb cover?', answer: `TVCeleb currently covers ${shows.length} TV shows, ${characters.length} characters, and ${actors.length} actors, with new content added regularly.` },
    { question: 'Can I suggest a show or character to add?', answer: 'We are always expanding our coverage. TVCeleb is an open-source project and we welcome contributions and suggestions from the fan community.' }
  ];

  const content = `
<section class="page-hero">
<div class="container">
<div class="page-hero-content" style="align-items:center;">
<div class="page-hero-info" style="flex:1;">
<h1>About TVCeleb.com</h1>
<p class="hero-description">The Living Archive of TV Fandom Worldwide. We catalog every TV character's fan ecosystem — from Reddit communities and TikTok edits to fan art, theories, and viral moments.</p>
</div>
</div>
</div>
</section>

<div class="container">
<section class="content-section" id="stats" aria-labelledby="stats-heading">
<h2 id="stats-heading">TVCeleb by the Numbers</h2>
<div class="hero-stats" style="flex-wrap:wrap;gap:var(--space-4);">
<div class="stat"><span class="stat-value">${shows.length}</span><span class="stat-label">TV Shows</span></div>
<div class="stat"><span class="stat-value">${characters.length}</span><span class="stat-label">Characters</span></div>
<div class="stat"><span class="stat-value">${actors.length}</span><span class="stat-label">Actors</span></div>
<div class="stat"><span class="stat-value">${allGenres.length}</span><span class="stat-label">Genres</span></div>
<div class="stat"><span class="stat-value">${allNetworks.length}</span><span class="stat-label">Networks</span></div>
<div class="stat"><span class="stat-value">${totalQuotes}</span><span class="stat-label">Quotes</span></div>
<div class="stat"><span class="stat-value">${totalTrivia}</span><span class="stat-label">Trivia Facts</span></div>
</div>
</section>

<section class="content-section" id="mission" aria-labelledby="mission-heading">
<h2 id="mission-heading">Our Mission</h2>
<div style="max-width:75ch;">
<p style="margin-bottom:var(--space-4);color:var(--color-text-secondary);line-height:1.7;">TVCeleb.com exists to celebrate and catalog the incredible fan communities that form around television characters. Every great TV character inspires a universe of fan activity — from Reddit discussions and fan theories to TikTok edits, fan art, and memes. We bring all of that together in one place.</p>
<p style="margin-bottom:var(--space-4);color:var(--color-text-secondary);line-height:1.7;">Each character profile on TVCeleb includes detailed arc summaries, key episodes, fan ecosystem links (Reddit, TikTok, YouTube, fan wikis, and more), our proprietary Fan Heat Index score, FAQs, and curated video content. We aim to be the definitive starting point for anyone exploring a TV character's fandom.</p>
<p style="color:var(--color-text-secondary);line-height:1.7;">Whether you're a longtime fan looking for your community or a newcomer discovering a show for the first time, TVCeleb helps you find the conversations, creativity, and connections that make TV fandom special.</p>
</div>
</section>

<section class="content-section" id="fhi" aria-labelledby="fhi-heading">
<h2 id="fhi-heading">Understanding the Fan Heat Index</h2>
<div style="max-width:75ch;">
<p style="margin-bottom:var(--space-4);color:var(--color-text-secondary);line-height:1.7;">The Fan Heat Index (FHI) is our proprietary scoring system that measures the vitality of a character's fandom on a scale of 0 to 100. It combines five dimensions:</p>
<ul style="list-style:disc;padding-left:var(--space-6);color:var(--color-text-secondary);line-height:2;">
<li><strong>Engagement</strong> — Community activity levels across forums and discussion platforms</li>
<li><strong>Social Activity</strong> — Presence and activity on social media platforms</li>
<li><strong>Meme Velocity</strong> — How quickly and widely character-related memes and viral content spread</li>
<li><strong>Fan Art Density</strong> — Volume and quality of fan-created artwork and creative content</li>
<li><strong>Fandom Longevity</strong> — Sustained fan interest over time, beyond initial premiere hype</li>
</ul>
</div>
</section>

${faqSectionHtml(faqs)}
</div>`;

  const jsonLd = [jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(faqs);
  if (faqLd) jsonLd.push(faqLd);

  writeFile(path.join(OUT_DIR, 'about', 'index.html'), layout({
    title: 'About TVCeleb.com - The Living Archive of TV Fandom',
    description: `TVCeleb.com is the world's largest repository of TV character fan sites. Covering ${shows.length} shows, ${characters.length} characters, and ${actors.length} actors with fan community links, quotes, and curated content.`,
    canonical: SITE_URL + '/about/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd,
    content
  }));
}

function build() {
  console.log('=== TVCeleb.com Build Started ===');
  console.log(`Shows: ${shows.length}, Characters: ${characters.length}, Actors: ${actors.length}`);
  console.log('');

  // Clean output
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  ensureDir(OUT_DIR);

  // Copy static files first
  copyStaticFiles();

  // Build pages
  buildHomepage();
  buildShowsDirectory();
  shows.forEach(s => buildShowPage(s));
  buildCharactersDirectory();
  characters.forEach(c => buildCharacterPage(c));
  buildActorsDirectory();
  actors.forEach(a => buildActorPage(a));
  buildSearchPage();
  build404Page();

  // Build genre pages
  buildGenresDirectory();
  const allGenres = [...new Set(shows.flatMap(s => s.genre))].sort();
  allGenres.forEach(g => buildGenrePage(g));

  // Build network pages
  buildNetworksDirectory();
  const allNetworks = [...new Set(shows.map(s => s.network))].sort();
  allNetworks.forEach(n => buildNetworkPage(n));

  // Build curated list pages
  buildListsDirectory();
  const lists = getCuratedLists();
  lists.forEach(l => buildListPage(l));

  // Build decade pages
  buildDecadesDirectory();
  const decades = getDecades();
  decades.forEach(d => buildDecadePage(d));

  // Build about page
  buildAboutPage();

  // Build assets
  buildSearchIndex();
  buildSitemap();
  buildRobotsTxt();
  buildLlmsTxt();

  // Count output files
  let fileCount = 0;
  function countFiles(dir) {
    fs.readdirSync(dir).forEach(f => {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) countFiles(fp);
      else fileCount++;
    });
  }
  countFiles(OUT_DIR);

  console.log('');
  console.log(`=== Build Complete: ${fileCount} files generated in /docs ===`);
}

build();
