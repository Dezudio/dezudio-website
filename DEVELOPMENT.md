# Running the site locally

Preview changes on your own computer before publishing them. To edit text
without any of this, see [README.md](README.md).

## Setup

Once per computer.

1. **GitHub Desktop**, from [desktop.github.com](https://desktop.github.com).
   Sign in, then **File > Clone repository** and pick
   `Dezudio/dezudio-website`. It clones into
   `Documents/GitHub/dezudio-website` unless you choose otherwise.

2. **Node**, the LTS version from [nodejs.org](https://nodejs.org). The
   `.nvmrc` file in the project holds the version this site needs, currently
   24, and the Node you install should start with that number.

3. **The site's parts.** In Terminal, `cd` to the project folder and run
   `npm ci`:

   ```
   cd ~/Documents/GitHub/dezudio-website
   npm ci
   ```

   It takes a few minutes and prints a lot. Warnings are fine.

## Working on the site

In Terminal, from the project folder:

```
npm run develop
```

Preview at [http://localhost:8000](http://localhost:8000), reloading as you
save. `Control` + `C` stops it.

Before starting work, **Fetch origin** and **Pull origin** in GitHub Desktop.
If `package.json` or `package-lock.json` changed, run `npm ci` again.

Before committing a code change, run these checks from the project folder:

```
npm run lint
npm run format:check
```

`npm run lint:fix` applies safe lint fixes. To reformat files, run
`npm run format`, then review the changes before committing. GitHub runs both
checks automatically on every pull request and push to `main`.

To publish, commit and push in GitHub Desktop. Your changes reach
[test.dezudio.com](https://test.dezudio.com) a few minutes later. The live
site only updates when someone publishes a release, so pushing is safe. The
release steps are in [README.md](README.md).

## Where things are

```
src/pages/        One file per page of the site
src/components/   Reusable pieces, grouped by the page that uses them
src/images/       Photos and logos
src/styles/       global.css, which holds the colours, fonts and sizes
```

Styling uses [Tailwind](https://tailwindcss.com/docs), so colours and spacing
are set with class names like `text-dezudiorange` and `pb-10` instead of a
separate stylesheet. Those names come from the `@theme` block at the top of
`src/styles/global.css`, which is also where you add a new colour or size.

The screen size names are custom to this site:

| Name | Applies from  |
| ---- | ------------- |
| `sm` | 320px         |
| `tb` | 640px, tablet |
| `md` | 1024px        |
| `lg` | 1920px        |
| `xl` | 2280px        |

So `pb-10 md:pb-20` means 10 normally, and 20 once the screen is 1024px or
wider.

Note: a component built on another one repeats all of its class names instead
of adding to them, on purpose. When you change one of those, check it at each
screen size.
