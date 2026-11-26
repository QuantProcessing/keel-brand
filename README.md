# Keel brand · hxskdigi.tech

The website of 鴻驍數科有限公司 / HongXiao DigiTech Co., Limited and the public brand
assets of the Keel products. Served by Cloudflare Pages at <https://hxskdigi.tech>
(繁體中文 `/`, English `/en/`).

Plain static files: no build step, no backend. The trial form opens the visitor's
mail client addressed to contact@hxskdigi.tech; the site stores nothing.

| Path | What |
|---|---|
| `index.html`, `en/index.html` | The landing page, 繁體中文 and English. Keep the two in step |
| `404.html` | Not-found page |
| `assets/site.css`, `assets/site.js` | Styles and the small script (menu, copy email, trial form) |
| `assets/fonts/` | Inter Variable (latin, latin-ext), self-hosted |
| `_headers` | Cloudflare Pages response headers: security headers and CSP for the site; CORS and caching for `logo/` |
| `robots.txt`, `sitemap.xml` | For search engines |
| `logo/` | The marks (below). Other pages load these paths — do not move or rename them |

## Marks

| File | Use |
|---|---|
| `logo/keel.svg`, `logo/keel-256.png` | Keel — the family mark: a hull's cross-section narrowing into a keel. Site favicon, shared sign-in page |
| `logo/keeluni.svg` | KeelUni — one-stop trading terminal (CEX / DEX) |
| `logo/keelcue.svg` | KeelCue — on-chain signal trading |
| `logo/keelsonar.svg` | KeelSonar — multi-source signal discovery (Chrome side panel) |

All marks share one tile: 28 × 28 in a 32 viewBox, radius 8, `#50d2c1`, the figure cut out
as a mask so it reads on any background. Background `#1b2429`, text `#f6fefd`.

## Site design

Tokens are the Keel family's (KeelUni / KeelCue `DESIGN.md`): canvas `#1b2429`, panels
`#0f1a1f`, accent `#50d2c1` for actions and product names only, Inter. No gradients,
shadows or illustrations. Products are always listed KeelUni → KeelCue → KeelSonar.

Wording: the company is described by its products only (no industry label); say
"assets", not "digital assets"; KeelCue is "on-chain signal trading and automated position
management" — no feature names beyond that.

The CSP allows only same-origin scripts and styles: no inline `<script>` or `style=""`.

## Preview and deploy

```sh
python3 -m http.server 8787      # then open http://127.0.0.1:8787/
```

Cloudflare Pages is connected to `main` of this repository: framework preset *None*,
build command empty, build output directory `/`. A push to `main` goes live; other
branches get preview URLs.

Nothing here is secret. Do not add anything that is — every file in the repository is
published.
