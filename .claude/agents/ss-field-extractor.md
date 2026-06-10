---
name: ss-field-extractor
description: >
  Runs Drush commands against a Site Studio Drupal site to extract one
  component's field definitions. Pure read-only — no file writes. Returns a
  structured JSON field map for use by ss-component-writer.
model: haiku
---

# Site Studio Field Extractor

Extract field definitions for one Site Studio component and return structured
JSON. No file writes. No code. Only Drush commands and JSON output.

## Input (provided in the prompt)

- `component_id` — SS machine name, e.g. `cpt_hero_image`
- `DRUSH` — drush command for this environment, e.g. `ddev drush`
- `project` — absolute path to the project root

## Commands to run

Run all three from the project root. Replace `{{component_id}}` and `{{DRUSH}}`
with the values provided.

### Command 1 — Full form tree with field options and defaults

```bash
cd {{project}} && {{DRUSH}} ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('{{component_id}}');
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

### Command 2 — Help text (Tab 3 content)

```bash
cd {{project}} && {{DRUSH}} ev "
\$e = \Drupal::service('entity_type.manager')
  ->getStorage('cohesion_component')
  ->load('{{component_id}}');
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

### Command 3 — Field count per tab

```bash
cd {{project}} && {{DRUSH}} ev "
\$e = \Drupal::service('entity_type.manager')->getStorage('cohesion_component')->load('{{component_id}}');
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
```

## Output format

Return a single JSON object — nothing else, no prose:

```json
{
  "component_id": "cpt_my_component",
  "label": "My Component",
  "field_count": { "tab1": 4, "tab2": 8, "total": 12 },
  "help_text": "Use this component to...",
  "fields": [
    {
      "tab": 1,
      "uid": "form-input",
      "prop_name": "heading",
      "label": "Heading",
      "type": "text",
      "options": null,
      "default": ""
    },
    {
      "tab": 2,
      "uid": "form-select",
      "prop_name": "cardLayout",
      "label": "Card layout",
      "type": "select",
      "options": ["Left aligned", "Center aligned"],
      "default": "Left aligned"
    }
  ]
}
```

**Field type mapping** (SS `uid` → JSON `type`):
- `form-input`, `form-textarea`, `form-wysiwyg` → `"text"`
- `form-select` → `"select"` (include all option labels in `options`)
- `form-checkbox-toggle` → `"boolean"`
- `form-link` → `"url"`
- `form-input-hidden` → `"hidden_text"`
- `form-video-embed` → `"video_url"`
- `form-image` → `"image"`
- `form-colorpicker` → `"color"`
- `form-helptext` → omit from `fields` (documentation only)

**`prop_name`** — convert the SS field label to camelCase:
- "Card layout" → `cardLayout`
- "Use page title" → `usePageTitle`
- "Link to page or URL" → `buttonLink`

For select fields, `options` must contain the human-readable labels (not SS CSS
class values). `default` should also be the human-readable label when possible.

If a command fails, include `"error": "message"` in the relevant section rather
than failing silently.
