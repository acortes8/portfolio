# alejandrocortes.dev: project brief

Personal portfolio site for Alejandro Cortes. Static Astro site (TypeScript, strict), deployed to Cloudflare Pages at `alejandrocortes.dev`. Live demos of other projects run on subdomains elsewhere; this site only links to them.

## How we work

Alejandro is a recent CS graduate learning TypeScript, so keep code readable and explain non-obvious choices briefly. Work in small steps and check in between them. Do not add dependencies, a CSS framework, or a client-side framework without asking. Plain Astro components and scoped CSS are the default.

## Design reference

`design/` holds four mockups (`Main`, `Projects`, `Project`, `NotFound`, each `.dc.html`). They are visual references only: they use a custom runtime, so do not copy their markup or scripts. Rebuild each page as Astro components using the tokens below. All text in square brackets is placeholder copy, not final.

### Tokens

| Token | Value |
|---|---|
| Background | `#0E1116` |
| Card surface | `#161A22` |
| Card border | `#262C38` |
| Pill / button outline | `#3A4252` |
| Text | `#E8EAED` |
| Muted text | `#A0A8B5` |
| Accent (default) | `#7DD3A8` (alternates: `#8AB4FF`, `#FFB86B`, `#F28BB3`). Make it one CSS variable. |

Fonts (Google Fonts): Space Grotesk 500/700 for headings, Inter 400/500/600 for body, JetBrains Mono 400/500 for labels, pills and the wordmark.

Layout: content max-width 1120px, 24px side gutters, centered. Must work at phone width (stack, wrap, no horizontal scroll). Interactive targets at least 44px tall. Visible focus outlines. Body text and muted text must keep readable contrast.

## Pages

- `/` landing page: nav, hero (name, intro, two buttons), featured projects (3 to 6 cards), About with a "Currently learning" row (TypeScript, C), "Get in touch" block (email, GitHub, LinkedIn, Resume), footer.
- `/projects` all projects as a compact list grouped by `kind`.
- `/projects/[slug]` one project: header with demo and source buttons, screenshot, side card (kind, completed, stack), then the write-up sections.
- `404` page with links home and to `/projects`.

Shared pieces to extract as components: layout, nav, footer, project card, project list row, pill.

## Content

Projects are Markdown files in a content collection (`src/content/projects/`). Validate front matter with a schema. Fields are in `project-template.md`: `title`, `summary`, `kind` (app | site | script | game | school), `featured`, `stack`, `demoUrl`, `repoUrl`, `screenshot`, `date`. Everything on the landing page, list, and project pages should be generated from these files, so adding a project means adding one file.

## Facts

- Contact email: `hello@alejandrocortes.dev` (forwarding only, no sending).
- GitHub, LinkedIn, and resume URLs are not decided yet: leave clearly marked placeholders.
- Grouping of kinds and the featured set are not final.

## Out of scope for now

No blog, no contact form, no skill bars, no analytics.
