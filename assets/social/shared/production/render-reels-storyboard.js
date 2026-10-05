const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..', '..');
const IMAGES_DIR = path.resolve(__dirname, '..', 'images');
const REELS_OUT_DIR = path.resolve(ROOT_DIR, 'assets', 'social', 'reels');
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

function buildStoryboardHtml() {
  const brandLogo = getImageBase64('brand-logo.png');
  const coldBrew = getImageBase64('hero-coldbrew.webp');
  const pourOver = getImageBase64('v60-pourover.webp');
  const spirulina = getImageBase64('spirulina-bowl.webp');
  const matcha = getImageBase64('matcha-latte.webp');

  const scenes = [
    {
      time: "00:00 – 00:05",
      title: "SAHNE 1: SABAH UYANIŞI",
      tag: "08:00 | GÜNE BİR +",
      headline: "Güne bir +.",
      desc: "Kentsel sabah ışığında metro çıkışı ve hızlı adımlar. Traverten kaide üzerinde buzlu soğuk kahve bardağı.",
      img: coldBrew,
      motion: "Yumuşak ağır çekim (slow push-in), açılı sabah gün ışığı geçişi.",
      audio: "Düşük frekanslı kentsel sabah ambiyansı, buz çıtırtısı."
    },
    {
      time: "00:05 – 00:11",
      title: "SAHNE 2: ÇALIŞMA MASASI RİTÜELİ",
      tag: "MASA BAŞI ODAK",
      headline: "Nitelikli kahve & duru uyanış",
      desc: "Doğal meşe masa, laptop kenarı, duru ve berrak filtre kahve demlemesi, bitkisel süt girdabı.",
      img: pourOver,
      motion: "Yandan yumuşak kaydırma (gentle tracking), fincan yerleştirme.",
      audio: "Pürüzsüz kahve akışı sesi, hafif fincan tıkırtısı."
    },
    {
      time: "00:11 – 00:17",
      title: "SAHNE 3: ÖĞLE ARASI HAFİFLİĞİ",
      tag: "12:30 | ÖĞLE ARASI",
      headline: "Öğle arasına bir +.",
      desc: "Spirulina kasesi üzerinde taze meyve dilimleri, narenciyeli soğuk sıkım şişesi, hafif ve temiz renkler.",
      img: spirulina,
      motion: "Yukarıdan hafif eğimli açı (overhead tilt), taze dokuların parıltısı.",
      audio: "Yumuşak ritmik bas vuruşu, taze zencefil ferahlık sesi."
    },
    {
      time: "00:17 – 00:23",
      title: "SAHNE 4: İKİNDİ SAKİNLİĞİ",
      tag: "15:00 | B+ MOLASI",
      headline: "Molaya bir +.",
      desc: "İkindi gölgeleri, seramik fincanda kadifemsi matcha latte, latte art dokusu ve dinlendirici ahşap detay.",
      img: matcha,
      motion: "Çok yavaş dairesel zum (slow orbit), sakin odak kaydırma.",
      audio: "Sıcak oda tonu, seramik fincan sesi, yumuşak akustik nabız."
    },
    {
      time: "00:23 – 00:27",
      title: "SAHNE 5: DİJİTAL İNOVASYON",
      tag: "AI BARISTA • PROTOTYPE",
      headline: "Seçimine bir +.",
      desc: "Mobil cihaz ekranında B+ AI Barista prototipi, niyet seçimi ve '✦ %94 Uyum [DEMO SCORE]' kartı.",
      img: coldBrew,
      isAi: true,
      motion: "Arayüz kartında yumuşak yukarı kayma (vertical reveal), simülasyon ışığı.",
      audio: "Hafif dijital mikro-tık ve zarif onay çanı efekti."
    },
    {
      time: "00:27 – 00:30",
      title: "SAHNE 6: MARKA İMZASI (OUTRO)",
      tag: "B+ WELLNESS CAFÉ",
      headline: "İş gününe iyi bir +.",
      desc: "Derin Koyu Zeytin (#34422D) zemin, B+ amblemi ve 'by Mineiro Coffee' editoryal imza kilitlenmesi.",
      img: brandLogo,
      isOutro: true,
      motion: "Kararma geçişi (cross-dissolve to Deep Olive), tipografik kilitlenme.",
      audio: "Akustik gitar / piyano son akoru ve sıcak nefes kapanışı."
    }
  ];

  const framesHtml = scenes.map((s, idx) => `
    <div class="scene-card">
      <div class="scene-topbar">
        <span class="scene-idx">KARE 0${idx + 1}</span>
        <span class="scene-time">${s.time}</span>
      </div>

      <div class="frame-viewport ${s.isOutro ? 'outro-frame' : ''}">
        ${s.isOutro ? `
          <div class="outro-content">
            <img class="outro-logo" src="${s.img}" alt="B+ Logo">
            <div class="outro-title">B+ Wellness Café</div>
            <div class="outro-by">by Mineiro Coffee</div>
            <div class="outro-headline">İş gününe iyi bir +.</div>
            <span class="badge-outro-demo">PORTFOLYO VAKA ÇALIŞMASI</span>
          </div>
        ` : s.isAi ? `
          <div class="ai-mock-frame">
            <div class="ai-mock-header">
              <span class="ai-mock-pill">AI BARISTA • PROTOTYPE</span>
              <span style="font-size:10px; color:#AEB997;">DEMO</span>
            </div>
            <div class="ai-mock-q">Bugün ne içmek istersin?</div>
            <div class="ai-mock-rec">
              <img src="${s.img}" style="width:54px; height:54px; border-radius:10px; object-fit:cover;">
              <div>
                <span class="ai-score-pill">✦ %94 [DEMO SCORE]</span>
                <div style="font-size:13px; font-weight:800; color:#34422D; margin-top:2px;">Lion's Mane Cold Brew</div>
              </div>
            </div>
            <div class="frame-overlay-tag">${s.tag}</div>
          </div>
        ` : `
          <img class="frame-img" src="${s.img}" alt="${s.title}">
          <div class="frame-overlay-tag">${s.tag}</div>
          <div class="frame-headline-overlay">${s.headline}</div>
        `}
      </div>

      <div class="scene-details">
        <div class="scene-title-text">${s.title}</div>
        <p class="scene-desc-text">${s.desc}</p>
        
        <div class="cue-box">
          <div class="cue-item">
            <span class="cue-label">HAREKET:</span>
            <span class="cue-val">${s.motion}</span>
          </div>
          <div class="cue-item">
            <span class="cue-label">SES & MÜZİK:</span>
            <span class="cue-val">${s.audio}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 2160px;
    height: 1440px;
    margin: 0;
    padding: 0;
    background: #EFECE4;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .board-container {
    width: 2060px;
    height: 1340px;
    background: #FFFDF8;
    border-radius: 36px;
    border: 2px solid #E3DEC3;
    box-shadow: 0 24px 64px rgba(43, 35, 30, 0.12);
    padding: 44px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .board-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1.5px solid #E3DEC3;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .board-logo {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #D8B98C;
    background: #FFFDF8;
    padding: 3px;
  }
  .board-title h1 {
    font-size: 28px;
    font-weight: 800;
    color: #34422D;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .board-sub {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    color: #6B675F;
    margin-top: 4px;
  }
  .board-meta-badge {
    padding: 8px 18px;
    background: #F4F0E6;
    border: 1.5px solid #D8B98C;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 700;
    color: #34422D;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .scenes-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    margin: 28px 0;
  }
  .scene-card {
    background: #F9F6F0;
    border: 1.5px solid #E3DEC3;
    border-radius: 22px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 16px rgba(43, 35, 30, 0.04);
  }
  .scene-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .scene-idx {
    font-size: 12px;
    font-weight: 800;
    color: #34422D;
    letter-spacing: 0.05em;
  }
  .scene-time {
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 6px;
    background: #34422D;
    color: #FFFDF8;
  }
  /* 9:16 Miniature Viewport */
  .frame-viewport {
    width: 100%;
    aspect-ratio: 9/16;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    border: 1px solid #E3DEC3;
    background: #242E1F;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  }
  .frame-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .frame-overlay-tag {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 8px;
    background: rgba(255, 253, 248, 0.9);
    border-radius: 6px;
    font-size: 9px;
    font-weight: 800;
    color: #34422D;
    text-transform: uppercase;
  }
  .frame-headline-overlay {
    position: absolute;
    bottom: 14px;
    left: 12px;
    right: 12px;
    padding: 8px 10px;
    background: rgba(43, 35, 30, 0.82);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    font-size: 12px;
    font-weight: 800;
    color: #FFFDF8;
    line-height: 1.25;
  }
  .ai-mock-frame {
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, #242E1F 0%, #34422D 100%);
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
  .ai-mock-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
  }
  .ai-mock-pill {
    font-size: 8px;
    font-weight: 800;
    padding: 3px 6px;
    background: rgba(216, 185, 140, 0.2);
    border: 1px solid #D8B98C;
    border-radius: 4px;
    color: #FFFDF8;
  }
  .ai-mock-q {
    font-size: 13px;
    font-weight: 800;
    color: #FFFDF8;
    line-height: 1.2;
  }
  .ai-mock-rec {
    background: #FFFDF8;
    border-radius: 12px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ai-score-pill {
    font-size: 9px;
    font-weight: 800;
    color: #34422D;
    padding: 2px 6px;
    background: #F4F0E6;
    border-radius: 4px;
    border: 1px solid #D8B98C;
  }
  .outro-frame {
    background: linear-gradient(155deg, #2B3825 0%, #34422D 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px;
  }
  .outro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .outro-logo {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px solid #D8B98C;
    background: #FFFDF8;
    padding: 3px;
  }
  .outro-title {
    font-size: 14px;
    font-weight: 800;
    color: #FFFDF8;
  }
  .outro-by {
    font-family: 'Manrope', sans-serif;
    font-size: 10px;
    color: #AEB997;
    text-transform: uppercase;
  }
  .outro-headline {
    font-size: 15px;
    font-weight: 800;
    color: #D8B98C;
    margin-top: 6px;
  }
  .badge-outro-demo {
    font-size: 8px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(255, 253, 248, 0.1);
    border: 1px solid rgba(216, 185, 140, 0.3);
    color: #FFFDF8;
    margin-top: 4px;
  }
  .scene-details {
    margin-top: 12px;
  }
  .scene-title-text {
    font-size: 13px;
    font-weight: 800;
    color: #34422D;
    margin-bottom: 4px;
  }
  .scene-desc-text {
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    color: #6B675F;
    line-height: 1.35;
    margin-bottom: 8px;
    height: 44px;
    overflow: hidden;
  }
  .cue-box {
    background: #FFFDF8;
    border: 1px solid #E3DEC3;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .cue-item {
    font-family: 'Manrope', sans-serif;
    font-size: 10px;
    line-height: 1.25;
  }
  .cue-label {
    font-weight: 800;
    color: #34422D;
  }
  .cue-val {
    color: #6B675F;
  }
  .board-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1.5px solid #E3DEC3;
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    color: #6B675F;
  }
  .footer-brand {
    font-weight: 800;
    color: #34422D;
  }
</style>
</head>
<body>
<div class="board-container">
  <div class="board-header">
    <div class="header-left">
      <img class="board-logo" src="${brandLogo}" alt="B+ Logo">
      <div class="board-title">
        <h1>B+ Wellness Café • Reels Storyboard Senaryosu</h1>
        <div class="board-sub">Kampanya Filmi: "İş gününe iyi bir +." • Süre: ~28 Saniye • Format: 9:16 Dikey Video</div>
      </div>
    </div>
    <div class="board-meta-badge">
      <span>✦</span>
      <span>REELS STORYBOARD • 6 KARELİK ANLATI AKIŞI</span>
    </div>
  </div>

  <div class="scenes-grid">
    ${framesHtml}
  </div>

  <div class="board-footer">
    <span class="footer-brand">B+ Wellness Café by Mineiro Coffee • Sosyal Medya Vaka Çalışması</span>
    <span>Sakin, editoryal, ritmik hareket dili • Lisanslı / Özgün ortam sesleri • Filigransız Üretim</span>
  </div>
</div>
</body>
</html>`;
}

function renderHtmlToPng(htmlContent, tempHtmlName, outputPngPath, width = 2160, height = 1440) {
  const tempHtmlPath = path.join(PROD_DIR, tempHtmlName);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  console.log(`Rendering Storyboard ${tempHtmlName} -> ${outputPngPath} (${width}x${height})...`);
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
  if (!fs.existsSync(REELS_OUT_DIR)) {
    fs.mkdirSync(REELS_OUT_DIR, { recursive: true });
  }

  const storyboardHtml = buildStoryboardHtml();
  const storyboardPng = path.join(REELS_OUT_DIR, 'reels-storyboard-final.png');
  renderHtmlToPng(storyboardHtml, 'reels-storyboard.html', storyboardPng, 2160, 1440);
}

run().catch((err) => {
  console.error('Error generating storyboard:', err);
  process.exit(1);
});
