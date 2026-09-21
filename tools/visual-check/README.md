# visual-check

Compares two builds of the site element by element, to prove a change did not
alter the design. Written for the Tailwind 4 upgrade, worth reusing for any
change that touches styling broadly, like a dependency upgrade.

`collect.mjs` loads every page at one width inside each breakpoint and records
every element's computed styles and position, plus a full page screenshot. It
also captures the mobile menu open and each link hovered. `diff.mjs` compares
two of those runs.

Needs Chrome, set `CHROME_PATH` if it is not at `/usr/bin/google-chrome`, and
ImageMagick's `compare` for the pixel check.

```sh
# Build what you are comparing against
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
and writes a few hundred MB of screenshots, so keep the output in a temporary
folder.

Expect some noise. Values that are equal but written differently still get
reported, such as `9999px` against `3.35544e+07px` for a fully rounded corner.
Read what it prints rather than trusting the count.
