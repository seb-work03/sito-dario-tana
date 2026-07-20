<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# DarioTana.it — Project Base

## What This Is
Personal site of Dario Tana, built on Next.js + Payload CMS, with a website-cloning workflow available via `/clone-website <url1> [<url2> ...]` for reverse-engineering reference sites into components.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **CMS:** Payload CMS (Postgres adapter, Lexical rich text)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React
- **Styling:** Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match a target's spacing, colors, typography exactly when cloning
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
app/                # Next.js routes (root-level, no src/)
  (site)/           # Public site routes
  (payload)/        # Payload admin routes
components/         # React components
  ui/               # shadcn/ui primitives
lib/
  utils.ts          # cn() utility (shadcn) + site helpers
payload/            # Payload CMS collections/config
public/
  images/           # Downloaded images from cloned reference sites
  videos/           # Downloaded videos from cloned reference sites
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download / agent-config sync scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.
- This project does NOT use a `src/` directory — routes and components live at the repository root. Don't recreate a `src/` layout.
- Payload CMS wiring in `next.config.ts` (`withPayload`) is required — never replace `next.config.ts` wholesale from a template.

@docs/research/INSPECTION_GUIDE.md
