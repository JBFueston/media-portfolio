# Visual Media Portfolio

A fast, responsive, and minimalist photo and video portfolio built with **Astro 5+**, **Tailwind CSS**, and **PhotoSwipe**. Hosted on **Vercel** with DNS managed through **Cloudflare**.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Features

* **Content Layer Integration:** Uses Astro’s `glob` loader and Zod schema validation for type-safe media management.
* **Automatic Image Optimization:** On-the-fly resizing, WebP conversion, and responsive srcset generation powered by `@astrojs/image` / Sharp.
* **Responsive Masonry Layout:** Clean column flow supporting portrait, landscape, and square aspect ratios natively.
* **Interactive Lightbox:** Full-resolution image modal powered by PhotoSwipe with touch support and smooth transition animations.
* **Media Filtering:** Client-side category switching (Photos, Videos, All) with zero page reloads.
* **Dark Mode Design:** Glassmorphic header and dark UI built with Tailwind CSS.

---

## Tech Stack

* **Framework:** [Astro](https://astro.build)
* **Styling:** [Tailwind CSS](https://tailwindcss.com)
* **Lightbox:** [PhotoSwipe](https://photoswipe.com)
* **Hosting:** [Vercel](https://vercel.com)
* **DNS & CDN:** [Cloudflare](https://cloudflare.com)

---

## Project Structure

```text
/
├── src/
│   ├── assets/              # Raw high-res photo assets (.jpg, .png, .webp)
│   ├── content/
│   │   └── gallery/         # Markdown content entries for photos & videos
│   ├── pages/
│   │   └── index.astro      # Main portfolio gallery & filtering UI
│   ├── styles/
│   │   └── global.css       # Tailwind CSS setup & global styles
│   └── content.config.ts    # Content Collection schemas & glob loaders
├── public/                  # Static assets (favicons, manifest)
└── astro.config.mjs         # Astro configuration