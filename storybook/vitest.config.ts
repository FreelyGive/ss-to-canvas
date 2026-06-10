import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Custom plugin to inject drupalSettings for JSON:API client
const drupalSettingsPlugin = () => ({
  name: "drupal-settings-inject",
  transformIndexHtml(html: string) {
    const canvasData = {
      baseUrl: `https://${process.env.DDEV_HOSTNAME}`,
      jsonapiSettings: { apiPrefix: "/jsonapi" },
      pageTitle: "Test Page",
      breadcrumbs: [
        { key: "<front>", text: "Home", url: "/" },
        { key: "page.test", text: "Test Page" },
      ],
    };
    return {
      html,
      tags: [
        {
          tag: "script",
          attrs: { type: "text/javascript" },
          children: `window.drupalSettings = { canvasData: { v0: ${JSON.stringify(canvasData)} } };`,
          injectTo: "head-prepend" as const,
        },
      ],
    };
  },
});

// More info at: https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  define: {
    __DDEV_HOSTNAME__: JSON.stringify(process.env.DDEV_HOSTNAME),
  },
  plugins: [react(), tailwindcss(), drupalSettingsPlugin(), tsconfigPaths()],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
          // Run tests sequentially to minimize WebSocket teardown errors
          // Note: 1 "WebSocket closed without opened" error may still appear at the end
          // This is a known Vitest browser mode issue and doesn't affect test results
          fileParallelism: false,
        },
      },
    ],
  },
});
