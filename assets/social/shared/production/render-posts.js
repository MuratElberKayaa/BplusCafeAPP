const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..', '..');
const IMAGES_DIR = path.resolve(__dirname, '..', 'images');
const POSTS_OUT_DIR = path.resolve(ROOT_DIR, 'assets', 'social', 'posts');
const MOCKUPS_OUT_DIR = path.resolve(ROOT_DIR, 'assets', 'social', 'mockups');
const PROD_DIR = __dirname;

function getImageBase64(filename) {
  const filePath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Image not found: ${filePath}`);
  }
  const ext = path.extname(filename).toLowerCase().replace('.', '');
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : ext === 'svg' ? 'image/svg+xml' : 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

function getFileBase64(absPath) {
  const ext = path.extname(absPath).toLowerCase().replace('.', '');
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'application/octet-stream';
  const data = fs.readFileSync(absPath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

const sharedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 1080px;
    height: 1350px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .canvas {
    width: 1080px;
    height: 1350px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Safe container respecting 1:1 center-crop (135px to 1215px) */
  .safe-container {
    position: absolute;
    top: 72px;
    left: 72px;
    right: 72px;
    bottom: 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 9999px;
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge-pill.dark {
    background: rgba(255, 253, 248, 0.08);
    border: 1px solid rgba(216, 185, 140, 0.35);
    color: #FFFDF8;
  }

  .badge-pill.light {
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }

  .badge-demo-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 9999px;
    background: rgba(104, 115, 75, 0.12);
    border: 1px solid rgba(104, 115, 75, 0.35);
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #34422D;
    text-transform: uppercase;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
  }
`;

function buildPost01Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const pourOver = getImageBase64('v60-pourover.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-01 {
    background: linear-gradient(155deg, #2B3825 0%, #34422D 50%, #242E1F 100%);
    color: #FFFDF8;
  }
  .ambient-glow {
    position: absolute;
    width: 650px;
    height: 650px;
    right: -100px;
    bottom: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(104, 115, 75, 0.25) 0%, rgba(52, 66, 45, 0) 70%);
    pointer-events: none;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .brand-logo-img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid rgba(216, 185, 140, 0.5);
    background: #FFFDF8;
    padding: 3px;
  }
  .brand-meta {
    display: flex;
    flex-direction: column;
  }
  .brand-name {
    font-size: 20px;
    font-weight: 800;
    color: #FFFDF8;
  }
  .brand-sub {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #AEB997;
    text-transform: uppercase;
  }
  .hero-section {
    margin-top: 70px;
    max-width: 860px;
  }
  .headline-display {
    font-size: 76px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #FFFDF8;
    margin-bottom: 28px;
  }
  .headline-display .plus-accent {
    color: #D8B98C;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.45;
    color: #AEB997;
    max-width: 800px;
  }
  .visual-strip {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 50px;
    background: rgba(255, 253, 248, 0.04);
    border: 1px solid rgba(216, 185, 140, 0.25);
    border-radius: 24px;
    padding: 24px 28px;
    backdrop-filter: blur(8px);
  }
  .visual-img-box {
    width: 240px;
    height: 180px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(216, 185, 140, 0.3);
    flex-shrink: 0;
  }
  .visual-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .visual-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .visual-tag {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #D8B98C;
  }
  .visual-title {
    font-size: 22px;
    font-weight: 700;
    color: #FFFDF8;
  }
  .visual-desc {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    line-height: 1.45;
    color: #AEB997;
  }
  .badge-demo-craft {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    background: rgba(216, 185, 140, 0.15);
    border: 1px solid rgba(216, 185, 140, 0.35);
    border-radius: 6px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #D8B98C;
    align-self: flex-start;
    margin-top: 4px;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(216, 185, 140, 0.2);
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #AEB997;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #D8B98C;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-01">
  <div class="ambient-glow"></div>
  <div class="safe-container">
    <div class="header-row">
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <div class="brand-meta">
          <span class="brand-name">B+ Wellness Café</span>
          <span class="brand-sub">by Mineiro Coffee</span>
        </div>
      </div>
      <div class="badge-pill dark">
        <span class="dot" style="background:#D8B98C"></span>
        <span>KONSEPT LANSMANI</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">İş gününe<br>iyi bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Şehrin hızlı temposunda nitelikli kahve ve bitkisel alternatiflerle dengeli bir mola.
      </p>

      <div class="visual-strip">
        <div class="visual-img-box">
          <img src="${pourOver}" alt="V60 Demleme">
        </div>
        <div class="visual-content">
          <span class="visual-tag">ZANAATKAR KAVRUM & BİTKİSEL DENGE</span>
          <h2 class="visual-title">Üçüncü Dalga Kahve Kültürü</h2>
          <p class="visual-desc">Özenle kavrulan çekirdekler ve bitkisel süt alternatifleriyle günün ritmini yakalayın.</p>
          <span class="badge-demo-craft">DEMO PRODUCT • KONSEPT DETAYI</span>
        </div>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">by Mineiro Coffee • Nitelikli Kahve & Bitkisel Alternatifler</span>
      <span class="footer-badge">Kreatif Vaka Çalışması</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildPost02Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const coldBrew = getImageBase64('hero-coldbrew.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-02 {
    background-color: #F4F0E6;
    color: #2B231E;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .time-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid #D8B98C;
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-name-small {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
  }
  .hero-section {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 16px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.45;
    color: #6B675F;
    max-width: 820px;
  }
  /* Social-native photo presentation: Asymmetric photographic hero */
  .photo-showcase-container {
    margin-top: 38px;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 28px;
    align-items: center;
    height: 480px;
  }
  .photo-frame-hero {
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(43, 35, 30, 0.1);
    position: relative;
    border: 1px solid rgba(227, 222, 195, 0.8);
  }
  .photo-frame-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .photo-editorial-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 12px 16px;
  }
  .side-kicker {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #68734B;
  }
  .side-product-title {
    font-size: 32px;
    font-weight: 800;
    color: #34422D;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  .side-product-desc {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #6B675F;
  }
  .badge-product-detail {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #34422D;
    align-self: flex-start;
    margin-top: 8px;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #E3DEC3;
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #6B675F;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #34422D;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-02">
  <div class="safe-container">
    <div class="header-row">
      <div class="header-left">
        <div class="time-badge">
          <span class="dot" style="background:#68734B"></span>
          <span>08:00 | GÜNE BİR +</span>
        </div>
        <div class="badge-demo-tag">
          <span>DEMO MENU VISUALS</span>
        </div>
      </div>
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-small">B+ Wellness Café</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">Güne<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Sabahın ilk adımlarında berrak bir fincanla güne taze başlangıç.
      </p>

      <div class="photo-showcase-container">
        <div class="photo-frame-hero">
          <img src="${coldBrew}" alt="Lion's Mane Cold Brew">
        </div>
        <div class="photo-editorial-side">
          <span class="side-kicker">SABAH RİTÜELİ</span>
          <h2 class="side-product-title">Lion's Mane Cold Brew</h2>
          <p class="side-product-desc">Yavaş demlenen berrak soğuk kahve ve dengeli bitkisel süt dokunuşuyla duru uyanış anı.</p>
          <span class="badge-product-detail">DEMO PRODUCT • ÖRNEK MENÜ</span>
        </div>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">Lion's Mane Cold Brew • Nitelikli Kahve Ritüeli</span>
      <span class="footer-badge">DEMO PRODUCT COPY</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildPost03Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const spirulinaBowl = getImageBase64('spirulina-bowl.webp');
  const citrusJuice = getImageBase64('juice-citrus.webp');
  const avocadoSmoothie = getImageBase64('smoothie-avocado.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-03 {
    background-color: #F4F0E6;
    color: #2B231E;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .time-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid #D8B98C;
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-name-small {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
  }
  .hero-section {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 16px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.45;
    color: #6B675F;
    max-width: 820px;
  }
  /* Food photography carrying maximum visual weight: Asymmetrical food editorial */
  .food-editorial-layout {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 26px;
    margin-top: 36px;
    height: 490px;
  }
  .hero-food-feature {
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(43, 35, 30, 0.1);
    position: relative;
    border: 1px solid rgba(227, 222, 195, 0.9);
    background: #FFFDF8;
  }
  .hero-food-img {
    width: 100%;
    height: 380px;
    overflow: hidden;
  }
  .hero-food-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .hero-food-caption {
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero-food-title {
    font-size: 20px;
    font-weight: 800;
    color: #34422D;
  }
  .hero-food-sub {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    color: #6B675F;
  }
  .food-side-stack {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
  }
  .side-food-card {
    flex: 1;
    border-radius: 24px;
    overflow: hidden;
    background: #FFFDF8;
    border: 1px solid rgba(227, 222, 195, 0.9);
    box-shadow: 0 8px 24px rgba(43, 35, 30, 0.06);
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 16px;
  }
  .side-food-thumb {
    width: 130px;
    height: 130px;
    border-radius: 18px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .side-food-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .side-food-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .side-title {
    font-size: 18px;
    font-weight: 800;
    color: #34422D;
  }
  .side-desc {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    line-height: 1.4;
    color: #6B675F;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #E3DEC3;
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #6B675F;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #34422D;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-03">
  <div class="safe-container">
    <div class="header-row">
      <div class="header-left">
        <div class="time-badge">
          <span class="dot" style="background:#68734B"></span>
          <span>12:30 | ÖĞLE ARASI</span>
        </div>
        <div class="badge-demo-tag">
          <span>DEMO MENU VISUALS</span>
        </div>
      </div>
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-small">B+ Wellness Café</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">Öğle arasına<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Masa başı yoğunluğuna taze kaseler ve soğuk sıkımlarla hafif bir ara.
      </p>

      <div class="food-editorial-layout">
        <!-- Main Food Feature: Spirulina Bowl -->
        <div class="hero-food-feature">
          <div class="hero-food-img">
            <img src="${spirulinaBowl}" alt="Spirulina Kase">
          </div>
          <div class="hero-food-caption">
            <div>
              <div class="hero-food-title">Spirulina & Yeşil Meyve Kasesi</div>
              <div class="hero-food-sub">Taze meyve dilimleri, chia tohumu ve bitkisel taban.</div>
            </div>
            <span class="badge-demo-tag" style="padding:4px 10px; font-size:11px;">DEMO PRODUCT</span>
          </div>
        </div>

        <!-- Side Stack: Juice & Smoothie -->
        <div class="food-side-stack">
          <div class="side-food-card">
            <div class="side-food-thumb">
              <img src="${citrusJuice}" alt="Narenciye Soğuk Sıkım">
            </div>
            <div class="side-food-info">
              <div class="side-title">Narenciye Soğuk Sıkım</div>
              <div class="side-desc">Portakal, limon, taze zencefil.</div>
              <span class="badge-demo-tag" style="align-self:flex-start; padding:3px 8px; font-size:10px; margin-top:4px;">DEMO PRODUCT</span>
            </div>
          </div>

          <div class="side-food-card">
            <div class="side-food-thumb">
              <img src="${avocadoSmoothie}" alt="Botanik Smoothie">
            </div>
            <div class="side-food-info">
              <div class="side-title">Avokado Botanik Smoothie</div>
              <div class="side-desc">Kadifemsi doku, katkısız içerik.</div>
              <span class="badge-demo-tag" style="align-self:flex-start; padding:3px 8px; font-size:10px; margin-top:4px;">DEMO PRODUCT</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">Örnek Menü Seçkisi • Spirulina Kase & Taze Soğuk Sıkım</span>
      <span class="footer-badge">DEMO PRODUCT COPY</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildPost04Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const matchaLatte = getImageBase64('matcha-latte.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-04 {
    background: linear-gradient(150deg, #E2E8D8 0%, #D5DEC7 50%, #C4D0B4 100%);
    color: #2B231E;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .time-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #FFFDF8;
    border: 1.5px solid #AEB997;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid #AEB997;
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-name-small {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
  }
  .hero-section {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 16px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.45;
    color: #4A5642;
    max-width: 820px;
  }
  .matcha-showcase-container {
    margin-top: 38px;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 28px;
    align-items: center;
    height: 480px;
  }
  .matcha-frame-hero {
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(52, 66, 45, 0.12);
    position: relative;
    border: 1px solid rgba(174, 185, 151, 0.8);
  }
  .matcha-frame-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .matcha-editorial-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 12px 16px;
  }
  .side-kicker {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #68734B;
  }
  .side-product-title {
    font-size: 32px;
    font-weight: 800;
    color: #34422D;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  .side-product-desc {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #4F5D46;
  }
  .badge-product-detail {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: #FFFDF8;
    border: 1.5px solid #AEB997;
    border-radius: 9999px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #34422D;
    align-self: flex-start;
    margin-top: 8px;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(174, 185, 151, 0.5);
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #4A5642;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #34422D;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-04">
  <div class="safe-container">
    <div class="header-row">
      <div class="header-left">
        <div class="time-badge">
          <span class="dot" style="background:#68734B"></span>
          <span>15:00 | B+ MOLASI</span>
        </div>
        <div class="badge-demo-tag">
          <span>DEMO MENU VISUALS</span>
        </div>
      </div>
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-small">B+ Wellness Café</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">Molaya<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        İkindi saatlerinde kadifemsi matcha ve bitkisel çaylarla sakin bir soluk.
      </p>

      <div class="matcha-showcase-container">
        <div class="matcha-frame-hero">
          <img src="${matchaLatte}" alt="Matcha Latte">
        </div>
        <div class="matcha-editorial-side">
          <span class="side-kicker">İKİNDİ RİTÜELİ</span>
          <h2 class="side-product-title">Geleneksel Matcha Latte</h2>
          <p class="side-product-desc">Geleneksel yöntemle çırpılan saf matcha tozu ve ipeksi bitkisel alternatiflerle sakinleştirici öğleden sonra molası.</p>
          <span class="badge-product-detail">DEMO PRODUCT • ÖRNEK MENÜ</span>
        </div>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">Matcha Latte • Bitkisel Alternatifler & Sakin Soluk</span>
      <span class="footer-badge">DEMO PRODUCT COPY</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildPost05Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const pourOver = getImageBase64('v60-pourover.webp');
  const matcha = getImageBase64('matcha-latte.webp');
  const spirulina = getImageBase64('spirulina-bowl.webp');
  const rawBar = getImageBase64('raw-bar.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-05 {
    background-color: #F4F0E6;
    color: #2B231E;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .badge-menu-top {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid #D8B98C;
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-name-small {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
  }
  .hero-section {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 16px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.42;
    color: #6B675F;
    max-width: 820px;
  }
  /* Fluid 2x2 editorial category grid */
  .categories-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 36px;
  }
  .cat-card {
    background: #FFFDF8;
    border: 1px solid rgba(227, 222, 195, 0.9);
    border-radius: 22px;
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 6px 20px rgba(43, 35, 30, 0.05);
  }
  .cat-img {
    width: 96px;
    height: 96px;
    border-radius: 16px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .cat-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .cat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .cat-title {
    font-size: 18px;
    font-weight: 800;
    color: #34422D;
  }
  .cat-desc {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    color: #6B675F;
    line-height: 1.35;
  }
  .cta-bar {
    margin-top: 24px;
    background: #34422D;
    color: #FFFDF8;
    border-radius: 18px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 24px rgba(52, 66, 45, 0.18);
  }
  .cta-text {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
  }
  .cta-badge {
    padding: 6px 14px;
    background: rgba(255, 253, 248, 0.15);
    border: 1px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #FFFDF8;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #E3DEC3;
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #6B675F;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #34422D;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-05">
  <div class="safe-container">
    <div class="header-row">
      <div class="header-left">
        <div class="badge-menu-top">
          <span class="dot" style="background:#68734B"></span>
          <span>MENÜ DÜNYASI</span>
        </div>
        <div class="badge-demo-tag">
          <span>DEMO MENU VISUALS</span>
        </div>
      </div>
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-small">B+ Wellness Café</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">Menüne<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Nitelikli kahveden taze kaselere, bitkisel alternatiflerle zenginleşen örnek menü dünyası.
      </p>

      <div class="categories-grid">
        <div class="cat-card">
          <div class="cat-img">
            <img src="${pourOver}" alt="Nitelikli Kahve">
          </div>
          <div class="cat-content">
            <h2 class="cat-title">Nitelikli Kahve</h2>
            <p class="cat-desc">Özenle kavrulan tek köken çekirdekler & soğuk demlemeler.</p>
          </div>
        </div>

        <div class="cat-card">
          <div class="cat-img">
            <img src="${matcha}" alt="Matcha & Botanikler">
          </div>
          <div class="cat-content">
            <h2 class="cat-title">Matcha & Botanikler</h2>
            <p class="cat-desc">Geleneksel hazırlık & bitkisel alternatifler.</p>
          </div>
        </div>

        <div class="cat-card">
          <div class="cat-img">
            <img src="${spirulina}" alt="Taze Kaseler">
          </div>
          <div class="cat-content">
            <h2 class="cat-title">Taze Kaseler & Sıkım</h2>
            <p class="cat-desc">Süper besinler, taze meyveler & zencefilli ferahlık.</p>
          </div>
        </div>

        <div class="cat-card">
          <div class="cat-img">
            <img src="${rawBar}" alt="Çiğ Atıştırmalıklar">
          </div>
          <div class="cat-content">
            <h2 class="cat-title">Çiğ Barlar & Atıştırmalık</h2>
            <p class="cat-desc">Katkısız kuru yemişler ve tohumlu doğal tatlar.</p>
          </div>
        </div>
      </div>

      <div class="cta-bar">
        <span class="cta-text">Kahve • Matcha • Taze Kaseler • Soğuk Sıkımlar</span>
        <span class="cta-badge">Demo Menüyü Keşfet →</span>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">Örnek Menü Çerçevesi — Fiyat ve ürünler demo niteliğindedir</span>
      <span class="footer-badge">DEMO PRODUCT COPY</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildPost06Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const coldBrew = getImageBase64('hero-coldbrew.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStyles}
  .canvas-06 {
    background: linear-gradient(155deg, #242E1F 0%, #34422D 50%, #1D2519 100%);
    color: #FFFDF8;
  }
  .ambient-glow {
    position: absolute;
    width: 700px;
    height: 700px;
    left: -100px;
    top: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(104, 115, 75, 0.22) 0%, rgba(52, 66, 45, 0) 70%);
    pointer-events: none;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .brand-logo-img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid rgba(216, 185, 140, 0.5);
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-meta {
    display: flex;
    flex-direction: column;
  }
  .brand-name {
    font-size: 18px;
    font-weight: 800;
    color: #FFFDF8;
  }
  .brand-sub {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #AEB997;
    text-transform: uppercase;
  }
  .badge-proto-top {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 18px;
    background: rgba(216, 185, 140, 0.15);
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    color: #FFFDF8;
    letter-spacing: 0.05em;
  }
  .hero-section {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 70px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #FFFDF8;
    margin-bottom: 16px;
  }
  .headline-display .plus-accent {
    color: #D8B98C;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.45;
    color: #AEB997;
    max-width: 820px;
  }
  /* AI Barista Interactive UI Island Card - Neutral beverage preference phrasing */
  .ai-island-card {
    margin-top: 36px;
    background: #FFFDF8;
    border-radius: 28px;
    padding: 32px 36px;
    border: 2px solid rgba(216, 185, 140, 0.7);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
    color: #2B231E;
  }
  .ai-card-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .ai-barista-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 9999px;
    background: rgba(216, 185, 140, 0.25);
    border: 1px solid #D8B98C;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    color: #34422D;
    letter-spacing: 0.05em;
  }
  .ai-proto-notice {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #6B675F;
  }
  .ai-card-question {
    font-size: 26px;
    font-weight: 800;
    color: #34422D;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .intent-chips-row {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
  }
  .intent-chip {
    padding: 10px 18px;
    border-radius: 12px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    border: 1.5px solid #E3DEC3;
    background: #F4F0E6;
    color: #34422D;
  }
  .intent-chip.active {
    background: #34422D;
    color: #FFFDF8;
    border-color: #D8B98C;
    box-shadow: 0 4px 12px rgba(52, 66, 45, 0.2);
  }
  .matched-product-box {
    background: #F4F0E6;
    border: 1px solid #E3DEC3;
    border-radius: 20px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 22px;
  }
  .matched-product-img {
    width: 120px;
    height: 120px;
    border-radius: 16px;
    overflow: hidden;
    border: 1.5px solid #D8B98C;
    flex-shrink: 0;
  }
  .matched-product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .matched-product-info {
    flex: 1;
  }
  .score-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: #FFFDF8;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    color: #34422D;
    margin-bottom: 8px;
  }
  .matched-title {
    font-size: 22px;
    font-weight: 800;
    color: #34422D;
    margin-bottom: 4px;
  }
  .matched-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    line-height: 1.4;
    color: #6B675F;
  }
  .cta-btn-demo {
    padding: 12px 22px;
    border-radius: 9999px;
    background: #34422D;
    color: #FFFDF8;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(52, 66, 45, 0.2);
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(216, 185, 140, 0.2);
    margin-bottom: 64px;
  }
  .footer-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #AEB997;
  }
  .footer-badge {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #D8B98C;
    text-transform: uppercase;
  }
</style>
</head>
<body>
<div class="canvas canvas-06">
  <div class="ambient-glow"></div>
  <div class="safe-container">
    <div class="header-row">
      <div class="brand-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <div class="brand-meta">
          <span class="brand-name">B+ Wellness Café</span>
          <span class="brand-sub">by Mineiro Coffee</span>
        </div>
      </div>
      <div class="badge-proto-top">
        <span class="dot" style="background:#D8B98C"></span>
        <span>B+ AI BARISTA • PROTOTYPE</span>
      </div>
    </div>

    <div class="hero-section">
      <h1 class="headline-display">Seçimine<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Günün ritmine ve tercihlerine göre demo katalogdan bir içecek eşleşmesi keşfet.
      </p>

      <div class="ai-island-card">
        <div class="ai-card-topbar">
          <div class="ai-barista-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34422D" stroke-width="2.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
            <span>AI BARISTA — PROTOTYPE</span>
          </div>
          <span class="ai-proto-notice">Demo Simülasyonu</span>
        </div>

        <div class="ai-card-question">Bugün ne içmek istersin?</div>

        <div class="intent-chips-row">
          <div class="intent-chip active">✓ Odak & Zihin</div>
          <div class="intent-chip">Hafiflik & Tazelenme</div>
          <div class="intent-chip">Dengeli Enerji</div>
        </div>

        <div class="matched-product-box">
          <div class="matched-product-img">
            <img src="${coldBrew}" alt="Lion's Mane Cold Brew">
          </div>
          <div class="matched-product-info">
            <div class="score-badge">
              <span>✦</span>
              <span>%94 Uyum [DEMO SCORE]</span>
            </div>
            <h2 class="matched-title">Lion's Mane Cold Brew</h2>
            <p class="matched-editorial">Yoğun çalışma saatlerinde berrak tat ve dengeli uyanış için demo katalog eşleşmesi.</p>
          </div>
          <div class="cta-btn-demo">Keşfet (Demo)</div>
        </div>
      </div>
    </div>

    <div class="footer-row">
      <span class="footer-meta">bpluswellnesscafe.com (DEMO) • Web Prototipi</span>
      <span class="footer-badge">PROTOTYPE SIMULATION</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildGridMockupHtml() {
  const p1 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-01-brand-final.png'));
  const p2 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-02-0800.png'));
  const p3 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-03-1230-final.png'));
  const p4 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-04-1500.png'));
  const p5 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-05-menu.png'));
  const p6 = getFileBase64(path.join(POSTS_OUT_DIR, 'post-06-ai-final.png'));
  const brandLogo = getImageBase64('brand-logo.png');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1440px;
    height: 1800px;
    margin: 0;
    padding: 0;
    background: #EFECE4;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .profile-container {
    width: 1300px;
    background: #FFFDF8;
    border-radius: 36px;
    box-shadow: 0 24px 64px rgba(43, 35, 30, 0.12);
    border: 2px solid #E3DEC3;
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 28px;
    border-bottom: 1.5px solid #E3DEC3;
  }
  .profile-user {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .profile-avatar {
    width: 104px;
    height: 104px;
    border-radius: 50%;
    border: 2.5px solid #D8B98C;
    background: #FFFDF8;
    padding: 4px;
  }
  .profile-meta h1 {
    font-size: 28px;
    font-weight: 800;
    color: #34422D;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .badge-demo-account {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 6px;
    background: rgba(104, 115, 75, 0.12);
    border: 1px solid rgba(104, 115, 75, 0.3);
    color: #34422D;
  }
  .profile-bio {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: #6B675F;
    margin-top: 6px;
    line-height: 1.4;
  }
  .profile-stats {
    display: flex;
    gap: 36px;
  }
  .stat-item {
    text-align: center;
  }
  .stat-num {
    font-size: 22px;
    font-weight: 800;
    color: #34422D;
  }
  .stat-label {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    color: #6B675F;
    font-weight: 600;
  }
  /* 3x2 Grid */
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .grid-item {
    aspect-ratio: 4/5;
    border-radius: 20px;
    overflow: hidden;
    border: 1.5px solid #E3DEC3;
    box-shadow: 0 8px 24px rgba(43, 35, 30, 0.08);
    position: relative;
    background: #34422D;
  }
  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .grid-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    color: #6B675F;
  }
  .grid-footer-brand {
    font-weight: 700;
    color: #34422D;
  }
</style>
</head>
<body>
<div class="profile-container">
  <div class="profile-header">
    <div class="profile-user">
      <img class="profile-avatar" src="${brandLogo}" alt="B+ Profile">
      <div class="profile-meta">
        <h1>bpluswellnesscafe <span class="badge-demo-account">DEMO / PORTFOLIO</span></h1>
        <p class="profile-bio">
          <strong>B+ Wellness Café by Mineiro Coffee</strong> • İş gününe iyi bir +.<br>
          Nitelikli kahve, bitkisel alternatifler ve üçüncü dalga mola kültürü.
        </p>
      </div>
    </div>
    <div class="profile-stats">
      <div class="stat-item"><div class="stat-num">6</div><div class="stat-label">Gönderi</div></div>
      <div class="stat-item"><div class="stat-num">—</div><div class="stat-label">Takipçi</div></div>
      <div class="stat-item"><div class="stat-num">—</div><div class="stat-label">Takip</div></div>
    </div>
  </div>

  <div class="posts-grid">
    <div class="grid-item"><img src="${p1}" alt="Post 01 - Brand"></div>
    <div class="grid-item"><img src="${p2}" alt="Post 02 - 08:00"></div>
    <div class="grid-item"><img src="${p3}" alt="Post 03 - 12:30"></div>
    <div class="grid-item"><img src="${p4}" alt="Post 04 - 15:00"></div>
    <div class="grid-item"><img src="${p5}" alt="Post 05 - Menu"></div>
    <div class="grid-item"><img src="${p6}" alt="Post 06 - AI"></div>
  </div>

  <div class="grid-footer">
    <span class="grid-footer-brand">B+ Wellness Café • 6-Post Editorial Campaign Grid</span>
    <span>Campaign presentation order. Actual Instagram profile order depends on publishing chronology.</span>
  </div>
</div>
</body>
</html>`;
}

function renderHtmlToPng(htmlContent, tempHtmlName, outputPngPath, width = 1080, height = 1350) {
  const tempHtmlPath = path.join(PROD_DIR, tempHtmlName);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  console.log(`Rendering ${tempHtmlName} -> ${outputPngPath} (${width}x${height})...`);
  execFileSync(CHROME_PATH, [
    '--headless=new',
    `--screenshot=${outputPngPath}`,
    `--window-size=${width},${height}`,
    '--hide-scrollbars',
    '--default-background-color=00000000',
    '--run-all-compositor-stages-before-draw',
    tempHtmlPath
  ]);

  if (!fs.existsSync(outputPngPath)) {
    throw new Error(`Failed to generate PNG: ${outputPngPath}`);
  }

  const stat = fs.statSync(outputPngPath);
  console.log(`✓ Rendered ${path.basename(outputPngPath)} (${stat.size} bytes)`);
}

async function run() {
  console.log('=== Step 1: Regenerating Posts 02, 03, 04, 05, 06 ===');
  
  renderHtmlToPng(buildPost01Html(), 'post-01.html', path.join(POSTS_OUT_DIR, 'post-01-brand-final.png'));
  renderHtmlToPng(buildPost02Html(), 'post-02.html', path.join(POSTS_OUT_DIR, 'post-02-0800.png'));
  renderHtmlToPng(buildPost03Html(), 'post-03.html', path.join(POSTS_OUT_DIR, 'post-03-1230-final.png'));
  renderHtmlToPng(buildPost04Html(), 'post-04.html', path.join(POSTS_OUT_DIR, 'post-04-1500.png'));
  renderHtmlToPng(buildPost05Html(), 'post-05.html', path.join(POSTS_OUT_DIR, 'post-05-menu.png'));
  renderHtmlToPng(buildPost06Html(), 'post-06.html', path.join(POSTS_OUT_DIR, 'post-06-ai-final.png'));

  console.log('=== Step 2: Regenerating 6-Post Grid Mockup ===');
  const gridPng = path.join(MOCKUPS_OUT_DIR, 'grid-6-post-final.png');
  renderHtmlToPng(buildGridMockupHtml(), 'grid-mockup.html', gridPng, 1440, 1800);

  console.log('=== Final Visual Hardening Complete ===');
}

run().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
