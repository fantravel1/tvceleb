/* TVCeleb.com - Vanilla JavaScript */
/* Mobile nav, FAQ accordion, YouTube facade, Search, Filters */

(function() {
  'use strict';

  // ========== MOBILE NAVIGATION ==========
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ========== FAQ ACCORDION ==========
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isActive = item.classList.contains('active');

      // Close all other FAQ items in the same list
      var parent = item.closest('.faq-list');
      if (parent) {
        parent.querySelectorAll('.faq-item.active').forEach(function(openItem) {
          if (openItem !== item) {
            openItem.classList.remove('active');
            openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('active');
      btn.setAttribute('aria-expanded', !isActive);
    });
  });

  // ========== YOUTUBE FACADE ==========
  document.querySelectorAll('.youtube-facade').forEach(function(facade) {
    facade.addEventListener('click', function() {
      var videoId = facade.getAttribute('data-video-id');
      if (!videoId) return;

      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
      iframe.title = facade.getAttribute('data-title') || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';

      facade.innerHTML = '';
      facade.appendChild(iframe);
      facade.style.cursor = 'default';
    });
  });

  // ========== SEARCH FUNCTIONALITY ==========
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchIndex = null;
  var debounceTimer = null;

  if (searchInput && searchResults) {
    // Load search index
    fetch('/search-index.json')
      .then(function(r) { return r.json(); })
      .then(function(data) { searchIndex = data; })
      .catch(function() { /* silently fail */ });

    // Check for query parameter
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q) {
      searchInput.value = q;
      // Wait for index to load
      var checkIndex = setInterval(function() {
        if (searchIndex) {
          clearInterval(checkIndex);
          performSearch(q);
        }
      }, 100);
      setTimeout(function() { clearInterval(checkIndex); }, 5000);
    }

    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      var query = searchInput.value.trim();
      debounceTimer = setTimeout(function() {
        if (query.length >= 2) {
          performSearch(query);
          // Update URL without reload
          var url = new URL(window.location);
          url.searchParams.set('q', query);
          history.replaceState(null, '', url);
        } else {
          searchResults.innerHTML = '';
        }
      }, 200);
    });
  }

  function performSearch(query) {
    if (!searchIndex || !searchResults) return;

    var q = query.toLowerCase();
    var results = { shows: [], characters: [], actors: [], genres: [], networks: [], lists: [] };

    var typeMap = { show: 'shows', character: 'characters', actor: 'actors', genre: 'genres', network: 'networks', list: 'lists' };
    searchIndex.forEach(function(item) {
      var searchText = (item.name + ' ' + (item.show || '') + ' ' + (item.tags || []).join(' ') + ' ' + (item.description || '')).toLowerCase();
      if (searchText.indexOf(q) !== -1) {
        var bucket = typeMap[item.type];
        if (bucket && results[bucket]) results[bucket].push(item);
      }
    });

    var total = results.shows.length + results.characters.length + results.actors.length + results.genres.length + results.networks.length + results.lists.length;
    var html = '<p class="search-results-count">' + total + ' result' + (total !== 1 ? 's' : '') + ' for "' + escapeHtml(query) + '"</p>';

    var sections = [
      { key: 'characters', label: 'Characters' },
      { key: 'shows', label: 'Shows' },
      { key: 'actors', label: 'Actors' },
      { key: 'genres', label: 'Genres' },
      { key: 'networks', label: 'Networks' },
      { key: 'lists', label: 'Lists' }
    ];

    sections.forEach(function(section) {
      if (results[section.key].length > 0) {
        html += '<div class="search-result-group"><h2>' + section.label + ' (' + results[section.key].length + ')</h2><div class="card-grid">';
        results[section.key].forEach(function(item) {
          html += renderSearchCard(item);
        });
        html += '</div></div>';
      }
    });

    if (total === 0) {
      html += '<div style="text-align:center;padding:3rem 0;"><p style="font-size:1.25rem;color:var(--color-text-secondary);">No results found for "' + escapeHtml(query) + '"</p><p style="color:var(--color-text-muted);margin-top:0.5rem;">Try searching for a character name, show title, actor, genre, or network.</p></div>';
    }

    searchResults.innerHTML = html;
  }

  function renderSearchCard(item) {
    var typeLabel = item.type.charAt(0).toUpperCase() + item.type.slice(1);
    var subtitle = item.show || item.network || '';
    return '<a href="' + escapeHtml(item.url) + '" class="card">' +
      '<div class="card-body">' +
      '<span class="tag" style="margin-bottom:0.5rem;font-size:0.65rem;">' + typeLabel + '</span>' +
      '<h3 class="card-title">' + escapeHtml(item.name) + '</h3>' +
      (subtitle ? '<p class="card-subtitle">' + escapeHtml(subtitle) + '</p>' : '') +
      (item.description ? '<p class="card-description">' + escapeHtml(item.description) + '</p>' : '') +
      '</div></a>';
  }

  // ========== HOMEPAGE SEARCH REDIRECT ==========
  var heroSearchForm = document.getElementById('hero-search-form');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = heroSearchForm.querySelector('input');
      if (input && input.value.trim()) {
        window.location.href = '/search/?q=' + encodeURIComponent(input.value.trim());
      }
    });
  }

  // ========== FILTER BUTTONS ==========
  document.querySelectorAll('.filter-bar').forEach(function(bar) {
    var buttons = bar.querySelectorAll('.filter-btn');
    var targetId = bar.getAttribute('data-target');
    var target = targetId ? document.getElementById(targetId) : null;

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Toggle active state
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');
        if (!target) return;

        var cards = target.querySelectorAll('[data-tags]');
        cards.forEach(function(card) {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            var tags = card.getAttribute('data-tags') || '';
            card.style.display = tags.indexOf(filter) !== -1 ? '' : 'none';
          }
        });
      });
    });
  });

  // ========== LAZY LOAD IMAGES ==========
  if ('IntersectionObserver' in window) {
    var lazyImages = document.querySelectorAll('img[data-src]');
    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ========== FAN HEAT ANIMATIONS ==========
  if ('IntersectionObserver' in window) {
    var heatBars = document.querySelectorAll('.heat-metric-fill, .fan-heat-fill');
    var heatObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var width = el.getAttribute('data-width');
          if (width) {
            el.style.width = width + '%';
          }
          heatObserver.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    heatBars.forEach(function(bar) {
      bar.style.width = '0%';
      heatObserver.observe(bar);
    });
  }

  // ========== UTILITY ==========
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
