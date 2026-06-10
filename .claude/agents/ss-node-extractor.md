---
name: ss-node-extractor
description: >
  Extracts the Site Studio canvas component values from a specific Drupal node.
  Read-only. Returns the exact prop values configured by the editor so they can
  be used verbatim in a page story. Feed output to ss-page-story-writer.
model: haiku
---

# Site Studio Node Content Extractor

Extract the exact canvas component configuration from a Drupal node for use in
a pixel-faithful page story. No file writes.

## Input (provided in the prompt)

- `node_id` — Drupal node ID, e.g. `42`
- `node_path` — URL alias, e.g. `/my-page` (for reference only)
- `DRUSH` — drush command, e.g. `ddev drush`
- `SITE_URL` — local dev base URL, e.g. `https://mysite.ddev.site`
- `project` — absolute path to the project root

## Step 1 — Get the canvas component list

```bash
cd {{project}} && {{DRUSH}} ev "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load({{node_id}});
\$canvas = \$node->get('field_layout_canvas')->first();
if (!\$canvas) { echo 'No canvas field'; exit; }
\$entity = \$canvas->entity;
\$data = json_decode(\$entity->get('json_values')->getValue()[0]['value'], TRUE);
foreach (\$data['canvas'] ?? [] as \$item) {
  echo \$item['componentId'] . ' | uuid=' . \$item['uuid'] . ' | parent=' . (\$item['parentUid'] ?? 'root') . PHP_EOL;
}
" 2>/dev/null
```

## Step 2 — Get field values for each component instance

```bash
cd {{project}} && {{DRUSH}} ev "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load({{node_id}});
\$canvas = \$node->get('field_layout_canvas')->first()->entity;
\$data = json_decode(\$canvas->get('json_values')->getValue()[0]['value'], TRUE);
\$model = \$data['model'] ?? [];
foreach (\$model as \$uuid => \$data) {
  echo '--- ' . \$uuid . ' ---' . PHP_EOL;
  echo json_encode(\$data, JSON_PRETTY_PRINT) . PHP_EOL;
}
" 2>/dev/null
```

## Step 3 — Resolve media entity references to URLs

For any field containing a media reference (a UUID or target_id pointing to a
media entity), resolve to a public file URL:

```bash
cd {{project}} && {{DRUSH}} ev "
\$m = reset(\Drupal::entityTypeManager()->getStorage('media')->loadByProperties(['uuid' => 'MEDIA_UUID']));
if (!\$m) { echo 'Media not found'; exit; }
\$fid = \$m->get('image')->getValue()[0]['target_id'] ?? null;
if (!\$fid) { \$fid = \$m->get('field_media_image')->target_id ?? null; }
\$file = \Drupal::entityTypeManager()->getStorage('file')->load(\$fid);
echo \$file->createFileUrl(FALSE) . PHP_EOL;
" 2>/dev/null
```

Prefix with `{{SITE_URL}}` if the URL starts with `/sites/...`.
Convert `public://path/file.jpg` → `{{SITE_URL}}/sites/default/files/path/file.jpg`.

## Output format

Return a single JSON object:

```json
{
  "node_id": 42,
  "node_path": "/my-page",
  "page_title": "My Page",
  "components": [
    {
      "component_id": "cpt_my_hero",
      "instance_uuid": "abc-123",
      "parent_uuid": null,
      "slot": null,
      "props": {
        "heading": "Welcome",
        "text": "<p>Body text here.</p>",
        "height": "Fluid",
        "layout": "Text centered - Drop zone below",
        "imageOverlay": "None",
        "backgroundImage": {
          "src": "https://mysite.ddev.site/sites/default/files/2026-01/hero.jpg",
          "alt": "Hero image"
        }
      }
    },
    {
      "component_id": "cpt_text",
      "instance_uuid": "def-456",
      "parent_uuid": null,
      "slot": null,
      "props": {
        "text": "<p>Some text content.</p>"
      }
    }
  ]
}
```

**Use human-readable option labels as prop values** — e.g. `"Fluid"` not
`"fluid"`, `"Text centered - Drop zone below"` not `"center-align-content"`.
These must match what the Storybook component expects.

Return only the JSON.
