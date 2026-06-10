# my-project

A campaign microsite built with React components on [Acquia Source|Drupal CMS]
(Drupal Canvas).

## Getting Started

Prerequisites: [DDEV](https://ddev.readthedocs.io/)

```sh
git clone https://gitlab.com/your-group/my-project.git
cd my-project
ddev start
```

Storybook runs automatically inside the container at
<https://storybook.my-project.ddev.site>.

### Canvas Credentials

Credentials are configured during installation via the interactive wizard. To
update them, edit `.env` directly.

The project uses two URL concepts:

- **CMS / API URL** (`CANVAS_SITE_URL` in `.env`): The Drupal backend used by
  Canvas CLI for authentication and API requests.
- **Public URL**: The public-facing URL visitors see (e.g.
  `https://www.example.com`). For Drupal Canvas these are usually the same; for
  Acquia Source they may differ.

## Code Checks & Tests

Lint and format:

```sh
npm run code:check    # check for issues
npm run code:fix      # auto-fix issues
```

Run tests:

```sh
npm run test          # run once
npm run test:watch    # watch mode
npm run test:ui       # interactive UI
```

Validate components against Drupal Canvas:

```sh
npm run canvas:validate             # all components
npm run canvas:validate -- -c Name  # single component
```

## IDE Setup (JetBrains)

Configure PhpStorm / WebStorm to use the Node.js inside the DDEV container:

1. Open **Settings > Languages & Frameworks > Node.js**.
2. Click the Node interpreter dropdown and select **Add**.
3. Select **Add Remote** > **Docker**.
4. Select the running DDEV web container.

Then do the same for TypeScript:

1. Open **Settings > Languages & Frameworks > TypeScript**.
2. Click the TypeScript dropdown and select **Add**.
3. Select **Add Remote** > **Docker**.
4. Select the running DDEV web container.

## Pushing Components

To push to your remote Drupal Canvas or Acquia Source site:

```sh
npm run canvas:push             # all components
npm run canvas:push -- -c Name  # single component
```

To push to your local DDEV Drupal site:

```sh
npm run canvas:push:local       # all components
npm run canvas:push:local -- -c Name  # single component
```
