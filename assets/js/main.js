(function () {
  'use strict';

  // ===== 外部リンクの設定 =====
  // URLが決まったら '' の中に貼り付けてください。
  // 空のあいだは、クラウドファンディングは「近日スタート」表示、SNSアイコンは非表示になります。
  var LINKS = {
    crowdfunding: '',
    instagram: '',
    facebook: ''
  };

  document.querySelectorAll('[data-link]').forEach(function (el) {
    var url = LINKS[el.getAttribute('data-link')];
    if (url) {
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener';
      el.classList.add('is-ready');
    } else if (el.closest('.sns')) {
      el.parentNode.hidden = true;
    }
  });
  document.querySelectorAll('.sns').forEach(function (ul) {
    if (!ul.querySelector('li:not([hidden])')) ul.hidden = true;
  });

  var header = document.getElementById('header');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('globalNav');
  var pagetop = document.querySelector('.pagetop');

  // ヘッダー背景・ページトップボタン
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', y > 80);
    pagetop.classList.toggle('is-visible', y > window.innerHeight);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // スマホメニュー
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  }
  toggle.addEventListener('click', function () {
    setNav(!document.body.classList.contains('nav-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setNav(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
  });
})();
