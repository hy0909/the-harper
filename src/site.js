/* THE HARPER — Site JavaScript */

// Translations
const translations = {
  ko: {
    'site-title': '더하퍼 — K-패션 에디터 큐레이션, 서울',
    'nav-about': 'About',
    'nav-spots': 'Spots',
    'nav-process': 'Process',
    'nav-area': 'Area',
    'nav-partners': 'Partners',
    'nav-contact': 'Contact',
    'header-cta': '협업 문의',
    'hero-headline': 'Seoul,\nCurated by Editors.',
    'hero-subcopy': 'K-패션 에디터가 큐레이션하는 성수·한남·압구정 쇼핑 체험',
    'hero-cta': '인스타그램 큐레이션 보기',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-headline': '옷 좋아하는 한국사람들이 진짜 찾는 K-⁠패션을 소개합니다.',
    'process-headline': '큐레이션 과정',
    'process-step-1-label': '1단계',
    'process-step-2-label': '2단계',
    'process-step-3-label': '3단계',
    'process-step-4-label': '4단계',
    'partners-headline': '파트너',
    'contact-headline': '협업 문의',
    'contact-instagram': '인스타그램',
    'contact-email': '이메일 문의',
    'about-value-1-title': '에디터 큐레이션',
    'about-value-1-desc': '에디터가 직접 엄선한 매장 추천',
    'about-value-2-title': '로컬 발견',
    'about-value-2-desc': '서울 현지 주민들이 옷을 사는 동네 위주',
    'about-value-3-title': '다국어 경험',
    'about-value-3-desc': '관광객 언어로 소통',
    'about-value-4-title': '브랜드 파트너십',
    'about-value-4-desc': '한국에만 있는 브랜드와의 협업',
    'spots-headline': '패션 에디터가 소개하는, 옷 좋아하는 한국사람들의 K-⁠패션 스팟',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': '무료 디지털 매거진',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': '반나절 단품 큐레이션',
    'tier-capsule-title': 'CAPSULE',
    'tier-capsule-desc': '종일 1:1 큐레이션',
    'tier-signature-title': 'SIGNATURE',
    'tier-signature-desc': '1박 헤리티지 투어',
    'tier-bespoke-title': 'BESPOKE',
    'tier-bespoke-desc': 'VIP 맞춤 투어',
    'tier-badge-pick': '11월 오픈',
    'tier-badge-coming': '추후 공개',
    'picks-title': '에디터 픽',
    'picks-instagram': '인스타그램에서 모두 보기 →',
    'picks-byline': 'by THE HARPER Editors',
    'picks-filter-all': '전체',
    'picks-filter-seongsu': '성수',
    'picks-filter-hannam': '한남',
    'picks-filter-apgujeong': '압구정',
    'picks-card-1-area': '성수',
    'picks-card-1-title': '성수 골목의 컨템포러리 편집샵',
    'picks-card-2-area': '성수',
    'picks-card-2-title': '붉은 벽돌 창고를 고친 브랜드 쇼룸',
    'picks-card-3-area': '한남',
    'picks-card-3-title': '한남 언덕의 조용한 부티크',
    'picks-card-4-area': '한남',
    'picks-card-4-title': '빈티지와 신상을 같이 두는 편집샵',
    'picks-card-5-area': '압구정',
    'picks-card-5-title': '로데오 뒷길의 디자이너 스튜디오',
    'process-step-1-title': '발굴',
    'process-step-2-title': '검증',
    'process-step-3-title': '에디토리얼 제작',
    'process-step-4-title': '큐레이션 노출',
    'area-headline': '성수·한남·압구정',
    'area-desc': '서울에서 로컬 부티크가 가장 밀집한 세 지역을 중심으로, 에디터가 직접 추천하는 리얼 K-패션 스팟을 소개합니다.',
    'area-card-seongsu-title': '성수',
    'area-card-seongsu-desc': '공장 골목이 브랜드 거리가 된 동네',
    'area-card-hannam-title': '한남',
    'area-card-hannam-desc': '언덕길에 부티크가 숨어 있는 동네',
    'area-card-apgujeong-title': '압구정',
    'area-card-apgujeong-desc': '디자이너 스튜디오와 플래그십의 동네',
    'area-map-aria-label': '성수·한남·압구정 지도',
    'map-seongsu': '성수',
    'map-hannam': '한남',
    'map-apgujeong': '압구정',
    'coming-soon': 'Coming Soon',
    'form-label-name': '성함',
    'form-label-email': '이메일',
    'form-label-type': '문의유형',
    'form-label-message': '문의 내용',
    'form-placeholder-name': '성함을 입력해 주세요',
    'form-placeholder-email': '이메일 주소를 입력해 주세요',
    'form-placeholder-message': '문의 내용을 입력해 주세요',
    'form-option-investment': '투자 문의',
    'form-option-partnership': '파트너십 문의',
    'form-option-institutional': '기관·관광공사 협업 문의',
    'form-option-other': '기타',
    'form-submit': '보내기',
    'form-sending': '보내는 중…',
    'form-success': '문의가 접수됐습니다. 영업일 기준 2일 안에 답장드리겠습니다.',
    'form-fallback': '자동 발송에 실패해 메일 앱을 엽니다. 열리지 않으면 contact@theharper.co.kr 로 직접 보내 주세요.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · 서울특별시 서초구 · 사업자등록번호 000-00-00000 · hello@theharper.co.kr',
    'footer-copyright': '© 2026 THE HARPER',
  },
  en: {
    'site-title': 'THE HARPER — K-fashion editor curation, Seoul',
    'nav-about': 'About',
    'nav-spots': 'Spots',
    'nav-process': 'Process',
    'nav-area': 'Area',
    'nav-partners': 'Partners',
    'nav-contact': 'Contact',
    'header-cta': 'Partner with us',
    'hero-headline': 'Seoul,\nCurated by Editors.',
    'hero-subcopy': 'A K-fashion shopping experience curated by editors across Seongsu, Hannam & Apgujeong',
    'hero-cta': 'See our curation on Instagram',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-headline': 'The real K-fashion Seoul\'s most stylish locals actually seek out.',
    'process-headline': 'Curation Process',
    'process-step-1-label': 'Step 1',
    'process-step-2-label': 'Step 2',
    'process-step-3-label': 'Step 3',
    'process-step-4-label': 'Step 4',
    'partners-headline': 'Partners',
    'contact-headline': 'Work With Us',
    'contact-instagram': 'Instagram',
    'contact-email': 'Email us',
    'about-value-1-title': 'Editor Curation',
    'about-value-1-desc': 'Shops hand-picked by our editors',
    'about-value-2-title': 'Local Discovery',
    'about-value-2-desc': 'Focused on the neighborhoods where Seoul locals shop',
    'about-value-3-title': 'Multilingual Experience',
    'about-value-3-desc': 'Communication in the visitor\'s own language',
    'about-value-4-title': 'Brand Partnerships',
    'about-value-4-desc': 'Collaborations with brands found only in Korea',
    'spots-headline': 'Seoul\'s best-dressed locals\' favorite spots, hand-picked by our editors',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': 'Free digital magazine',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': 'Half-day single curation',
    'tier-capsule-title': 'CAPSULE',
    'tier-capsule-desc': 'Full-day 1:1 curation',
    'tier-signature-title': 'SIGNATURE',
    'tier-signature-desc': 'Overnight heritage tour',
    'tier-bespoke-title': 'BESPOKE',
    'tier-bespoke-desc': 'VIP bespoke tour',
    'tier-badge-pick': 'Opens in Nov',
    'tier-badge-coming': 'Coming soon',
    'picks-title': 'Editor\'s Picks',
    'picks-instagram': 'See all on Instagram →',
    'picks-byline': 'by THE HARPER Editors',
    'picks-filter-all': 'All',
    'picks-filter-seongsu': 'Seongsu',
    'picks-filter-hannam': 'Hannam',
    'picks-filter-apgujeong': 'Apgujeong',
    'picks-card-1-area': 'Seongsu',
    'picks-card-1-title': 'A contemporary select shop in the Seongsu backstreets',
    'picks-card-2-area': 'Seongsu',
    'picks-card-2-title': 'A brand showroom in a converted red-brick warehouse',
    'picks-card-3-area': 'Hannam',
    'picks-card-3-title': 'A quiet boutique on the Hannam hill',
    'picks-card-4-area': 'Hannam',
    'picks-card-4-title': 'Where vintage sits next to new arrivals',
    'picks-card-5-area': 'Apgujeong',
    'picks-card-5-title': 'A designer studio behind Rodeo street',
    'process-step-1-title': 'Scouting',
    'process-step-2-title': 'Verification',
    'process-step-3-title': 'Editorial',
    'process-step-4-title': 'Publishing',
    'area-headline': 'Seongsu·Hannam·Apgujeong',
    'area-desc': 'Centered on the three districts with Seoul\'s densest concentration of local boutiques, we introduce real K-fashion spots recommended by our editors.',
    'area-card-seongsu-title': 'Seongsu',
    'area-card-seongsu-desc': 'Factory alleys turned brand streets',
    'area-card-hannam-title': 'Hannam',
    'area-card-hannam-desc': 'Boutiques hidden along the hillside lanes',
    'area-card-apgujeong-title': 'Apgujeong',
    'area-card-apgujeong-desc': 'Designer studios and flagship stores',
    'area-map-aria-label': 'Map of Seongsu, Hannam and Apgujeong',
    'map-seongsu': 'Seongsu',
    'map-hannam': 'Hannam',
    'map-apgujeong': 'Apgujeong',
    'coming-soon': 'Coming Soon',
    'form-label-name': 'Name',
    'form-label-email': 'Email',
    'form-label-type': 'Inquiry type',
    'form-label-message': 'Inquiry details',
    'form-placeholder-name': 'Enter your name',
    'form-placeholder-email': 'Enter your email address',
    'form-placeholder-message': 'Enter your inquiry',
    'form-option-investment': 'Investment',
    'form-option-partnership': 'Partnership',
    'form-option-institutional': 'Institutional & KTO collaboration',
    'form-option-other': 'Other',
    'form-submit': 'Send',
    'form-sending': 'Sending…',
    'form-success': 'Thanks, we received your inquiry. We reply within 2 business days.',
    'form-fallback': 'Automatic sending failed, so we are opening your mail app. If it does not open, email contact@theharper.co.kr directly.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · Seocho-gu, Seoul · Business Reg. No. 000-00-00000 · hello@theharper.co.kr',
    'footer-copyright': '© 2026 THE HARPER',
  }
};

// Utility: Get current language
function getCurrentLanguage() {
  try {
    const stored = localStorage.getItem('theharper-lang');
    if (stored && (stored === 'ko' || stored === 'en')) {
      return stored;
    }
  } catch (e) {
    // localStorage not available
  }
  return 'ko';
}

// Utility: Set language
function setLanguage(lang) {
  try {
    localStorage.setItem('theharper-lang', lang);
  } catch (e) {
    // localStorage not available
  }
  document.documentElement.lang = lang;
  updatePageTranslations(lang);
  updateLanguageToggleButtons(lang);
  updateMapPopupLanguage();
  updateMapAriaLabel(lang);
}

// Update all translations on the page
function updatePageTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // For select options, update the text content
      if (el.tagName === 'OPTION') {
        el.textContent = translations[lang][key];
      } else if (el.tagName === 'TITLE') {
        el.textContent = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Render comma-separated chip text as pill elements
  document.querySelectorAll('.pick-card__chips, .district-card__chips').forEach(box => {
    const text = box.textContent;
    if (!text.trim()) return;
    box.textContent = '';
    text.split(',').map(s => s.trim()).filter(Boolean).forEach(label => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = label;
      box.appendChild(chip);
    });
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Update language toggle button states
function updateLanguageToggleButtons(lang) {
  document.querySelectorAll('.lang-toggle__button').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

// Initialize language toggle
function initLanguageToggle() {
  const currentLang = getCurrentLanguage();
  document.documentElement.lang = currentLang;
  updatePageTranslations(currentLang);
  updateLanguageToggleButtons(currentLang);
  updateMapAriaLabel(currentLang);

  document.querySelectorAll('.lang-toggle__button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Pick-card layout roles: first visible = featured, next four = side, others = rest
function assignPickRoles() {
  const visible = Array.from(document.querySelectorAll('.pick-card')).filter(c => !c.hasAttribute('hidden'));
  document.querySelectorAll('.pick-card').forEach(c => c.classList.remove('pick-card--featured', 'pick-card--side', 'pick-card--rest'));
  // 5장이 다 보일 때만 대표 카드 + 옆 카드 구성. 탭으로 걸러 적어지면 같은 크기로 나열한다.
  const useFeatured = visible.length >= 5;
  visible.forEach((card, i) => {
    if (useFeatured && i === 0) card.classList.add('pick-card--featured');
    else if (useFeatured && i <= 4) card.classList.add('pick-card--side');
    else card.classList.add('pick-card--rest');
  });
}

// Header scroll detection
// 히어로 위에 있을 때는 투명, 히어로를 벗어나면 배경색 + 블러
/* 히어로 높이를 첫 화면 기준 px로 고정한다.
   모바일 브라우저의 주소창이 접히며 화면 높이가 바뀌어도 사진 비율이 흔들리지 않게.
   가로 폭이 바뀔 때(회전 등)만 다시 잰다. */
function initHeroHeight() {
  const hero = document.getElementById('hero');
  const header = document.querySelector('.header');
  if (!hero) return;
  let lastWidth = window.innerWidth;
  const apply = () => {
    const headerH = header ? header.offsetHeight : 72;
    hero.style.minHeight = `${window.innerHeight - headerH}px`;
  };
  apply();
  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      apply();
    }
  });
  window.addEventListener('orientationchange', () => {
    setTimeout(() => { lastWidth = window.innerWidth; apply(); }, 150);
  });
}

/* Spots 아코디언: 티어를 누르면 그 설명이 펼쳐지고 오른쪽 이미지가 바뀐다 */
function initSpotsAccordion() {
  const items = Array.from(document.querySelectorAll('.spots__item'));
  const slots = Array.from(document.querySelectorAll('.spots__image-slot'));
  if (!items.length) return;
  const activate = (item) => {
    const tier = item.dataset.tier;
    items.forEach((it) => {
      const on = it === item;
      it.classList.toggle('spots__item--active', on);
      it.querySelector('.spots__item-header').setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    slots.forEach((slot) => {
      slot.classList.toggle('spots__image-slot--active', slot.dataset.tier === tier);
    });
  };
  items.forEach((item) => {
    item.querySelector('.spots__item-header').addEventListener('click', () => activate(item));
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  const hero = document.getElementById('hero');
  let isScrolled = false;
  let animationFrameId = null;

  const updateHeader = () => {
    const threshold = hero ? Math.max(hero.offsetTop + hero.offsetHeight - header.offsetHeight, 8) : 8;
    const shouldBeScrolled = window.scrollY >= threshold;
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      header.classList.toggle('scrolled', isScrolled);
    }
    animationFrameId = null;
  };

  const handleScroll = () => {
    if (animationFrameId === null) {
      animationFrameId = requestAnimationFrame(updateHeader);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  updateHeader();
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  const body = document.body;

  function openMenu() {
    mobileMenu.removeAttribute('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.querySelector('.header').classList.add('menu-open');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.querySelector('.header').classList.remove('menu-open');
    body.style.overflow = '';
  }

  menuToggle.addEventListener('click', () => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // Close menu when clicking the overlay
  const overlay = document.querySelector('.mobile-menu__overlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
}

// Close mobile menu when nav links are clicked
function initNavLinkClosing() {
  const headerNavLinks = document.querySelectorAll('.header__nav-link, .header__cta');
  const menuToggle = document.querySelector('.header__menu-toggle');

  headerNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.click();
      }
    });
  });
}

// Contact form handling
// FormSubmit(무료, 키 불필요)로 contact@theharper.co.kr 에 자동 발송한다.
// 첫 발송 뒤 받는 메일함으로 오는 활성화 메일에서 한 번 승인해야 그 뒤부터 도착한다.
const CONTACT_EMAIL = 'contact@theharper.co.kr';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

function initContactForm() {
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('form-confirmation');
  const submitBtn = form ? form.querySelector('.form__submit') : null;

  if (!form) return;

  const showStatus = (key, isError) => {
    const lang = getCurrentLanguage();
    confirmation.textContent = translations[lang][key] || key;
    // 어두운 바탕 위라 성공은 흰색, 실패는 앤티크 로즈
    confirmation.style.color = isError ? 'var(--color-point)' : 'var(--color-ground)';
    confirmation.style.display = 'block';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const type = document.getElementById('contact-type').value;
    const message = document.getElementById('contact-message').value.trim();
    const honey = form.querySelector('input[name="_honey"]');

    if (!name || !email || !message) return;
    if (honey && honey.value) return; // 스팸 봇이 채운 경우 조용히 무시

    const lang = getCurrentLanguage();
    const typeLabel = translations[lang]['form-option-' + type] || type;
    // 메일 제목: [홈페이지 문의] 문의유형 - 이름
    const subject = `[홈페이지 문의] ${typeLabel} - ${name}`;
    const body = `성함: ${name}\n이메일: ${email}\n문의유형: ${typeLabel}\n\n문의 내용:\n${message}`;

    if (submitBtn) submitBtn.disabled = true;
    showStatus('form-sending', false);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
          성함: name,
          이메일: email,
          문의유형: typeLabel,
          '문의 내용': message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error('formsubmit failed');

      showStatus('form-success', false);
      form.reset();
    } catch (err) {
      // 자동 발송이 안 되면 메일 앱으로 대신 보낸다.
      showStatus('form-fallback', true);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Fade-up on scroll using IntersectionObserver
function initScrollAnimation() {
  // Check if prefers-reduced-motion is set
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, just make everything visible immediately
    const elements = document.querySelectorAll(
      '.about__card, .spots__layout, .process__step, .area__text, .area__map, .district-card, .pick-card, .partner-tile, .contact__form-wrapper'
    );
    elements.forEach(el => {
      el.classList.add('fade-in');
    });
  }

  // Assign layout roles to visible pick cards
  assignPickRoles();

  if (prefersReducedMotion) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all fade-in elements
  const elements = document.querySelectorAll(
    '.about__card, .spots__layout, .process__step, .area__text, .area__map, .district-card, .pick-card, .partner-tile, .contact__form-wrapper'
  );
  elements.forEach(el => {
    observer.observe(el);
  });
}

// Editor's Picks filtering
function initPicksFilter() {
  const filterButtons = document.querySelectorAll('.picks__filter-tab');
  const pickCards = document.querySelectorAll('.pick-card');

  if (filterButtons.length === 0) return;

  function filterCards(area) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track which card should be featured
    let firstVisibleCard = null;

    pickCards.forEach(card => {
      if (area === 'all' || card.dataset.area === area) {
        card.removeAttribute('hidden');
        // Track first visible card for featured styling
        if (!firstVisibleCard) {
          firstVisibleCard = card;
        }
        // Trigger fade-in animation if not reduced motion
        if (!prefersReducedMotion) {
          card.classList.remove('fade-in');
          // Force reflow to restart animation
          void card.offsetWidth;
          card.classList.add('fade-in');
        } else {
          card.classList.add('fade-in');
        }
      } else {
        card.setAttribute('hidden', '');
      }
    });

    // Assign layout roles to visible cards: first = featured, next four = side, rest = rest
    assignPickRoles();
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active state
      filterButtons.forEach(btn => {
        if (btn.dataset.filter === filter) {
          btn.classList.add('picks__filter-tab--active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('picks__filter-tab--active');
          btn.setAttribute('aria-selected', 'false');
        }
      });

      filterCards(filter);
    });
  });

  // Keyboard support: arrow keys
  filterButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
      let targetIndex = index;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % filterButtons.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + filterButtons.length) % filterButtons.length;
      }

      if (targetIndex !== index) {
        filterButtons[targetIndex].click();
        filterButtons[targetIndex].focus();
      }
    });
  });
}

// Map initialization
let mapInstance = null;
let mapMarkers = [];

function updateMapAriaLabel(lang) {
  const mapContainer = document.getElementById('area-map');
  if (!mapContainer) return;
  const label = translations[lang]['area-map-aria-label'] || 'Map';
  mapContainer.setAttribute('aria-label', label);
}

function initMap() {
  // Wait for Leaflet to load, then defer initialization
  if (typeof L === 'undefined') {
    // Leaflet not loaded, set up fallback
    const mapContainer = document.getElementById('area-map');
    if (mapContainer) {
      const lang = getCurrentLanguage();
      const fallbackText = lang === 'ko' ? '지도 열기' : 'Open map';
      mapContainer.innerHTML = `<a href="https://www.openstreetmap.org/#map=14/37.5400/127.0300" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; text-decoration: underline; color: var(--color-ink);">${fallbackText}</a>`;
    }
    return;
  }

  const mapContainer = document.getElementById('area-map');
  if (!mapContainer) return;

  // Map configuration
  const center = [37.536, 127.020];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Create map
  mapInstance = L.map('area-map', {
    center: center,
    zoom: 13,
    scrollWheelZoom: false,
    zoomAnimation: !prefersReducedMotion,
    fadeAnimation: !prefersReducedMotion,
    attributionControl: true
  });

  // 타일: CARTO 밝은 지도(무료, 키 불필요)를 먼저 쓰고, 오류가 나면 OSM으로 바꾼다.
  // OSM 타일 서버는 사이트·브라우저에 따라 403을 돌려줄 때가 있어 기본으로 쓰지 않는다.
  const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  });
  const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });
  let tileErrors = 0;
  cartoLayer.on('tileerror', () => {
    tileErrors += 1;
    if (tileErrors >= 3 && mapInstance.hasLayer(cartoLayer)) {
      mapInstance.removeLayer(cartoLayer);
      osmLayer.addTo(mapInstance);
    }
  });
  cartoLayer.addTo(mapInstance);

  // Move zoom control to bottom right
  mapInstance.zoomControl.setPosition('bottomright');

  // Marker locations
  const markerData = [
    { lat: 37.5445, lng: 127.0560, key: 'map-seongsu' },
    { lat: 37.5340, lng: 127.0000, key: 'map-hannam' },
    { lat: 37.5270, lng: 127.0280, key: 'map-apgujeong' }
  ];

  // Create markers with custom styling
  markerData.forEach(marker => {
    const icon = L.divIcon({
      html: `<div class="map-marker"></div>`,
      iconSize: [14, 14],
      className: 'map-marker-wrapper'
    });

    const popupText = translations[getCurrentLanguage()][marker.key] || marker.key;
    const leafletMarker = L.marker([marker.lat, marker.lng], { icon })
      .bindPopup(popupText, {
        className: 'map-popup',
        closeButton: true
      })
      .addTo(mapInstance);

    mapMarkers.push({
      marker: leafletMarker,
      key: marker.key
    });
  });
}

// Update map popup contents when language changes
function updateMapPopupLanguage() {
  if (!mapMarkers || mapMarkers.length === 0) return;

  mapMarkers.forEach(item => {
    const newText = translations[getCurrentLanguage()][item.key] || item.key;
    item.marker.setPopupContent(newText);
  });
}

// Initialize all when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initHeroHeight();
  initSpotsAccordion();
  initHeaderScroll();
  initMobileMenu();
  initNavLinkClosing();
  initContactForm();
  initScrollAnimation();
  initPicksFilter();
  initMap();
});

// Re-initialize map after Leaflet loads if not already done
if (typeof L === 'undefined') {
  window.addEventListener('load', () => {
    if (typeof L !== 'undefined' && !mapInstance) {
      initMap();
    }
  });
}
