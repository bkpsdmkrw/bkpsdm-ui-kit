/* ============================================================
   BKPSDM UI KIT — Interaksi Inti v1.0
   Vanilla JS, tanpa dependensi. Mudah diport ke Blade / Vue.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 1. IKON SVG (Lucide-style, stroke 2px) ---------------- */
  var ICONS = {
    'menu':            '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
    'home':            '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    'grid':            '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    'chart':           '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    'activity':        '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    'users':           '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'user':            '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'user-plus':       '<path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    'id-card':         '<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M6 16c.5-1.5 1.5-2 3-2s2.5.5 3 2"/><line x1="14" x2="18" y1="9" y2="9"/><line x1="14" x2="18" y1="13" y2="13"/>',
    'arrow-swap':      '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
    'log-out':         '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    'graduation':      '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    'book':            '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    'award':           '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    'monitor':         '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    'file-text':       '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    'file-bar':        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-4"/><path d="M8 18v-2"/><path d="M16 18v-6"/>',
    'calendar':        '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    'clock':           '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'check':           '<polyline points="20 6 9 17 4 12"/>',
    'check-circle':    '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'x':               '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    'x-circle':        '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    'alert':           '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    'info':            '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    'search':          '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/>',
    'bell':            '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    'sun':             '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    'moon':            '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    'settings':        '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    'help':            '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    'chevron-down':    '<path d="m6 9 6 6 6-6"/>',
    'chevron-right':   '<path d="m9 18 6-6-6-6"/>',
    'chevron-left':    '<path d="m15 18-6-6 6-6"/>',
    'arrow-right':     '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    'arrow-up-right':  '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'trend-up':        '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'trend-down':      '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
    'download':        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    'upload':          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    'filter':          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    'plus':            '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    'trash':           '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    'edit':            '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
    'eye':             '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    'eye-off':         '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>',
    'mail':            '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'copy':            '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    'more':            '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    'star':            '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'target':          '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'layers':          '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'shield':          '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    'refresh':         '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
    'briefcase':       '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'building':        '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    'wallet':          '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
    'map-pin':         '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'lock':            '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'message':         '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'database':        '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    'pie':             '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    'send':            '<line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    'print':           '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    'external':        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    'save':            '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
    'folder':          '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>'
  };

  function iconSvg(name, cls) {
    if (!ICONS[name]) return '';
    var wrap = document.createElement('span');
    wrap.className = 'bk-icon' + (cls ? ' ' + cls : '');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[name] + '</svg>';
    return wrap.outerHTML;
  }

  function replaceIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      var name = el.getAttribute('data-icon');
      el.outerHTML = iconSvg(name, el.className);
    });
  }

  /* ---------------- 2. TEMA (Terang / Gelap / Ikuti Sistem) ---------------- */
  var THEME_KEY = 'bkpsdm-theme';
  var systemQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function getThemePref() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) { /* private mode */ }
    return (stored === 'light' || stored === 'dark' || stored === 'system') ? stored : 'system';
  }
  function resolveTheme(pref) {
    pref = pref || getThemePref();
    if (pref === 'system') return systemQuery && systemQuery.matches ? 'dark' : 'light';
    return pref;
  }
  function themeIconName(pref) {
    if (pref === 'dark') return 'moon';
    if (pref === 'light') return 'sun';
    return 'monitor';
  }
  function applyTheme(pref) {
    pref = pref || getThemePref();
    var resolved = resolveTheme(pref);
    document.documentElement.setAttribute('data-theme', resolved);
    try { localStorage.setItem(THEME_KEY, pref); } catch (e) { /* noop */ }
    document.querySelectorAll('[data-theme-icon]').forEach(function (el) {
      el.classList.add('bk-icon');
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[themeIconName(pref)] + '</svg>';
    });
    document.querySelectorAll('.bk-theme-option').forEach(function (opt) {
      opt.classList.toggle('is-active', opt.getAttribute('data-theme-set') === pref);
    });
    document.dispatchEvent(new CustomEvent('bk:theme', { detail: { pref: pref, theme: resolved } }));
  }
  function toggleTheme() { applyTheme(resolveTheme() === 'dark' ? 'light' : 'dark'); }

  applyTheme();
  if (systemQuery && systemQuery.addEventListener) {
    systemQuery.addEventListener('change', function () {
      if (getThemePref() === 'system') applyTheme('system');
    });
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-theme-toggle]');
    if (btn) toggleTheme();
    var opt = e.target.closest('.bk-theme-option[data-theme-set]');
    if (opt) {
      applyTheme(opt.getAttribute('data-theme-set'));
      closeAllDropdowns(null);
    }
  });

  /* ---------------- 3. SIDEBAR (mobile off-canvas + desktop collapse) ---------------- */
  var SIDEBAR_KEY = 'bkpsdm-sidebar';
  document.addEventListener('click', function (e) {
    var app = document.querySelector('.bk-app');
    if (!app) return;
    var toggle = e.target.closest('[data-sidebar-toggle]');
    if (toggle) {
      if (window.innerWidth <= 1024) {
        app.classList.add('sidebar-open');
      } else {
        app.classList.toggle('sidebar-collapsed');
        try { localStorage.setItem(SIDEBAR_KEY, app.classList.contains('sidebar-collapsed') ? '1' : '0'); } catch (err) { /* noop */ }
      }
    }
    if (e.target.closest('[data-sidebar-close]') || e.target.classList.contains('bk-sidebar-backdrop')) app.classList.remove('sidebar-open');
    if ((e.target.closest('.bk-nav-link') || e.target.closest('.bk-subnav-link')) && window.innerWidth <= 1024) app.classList.remove('sidebar-open');
  });

  /* Bungkus label teks di nav-link agar bisa disembunyikan saat collapse */
  function wrapNavLabels(root) {
    (root || document).querySelectorAll('.bk-nav-link').forEach(function (link) {
      var textNodes = [];
      Array.prototype.slice.call(link.childNodes).forEach(function (node) {
        if (node.nodeType === 3 && node.textContent.trim()) textNodes.push(node);
      });
      if (!textNodes.length) return;
      var label = textNodes.map(function (n) { return n.textContent.trim(); }).join(' ');
      var span = document.createElement('span');
      span.className = 'bk-nav-label';
      textNodes.forEach(function (n) { span.appendChild(n); });
      var idx = Array.prototype.indexOf.call(link.childNodes, textNodes[0]);
      link.insertBefore(span, link.childNodes[idx] || null);
      if (!link.getAttribute('title')) link.setAttribute('title', label);
    });
  }

  /* ---------------- 3c. MENU POHON SIDEBAR (tree) ---------------- */
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-nav-toggle]');
    if (!toggle) return;
    var item = toggle.closest('.bk-nav-item');
    if (!item) return;
    var open = item.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.bk-subnav-link');
    if (!link) return;
    document.querySelectorAll('.bk-subnav-link').forEach(function (l) { l.classList.remove('is-active'); });
    link.classList.add('is-active');
    var item = link.closest('.bk-nav-item');
    if (item) item.classList.add('is-open');
  });

  /* ---------------- 3d. BLOK KODE: LIHAT/TUTUP ---------------- */
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-code-toggle]');
    if (!toggle) return;
    var block = toggle.closest('.bk-code-block');
    var body = block && block.querySelector('.bk-code-body');
    if (!body) return;
    var willOpen = body.hasAttribute('hidden');
    if (willOpen) body.removeAttribute('hidden');
    else body.setAttribute('hidden', '');
    toggle.classList.toggle('is-open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
    var label = toggle.querySelector('span');
    if (label) label.textContent = willOpen ? 'Tutup Kode' : 'Lihat Kode';
  });
  /* ---------------- 3e. TREE (pohon data) ---------------- */
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.bk-tree-toggle');
    if (!toggle) return;
    var node = toggle.closest('.bk-tree-node');
    if (!node) return;
    var open = node.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.bk-tree-toggle')) return;
    var row = e.target.closest('.bk-tree-row');
    if (!row) return;
    var tree = row.closest('.bk-tree');
    if (!tree) return;
    tree.querySelectorAll('.bk-tree-row.is-active').forEach(function (r) { r.classList.remove('is-active'); });
    row.classList.add('is-active');
  });

  /* ---------------- 3f. ORG CHART: DRAG & DROP + AKSI NODE ---------------- */
  var pendingOrgMove = null;
  var orgDragBranch = null;

  function orgNodeName(node) {
    var t = node && node.querySelector('.bk-org-node-title');
    return t ? t.textContent.trim() : 'Unit';
  }
  function orgChildrenContainer(targetNode) {
    var branch = targetNode.closest('.bk-org-branch');
    if (branch) {
      var c = branch.querySelector(':scope > .bk-org-children');
      if (!c) {
        c = document.createElement('div');
        c.className = 'bk-org-children';
        branch.appendChild(c);
      }
      return c;
    }
    var next = targetNode.nextElementSibling;
    if (next && next.classList.contains('bk-org-children')) return next;
    var c2 = document.createElement('div');
    c2.className = 'bk-org-children';
    targetNode.parentNode.insertBefore(c2, targetNode.nextSibling);
    return c2;
  }

  document.addEventListener('dragstart', function (e) {
    var node = e.target.closest('.bk-org-node[draggable="true"]');
    if (!node) return;
    var branch = node.closest('.bk-org-branch');
    if (!branch) return;
    orgDragBranch = branch;
    node.classList.add('is-dragging');
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', node.textContent); } catch (err) { /* noop */ }
  });
  document.addEventListener('dragend', function () {
    document.querySelectorAll('.bk-org-node').forEach(function (n) { n.classList.remove('is-dragging', 'is-drop-target'); });
    orgDragBranch = null;
  });
  document.addEventListener('dragover', function (e) {
    if (!orgDragBranch) return;
    var target = e.target.closest('.bk-org-node[draggable="true"]');
    document.querySelectorAll('.bk-org-node.is-drop-target').forEach(function (n) {
      if (n !== target) n.classList.remove('is-drop-target');
    });
    if (!target || orgDragBranch === target.closest('.bk-org-branch') || orgDragBranch.contains(target)) {
      e.dataTransfer.dropEffect = 'none';
      return;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    target.classList.add('is-drop-target');
  });
  document.addEventListener('drop', function (e) {
    var target = e.target.closest('.bk-org-node[draggable="true"]');
    document.querySelectorAll('.bk-org-node').forEach(function (n) { n.classList.remove('is-drop-target'); });
    if (!orgDragBranch || !target) return;
    e.preventDefault();
    if (orgDragBranch === target.closest('.bk-org-branch') || orgDragBranch.contains(target)) { orgDragBranch = null; return; }
    pendingOrgMove = {
      branch: orgDragBranch,
      target: target,
      srcName: orgNodeName(orgDragBranch.querySelector('.bk-org-node')),
      tgtName: orgNodeName(target)
    };
    orgDragBranch = null;
    var text = document.getElementById('org-move-text');
    if (text) text.innerHTML = 'Pindahkan <strong>' + pendingOrgMove.srcName + '</strong> ke bawah <strong>' + pendingOrgMove.tgtName + '</strong>?';
    if (document.getElementById('modal-org-pindah')) openModal('#modal-org-pindah');
  });
  document.addEventListener('click', function (e) {
    var ok = e.target.closest('[data-org-move-ok]');
    if (!ok || !pendingOrgMove) return;
    var container = orgChildrenContainer(pendingOrgMove.target);
    if (container) container.appendChild(pendingOrgMove.branch);
    closeModal(ok.closest('.bk-modal-backdrop'));
    toast({ type: 'success', title: 'Struktur diperbarui', message: pendingOrgMove.srcName + ' dipindahkan ke bawah ' + pendingOrgMove.tgtName + '.' });
    pendingOrgMove = null;
  });
  document.addEventListener('click', function (e) {
    var cancel = e.target.closest('#modal-org-pindah [data-modal-close]');
    if (cancel) pendingOrgMove = null;
  });
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-org-action]');
    if (!btn) return;
    var node = btn.closest('.bk-org-node');
    var name = orgNodeName(node);
    var act = btn.getAttribute('data-org-action');
    if (act === 'tambah') toast({ type: 'info', title: 'Tambah bawahan', message: 'Form tambah bawahan di bawah "' + name + '".' });
    else if (act === 'ubah') toast({ type: 'info', title: 'Ubah unit', message: 'Form ubah data "' + name + '".' });
    else if (act === 'hapus') toast({ type: 'danger', title: 'Hapus unit', message: '"' + name + '" menunggu persetujuan untuk dihapus.' });
  });

  /* ---------------- 3b. CHECKBOX BULK (pilih semua + bar aksi) ---------------- */
  function updateBulkBar() {
    var bar = document.querySelector('[data-bulk-bar]');
    if (!bar) return;
    var items = document.querySelectorAll('[data-check-item]:checked');
    bar.classList.toggle('is-visible', items.length > 0);
    var count = bar.querySelector('[data-bulk-count]');
    if (count) count.textContent = items.length;
  }
  document.addEventListener('change', function (e) {
    var checkAll = e.target.closest('[data-check-all]');
    if (checkAll) {
      var scope = checkAll.closest('.bk-table-wrap') || document;
      scope.querySelectorAll('[data-check-item]').forEach(function (cb) { cb.checked = checkAll.checked; });
      updateBulkBar();
    }
    if (e.target.matches('[data-check-item]')) updateBulkBar();
  });

  /* ---------------- 4. DROPDOWN ---------------- */
  function closeAllDropdowns(except) {
    document.querySelectorAll('.bk-dropdown.is-open').forEach(function (dd) {
      if (dd !== except) dd.classList.remove('is-open');
    });
  }
  /* Auto-posisi: balik arah menu bila melewati tepi viewport */
  function positionDropdown(menu) {
    var dd = menu.closest('.bk-dropdown');
    if (!dd) return;
    var bRect = dd.getBoundingClientRect();
    var mWidth = menu.offsetWidth || 200;
    var pad = 8;
    var vw = window.innerWidth || document.documentElement.clientWidth;
    var isStart = menu.classList.contains('bk-start');
    var left = isStart ? bRect.left : bRect.right - mWidth;
    var right = isStart ? bRect.left + mWidth : bRect.right;
    if (right > vw - pad && left > pad) {
      menu.classList.remove('bk-start');   // ratakan ke kanan tombol (melebar ke kiri)
    } else if (left < pad && right < vw - pad) {
      menu.classList.add('bk-start');      // ratakan ke kiri tombol (melebar ke kanan)
    }
  }
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-dropdown-toggle]');
    var dd = trigger ? trigger.closest('.bk-dropdown') : null;
    closeAllDropdowns(dd);
    if (dd) {
      var willOpen = !dd.classList.contains('is-open');
      dd.classList.toggle('is-open');
      if (willOpen) {
        var menu = dd.querySelector('.bk-dropdown-menu');
        if (menu) positionDropdown(menu);
      }
    } else if (!e.target.closest('.bk-dropdown-menu')) {
      closeAllDropdowns(null);
    }
  });
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.querySelectorAll('.bk-dropdown.is-open .bk-dropdown-menu').forEach(positionDropdown);
    }, 120);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDropdowns(null);
      closeAllModals();
    }
  });

  /* ---------------- 5. MODAL ---------------- */
  function openModal(sel) {
    var m = document.querySelector(sel);
    if (!m) return;
    m.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var f = m.querySelector('input, [data-modal-close]');
    if (f) setTimeout(function () { f.focus(); }, 60);
  }
  function closeModal(m) {
    if (!m) return;
    m.classList.remove('is-open');
    if (!document.querySelector('.bk-modal-backdrop.is-open')) document.body.style.overflow = '';
  }
  function closeAllModals() {
    document.querySelectorAll('.bk-modal-backdrop.is-open').forEach(closeModal);
  }
  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) { openModal(openBtn.getAttribute('data-modal-open')); return; }
    var closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) { closeModal(closeBtn.closest('.bk-modal-backdrop')); return; }
    if (e.target.classList.contains('bk-modal-backdrop')) closeModal(e.target);
  });

  /* ---------------- 6. TABS ---------------- */
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('[data-tab-target]');
    if (!tab) return;
    var container = tab.closest('[data-tabs]');
    if (!container) return;
    var group = container.getAttribute('data-tabs') || '';
    container.querySelectorAll('[data-tab-target]').forEach(function (t) { t.classList.remove('is-active'); });
    tab.classList.add('is-active');
    if (group) {
      document.querySelectorAll('[data-tabs="' + group + '"] [data-tab-target]').forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
    }
    document.querySelectorAll('[data-tab-panel]').forEach(function (p) { p.classList.remove('is-active'); });
    var target = document.querySelector(tab.getAttribute('data-tab-target'));
    if (target) target.classList.add('is-active');
  });

  /* ---------------- 7. ACCORDION ---------------- */
  document.addEventListener('click', function (e) {
    var head = e.target.closest('.bk-accordion-header');
    if (!head) return;
    var item = head.closest('.bk-accordion-item');
    var content = item.querySelector('.bk-accordion-content');
    var isOpen = item.classList.contains('is-open');
    var mode = item.closest('.bk-accordion') ? item.closest('.bk-accordion').getAttribute('data-mode') : null;
    if (mode === 'single' && !isOpen) {
      item.closest('.bk-accordion').querySelectorAll('.bk-accordion-item.is-open').forEach(function (it) {
        it.classList.remove('is-open');
        it.querySelector('.bk-accordion-content').style.maxHeight = null;
      });
    }
    item.classList.toggle('is-open', !isOpen);
    content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
    head.setAttribute('aria-expanded', String(!isOpen));
  });

  /* ---------------- 8. TOAST ---------------- */
  function toastWrap() {
    var wrap = document.querySelector('.bk-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'bk-toast-wrap bk-tr';
      document.body.appendChild(wrap);
    }
    return wrap;
  }
  function toast(opts) {
    opts = opts || {};
    var icons = { success: 'check-circle', danger: 'x-circle', warning: 'alert', info: 'info', primary: 'bell' };
    var el = document.createElement('div');
    el.className = 'bk-toast bk-toast-' + (opts.type || 'primary');
    el.setAttribute('role', 'status');
    el.innerHTML =
      '<span class="bk-toast-icon">' + iconSvg(icons[opts.type] || 'bell') + '</span>' +
      '<div class="bk-flex-col" style="gap:0"><div class="bk-toast-title">' + (opts.title || 'Notifikasi') + '</div>' +
      (opts.message ? '<div class="bk-toast-msg">' + opts.message + '</div>' : '') + '</div>' +
      '<button class="bk-toast-close" aria-label="Tutup">' + iconSvg('x') + '</button>';
    toastWrap().appendChild(el);
    var kill = function () {
      el.classList.add('is-leaving');
      setTimeout(function () { el.remove(); }, 220);
    };
    el.querySelector('.bk-toast-close').addEventListener('click', kill);
    setTimeout(kill, opts.duration || 4200);
  }

  /* ---------------- 9. COUNTER ANIMASI ---------------- */
  function animateCounters(root) {
    (root || document).querySelectorAll('[data-counter]').forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-counter').replace(',', '.'));
      var decimals = (el.getAttribute('data-counter').split('.')[1] || '').length;
      var dur = 900;
      var t0 = null;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { el.textContent = el.getAttribute('data-counter'); return; }
      function frame(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = target * eased;
        el.textContent = val.toFixed(decimals).replace('.', ',');
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  /* ---------------- 10. COPY (tombol salin) ---------------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    var text = btn.getAttribute('data-copy');
    var target = btn.getAttribute('data-copy-target');
    if (target) {
      var src = document.querySelector(target);
      text = src ? (src.textContent || src.value || '').trim() : '';
    }
    if (!text) return;
    var done = function () {
      toast({ type: 'success', title: 'Berhasil disalin', message: text.length > 80 ? 'Kode disalin ke clipboard.' : text });
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else { fallbackCopy(text, done); }
  });
  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (err) { /* noop */ }
    ta.remove();
  }

  /* ---------------- 11. TOGGLE PASSWORD ---------------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-password-toggle]');
    if (!btn) return;
    var input = document.querySelector(btn.getAttribute('data-password-toggle'));
    if (!input) return;
    var show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.innerHTML = iconSvg(show ? 'eye-off' : 'eye');
    btn.setAttribute('aria-label', show ? 'Sembunyikan sandi' : 'Tampilkan sandi');
  });

  /* ---------------- 12. VALIDASI FORM DEMO ---------------- */
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-validate]');
    if (!form) return;
    e.preventDefault();
    var firstInvalid = null;
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (input) {
      var field = input.closest('.bk-field');
      var invalid = input.type === 'checkbox' || input.type === 'radio'
        ? !input.checked
        : !input.value.trim();
      if (field) field.classList.toggle('has-error', invalid);
      if (invalid) {
        ok = false;
        if (!firstInvalid) firstInvalid = input;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });
    if (ok) {
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.classList.add('is-loading');
      setTimeout(function () {
        if (submitBtn) submitBtn.classList.remove('is-loading');
        toast({ type: 'success', title: 'Data berhasil disimpan', message: 'Form demo telah tervalidasi dan terkirim.' });
        form.reset();
        form.querySelectorAll('.bk-field').forEach(function (f) { f.classList.remove('has-error'); });
      }, 900);
    } else {
      toast({ type: 'danger', title: 'Validasi gagal', message: 'Periksa kembali isian yang ditandai merah.' });
      if (firstInvalid) firstInvalid.focus();
    }
  });

  /* ---------------- 13. DROPZONE DEMO ---------------- */
  document.addEventListener('change', function (e) {
    var file = e.target.closest('.bk-dropzone input[type="file"]');
    if (!file || !file.files || !file.files.length) return;
    var name = file.files[0].name;
    toast({ type: 'success', title: 'Berkas dipilih', message: name });
  });

  /* ---------------- 13b. SELECT DENGAN PENCARIAN ---------------- */
  function initSelectSearch(root) {
    (root || document).querySelectorAll('[data-select-search]').forEach(function (wrap) {
      if (wrap._bkSelectInit) return;
      wrap._bkSelectInit = true;
      var input = wrap.querySelector('[data-select-input]');
      var hidden = wrap.querySelector('[data-select-value]');
      var menu = wrap.querySelector('.bk-select-menu');
      var clearBtn = wrap.querySelector('[data-select-clear]');
      if (!input || !menu) return;
      var options = Array.prototype.slice.call(wrap.querySelectorAll('.bk-select-option'));
      var empty = wrap.querySelector('.bk-select-empty');

      function isOpen() { return wrap.classList.contains('is-open'); }
      function open() {
        wrap.classList.add('is-open');
        input.setAttribute('aria-expanded', 'true');
      }
      function close() {
        wrap.classList.remove('is-open');
        input.setAttribute('aria-expanded', 'false');
      }
      function setValue(value, label) {
        if (hidden) hidden.value = value || '';
        input.value = label || '';
        if (clearBtn) clearBtn.classList.toggle('is-visible', !!value);
        options.forEach(function (o) { o.classList.toggle('is-selected', o.getAttribute('data-value') === value); });
      }
      function visibleOptions() {
        return options.filter(function (o) { return !o.classList.contains('is-hidden'); });
      }
      function activate(opt) {
        options.forEach(function (o) { o.classList.remove('is-active'); });
        opt.classList.add('is-active');
        if (opt.scrollIntoView) opt.scrollIntoView({ block: 'nearest' });
      }
      function filter(q) {
        q = (q || '').toLowerCase().trim();
        var shown = 0;
        options.forEach(function (o) {
          var match = o.textContent.toLowerCase().indexOf(q) !== -1;
          o.classList.toggle('is-hidden', !match);
          o.classList.remove('is-active');
          if (match) shown++;
        });
        if (empty) empty.classList.toggle('is-visible', shown === 0);
      }
      function choose(opt) {
        var value = opt.getAttribute('data-value') || '';
        var label = opt.textContent.trim();
        setValue(value, label);
        close();
        input.blur();
        wrap.dispatchEvent(new CustomEvent('bk:select', { detail: { value: value, label: label } }));
      }

      input.addEventListener('focus', function () { open(); });
      input.addEventListener('input', function () {
        open();
        filter(input.value);
        if (hidden) hidden.value = ''; // pilihan lama dibatalkan saat mengetik
      });
      input.addEventListener('keydown', function (e) {
        var visible = visibleOptions();
        var idx = visible.indexOf(wrap.querySelector('.bk-select-option.is-active'));
        if (e.key === 'ArrowDown') {
          e.preventDefault(); open();
          if (visible.length) activate(visible[idx < visible.length - 1 ? idx + 1 : 0]);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault(); open();
          if (visible.length) activate(visible[idx > 0 ? idx - 1 : visible.length - 1]);
        } else if (e.key === 'Enter') {
          var act = wrap.querySelector('.bk-select-option.is-active');
          if (act) { e.preventDefault(); choose(act); }
        } else if (e.key === 'Escape') {
          close(); input.blur();
        }
      });
      options.forEach(function (o) {
        o.addEventListener('click', function () { choose(o); });
        o.addEventListener('mouseenter', function () { activate(o); });
      });
      if (clearBtn) {
        clearBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          setValue('', '');
          filter('');
          open();
          input.focus();
        });
      }
      document.addEventListener('click', function (e) {
        if (!wrap.contains(e.target)) close();
      });

      // Nilai awal (bila ada opsi is-selected di markup)
      var initial = wrap.querySelector('.bk-select-option.is-selected');
      if (initial) setValue(initial.getAttribute('data-value'), initial.textContent.trim());
    });
  }

  /* ---------------- 14. TABEL SORTIR DEMO ---------------- */
  document.addEventListener('click', function (e) {
    var th = e.target.closest('.bk-th-sort');
    if (!th) return;
    var table = th.closest('.bk-table');
    var tbody = table.querySelector('tbody');
    var index = Array.prototype.indexOf.call(th.parentNode.children, th);
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    var asc = th.getAttribute('data-dir') !== 'asc';
    th.setAttribute('data-dir', asc ? 'asc' : 'desc');
    th.querySelectorAll('.bk-icon').forEach(function (i) { i.remove(); });
    th.insertAdjacentHTML('beforeend', iconSvg(asc ? 'chevron-down' : 'chevron-up', 'bk-sort-ic'));
    rows.sort(function (a, b) {
      var va = a.children[index].getAttribute('data-sort') || a.children[index].textContent.trim();
      var vb = b.children[index].getAttribute('data-sort') || b.children[index].textContent.trim();
      var na = parseFloat(va.replace(/[^0-9.,-]/g, '').replace(',', '.')) || 0;
      var nb = parseFloat(vb.replace(/[^0-9.,-]/g, '').replace(',', '.')) || 0;
      if (!isNaN(parseFloat(va)) || !isNaN(parseFloat(vb))) return asc ? na - nb : nb - na;
      return asc ? va.localeCompare(vb, 'id') : vb.localeCompare(va, 'id');
    });
    rows.forEach(function (r) { tbody.appendChild(r); });
  });

  /* ---------------- 15. FOCUS CARI GLOBAL (tombol /) ---------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
      var search = document.querySelector('.bk-topbar-search input');
      if (search) { e.preventDefault(); search.focus(); }
    }
  });

  /* ---------------- 17. CHIP (hapus) ---------------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-chip-remove]');
    if (!btn) return;
    var chip = btn.closest('.bk-chip');
    var label = chip ? chip.textContent.trim() : '';
    if (chip) chip.remove();
    toast({ type: 'info', title: 'Chip dihapus', message: label || 'Chip dihapus dari daftar.' });
  });

  /* ---------------- 18. DRAWER ---------------- */
  function openDrawer(sel) {
    var d = document.querySelector(sel);
    if (!d) return;
    d.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(d) {
    if (!d) return;
    d.classList.remove('is-open');
    if (!document.querySelector('.bk-drawer-backdrop.is-open')) document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-drawer-open]');
    if (openBtn) { openDrawer(openBtn.getAttribute('data-drawer-open')); return; }
    var closeBtn = e.target.closest('[data-drawer-close]');
    if (closeBtn) { closeDrawer(closeBtn.closest('.bk-drawer-backdrop')); return; }
    if (e.target.classList.contains('bk-drawer-backdrop')) closeDrawer(e.target);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.bk-drawer-backdrop.is-open').forEach(closeDrawer);
    }
  });

  /* ---------------- 19. DATE PICKER ---------------- */
  var BULAN_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }
  function initDatePicker(root) {
    (root || document).querySelectorAll('[data-datepicker]').forEach(function (dp) {
      if (dp._bkDpInit) return;
      dp._bkDpInit = true;
      var input = dp.querySelector('[data-dp-input]');
      var hidden = dp.querySelector('[data-dp-value]');
      var panel = dp.querySelector('.bk-datepicker-panel');
      var title = dp.querySelector('.bk-datepicker-title');
      var grid = dp.querySelector('.bk-datepicker-grid');
      if (!input || !panel || !grid) return;
      var view = new Date();
      var selected = null;

      function render() {
        title.textContent = BULAN_ID[view.getMonth()] + ' ' + view.getFullYear();
        grid.querySelectorAll('.bk-datepicker-day').forEach(function (d) { d.remove(); });
        var first = new Date(view.getFullYear(), view.getMonth(), 1);
        var start = new Date(first);
        start.setDate(first.getDate() - first.getDay());
        var today = new Date();
        for (var i = 0; i < 42; i++) {
          var d = new Date(start);
          d.setDate(start.getDate() + i);
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'bk-datepicker-day';
          btn.textContent = d.getDate();
          if (d.getMonth() !== view.getMonth()) btn.classList.add('is-outside');
          if (d.toDateString() === today.toDateString()) btn.classList.add('is-today');
          if (selected && d.toDateString() === selected.toDateString()) btn.classList.add('is-selected');
          btn.addEventListener('click', function (ev) {
            var dd = ev.target;
            var day = parseInt(dd.textContent, 10);
            selected = new Date(view.getFullYear(), view.getMonth(), day);
            if (input) input.value = pad2(selected.getDate()) + '/' + pad2(selected.getMonth() + 1) + '/' + selected.getFullYear();
            if (hidden) hidden.value = selected.getFullYear() + '-' + pad2(selected.getMonth() + 1) + '-' + pad2(selected.getDate());
            render();
            dp.classList.remove('is-open');
            dp.dispatchEvent(new CustomEvent('bk:datepicker', { detail: { date: hidden ? hidden.value : '' } }));
          });
          grid.appendChild(btn);
        }
      }
      function open() { dp.classList.add('is-open'); }
      function close() { dp.classList.remove('is-open'); }
      input.addEventListener('focus', open);
      input.addEventListener('click', open);
      dp.querySelectorAll('[data-dp-prev]').forEach(function (b) {
        b.addEventListener('click', function () { view.setMonth(view.getMonth() - 1); render(); });
      });
      dp.querySelectorAll('[data-dp-next]').forEach(function (b) {
        b.addEventListener('click', function () { view.setMonth(view.getMonth() + 1); render(); });
      });
      dp.querySelectorAll('[data-dp-today]').forEach(function (b) {
        b.addEventListener('click', function () {
          selected = new Date();
          input.value = pad2(selected.getDate()) + '/' + pad2(selected.getMonth() + 1) + '/' + selected.getFullYear();
          if (hidden) hidden.value = selected.getFullYear() + '-' + pad2(selected.getMonth() + 1) + '-' + pad2(selected.getDate());
          view = new Date(selected);
          render(); close();
        });
      });
      dp.querySelectorAll('[data-dp-clear]').forEach(function (b) {
        b.addEventListener('click', function () {
          selected = null; input.value = '';
          if (hidden) hidden.value = '';
          render(); close();
        });
      });
      document.addEventListener('click', function (e) {
        if (!dp.contains(e.target)) close();
      });
      render();
    });
  }

  /* ---------------- 20. OTP INPUT ---------------- */
  function initOtp(root) {
    (root || document).querySelectorAll('[data-otp]').forEach(function (wrap) {
      if (wrap._bkOtpInit) return;
      wrap._bkOtpInit = true;
      var inputs = Array.prototype.slice.call(wrap.querySelectorAll('.bk-otp-input'));
      inputs.forEach(function (inp, i) {
        inp.addEventListener('input', function () {
          inp.value = inp.value.replace(/[^0-9]/g, '').slice(0, 1);
          inp.classList.toggle('is-filled', !!inp.value);
          if (inp.value && i < inputs.length - 1) inputs[i + 1].focus();
          checkComplete();
        });
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Backspace' && !inp.value && i > 0) inputs[i - 1].focus();
        });
        inp.addEventListener('paste', function (e) {
          e.preventDefault();
          var text = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
          for (var k = 0; k < inputs.length; k++) {
            inputs[k].value = text[k] || '';
            inputs[k].classList.toggle('is-filled', !!inputs[k].value);
          }
          inputs[Math.min(text.length, inputs.length - 1)].focus();
          checkComplete();
        });
      });
      function checkComplete() {
        var code = inputs.map(function (inp) { return inp.value; }).join('');
        if (code.length === inputs.length) {
          wrap.dispatchEvent(new CustomEvent('bk:otp-complete', { detail: { code: code } }));
        }
      }
    });
  }

  /* ---------------- 21. SEARCHBAR (saran pencarian) ---------------- */
  function initSearchbar(root) {
    (root || document).querySelectorAll('[data-searchbar]').forEach(function (sb) {
      if (sb._bkSbInit) return;
      sb._bkSbInit = true;
      var input = sb.querySelector('[data-searchbar-input]');
      var list = sb.querySelector('[data-searchbar-list]');
      var items = list ? Array.prototype.slice.call(list.querySelectorAll('[data-searchbar-item]')) : [];
      if (!input || !list) return;
      function filter() {
        var q = input.value.toLowerCase().trim();
        var shown = 0;
        items.forEach(function (it) {
          var match = !q || it.textContent.toLowerCase().indexOf(q) !== -1;
          it.style.display = match ? '' : 'none';
          if (match) shown++;
        });
        list.classList.toggle('is-visible', !!q);
        var empty = list.querySelector('[data-searchbar-empty]');
        if (empty) empty.style.display = shown ? 'none' : '';
      }
      input.addEventListener('input', filter);
      input.addEventListener('focus', filter);
      document.addEventListener('click', function (e) {
        if (!sb.contains(e.target)) list.classList.remove('is-visible');
      });
      list.addEventListener('click', function (e) {
        var it = e.target.closest('[data-searchbar-item]');
        if (it) {
          input.value = it.textContent.trim();
          list.classList.remove('is-visible');
          sb.dispatchEvent(new CustomEvent('bk:searchbar-select', { detail: { value: it.textContent.trim() } }));
        }
      });
    });
  }

  /* ---------------- Ekspor API & Init ---------------- */
  window.Bk = {
    icons: ICONS,
    icon: iconSvg,
    replaceIcons: replaceIcons,
    animateCounters: animateCounters,
    getThemePref: getThemePref,
    resolveTheme: resolveTheme,
    setTheme: applyTheme,
    toggleTheme: toggleTheme,
    toast: toast,
    openModal: openModal,
    closeModal: closeModal,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer
  };

  document.addEventListener('DOMContentLoaded', function () {
    replaceIcons(document);
    animateCounters(document);
    wrapNavLabels(document);
    initSelectSearch(document);
    initDatePicker(document);
    initOtp(document);
    initSearchbar(document);
    // Buka grup menu pohon yang memuat submenu aktif (dari hash URL)
    var hash = location.hash;
    if (hash) {
      var active = document.querySelector('.bk-subnav-link[href="' + hash + '"]');
      if (active) {
        active.classList.add('is-active');
        var item = active.closest('.bk-nav-item');
        if (item) {
          item.classList.add('is-open');
          var tg = item.querySelector('[data-nav-toggle]');
          if (tg) tg.setAttribute('aria-expanded', 'true');
        }
      }
    }
    var app = document.querySelector('.bk-app');
    if (app) {
      var collapsed = null;
      try { collapsed = localStorage.getItem(SIDEBAR_KEY); } catch (e) { /* noop */ }
      if (collapsed === '1' && window.innerWidth > 1024) app.classList.add('sidebar-collapsed');
    }
    updateBulkBar();
  });
})();
