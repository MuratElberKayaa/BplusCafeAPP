const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..', '..');
const IMAGES_DIR = path.resolve(__dirname, '..', 'images');
const PROD_DIR = __dirname;
const FRAMES_DIR = path.join(PROD_DIR, 'reels-frames');

if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

function getImageBase64(filename) {
  const filePath = path.join(IMAGES_DIR, filename);
  const ext = path.extname(filename).toLowerCase().replace('.', '');
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : ext === 'svg' ? 'image/svg+xml' : 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

const brandLogo = getImageBase64('brand-logo.png');
const coldBrew = getImageBase64('hero-coldbrew.webp');
const pourOver = getImageBase64('v60-pourover.webp');
const spirulina = getImageBase64('spirulina-bowl.webp');
const matcha = getImageBase64('matcha-latte.webp');

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1080px;
    height: 1920px;
    margin: 0;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .scene-canvas {
    width: 1080px;
    height: 1920px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 240px 80px 280px 80px;
  }
  .top-pill {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 9999px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    font-weight: 800;
  }
  .headline {
    font-size: 80px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }
  .subhead {
    font-family: 'Manrope', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.45;
    margin-top: 18px;
  }
  .visual-card {
    width: 100%;
    height: 700px;
    border-radius: 36px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 64px rgba(0,0,0,0.18);
  }
  .visual-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .badge-case {
    position: absolute;
    bottom: 24px;
    left: 24px;
    padding: 8px 18px;
    border-radius: 8px;
    background: rgba(255, 253, 248, 0.9);
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #34422D;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }
`;

// Scene 1: 08:00 Güne bir +
const scene1 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas { background: #F4F0E6; color: #2B231E; }
.top-pill { background: #FFFDF8; border: 1.5px solid #D8B98C; color: #34422D; }
.headline { color: #34422D; }
.subhead { color: #6B675F; }
.footer-row { border-top: 1.5px solid #E3DEC3; color: #6B675F; font-family: 'Manrope', sans-serif; font-size: 15px; }
</style></head><body>
<div class="scene-canvas">
  <div class="top-pill">● 08:00 | GÜNE BİR +</div>
  <div>
    <h1 class="headline">Güne<br>bir <span style="color:#68734B;">+</span>.</h1>
    <p class="subhead">Sabahın ilk adımlarında berrak bir fincanla güne taze başlangıç.</p>
  </div>
  <div class="visual-card">
    <img src="${coldBrew}">
    <div class="badge-case">Lion's Mane Cold Brew • DEMO MENU VISUALS</div>
  </div>
  <div class="footer-row">
    <span>B+ Wellness Café by Mineiro Coffee</span>
    <span style="font-weight:700; color:#34422D;">KAMPANYA FİLMİ [00:00–00:05]</span>
  </div>
</div></body></html>`;

// Scene 2: Desk Context
const scene2 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas { background: #F9F6F0; color: #2B231E; }
.top-pill { background: #FFFDF8; border: 1.5px solid #D8B98C; color: #34422D; }
.headline { color: #34422D; }
.subhead { color: #6B675F; }
.footer-row { border-top: 1.5px solid #E3DEC3; color: #6B675F; font-family: 'Manrope', sans-serif; font-size: 15px; }
</style></head><body>
<div class="scene-canvas">
  <div class="top-pill">● ÇALIŞMA MASASI RİTÜELİ</div>
  <div>
    <h1 class="headline">Nitelikli kahve<br>& duru uyanış.</h1>
    <p class="subhead">Zanaatkar kavrum geleneği ve berrak demlemelerle günün odağı.</p>
  </div>
  <div class="visual-card">
    <img src="${pourOver}">
    <div class="badge-case">V60 Demleme • DEMO PRODUCT</div>
  </div>
  <div class="footer-row">
    <span>B+ Wellness Café • Masa Başı Odak</span>
    <span style="font-weight:700; color:#34422D;">KAMPANYA FİLMİ [00:05–00:11]</span>
  </div>
</div></body></html>`;

// Scene 3: 12:30 Öğle Arası
const scene3 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas { background: #F4F0E6; color: #2B231E; }
.top-pill { background: #FFFDF8; border: 1.5px solid #D8B98C; color: #34422D; }
.headline { color: #34422D; }
.subhead { color: #6B675F; }
.footer-row { border-top: 1.5px solid #E3DEC3; color: #6B675F; font-family: 'Manrope', sans-serif; font-size: 15px; }
</style></head><body>
<div class="scene-canvas">
  <div class="top-pill">● 12:30 | ÖĞLE ARASI</div>
  <div>
    <h1 class="headline">Öğle arasına<br>bir <span style="color:#68734B;">+</span>.</h1>
    <p class="subhead">Masa başı yoğunluğuna taze kaseler ve soğuk sıkımlarla hafif bir ara.</p>
  </div>
  <div class="visual-card">
    <img src="${spirulina}">
    <div class="badge-case">Spirulina Kase & Soğuk Sıkım • DEMO MENU VISUALS</div>
  </div>
  <div class="footer-row">
    <span>B+ Wellness Café • Öğle Molası Hafifliği</span>
    <span style="font-weight:700; color:#34422D;">KAMPANYA FİLMİ [00:11–00:17]</span>
  </div>
</div></body></html>`;

// Scene 4: 15:00 Molaya bir +
const scene4 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas { background: linear-gradient(160deg, #E2E8D8 0%, #D5DEC7 100%); color: #2B231E; }
.top-pill { background: #FFFDF8; border: 1.5px solid #AEB997; color: #34422D; }
.headline { color: #34422D; }
.subhead { color: #4A5642; }
.footer-row { border-top: 1.5px solid rgba(174,185,151,0.5); color: #4A5642; font-family: 'Manrope', sans-serif; font-size: 15px; }
</style></head><body>
<div class="scene-canvas">
  <div class="top-pill">● 15:00 | B+ MOLASI</div>
  <div>
    <h1 class="headline">Molaya<br>bir <span style="color:#68734B;">+</span>.</h1>
    <p class="subhead">İkindi saatlerinde kadifemsi matcha ve bitkisel çaylarla sakin bir soluk.</p>
  </div>
  <div class="visual-card">
    <img src="${matcha}">
    <div class="badge-case" style="background:rgba(43,35,30,0.85); color:#FFFDF8;">Matcha Latte • DEMO MENU VISUALS</div>
  </div>
  <div class="footer-row">
    <span>B+ Wellness Café • İkindi Ritüeli</span>
    <span style="font-weight:700; color:#34422D;">KAMPANYA FİLMİ [00:17–00:23]</span>
  </div>
</div></body></html>`;

// Scene 5: AI Barista Prototype
const scene5 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas { background: linear-gradient(165deg, #242E1F 0%, #34422D 100%); color: #FFFDF8; }
.top-pill { background: rgba(255,253,248,0.1); border: 1.5px solid #D8B98C; color: #FFFDF8; }
.headline { color: #FFFDF8; }
.subhead { color: #AEB997; }
.footer-row { border-top: 1.5px solid rgba(216,185,140,0.25); color: #AEB997; font-family: 'Manrope', sans-serif; font-size: 15px; }
.ai-island {
  background: #FFFDF8;
  border-radius: 32px;
  padding: 36px;
  color: #2B231E;
  border: 2px solid #D8B98C;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}
.ai-q { font-size: 32px; font-weight: 800; color: #34422D; margin: 16px 0; }
.ai-product {
  background: #F4F0E6;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}
</style></head><body>
<div class="scene-canvas">
  <div class="top-pill">● B+ AI BARISTA • PROTOTYPE</div>
  <div>
    <h1 class="headline">Seçimine<br>bir <span style="color:#D8B98C;">+</span>.</h1>
    <p class="subhead">Günün ritmine göre demo katalogdan içecek eşleşmesi simülasyonu.</p>
  </div>
  <div class="ai-island">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:13px; font-weight:800; color:#34422D; padding:6px 14px; background:#F4F0E6; border-radius:999px;">AI BARISTA — PROTOTYPE</span>
      <span style="font-size:13px; color:#6B675F;">Demo Simülasyonu</span>
    </div>
    <div class="ai-q">Bugün ne içmek istersin?</div>
    <div class="ai-product">
      <img src="${coldBrew}" style="width:140px; height:140px; border-radius:18px; object-fit:cover;">
      <div>
        <span style="font-size:13px; font-weight:800; color:#34422D; background:#FFFDF8; border:1px solid #D8B98C; padding:4px 12px; border-radius:999px;">✦ %94 Uyum [DEMO SCORE]</span>
        <div style="font-size:24px; font-weight:800; color:#34422D; margin:8px 0 4px 0;">Lion's Mane Cold Brew</div>
        <p style="font-family:'Manrope'; font-size:14px; color:#6B675F;">Berrak tat ve dengeli uyanış için demo katalog eşleşmesi.</p>
      </div>
    </div>
  </div>
  <div class="footer-row">
    <span>bpluswellnesscafe.com (DEMO) • Web Prototipi</span>
    <span style="font-weight:700; color:#D8B98C;">KAMPANYA FİLMİ [00:23–00:27]</span>
  </div>
</div></body></html>`;

// Scene 6: Outro Brand Lockup
const scene6 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}
.scene-canvas {
  background: linear-gradient(155deg, #242E1F 0%, #34422D 50%, #1A2216 100%);
  color: #FFFDF8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px;
}
.brand-big-logo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid #D8B98C;
  background: #FFFDF8;
  padding: 8px;
  margin-bottom: 32px;
}
.brand-big-title {
  font-size: 54px;
  font-weight: 800;
  color: #FFFDF8;
  letter-spacing: -0.02em;
}
.brand-big-sub {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  color: #AEB997;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 8px;
}
.brand-big-tagline {
  font-size: 64px;
  font-weight: 800;
  color: #D8B98C;
  margin: 48px 0;
  line-height: 1.1;
}
.badge-final-demo {
  padding: 10px 24px;
  border-radius: 9999px;
  background: rgba(255, 253, 248, 0.1);
  border: 1.5px solid rgba(216, 185, 140, 0.4);
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #FFFDF8;
  letter-spacing: 0.08em;
}
</style></head><body>
<div class="scene-canvas">
  <img class="brand-big-logo" src="${brandLogo}">
  <div class="brand-big-title">B+ Wellness Café</div>
  <div class="brand-big-sub">by Mineiro Coffee</div>
  <div class="brand-big-tagline">İş gününe<br>iyi bir +.</div>
  <div class="badge-final-demo">KREATİF VAKA ÇALIŞMASI • PORTFOLYO PROTOTİPİ</div>
</div></body></html>`;

function renderScene(html, name) {
  const htmlPath = path.join(FRAMES_DIR, `${name}.html`);
  const pngPath = path.join(FRAMES_DIR, `${name}.png`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  execFileSync(CHROME_PATH, [
    '--headless=new',
    `--screenshot=${pngPath}`,
    '--window-size=1080,1920',
    '--hide-scrollbars',
    '--default-background-color=00000000',
    '--run-all-compositor-stages-before-draw',
    htmlPath
  ]);
  console.log(`Rendered frame ${name}.png`);
}

renderScene(scene1, 'scene-1');
renderScene(scene2, 'scene-2');
renderScene(scene3, 'scene-3');
renderScene(scene4, 'scene-4');
renderScene(scene5, 'scene-5');
renderScene(scene6, 'scene-6');
console.log('All 6 full-res scenes rendered for Reels compilation.');
