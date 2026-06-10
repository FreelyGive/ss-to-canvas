import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';

const pricingHtml = `<style>
/* ── RESET ───────────────────────────── */
.iolla-pricing *, .iolla-pricing *::before, .iolla-pricing *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── TOKENS ──────────────────────────── */
.iolla-pricing {
  --io-blue:         #006699;
  --io-blue-dark:    #005580;
  --io-blue-deeper:  #004466;
  --io-off-white:    #f5f2eb;
  --io-cream:        #ede9df;
  --io-accent:       #d95f2b;
  --io-accent-light: #f0e0d6;
  --io-muted:        #5a554e;
  --io-line:         rgba(0,38,51,0.10);
  --io-green:        #1a7a4a;
  --io-green-light:  #e8f5ee;
  --io-font:         "brandon-grotesque", "Brandon Grotesque", Arial, sans-serif;
  font-family: var(--io-font);
  color: var(--io-blue);
  width: 100%;
  overflow-x: hidden;
}

.iolla-pricing a { text-decoration: none; }
.iolla-pricing p, .iolla-pricing li { font-size: 17px; line-height: 1.75; }

.iolla-pricing h1 {
  font-family: var(--io-font) !important;
  font-size: clamp(38px, 4.5vw, 68px) !important;
  font-weight: 700 !important;
  line-height: 1.04 !important;
  letter-spacing: -0.02em !important;
  margin: 0 0 20px !important;
}
.iolla-pricing h2 {
  font-family: var(--io-font) !important;
  font-size: clamp(28px, 3vw, 48px) !important;
  font-weight: 700 !important;
  line-height: 1.06 !important;
  letter-spacing: -0.02em !important;
  margin: 0 0 18px !important;
  color: var(--io-blue) !important;
}
.iolla-pricing h3 {
  font-family: var(--io-font) !important;
  font-size: clamp(17px, 1.8vw, 22px) !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  margin: 0 0 10px !important;
  color: var(--io-blue) !important;
}
.iolla-pricing em { font-style: italic; color: var(--io-accent); }

/* ── SHARED COMPONENTS ───────────────── */
.iolla-p-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--io-accent);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.iolla-p-label::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--io-accent);
  flex-shrink: 0;
  display: block;
}
.iolla-p-label-light { color: rgba(255,255,255,0.55); }
.iolla-p-label-light::before { background: rgba(255,255,255,0.35); }

.iolla-p-body {
  font-size: 17px;
  line-height: 1.78;
  color: var(--io-muted);
  margin-bottom: 16px;
}
.iolla-p-body strong { color: var(--io-blue); font-weight: 600; }

/* Buttons */
.iolla-p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  font-family: var(--io-font);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none !important;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  border: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
}
.iolla-p-btn-primary { background: var(--io-blue); color: #fff !important; }
.iolla-p-btn-primary:hover { background: var(--io-accent); }
.iolla-p-btn-secondary { background: transparent; color: var(--io-blue) !important; border-color: var(--io-blue); }
.iolla-p-btn-secondary:hover { background: var(--io-blue); color: #fff !important; }
.iolla-p-btn-white { background: #fff; color: var(--io-blue) !important; }
.iolla-p-btn-white:hover { background: var(--io-accent); color: #fff !important; }
.iolla-p-btn-outline-white { background: transparent; color: #fff !important; border-color: rgba(255,255,255,0.4); }
.iolla-p-btn-outline-white:hover { border-color: #fff; }

.iolla-p-btn-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 28px;
}

/* Support line */
.iolla-p-help {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  color: var(--io-muted);
  margin-top: 16px;
  flex-wrap: wrap;
}
.iolla-p-help::before {
  content: '?';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px; height: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--io-muted);
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}
.iolla-p-help a { color: var(--io-blue); font-weight: 600; text-decoration: underline !important; text-underline-offset: 2px; }
.iolla-p-help a:hover { color: var(--io-accent); }

/* ══ 1. HERO ══════════════════════════ */
.iolla-p-hero {
  background: var(--io-blue-deeper);
  padding: 96px 60px 0;
  overflow: hidden;
}
.iolla-p-hero-top {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: end;
  margin-bottom: 52px;
}
.iolla-p-hero h1 { color: #fff !important; }
.iolla-p-hero-intro {
  font-size: 16px;
  color: rgba(255,255,255,0.62);
  line-height: 1.6;
  max-width: 260px;
  text-align: right;
  padding-bottom: 6px;
}
.iolla-p-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  align-items: end;
}
.iolla-p-card { padding: 48px 44px 52px; }
.iolla-p-card-iolla { background: var(--io-off-white); border-radius: 12px 12px 0 0; }
.iolla-p-card-other {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom: none;
  border-radius: 12px 12px 0 0;
}
.iolla-p-price-tag {
  font-size: clamp(52px, 6vw, 84px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--io-blue);
  display: block;
  margin-bottom: 6px;
}
.iolla-p-card-other .iolla-p-price-tag { color: rgba(255,255,255,0.38); font-size: clamp(36px, 4vw, 58px); }
.iolla-p-price-sub {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--io-muted);
  display: block;
  margin-bottom: 28px;
}
.iolla-p-card-other .iolla-p-price-sub { color: rgba(255,255,255,0.4); }
.iolla-p-includes {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  border-top: 1px solid var(--io-line);
}
.iolla-p-includes li {
  font-size: 15px !important;
  line-height: 1.5 !important;
  padding: 10px 0;
  border-bottom: 1px solid var(--io-line);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--io-muted);
}
.iolla-p-card-other .iolla-p-includes { border-color: rgba(255,255,255,0.08); }
.iolla-p-card-other .iolla-p-includes li { border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); }
.iolla-p-includes li::before {
  content: '✓';
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--io-green-light);
  color: var(--io-green);
  font-size: 10px;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.iolla-p-card-other .iolla-p-includes li::before {
  content: '+';
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.4);
}
.iolla-p-verdict {
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  padding: 9px 16px;
  border-radius: 6px;
}
.iolla-p-card-iolla .iolla-p-verdict { background: var(--io-green-light); color: var(--io-green); }
.iolla-p-card-other .iolla-p-verdict { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); }

/* ══ 2. MIDDLEMAN ════════════════════ */
.iolla-p-mid {
  background: var(--io-off-white);
  padding: 104px 60px;
}
.iolla-p-mid-head {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 80px;
  align-items: start;
  margin-bottom: 56px;
}
.iolla-p-mid h2 { max-width: 560px; }
.iolla-p-mid .iolla-p-body { max-width: 680px; }
.iolla-p-video-break {
  margin-bottom: 56px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #000;
  padding-top: 42.18%;
}
.iolla-p-video-break video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.iolla-p-ways {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}
.iolla-p-way { padding: 48px 44px; border-radius: 8px; }
.iolla-p-way-old { background: var(--io-cream); }
.iolla-p-way-iolla { background: var(--io-blue); }
.iolla-p-way-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 28px;
  display: block;
}
.iolla-p-way-old .iolla-p-way-title { color: var(--io-muted); }
.iolla-p-way-iolla .iolla-p-way-title { color: rgba(255,255,255,0.55); }
.iolla-p-steps { list-style: none; padding: 0; margin: 0; border-top: 1px solid rgba(0,38,51,0.08); }
.iolla-p-way-iolla .iolla-p-steps { border-color: rgba(255,255,255,0.1); }
.iolla-p-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,38,51,0.08);
}
.iolla-p-way-iolla .iolla-p-step { border-color: rgba(255,255,255,0.08); }
.iolla-p-step:last-child { border-bottom: none; }
.iolla-p-step-num {
  width: 26px; height: 26px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.iolla-p-way-old .iolla-p-step-num { background: rgba(0,102,153,0.1); color: var(--io-muted); }
.iolla-p-way-iolla .iolla-p-step-num { background: rgba(255,255,255,0.15); color: #fff; }
.iolla-p-step-title {
  font-size: 15px !important;
  font-weight: 700 !important;
  display: block;
  margin-bottom: 3px;
  line-height: 1.2 !important;
}
.iolla-p-way-old .iolla-p-step-title { color: var(--io-blue); }
.iolla-p-way-iolla .iolla-p-step-title { color: #fff; }
.iolla-p-step p { font-size: 14px !important; line-height: 1.55 !important; margin: 0; }
.iolla-p-way-old .iolla-p-step p { color: var(--io-muted); }
.iolla-p-way-iolla .iolla-p-step p { color: rgba(255,255,255,0.65); }
.iolla-p-way-foot { margin-top: 24px; font-size: 14px; font-style: italic; font-weight: 600; }
.iolla-p-way-old .iolla-p-way-foot { color: var(--io-muted); }
.iolla-p-way-iolla .iolla-p-way-foot { color: rgba(255,255,255,0.65); }

/* ══ 3. ADD-ONS ══════════════════════ */
.iolla-p-addons { background: var(--io-cream); padding: 96px 60px; }
.iolla-p-addons-head { margin-bottom: 48px; }
.iolla-p-addon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
}
.iolla-p-addon {
  background: var(--io-off-white);
  padding: 40px 36px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.iolla-p-addon:first-child { background: var(--io-blue); }
.iolla-p-addon-chip {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 99px;
  display: inline-block;
  margin-bottom: 20px;
  align-self: flex-start;
}
.iolla-p-addon:first-child .iolla-p-addon-chip { background: rgba(255,255,255,0.14); color: #fff; }
.iolla-p-addon:not(:first-child) .iolla-p-addon-chip { background: var(--io-accent-light); color: var(--io-accent); }
.iolla-p-addon h3 { margin-bottom: 10px !important; }
.iolla-p-addon:first-child h3 { color: #fff !important; }
.iolla-p-addon-body { font-size: 15px !important; line-height: 1.65 !important; color: var(--io-muted); flex: 1; margin-bottom: 20px !important; }
.iolla-p-addon:first-child .iolla-p-addon-body { color: rgba(255,255,255,0.7); }
.iolla-p-addon-price { font-size: 13px; font-weight: 600; padding: 8px 14px; border-radius: 6px; display: inline-block; margin-bottom: 20px; align-self: flex-start; }
.iolla-p-addon:first-child .iolla-p-addon-price { background: rgba(255,255,255,0.12); color: #fff; }
.iolla-p-addon:not(:first-child) .iolla-p-addon-price { background: rgba(0,102,153,0.08); color: var(--io-blue); }

/* ══ 4. SUNGLASSES ═══════════════════ */
.iolla-p-sun {
  background: var(--io-blue-deeper);
  padding: 96px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.iolla-p-sun-media {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;
  background: #000;
}
.iolla-p-sun-media iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; display: block; }
.iolla-p-sun h2 { color: #fff !important; }
.iolla-p-sun .iolla-p-body { color: rgba(255,255,255,0.68); }
.iolla-p-sun-facts { list-style: none; padding: 0; margin: 24px 0 0; border-top: 1px solid rgba(255,255,255,0.1); }
.iolla-p-sun-facts li {
  font-size: 15px !important;
  line-height: 1.5 !important;
  padding: 11px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.65);
  display: flex;
  align-items: center;
  gap: 10px;
}
.iolla-p-sun-facts li::before { content: '→'; color: var(--io-accent); font-weight: 700; flex-shrink: 0; }

/* ══ 5. PROOF STRIP ══════════════════ */
.iolla-p-proof {
  background: var(--io-blue);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.iolla-p-proof-item { padding: 32px 28px; border-right: 1px solid rgba(255,255,255,0.1); color: #fff; }
.iolla-p-proof-item:last-child { border-right: none; }
.iolla-p-proof-item strong { display: block; font-size: 17px; font-weight: 700; margin-bottom: 6px; color: #fff; line-height: 1.2; }
.iolla-p-proof-item p { font-size: 14px !important; line-height: 1.6 !important; color: rgba(255,255,255,0.65); margin: 0; }

/* ══ 6. SUPPORT BAND ════════════════ */
.iolla-p-support {
  background: var(--io-cream);
  padding: 72px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
}
.iolla-p-support-card { background: var(--io-off-white); padding: 40px 36px; border-radius: 8px; }
.iolla-p-support-card:first-child { background: var(--io-accent-light); }
.iolla-p-support-icon { width: 40px; height: 40px; margin-bottom: 20px; display: block; }
.iolla-p-support-icon svg {
  width: 40px; height: 40px;
  stroke: var(--io-accent);
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.iolla-p-support-card h3 { font-size: 18px !important; margin-bottom: 8px !important; }
.iolla-p-support-card p { font-size: 15px !important; line-height: 1.65 !important; color: var(--io-muted); margin: 0; }
.iolla-p-support-card a { color: var(--io-blue); font-weight: 600; text-decoration: underline !important; text-underline-offset: 2px; }
.iolla-p-support-card a:hover { color: var(--io-accent); }
.iolla-p-support-hours {
  font-size: 13px !important;
  font-weight: 600 !important;
  letter-spacing: 0.01em !important;
  color: var(--io-blue) !important;
  margin-top: 12px !important;
  text-transform: none !important;
  opacity: 0.72;
}

/* ══ 7. FINAL CTA ════════════════════ */
.iolla-p-cta {
  background: var(--io-blue-deeper);
  padding: 104px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.iolla-p-cta::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 600px;
  border-radius: 50%;
  background: rgba(255,255,255,0.025);
  pointer-events: none;
}
.iolla-p-cta-inner { position: relative; z-index: 2; }
.iolla-p-cta h2 { color: #fff !important; }
.iolla-p-cta-sub { font-size: 17px; color: rgba(255,255,255,0.62); line-height: 1.7; max-width: 440px; margin: 0 auto 36px; }
.iolla-p-cta .iolla-p-btn-row { justify-content: center; }

/* ── RESPONSIVE ──────────────────────── */
@media (max-width: 1100px) {
  .iolla-p-addon-grid { grid-template-columns: 1fr 1fr; }
  .iolla-p-addon:first-child { grid-column: span 2; }
  .iolla-p-proof { grid-template-columns: 1fr 1fr; }
  .iolla-p-proof-item:nth-child(2) { border-right: none; }
  .iolla-p-proof-item:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.1); }
  .iolla-p-proof-item:nth-child(4) { border-right: none; border-top: 1px solid rgba(255,255,255,0.1); }
}
@media (max-width: 1024px) {
  .iolla-p-hero { padding: 72px 40px 0; }
  .iolla-p-hero-top { grid-template-columns: 1fr; gap: 12px; }
  .iolla-p-hero-intro { text-align: left; max-width: 100%; }
  .iolla-p-compare { grid-template-columns: 1fr; gap: 8px; }
  .iolla-p-card { border-radius: 12px !important; }
  .iolla-p-card-other { border: 1px solid rgba(255,255,255,0.1); }
  .iolla-p-mid { padding: 80px 40px; }
  .iolla-p-mid-head { grid-template-columns: 1fr; gap: 16px; }
  .iolla-p-ways { grid-template-columns: 1fr; gap: 8px; }
  .iolla-p-addons { padding: 80px 40px; }
  .iolla-p-sun { grid-template-columns: 1fr; padding: 80px 40px; gap: 40px; }
  .iolla-p-support { padding: 64px 40px; grid-template-columns: 1fr 1fr; }
  .iolla-p-support-card:last-child { grid-column: span 2; }
  .iolla-p-cta { padding: 80px 40px; }
}
@media (max-width: 768px) {
  .iolla-p-hero { padding: 56px 24px 0; }
  .iolla-p-mid { padding: 64px 24px; }
  .iolla-p-addons { padding: 64px 24px; }
  .iolla-p-addon-grid { grid-template-columns: 1fr; }
  .iolla-p-addon:first-child { grid-column: span 1; }
  .iolla-p-sun { padding: 64px 24px; }
  .iolla-p-proof { grid-template-columns: 1fr; }
  .iolla-p-proof-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .iolla-p-proof-item:nth-child(n) { border-top: none; }
  .iolla-p-support { padding: 56px 24px; grid-template-columns: 1fr; }
  .iolla-p-support-card:last-child { grid-column: span 1; }
  .iolla-p-cta { padding: 72px 24px; }
  .iolla-p-btn-row { flex-direction: column; align-items: stretch; }
  .iolla-p-btn { width: 100%; justify-content: center; }
}
@media (max-width: 420px) {
  .iolla-p-hero, .iolla-p-mid, .iolla-p-addons, .iolla-p-sun,
  .iolla-p-support, .iolla-p-cta { padding-left: 20px; padding-right: 20px; }
}
</style>

<div class="iolla-pricing">

  <!-- ══ 1. HERO — PRICE COMPARISON ══ -->
  <div class="iolla-p-hero">
    <div class="iolla-p-hero-top">
      <div>
        <p class="iolla-p-label iolla-p-label-light">Our pricing</p>
        <h1>One fair price<br>vs <em>a whole world of complexity.</em></h1>
      </div>
      <p class="iolla-p-hero-intro">We price the pair, not the parts.</p>
    </div>
    <div class="iolla-p-compare">
      <div class="iolla-p-card iolla-p-card-iolla">
        <span class="iolla-p-price-tag">£85</span>
        <span class="iolla-p-price-sub">Complete prescription glasses - The IOLLA Way</span>
        <ul class="iolla-p-includes">
          <li>Frames of your choice</li>
          <li>Prescription lenses included</li>
          <li>Lens thinning, if you need it</li>
          <li>Anti-reflective coating included</li>
          <li>Scratch-resistant coating included</li>
          <li>Case and cleaning cloth included</li>
        </ul>
        <span class="iolla-p-verdict">Genuinely. That's it.</span>
      </div>
      <div class="iolla-p-card iolla-p-card-other">
        <span class="iolla-p-price-tag">£300+</span>
        <span class="iolla-p-price-sub">What a "starting price" can become</span>
        <ul class="iolla-p-includes">
          <li>Prescription lenses (sold separately)</li>
          <li>Anti-reflective coating (add-on)</li>
          <li>Thinner lenses (premium upgrade)</li>
          <li>Scratch-resistant coating (extra)</li>
          <li>Stronger prescriptions cost more</li>
          <li>More small print at the checkout</li>
        </ul>
        <span class="iolla-p-verdict">The price grows without your control</span>
      </div>
    </div>
  </div>

  <!-- ══ 2. MIDDLEMAN ══ -->
  <div class="iolla-p-mid">
    <div class="iolla-p-mid-head">
      <div>
        <p class="iolla-p-label">How we keep pricing fair</p>
      </div>
      <div>
        <h2>We cut out the <em>middleman</em>,<br>not the quality.</h2>
        <p class="iolla-p-body">Traditional eyewear pricing often gets inflated by layers between design, manufacturing, distribution and retail. We keep things tighter, cleaner and closer to home so more of the value stays in the product.</p>
      </div>
    </div>
    <div class="iolla-p-video-break">
      <video autoplay muted loop playsinline>
        <source src="https://player.vimeo.com/progressive_redirect/playback/809818220/rendition/720p/file.mp4?loc=external&signature=5357f6799b755736d6e7c8edb255ab55e2c45882ac667df251d40a90c7b2cd50" type="video/mp4">
      </video>
    </div>
    <div class="iolla-p-ways">
      <div class="iolla-p-way iolla-p-way-old">
        <span class="iolla-p-way-title">The old way</span>
        <ul class="iolla-p-steps">
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">1</span>
            <div>
              <span class="iolla-p-step-title">Big brand mark-up</span>
              <p>Licence fees, celebrity endorsements, advertising - you pay for the name, not the glasses.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">2</span>
            <div>
              <span class="iolla-p-step-title">Distributor layer</span>
              <p>Another party in the chain, adding margin before the product even reaches a shelf.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">3</span>
            <div>
              <span class="iolla-p-step-title">Retail add-ons</span>
              <p>Lenses, coatings and thinning are broken out and priced individually at the till.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">4</span>
            <div>
              <span class="iolla-p-step-title">You pay more</span>
              <p>For margins that exist largely to fund layers that never benefit you directly.</p>
            </div>
          </li>
        </ul>
        <p class="iolla-p-way-foot">More layers often means more margin - not better glasses.</p>
      </div>
      <div class="iolla-p-way iolla-p-way-iolla">
        <span class="iolla-p-way-title">The IOLLA way</span>
        <ul class="iolla-p-steps">
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">1</span>
            <div>
              <span class="iolla-p-step-title">Designed in-house</span>
              <p>Every frame is designed by our own team. No licensing fees, no external studio costs.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">2</span>
            <div>
              <span class="iolla-p-step-title">Clean supply chain</span>
              <p>We work directly with our manufacturing partners. No middlemen, no hidden steps.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">3</span>
            <div>
              <span class="iolla-p-step-title">Our showrooms - direct model</span>
              <p>We sell directly, which means we control the experience and strip out the margin.</p>
            </div>
          </li>
          <li class="iolla-p-step">
            <span class="iolla-p-step-num">4</span>
            <div>
              <span class="iolla-p-step-title">One fair price</span>
              <p>£85, everything included. No extras, no surprises.</p>
            </div>
          </li>
        </ul>
        <p class="iolla-p-way-foot">That's the honest way to price good eyewear.</p>
      </div>
    </div>
  </div>

  <!-- ══ 3. OPTIONAL ADD-ONS ══ -->
  <div class="iolla-p-addons">
    <div class="iolla-p-addons-head">
      <p class="iolla-p-label">A few things worth knowing about</p>
      <h2>Beyond the <em>essentials.</em></h2>
      <p class="iolla-p-body">Our £85 covers everything most people need. A few options sit outside that, each clearly priced, with nothing hidden. Always optional.<br><br>Things like polarisation for your sunglasses to cut glare, blue light filtering on your glasses for long days on screens, or varifocals for when you'd rather not switch between pairs. They're there if you need them. To make life easier, not more complicated. And always your choice.</p>
    </div>
    <div class="iolla-p-addon-grid">
      <div class="iolla-p-addon">
        <span class="iolla-p-addon-chip">Our core pair</span>
        <h3>Complete prescription glasses</h3>
        <p class="iolla-p-addon-body">Frames, prescription lenses, thinning if needed, and anti-reflective and scratch-resistant coatings. Everything in one honest price - nothing more to add.</p>
        <span class="iolla-p-addon-price">£85 = everything included</span>
        <div class="iolla-p-btn-row" style="margin-top:0;">
          <a class="iolla-p-btn iolla-p-btn-white" href="https://iolla.com/collections/glasses">Shop glasses</a>
        </div>
      </div>
      <div class="iolla-p-addon">
        <span class="iolla-p-addon-chip">Optional add-on</span>
        <h3>Blue light filtering</h3>
        <p class="iolla-p-addon-body">For people spending long days in front of screens. Can be added to prescription and non-prescription glasses alike. A practical upgrade, clearly priced.</p>
        <span class="iolla-p-addon-price">Add for +£30</span>
        <div class="iolla-p-btn-row" style="margin-top:0;">
          <a class="iolla-p-btn iolla-p-btn-secondary" href="https://iolla.com/bluelightfilter">Find out more</a>
        </div>
      </div>
      <div class="iolla-p-addon">
        <span class="iolla-p-addon-chip">Multifocal lenses</span>
        <h3>Varifocal lenses</h3>
        <p class="iolla-p-addon-body">Available in the showroom so we can get measurements right and ensure the fit is comfortable. Premium and Advanced Premium options available - same honest approach.</p>
        <span class="iolla-p-addon-price">Just £185 = frame, lenses, coating &amp; thinning</span>
        <div class="iolla-p-btn-row" style="margin-top:0;">
          <a class="iolla-p-btn iolla-p-btn-secondary" href="https://iolla.com/varifocals">Learn more</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ 4. PRESCRIPTION SUNGLASSES — VIDEO ══ -->
  <div class="iolla-p-sun">
    <div class="iolla-p-sun-media">
      <iframe
        src="https://player.vimeo.com/video/1177642536?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;muted=1&amp;autoplay=1&amp;loop=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        title="Express Yourself with Custom Lenses">
      </iframe>
    </div>
    <div class="iolla-p-sun-copy">
      <p class="iolla-p-label iolla-p-label-light">Prescription sunglasses</p>
      <h2>Prescription sunglasses,<br><em>without the usual faff.</em></h2>
      <p class="iolla-p-body">Choose from tint, gradient and polarised options - all starting from our core pricing model, with the same honest approach to what's included.</p>
      <ul class="iolla-p-sun-facts">
        <li>Prescription tint sunglasses for £105</li>
        <li>Gradient and polarised options available</li>
        <li>Same lenses and coatings included as standard</li>
        <li>Try them on in any of our showrooms</li>
      </ul>
      <div class="iolla-p-btn-row">
        <a class="iolla-p-btn iolla-p-btn-white" href="https://iolla.com/collections/sunglasses">Shop sunglasses</a>
        <a class="iolla-p-btn iolla-p-btn-outline-white" href="https://iolla.com/showrooms">Find a showroom</a>
      </div>
    </div>
  </div>

  <!-- ══ 5. PROOF STRIP ══ -->
  <div class="iolla-p-proof">
    <div class="iolla-p-proof-item">
      <strong>Clear starting price</strong>
      <p>We don't hide the essentials in the small print. £85 means £85.</p>
    </div>
    <div class="iolla-p-proof-item">
      <strong>Fairer thinning policy</strong>
      <p>Stronger prescriptions shouldn't mean being penalised on price.</p>
    </div>
    <div class="iolla-p-proof-item">
      <strong>Showroom support</strong>
      <p>Helpful advice, no pressure, no optical jargon overload.</p>
    </div>
    <div class="iolla-p-proof-item">
      <strong>Designed in-house</strong>
      <p>Better control over quality and cost from the very start.</p>
    </div>
  </div>

  <!-- ══ 6. SUPPORT BAND ══ -->
  <div class="iolla-p-support">

    <!-- Card 1 — Showrooms -->
    <div class="iolla-p-support-card">
      <span class="iolla-p-support-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </span>
      <h3>Visit a showroom</h3>
      <p>Our stylists are friendly, experienced and always happy to help, whether you're a first-timer or coming back for a second pair. No pressure, no jargon, just a genuinely good experience.</p>
      <p style="margin-top:10px !important;"><a href="https://iolla.com/showrooms">Find your nearest showroom →</a></p>
    </div>

    <!-- Card 2 — Email -->
    <div class="iolla-p-support-card">
      <span class="iolla-p-support-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </span>
      <h3>Email us</h3>
      <p>Send a message to <a href="mailto:help@iolla.com">help@iolla.com</a> and we'll get back to you as soon as we can - usually same day.</p>
      <p class="iolla-p-support-hours">Mon to Sat, 10am–5pm</p>
    </div>

    <!-- Card 3 — Phone -->
    <div class="iolla-p-support-card">
      <span class="iolla-p-support-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
        </svg>
      </span>
      <h3>Call us</h3>
      <p>Prefer to talk it through? Give us a call on <a href="tel:03301246525">0330 124 6525</a> - Monday to Saturday, 10am to 5pm.</p>
      <p class="iolla-p-support-hours">Mon to Sat, 10am–5pm</p>
    </div>

  </div>

  <!-- ══ 7. FINAL CTA ══ -->
  <div class="iolla-p-cta">
    <div class="iolla-p-cta-inner">
      <h2>A better way<br>to buy <em>eyewear.</em></h2>
      <p class="iolla-p-cta-sub">Good design, proper lenses, fair pricing.<br>£85 - everything you need included.</p>
      <div class="iolla-p-btn-row">
        <a class="iolla-p-btn iolla-p-btn-white" href="https://iolla.com/collections/glasses">Shop glasses</a>
        <a class="iolla-p-btn iolla-p-btn-outline-white" href="https://iolla.com/showrooms">Visit a showroom</a>
      </div>
    </div>
  </div>

</div>

<script src="https://player.vimeo.com/api/player.js"></script>`;

const meta = {
  title: 'Pages/Pricing',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      <div dangerouslySetInnerHTML={{ __html: pricingHtml }} />
    </PageLayout>
  ),
};
