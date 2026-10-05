const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..', '..');
const IMAGES_DIR = path.resolve(__dirname, '..', 'images');
const STORIES_OUT_DIR = path.resolve(ROOT_DIR, 'assets', 'social', 'stories');
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

const sharedStoryStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 1080px;
    height: 1920px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .story-canvas {
    width: 1080px;
    height: 1920px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Safe container for 9:16 Instagram Story (Top: 240px, Bottom: 280px) */
  .story-safe-container {
    position: absolute;
    top: 240px;
    left: 72px;
    right: 72px;
    bottom: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .badge-case-study {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 9999px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge-case-study.light {
    background: #FFFDF8;
    border: 1px solid #D8B98C;
    color: #34422D;
    box-shadow: 0 4px 12px rgba(43, 35, 30, 0.05);
  }

  .badge-case-study.dark {
    background: rgba(255, 253, 248, 0.1);
    border: 1px solid rgba(216, 185, 140, 0.4);
    color: #FFFDF8;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
  }
`;

function buildStory01Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const coldBrew = getImageBase64('hero-coldbrew.webp');
  const matcha = getImageBase64('matcha-latte.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStoryStyles}
  .canvas-s01 {
    background: linear-gradient(175deg, #F9F6F0 0%, #F0EBE0 50%, #E6DEC9 100%);
    color: #2B231E;
  }
  .top-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-badge-group {
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
  .brand-name-text {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
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
  .hero-block {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 76px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 14px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #6B675F;
    line-height: 1.4;
  }
  /* Dual Visual Showcase: Coffee vs Matcha */
  .duality-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 36px;
    height: 420px;
  }
  .dual-card {
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 12px 32px rgba(43, 35, 30, 0.08);
    border: 1.5px solid rgba(227, 222, 195, 0.9);
    background: #FFFDF8;
  }
  .dual-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .dual-card-label {
    position: absolute;
    bottom: 18px;
    left: 18px;
    right: 18px;
    padding: 10px 14px;
    background: rgba(255, 253, 248, 0.92);
    backdrop-filter: blur(8px);
    border-radius: 14px;
    border: 1px solid rgba(216, 185, 140, 0.5);
    font-size: 15px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
  }
  /* Instagram Poll-style interaction module */
  .poll-interaction-box {
    margin-top: 36px;
    background: #FFFDF8;
    border-radius: 28px;
    padding: 28px 32px;
    border: 2px solid #D8B98C;
    box-shadow: 0 16px 44px rgba(43, 35, 30, 0.08);
  }
  .poll-question {
    font-size: 24px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
    margin-bottom: 20px;
  }
  .poll-options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .poll-btn {
    padding: 18px;
    border-radius: 18px;
    background: #F4F0E6;
    border: 1.5px solid #E3DEC3;
    font-size: 18px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .poll-btn.highlight {
    background: #34422D;
    color: #FFFDF8;
    border-color: #34422D;
  }
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #E3DEC3;
  }
  .bottom-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #6B675F;
  }
</style>
</head>
<body>
<div class="story-canvas canvas-s01">
  <div class="story-safe-container">
    <div class="top-meta-row">
      <div class="brand-badge-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-text">B+ Wellness Café</span>
      </div>
      <div class="badge-case-study light">
        <span class="dot" style="background:#68734B"></span>
        <span>DEMO / CONCEPT</span>
      </div>
    </div>

    <div class="hero-block">
      <div class="time-badge" style="margin-bottom:14px;">
        <span class="dot" style="background:#68734B"></span>
        <span>08:00 | GÜNE BİR +</span>
      </div>
      <h1 class="headline-display">Sabahın ilk adımı:<br>Hangisi senin <span class="plus-accent">+</span> anın?</h1>
      <p class="subhead-editorial">
        Nitelikli soğuk kahve berraklığı mı, yoksa geleneksel matcha kadifesi mi?
      </p>

      <div class="duality-showcase">
        <div class="dual-card">
          <img src="${coldBrew}" alt="Cold Brew">
          <div class="dual-card-label">Lion's Mane Cold Brew</div>
        </div>
        <div class="dual-card">
          <img src="${matcha}" alt="Matcha Latte">
          <div class="dual-card-label">Geleneksel Matcha Latte</div>
        </div>
      </div>

      <div class="poll-interaction-box">
        <div class="poll-question">Sabah modun hangisi?</div>
        <div class="poll-options-grid">
          <div class="poll-btn highlight">☕ Kahve</div>
          <div class="poll-btn">🍵 Matcha</div>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <span class="bottom-meta">08:00 İşe Gidiş Ritüeli • Case Study Story</span>
      <span class="badge-case-study light">DEMO MENU VISUALS</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildStory02Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const spirulinaBowl = getImageBase64('spirulina-bowl.webp');
  const smoothie = getImageBase64('smoothie-avocado.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStoryStyles}
  .canvas-s02 {
    background: linear-gradient(175deg, #FBF8F2 0%, #F4F0E6 50%, #E9E3D3 100%);
    color: #2B231E;
  }
  .top-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-badge-group {
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
  .brand-name-text {
    font-size: 16px;
    font-weight: 800;
    color: #34422D;
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
  .hero-block {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 76px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #34422D;
    margin-bottom: 14px;
  }
  .headline-display .plus-accent {
    color: #68734B;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #6B675F;
    line-height: 1.4;
  }
  /* Primary Food Image Feature */
  .food-feature-box {
    margin-top: 36px;
    height: 420px;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 16px 40px rgba(43, 35, 30, 0.1);
    border: 1.5px solid rgba(227, 222, 195, 0.9);
  }
  .food-feature-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .food-feature-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 10px 18px;
    background: rgba(255, 253, 248, 0.94);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    border: 1.5px solid #D8B98C;
    font-size: 15px;
    font-weight: 800;
    color: #34422D;
  }
  /* Instagram Poll module */
  .poll-interaction-box {
    margin-top: 36px;
    background: #FFFDF8;
    border-radius: 28px;
    padding: 28px 32px;
    border: 2px solid #D8B98C;
    box-shadow: 0 16px 44px rgba(43, 35, 30, 0.08);
  }
  .poll-question {
    font-size: 24px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
    margin-bottom: 20px;
  }
  .poll-options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .poll-btn {
    padding: 18px;
    border-radius: 18px;
    background: #F4F0E6;
    border: 1.5px solid #E3DEC3;
    font-size: 18px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
  }
  .poll-btn.highlight {
    background: #34422D;
    color: #FFFDF8;
    border-color: #34422D;
  }
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #E3DEC3;
  }
  .bottom-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #6B675F;
  }
</style>
</head>
<body>
<div class="story-canvas canvas-s02">
  <div class="story-safe-container">
    <div class="top-meta-row">
      <div class="brand-badge-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-text">B+ Wellness Café</span>
      </div>
      <div class="badge-case-study light">
        <span class="dot" style="background:#68734B"></span>
        <span>DEMO / CONCEPT</span>
      </div>
    </div>

    <div class="hero-block">
      <div class="time-badge" style="margin-bottom:14px;">
        <span class="dot" style="background:#68734B"></span>
        <span>12:30 | ÖĞLE ARASINA BİR +</span>
      </div>
      <h1 class="headline-display">Öğle molanda<br>hafif bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        Masa başı yoğunluğuna taze kaseler ve soğuk sıkımlarla hafif bir ara.
      </p>

      <div class="food-feature-box">
        <img src="${spirulinaBowl}" alt="Spirulina Kase">
        <div class="food-feature-badge">Spirulina Kasesi & Taze Meyveler</div>
      </div>

      <div class="poll-interaction-box">
        <div class="poll-question">Öğle molan bugün?</div>
        <div class="poll-options-grid">
          <div class="poll-btn highlight">🥤 Smoothie</div>
          <div class="poll-btn">🥗 Atıştırmalık</div>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <span class="bottom-meta">12:30 Öğle Molası Hafifliği • Case Study Story</span>
      <span class="badge-case-study light">DEMO MENU VISUALS</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function buildStory03Html() {
  const brandLogo = getImageBase64('brand-logo.png');
  const matchaLatte = getImageBase64('matcha-latte.webp');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  ${sharedStoryStyles}
  .canvas-s03 {
    background: linear-gradient(165deg, #242E1F 0%, #34422D 50%, #1A2216 100%);
    color: #FFFDF8;
  }
  .ambient-glow {
    position: absolute;
    width: 700px;
    height: 700px;
    right: -150px;
    top: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(104, 115, 75, 0.25) 0%, rgba(52, 66, 45, 0) 70%);
    pointer-events: none;
  }
  .top-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-badge-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid rgba(216, 185, 140, 0.6);
    background: #FFFDF8;
    padding: 2px;
  }
  .brand-name-text {
    font-size: 16px;
    font-weight: 800;
    color: #FFFDF8;
  }
  .time-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: rgba(255, 253, 248, 0.1);
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: #FFFDF8;
  }
  .hero-block {
    margin-top: 36px;
  }
  .headline-display {
    font-size: 76px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #FFFDF8;
    margin-bottom: 14px;
  }
  .headline-display .plus-accent {
    color: #D8B98C;
  }
  .subhead-editorial {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #AEB997;
    line-height: 1.4;
  }
  /* Atmospheric Photo Feature */
  .matcha-feature-box {
    margin-top: 36px;
    height: 420px;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 16px 44px rgba(0, 0, 0, 0.3);
    border: 1.5px solid rgba(216, 185, 140, 0.4);
  }
  .matcha-feature-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .matcha-feature-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 10px 18px;
    background: rgba(43, 35, 30, 0.85);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    border: 1.5px solid #D8B98C;
    font-size: 15px;
    font-weight: 800;
    color: #FFFDF8;
  }
  /* Instagram Question Box interaction module */
  .question-box-container {
    margin-top: 36px;
    background: #FFFDF8;
    border-radius: 28px;
    padding: 26px 32px;
    border: 2px solid #D8B98C;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
    color: #2B231E;
  }
  .question-box-header {
    font-size: 22px;
    font-weight: 800;
    color: #34422D;
    text-align: center;
    margin-bottom: 16px;
  }
  .question-input-mock {
    background: #F4F0E6;
    border: 1.5px dashed #D8B98C;
    border-radius: 18px;
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: #6B675F;
  }
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(216, 185, 140, 0.25);
  }
  .bottom-meta {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #AEB997;
  }
</style>
</head>
<body>
<div class="story-canvas canvas-s03">
  <div class="ambient-glow"></div>
  <div class="story-safe-container">
    <div class="top-meta-row">
      <div class="brand-badge-group">
        <img class="brand-logo-img" src="${brandLogo}" alt="B+ Logo">
        <span class="brand-name-text">B+ Wellness Café</span>
      </div>
      <div class="badge-case-study dark">
        <span class="dot" style="background:#D8B98C"></span>
        <span>DEMO / CONCEPT</span>
      </div>
    </div>

    <div class="hero-block">
      <div class="time-badge" style="margin-bottom:14px;">
        <span class="dot" style="background:#D8B98C"></span>
        <span>15:00 | B+ MOLASI</span>
      </div>
      <h1 class="headline-display">Molaya<br>bir <span class="plus-accent">+</span>.</h1>
      <p class="subhead-editorial">
        İkindi saatlerinde kadifemsi matcha ve bitkisel çaylarla sakin bir soluk.
      </p>

      <div class="matcha-feature-box">
        <img src="${matchaLatte}" alt="Matcha Latte">
        <div class="matcha-feature-badge">Geleneksel Matcha Latte</div>
      </div>

      <div class="question-box-container">
        <div class="question-box-header">Bugün ne içmek isterdin?</div>
        <div class="question-input-mock">
          <span>Fincanında ne olsun? Yaz buraya...</span>
          <span style="font-size:20px;">☕</span>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <span class="bottom-meta">15:00 İkindi Molası • Case Study Story</span>
      <span class="badge-case-study dark">DEMO MENU VISUALS</span>
    </div>
  </div>
</div>
</body>
</html>`;
}

function renderHtmlToPng(htmlContent, tempHtmlName, outputPngPath, width = 1080, height = 1920) {
  const tempHtmlPath = path.join(PROD_DIR, tempHtmlName);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  console.log(`Rendering Story ${tempHtmlName} -> ${outputPngPath} (${width}x${height})...`);
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
  console.log('=== Rendering 3 Final Instagram Stories (1080x1920) ===');
  
  if (!fs.existsSync(STORIES_OUT_DIR)) {
    fs.mkdirSync(STORIES_OUT_DIR, { recursive: true });
  }

  renderHtmlToPng(buildStory01Html(), 'story-01.html', path.join(STORIES_OUT_DIR, 'story-01-0800-final.png'));
  renderHtmlToPng(buildStory02Html(), 'story-02.html', path.join(STORIES_OUT_DIR, 'story-02-1230-final.png'));
  renderHtmlToPng(buildStory03Html(), 'story-03.html', path.join(STORIES_OUT_DIR, 'story-03-1500-final.png'));

  console.log('=== All 3 Stories Rendered Successfully ===');
}

run().catch((err) => {
  console.error('Error generating stories:', err);
  process.exit(1);
});
