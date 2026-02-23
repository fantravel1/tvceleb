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
try { actors = require('./data/actors').actors; } catch(e) { actors = []; console.warn('Warning: actors.js not found yet'); }

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
  const { title, description, canonical, ogType = 'website', ogImage, breadcrumbsHtml, jsonLd = [], bodyClass = '', content } = opts;

  const fullTitle = title.includes('TVCeleb') ? title : `${title} | TVCeleb.com`;

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
${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(fullTitle)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}">` : ''}
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
<a href="/search/">Search</a>
</div>
</nav>
<nav class="footer-nav" aria-label="About">
<h3>About</h3>
<div class="footer-links">
<a href="/">Home</a>
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

function jsonLdVideo(video) {
  if (!video) return null;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description || '',
    "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    "embedUrl": `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    "uploadDate": "2020-01-01"
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

  writeFile(path.join(OUT_DIR, 'shows', 'index.html'), layout({
    title: 'All TV Shows - Browse the Complete Directory',
    description: `Browse all ${shows.length} TV shows on TVCeleb.com. Filter by genre and explore character fan ecosystems for each show.`,
    canonical: SITE_URL + '/shows/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
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
  show.videos?.forEach(v => { const vld = jsonLdVideo(v); if (vld) jsonLd.push(vld); });

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

  writeFile(path.join(OUT_DIR, 'characters', 'index.html'), layout({
    title: 'All TV Characters - The Global Character Index',
    description: `Browse all ${characters.length} TV characters on TVCeleb.com. Discover character arcs, fan ecosystems, and community hubs across ${shows.length} shows.`,
    canonical: SITE_URL + '/characters/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
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

${faqSectionHtml(character.faqs)}

${character.image?.attribution ? `<aside class="content-section" style="padding-top:var(--space-4);"><p style="font-size:var(--text-xs);color:var(--color-text-muted);">Photo: ${escapeHtml(character.image.attribution)}</p></aside>` : ''}
</div>`;

  const jsonLd = [jsonLdCharacter(character), jsonLdBreadcrumbs(bc)];
  const faqLd = jsonLdFaqPage(character.faqs);
  if (faqLd) jsonLd.push(faqLd);
  character.videos?.forEach(v => { const vld = jsonLdVideo(v); if (vld) jsonLd.push(vld); });

  const descArc = character.characterArc ? character.characterArc.substring(0, 140).replace(/\n/g, ' ') + '...' : '';

  writeFile(path.join(OUT_DIR, 'characters', character.slug, 'index.html'), layout({
    title: `${character.name} - ${character.showTitle} Character Fan Hub`,
    description: `${character.name} from ${character.showTitle}, played by ${character.actorName}. ${descArc} Explore the fan ecosystem, content feed, and community.`,
    canonical: `${SITE_URL}/characters/${character.slug}/`,
    ogType: 'profile',
    ogImage: character.image?.src,
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

  writeFile(path.join(OUT_DIR, 'actors', 'index.html'), layout({
    title: 'All Actors - TV Actor Directory',
    description: `Browse all ${actors.length} TV actors on TVCeleb.com. Discover their iconic roles, career highlights, and fan communities.`,
    canonical: SITE_URL + '/actors/',
    breadcrumbsHtml: breadcrumbsComponent(bc),
    jsonLd: [jsonLdBreadcrumbs(bc)],
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

  writeFile(path.join(OUT_DIR, 'search-index.json'), JSON.stringify(index));
}

function buildSitemap() {
  console.log('Building: sitemap.xml');
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/shows/', priority: '0.9', changefreq: 'weekly' },
    { loc: '/characters/', priority: '0.9', changefreq: 'weekly' },
    { loc: '/actors/', priority: '0.8', changefreq: 'weekly' },
    { loc: '/search/', priority: '0.7', changefreq: 'monthly' },
  ];

  shows.forEach(s => urls.push({ loc: `/shows/${s.slug}/`, priority: '0.8', changefreq: 'weekly' }));
  characters.forEach(c => urls.push({ loc: `/characters/${c.slug}/`, priority: '0.8', changefreq: 'weekly' }));
  actors.forEach(a => urls.push({ loc: `/actors/${a.slug}/`, priority: '0.7', changefreq: 'monthly' }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${SITE_URL}${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;

  writeFile(path.join(OUT_DIR, 'sitemap.xml'), xml);
}

function buildRobotsTxt() {
  console.log('Building: robots.txt');
  writeFile(path.join(OUT_DIR, 'robots.txt'), `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`);
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

  // Build assets
  buildSearchIndex();
  buildSitemap();
  buildRobotsTxt();

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
