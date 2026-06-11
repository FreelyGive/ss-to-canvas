---
name: site-studio-to-storybook
description:
  "Rules and workflow for keeping Storybook components in sync with Site Studio (Acquia Cohesion) component definitions on any Drupal site."
---

## Purpose

Keep Storybook components in 1:1 correspondence with Site Studio components so
that names, props, and structure are directly comparable between the two systems.

This skill is project-agnostic. All project-specific values (URLs, component
names, brand colours, machine name lists) are supplied at invocation time.

**Before starting**, establish three project variables used throughout:
- `SITE_URL` — the local development URL, e.g. `https://mysite.ddev.site`
- `STORYBOOK_URL` — the Storybook URL. When Storybook runs as a DDEV service
  behind Traefik (see `.ddev/docker-compose.storybook.yaml`), this is
  `https://storybook.<sitename>.ddev.site` (e.g. `https://storybook.mysite.ddev.site`)
  — use it instead of `http://localhost:6006` everywhere, including curl checks
  and agent-browser screenshots. Use `curl -k` / accept self-signed certs.
- `DRUSH` — the drush command for your environment, e.g. `ddev drush` or `drush`

---

## MANDATORY execution order — do not reorder, do not skip

A previous run skipped Phase 0 and Phase 4 entirely and produced a 5%-quality
result: unstyled header/footer, missing menu pages, invented styles, and no
visual verification. Every phase below is a **hard gate** — do not start the
next phase until the current one passes its checklist.

| Phase | What | Gate to pass before next phase |
|-------|------|--------------------------------|
| **0** | Pull ALL SS configuration: colors, fonts, base styles, **custom styles**, website settings, master/menu templates, main + footer menus. Build **styled** Header and Footer from the real rendered site. | Header and Footer screenshots visually match the live site (agent-browser comparison, see Phase 0g). |
| **1** | Extract component field maps (Drush). | Every SS component has a field map or a documented exclusion. |
| **2** | Write components + component stories. | Field count audit passes; clean build. |
| **3** | Extract node canvas data and write page stories for **every main-menu and footer-menu page**. | Menu-coverage diff passes (see "Page coverage gate"). |
| **4** | **Visual QA with agent-browser** — screenshot every component story and every page story against the live Drupal equivalent; fix discrepancies; re-screenshot. | Every page story's side-by-side comparison reviewed and discrepancies fixed. Nothing is "done" until this passes. |

**A component or page story that has not been visually compared against the
live Drupal site with agent-browser is not finished.** Reporting completion
without Phase 4 is a failure, regardless of build status.

---

## Naming rules

### Story title = SS category group / SS label

The `title` in every `.stories.tsx` file must use the **exact Site Studio label**
(from `$e->label()`), nested under its SS category group, prefixed with `Components/`:

```
title: 'Components/<SS category label>/<SS component label>'
```

Example: if the SS category is `Feature sections` and the label is `Hero`, the story
title is `Components/Feature sections/Hero`.

**Always check SS categories first** — get both the category list and the component→category
mapping before writing any story title:

```bash
# List all SS categories
$DRUSH ev "
\$storage = \Drupal::service('entity_type.manager')->getStorage('cohesion_component_category');
\$cats = \$storage->loadMultiple(\$storage->getQuery()->accessCheck(FALSE)->execute());
foreach (\$cats as \$c) { echo \$c->id() . ' | ' . \$c->label() . PHP_EOL; }
" 2>/dev/null | sort

# List all SS components with their category
$DRUSH ev "
\$storage = \Drupal::service('entity_type.manager')->getStorage('cohesion_component');
\$entities = \$storage->loadMultiple(\$storage->getQuery()->accessCheck(FALSE)->execute());
foreach (\$entities as \$e) {
  \$cat = \$e->get('category')->entity;
  echo (\$cat ? \$cat->label() : '(uncategorised)') . ' | ' . \$e->id() . ' | ' . \$e->label() . PHP_EOL;
}
" 2>/dev/null | sort
```

If a component has no assigned category in the DB but categories exist in the system,
use the category list to determine the logical group based on component purpose.
**The Storybook grouping must mirror the SS admin UI grouping** so editors can find
components in the same order in both tools.

**Audit completeness**: after building any batch of components, always verify every SS
component has a corresponding Storybook story. Run both lists and diff them:

```bash
# SS component list
$DRUSH ev "
\$entities = \Drupal::service('entity_type.manager')->getStorage('cohesion_component')
  ->loadMultiple(\Drupal::service('entity_type.manager')->getStorage('cohesion_component')
  ->getQuery()->accessCheck(FALSE)->execute());
foreach (\$entities as \$e) { echo \$e->id() . ' | ' . \$e->label() . PHP_EOL; }
" 2>/dev/null | sort

# Storybook story titles
grep -rh "title: 'Components/" storybook/src/stories/components/*.stories.tsx | sort
```

Compare both lists. Every SS component must have a story **or** be explicitly listed
in the "Storybook-only / SS-only components" table below with a reason why it's excluded.
Do not silently skip components.

### Component directory = Site Studio machine name (prefix stripped)

The directory under `storybook/src/components/` is the SS machine name with its
prefix removed and lowercased. The prefix is usually `cpt_` but verify for your
project:

| Site Studio machine name | Storybook directory |
|--------------------------|---------------------|
| `cpt_hero_image`         | `hero_image`        |
| `cpt_text_and_image`     | `text_and_image`    |

**Exception**: if the stripped name clashes with an HTML element or reserved
word (e.g. `link`, `text`), append a disambiguator (e.g. `link_button`).

### Prop names = Site Studio form field labels (camelCase)

**Hard rule: never invent prop names. Every prop must be the camelCase of the
exact label string shown in the SS form editor UI (i.e. `$node['settings']['title']`
from `json_values`).** A paraphrase or synonym is wrong even if it sounds more
natural. Examples of violations:

| SS label (correct source) | Wrong (invented) | Correct prop |
|---------------------------|------------------|--------------|
| Text vertical alignment | `contentVerticalAlign` | `textVerticalAlignment` |
| Background colour | `bgColor` | `backgroundColour` |
| Show on mobile | `mobileVisible` | `showOnMobile` |

Run the field-extraction command below **before writing any component** and use
the output verbatim — do not rename, abbreviate, or rephrase:

```bash
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('cpt_MY_COMPONENT');
\$json = json_decode(\$e->get('json_values'), true);
function extract_fields(\$nodes) {
  foreach (\$nodes as \$node) {
    if (isset(\$node['type']) && \$node['type'] === 'form-field') {
      echo \$node['uuid'] . ' | ' . (\$node['settings']['title'] ?? \$node['title'] ?? '') . ' | ' . \$node['uid'] . PHP_EOL;
    }
    if (!empty(\$node['children'])) extract_fields(\$node['children']);
  }
}
extract_fields(\$json['componentForm']);
" 2>/dev/null
```

#### Prop name audit (run after writing every component)

After writing a component, cross-check every prop name in the JSX/TSX against
the SS field titles extracted above. The audit command:

```bash
# 1. Extract SS field titles for a component (produces the canonical list)
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('cpt_MY_COMPONENT');
\$json = json_decode(\$e->get('json_values'), true);
function extract_fields(\$nodes) {
  foreach (\$nodes as \$node) {
    if (isset(\$node['type']) && \$node['type'] === 'form-field') {
      \$label = \$node['settings']['title'] ?? \$node['title'] ?? '';
      // Convert label → camelCase
      \$camel = lcfirst(str_replace(' ', '', ucwords(strtolower(\$label))));
      echo \$camel . ' (from: ' . \$label . ')' . PHP_EOL;
    }
    if (!empty(\$node['children'])) extract_fields(\$node['children']);
  }
}
extract_fields(\$json['componentForm']);
" 2>/dev/null

# 2. List props used in the Storybook component file
grep -oE "([a-z][a-zA-Z]+)\s*[=?:]" storybook/src/components/MY_COMPONENT/index.jsx \
  | grep -v "className\|onClick\|onChange\|onNavigate\|href\|key\|src\|alt\|style\|ref\|aria" \
  | sort -u
```

Compare the two lists. Any prop in the Storybook file that does **not** appear
in the SS camelCase list is a naming violation and must be renamed before the
component is considered done.

### Storybook-only components (no SS equivalent)

Some Storybook components are layout helpers or compositions with no direct SS
counterpart. Group these under sub-folders:

- `Components/Layout/Section`
- `Components/Layout/Spacer`
- `Components/Layout/Card Container`
- `Components/Header/Header`
- `Components/Header/Main Navigation`
- `Components/Assets/Image`
- `Components/Assets/Video`

**Project-specific custom compositions** with no SS counterpart should be
documented in a project-local table (not in this skill file). Add an entry for
each composition explaining which SS components it approximates and why there is
no single SS machine name for it.

### SS-only components (no Storybook story needed)

Some SS components intentionally have no Storybook counterpart. Document them
in the project's skill notes with the reason, so the completeness audit knows to
skip them. Common examples:

| SS machine name pattern | Reason excluded |
|-------------------------|-----------------|
| `cpt_drupal_blocks` | Renders arbitrary Drupal block regions — not reproducible in Storybook without a Drupal backend |
| `cpt_site_header` | Rendered via the `Header` Storybook component instead |
| `cpt_site_footer` | Rendered via the `Footer` Storybook component instead |
| Dev/test artifacts | Not real content components — skip and document |

After the completeness audit, record any remaining open questions in the
project's own notes (not here), so this skill file stays project-agnostic.

Project-specific custom compositions that predate naming discipline should be
renamed only when rebuilt from SS.

---

## Pre-flight checks — before building any components, stories, or pages

Before starting any component or page work, verify the Storybook dev server and Drupal site are both accessible:

```bash
# 1. Confirm the Storybook dev server is running and reachable
curl -sk -o /dev/null -w "%{http_code}" $STORYBOOK_URL
# Expected: 200

# 2. Confirm the Drupal site is up (DDEV or remote)
curl -s -o /dev/null -w "%{http_code}" $SITE_URL
# Expected: 200

# 3. Confirm Drush can reach Drupal
$DRUSH status --fields=drupal-version 2>/dev/null
```

If Storybook is not running, start it before writing stories. If Drupal/DDEV is down, start it before extracting any field or page data. Do not proceed with stubs or guesses — always pull real data from a live Drupal instance.

---

## Current component map

Build this table for your project by running the label-listing Drush command
above, then filling in the Storybook column:

| SS machine name | SS label | Story title |
|-----------------|----------|-------------|
| *(run Drush command)* | *(from label)* | `Components/<label>` |

> **Merged components**: when SS has separate variants of the same concept
> (e.g. horizontal/vertical tabs), use a single Storybook component with an
> `orientation` or `variant` prop. The story title uses the shared base label.

---

## Phase 0 — Pull ALL SS configuration BEFORE any component work

**This phase is mandatory and comes first.** Do it once per project setup, and
revisit whenever SS website settings change. Skipping it means every component
is styled by guesswork instead of by the real SS configuration.

SS has **six** global configuration layers that Storybook must mirror so
components render correctly without the Drupal theme loaded:

1. **Color palette** (`cohesion_color` entities) — the SS `$coh-color-*` variables
2. **Font library** (`cohesion_font_library` entities) — `@import` URLs for web fonts
3. **Base styles** (`cohesion_base_styles` entities) — element-level rules (h1–h6, p, body, a, button)
4. **Custom styles** (`cohesion_custom_style` entities) — every `coh-style-*` class (buttons, text colors, padding helpers). These are the values that appear in component select options; their real CSS lives in the compiled stylesheets.
5. **Website settings** (`cohesion_website_settings` entities) — breakpoints, max page width, responsive grid settings
6. **Templates** (`cohesion_master_templates`, `cohesion_menu_templates`) — page shell layout and menu markup/styling

### Step G1 — Pull the color palette

```bash
$DRUSH ev "
\$ids = \Drupal::entityTypeManager()->getStorage('cohesion_color')->getQuery()->accessCheck(FALSE)->execute();
\$palette = \Drupal::entityTypeManager()->getStorage('cohesion_color')->loadMultiple(\$ids);
uasort(\$palette, fn(\$a, \$b) => (\$a->toArray()['weight'] ?? 99) <=> (\$b->toArray()['weight'] ?? 99));
foreach (\$palette as \$p) {
  \$j = json_decode(\$p->toArray()['json_values'], true);
  \$hex = \$j['value']['value']['hex'] ?? '?';
  \$var = \$j['variable'] ?? '';
  \$tags = array_column(\$j['tags'] ?? [], 'label');
  echo \$p->id() . ' | ' . \$p->label() . ' | ' . \$hex . ' | var=' . \$var . ' | tags=' . implode(',', \$tags) . PHP_EOL;
}
" 2>/dev/null
```

**Important:** `get('json_values')->value` returns empty for color entities — always use
`toArray()['json_values']` to read the JSON.

Map each color to a `--color-<project>-<slug>` CSS custom property inside `@theme {}` in
`src/components/global.css`. Group by tag: Primary → Secondary → Tints → Grays.
Add a comment showing the SS `$coh-color-*` variable name for each entry.

### Step G2 — Pull font library and base styles

```bash
# Font libraries
$DRUSH ev "
\$ids = \Drupal::entityTypeManager()->getStorage('cohesion_font_library')->getQuery()->accessCheck(FALSE)->execute();
foreach (\Drupal::entityTypeManager()->getStorage('cohesion_font_library')->loadMultiple(\$ids) as \$f) {
  \$j = json_decode(\$f->toArray()['json_values'], true);
  echo \$f->label() . ' | type=' . \$j['type'] . ' | url=' . \$j['url'] . PHP_EOL;
}
" 2>/dev/null

# Base styles typography
$DRUSH ev "
\$ids = \Drupal::entityTypeManager()->getStorage('cohesion_base_styles')->getQuery()->accessCheck(FALSE)->execute();
\$entities = \Drupal::entityTypeManager()->getStorage('cohesion_base_styles')->loadMultiple(\$ids);
foreach (['heading_1','heading_2','heading_3','heading_4','heading_5','heading_6','paragraph','body'] as \$id) {
  if (!isset(\$entities[\$id])) continue;
  \$j = json_decode(\$entities[\$id]->toArray()['json_values'], true);
  \$xl = \$j['styles']['styles']['xl'] ?? [];
  echo '=== ' . \$id . ' ===' . PHP_EOL;
  foreach (\$xl as \$prop => \$val) {
    if (isset(\$val['value'])) echo '  ' . \$prop . ': ' . (is_array(\$val['value']) ? json_encode(\$val['value']) : \$val['value']) . PHP_EOL;
  }
}
" 2>/dev/null
```

Write font `@import` URLs to `src/global.css` (above `@import "./components/global.css"`),
and write element rules to `src/components/global.css` as plain CSS after the `@theme {}` block.

### Step G3 — Update Storybook backgrounds

Replace the generic backgrounds in `.storybook/preview.tsx` with the project's actual SS
color palette so the toolbar shows brand-accurate options. Use all tint and primary
colors from the palette — these are the backgrounds editors actually place on pages.

### Step G4 — Verify fonts load

Fonts from `cohesion_font_library` are Typekit/Google `@import` URLs. Add them to
`src/global.css` so they load in Storybook. Reference them in `@theme` via
`--font-<name>` custom properties, then use `font-family: var(--font-<name>)` in
component CSS. Never hardcode font stack strings in component files.

### Step G5 — Pull custom styles and their REAL compiled CSS

Component select options reference `coh-style-*` classes (e.g.
`coh-style-primary-button-dark-blue`, `coh-style-padding-top-bottom-large`).
**Never invent the CSS for these classes** — extract the real rules from the
site's compiled stylesheets.

```bash
# 1. List all SS custom styles (id | label | class)
$DRUSH ev "
\$storage = \Drupal::entityTypeManager()->getStorage('cohesion_custom_style');
\$ids = \$storage->getQuery()->accessCheck(FALSE)->execute();
foreach (\$storage->loadMultiple(\$ids) as \$e) {
  \$a = \$e->toArray();
  echo \$e->id() . ' | ' . \$e->label() . ' | ' . (\$a['class_name'] ?? '') . ' | type=' . (\$a['custom_style_type'] ?? '') . PHP_EOL;
}
" 2>/dev/null | sort

# 2. Download the compiled stylesheets once into a scratch dir
mkdir -p /tmp/ss-css
curl -sk $SITE_URL/ | grep -oE 'href="[^"]*\.css[^"]*"' | sed 's/href="//;s/"$//' | sort -u
# Download each cohesion/theme stylesheet listed:
curl -sk "<stylesheet-url>" -o /tmp/ss-css/<name>.css

# 3. Extract the real CSS for any coh-style-* class before writing its lookup-map entry
grep -o '\.coh-style-primary-button-dark-blue[^{]*{[^}]*}' /tmp/ss-css/*.css
```

When a component's lookup map translates an SS class to Tailwind (button
styles, padding helpers, text colors), the Tailwind utilities must reproduce
the extracted CSS — same colors, padding, font, letter-spacing, hover state.
Keep `/tmp/ss-css/` around for the whole session; every component writer
should grep it rather than guessing.

### Step G6 — Pull website settings (breakpoints, max width, grid)

```bash
$DRUSH ev "
\$storage = \Drupal::entityTypeManager()->getStorage('cohesion_website_settings');
\$ids = \$storage->getQuery()->accessCheck(FALSE)->execute();
foreach (\$storage->loadMultiple(\$ids) as \$e) {
  echo '=== ' . \$e->id() . ' | ' . \$e->label() . ' ===' . PHP_EOL;
  echo \$e->toArray()['json_values'] . PHP_EOL;
}
" 2>/dev/null
```

Use the max page width for the boxed-layout container (`max-w-*` on layout
components) and the breakpoints for any responsive lookup maps. Do not assume
Tailwind's defaults match the SS grid.

### Step G7 — Build STYLED Header and Footer from the real site (gate for Phase 0)

The Header and Footer appear on every page story, so they must be pixel-faithful
**before** any page work starts. A previous run shipped an unstyled footer menu
and no real main menu — that is what this step prevents.

1. **Menu structure** — pull main + footer menus from Drupal (command in the
   "Which pages to build stories for" section below). Use labels, URLs, order,
   and nesting verbatim.

2. **Menu templates** — list them so you know how each menu is rendered:

```bash
$DRUSH ev "
\$storage = \Drupal::entityTypeManager()->getStorage('cohesion_menu_templates');
\$ids = \$storage->getQuery()->accessCheck(FALSE)->execute();
foreach (\$storage->loadMultiple(\$ids) as \$e) { echo \$e->id() . ' | ' . \$e->label() . PHP_EOL; }
" 2>/dev/null
```

3. **Real rendered markup + styles** — the live page is the source of truth for
   header/footer styling. Extract the rendered HTML and match its classes
   against the compiled CSS from Step G5:

```bash
curl -sk $SITE_URL/ | sed -n '/<header/,/<\/header>/p' > /tmp/ss-css/header.html
curl -sk $SITE_URL/ | sed -n '/<footer/,/<\/footer>/p' > /tmp/ss-css/footer.html
```

   Reproduce in the Storybook Header/Footer: same background colors, font
   sizes, casing (uppercase nav?), spacing, column structure, hover states,
   dropdown/flyout behaviour for nested menu items, and the real logo.

4. **Visual gate** — screenshot both and compare before moving on:

```bash
mkdir -p /tmp/qa
agent-browser open $SITE_URL/
agent-browser wait 2000
agent-browser screenshot /tmp/qa/live-home.png --full-page

agent-browser open "$STORYBOOK_URL/iframe.html?id=<header-story-id>&viewMode=story"
agent-browser wait 1000
agent-browser screenshot /tmp/qa/sb-header.png
```

   Read both screenshots and compare the header and footer regions. Fix every
   discrepancy (fonts, colors, spacing, missing menu items, missing dropdowns)
   and re-screenshot. **Phase 0 is not complete until they match.**

---

## Workflow for building or auditing a component from SS

Do not skip steps — experience shows that relying only on field titles misses
options, defaults, and separate color controls that exist in the model.

### Step 1 — Get the form tree with all field options and defaults

This is the most important command. It reveals every prop, all select options,
and the default value. Run it before writing any code.

```bash
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('cpt_MY_COMPONENT');
echo 'Label: ' . \$e->label() . PHP_EOL . PHP_EOL;
\$json = json_decode(\$e->get('json_values'), true);
\$model = \$json['model'];

function print_form(\$nodes, \$model, \$depth = 0) {
  foreach (\$nodes as \$node) {
    \$indent = str_repeat('  ', \$depth);
    \$type = \$node['type'] ?? '';
    \$uid = \$node['uid'] ?? '';
    \$uuid = \$node['uuid'] ?? '';
    \$settingsTitle = \$node['settings']['title'] ?? \$node['title'] ?? '';
    if (\$type === 'form-field') {
      \$m = \$uuid && isset(\$model[\$uuid]) ? \$model[\$uuid] : null;
      \$extra = '';
      if (\$m !== null) {
        if (isset(\$m['settings']['options'])) {
          \$opts = array_map(fn(\$o) => \$o['label'] . '=' . \$o['value'], \$m['settings']['options']);
          \$def = \$m['model']['value'] ?? '';
          \$extra = '[' . implode(', ', \$opts) . '] default=' . \$def;
        } elseif (isset(\$m['settings']['title'])) {
          \$extra = '(label: ' . \$m['settings']['title'] . ')';
        } elseif (isset(\$m['settings']['videoBackgroundUrl'])) {
          \$extra = '(video url field)';
        } elseif (isset(\$m['settings']['content'])) {
          \$extra = '(content: ' . substr(\$m['settings']['content'], 0, 60) . ')';
        }
      }
      echo \$indent . '[' . \$uid . '] ' . \$settingsTitle . ' ' . \$extra . PHP_EOL;
    } else {
      echo \$indent . '--- ' . \$settingsTitle . ' (' . \$uid . ') ---' . PHP_EOL;
    }
    if (!empty(\$node['children'])) print_form(\$node['children'], \$model, \$depth + 1);
  }
}
print_form(\$json['componentForm'], \$model);
" 2>/dev/null
```

The output is grouped by **Tab → Section → Field**. The three tabs are always:
1. **Content** — text fields, links, media
2. **Layout & Style** — height, alignment, overlay, color selects
3. **Help** — documentation only, no props

### Step 2 — Extract the help text and use it as the Storybook description

The third tab in every SS component form is "Help". Extract it:

```bash
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('cpt_MY_COMPONENT');
\$json = json_decode(\$e->get('json_values'), true);
function find_help(\$nodes) {
  foreach (\$nodes as \$node) {
    if ((\$node['uid'] ?? '') === 'form-helptext') return \$node['uuid'] ?? '';
    if (!empty(\$node['children'])) { \$r = find_help(\$node['children']); if (\$r) return \$r; }
  }
  return '';
}
\$uuid = find_help(\$json['componentForm']);
if (\$uuid && isset(\$json['model'][\$uuid])) {
  echo \$json['model'][\$uuid]['settings']['options']['helpText'] ?? '(no help text)';
}
echo PHP_EOL;
" 2>/dev/null
```

Use the help text verbatim (lightly reformatted) as
`parameters.docs.description.component` in the story meta. If there is no help
text, write a one-sentence description based on the component label.

### Step 3 — Translate every field to a Storybook prop — no exceptions

**Every SS field becomes a prop.** Do not omit anything, including Drupal-
specific fields (page title token, breadcrumbs, drop zone toggle).

| Field type | Storybook translation |
|------------|-----------------------|
| `form-textarea` / `form-wysiwyg` / `form-input` | String prop |
| `form-select` with options | String prop; `control: 'select'`; use human-readable option **labels** as values, not SS CSS class values |
| `form-checkbox-toggle` "Use page title" | Boolean prop `usePageTitle` + companion `pageTitle` string prop |
| `form-input-hidden` (page title token) | String prop `pageTitle` |
| `form-checkbox-toggle` "Enable drop zone" | Boolean prop `enableDropZone` + `dropZoneContent` slot prop |
| `form-link` | String prop for the URL |
| `form-input` paired with a link | String prop for the label |
| `form-select` "Target" | String prop with enum `['_self', '_blank']` |
| `form-select` (button style, breadcrumb display, etc.) | String prop with all SS option labels as enum values |
| `form-video-embed` | String prop for the video URL |
| `form-colorpicker` | String prop (hex color) |
| `form-image` | Object prop `{ src, alt, width?, height? }` |
| `form-helptext` | Documentation only — use as story description (Step 2), not a prop |

**Critical**: SS often has **two separate color selects** — one for heading and
one for body text. These must be two distinct props (e.g. `headingTextColor` and
`textColor`), not merged into one.

**Drop zone**: when `enableDropZone` is true, render a named slot
(`dropZoneContent`) alongside the text column. In stories, pass a placeholder
`<div>` as the slot value.

**Drop zone content must be verified in the canvas model, not assumed.** A
`component-drop-zone` node appearing in the canvas tree is not evidence that it
contains anything. Always walk its `children` array in the extracted model data
to confirm before passing children to the component in a story. If the drop zone
has no children, set `enableDropZone={false}` and pass nothing. Content found
near a component in the canvas (e.g. a sibling container immediately after the
hero) must never be assumed to belong to that component's drop zone — trace each
component's UUID through the model independently.

### Step 4 — Seed Drupal-data fields with real database values

Any field that pulls live Drupal data (node title, internal links, taxonomy,
media) must have real examples from the database so Storybook controls show
meaningful values.

#### Page titles

```bash
$DRUSH ev "
\$nids = \Drupal::entityTypeManager()->getStorage('node')->getQuery()
  ->accessCheck(FALSE)->condition('status', 1)->range(0, 8)->execute();
\$nodes = \Drupal::entityTypeManager()->getStorage('node')->loadMultiple(\$nids);
foreach (\$nodes as \$n) { echo \$n->bundle() . ' | ' . \$n->getTitle() . PHP_EOL; }
" 2>/dev/null
```

#### Internal link paths

```bash
$DRUSH ev "
\$nids = \Drupal::entityTypeManager()->getStorage('node')->getQuery()
  ->accessCheck(FALSE)->condition('status', 1)->range(0, 10)->execute();
\$al = \Drupal::service('path_alias.manager');
foreach (\$nids as \$nid) { echo \$al->getAliasByPath('/node/' . \$nid) . PHP_EOL; }
" 2>/dev/null
```

For menu links:

```bash
$DRUSH ev "
\$links = \Drupal::entityTypeManager()->getStorage('menu_link_content')
  ->loadMultiple(\Drupal::entityTypeManager()->getStorage('menu_link_content')
  ->getQuery()->accessCheck(FALSE)->range(0, 10)->execute());
foreach (\$links as \$l) {
  \$uri = \$l->get('link')->first()->getValue()['uri'] ?? '';
  if (str_starts_with(\$uri, 'entity:node/')) {
    \$nid = str_replace('entity:node/', '', \$uri);
    \$uri = \Drupal::service('path_alias.manager')->getAliasByPath('/node/' . \$nid);
  }
  \$uri = str_replace('internal:', '', \$uri);
  echo \$l->getTitle() . ' | ' . \$uri . PHP_EOL;
}
" 2>/dev/null
```

#### Media / images

```bash
$DRUSH ev "
\$items = \Drupal::entityTypeManager()->getStorage('media')
  ->loadMultiple(\Drupal::entityTypeManager()->getStorage('media')
  ->getQuery()->accessCheck(FALSE)->condition('bundle', 'image')->range(0, 5)->execute());
foreach (\$items as \$m) {
  \$fid = \$m->get('field_media_image')->target_id;
  \$file = \Drupal::entityTypeManager()->getStorage('file')->load(\$fid);
  echo \$m->label() . ' | ' . (\$file ? \$file->createFileUrl(FALSE) : '') . PHP_EOL;
}
" 2>/dev/null
```

Use the results as default `args` in the story's `Default` export, and add a
comment listing real examples for any URL or title field.

### Step 5 — Map select option values to CSS/Tailwind

Each select option has a `value` that is the SS CSS class applied at runtime.
Translate each value to Tailwind in the component using a lookup map:

```js
// Example — adapt keys and values to your project's SS options
const heightMap = {
  'Fluid':  'min-h-[80vh]',
  'Tall':   'min-h-[640px]',
  'Short':  'min-h-[320px]',
};
```

Common SS CSS class → Tailwind translations:
```
left-align-content   → flex-row items-center justify-between
right-align-content  → flex-row-reverse items-center justify-between
center-align-content → flex-col items-center justify-center

image-no-overlay    → (no class)
image-dark-overlay  → bg-black/20
image-light-overlay → bg-white/30

coh-style-text-color-dark-background  → text-white   (prop value: "Light")
coh-style-text-color-light-background → text-gray-900 (prop value: "Dark")
```

**Critical — counterintuitive SS color class naming:** The SS class names are named
after the *background* they're designed for, not the text color they produce:

| SS class value | Human prop label | Actual text color | Use when background is |
|---|---|---|---|
| `coh-style-text-color-dark-background` | `"Light"` | white / light | dark or saturated (e.g. `#006699`, `#002633`) |
| `coh-style-text-color-light-background` | `"Dark"` | dark / near-black | light or pastel (e.g. `#edcbca`, `#aacec5`) |

When reading a canvas model value like `"d2da98a2-...": "coh-style-text-color-dark-background"`,
translate it as prop `headingTextColor="Light"` — **not** `"Dark"`. Getting this wrong
makes white-text heroes render with black text on dark backgrounds.

**Verification rule:** When a hero has a dark or saturated `backgroundColor` hex (roughly
luminance < 0.3), you should almost always see `headingTextColor="Light"` and `textColor="Light"`.
If you see `"Dark"` on a dark background, that is almost certainly wrong.

Always use lookup maps — never conditional class strings.

### Step 6 — Get the canvas structure (optional but useful for layout)

```bash
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('cpt_MY_COMPONENT');
\$json = json_decode(\$e->get('json_values'), true);
function print_canvas(\$nodes, \$depth = 0) {
  foreach (\$nodes as \$node) {
    echo str_repeat('  ', \$depth) . '[' . (\$node['uid'] ?? '') . '] ' . (\$node['title'] ?? '') . PHP_EOL;
    if (!empty(\$node['children'])) print_canvas(\$node['children'], \$depth + 1);
  }
}
print_canvas(\$json['canvas']);
" 2>/dev/null
```

Use the canvas tree as the DOM nesting blueprint for the React component.

### Step 7 — Write the component files

**`index.jsx`** — one lookup map per select prop, all CSS in Tailwind:

```jsx
import { cn } from 'drupal-canvas';

const heightMap = { Fluid: 'min-h-[80vh]', Tall: 'min-h-[640px]', Short: 'min-h-[320px]' };

const MyComponent = ({ height = 'Short', ... }) => (
  <div className={cn('relative flex flex-col w-full', heightMap[height])}>
    ...
  </div>
);

export default MyComponent;
```

When the component needs a full-height inner section, use `flex flex-col` on the
outer wrapper and `flex-1` on the inner content div — not `h-full`, which
requires an explicit parent height.

**`.stories.tsx`** — `title: 'Components/<SS label>'`, argTypes in **SS form
order** (Tab 1 top-to-bottom, then Tab 2 top-to-bottom). Mark the tab boundary
with a comment:

```tsx
argTypes: {
  // --- Tab 1: Content (SS form order) ---
  heading: { control: 'text', name: 'Heading' },
  text:    { control: 'text', name: 'Text' },
  // --- Tab 2: Layout & Style (SS form order) ---
  height:  { control: 'select', options: ['Fluid', 'Tall', 'Short'], name: 'Hero height' },
}
```

**Every argType must include a `name:` field** matching the exact SS field label.
This makes the Storybook controls panel show the same labels as the Drupal SS
editor.

**All image props in component stories must use `https://placehold.co/` defaults**
so every story renders without a real Drupal image. Choose sizes to match the
slot (hero backgrounds: `1600x900`, card images: `400x300`, avatars: `80x80`).
Use your project's brand colours in the placeholder URLs, or neutral greys.

```tsx
backgroundImage: {
  src: 'https://placehold.co/1600x900/333333/ffffff?text=Hero+Image',
  alt: 'Hero background',
},
```

Never use local dev URLs (`ddev.site`, `localhost`) in story args.

### Step 8 — Field count audit (quality control)

Count SS fields and Storybook argTypes — the numbers must match.

```bash
# SS field count
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')->getStorage('cohesion_component')->load('cpt_MY_COMPONENT');
\$data = json_decode(\$e->get('json_values'), TRUE);
\$form = \$data['componentForm'] ?? [];
\$tab1 = \$tab2 = 0; \$currentTab = 0; \$stack = \$form;
while (\$stack) {
  \$item = array_shift(\$stack);
  if (\$item['uid'] === 'form-tab-item') \$currentTab++;
  if (\$item['type'] === 'form-field') {
    if (\$currentTab <= 1) \$tab1++; else \$tab2++;
  }
  if (isset(\$item['children'])) \$stack = array_merge(\$item['children'], \$stack);
}
echo 'Tab 1: ' . \$tab1 . ', Tab 2: ' . \$tab2 . ', Total: ' . (\$tab1 + \$tab2) . PHP_EOL;
" 2>/dev/null

# Storybook argType count
grep -c "control:" storybook/src/stories/components/my_component.stories.tsx
```

**The rule:** SS total == Storybook argType count. `form-helptext` does not
count. Repeater sub-fields count as one prop (the array). `form-input-hidden`
conditional fields count individually.

### Step 9 — MANDATORY visual comparison with agent-browser

A component story is **not done** when the build passes — it is done when its
rendering has been visually compared against the same component on the live
Drupal site and discrepancies fixed. Skipping this step is how a previous run
ended at 5% quality.

1. Find a live page that uses the component (search node canvases for the
   `componentId`, or use a page already extracted in Phase 3).

2. Screenshot both sides:

```bash
mkdir -p /tmp/qa
# Live Drupal page containing the component
agent-browser open $SITE_URL/<page-using-component>
agent-browser wait 2000
agent-browser screenshot /tmp/qa/drupal--<component>.png --full-page

# Storybook story (iframe.html = no Storybook chrome)
agent-browser open "$STORYBOOK_URL/iframe.html?id=<story-id>&viewMode=story"
agent-browser wait 1000
agent-browser screenshot /tmp/qa/sb--<component>.png --full-page
```

   Story ID derivation: lowercase the title, replace `/` and spaces with `-`,
   append `--default` (e.g. `Components/Hero/Hero` → `components-hero-hero--default`).

3. **Read both screenshots** and compare: typography (family, size, weight,
   casing, letter-spacing), colors (text, background, buttons), spacing,
   alignment, image sizing, hover-visible affordances.

4. Fix every discrepancy in the component, re-screenshot, re-compare. Only
   then emit the report line.

If no live page uses the component, note that in the report line and compare
against the SS component preview (`$SITE_URL/admin/cohesion/components/components`)
instead.

### Step 10 — Emit the per-component report line

After each component is complete, print:

```
✅ cpt_my_component | My Component | SS fields: 12 | SB props: 12 | 👁 visual QA: pass | ⏱ 3m45s | 🪙 ~10k tokens
```

`👁 visual QA` is `pass` only after the Step 9 agent-browser comparison was
actually performed and discrepancies fixed. `not run` is a failure state, not
a neutral one.

At the end of a batch, print the session report:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SS → Storybook Session Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Components completed : N
Field match rate     : N/N (100%)
Visual QA            : N/N components compared, N/N pages compared
Menu page coverage   : N/N main-menu + footer-menu pages have stories
Total time           : Xm Ys
Total tokens (est.)  : ~Xk

Component breakdown:
  ✅ cpt_my_component | N/N fields | visual QA: pass | Xm Ys | ~Xk tokens
  ...
Page breakdown:
  ✅ Pages/My Page | /my-page-path | visual QA: pass
  ⛔ Pages excluded: <url> — <reason>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

In parallel agent mode, each sub-agent emits its own line; the orchestrator
collects them and prints the session report. Time = wall-clock from first agent
launch to last completion. Tokens = sum of `subagent_tokens` across all agents.

---

## Page stories — pixel-faithful reproduction of live Drupal pages

### Which pages to build stories for — always fetch from Drupal, never invent

Always build page stories for **every page linked from the main menu and footer menu first**. These are the highest-traffic, most editor-critical pages and must have stories before any other pages are tackled.

**Always fetch menu links directly from Drupal.** Never invent page titles, URLs, or link labels. The menu structure in Storybook must match the live Drupal site exactly — same labels, same URLs, same order. Copy everything verbatim from the output of this command:

```bash
$DRUSH ev "
\$menus = ['main', 'footer'];
foreach (\$menus as \$menu_name) {
  echo '=== ' . strtoupper(\$menu_name) . ' MENU ===' . PHP_EOL;
  \$links = \Drupal::entityTypeManager()->getStorage('menu_link_content')
    ->loadByProperties(['menu_name' => \$menu_name, 'enabled' => 1]);
  uasort(\$links, fn(\$a, \$b) => \$a->getWeight() <=> \$b->getWeight());
  foreach (\$links as \$l) {
    \$uri = \$l->get('link')->first()->getValue()['uri'] ?? '';
    if (str_starts_with(\$uri, 'entity:node/')) {
      \$nid = str_replace('entity:node/', '', \$uri);
      \$uri = \Drupal::service('path_alias.manager')->getAliasByPath('/node/' . \$nid);
    }
    \$uri = str_replace('internal:', '', \$uri);
    \$parent = \$l->getParentId();
    echo (\$parent ? '  ' : '') . \$l->getTitle() . ' | ' . \$uri . ' | weight=' . \$l->getWeight() . PHP_EOL;
  }
  echo PHP_EOL;
}
" 2>/dev/null
```

This gives you the **canonical** list — every link label, URL, and nesting level — sorted by weight. Use this output verbatim when:
- Building the Header component's nav links
- Building the Footer component's nav links
- Deciding which page stories to build first

Resolve each URL to a node ID, then extract canvas data from each node using `ss-node-extractor` before writing the story. Do not use placeholder content for menu pages.

### Page coverage gate — every menu page gets a story, verified by diff

Building "some" menu pages is not acceptable. Before reporting page work as
done, diff the menu list against the page stories that actually exist:

```bash
# Left side: every URL in main + footer menus (from the Drush command above)
# Right side: page stories present
grep -rh "title: 'Pages/" storybook/src/stories/pages/*.stories.tsx | sort
```

Every main-menu and footer-menu URL must map to a page story, **or** appear in
an explicit exclusion list in the session report with a reason (e.g. "external
URL", "pure embeddable HTML blob — no SS components"). A menu page silently
missing a story fails the gate. Pages that are HTML blobs still get a story if
they are linked from the menu — reproduce the blob content verbatim.

**Page stories must be exact reproductions of the live Drupal page.** Use the
same text, headings, images, layouts, colors, and component order as configured
in the actual node. Do not use placeholder content or placeholder images in page
stories. A side-by-side comparison of the story and the live page should look
identical.

### Hard rules for page stories

- **Every component on the live page must be present**, in the same order
- **Every prop value must match** what is configured in the Drupal node's SS canvas
- **Images must use real local dev URLs** (`$SITE_URL/sites/default/files/...`) — not `placehold.co`
- **Heading text must match exactly** — copy from the Drupal node, do not paraphrase
- **Layout options must match exactly** — use the human-readable SS label, not the CSS value
- **Background colours must match exactly** — every layout section with a background colour set in SS must have that colour passed as `backgroundColor` to `RowForColumns`. Missing a background colour is a visible, first-glance discrepancy. Always audit this explicitly (see below).
- **Component stories** (`storybook/src/stories/components/`) use `placehold.co` placeholder images — they demonstrate the component in isolation, not a real page
- **Page stories** (`storybook/src/stories/pages/`) use real Drupal content: real images from `$SITE_URL/sites/default/files/...`, real headings, real text, real background colours — never `placehold.co`

### Page-level quality control — MANDATORY agent-browser visual comparison

A page story is **not finished when it builds** — it is finished when its
full-page screenshot has been compared side-by-side against the live Drupal
page and every discrepancy fixed. This is a hard gate for every page story,
no exceptions.

```bash
mkdir -p /tmp/qa

# Live Drupal page
agent-browser open $SITE_URL/my-page-path
agent-browser wait 2000
agent-browser screenshot /tmp/qa/drupal--my-page.png --full-page

# Storybook story (iframe.html = no Storybook chrome)
agent-browser open "$STORYBOOK_URL/iframe.html?id=pages-my-page--default&viewMode=story"
agent-browser wait 1000
agent-browser screenshot /tmp/qa/sb--my-page.png --full-page
```

Then **Read both PNG files** and compare top-to-bottom. Fix discrepancies in
the story (or in the underlying component if the bug is structural),
re-screenshot, re-compare. Repeat until the two images look identical at a
glance. Record the comparison result per page in the session report.

Common discrepancies to check: background image missing, overlay colour wrong,
heading/text colour wrong, layout alignment different, section spacing different,
**section background colour missing**, **columns stacking instead of sitting side by side**,
**header nav missing items or dropdowns**, **footer menu unstyled**, wrong font
family/casing, missing real product/content imagery.

### Auditing section background colours (required for every page story)

Before finalising a page story, always run this Drush command to get every layout
section's background colour. Do not rely on visual inspection alone — background
colours are easy to miss and are a first-glance discrepancy.

```bash
$DRUSH ev "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load(NID);
\$layout = \$node->get('field_layout_canvas')->entity;
\$data = json_decode(\$layout->get('json_values')->value, TRUE);
\$model = \$data['model'];

function walk_bg_audit(\$items, \$model, \$depth = 0) {
  if (!is_array(\$items)) return;
  foreach (\$items as \$c) {
    if (!is_array(\$c)) continue;
    \$uid = \$c['uid'] ?? '';
    \$uuid = \$c['uuid'] ?? '';
    \$indent = str_repeat('  ', \$depth);
    if (!empty(\$uid)) {
      \$bg = '';
      if (isset(\$model[\$uuid])) {
        foreach (\$model[\$uuid] as \$fid => \$val) {
          if (is_array(\$val)) {
            foreach (\$val as \$k => \$v) {
              if (\$k === 'rgba' && is_string(\$v)) { \$bg = \$v; break 2; }
            }
          }
        }
      }
      \$title = \$model[\$uuid]['settings']['title'] ?? '';
      echo \$indent . \$uid . (\$title ? ' [' . \$title . ']' : '') . (\$bg ? ' bg=' . \$bg : '') . PHP_EOL;
    }
    if (!empty(\$c['children'])) walk_bg_audit(\$c['children'], \$model, \$depth + 1);
  }
}
walk_bg_audit(\$data['canvas'], \$model);
" 2>/dev/null
```

The output shows every canvas component with its background colour. Any `bg=rgba(...)` line
on a layout component (`cpt_1_column_layout`, `cpt_2_column_layout`, etc.) must be converted
to hex and passed as `backgroundColor` on the corresponding `RowForColumns` in the story.

Converting `rgba(r, g, b, 1)` to hex:
- `rgba(0, 37, 51, 1)` → `#002533`
- `rgba(242, 242, 242, 1)` → `#f2f2f2`
- `rgba(255, 255, 255, 1)` → white (omit — default)

### Column layout — columns stacking instead of side by side

**Root cause:** `RowForColumns` uses `flex-wrap` with `gap-6` (1.5rem). Two columns with
`flex-basis: 50%` overflow because flexbox wrapping decisions do not subtract the gap from
the basis. The fix is in `Column/index.jsx` — use `flex: 0 0 calc(50% - gap * (1 - fraction))`
so the basis already accounts for the gap.

The formula used: `calc(${pct}% - 1.5rem * (1 - ${fraction}))` where `fraction` is the
column's share of 12 (e.g. 0.5 for a 6/12 column). Full-width columns (fraction = 1)
always use `100%` with no subtraction.

**Do not** use `flex: 1 1 50%` or `width: 50%` — both cause wrapping with a gap.

### How SS `coh-image` / `coh-image-responsive-xl` translate to Storybook

SS applies these classes to every rendered image element:

```css
/* cohesion/css/dist/elements/image/image.css */
.coh-image { display: block; width: 100%; max-width: 100%; height: auto; }

/* <project>-theme-stylesheet.min.css */
.coh-image-responsive-xl { display: block; width: 100%; }
```

**These classes override the SS `size` field.** The image is ALWAYS `width: 100%` in the
rendered Drupal output, regardless of whether the SS editor set `"Natural size of image"` or
`"Fill space available"`. The `size` field only affects `object-fit` for fixed-height containers.

**Storybook `Image` component translation:**

```jsx
// Always render full-width — matches coh-image + coh-image-responsive-xl
<img
  src={src}
  alt={alt}
  className={cn('block w-full h-auto max-w-full', objectFitMap[size] || '')}
/>
```

Where `objectFitMap`:
```js
const objectFitMap = {
  'Fill space available':  'object-cover',  // for fixed-height containers
  'Natural size of image': 'object-contain',
};
```

**Do NOT use Next.js `<Image>` from `drupal-canvas` for the `cpt_image_media` component in
Storybook.** It requires explicit `width`/`height` or a `fill` parent — without them the
image renders invisible. Use a plain `<img>` tag with `block w-full h-auto`.

**`"Natural size of image"` wraps the `<img>` in a max-width container** equal to the
image's intrinsic width, centred with `margin: 0 auto`. This prevents small images
(e.g. 300×291px) from stretching full-column. Pass `width` in the `image` object prop
so the component can apply the correct `max-width`:

```tsx
image={{ src: '...', alt: '...', width: 300 }}
size="Natural size of image"
```

When `width` is not known, fall back to `"Fill space available"` and accept the stretch.

**Background image not appearing?** The most common cause is unescaped parentheses in the
filename. CSS `url()` breaks if the path contains literal `(` or `)`. Always use
`%28` and `%29` in image URLs passed to components that apply a CSS `background-image`.
Drupal's file URLs often contain parentheses (e.g. `Pol%20-%20Web%20Header%20(1).jpg` → must
be `Pol%20-%20Web%20Header%20%281%29.jpg`). Components should also defensively escape these:

```js
backgroundImage: `url(${src.replace(/\(/g, '%28').replace(/\)/g, '%29')})`
```

### Using real node data in page stories

**Step 1 — Find the node ID:**
```bash
$DRUSH php:eval "
\$path = \Drupal::service('path_alias.manager')->getPathByAlias('/my-page-alias');
preg_match('/node\/(\d+)/', \$path, \$m);
\$node = \Drupal::entityTypeManager()->getStorage('node')->load(\$m[1]);
echo 'NID: ' . \$node->id() . ', Title: ' . \$node->label() . PHP_EOL;
"
```

**Step 2 — Get the canvas component list:**
```bash
$DRUSH php:eval "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load(NID);
\$layout = \$node->get('field_layout_canvas')->first()->entity;
\$data = json_decode(\$layout->get('json_values')->getValue()[0]['value'], TRUE);
foreach (\$data['canvas'] as \$comp) { echo \$comp['componentId'] . ' (' . \$comp['uuid'] . ')' . PHP_EOL; }
"
```

**Step 3 — Get a component's field values:**
```bash
$DRUSH php:eval "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load(NID);
\$layout = \$node->get('field_layout_canvas')->first()->entity;
\$data = json_decode(\$layout->get('json_values')->getValue()[0]['value'], TRUE);
\$comp_uuid = 'UUID_FROM_STEP_2';
\$comp_id = 'cpt_MY_COMPONENT';
\$comp_vals = \$data['model'][\$comp_uuid] ?? [];
\$ss_comp = \Drupal::service('entity_type.manager')->getStorage('cohesion_component')->load(\$comp_id);
\$ss_model = json_decode(\$ss_comp->get('json_values'), true)['model'];
foreach (\$comp_vals as \$k => \$v) {
  if (\$k === 'settings') continue;
  echo (\$ss_model[\$k]['settings']['title'] ?? \$k) . ': ' . (is_array(\$v) ? json_encode(\$v) : \$v) . PHP_EOL;
}
"
```

**Step 4 — Resolve media UUIDs to image URLs:**
```bash
$DRUSH php:eval "
\$m = reset(\Drupal::entityTypeManager()->getStorage('media')->loadByProperties(['uuid' => 'MEDIA_UUID']));
\$fid = \$m->get('image')->getValue()[0]['target_id'];
\$f = \Drupal::entityTypeManager()->getStorage('file')->load(\$fid);
echo \$f->getFileUri() . PHP_EOL;
// public://path/file.jpg → $SITE_URL/sites/default/files/path/file.jpg
"
```

### Drupal WYSIWYG alignment classes

Drupal WYSIWYG uses `class="text-align-center"` etc. for alignment. Define these
in `storybook/src/global.css` if not already present:

```css
.text-align-left    { text-align: left; }
.text-align-center  { text-align: center; }
.text-align-right   { text-align: right; }
.text-align-justify { text-align: justify; }
```

Copy WYSIWYG HTML from Drupal node fields verbatim — the classes render
correctly in Storybook.

### When a text component follows the hero

**Never move content from one component into another.** If Drupal has a `cpt_text`
immediately after a hero with empty fields, reproduce both separately: an empty-field
hero followed by the text component. Do not inject adjacent copy into the hero to
"make it look better" — that changes the component structure and is an editorial choice
you must not make. Reproduce the canvas exactly as configured.

### Verify component exists in SS before writing a story component

Before writing a Storybook component for a pattern you see on a page, check
whether it maps to an actual SS component:

```bash
$DRUSH ev "
\$components = \Drupal::entityTypeManager()->getStorage('cohesion_component')->loadMultiple();
foreach (\$components as \$id => \$comp) { echo \$id . ': ' . \$comp->label() . PHP_EOL; }
" | sort
```

If the pattern has no SS counterpart (e.g. it is a **container + layout + individual card
components**), do not invent a single wrapper component for it. Instead:

1. Add it to the "Storybook-only components" section in the skill (above)
2. In the page story, reproduce it with the layout primitive components it's
   actually built from (`cpt_container`, `cpt_3_column_layout`, individual
   `cpt_stat_card`, etc.)
3. If a convenience wrapper component already exists, note in the story file
   that it has no SS equivalent and is an approximation.

---

## Site logo in page stories

The `Header` component (`storybook/src/components/header/index.jsx`) must always
render the **real site logo image from Drupal**, not a placeholder SVG or
invented icon. Fetch the logo URL from the live site HTML:

```bash
curl -s $SITE_URL/ | grep -o 'src="[^"]*logo[^"]*"' | head -3
```

Use the absolute URL (prepend `$SITE_URL` if the `src` is root-relative).

Set this as an `<img>` in the site logo sub-component inside `header/index.jsx`.
If the logo is a 2× retina image, set `width` to half the natural pixel width
so it renders at the correct visual size:

```jsx
const SiteLogo = () => (
  <img
    src="$SITE_URL/path/to/logo.png"
    alt="Site logo"
    className="h-auto w-[NNpx]"
  />
);
```

Because all page stories use `<PageLayout>` → `<Header>`, updating this one
component fixes the logo across every page story automatically.

---

## Nice to have — page stories with Header and Footer

For realistic page previews, wrap page stories in a `PageLayout` that includes
the site header and footer:

```tsx
import { PageLayout } from '../layouts/PageLayout.stories';

export const Default: Story = {
  render: () => (
    <PageLayout>
      <MyHeroComponent {...args} />
      {/* remaining page components */}
    </PageLayout>
  ),
};
```

---

## Page navigation — linking between page stories

Header nav links in page stories can navigate to other page stories within
Storybook instead of following raw Drupal URLs.

### How it works

1. `storybook/src/stories/shared/pageLinks.ts` holds a `PAGE_LINKS` map from
   Drupal path → Storybook story ID, plus a `navigateToStory` helper that sets
   `window.top.location.href` to `/?path=/story/<id>`.

2. The Header component accepts an optional `onNavigate(url: string): void`
   prop. When provided, clicking a nav link calls `onNavigate(url)` instead of
   following the `href`.

3. `PageLayout` imports `navigateToStory` and passes it to
   `<Header onNavigate={navigateToStory} />`. Every page story using
   `<PageLayout>` automatically gets linked navigation.

### When you add a new page story

Register the Drupal path → story ID in `pageLinks.ts`:

```ts
'/my-page': 'pages-my-page--default',
```

**Story ID derivation**: Storybook lowercases the title, replaces spaces and `/`
with `-`, removes special characters, appends `--default`.

| Story title         | Story ID                    |
|---------------------|-----------------------------|
| `Pages/Our Story`   | `pages-our-story--default`  |
| `Pages/Blog`        | `pages-blog--default`       |

If a path has no entry in `PAGE_LINKS`, the link falls back to its `href`.

### Homepage story is required

The homepage (`/`) must always have a page story (`Pages/Home`). It is the entry point for Storybook navigation — clicking the site logo navigates to `/`, which resolves to `pages-home--default`.

After building all other page stories, build the homepage last:
1. Find the homepage node via `ddev drush ev "\$n = \Drupal::entityTypeManager()->getStorage('node')->loadByProperties(['path' => '/']); ..."` or check which node has the `/` path alias
2. Extract canvas data with `ss-node-extractor`
3. Write `storybook/src/stories/pages/home.stories.tsx`
4. Register `'/'` → `'pages-home--default'` in `pageLinks.ts`

### Link health check — all pageLinks entries must return 200

After adding or changing any entry in `pageLinks.ts`, verify every registered path returns HTTP 200 from both Storybook and Drupal:

```bash
python3 << 'PYEOF'
import subprocess, re
with open('storybook/src/stories/shared/pageLinks.ts') as f:
    content = f.read()
pairs = re.findall(r"'(/[^']+)':\s*'([^']+)'", content)
STORYBOOK = STORYBOOK_URL   # e.g. 'https://storybook.mysite.ddev.site'
DRUPAL = SITE_URL           # e.g. 'https://mysite.ddev.site'
failures = []
for path, story_id in pairs:
    sb = subprocess.run(['curl','-sk','-o','/dev/null','-w','%{http_code}',f"{STORYBOOK}/iframe.html?id={story_id}&viewMode=story"],capture_output=True,text=True,timeout=10).stdout.strip()
    dr = subprocess.run(['curl','-sk','-o','/dev/null','-w','%{http_code}','-L',f"{DRUPAL}{path}"],capture_output=True,text=True,timeout=10).stdout.strip()
    ok = sb=='200' and dr in('200','301','302')
    print(f"{'✓' if ok else '✗'} {path} → SB:{sb} Drupal:{dr}")
    if not ok: failures.append(path)
print('\nAll OK ✓' if not failures else f"\nFAILED: {failures}")
PYEOF
```

All output must show `✓`. Fix any `✗` before marking Phase 3 or Phase 4 complete.

### Footer navigation must be wired

The `Footer` component accepts `onNavigate` just like `Header`. Internal links (those not starting with `http`) must call `onNavigate`. Always pass it in `PageLayout` and in any bare `<Footer>` usage:

```tsx
<Footer onNavigate={navigateToStory} />
```

`PageLayout` wires both Header and Footer automatically — prefer it over bare usage.

### MANDATORY: every page story must wire navigation

**Every page story must pass `onNavigate={navigateToStory}` to `<Header>`.** Without it, clicking header nav links navigates to the live Drupal site instead of staying in Storybook.

**Two correct patterns — use one consistently:**

**Option A — bare Header (most common):**
```tsx
import { navigateToStory } from '../shared/pageLinks.js';
// ...
<Header onNavigate={navigateToStory} />
```
Note: use the relative path `'../shared/pageLinks.js'` — the `@/` alias only covers `src/components/*` and will fail to resolve `src/stories/*`.

**Option B — PageLayout wrapper (already wired internally):**
```tsx
import { PageLayout } from '../layouts/PageLayout.stories';
// ...
<PageLayout>
  {/* content */}
</PageLayout>
```

**Never write `<Header />` without `onNavigate`.** Never write `onNavigate={undefined}`. After writing any batch of page stories, audit with:
```bash
for f in storybook/src/stories/pages/*.stories.tsx; do
  if ! grep -q "PageLayout" "$f" && ! grep -q "onNavigate={navigateToStory}" "$f"; then
    echo "MISSING onNavigate: $f"
  fi
done
```
All output should be empty. Fix any that appear.

---

## Parallel agent strategy for faster component generation

The SS→Storybook workflow can run significantly faster using multiple agents in
parallel. Agent definitions live in `.claude/agents/`.

**Parallelism does not change the mandatory execution order.** Phase 0 (SS
configuration + styled Header/Footer, visually verified) runs **before** any
writer agents are spawned, and its outputs (`/tmp/ss-css/`, the design tokens
in `global.css`) are referenced in every writer agent's prompt so they use the
real compiled CSS instead of guessing. Phase 4 (agent-browser visual QA) runs
**after** the writer agents complete — the orchestrator performs it (or spawns
dedicated QA agents) and must not report completion until it passes.

| Agent file | Role | Model |
|---|---|---|
| `ss-field-extractor.md` | Runs Drush Steps 1–3 for one component; returns JSON field map | haiku |
| `ss-node-extractor.md` | Reads a node's canvas model values; returns JSON prop values | haiku |
| `ss-component-writer.md` | Takes field map JSON; writes `index.jsx` and `.stories.tsx` | sonnet |
| `ss-page-story-writer.md` | Takes node content JSON; writes one `Pages/*.stories.tsx` | sonnet |

### Phase 1 — Parallel field extraction (read-only)

Spawn one `ss-field-extractor` per component. All run simultaneously:

```js
Agent({ description: 'Extract my_component fields',
  prompt: 'Acting as ss-field-extractor (.claude/agents/ss-field-extractor.md). component_id: cpt_my_component. DRUSH: ddev drush. Project: /path/to/project' })
Agent({ description: 'Extract another_component fields',
  prompt: 'Acting as ss-field-extractor (.claude/agents/ss-field-extractor.md). component_id: cpt_another_component. DRUSH: ddev drush. Project: /path/to/project' })
// up to 8 at once
```

### Phase 1b — Parallel node extraction (for page stories)

Run simultaneously with Phase 1:

```js
Agent({ description: 'Extract node NID content',
  prompt: 'Acting as ss-node-extractor (.claude/agents/ss-node-extractor.md). node_id: NID, node_path: /my-page. DRUSH: ddev drush. SITE_URL: https://mysite.ddev.site' })
```

### Phase 2 — Parallel component writing (isolated)

After all field maps are collected, spawn one `ss-component-writer` per
component. Use `isolation: 'worktree'` to prevent file conflicts:

```js
Agent({ isolation: 'worktree', description: 'Write my_component',
  prompt: 'Acting as ss-component-writer (.claude/agents/ss-component-writer.md). Field map: [JSON]. Project: /path/to/project' })
```

Merge worktree changes back to main after all agents complete.

### Phase 3 — Parallel page story writing (isolated)

After component writers complete:

```js
Agent({ isolation: 'worktree', description: 'Write page story for /my-page',
  prompt: 'Acting as ss-page-story-writer (.claude/agents/ss-page-story-writer.md). Node content: [JSON]. Project: /path/to/project' })
```

### Phase 4 — Field count audit

Spawn lightweight agents to verify field counts (Step 8) for all components in
parallel. These only grep the stories file and compare against the Phase 1 JSON.

### Model selection

- **haiku** — pure Drush extraction (Steps 1–2): fast, cheap, no deep reasoning needed
- **sonnet** — code writing (Steps 3–7): default for all component and story authoring
- **opus** — complex components with many interdependent props or tricky layout logic

### Batch size

Up to 8 agents in parallel is safe. Keep each agent to ONE component — larger
contexts produce lower-quality output. Always include the field map in the agent
prompt so it does not re-run Drush.

---

## Detecting drift

Find Storybook stories whose title does not match the current SS label:

```bash
# List all SS components and labels
$DRUSH ev "
\$storage = \Drupal::service('entity_type.manager')->getStorage('cohesion_component');
\$ids = \$storage->getQuery()->accessCheck(FALSE)->execute();
foreach (\$storage->loadMultiple(\$ids) as \$e) {
  echo \$e->id() . ' | ' . \$e->label() . PHP_EOL;
}
" 2>/dev/null

# List all Storybook component story titles
grep "title: 'Components/" storybook/src/stories/components/*.stories.tsx \
  | sed "s/.*title: '//" | sed "s/'.*//" | sort
```

Compare the two lists. Any SS label not present in the Storybook list needs a
new or renamed story.

---

## SS Templates — What they map to in Storybook

SS has four template entity types. Understanding them prevents wasted effort
building Storybook stories for constructs that are already covered.

### Reading template canvas data

Templates use a different accessor than components — **`get('json_values')->value`
returns empty for templates**. Use `getDecodedJsonValues()` instead:

```bash
$DRUSH ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_master_templates')
  ->load('master_template');
\$json = \$e->getDecodedJsonValues(TRUE);
print_r(\$json['canvas'] ?? []);
" 2>/dev/null
```

Entity type strings: `cohesion_master_templates`, `cohesion_view_templates`,
`cohesion_menu_templates`, `cohesion_content_templates`, `cohesion_base_styles`.

---

### Master templates → PageLayout (already implemented)

Master templates define the page shell: header region → content slot → footer.
They use `drupal-region` with slots for `header`, `main`, and `footer`,
populated by `cpt_site_header` and `cpt_site_footer`.

**Storybook mapping:** `src/stories/layouts/PageLayout.stories.tsx`

No new stories needed. When auditing a live page, wrap all components in
`<PageLayout>` — that reproduces the master template exactly.

---

### View templates → no direct Storybook equivalent

View templates define listing page layouts. They use Drupal-only canvas elements:
`drupal-view`, `drupal-view-contents`, `pattern-repeater`, `drupal-view-item`,
`pagination`. These are server-rendered constructs with no React equivalent.

**Storybook mapping:** None needed. Product listing pages are approximated by
manually composing card components in a page story (e.g. `Pages/Products`).
Do not attempt to convert `pattern-repeater` or `drupal-view` to React — these
are Drupal infrastructure, not UI components.

---

### Menu templates → Header/Footer components (already implemented)

Menu templates define the rendered HTML for main nav, footer nav, utilities nav,
and side nav. They reference menu link trees which are server-rendered.

**Storybook mapping:** `Header` and `Footer` components, baked into `PageLayout`.
No new stories needed. Navigation items in Storybook are static arrays copied
**verbatim** from the Drupal main/footer menus (labels, URLs, order, nesting),
and the components must be styled to match the live rendered header/footer —
see Phase 0, Step G7. "Approximate" menus are not acceptable.

---

### Content templates → card/teaser components (already covered)

Content templates (271 total) map entity type + bundle + view_mode to a SS
canvas. Example: `node_product_card` renders a `container` with `drupal-field`
children for title, image, price. These are the same card layouts already
implemented as standalone components (`ProductCard`, `FeatureCard`, etc.).

**Storybook mapping:** Existing component stories. When a content template
defines a new card layout not yet in Storybook, build a component story for it
(e.g. `cpt_product_card` → `Components/Cards/Product card`).

Do not build Storybook stories for content templates directly — they are
rendering instructions, not components.

---

### Base styles → global.css (already implemented)

SS base styles (16 entries: body, h1–h6, p, a, button, etc.) define global
typographic and colour rules. These are already captured in
`src/styles/global.css` as CSS custom properties and base element rules.

No action needed. When SS base styles change, update `global.css` to match.

---

### Why page stories show only layout placeholders

Live Drupal pages use `cpt_heading` and `cpt_text` as the actual content
components dropped into layout containers. Until `Heading` and `Text`
components are implemented in Storybook, page stories will render as
layout-only skeletons with empty content slots.

**Action:** Implement `src/components/heading/index.jsx` and
`src/components/text/index.jsx` to unlock full page story fidelity.
These are the most commonly dropped components across all pages.
