import { recommended as drupalCanvasRecommended } from '@drupal-canvas/eslint-config';
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'dist',
      'node_modules',
      'storybook-static',
      '.ddev',
      '.playwright-cli',
      'src/components/*/dist',
      'installer',
    ],
  },
  ...drupalCanvasRecommended,
  ...storybook.configs['flat/recommended'],
]);
