/* global process */
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import drupalCanvas from '@drupal-canvas/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

function getCanvasConfig() {
  const configPath = resolve(process.cwd(), 'canvas.config.json');
  if (existsSync(configPath)) {
    try {
      return JSON.parse(readFileSync(configPath, 'utf-8'));
    } catch {
      return {};
    }
  }
  return {};
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'CANVAS_');
  const config = getCanvasConfig();
  return {
    server: {
      host: process.env.DDEV_HOSTNAME,
      // Allow all hosts, DDEV will handle routing, but this allows things like
      // ddev share which may use alternative hostnames.
      allowedHosts: true,
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/.ddev/**'],
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      drupalCanvas({
        componentDir:
          config.componentDir ??
          env.CANVAS_COMPONENT_DIR ??
          `./src/components/`,
        siteUrl: env.CANVAS_SITE_URL ?? '/',
      }),
      tsconfigPaths(),
    ],
  };
});
