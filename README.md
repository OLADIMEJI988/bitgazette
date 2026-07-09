# The Bit Gazette — Crypto News Frontend

Production-ready React + Tailwind frontend for The Bit Gazette, fully driven
by the WordPress REST API. No content is hardcoded — every section fetches
from your WordPress site at runtime.

## Stack

- React 18 + Vite
- Tailwind CSS (theme driven by CSS variables in `src/index.css`)
- React Router 6
- Axios
- Lucide React icons
- Framer Motion (subtle entrance animation on the featured story)

## Getting started

```bash
npm install
npm run dev
```

The app expects Node.js 18+ and a package manager with internet access
(this environment could not run `npm install` itself, so dependencies are
declared in `package.json` but not downloaded — run the command above on
your machine).

## Configuring the WordPress source

Set your WordPress REST API base URL in `.env`:

```
VITE_WORDPRESS_API=https://thebitgazette.com/wp-json/wp/v2
```

Never hardcode the URL elsewhere — every service in `src/services/` reads
from this single Axios client (`src/services/wordpressApi.js`).

### Expected WordPress setup

The homepage sections map to these WordPress concepts. Adjust slugs in the
code if your site uses different taxonomy names:

| Section              | WordPress source                                   |
|----------------------|-----------------------------------------------------|
| Featured Story        | Sticky post (falls back to the latest post)        |
| Popular / Comments     | Posts ordered by `comment_count`                   |
| Latest                | Posts ordered by `date`                            |
| Trending              | Posts ordered by `comment_count`                   |
| Expert Analysis        | Category slug `expert-analysis`                    |
| Sponsored Articles     | Tag slug `sponsored`                               |
| Tech                  | Category slug `tech`                               |
| Opinion / Press Release / Bitcoin / Finance | Category slugs of the same name |

Optional ACF fields the app will pick up if present: `breaking_news`
(boolean), `sponsored` (boolean), `reading_time` (string), `comment_count`
(number, for sites that disable native WP comments).

## Project structure

```
src/
  assets/            Logo and static images
  components/        Shared UI building blocks
    ui/              Small atomic pieces (Button, Tag, Pagination, Loaders...)
  hooks/             useFetch, useMediaQuery
  pages/             Route-level views (lazy loaded)
  services/          All WordPress API calls — components never call Axios directly
  utils/             Post normalization, date formatting
```

## Design tokens

Colors, spacing, and type live as CSS variables in `src/index.css` and are
mapped into Tailwind via `tailwind.config.js`. Update the variables there to
re-theme the whole site without touching components.

## Notes

- Every list view has a skeleton loading state, an error state with retry,
  and an empty state — no blank screens.
- Images use `loading="lazy"` and fixed aspect ratios to avoid layout shift.
- Pages are code-split with `React.lazy` + `Suspense`.
- Routing: `/`, `/news`, `/category/:slug`, `/post/:slug`, `/search`,
  `/tag/:slug`, `/author/:slug`, `/about`, `/contact`, `/privacy`.
