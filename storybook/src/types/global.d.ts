interface CanvasData {
  baseUrl: string;
  jsonapiSettings: { apiPrefix: string };
  pageTitle: string;
  breadcrumbs: Array<{ key: string; text: string; url?: string }>;
  branding?: { homeUrl: string; siteName: string; siteSlogan: string };
  mainEntity?: { uuid?: string };
}

declare global {
  interface Window {
    drupalSettings: {
      canvasData: {
        v0: CanvasData;
      };
      /** Present when running inside the Canvas editor. */
      canvas?: unknown;
    };
  }

  // Vite defined constant
  const __DDEV_HOSTNAME__: string;
}

// Allow CSS custom properties in React style objects.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

export {};
