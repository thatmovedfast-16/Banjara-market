@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

:root {
  --bg: #f7f1eb;
  --panel: #fffaf6;
  --surface: #ffffff;
  --text: #1d1917;
  --muted: #6d625d;
  --primary: #a86442;
  --primary-dark: #764830;
  --gold: #d6a76d;
  --line: #ebe0d7;
  --shadow: 0 18px 35px rgba(29, 25, 23, 0.08);
  --radius: 24px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: var(--bg);
  color: var(--text);
}

img {
  display: block;
  width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.top-bar {
  background: #fff;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.72rem;
}

.top-bar-inner {
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.mini-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 250, 246, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

.header-inner {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--gold));
  color: white;
  box-shadow: var(--shadow);
  font-size: 1rem;
}

.brand-name {
  font-size: 1rem;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

.nav-link {
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.2s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--text);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: white;
  display: grid;
  place-items: center;
  position: relative;
}

.icon-button svg {
  width: 18px;
  height: 18px;
  stroke: #342d2a;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cart-button {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -4px;
  display: grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  background: var(--primary);
  color: white;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
}

.primary-button,
.secondary-button,
.add-button,
.newsletter-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 14px;
  border: none;
  padding: 0 18px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button {
  background: var(--primary);
  color: white;
  box-shadow: 0 14px 28px rgba(116, 72, 48, 0.2);
}

.secondary-button {
  background: white;
  color: var(--text);
  border: 1px solid var(--line);
}

.primary-button:hover,
.secondary-button:hover,
.add-button:hover,
.newsletter-form button:hover {
  transform: translateY(-1px);
}

.hero-section {
  position: relative;
  background: linear-gradient(180deg, #f4eae1 0%, #f8f4ef 100%);
  overflow: hidden;
}

.hero-grid {
  min-height: 620px;
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  align-items: center;
  gap: 36px;
}

.hero-copy {
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(118, 72, 48, 0.08);
  color: var(--primary-dark);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.hero-copy h1,
.story-copy h2,
.product-detail-info h1,
.category-banner-copy h1,
.contact-card h1 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.05em;
  line-height: 0.95;
}

.hero-copy h1 {
  margin-top: 18px;
  font-size: clamp(2.6rem, 5vw, 5.2rem);
}

.hero-copy p,
.story-copy p,
.contact-card p,
.offer-banner p,
.category-banner-copy p,
.product-detail-info p {
  color: var(--muted);
  line-height: 1.8;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.hero-metrics {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.hero-metrics strong {
  display: block;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.78rem;
}

.hero-visual {
  position: relative;
  height: 560px;
}

.hero-slide {
  position: absolute;
  inset: 20px 0 0 40px;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.hero-slide.active {
  opacity: 1;
  transform: scale(1);
}

.hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: var(--shadow);
}

.slide-card {
  position: absolute;
  left: 28px;
  bottom: 24px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.slide-card small {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.65rem;
  font-weight: 700;
}

.slide-card strong {
  font-size: 1.2rem;
}

.promo-bar {
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid var(--line);
}

.promo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding: 20px 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.promo-row strong {
  color: var(--text);
}

.section {
  padding: 88px 0;
}

.muted-section {
  background: rgba(255, 255, 255, 0.24);
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
}

.section-head h2 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 2vw + 1rem, 3rem);
  letter-spacing: -0.04em;
}

.section-head p {
  margin: 0;
  color: var(--muted);
}

.category-grid,
.product-grid,
.feature-grid,
.review-grid {
  display: grid;
  gap: 22px;
}

.category-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.category-card {
  position: relative;
  min-height: 250px;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.category-card img {
  height: 100%;
  object-fit: cover;
}

.category-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.68));
}

.category-copy {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  color: white;
  z-index: 1;
}

.category-copy strong {
  display: block;
  font-size: 1.2rem;
}

.category-copy span {
  opacity: 0.82;
  font-size: 0.78rem;
}

.product-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.product-card {
  background: var(--surface);
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.02);
  box-shadow: var(--shadow);
}

.product-image-wrap {
  position: relative;
  overflow: hidden;
}

.product-image-wrap img {
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image-wrap img {
  transform: scale(1.04);
}

.wishlist-button {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.85);
  font-size: 1.2rem;
  color: var(--text);
}

.wishlist-button.active {
  color: #d93f58;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
}

.product-name-link h3 {
  margin: 12px 0 8px;
  font-size: 1.1rem;
}

.rating-line {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dba32d;
  font-size: 0.8rem;
}

.rating-line span {
  color: var(--muted);
}

.price-line {
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.price-line strong {
  font-size: 1.25rem;
}

.price-line span {
  margin-left: 8px;
  color: var(--muted);
  text-decoration: line-through;
  font-size: 0.82rem;
}

.add-button {
  background: #f3e5d9;
  color: var(--primary-dark);
  min-height: 40px;
  padding: 0 14px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card {
  background: var(--surface);
  border-radius: 28px;
  padding: 28px 22px;
  box-shadow: var(--shadow);
}

.feature-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f3e7db, #f0d9ba);
  font-size: 1.7rem;
}

.feature-card h3 {
  margin: 18px 0 10px;
  font-size: 1.15rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.story-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 30px;
  align-items: center;
}

.story-image-wrap {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.story-image-wrap img {
  height: 520px;
  object-fit: cover;
}

.story-copy {
  background: linear-gradient(135deg, #fffaf6, #f8efe8);
  border-radius: 30px;
  padding: 36px 28px;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.story-copy h2 {
  font-size: clamp(2.3rem, 2vw + 1rem, 3.3rem);
  margin-bottom: 16px;
}

.check-list {
  list-style: none;
  margin: 22px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.check-list li::before {
  content: '✓';
  width: 24px;
  height: 24px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: #f2e7da;
  color: var(--primary-dark);
}

.review-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.review-card {
  background: white;
  border-radius: 24px;
  padding: 24px 20px;
  box-shadow: var(--shadow);
}

.stars {
  color: #f0b347;
  letter-spacing: 0.12em;
}

.review-card p {
  color: var(--muted);
  line-height: 1.8;
  margin: 18px 0;
}

.review-person {
  display: flex;
  align-items: center;
  gap: 12px;
}

.review-person img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.review-person small {
  display: block;
  color: var(--muted);
}

.newsletter-box {
  background: linear-gradient(135deg, #1d1917, #56493e);
  border-radius: 32px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 34px 40px;
}

.newsletter-box h3 {
  margin: 0 0 8px;
  font-size: clamp(1.7rem, 2vw + 1rem, 2.7rem);
}

.newsletter-box p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(440px, 100%);
}

.newsletter-form input {
  width: 100%;
  min-height: 52px;
  border-radius: 16px;
  border: none;
  padding: 0 18px;
  font-size: 1rem;
}

.newsletter-form button {
  background: var(--gold);
  color: #2a1d15;
}

.site-footer {
  padding: 42px 0 50px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 0.7fr 1fr;
  gap: 30px;
  border-top: 1px solid var(--line);
  padding-top: 34px;
}

.footer-brand p {
  margin-top: 16px;
  line-height: 1.8;
  color: var(--muted);
}

.footer-grid h4 {
  margin: 0 0 18px;
  font-size: 1rem;
}

.footer-grid ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.footer-bottom {
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: var(--muted);
  font-size: 0.8rem;
}

.socials {
  display: flex;
  gap: 10px;
}

.socials span {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f4ebdf;
  color: var(--primary-dark);
  font-weight: 700;
}

.category-banner {
  position: relative;
  min-height: 360px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.category-banner img {
  height: 100%;
  object-fit: cover;
}

.category-banner-copy {
  position: absolute;
  left: 30px;
  bottom: 30px;
  max-width: 560px;
  color: white;
  z-index: 1;
}

.category-banner-copy span {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.9;
  font-size: 0.7rem;
}

.category-banner-copy h1 {
  font-size: clamp(2.5rem, 3vw, 4rem);
  margin: 12px 0 10px;
}

.category-banner-copy p {
  color: rgba(255,255,255,0.84);
}

.products-page-grid {
  margin-top: 30px;
}

.product-page {
  padding-top: 56px;
}

.product-detail {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 36px;
  align-items: center;
}

.product-detail-image {
  overflow: hidden;
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.product-detail-image img {
  height: 580px;
  object-fit: cover;
}

.product-badge {
  margin-bottom: 14px;
}

.product-detail-info h1,
.category-banner-copy h1,
.contact-card h1 {
  font-size: clamp(2.2rem, 3vw, 4rem);
  margin-bottom: 14px;
}

.price-row-large {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 16px 0;
}

.price-row-large strong {
  font-size: clamp(1.8rem, 2vw, 2.5rem);
}

.price-row-large span {
  color: var(--muted);
  text-decoration: line-through;
}

.product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.feature-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.feature-pills span {
  padding: 10px 14px;
  border-radius: 999px;
  background: #f3e7db;
  color: var(--primary-dark);
  font-size: 0.74rem;
  font-weight: 700;
}

.related-block {
  margin-top: 42px;
}

.offer-banner {
  background: linear-gradient(135deg, #f4e6d9, #f9f4ef);
  border-radius: 30px;
  padding: 30px 28px;
  margin-bottom: 30px;
  box-shadow: var(--shadow);
}

.offer-banner span {
  display: inline-block;
  background: rgba(255,255,255,0.7);
  color: var(--primary-dark);
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 10px;
}

.offer-banner h3 {
  margin: 0 0 10px;
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: 'Playfair Display', serif;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  align-items: start;
}

.contact-card,
.lead-form {
  background: var(--surface);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 30px 24px;
}

.contact-list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.lead-form {
  display: grid;
  gap: 16px;
}

.input-row label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.input-row input,
.input-row textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
  background: #fff;
}

.cart-layout {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 26px;
  align-items: start;
}

.cart-list,
.cart-summary {
  background: var(--surface);
  border-radius: 26px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

.cart-item:first-child {
  border-top: none;
  padding-top: 0;
}

.cart-item img {
  width: 120px;
  height: 110px;
  object-fit: cover;
  border-radius: 18px;
}

.cart-item-copy {
  flex: 1;
}

.cart-item-copy h3 {
  margin: 0 0 8px;
}

.cart-item-copy p {
  margin: 0 0 8px;
  color: var(--muted);
}

.small-button {
  min-height: 40px;
}

.cart-summary h3 {
  margin-top: 0;
  font-size: 1.35rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.total-row {
  color: var(--text);
  font-weight: 700;
}

.full-width {
  width: 100%;
  margin-top: 18px;
}

.empty-state {
  background: var(--surface);
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: var(--shadow);
  color: var(--muted);
  text-align: center;
}

.large-empty {
  max-width: 680px;
  margin: 0 auto;
}

.align-left {
  align-items: end;
}

@media (max-width: 1024px) {
  .main-nav {
    display: none;
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature-grid,
  .review-grid,
  .footer-grid,
  .cart-layout,
  .contact-layout,
  .story-grid,
  .product-detail {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    padding-top: 30px;
  }
}

@media (max-width: 760px) {
  .top-bar-inner,
  .section-head,
  .newsletter-box,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-inner {
    gap: 10px;
  }

  .brand-name {
    font-size: 0.8rem;
  }

  .header-actions {
    gap: 8px;
  }

  .category-grid,
  .product-grid,
  .feature-grid,
  .review-grid,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
  }

  .newsletter-form input,
  .newsletter-form button,
  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .hero-visual {
    height: 420px;
  }

  .hero-slide {
    inset: 10px 0 0 0;
  }

  .product-detail-image img,
  .story-image-wrap img {
    height: 380px;
  }

  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item img {
    width: 100%;
    height: 220px;
  }
}
