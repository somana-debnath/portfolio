// Regenerates project screenshots, the favicon/apple icon and the og:image.
// Usage: node scripts/generate-assets.mjs [--screenshots] [--brand]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const args = process.argv.slice(2);
const all = args.length === 0;
const fonts =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=DM+Sans:wght@400;500&display=block">';

const browser = await chromium.launch();

if (all || args.includes("--screenshots")) {
  mkdirSync("public/projects", { recursive: true });
  const shots = [
    ["https://jars-three.vercel.app/", "public/projects/jars.png"],
    ["https://pulse-nu-ebon-23.vercel.app/", "public/projects/pulse.png"],
  ];
  for (const [url, path] of shots) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path });
    await page.close();
    console.log("saved", path);
  }
}

if (all || args.includes("--brand")) {
  const monogram = (size, radius) => `<!doctype html><html><head>${fonts}<style>
    html,body{margin:0;background:transparent}
    .m{width:${size}px;height:${size}px;border-radius:${radius}px;background:#FBE4EA;display:grid;place-items:center;
       font-family:'Playfair Display';font-style:italic;font-weight:500;color:#C2698A;font-size:${size * 0.56}px;line-height:1;
       box-shadow:inset 0 0 0 ${Math.max(2, size * 0.03)}px #D4A373}
    .m span{transform:translateY(-${size * 0.04}px)}
  </style></head><body><div class="m"><span>sd</span></div></body></html>`;

  for (const [size, radius, path] of [
    [512, 112, "src/app/icon.png"],
    [180, 40, "src/app/apple-icon.png"],
  ]) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(monogram(size, radius), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".m").screenshot({ path, omitBackground: true });
    await page.close();
    console.log("saved", path);
  }

  const og = `<!doctype html><html><head>${fonts}<style>
    html,body{margin:0}
    body{width:1200px;height:630px;background:#FFF8F6;font-family:'DM Sans';color:#4A2C3A;position:relative;overflow:hidden}
    .glow{position:absolute;inset:-200px -100px auto auto;width:700px;height:700px;border-radius:50%;background:radial-gradient(closest-side,#FBE4EA,transparent)}
    .bar{position:absolute;left:0;right:0;top:0;height:10px;background:linear-gradient(90deg,#C2698A,#D4A373)}
    .wrap{position:absolute;left:90px;top:120px;right:90px}
    .mono{width:96px;height:96px;border-radius:24px;background:#FBE4EA;box-shadow:inset 0 0 0 3px #D4A373;display:grid;place-items:center;
          font-family:'Playfair Display';font-style:italic;font-size:54px;color:#C2698A}
    h1{font-family:'Playfair Display';font-weight:500;font-size:96px;margin:44px 0 0;letter-spacing:-1px;line-height:1}
    h1 em{color:#C2698A}
    p{font-size:30px;color:#8A6475;margin:28px 0 0}
    .pill{display:inline-flex;align-items:center;gap:12px;margin-top:34px;background:#fff;border:2px solid #F3DDE3;border-radius:999px;padding:10px 24px;font-size:24px}
    .dot{width:14px;height:14px;border-radius:50%;background:#10b981}
  </style></head><body><div class="glow"></div><div class="bar"></div><div class="wrap">
    <div class="mono">sd</div>
    <h1>Somana <em>Debnath</em></h1>
    <p>Software engineer · uOttawa '26 · Ottawa &amp; Toronto</p>
    <div class="pill"><span class="dot"></span>Open to full-time roles · January 2027</div>
  </div></body></html>`;
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(og, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "src/app/opengraph-image.png" });
  await page.close();
  console.log("saved src/app/opengraph-image.png");
}

if (args.includes("--resume-placeholder")) {
  const page = await browser.newPage();
  await page.setContent(
    `<html><body style="font-family:sans-serif;color:#4A2C3A;padding:80px"><h1>Somana Debnath</h1><p>Resume placeholder. Replace public/resume.pdf with the real file.</p></body></html>`,
  );
  await page.pdf({ path: "public/resume.pdf", format: "Letter" });
  console.log("saved public/resume.pdf");
}

await browser.close();
