// /* ============================================
//    ECOG – script.js
//    ============================================ */
// /* ============================================
//    HERO — JS
//    ============================================ */

// /* ── 1. Animate elements into view ── */
// (function () {
//   var heroEls = document.querySelectorAll('.hero-animate');
//   if (!heroEls.length) return;

//   function checkHero() {
//     heroEls.forEach(function (el) {
//       var rect = el.getBoundingClientRect();
//       if (rect.top < window.innerHeight * 0.95) {
//         el.classList.add('in-view');
//       }
//     });
//   }

//   window.addEventListener('scroll', checkHero, { passive: true });
//   checkHero();
// })();

// /* ── 2. Auto-rotate link icons ── */
// (function () {
//   var productIcons = ["img/logo (3).png", "img/logo (4).png"];
//   var techIcons    = ["img/logo (1).png",  "img/logo (2).png"];
//   var productIndex = 0;
//   var techIndex    = 0;

//   var productImg = document.getElementById('icon-products');
//   var techImg    = document.getElementById('icon-tech');

//   function fadeSwap(imgEl, newSrc) {
//     imgEl.style.transition = 'opacity 0.4s ease';
//     imgEl.style.opacity = '0';
//     setTimeout(function () {
//       imgEl.src = newSrc;
//       imgEl.style.opacity = '1';
//     }, 400);
//   }

//   if (productImg) {
//     setInterval(function () {
//       productIndex = (productIndex + 1) % productIcons.length;
//       fadeSwap(productImg, productIcons[productIndex]);
//     }, 2000);
//   }
//   if (techImg) {
//     setInterval(function () {
//       techIndex = (techIndex + 1) % techIcons.length;
//       fadeSwap(techImg, techIcons[techIndex]);
//     }, 2500);
//   }
// })();

// /* ── 3. Video placeholder fallback ── */
// (function () {
//   var video       = document.querySelector('.hero-video');
//   var placeholder = document.querySelector('.hero-video-placeholder');
//   if (!video || !placeholder) return;

//   // Show placeholder immediately (video file not added yet)
//   video.style.display = 'none';
//   placeholder.style.display = 'flex';

//   // When you add the real video file, remove these two lines above.
//   // The video will autoplay and hide the placeholder automatically.
//   video.addEventListener('canplay', function () {
//     placeholder.style.display = 'none';
//     video.style.display = 'block';
//   });
//   video.addEventListener('error', function () {
//     placeholder.style.display = 'flex';
//     video.style.display = 'none';
//   });
// })();

// /* ── 3. About Me: Scroll animation ── */
// (function () {
//   var els = document.querySelectorAll('.animate-left, .animate-right');
//   if (!els.length) return;
//   var observer = new IntersectionObserver(function (entries) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('in-view');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
//   els.forEach(function (el) { observer.observe(el); });
// })();

// /* ── 4. Accordion: one open at a time ── */
// function toggleAcc(id) {
//   var items = document.querySelectorAll('.acc-item');
//   items.forEach(function (item) {
//     var body   = item.querySelector('.acc-body');
//     var header = item.querySelector('.acc-header');
//     if (item.id === id) {
//       var isActive = item.classList.contains('active');
//       if (isActive) {
//         item.classList.remove('active');
//         body.style.maxHeight = '0px';
//         header.setAttribute('aria-expanded', 'false');
//       } else {
//         item.classList.add('active');
//         body.style.maxHeight = body.scrollHeight + 'px';
//         header.setAttribute('aria-expanded', 'true');
//       }
//     } else {
//       item.classList.remove('active');
//       body.style.maxHeight = '0px';
//       header.setAttribute('aria-expanded', 'false');
//     }
//   });
// }

// /* Set initial open state on page load */
// document.addEventListener('DOMContentLoaded', function () {
//   var firstItem = document.getElementById('acc-1');
//   if (firstItem) {
//     firstItem.classList.add('active');
//     var body = firstItem.querySelector('.acc-body');
//     if (body) body.style.maxHeight = body.scrollHeight + 'px';
//     var header = firstItem.querySelector('.acc-header');
//     if (header) header.setAttribute('aria-expanded', 'true');
//   }
// });

// /* ── 5. Achievements: Scroll-driven slide-up stack ── */
// (function () {
//   var wrapper   = document.querySelector('.ach-stack-wrapper');
//   var sticky    = document.querySelector('.ach-sticky-container');
//   var slides    = document.querySelectorAll('.ach-slide');
//   if (!wrapper || !slides.length) return;

//   var total = slides.length;

//   function onScroll() {
//     var wrapperRect = wrapper.getBoundingClientRect();
//     var wrapperTop  = wrapperRect.top;
//     var wrapperH    = wrapper.offsetHeight;
//     var stickyH     = sticky.offsetHeight;

//     var scrolled = -wrapperTop;
//     var maxScroll = wrapperH - stickyH;

//     if (scrolled < 0) scrolled = 0;
//     if (scrolled > maxScroll) scrolled = maxScroll;

//     var segmentSize = maxScroll / (total - 1);

//     slides.forEach(function (slide, i) {
//       if (i === 0) {
//         var progress = scrolled / segmentSize;
//         if (progress > 1) progress = 1;
//         var translateY = -progress * 8;
//         slide.style.transform = 'translateY(' + translateY + '%)';
//         slide.style.zIndex = 1;
//       } else {
//         var segStart  = (i - 1) * segmentSize;
//         var segEnd    = i * segmentSize;
//         var progress  = (scrolled - segStart) / (segEnd - segStart);
//         if (progress < 0) progress = 0;
//         if (progress > 1) progress = 1;
//         var translateY = 100 - (progress * 100);
//         slide.style.transform = 'translateY(' + translateY + '%)';
//         slide.style.zIndex = i + 1;
//       }
//     });
//   }

//   window.addEventListener('scroll', onScroll, { passive: true });
//   onScroll();
// })();

// /* ── 6. Hero section: replayable scroll animation ── */
// (function () {
//   var els = document.querySelectorAll('.hero-animate');
//   if (!els.length) return;

//   var observer = new IntersectionObserver(function (entries) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('in-view');
//       } else {
//         entry.target.classList.remove('in-view');
//       }
//     });
//   }, { threshold: 0.15 });

//   els.forEach(function (el) { observer.observe(el); });
// })();




// /* ── 7. Back to Top Button ── */
// (function () {
//   var backToTopBtn = document.getElementById('backToTopBtn');
//   if (!backToTopBtn) return;

//   // Show the button when user scrolls down 300px from the top
//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 300) {
//       backToTopBtn.classList.add('show');
//     } else {
//       backToTopBtn.classList.remove('show');
//     }
//   }, { passive: true });

//   // Scroll to top smoothly when button is clicked
//   backToTopBtn.addEventListener('click', function() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// })();










// /* ===== EXPERTISE SCROLL ANIMATION ===== */

// (function () {

//   // Speed in px/frame — slightly faster on mobile (smaller cards = needs more speed to feel smooth)
//   function getSpeed() {
//     return window.innerWidth < 600 ? 0.55 : 0.5;
//   }

//   document.querySelectorAll('.expertise-track-wrapper').forEach(function (wrapper) {
//     var track     = wrapper.querySelector('.expertise-track');
//     var direction = wrapper.dataset.direction; // 'ltr' or 'rtl'
//     var offset    = 0;
//     var paused    = false;
//     var rafId     = null;

//     // Prefer touch: pause on touchstart, resume on touchend
//     wrapper.addEventListener('touchstart', function () { paused = true; },  { passive: true });
//     wrapper.addEventListener('touchend',   function () { paused = false; }, { passive: true });

//     // Desktop: pause whole row on hover
//     wrapper.addEventListener('mouseenter', function () { paused = true; });
//     wrapper.addEventListener('mouseleave', function () { paused = false; });

//     function halfWidth() {
//       return track.scrollWidth / 2;
//     }

//     function animate() {
//       // Respect prefers-reduced-motion
//       if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//         return;
//       }

//       if (!paused) {
//         var hw    = halfWidth();
//         var speed = getSpeed();

//         if (direction === 'ltr') {
//           offset += speed;
//           if (offset >= hw) offset = 0;
//           track.style.transform = 'translateX(' + (offset - hw) + 'px)';
//         } else {
//           offset += speed;
//           if (offset >= hw) offset = 0;
//           track.style.transform = 'translateX(-' + offset + 'px)';
//         }
//       }

//       rafId = requestAnimationFrame(animate);
//     }

//     rafId = requestAnimationFrame(animate);
//   });

// })();




// /* ===== IMPACT CREATED — Replay Every Time + Number Fade ===== */

// (function () {

//   var section = document.querySelector('.impact-section');
//   var stats   = document.querySelectorAll('.impact-stat[data-target]');

//   if (!section) return;

//   var countTimers = [];

//   /* ── Count-up with fade-in ── */
//   function countUp(el, target, prefix, suffix, duration) {
//     var start     = 0;
//     var startTime = null;

//     // Fade out first, then fade in while counting
//     el.style.opacity = '0';
//     el.style.transition = 'opacity 0.3s ease';

//     setTimeout(function () {
//       el.style.opacity = '1';

//       function step(timestamp) {
//         if (!startTime) startTime = timestamp;
//         var progress = Math.min((timestamp - startTime) / duration, 1);
//         var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
//         var current  = Math.floor(eased * target);
//         el.textContent = (prefix || '') + current + (suffix || '');
//         if (progress < 1) {
//           var id = requestAnimationFrame(step);
//           countTimers.push(id);
//         } else {
//           el.textContent = (prefix || '') + target + (suffix || '');
//         }
//       }

//       var id = requestAnimationFrame(step);
//       countTimers.push(id);
//     }, 300); // short delay so fade-out is visible before count starts
//   }

//   /* ── Reset everything back to hidden ── */
//   function resetAnimations() {
//     // Cancel any running count-ups
//     countTimers.forEach(function (id) { cancelAnimationFrame(id); });
//     countTimers = [];

//     // Remove visible class — CSS transitions snap back
//     section.classList.remove('impact-visible');

//     // Reset stat numbers to 0 and hide them
//     stats.forEach(function (el) {
//       var prefix = el.dataset.prefix || '';
//       var suffix = el.dataset.suffix || '';
//       el.textContent = (prefix || '') + '0' + (suffix || '');
//       el.style.opacity = '0';
//       el.style.transition = 'none';
//     });
//   }

//   /* ── Trigger all animations ── */
//   function triggerAnimations() {
//     // 1. CSS slide animations
//     section.classList.add('impact-visible');

//     // 2. Count-up for each stat after cards start appearing
//     setTimeout(function () {
//       stats.forEach(function (el) {
//         var target = parseInt(el.dataset.target, 10);
//         var prefix = el.dataset.prefix || '';
//         var suffix = el.dataset.suffix || '';
//         countUp(el, target, prefix, suffix, 1800);
//       });
//     }, 400);
//   }

//   /* ── IntersectionObserver: fires every time section enters/exits ── */
//   if ('IntersectionObserver' in window) {
//     var observer = new IntersectionObserver(
//       function (entries) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) {
//             // Entered viewport → play animations
//             triggerAnimations();
//           } else {
//             // Left viewport → reset so it replays next time
//             resetAnimations();
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     observer.observe(section);
//   } else {
//     triggerAnimations();
//   }

// })();





// /* ===== VENTURES SECTION — Scroll Animations ===== */

// (function () {

//   var section = document.querySelector('.ventures-section');
//   if (!section) return;

//   function reset() {
//     section.classList.remove('ventures-visible');
//   }

//   function trigger() {
//     section.classList.add('ventures-visible');
//   }

//   /* Always trigger on page load if already in view */
//   function checkInitial() {
//     var rect = section.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom > 0) {
//       trigger();
//     }
//   }

//   if ('IntersectionObserver' in window) {
//     var observer = new IntersectionObserver(
//       function (entries) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) {
//             trigger();
//           } else {
//             reset();
//           }
//         });
//       },
//       { threshold: 0.1 }   /* lowered to 0.1 so it fires earlier */
//     );
//     observer.observe(section);
//   } else {
//     trigger();
//   }

//   /* Also check immediately in case section is already visible on load */
//   checkInitial();

// })();






// /* ===== VENTURES SECTION — Safe Animation ===== */

// (function () {

//   var section = document.querySelector('.ventures-section');
//   if (!section) return;

//   /* Step 1: Only AFTER page fully loads, add animation class.
//      This means content is ALWAYS visible first, then JS
//      takes over to enable scroll-triggered animations. */

//   window.addEventListener('load', function () {

//     // Add animation class — now CSS can hide/show on scroll
//     section.classList.add('ventures-animate');

//     function isInView() {
//       var rect = section.getBoundingClientRect();
//       return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
//     }

//     function showSection() {
//       section.classList.add('ventures-visible');
//     }

//     function hideSection() {
//       section.classList.remove('ventures-visible');
//     }

//     // If already in view when page loads, show immediately
//     if (isInView()) {
//       // Small timeout so the hidden state renders first (gives animation effect)
//       setTimeout(showSection, 80);
//     }

//     // Watch scroll for replay every time
//     if ('IntersectionObserver' in window) {
//       var observer = new IntersectionObserver(
//         function (entries) {
//           entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//               showSection();
//             } else {
//               hideSection();
//             }
//           });
//         },
//         { threshold: 0.1 }
//       );
//       observer.observe(section);
//     } else {
//       showSection();
//     }
//   });

// })();








// /* ===== TRUSTED BY — Ping-Pong Scroll + Top Animation ===== */

// (function () {

//   var SPEED = 0.8; // px per frame

//   /* ── Ping-pong row animation ── */
//   function initRow(wrapper, startDirection) {
//     var track  = wrapper.querySelector('.tb-track');
//     var offset = 0;
//     var dir    = startDirection;
//     var paused = false;
//     var totalW = 0;

//     requestAnimationFrame(function () {
//       var wrapperW = wrapper.offsetWidth;
//       var trackW   = track.scrollWidth;
//       totalW = trackW - wrapperW;

//       if (startDirection === -1) {
//         offset = totalW;
//       }

//       function animate() {
//         if (!paused && totalW > 0) {
//           offset += SPEED * dir;
//           if (offset >= totalW) { offset = totalW; dir = -1; }
//           else if (offset <= 0) { offset = 0;      dir =  1; }
//           track.style.transform = 'translateX(-' + offset + 'px)';
//         }
//         requestAnimationFrame(animate);
//       }
//       animate();
//     });

//     wrapper.addEventListener('mouseenter', function () { paused = true; });
//     wrapper.addEventListener('mouseleave', function () { paused = false; });
//     wrapper.addEventListener('touchstart', function () { paused = true; },  { passive: true });
//     wrapper.addEventListener('touchend',   function () { paused = false; }, { passive: true });
//   }

//   /* ── Top content: slide in every time section enters view ── */
//   var section = document.querySelector('.tb-section');

//   if (section) {
//     function showTop()  { section.classList.add('tb-visible'); }
//     function hideTop()  { section.classList.remove('tb-visible'); }

//     if ('IntersectionObserver' in window) {
//       var observer = new IntersectionObserver(function (entries) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) { showTop(); }
//           else                      { hideTop(); }
//         });
//       }, { threshold: 0.15 });
//       observer.observe(section);
//     } else {
//       showTop();
//     }
//   }

//   /* ── Init rows ── */
//   var row1 = document.getElementById('tb-row1');
//   var row2 = document.getElementById('tb-row2');
//   if (row1) initRow(row1,  1);  // starts left, moves right first
//   if (row2) initRow(row2, -1);  // starts right, moves left first

// })();










// // ══════════════════════════════════════════
// //  DATA — swap src/thumb with real assets
// //  Order: Video, Image, Video, Image, Video, Image
// // ══════════════════════════════════════════
// const items = [
//   {
//     type: 'video',
//     src: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
//     thumb: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800',
//     title: 'Inspiring Change Through Leadership',
//     desc: 'Great leadership is about empowering others to realize their potential. By fostering trust, innovation, and collaboration, meaningful progress becomes possible, driving both personal and professional success.'
//   },
//   {
//     type: 'image',
//     src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&w=800',
//     thumb: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&w=400',
//     title: 'Vision Creates Opportunity',
//     desc: 'Every achievement begins with a vision, strengthened by dedication and purposeful action, creating meaningful impact and lasting success.'
//   },
//   {
//     type: 'video',
//     src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
//     thumb: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&w=800',
//     title: 'The Power of Perseverance',
//     desc: 'Success is built through perseverance, continuous learning, and the courage to transform challenges into opportunities for growth.'
//   },
//   {
//     type: 'image',
//     src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&w=800',
//     thumb: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&w=400',
//     title: 'Every Step Matters',
//     desc: 'Every step forward is an opportunity to learn, grow, and build a better future for others through purpose.'
//   },
//   {
//     type: 'video',
//     src: 'https://videos.pexels.com/video-files/3972455/3972455-uhd_2560_1440_25fps.mp4',
//     thumb: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=800',
//     title: 'Growth Starts With Courage',
//     desc: 'Courage is the foundation of every breakthrough. When we dare to step beyond comfort, we unlock possibilities that transform not just ourselves, but the world around us.'
//   },
//   {
//     type: 'image',
//     src: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&w=800',
//     thumb: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&w=400',
//     title: 'Purpose Fuels Progress',
//     desc: 'A clear sense of purpose turns effort into momentum. When your actions are aligned with your values, every challenge becomes a stepping stone toward meaningful achievement.'
//   }
// ];

// let current = 0;
// const CARDS_SHOWN = 3;

// const featured  = document.getElementById('ppFeatured');
// const cardsWrap = document.getElementById('ppCards');
// const arrowUp   = document.getElementById('arrowUp');
// const arrowDown = document.getElementById('arrowDown');

// // ══════════════════════════════
// //  RENDER FEATURED
// //  Image = raw <img> on top, no wrapper box
// //  Content = plain text on page background below
// // ══════════════════════════════
// function renderFeatured(item) {
//   featured.innerHTML = '';

//   // ── Media: sits directly, no card wrapper ──
//   const mediaWrap = document.createElement('div');
//   mediaWrap.className = 'pp-featured-media';

//   if (item.type === 'video') {
//     const vid = document.createElement('video');
//     vid.src      = item.src;
//     vid.poster   = item.thumb;
//     vid.muted    = true;
//     vid.loop     = true;
//     vid.autoplay = true;
//     vid.controls = true;
//     vid.setAttribute('playsinline', '');
//     mediaWrap.appendChild(vid);
//   } else {
//     const img = document.createElement('img');
//     img.src = item.src;
//     img.alt = item.title;
//     mediaWrap.appendChild(img);
//   }

//   featured.appendChild(mediaWrap);

//   // ── Content: plain on page, completely below image ──
//   const body = document.createElement('div');
//   body.className = 'pp-featured-body';
//   body.innerHTML = `
//     <h3>${item.title}</h3>
//     <p>${item.desc}</p>
//     <a href="#" class="pp-read-more"><span>Read More</span></a>
//   `;
//   featured.appendChild(body);
// }

// // ══════════════════════════════
// //  RENDER CARDS
// // ══════════════════════════════
// function renderCards() {
//   cardsWrap.innerHTML = '';

//   for (let i = 1; i <= CARDS_SHOWN; i++) {
//     const idx  = (current + i) % items.length;
//     const item = items[idx];

//     const card = document.createElement('div');
//     card.className = 'pp-card';
//     card.setAttribute('role', 'button');
//     card.setAttribute('tabindex', '0');

//     const thumb = document.createElement('div');
//     thumb.className = 'pp-card-thumb';

//     const img = document.createElement('img');
//     img.src = item.thumb;
//     img.alt = item.title;
//     thumb.appendChild(img);

//     if (item.type === 'video') {
//       const play = document.createElement('div');
//       play.className = 'pp-play-icon';
//       thumb.appendChild(play);
//     }

//     const body = document.createElement('div');
//     body.className = 'pp-card-body';
//     body.innerHTML = `
//       <h3>${item.title}</h3>
//       <p>${item.desc}</p>
//       <a href="#" class="pp-card-btn"><span>Read More</span></a>
//     `;

//     card.appendChild(thumb);
//     card.appendChild(body);

//     // Click card → feature it
//     card.addEventListener('click', (e) => {
//       e.preventDefault();
//       current = idx;
//       render();
//     });

//     card.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         current = idx;
//         render();
//       }
//     });

//     body.querySelector('.pp-card-btn').addEventListener('click', (e) => {
//       e.stopPropagation();
//     });

//     cardsWrap.appendChild(card);
//   }
// }

// // ══════════════════════════════
// //  RENDER WITH FADE
// // ══════════════════════════════
// function render() {
//   featured.classList.add('pp-fade-out');
//   cardsWrap.classList.add('pp-fade-out');

//   setTimeout(() => {
//     renderFeatured(items[current]);
//     renderCards();

//     featured.classList.remove('pp-fade-out');
//     cardsWrap.classList.remove('pp-fade-out');
//     featured.getBoundingClientRect();
//     cardsWrap.getBoundingClientRect();
//     featured.classList.add('pp-fade-in');
//     cardsWrap.classList.add('pp-fade-in');

//     setTimeout(() => {
//       featured.classList.remove('pp-fade-in');
//       cardsWrap.classList.remove('pp-fade-in');
//     }, 320);
//   }, 240);
// }

// // ── ARROWS ──
// arrowUp.addEventListener('click', () => {
//   current = (current + 1) % items.length;
//   render();
// });

// arrowDown.addEventListener('click', () => {
//   current = (current - 1 + items.length) % items.length;
//   render();
// });

// // ── INIT ──
// renderFeatured(items[current]);
// renderCards();
// featured.style.opacity  = '1';
// cardsWrap.style.opacity = '1';

// const ppSection = document.querySelector('.pp-section');

// const ppObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-visible');
//       ppObserver.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.15 });

// if (ppSection) ppObserver.observe(ppSection);











// /* ═══════════════════════════════════════════════════════════════
//    ACHIEVEMENTS v2 — Add to the BOTTOM of your script.js
//    ═══════════════════════════════════════════════════════════════ */

// (function () {
//   'use strict';

//   /* ── DOM refs ── */
//   var strip      = document.getElementById('ach2Strip');
//   var thumbs     = document.querySelectorAll('.ach2-thumb');
//   var slides     = document.querySelectorAll('.ach2-slide');
//   var btnNext    = document.getElementById('ach2Next');
//   var btnPrev    = document.getElementById('ach2Prev');

//   if (!strip || !thumbs.length) return;

//   var activeIndex = 0;
//   var totalCards  = thumbs.length;

//   /* ─────────────────────────────────────────────
//      1. SLIDE SWITCHER
//      ───────────────────────────────────────────── */
//   function switchTo(index) {
//     if (index === activeIndex) return;

//     /* De-activate old */
//     thumbs[activeIndex].classList.remove('active');
//     slides[activeIndex].classList.remove('active', 'slide-in');

//     activeIndex = (index + totalCards) % totalCards;

//     /* Activate new */
//     thumbs[activeIndex].classList.add('active');
//     slides[activeIndex].classList.remove('slide-in');

//     /* Force reflow so animation replays */
//     void slides[activeIndex].offsetWidth;

//     slides[activeIndex].classList.add('active', 'slide-in');

//     /* Remove slide-in class after animation so it can replay next time */
//     var currentSlide = slides[activeIndex];
//     currentSlide.addEventListener('animationend', function handler() {
//       currentSlide.classList.remove('slide-in');
//       currentSlide.removeEventListener('animationend', handler);
//     });
//   }

//   /* ─────────────────────────────────────────────
//      2. THUMBNAIL CLICK
//      ───────────────────────────────────────────── */
//   thumbs.forEach(function (thumb, i) {
//     thumb.addEventListener('click', function () {
//       switchTo(i);
//       /* Scroll the strip so clicked thumb is roughly centred */
//       centerThumb(i);
//     });
//   });

//   /* ─────────────────────────────────────────────
//      3. NAV BUTTONS
//      ───────────────────────────────────────────── */
//   if (btnNext) {
//     btnNext.addEventListener('click', function () {
//       switchTo(activeIndex + 1);
//       centerThumb(activeIndex);
//     });
//   }
//   if (btnPrev) {
//     btnPrev.addEventListener('click', function () {
//       switchTo(activeIndex - 1);
//       centerThumb(activeIndex);
//     });
//   }

//   /* ─────────────────────────────────────────────
//      4. PING-PONG AUTO-SCROLL (strip translation)
//      ───────────────────────────────────────────── */
//   var scrollPos     = 0;
//   var scrollDir     = 1;          /* 1 = left, -1 = right */
//   var scrollSpeed   = 0.6;        /* px per frame */
//   var isPaused      = false;
//   var rafId         = null;

//   function getMaxScroll() {
//     /* Total scrollable width = strip full width - wrapper visible width */
//     var wrapper = strip.parentElement;
//     return Math.max(0, strip.scrollWidth - wrapper.offsetWidth);
//   }

//   function autoScroll() {
//     if (!isPaused) {
//       var max = getMaxScroll();

//       scrollPos += scrollDir * scrollSpeed;

//       if (scrollPos >= max) {
//         scrollPos = max;
//         scrollDir = -1;
//       } else if (scrollPos <= 0) {
//         scrollPos = 0;
//         scrollDir = 1;
//       }

//       strip.style.transform = 'translateX(-' + scrollPos + 'px)';
//     }
//     rafId = requestAnimationFrame(autoScroll);
//   }

//   /* Pause on hover */
//   var wrapper = strip.parentElement;
//   wrapper.addEventListener('mouseenter', function () { isPaused = true; });
//   wrapper.addEventListener('mouseleave', function () { isPaused = false; });

//   /* Start */
//   rafId = requestAnimationFrame(autoScroll);

//   /* ─────────────────────────────────────────────
//      5. CENTRE ACTIVE THUMB IN STRIP
//      ───────────────────────────────────────────── */
//   function centerThumb(index) {
//     var thumb       = thumbs[index];
//     var wrapperEl   = strip.parentElement;
//     var thumbLeft   = thumb.offsetLeft;
//     var thumbWidth  = thumb.offsetWidth;
//     var wrapW       = wrapperEl.offsetWidth;
//     var target      = thumbLeft - (wrapW / 2) + (thumbWidth / 2);
//     var max         = getMaxScroll();

//     scrollPos = Math.max(0, Math.min(target, max));
//     strip.style.transform = 'translateX(-' + scrollPos + 'px)';
//   }

// })();








// /* ================================================================
//    ACHIEVEMENTS SECTION — achievements.js
//    ================================================================
//    BEHAVIOUR:
//    - Thumbnails scroll LEFT infinitely with no gap
//    - When a thumb reaches the left edge → big card auto-switches
//    - Hover strip  → scroll pauses
//    - Mouse out    → scroll resumes + click-lock clears
//    - Click thumb  → big card switches + scroll stops
//                     (resumes after mouse leaves strip)

//    CONFIG (lines 20-21):
//    - SCROLL_SPEED : px per frame  (higher = faster)
//    - GAP_PX       : must match the 'gap' value in achievements.css
//    ================================================================ */

// (function () {
//   'use strict';

//   /* ── CONFIG ── */
//   var SCROLL_SPEED = 0.7;
//   var GAP_PX       = 12;

//   /* ── DOM ── */
//   var wrapper = document.getElementById('achStripWrapper');
//   var strip   = document.getElementById('achStrip');
//   var slides  = document.querySelectorAll('#achSlides .ach-slide');

//   if (!wrapper || !strip || !slides.length) return;

//   var TOTAL              = slides.length;
//   var scrollPos          = 0;
//   var oneSetWidth        = 0;
//   var paused             = false;
//   var stoppedByClick     = false;
//   var activeIndex        = 0;
//   var lastTriggeredIndex = 0;

//   /* ----------------------------------------------------------------
//      CLONE — repeat original thumbs 6× so strip always fills screen.
//      Done before init() so layout is ready when we measure.
//      ---------------------------------------------------------------- */
//   var originalHTML = strip.innerHTML;
//   var cloned = '';
//   for (var c = 0; c < 6; c++) { cloned += originalHTML; }
//   strip.innerHTML = cloned;

//   /* ----------------------------------------------------------------
//      INIT — runs after full page load.
//      We use getBoundingClientRect() to measure the real rendered
//      width of thumb[0] — most reliable method across all browsers.
//      oneSetWidth = (thumbWidth + gap) × number of real cards
//      ---------------------------------------------------------------- */
//   function init() {
//     var allThumbs = strip.querySelectorAll('.ach-thumb');

//     /* Measure using getBoundingClientRect — works after full paint */
//     var rect  = allThumbs[0].getBoundingClientRect();
//     var thumbW = rect.width;
//     oneSetWidth = (thumbW + GAP_PX) * TOTAL;

//     /* Activate slide 0 and all copies of thumb 0 */
//     slides[0].classList.add('active');
//     allThumbs.forEach(function (t) {
//       if (parseInt(t.getAttribute('data-index')) === 0) {
//         t.classList.add('active');
//       }
//     });

//     lastTriggeredIndex = 0;
//     scrollPos          = 0;
//     strip.style.transform = 'translateX(0)';

//     requestAnimationFrame(tick);
//   }

//   /* ----------------------------------------------------------------
//      SWITCH BIG CARD
//      Deactivates current slide + thumb copies,
//      activates new slide with slide-up animation + new thumb copies.
//      ---------------------------------------------------------------- */
//   function switchTo(newIndex) {
//     if (newIndex === activeIndex) return;

//     /* Out: remove from current */
//     slides[activeIndex].classList.remove('active', 'slide-in');
//     strip.querySelectorAll('.ach-thumb').forEach(function (t) {
//       t.classList.remove('active');
//     });

//     activeIndex = newIndex;

//     /* In: add to new with animation */
//     void slides[activeIndex].offsetWidth;   /* force reflow so animation replays */
//     slides[activeIndex].classList.add('active', 'slide-in');
//     slides[activeIndex].addEventListener('animationend', function fn() {
//       slides[activeIndex].classList.remove('slide-in');
//       slides[activeIndex].removeEventListener('animationend', fn);
//     });

//     strip.querySelectorAll('.ach-thumb').forEach(function (t) {
//       if (parseInt(t.getAttribute('data-index')) === activeIndex) {
//         t.classList.add('active');
//       }
//     });
//   }

//   /* ----------------------------------------------------------------
//      DETECT LEFTMOST CARD
//      Uses getBoundingClientRect() every tick — this reads the actual
//      rendered position of each thumb on screen, which accounts for
//      CSS transitions, cloning, and any layout shifts.

//      Logic: find the thumb whose left edge (relative to wrapper left)
//      is closest to 0. That is the "at left edge" card.
//      ---------------------------------------------------------------- */
//   function detectAndSwitch() {
//     var allThumbs   = strip.querySelectorAll('.ach-thumb');
//     var wrapperLeft = wrapper.getBoundingClientRect().left;
//     var best        = -1;
//     var bestDist    = Infinity;

//     allThumbs.forEach(function (thumb) {
//       var tr          = thumb.getBoundingClientRect();
//       var visibleLeft = tr.left - wrapperLeft;   /* position relative to wrapper */
//       var tw          = tr.width;

//       /* Only consider thumbs entering or at the left boundary */
//       if (visibleLeft >= -(tw * 0.4) && visibleLeft <= tw * 0.6) {
//         var dist = Math.abs(visibleLeft);
//         if (dist < bestDist) {
//           bestDist = dist;
//           best = parseInt(thumb.getAttribute('data-index'));
//         }
//       }
//     });

//     /* Only switch if a new card has clearly arrived at left edge */
//     if (best !== -1 && best !== lastTriggeredIndex) {
//       lastTriggeredIndex = best;
//       switchTo(best);
//     }
//   }

//   /* ----------------------------------------------------------------
//      SCROLL TICK — runs every animation frame
//      Moves strip left by SCROLL_SPEED px.
//      Resets seamlessly when one full set has been scrolled past.
//      ---------------------------------------------------------------- */
//   function tick() {
//     if (!paused && !stoppedByClick) {
//       scrollPos += SCROLL_SPEED;

//       /* Seamless infinite reset */
//       if (oneSetWidth > 0 && scrollPos >= oneSetWidth) {
//         scrollPos -= oneSetWidth;
//       }

//       strip.style.transform = 'translateX(-' + scrollPos + 'px)';

//       /* Check if big card needs to switch */
//       detectAndSwitch();
//     }

//     requestAnimationFrame(tick);
//   }

//   /* ----------------------------------------------------------------
//      HOVER — pause on enter, resume + clear click-lock on leave
//      ---------------------------------------------------------------- */
//   wrapper.addEventListener('mouseenter', function () {
//     paused = true;
//   });

//   wrapper.addEventListener('mouseleave', function () {
//     paused         = false;
//     stoppedByClick = false;
//   });

//   /* ----------------------------------------------------------------
//      CLICK — event delegation covers all cloned thumbs
//      ---------------------------------------------------------------- */
//   strip.addEventListener('click', function (e) {
//     var thumb = e.target.closest('.ach-thumb');
//     if (!thumb) return;

//     var idx = parseInt(thumb.getAttribute('data-index'));
//     if (idx === activeIndex) return;

//     switchTo(idx);
//     lastTriggeredIndex = idx;
//     stoppedByClick     = true;   /* stop scroll until mouse leaves strip */
//   });

//   /* ----------------------------------------------------------------
//      START — wait for full page load so getBoundingClientRect()
//      returns accurate values (fonts, CSS, images all settled)
//      ---------------------------------------------------------------- */
//   if (document.readyState === 'complete') {
//     init();
//   } else {
//     window.addEventListener('load', init);
//   }

// })();


// /* ============================================
//    VOICES OF TRUST — single active card fix
//    ============================================ */
// (function () {
//   'use strict';

//   var bubbles = document.querySelectorAll('.vot-b');
//   if (!bubbles.length) return;

//   function clearAll() {
//     bubbles.forEach(function (b) {
//       b.classList.remove('is-active');
//     });
//   }

//   bubbles.forEach(function (b) {
//     b.addEventListener('mouseenter', function () {
//       clearAll();
//       b.classList.add('is-active');
//     });

//     b.addEventListener('mouseleave', function () {
//       b.classList.remove('is-active');
//     });

//     // Optional: tap support for mobile/touch devices
//     b.addEventListener('touchstart', function (e) {
//       var alreadyActive = b.classList.contains('is-active');
//       clearAll();
//       if (!alreadyActive) {
//         b.classList.add('is-active');
//       }
//     }, { passive: true });
//   });

//   // Close any open card if user taps outside on touch devices
//   document.addEventListener('touchstart', function (e) {
//     if (!e.target.closest('.vot-b')) {
//       clearAll();
//     }
//   }, { passive: true });

// })();


// function hide() {
//   if (header) { header.style.opacity = '0'; header.style.transform = 'translateY(20px)'; }
//   if (map) { map.style.opacity = '0'; }
// }

// function show() {
//   if (header) { header.style.opacity = '1'; header.style.transform = 'translateY(0)'; }
//   if (map) { setTimeout(function () { map.style.opacity = '1'; }, 180); }
// }

// hide();

// if (window.IntersectionObserver) {
//   new IntersectionObserver(function (entries) {
//     entries.forEach(function (e) {
//       if (e.isIntersecting) show(); else hide();
//     });
//   }, { threshold: 0.1 }).observe(section);
// }

// // ===================== WHO AM I SECTION — SCRIPT =====================
// // Wires up the plus button and the arrow/chevron button.
// // Replace the console.log / scroll behavior with whatever action you want.

// // (function () {
// //   var plusBtn = document.querySelector('.whoami-btn-plus');
// //   var chevronBtn = document.querySelector('.whoami-btn-chevron');

// //   if (plusBtn) {
// //     plusBtn.addEventListener('click', function () {
// //       // Hook up your "expand / read more" behavior here
// //       console.log('Plus button clicked');
// //     });
// //   }

// //   if (chevronBtn) {
// //     chevronBtn.addEventListener('click', function () {
// //       // Hook up your "scroll up" behavior here
// //       window.scrollTo({ top: 0, behavior: 'smooth' });
// //     });
// //   }
// // })();



//  const whoamiSection = document.querySelector('.whoami-section');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('is-visible');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.2
//   });

//   if (whoamiSection) observer.observe(whoamiSection);

// // ===================== EDGE WIDGETS — SCRIPT =====================

// (function () {
//   var scrollBtn = document.getElementById('edgeScrollTop');
//   var progressFill = document.getElementById('edgeProgressFill');

//   var SHOW_AFTER_PX = 300;

//   function getScrollPercent() {
//     var scrollTop = window.scrollY || document.documentElement.scrollTop;
//     var docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     if (docHeight <= 0) return 0;
//     return Math.min(1, Math.max(0, scrollTop / docHeight));
//   }

//   function updateProgress() {
//     var percent = getScrollPercent();

//     // Fill the vertical progress line based on scroll percentage
//     if (progressFill) {
//       progressFill.style.height = (percent * 100) + '%';
//     }

//     // Show/hide the scroll-to-top button
//     if (scrollBtn) {
//       if (window.scrollY > SHOW_AFTER_PX) {
//         scrollBtn.classList.add('is-visible');
//       } else {
//         scrollBtn.classList.remove('is-visible');
//       }
//     }
//   }

//   // Initial check (in case page loads mid-scroll)
//   updateProgress();

//   window.addEventListener('scroll', updateProgress, { passive: true });
//   window.addEventListener('resize', updateProgress);

//   // Smooth scroll to top on click
//   if (scrollBtn) {
//     scrollBtn.addEventListener('click', function () {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
//   }
// })();


// //its for triger animation in top to bottom 
// /* ===== Re-triggering scroll animation for Professional Overview heading ===== */
// const proHeading = document.querySelector('.pro-heading');

// const proObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-visible');
//     } else {
//       entry.target.classList.remove('is-visible');
//     }
//   });
// }, {
//   threshold: 0.3
// });

// if (proHeading) proObserver.observe(proHeading);




// /* ===== Re-triggering scroll animation for Positive Perspectives title ===== */
// const ppTitle = document.querySelector('.pp-title');

// const ppTitleObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-visible');
//     } else {
//       entry.target.classList.remove('is-visible');
//     }
//   });
// }, {
//   threshold: 0.3
// });

// if (ppTitle) ppTitleObserver.observe(ppTitle);



// /* ===== Re-triggering scroll animation for Achievements header ===== */
// const achHeader = document.querySelector('.ach-header');

// const achObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-visible');
//     } else {
//       entry.target.classList.remove('is-visible');
//     }
//   });
// }, {
//   threshold: 0.3
// });

// if (achHeader) achObserver.observe(achHeader);



// /* ===== Re-triggering scroll animation for Expertise heading ===== */
// const expertiseHeading = document.querySelector('.expertise-heading');

// const expertiseObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-visible');
//     } else {
//       entry.target.classList.remove('is-visible');
//     }
//   });
// }, {
//   threshold: 0.3
// });

// if (expertiseHeading) expertiseObserver.observe(expertiseHeading);






/* ============================================
   ECOG – script.js
   ============================================ */
/* ============================================
   HERO — JS
   ============================================ */

/* ── 1. Animate elements into view ── */
(function () {
  var heroEls = document.querySelectorAll('.hero-animate');
  if (!heroEls.length) return;

  function checkHero() {
    heroEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkHero, { passive: true });
  checkHero();
})();

/* ── 2. Auto-rotate link icons ── */
(function () {
  var productIcons = ["img/logo (3).png", "img/logo (4).png"];
  var techIcons    = ["img/logo (1).png",  "img/logo (2).png"];
  var productIndex = 0;
  var techIndex    = 0;

  var productImg = document.getElementById('icon-products');
  var techImg    = document.getElementById('icon-tech');

  function fadeSwap(imgEl, newSrc) {
    imgEl.style.transition = 'opacity 0.4s ease';
    imgEl.style.opacity = '0';
    setTimeout(function () {
      imgEl.src = newSrc;
      imgEl.style.opacity = '1';
    }, 400);
  }

  if (productImg) {
    setInterval(function () {
      productIndex = (productIndex + 1) % productIcons.length;
      fadeSwap(productImg, productIcons[productIndex]);
    }, 2000);
  }
  if (techImg) {
    setInterval(function () {
      techIndex = (techIndex + 1) % techIcons.length;
      fadeSwap(techImg, techIcons[techIndex]);
    }, 2500);
  }
})();

/* ── 3. Video placeholder fallback ── */
(function () {
  var video       = document.querySelector('.hero-video');
  var placeholder = document.querySelector('.hero-video-placeholder');
  if (!video || !placeholder) return;

  // Show placeholder immediately (video file not added yet)
  video.style.display = 'none';
  placeholder.style.display = 'flex';

  // When you add the real video file, remove these two lines above.
  // The video will autoplay and hide the placeholder automatically.
  video.addEventListener('canplay', function () {
    placeholder.style.display = 'none';
    video.style.display = 'block';
  });
  video.addEventListener('error', function () {
    placeholder.style.display = 'flex';
    video.style.display = 'none';
  });
})();

/* ── 3. About Me: Scroll animation ── */
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

/* ── 4. Accordion: one open at a time ── */
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

/* ── 5. Achievements: Scroll-driven slide-up stack ── */
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

    var scrolled = -wrapperTop;
    var maxScroll = wrapperH - stickyH;

    if (scrolled < 0) scrolled = 0;
    if (scrolled > maxScroll) scrolled = maxScroll;

    var segmentSize = maxScroll / (total - 1);

    slides.forEach(function (slide, i) {
      if (i === 0) {
        var progress = scrolled / segmentSize;
        if (progress > 1) progress = 1;
        var translateY = -progress * 8;
        slide.style.transform = 'translateY(' + translateY + '%)';
        slide.style.zIndex = 1;
      } else {
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
  onScroll();
})();

/* ── 6. Hero section: replayable scroll animation ── */
(function () {
  var els = document.querySelectorAll('.hero-animate');
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.15 });

  els.forEach(function (el) { observer.observe(el); });
})();




/* ── 7. Back to Top Button ── */
(function () {
  var backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  // Show the button when user scrolls down 300px from the top
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  // Scroll to top smoothly when button is clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();










/* ===== EXPERTISE SCROLL ANIMATION ===== */

(function () {

  // Speed in px/frame — slightly faster on mobile (smaller cards = needs more speed to feel smooth)
  function getSpeed() {
    return window.innerWidth < 600 ? 0.55 : 0.5;
  }

  document.querySelectorAll('.expertise-track-wrapper').forEach(function (wrapper) {
    var track     = wrapper.querySelector('.expertise-track');
    var direction = wrapper.dataset.direction; // 'ltr' or 'rtl'
    var offset    = 0;
    var paused    = false;
    var rafId     = null;

    // Prefer touch: pause on touchstart, resume on touchend
    wrapper.addEventListener('touchstart', function () { paused = true; },  { passive: true });
    wrapper.addEventListener('touchend',   function () { paused = false; }, { passive: true });

    // Desktop: pause whole row on hover
    wrapper.addEventListener('mouseenter', function () { paused = true; });
    wrapper.addEventListener('mouseleave', function () { paused = false; });

    function halfWidth() {
      return track.scrollWidth / 2;
    }

    function animate() {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (!paused) {
        var hw    = halfWidth();
        var speed = getSpeed();

        if (direction === 'ltr') {
          offset += speed;
          if (offset >= hw) offset = 0;
          track.style.transform = 'translateX(' + (offset - hw) + 'px)';
        } else {
          offset += speed;
          if (offset >= hw) offset = 0;
          track.style.transform = 'translateX(-' + offset + 'px)';
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
  });

})();




/* ===== IMPACT CREATED — Replay Every Time + Number Fade ===== */

(function () {

  var section = document.querySelector('.impact-section');
  var stats   = document.querySelectorAll('.impact-stat[data-target]');

  if (!section) return;

  var countTimers = [];

  /* ── Count-up with fade-in ── */
  function countUp(el, target, prefix, suffix, duration) {
    var start     = 0;
    var startTime = null;

    // Fade out first, then fade in while counting
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease';

    setTimeout(function () {
      el.style.opacity = '1';

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        var current  = Math.floor(eased * target);
        el.textContent = (prefix || '') + current + (suffix || '');
        if (progress < 1) {
          var id = requestAnimationFrame(step);
          countTimers.push(id);
        } else {
          el.textContent = (prefix || '') + target + (suffix || '');
        }
      }

      var id = requestAnimationFrame(step);
      countTimers.push(id);
    }, 300); // short delay so fade-out is visible before count starts
  }

  /* ── Reset everything back to hidden ── */
  function resetAnimations() {
    // Cancel any running count-ups
    countTimers.forEach(function (id) { cancelAnimationFrame(id); });
    countTimers = [];

    // Remove visible class — CSS transitions snap back
    section.classList.remove('impact-visible');

    // Reset stat numbers to 0 and hide them
    stats.forEach(function (el) {
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      el.textContent = (prefix || '') + '0' + (suffix || '');
      el.style.opacity = '0';
      el.style.transition = 'none';
    });
  }

  /* ── Trigger all animations ── */
  function triggerAnimations() {
    // 1. CSS slide animations
    section.classList.add('impact-visible');

    // 2. Count-up for each stat after cards start appearing
    setTimeout(function () {
      stats.forEach(function (el) {
        var target = parseInt(el.dataset.target, 10);
        var prefix = el.dataset.prefix || '';
        var suffix = el.dataset.suffix || '';
        countUp(el, target, prefix, suffix, 1800);
      });
    }, 400);
  }

  /* ── IntersectionObserver: fires every time section enters/exits ── */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Entered viewport → play animations
            triggerAnimations();
          } else {
            // Left viewport → reset so it replays next time
            resetAnimations();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
  } else {
    triggerAnimations();
  }

})();





/* ===== VENTURES SECTION — Scroll Animations ===== */

(function () {

  var section = document.querySelector('.ventures-section');
  if (!section) return;

  function reset() {
    section.classList.remove('ventures-visible');
  }

  function trigger() {
    section.classList.add('ventures-visible');
  }

  /* Always trigger on page load if already in view */
  function checkInitial() {
    var rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      trigger();
    }
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            trigger();
          } else {
            reset();
          }
        });
      },
      { threshold: 0.1 }   /* lowered to 0.1 so it fires earlier */
    );
    observer.observe(section);
  } else {
    trigger();
  }

  /* Also check immediately in case section is already visible on load */
  checkInitial();

})();






/* ===== VENTURES SECTION — Safe Animation ===== */

(function () {

  var section = document.querySelector('.ventures-section');
  if (!section) return;

  /* Step 1: Only AFTER page fully loads, add animation class.
     This means content is ALWAYS visible first, then JS
     takes over to enable scroll-triggered animations. */

  window.addEventListener('load', function () {

    // Add animation class — now CSS can hide/show on scroll
    section.classList.add('ventures-animate');

    function isInView() {
      var rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    }

    function showSection() {
      section.classList.add('ventures-visible');
    }

    function hideSection() {
      section.classList.remove('ventures-visible');
    }

    // If already in view when page loads, show immediately
    if (isInView()) {
      // Small timeout so the hidden state renders first (gives animation effect)
      setTimeout(showSection, 80);
    }

    // Watch scroll for replay every time
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              showSection();
            } else {
              hideSection();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    } else {
      showSection();
    }
  });

})();








/* ===== TRUSTED BY — Ping-Pong Scroll + Top Animation ===== */

(function () {

  var SPEED = 0.8; // px per frame

  /* ── Ping-pong row animation ── */
  function initRow(wrapper, startDirection) {
    var track  = wrapper.querySelector('.tb-track');
    var offset = 0;
    var dir    = startDirection;
    var paused = false;
    var totalW = 0;

    requestAnimationFrame(function () {
      var wrapperW = wrapper.offsetWidth;
      var trackW   = track.scrollWidth;
      totalW = trackW - wrapperW;

      if (startDirection === -1) {
        offset = totalW;
      }

      function animate() {
        if (!paused && totalW > 0) {
          offset += SPEED * dir;
          if (offset >= totalW) { offset = totalW; dir = -1; }
          else if (offset <= 0) { offset = 0;      dir =  1; }
          track.style.transform = 'translateX(-' + offset + 'px)';
        }
        requestAnimationFrame(animate);
      }
      animate();
    });

    wrapper.addEventListener('mouseenter', function () { paused = true; });
    wrapper.addEventListener('mouseleave', function () { paused = false; });
    wrapper.addEventListener('touchstart', function () { paused = true; },  { passive: true });
    wrapper.addEventListener('touchend',   function () { paused = false; }, { passive: true });
  }

  /* ── Top content: slide in every time section enters view ── */
  var section = document.querySelector('.tb-section');

  if (section) {
    function showTop()  { section.classList.add('tb-visible'); }
    function hideTop()  { section.classList.remove('tb-visible'); }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { showTop(); }
          else                      { hideTop(); }
        });
      }, { threshold: 0.15 });
      observer.observe(section);
    } else {
      showTop();
    }
  }

  /* ── Init rows ── */
  var row1 = document.getElementById('tb-row1');
  var row2 = document.getElementById('tb-row2');
  if (row1) initRow(row1,  1);  // starts left, moves right first
  if (row2) initRow(row2, -1);  // starts right, moves left first

})();










// ══════════════════════════════════════════
//  DATA — swap src/thumb with real assets
//  Order: Video, Image, Video, Image, Video, Image
// ══════════════════════════════════════════
const items = [
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    thumb: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800',
    title: 'Inspiring Change Through Leadership',
    desc: 'Great leadership is about empowering others to realize their potential. By fostering trust, innovation, and collaboration, meaningful progress becomes possible, driving both personal and professional success.'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&w=800',
    thumb: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&w=400',
    title: 'Vision Creates Opportunity',
    desc: 'Every achievement begins with a vision, strengthened by dedication and purposeful action, creating meaningful impact and lasting success.'
  },
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    thumb: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&w=800',
    title: 'The Power of Perseverance',
    desc: 'Success is built through perseverance, continuous learning, and the courage to transform challenges into opportunities for growth.'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&w=800',
    thumb: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&w=400',
    title: 'Every Step Matters',
    desc: 'Every step forward is an opportunity to learn, grow, and build a better future for others through purpose.'
  },
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/3972455/3972455-uhd_2560_1440_25fps.mp4',
    thumb: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=800',
    title: 'Growth Starts With Courage',
    desc: 'Courage is the foundation of every breakthrough. When we dare to step beyond comfort, we unlock possibilities that transform not just ourselves, but the world around us.'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&w=800',
    thumb: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&w=400',
    title: 'Purpose Fuels Progress',
    desc: 'A clear sense of purpose turns effort into momentum. When your actions are aligned with your values, every challenge becomes a stepping stone toward meaningful achievement.'
  }
];

let current = 0;
const CARDS_SHOWN = 3;

const featured  = document.getElementById('ppFeatured');
const cardsWrap = document.getElementById('ppCards');
const arrowUp   = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');

// ══════════════════════════════
//  RENDER FEATURED
//  Image = raw <img> on top, no wrapper box
//  Content = plain text on page background below
// ══════════════════════════════
function renderFeatured(item) {
  if (!featured) return;
  featured.innerHTML = '';

  // ── Media: sits directly, no card wrapper ──
  const mediaWrap = document.createElement('div');
  mediaWrap.className = 'pp-featured-media';

  if (item.type === 'video') {
    const vid = document.createElement('video');
    vid.src      = item.src;
    vid.poster   = item.thumb;
    vid.muted    = true;
    vid.loop     = true;
    vid.autoplay = true;
    vid.controls = true;
    vid.setAttribute('playsinline', '');
    mediaWrap.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    mediaWrap.appendChild(img);
  }

  featured.appendChild(mediaWrap);

  // ── Content: plain on page, completely below image ──
  const body = document.createElement('div');
  body.className = 'pp-featured-body';
  body.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <a href="#" class="pp-read-more"><span>Read More</span></a>
  `;
  featured.appendChild(body);
}

// ══════════════════════════════
//  RENDER CARDS
// ══════════════════════════════
function renderCards() {
  if (!cardsWrap) return;
  cardsWrap.innerHTML = '';

  for (let i = 1; i <= CARDS_SHOWN; i++) {
    const idx  = (current + i) % items.length;
    const item = items[idx];

    const card = document.createElement('div');
    card.className = 'pp-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const thumb = document.createElement('div');
    thumb.className = 'pp-card-thumb';

    const img = document.createElement('img');
    img.src = item.thumb;
    img.alt = item.title;
    thumb.appendChild(img);

    if (item.type === 'video') {
      const play = document.createElement('div');
      play.className = 'pp-play-icon';
      thumb.appendChild(play);
    }

    const body = document.createElement('div');
    body.className = 'pp-card-body';
    body.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="#" class="pp-card-btn"><span>Read More</span></a>
    `;

    card.appendChild(thumb);
    card.appendChild(body);

    // Click card → feature it
    card.addEventListener('click', (e) => {
      e.preventDefault();
      current = idx;
      render();
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        current = idx;
        render();
      }
    });

    body.querySelector('.pp-card-btn').addEventListener('click', (e) => {
      e.stopPropagation();
    });

    cardsWrap.appendChild(card);
  }
}

// ══════════════════════════════
//  RENDER WITH FADE
// ══════════════════════════════
function render() {
  if (!featured || !cardsWrap) return;
  featured.classList.add('pp-fade-out');
  cardsWrap.classList.add('pp-fade-out');

  setTimeout(() => {
    renderFeatured(items[current]);
    renderCards();

    featured.classList.remove('pp-fade-out');
    cardsWrap.classList.remove('pp-fade-out');
    featured.getBoundingClientRect();
    cardsWrap.getBoundingClientRect();
    featured.classList.add('pp-fade-in');
    cardsWrap.classList.add('pp-fade-in');

    setTimeout(() => {
      featured.classList.remove('pp-fade-in');
      cardsWrap.classList.remove('pp-fade-in');
    }, 320);
  }, 240);
}

// ── ARROWS ──
if (arrowUp) {
  arrowUp.addEventListener('click', () => {
    current = (current + 1) % items.length;
    render();
  });
}

if (arrowDown) {
  arrowDown.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    render();
  });
}

// ── INIT ──
if (featured && cardsWrap) {
  renderFeatured(items[current]);
  renderCards();
  featured.style.opacity  = '1';
  cardsWrap.style.opacity = '1';
}

const ppSection = document.querySelector('.pp-section');

const ppObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      ppObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

if (ppSection) ppObserver.observe(ppSection);











/* ═══════════════════════════════════════════════════════════════
   ACHIEVEMENTS v2 — Add to the BOTTOM of your script.js
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── DOM refs ── */
  var strip      = document.getElementById('ach2Strip');
  var thumbs     = document.querySelectorAll('.ach2-thumb');
  var slides     = document.querySelectorAll('.ach2-slide');
  var btnNext    = document.getElementById('ach2Next');
  var btnPrev    = document.getElementById('ach2Prev');

  if (!strip || !thumbs.length) return;

  var activeIndex = 0;
  var totalCards  = thumbs.length;

  /* ─────────────────────────────────────────────
     1. SLIDE SWITCHER
     ───────────────────────────────────────────── */
  function switchTo(index) {
    if (index === activeIndex) return;

    /* De-activate old */
    thumbs[activeIndex].classList.remove('active');
    slides[activeIndex].classList.remove('active', 'slide-in');

    activeIndex = (index + totalCards) % totalCards;

    /* Activate new */
    thumbs[activeIndex].classList.add('active');
    slides[activeIndex].classList.remove('slide-in');

    /* Force reflow so animation replays */
    void slides[activeIndex].offsetWidth;

    slides[activeIndex].classList.add('active', 'slide-in');

    /* Remove slide-in class after animation so it can replay next time */
    var currentSlide = slides[activeIndex];
    currentSlide.addEventListener('animationend', function handler() {
      currentSlide.classList.remove('slide-in');
      currentSlide.removeEventListener('animationend', handler);
    });
  }

  /* ─────────────────────────────────────────────
     2. THUMBNAIL CLICK
     ───────────────────────────────────────────── */
  thumbs.forEach(function (thumb, i) {
    thumb.addEventListener('click', function () {
      switchTo(i);
      /* Scroll the strip so clicked thumb is roughly centred */
      centerThumb(i);
    });
  });

  /* ─────────────────────────────────────────────
     3. NAV BUTTONS
     ───────────────────────────────────────────── */
  if (btnNext) {
    btnNext.addEventListener('click', function () {
      switchTo(activeIndex + 1);
      centerThumb(activeIndex);
    });
  }
  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      switchTo(activeIndex - 1);
      centerThumb(activeIndex);
    });
  }

  /* ─────────────────────────────────────────────
     4. PING-PONG AUTO-SCROLL (strip translation)
     ───────────────────────────────────────────── */
  var scrollPos     = 0;
  var scrollDir     = 1;          /* 1 = left, -1 = right */
  var scrollSpeed   = 0.6;        /* px per frame */
  var isPaused      = false;
  var rafId         = null;

  function getMaxScroll() {
    /* Total scrollable width = strip full width - wrapper visible width */
    var wrapper = strip.parentElement;
    return Math.max(0, strip.scrollWidth - wrapper.offsetWidth);
  }

  function autoScroll() {
    if (!isPaused) {
      var max = getMaxScroll();

      scrollPos += scrollDir * scrollSpeed;

      if (scrollPos >= max) {
        scrollPos = max;
        scrollDir = -1;
      } else if (scrollPos <= 0) {
        scrollPos = 0;
        scrollDir = 1;
      }

      strip.style.transform = 'translateX(-' + scrollPos + 'px)';
    }
    rafId = requestAnimationFrame(autoScroll);
  }

  /* Pause on hover */
  var wrapper = strip.parentElement;
  wrapper.addEventListener('mouseenter', function () { isPaused = true; });
  wrapper.addEventListener('mouseleave', function () { isPaused = false; });

  /* Start */
  rafId = requestAnimationFrame(autoScroll);

  /* ─────────────────────────────────────────────
     5. CENTRE ACTIVE THUMB IN STRIP
     ───────────────────────────────────────────── */
  function centerThumb(index) {
    var thumb       = thumbs[index];
    var wrapperEl   = strip.parentElement;
    var thumbLeft   = thumb.offsetLeft;
    var thumbWidth  = thumb.offsetWidth;
    var wrapW       = wrapperEl.offsetWidth;
    var target      = thumbLeft - (wrapW / 2) + (thumbWidth / 2);
    var max         = getMaxScroll();

    scrollPos = Math.max(0, Math.min(target, max));
    strip.style.transform = 'translateX(-' + scrollPos + 'px)';
  }

})();








/* ================================================================
   ACHIEVEMENTS SECTION — achievements.js
   ================================================================
   BEHAVIOUR:
   - Thumbnails scroll LEFT infinitely with no gap
   - When a thumb reaches the left edge → big card auto-switches
   - Hover strip  → scroll pauses
   - Mouse out    → scroll resumes + click-lock clears
   - Click thumb  → big card switches + scroll stops
                    (resumes after mouse leaves strip)

   CONFIG (lines 20-21):
   - SCROLL_SPEED : px per frame  (higher = faster)
   - GAP_PX       : must match the 'gap' value in achievements.css
   ================================================================ */

(function () {
  'use strict';

  /* ── CONFIG ── */
  var SCROLL_SPEED = 0.7;
  var GAP_PX       = 12;

  /* ── DOM ── */
  var wrapper = document.getElementById('achStripWrapper');
  var strip   = document.getElementById('achStrip');
  var slides  = document.querySelectorAll('#achSlides .ach-slide');

  if (!wrapper || !strip || !slides.length) return;

  var TOTAL              = slides.length;
  var scrollPos          = 0;
  var oneSetWidth        = 0;
  var paused             = false;
  var stoppedByClick     = false;
  var activeIndex        = 0;
  var lastTriggeredIndex = 0;

  /* ----------------------------------------------------------------
     CLONE — repeat original thumbs 6× so strip always fills screen.
     Done before init() so layout is ready when we measure.
     ---------------------------------------------------------------- */
  var originalHTML = strip.innerHTML;
  var cloned = '';
  for (var c = 0; c < 6; c++) { cloned += originalHTML; }
  strip.innerHTML = cloned;

  /* ----------------------------------------------------------------
     INIT — runs after full page load.
     We use getBoundingClientRect() to measure the real rendered
     width of thumb[0] — most reliable method across all browsers.
     oneSetWidth = (thumbWidth + gap) × number of real cards
     ---------------------------------------------------------------- */
  function init() {
    var allThumbs = strip.querySelectorAll('.ach-thumb');

    /* Measure using getBoundingClientRect — works after full paint */
    var rect  = allThumbs[0].getBoundingClientRect();
    var thumbW = rect.width;
    oneSetWidth = (thumbW + GAP_PX) * TOTAL;

    /* Activate slide 0 and all copies of thumb 0 */
    slides[0].classList.add('active');
    allThumbs.forEach(function (t) {
      if (parseInt(t.getAttribute('data-index')) === 0) {
        t.classList.add('active');
      }
    });

    lastTriggeredIndex = 0;
    scrollPos          = 0;
    strip.style.transform = 'translateX(0)';

    requestAnimationFrame(tick);
  }

  /* ----------------------------------------------------------------
     SWITCH BIG CARD
     Deactivates current slide + thumb copies,
     activates new slide with slide-up animation + new thumb copies.
     ---------------------------------------------------------------- */
  function switchTo(newIndex) {
    if (newIndex === activeIndex) return;

    /* Out: remove from current */
    slides[activeIndex].classList.remove('active', 'slide-in');
    strip.querySelectorAll('.ach-thumb').forEach(function (t) {
      t.classList.remove('active');
    });

    activeIndex = newIndex;

    /* In: add to new with animation */
    void slides[activeIndex].offsetWidth;   /* force reflow so animation replays */
    slides[activeIndex].classList.add('active', 'slide-in');
    slides[activeIndex].addEventListener('animationend', function fn() {
      slides[activeIndex].classList.remove('slide-in');
      slides[activeIndex].removeEventListener('animationend', fn);
    });

    strip.querySelectorAll('.ach-thumb').forEach(function (t) {
      if (parseInt(t.getAttribute('data-index')) === activeIndex) {
        t.classList.add('active');
      }
    });
  }

  /* ----------------------------------------------------------------
     DETECT LEFTMOST CARD
     Uses getBoundingClientRect() every tick — this reads the actual
     rendered position of each thumb on screen, which accounts for
     CSS transitions, cloning, and any layout shifts.

     Logic: find the thumb whose left edge (relative to wrapper left)
     is closest to 0. That is the "at left edge" card.
     ---------------------------------------------------------------- */
  function detectAndSwitch() {
    var allThumbs   = strip.querySelectorAll('.ach-thumb');
    var wrapperLeft = wrapper.getBoundingClientRect().left;
    var best        = -1;
    var bestDist    = Infinity;

    allThumbs.forEach(function (thumb) {
      var tr          = thumb.getBoundingClientRect();
      var visibleLeft = tr.left - wrapperLeft;   /* position relative to wrapper */
      var tw          = tr.width;

      /* Only consider thumbs entering or at the left boundary */
      if (visibleLeft >= -(tw * 0.4) && visibleLeft <= tw * 0.6) {
        var dist = Math.abs(visibleLeft);
        if (dist < bestDist) {
          bestDist = dist;
          best = parseInt(thumb.getAttribute('data-index'));
        }
      }
    });

    /* Only switch if a new card has clearly arrived at left edge */
    if (best !== -1 && best !== lastTriggeredIndex) {
      lastTriggeredIndex = best;
      switchTo(best);
    }
  }

  /* ----------------------------------------------------------------
     SCROLL TICK — runs every animation frame
     Moves strip left by SCROLL_SPEED px.
     Resets seamlessly when one full set has been scrolled past.
     ---------------------------------------------------------------- */
  function tick() {
    if (!paused && !stoppedByClick) {
      scrollPos += SCROLL_SPEED;

      /* Seamless infinite reset */
      if (oneSetWidth > 0 && scrollPos >= oneSetWidth) {
        scrollPos -= oneSetWidth;
      }

      strip.style.transform = 'translateX(-' + scrollPos + 'px)';

      /* Check if big card needs to switch */
      detectAndSwitch();
    }

    requestAnimationFrame(tick);
  }

  /* ----------------------------------------------------------------
     HOVER — pause on enter, resume + clear click-lock on leave
     ---------------------------------------------------------------- */
  wrapper.addEventListener('mouseenter', function () {
    paused = true;
  });

  wrapper.addEventListener('mouseleave', function () {
    paused         = false;
    stoppedByClick = false;
  });

  /* ----------------------------------------------------------------
     CLICK — event delegation covers all cloned thumbs
     ---------------------------------------------------------------- */
  strip.addEventListener('click', function (e) {
    var thumb = e.target.closest('.ach-thumb');
    if (!thumb) return;

    var idx = parseInt(thumb.getAttribute('data-index'));
    if (idx === activeIndex) return;

    switchTo(idx);
    lastTriggeredIndex = idx;
    stoppedByClick     = true;   /* stop scroll until mouse leaves strip */
  });

  /* ----------------------------------------------------------------
     START — wait for full page load so getBoundingClientRect()
     returns accurate values (fonts, CSS, images all settled)
     ---------------------------------------------------------------- */
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

})();


/* ============================================
   VOICES OF TRUST — single active card fix
   ============================================ */
(function () {
  'use strict';

  var bubbles = document.querySelectorAll('.vot-b');
  if (!bubbles.length) return;

  function clearAll() {
    bubbles.forEach(function (b) {
      b.classList.remove('is-active');
    });
  }

  bubbles.forEach(function (b) {
    b.addEventListener('mouseenter', function () {
      clearAll();
      b.classList.add('is-active');
    });

    b.addEventListener('mouseleave', function () {
      b.classList.remove('is-active');
    });

    // Optional: tap support for mobile/touch devices
    b.addEventListener('touchstart', function (e) {
      var alreadyActive = b.classList.contains('is-active');
      clearAll();
      if (!alreadyActive) {
        b.classList.add('is-active');
      }
    }, { passive: true });
  });

  // Close any open card if user taps outside on touch devices
  document.addEventListener('touchstart', function (e) {
    if (!e.target.closest('.vot-b')) {
      clearAll();
    }
  }, { passive: true });

})();


/* ============================================
   VOICES OF TRUST — header/map fade-in
   FIX: original code referenced undeclared
   `header`, `map`, `section` variables which
   threw a ReferenceError and silently killed
   every script registered AFTER this block
   (including the Who Am I observer below).
   Now properly scoped + guarded.
   ============================================ */
(function () {
  'use strict';

  var section = document.querySelector('.vot-section');
  if (!section) return;

  var header = section.querySelector('.vot-header');
  var map    = section.querySelector('.vot-map') || section.querySelector('.vot-map-wrap');

  function hide() {
    if (header) { header.style.opacity = '0'; header.style.transform = 'translateY(20px)'; }
    if (map) { map.style.opacity = '0'; }
  }

  function show() {
    if (header) { header.style.opacity = '1'; header.style.transform = 'translateY(0)'; }
    if (map) { setTimeout(function () { map.style.opacity = '1'; }, 180); }
  }

  if (header) { header.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; }
  if (map) { map.style.transition = 'opacity 0.6s ease'; }

  hide();

  if (window.IntersectionObserver) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) show(); else hide();
      });
    }, { threshold: 0.1 }).observe(section);
  } else {
    show();
  }
})();

// ===================== WHO AM I SECTION — SCRIPT =====================
// Wires up the plus button and the arrow/chevron button.
// Replace the console.log / scroll behavior with whatever action you want.

// (function () {
//   var plusBtn = document.querySelector('.whoami-btn-plus');
//   var chevronBtn = document.querySelector('.whoami-btn-chevron');

//   if (plusBtn) {
//     plusBtn.addEventListener('click', function () {
//       // Hook up your "expand / read more" behavior here
//       console.log('Plus button clicked');
//     });
//   }

//   if (chevronBtn) {
//     chevronBtn.addEventListener('click', function () {
//       // Hook up your "scroll up" behavior here
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
//   }
// })();



 const whoamiSection = document.querySelector('.whoami-section');

  const whoamiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        whoamiObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  if (whoamiSection) whoamiObserver.observe(whoamiSection);

// ===================== EDGE WIDGETS — SCRIPT =====================

(function () {
  var scrollBtn = document.getElementById('edgeScrollTop');
  var progressFill = document.getElementById('edgeProgressFill');

  var SHOW_AFTER_PX = 300;

  function getScrollPercent() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 0;
    return Math.min(1, Math.max(0, scrollTop / docHeight));
  }

  function updateProgress() {
    var percent = getScrollPercent();

    // Fill the vertical progress line based on scroll percentage
    if (progressFill) {
      progressFill.style.height = (percent * 100) + '%';
    }

    // Show/hide the scroll-to-top button
    if (scrollBtn) {
      if (window.scrollY > SHOW_AFTER_PX) {
        scrollBtn.classList.add('is-visible');
      } else {
        scrollBtn.classList.remove('is-visible');
      }
    }
  }

  // Initial check (in case page loads mid-scroll)
  updateProgress();

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  // Smooth scroll to top on click
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();


//its for triger animation in top to bottom 
/* ===== Re-triggering scroll animation for Professional Overview heading ===== */
const proHeading = document.querySelector('.pro-heading');

const proObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.3
});

if (proHeading) proObserver.observe(proHeading);




/* ===== Re-triggering scroll animation for Positive Perspectives title ===== */
const ppTitle = document.querySelector('.pp-title');

const ppTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.3
});

if (ppTitle) ppTitleObserver.observe(ppTitle);



/* ===== Re-triggering scroll animation for Achievements header ===== */
const achHeader = document.querySelector('.ach-header');

const achObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.3
});

if (achHeader) achObserver.observe(achHeader);



/* ===== Re-triggering scroll animation for Expertise heading ===== */
const expertiseHeading = document.querySelector('.expertise-heading');

const expertiseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.3
});

if (expertiseHeading) expertiseObserver.observe(expertiseHeading);