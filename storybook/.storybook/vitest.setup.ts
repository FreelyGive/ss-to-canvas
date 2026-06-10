import { beforeAll, beforeEach } from "vitest";
import { setProjectAnnotations } from "@storybook/react-vite";

import * as previewAnnotations from "./preview";

// Hostname is injected at build time via Vite's define option
declare const __DDEV_HOSTNAME__: string;


// Reset drupalSettings before each test to ensure clean state
// (Initial value is injected via drupalSettingsPlugin in vitest.config.ts)
beforeEach(() => {
  (window as any).drupalSettings = {
    canvasData: {
      v0: {
        baseUrl: `https://${__DDEV_HOSTNAME__}`,
        jsonapiSettings: { apiPrefix: "/jsonapi" },
        pageTitle: "Test Page",
        breadcrumbs: [
          { key: "<front>", text: "Home", url: "/" },
          { key: "page.test", text: "Test Page" },
        ],
      },
    },
  };
});

const annotations = setProjectAnnotations([previewAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
