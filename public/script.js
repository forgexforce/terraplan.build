/* ============================================================
   TerraPlan — Landing Page Interactions
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Nav: scrolled state + scroll progress ---------- */
  var nav = document.getElementById('nav');
  var progress = document.getElementById('scrollProgress');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 40);

    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? (y / h) * 100 : 0;
      progress.style.width = pct + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Hero topographic parallax ---------- */
  var topo = document.querySelector('.hero__topo');
  var hero = document.getElementById('hero');

  if (topo && hero && !reduceMotion) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY || 0;
        if (y < window.innerHeight) {
          topo.style.transform = 'translateY(' + (y * 0.16) + 'px)';
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Trust marquee: seamless loop ---------- */
  // Clone the cards until the track covers the viewport plus one full set,
  // then scroll by exactly one set. A single copy shifted by -50% runs out
  // of cards on screens wider than one set, leaving a blank stretch.
  var track = document.querySelector('.marquee__track');
  if (track) {
    var originals = Array.prototype.slice.call(track.children);
    var PX_PER_SECOND = 50;
    var lastWidth = 0;

    var buildMarquee = function () {
      track.querySelectorAll('[data-clone]').forEach(function (n) { n.remove(); });
      var period = 0;
      var copies = 0;
      do {
        originals.forEach(function (node) {
          var clone = node.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          clone.setAttribute('data-clone', '');
          track.appendChild(clone);
        });
        copies++;
        if (!period) period = track.children[originals.length].offsetLeft - originals[0].offsetLeft;
      } while (copies < 20 && track.offsetWidth < period + track.parentNode.clientWidth);

      track.style.setProperty('--marquee-shift', -period + 'px');
      track.style.animationDuration = (period / PX_PER_SECOND) + 's';
      lastWidth = window.innerWidth;
    };

    buildMarquee();

    var resizeTimer;
    window.addEventListener('resize', function () {
      if (window.innerWidth === lastWidth) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildMarquee, 200);
    });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#f-name');
      var reach = form.querySelector('#f-reach');

      if (!name.value.trim() || !reach.value.trim()) {
        note.textContent = 'Almost — we just need your name and a way to reach you.';
        note.style.color = '#733A11';
        (!name.value.trim() ? name : reach).focus();
        return;
      }

      var first = name.value.trim().split(' ')[0];
      form.querySelectorAll('.field, button[type="submit"]').forEach(function (el) {
        el.style.display = 'none';
      });
      note.style.color = '#11723A';
      note.innerHTML = 'Thank you, ' + escapeHTML(first) +
        '. Your land just got interesting &mdash; we&rsquo;ll be in touch within one business day.';
    });
  }

  function escapeHTML(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
})();
