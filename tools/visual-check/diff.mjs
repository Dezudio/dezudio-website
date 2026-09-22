// Compares two directories produced by collect.mjs and prints every
// difference in computed styles, element boxes and screenshot pixels.
//
//   node tools/visual-check/diff.mjs <baselineDir> <candidateDir>
//
// Needs ImageMagick's `compare` on PATH for the pixel check.
import fs from 'fs';
import { spawnSync } from 'child_process';

const [a, b] = process.argv.slice(2);
if (!a || !b) {
  console.error('usage: node diff.mjs <baselineDir> <candidateDir>');
  process.exit(1);
}
// Properties that legitimately differ between builds without any visual effect.
// Chrome reports auto margins inconsistently; @box captures their real effect.
const ignore = new Set([
  'margin-left',
  'margin-right',
  'margin-inline-start',
  'margin-inline-end',
  'transition',
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',
  'transition-behavior',
]);
let total = 0;
for (const f of fs
  .readdirSync(a)
  .filter((f) => f.endsWith('.json'))
  .sort()) {
  const A = JSON.parse(fs.readFileSync(`${a}/${f}`));
  const B = JSON.parse(fs.readFileSync(`${b}/${f}`));
  const cmp = (label, x = {}, y = {}) => {
    for (const path of new Set([...Object.keys(x), ...Object.keys(y)])) {
      if (!x[path] || !y[path]) {
        console.log(
          `${f} ${label} ${path}: element ${x[path] ? 'missing' : 'extra'}`
        );
        total++;
        continue;
      }
      const zero = (e) => /,0(\.0)?,|,0(\.0)?$/.test(e['@box']);
      if (zero(x[path]) && zero(y[path])) continue; // not rendered in either build
      for (const prop of new Set([
        ...Object.keys(x[path]),
        ...Object.keys(y[path]),
      ])) {
        // Tailwind's internal custom properties; their effect shows up in real properties.
        if (prop.startsWith('--')) continue;
        // Obsolete 2009-flexbox prefixes; Chrome ignores them for grid and modern flex.
        if (ignore.has(prop) || prop.startsWith('-webkit-box-')) continue;
        // Same value, different spelling: minifier output and server port.
        const norm = (v) =>
          String(v)
            .replace(/localhost:\d+/g, 'localhost')
            .replace(/to right/g, '90deg')
            .replace(/ 0%/g, ' 0px');
        if (norm(x[path][prop]) !== norm(y[path][prop])) {
          console.log(
            `${f} ${label} ${path}\n    ${prop}: ${x[path][prop]}  ->  ${y[path][prop]}`
          );
          total++;
        }
      }
    }
  };
  cmp('base', A.base, B.base);
  if (A.menuOpen || B.menuOpen) cmp('menuOpen', A.menuOpen, B.menuOpen);
  for (const k of new Set([
    ...Object.keys(A.hover || {}),
    ...Object.keys(B.hover || {}),
  ]))
    cmp(`hover#${k}`, A.hover?.[k], B.hover?.[k]);
  const png = f.replace('.json', '.png');
  const ae = spawnSync('compare', [
    '-metric',
    'AE',
    `${a}/${png}`,
    `${b}/${png}`,
    'null:',
  ]).stderr.toString();
  if (!ae.startsWith('0')) {
    console.log(`${png} pixels differ: ${ae.trim()}`);
    total++;
  }
}
console.log(`\nTOTAL DIFFERENCES: ${total}`);
