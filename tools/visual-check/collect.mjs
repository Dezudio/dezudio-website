// Records every element's computed styles and box, per page/width/state,
// plus a full-page screenshot per page/width.
//
//   node tools/visual-check/collect.mjs <baseUrl> <outDir>
//
// Set CHROME_PATH if Chrome is not at /usr/bin/google-chrome.
// See DEVELOPMENT.md for the full before/after comparison workflow.
import puppeteer from 'puppeteer-core';
import fs from 'fs';

const [base, out] = process.argv.slice(2);
if (!base || !out) {
  console.error('usage: node collect.mjs <baseUrl> <outDir>');
  process.exit(1);
}
fs.mkdirSync(out, { recursive: true });

const pages = [
  '/',
  '/about/',
  '/latest/',
  '/about/ashley-deal/',
  '/about/raelynn-oleary/',
  '/404/',
];
// One width inside each breakpoint: <tb(640), tb, md(1024), lg(1920), xl(2280)
const widths = [360, 800, 1440, 2000, 2560];

const snapshot = () => {
  const skip = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'LINK', 'META']);
  const res = {};
  const walk = (el, path) => {
    if (skip.has(el.tagName)) return;
    const cs = getComputedStyle(el);
    const props = {};
    for (let i = 0; i < cs.length; i++)
      props[cs[i]] = cs.getPropertyValue(cs[i]);
    const sel = getComputedStyle(el, '::selection');
    props['::selection-bg'] = sel.backgroundColor;
    props['::selection-color'] = sel.color;
    const r = el.getBoundingClientRect();
    props['@box'] = [r.x, r.y + scrollY, r.width, r.height]
      .map((n) => Math.round(n * 10) / 10)
      .join(',');
    res[path] = props;
    [...el.children].forEach((c, i) =>
      walk(c, `${path}>${c.tagName.toLowerCase()}:${i}`)
    );
  };
  walk(document.body, 'body');
  return res;
};

// Snapshot until two consecutive snapshots agree, so fades and late layout don't leak in.
const stable = async (page) => {
  let prev = JSON.stringify(await page.evaluate(snapshot));
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 700));
    const cur = JSON.stringify(await page.evaluate(snapshot));
    if (cur === prev) return JSON.parse(cur);
    prev = cur;
  }
  throw new Error('page never settled');
};

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--hide-scrollbars', '--font-render-hinting=none'],
});
for (const p of pages) {
  for (const w of widths) {
    // Fresh context per load, so no decoded-image or cache state carries over.
    const ctx = await browser.createBrowserContext();
    const page = await ctx.newPage();
    await page.setViewport({ width: w, height: 1000, deviceScaleFactor: 1 });
    await page.goto(base + p, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    // Let lazy images load everywhere, then settle.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      scrollTo(0, 0);
    });
    await page.waitForFunction(
      () =>
        [...document.images].every(
          (i) => i.complete || !i.getClientRects().length
        ),
      { timeout: 30000 }
    );
    const key = `${p.replace(/\//g, '_') || '_'}@${w}`;
    const data = { base: await stable(page) };
    await page.screenshot({ path: `${out}/${key}.png`, fullPage: true });

    // Mobile menu open state.
    const burger = await page.$('header button');
    if (burger && (await burger.isVisible())) {
      await burger.click();
      data.menuOpen = await stable(page);
      await burger.click();
      await new Promise((r) => setTimeout(r, 500));
    }

    // Hover each visible link; record that link's subtree.
    const links = await page.$$('a');
    data.hover = {};
    for (const [i, a] of links.entries()) {
      if (!(await a.isVisible())) continue;
      try {
        await a.hover();
      } catch {
        continue;
      }
      await new Promise((r) => setTimeout(r, 50));
      const snap = await page.evaluate(snapshot);
      const mine = await a.evaluate((el) => {
        const parts = [];
        let n = el;
        while (n && n !== document.body) {
          parts.unshift(
            `${n.tagName.toLowerCase()}:${[...n.parentElement.children].indexOf(n)}`
          );
          n = n.parentElement;
        }
        return 'body>' + parts.join('>');
      });
      data.hover[i] = Object.fromEntries(
        Object.entries(snap).filter(([k]) => k.startsWith(mine))
      );
    }
    await page.mouse.move(0, 0);
    fs.writeFileSync(`${out}/${key}.json`, JSON.stringify(data));
    await ctx.close();
    console.log('done', key);
  }
}
await browser.close();
