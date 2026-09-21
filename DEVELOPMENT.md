# Development

Notes for working on this site's code. For editing page content without a
local setup, see [README.md](README.md) — that flow edits files on GitHub
and never needs any of this.

## The stack

| | |
|---|---|
| [Gatsby 5](https://www.gatsbyjs.com/docs/) | Static site generator. Builds `public/` from `src/` |
| [React 19](https://react.dev/) | Components |
| [Tailwind 4](https://tailwindcss.com/docs) | Styling, configured in `src/styles/global.css` |
| Node 24 | Pinned in `.nvmrc` and `netlify.toml` |

Every page is generated at build time. Nothing here runs on a server.

## Getting started

Node must match `.nvmrc`. With [nvm](https://github.com/nvm-sh/nvm):

```sh
nvm use          # reads .nvmrc
npm ci           # install exactly what package-lock.json records
npm run develop  # http://localhost:8000
```

`npm run develop` serves with hot reloading. Other commands:

```sh
npm run build    # production build into public/
npm run serve    # serve the built public/ at http://localhost:9000
npm run clean    # delete .cache and public/ when the build acts strangely
```

Use `npm ci`, not `npm install`, unless you mean to change dependencies.
It installs the exact locked versions and won't quietly update anything.

### If the lockfile loses its integrity hashes

Some npm builds write `package-lock.json` entries with no `resolved` URL or
`integrity` hash. Installs still work locally, but CI has to re-resolve every
package against the registry and can fail on a version that has moved. This
broke a Netlify build once. To check:

```sh
node -e 'const p=require("./package-lock.json").packages;
  console.log(Object.entries(p).filter(([k,v])=>k&&!v.resolved).length, "entries missing resolved")'
```

If that number isn't 0, regenerate the lockfile with a stock npm:

```sh
rm -rf node_modules package-lock.json && npx npm@10 install
```

## How the code is organised

```
src/pages/          One file per route. about/index.js is /about/
src/components/     Presentational components, grouped by the page using them
src/images/         Source images; Gatsby resizes and re-encodes at build time
src/styles/         global.css: Tailwind entry point, theme, and hand-written CSS
```

`src/components/common/` holds what every page uses (header, footer, layout,
links). The `index/`, `about/`, `latest/` and `people/` folders hold variants
for those pages.

### Styling

Components are built with `withClasses`, in
[`src/components/withClasses.js`](src/components/withClasses.js):

```js
const Heading = withClasses('h2', `
  font-sans-black
  text-dezudiorange
  text-heading-sm md:text-heading-md
`);
```

That returns a component rendering `<h2>` with those Tailwind classes, and
appends any `className` passed where it's used.

**A component that extends another lists all of its classes, including the
ones it inherits.** That repetition is deliberate. Tailwind classes don't
override each other by the order they appear in `className` — the generated
stylesheet decides — so a component can't reliably add a class that beats a
base component's class. Each one spells out what it actually renders.

When changing an extended component, check the breakpoints. `text-tagline-sm`
plus `md:text-tagline-lg` means the `md` size applies from 1024px up, so a
class meant to override it must target `md` or wider too.

### The theme

There is no `tailwind.config.js`. Tailwind 4 is configured in CSS, in the
`@theme` block at the top of `src/styles/global.css`: breakpoints, colours,
fonts, font sizes, letter spacing and spacing. To add a colour or size, add a
variable there:

```css
--color-dezudiorange: #f45d48;   /* text-dezudiorange, bg-dezudiorange */
--text-heading-sm: 14px;         /* text-heading-sm */
--spacing-headshot-md: 215px;    /* w-headshot-md, h-headshot-md, p-headshot-md */
```

The breakpoints are custom and the names are not Tailwind's defaults:

| | |
|---|---|
| `sm` | 320px |
| `tb` | 640px (tablet) |
| `md` | 1024px |
| `lg` | 1920px |
| `xl` | 2280px |

Below the theme, `global.css` has hand-written CSS that Tailwind can't
express: the mobile menu button (`.nav-burger`, with an `.open` state), the
home page section photos (`.process-bg`, `.research-bg`, `.workshops-bg`) and
a few small helpers.

Two deliberate overrides of Tailwind 4 defaults preserve how the site looked
under Tailwind 3: `@custom-variant hover` at the top of the file makes
`hover` apply on every device rather than only where the browser reports
hover support, and a rule in the `@layer base` block keeps the old gray
default border colour.

**Tailwind 4 needs Safari 16.4+, Chrome 111+ or Firefox 128+.** Older
browsers don't degrade gracefully — the layout breaks.

## Checking a change didn't alter the design

`tools/visual-check/` compares two builds of the site element by element. It
was written to verify the Tailwind 4 migration and is worth reusing for any
change that touches styling broadly, like a dependency upgrade.

`collect.mjs` loads every page at one width inside each breakpoint, and
records every element's computed styles and position, plus a full-page
screenshot. It also captures the mobile menu open and each link hovered.
`diff.mjs` compares two such runs and prints what differs.

It needs Chrome (set `CHROME_PATH` if it isn't at `/usr/bin/google-chrome`)
and ImageMagick's `compare` for the pixel check.

```sh
# Build the version you're comparing against
git stash && npm run build && mv public /tmp/before && npm run clean

# Build your changes
git stash pop && npm run build && cp -r public /tmp/after

# Serve both
python3 -m http.server 9101 -d /tmp/before &
python3 -m http.server 9102 -d /tmp/after &

# Record and compare
node tools/visual-check/collect.mjs http://localhost:9101 /tmp/run-before
node tools/visual-check/collect.mjs http://localhost:9102 /tmp/run-after
node tools/visual-check/diff.mjs /tmp/run-before /tmp/run-after
```

A clean result ends with `TOTAL DIFFERENCES: 0`. Each run takes a few minutes
and writes a few hundred MB of screenshots, so put the output somewhere
temporary.

Expect some noise. Values that are equal but written differently still get
reported, for example `9999px` versus `3.35544e+07px` for a fully rounded
corner. Read what it prints rather than trusting the count.

## How the site deploys

Three things build from this repo:

1. **Test site** — `.github/workflows/build.yml` (Build Test Site) runs on
   every push to `main`, builds, and publishes to the `gh-pages` branch,
   which serves
   [test.dezudio.com](https://test.dezudio.com). A second run called
   `pages-build-deployment` appears in Actions right after it. That one is
   GitHub's own, not a file in this repo: GitHub Pages runs it whenever
   `gh-pages` changes, to publish the branch.
2. **Production** — `.github/workflows/deploy.yml` (Deploy Production Site)
   runs when a GitHub release is published and uploads `gh-pages` to
   GreenGeeks over FTP, serving
   [www.dezudio.com](https://www.dezudio.com). It clean-slates the target, so
   the whole site is replaced on every deploy.
3. **Netlify** — builds `main` and every pull request, giving
   [dezudio.netlify.app](https://dezudio.netlify.app) and a preview per PR.
   Build settings live in the Netlify UI; `netlify.toml` only pins Node.

The same build workflow also runs on every pull request, without the
publishing step, so a PR that doesn't compile fails before it's merged.

Production deploys only from a release, so merging to `main` is safe to do
freely — it updates the test site alone.

## Dependencies

Dependabot is configured in
[`.github/dependabot.yml`](.github/dependabot.yml): monthly npm and GitHub
Actions updates, each grouped into a single PR, with `react` and `react-dom`
grouped so they never upgrade separately. Security updates
arrive as they're published, independent of that schedule.

`npm audit` reports findings against Gatsby's build tooling that have no
upstream fix. None of that code is served to visitors — this is a static
site, and the build output is HTML, CSS, images and the site's own JavaScript.
Don't run `npm audit fix --force` chasing the number; it downgrades Gatsby's
plugins to unusable versions.

Note that `twin.macro` and Emotion were removed when the site moved to
Tailwind 4 — twin.macro never supported it. Styling is plain Tailwind classes
now, so don't reintroduce a CSS-in-JS library without a reason.
