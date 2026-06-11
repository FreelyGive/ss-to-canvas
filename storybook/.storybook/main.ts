import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { Plugin } from 'vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Auto-imports index.css for components that have one.
 * Drupal Canvas includes component CSS automatically, but Storybook does not.
 */
function componentCssPlugin(): Plugin {
  const componentsDir = path.resolve(import.meta.dirname, '../src/components');
  return {
    name: 'storybook-component-css',
    transform(code: string, id: string) {
      if (id.startsWith(componentsDir) && id.endsWith('/index.jsx')) {
        const cssPath = path.join(path.dirname(id), 'index.css');
        if (fs.existsSync(cssPath)) {
          return `import './index.css';\n${code}`;
        }
      }
    },
  };
}

export default {
  stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-mcp',
      options: {
        toolsets: {
          dev: true,
          docs: true,
        },
        experimentalFormat: 'markdown',
      },
    },
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true,
  },
  async viteFinal(config) {
    // Use vite-tsconfig-paths to read aliases from tsconfig.json
    config.plugins = config.plugins || [];
    config.plugins.push(
      tsconfigPaths({
        root: path.resolve(__dirname, '..'),
      }),
    );

    return mergeConfig(config, {
      plugins: [componentCssPlugin()],
      server: {
        watch: {
          ignored: ['**/node_modules/**', '**/.git/**', '**/.ddev/**'],
        },
        hmr: {
          // When proxied through ddev/Traefik, HMR WebSocket must use the
          // public HTTPS host and port, not the container's internal port 6006.
          host: process.env.DDEV_HOSTNAME
            ? `storybook.${process.env.DDEV_HOSTNAME}`
            : undefined,
          protocol: 'wss',
          clientPort: 443,
        },
      },
    });
  },
} satisfies StorybookConfig;
