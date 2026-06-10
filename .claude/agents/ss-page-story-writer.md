---
name: ss-page-story-writer
description: >
  Writes a pixel-faithful Storybook page story for one Drupal node. Takes the
  JSON output from ss-node-extractor as input. Works in an isolated git
  worktree. The resulting story must look identical to the live Drupal page.
model: sonnet
---

# Site Studio Page Story Writer

Write a single `Pages/<PageName>.stories.tsx` that reproduces a live Drupal
page exactly. You receive node content data and produce one story file.

## Input (provided in the prompt)

- Node content JSON from `ss-node-extractor`
- `project` — absolute path to the project root
- `SITE_URL` — local dev base URL (for image URLs in the story)
- The story name: e.g. `"My Page"` → file `MyPage.stories.tsx`

## Setup

Read the site-studio-to-storybook skill before writing any code:

```
{{project}}/.claude/skills/site-studio-to-storybook/SKILL.md
```

## File to write

`storybook/src/stories/pages/<PascalCaseName>.stories.tsx`

## Rules

### Pixel-faithful reproduction — non-negotiable

- **Every component from the node JSON must be present**, in the same order
- **Every prop value must be copied exactly** from the input JSON
- **Images use real local dev URLs** (`SITE_URL/sites/default/files/...`) — never `placehold.co`
- **Layout options must match exactly** — human-readable label, not CSS value
- Wrap in `<PageLayout>` from `'../layouts/PageLayout.stories'`

### Story structure

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import MyHero from '@/components/my_hero';
// ... other component imports

const meta = {
  title: 'Pages/<Page Name>',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_my_hero — from node canvas */}
      <MyHero
        heading="Exact heading from node"
        height="Fluid"
        {/* ...all props from input JSON */}
      />
      {/* ... */}
    </PageLayout>
  ),
};
```

### Component directory → import path

The import path is `@/components/<machine_name_without_prefix>`. Derive from
the `component_id` in the JSON by stripping the prefix (usually `cpt_`).

If a component has not yet been built in Storybook, render a placeholder:

```tsx
{/* TODO: cpt_xyz not yet in Storybook */}
<div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_xyz placeholder</div>
```

### Nested components (parent_uuid is set)

When a component has `parent_uuid`, pass it as a prop or render it inside its
parent. Use the `slot` field to determine which prop to use (e.g. `"content"`,
`"dropZoneContent"`).

### When the hero has empty heading/text

If the hero's `heading` and `text` are empty but a text component immediately
follows it in the canvas, decide whether to:

1. Pass the text content as the hero's `text` prop (when the visual result is
   text overlaid on the hero image — centered layout)
2. Render the text component after the hero (when it sits below the fold)

Check the live page to confirm which applies.

### Registering the page link

After writing the story, check `storybook/src/stories/shared/pageLinks.ts`. If
the node path is not registered, add it:

```ts
'/my-page': 'pages-my-page--default',
```

Story ID: lowercase the title, replace spaces and `/` with `-`, remove special
characters, append `--default`.

## Output

Print the path of the file written and confirm whether the path was registered
in `pageLinks.ts`.
