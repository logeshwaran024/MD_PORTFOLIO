/* ============================================
   ECOG – script.js
   ============================================ */

/* ── 1. Hero: Auto-toggle every 3s ── */
(function () {
  var INTERVAL_MS = 3000;
  var panelConnect = document.getElementById('panel-connect');
  var panelFirm    = document.getElementById('panel-firm');
  if (!panelConnect || !panelFirm) return;
  var current = 'connect';
  function switchPanel() {
    if (current === 'connect') {
      panelConnect.classList.add('hidden');
      panelFirm.classList.remove('hidden');
      current = 'firm';
    } else {
      panelFirm.classList.add('hidden');
      panelConnect.classList.remove('hidden');
      current = 'connect';
    }
  }
  setInterval(switchPanel, INTERVAL_MS);
})();

/* ── 2. About Me: Scroll animation ── */
(function () {
  var els = document.querySelectorAll('.animate-left, .animate-right');
  if (!els.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { observer.observe(el); });
})();

/* ── 3. Accordion: one open at a time ── */
function toggleAcc(id) {
  var items = document.querySelectorAll('.acc-item');
  items.forEach(function (item) {
    var body   = item.querySelector('.acc-body');
    var header = item.querySelector('.acc-header');
    if (item.id === id) {
      var isActive = item.classList.contains('active');
      if (isActive) {
        item.classList.remove('active');
        body.style.maxHeight = '0px';
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    } else {
      item.classList.remove('active');
      body.style.maxHeight = '0px';
      header.setAttribute('aria-expanded', 'false');
    }
  });
}

/* Set initial open state on page load */
document.addEventListener('DOMContentLoaded', function () {
  var firstItem = document.getElementById('acc-1');
  if (firstItem) {
    firstItem.classList.add('active');
    var body = firstItem.querySelector('.acc-body');
    if (body) body.style.maxHeight = body.scrollHeight + 'px';
    var header = firstItem.querySelector('.acc-header');
    if (header) header.setAttribute('aria-expanded', 'true');
  }
});


/* ── 4. Achievements: Scroll-driven slide-up stack ── */
(function () {
  var wrapper   = document.querySelector('.ach-stack-wrapper');
  var sticky    = document.querySelector('.ach-sticky-container');
  var slides    = document.querySelectorAll('.ach-slide');
  if (!wrapper || !slides.length) return;

  var total = slides.length;

  function onScroll() {
    var wrapperRect = wrapper.getBoundingClientRect();
    var wrapperTop  = wrapperRect.top;
    var wrapperH    = wrapper.offsetHeight;
    var stickyH     = sticky.offsetHeight;

    /* How far we've scrolled INTO the wrapper (0 → wrapperH - stickyH) */
    var scrolled = -wrapperTop;
    var maxScroll = wrapperH - stickyH;

    /* Clamp */
    if (scrolled < 0) scrolled = 0;
    if (scrolled > maxScroll) scrolled = maxScroll;

    /* Progress per slide: divide total scroll into (total-1) segments */
    var segmentSize = maxScroll / (total - 1);

    slides.forEach(function (slide, i) {
      if (i === 0) {
        /* First slide: always behind, slides out upward as slide 2 comes in */
        var progress = scrolled / segmentSize; /* 0→1 during first segment */
        if (progress > 1) progress = 1;
        /* Slide out upward once next slide starts covering */
        var translateY = -progress * 8; /* subtle upward push */
        slide.style.transform = 'translateY(' + translateY + '%)';
        slide.style.zIndex = 1;
      } else {
        /* Slides 2-4: start at 100% (below), slide up to 0% */
        var segStart  = (i - 1) * segmentSize;
        var segEnd    = i * segmentSize;
        var progress  = (scrolled - segStart) / (segEnd - segStart);
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        var translateY = 100 - (progress * 100);
        slide.style.transform = 'translateY(' + translateY + '%)';
        slide.style.zIndex = i + 1;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* run once on load */
})();