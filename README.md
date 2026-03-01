# Raghav Ji Agro Seeds

This repository contains the source code for the Raghav Ji Agro Seeds website — a small marketing/catalog site built with a modern React + Vite stack.

## What this project is

- A product catalog and marketing website for seed varieties.
- Uses local images stored in `src/data/product images` for product photos.
- Built for fast local development and easy deployment.

## Tech stack

- Framework: React (v18)
- Bundler / Dev server: Vite
- Language: TypeScript
- Styling: Tailwind CSS
- UI primitives: Radix UI components
- Icons: lucide-react
- Testing: Vitest + @testing-library/react

## Key files & folders

- `src/` — application source
	- `src/components/` — shared components (Footer, Navbar, ProductCard, etc.)
	- `src/pages/` — page components (Index, ProductDetail, NotFound)
	- `src/data/products.ts` — product definitions and image references
	- `src/data/product images/` — store your product images here (use sensible file names that match products)

- `index.html` — app entry HTML
- `vite.config.ts` — Vite configuration
- `package.json` — npm scripts and dependencies

## Local setup

From the project root (`ragavji`):

```bash
# install deps
npm install

# start dev server
npm run dev
# opens at http://localhost:8081/ (or the port Vite picks)

# run tests
npm run test

# build production bundle
npm run build
# preview the production build
npm run preview
```

## How product images are wired

Products are defined in `src/data/products.ts`. Each product has an `image` field that points to a local file using `new URL('./product images/<filename>', import.meta.url).href`.

To add or update a product image:

1. Place the image file into `src/data/product images/`.
2. Use a clear filename (for example `raghav 555.jpg` or `purvi-6012.jpg`).
3. Update the matching product's `image` field in `src/data/products.ts` to reference the filename.

Example:

```ts
image: new URL('./product images/purvi-6012.jpg', import.meta.url).href
```

## Notes

- The repository intentionally avoids third-party branding references.
- If you add new packages, run `npm install` and commit the updated `package.json` and `package-lock.json`.

If you want, I can also add a short CHANGELOG entry or deploy instructions for a static host (Netlify/Vercel).

