# SS to Canvas — DDEV Addon

A DDEV addon that adds a Storybook environment and a set of Claude Code agents and skills to help you mirror your [Acquia Site Studio](https://www.acquia.com/products/drupal-cloud/site-studio) components as React/Storybook components — so designers and developers can work alongside editors using the same component vocabulary.

## What it does

- Spins up a **Storybook dev server** as a DDEV service, accessible at `https://storybook.<yoursite>.ddev.site`
- Installs **Claude Code agents** that extract Site Studio component definitions and node canvas data from your live Drupal site via Drush, then write the matching Storybook files
- Installs a **Claude Code skill** (`site-studio-to-storybook`) that guides Claude through the full workflow — from pulling SS configuration and building a styled Header/Footer, to visual QA of every component and page story

## Installation

```bash
ddev get FreelyGive/ss-to-canvas
ddev restart
```

Storybook will be available at `https://storybook.<yoursite>.ddev.site` after restart.

> **Requirements:** DDEV ≥ 1.23, Node.js available inside the DDEV web container, an Acquia Site Studio installation on the Drupal site.

## Agents

Four Claude Code agents are installed into `.claude/agents/`. They are designed to be chained together or run in parallel by an orchestrating Claude session.

| Agent | Role | Model |
|-------|------|-------|
| **ss-field-extractor** | Runs Drush against your Drupal site to extract one component's field definitions, options, and defaults. Returns structured JSON. Read-only — no file writes. | Haiku |
| **ss-node-extractor** | Reads a Drupal node's Site Studio canvas and returns the exact prop values configured by the editor. Read-only. | Haiku |
| **ss-component-writer** | Takes the JSON from `ss-field-extractor` and writes the `index.jsx` and `.stories.tsx` files for one component. Works in an isolated git worktree. | Sonnet |
| **ss-page-story-writer** | Takes the JSON from `ss-node-extractor` and writes a pixel-faithful `Pages/*.stories.tsx` story. Works in an isolated git worktree. | Sonnet |

The Haiku agents are cheap and fast for pure data extraction; the Sonnet agents handle the reasoning-heavy code authoring.

## Skill

The `site-studio-to-storybook` skill is the master workflow guide. When invoked in a Claude Code session, it walks through four phases:

1. **Pull SS configuration** — colors, fonts, base styles, custom styles, breakpoints, and menu templates. Builds a styled Header and Footer from the real rendered site, verified visually before anything else proceeds.
2. **Extract component field maps** — one `ss-field-extractor` run per component, all in parallel.
3. **Write components and page stories** — `ss-component-writer` and `ss-page-story-writer` agents work in isolated worktrees, then changes are merged back.
4. **Visual QA** — agent-browser screenshots of every component story and page story are compared side-by-side against their live Drupal equivalents. Discrepancies are fixed before the work is reported complete.

The skill enforces strict naming rules: story titles mirror the SS admin UI category/label hierarchy, prop names are the camelCase of the exact SS form field labels, and every SS component must either have a Storybook story or an explicit exclusion reason.

## Removal

```bash
ddev get --remove FreelyGive/ss-to-canvas
```

This removes `docker-compose.storybook.yaml` and the Traefik config. The `storybook/` directory and `.claude/` agents/skills are left in place so you don't lose work.
