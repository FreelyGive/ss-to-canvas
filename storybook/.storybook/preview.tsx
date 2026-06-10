import '../src/global.css';
import { JsonApiClient } from '@drupal-api-client/json-api-client';

const mockMenuItems = [
  { id: '1', title: 'Home', url: '#', expanded: false },
  { id: '2', title: 'About', url: '#', expanded: false },
  { id: '3', title: 'Services', url: '#', expanded: false },
  { id: '4', title: 'Contact', url: '#', expanded: false },
];

const mockSearchResults = [
  {
    title: 'Getting Started with Our Platform',
    path: { alias: '/getting-started' },
  },
  {
    title: 'How to Configure Your Account Settings',
    path: { alias: '/account-settings' },
  },
  {
    title: 'Best Practices for Content Management',
    path: { alias: '/best-practices' },
  },
  {
    title: 'Understanding Analytics and Reporting',
    path: { alias: '/analytics' },
  },
  {
    title: 'Troubleshooting Common Issues',
    path: { alias: '/troubleshooting' },
  },
];

export default {
  tags: ['autodocs'],
  parameters: {
    docs: {
      extractComponentDescription: (component: any) => {
        const desc: string = component?.__docgenInfo?.description || '';
        const before = desc.split(/\n\s*@/)[0].trim();
        return before.startsWith('@') ? '' : before;
      },
    },
    backgrounds: {
      options: {
        white:            { name: 'White',            value: '#ffffff' },
        gray_10:          { name: 'Gray 10',          value: '#f2f2f2' },
        gray_20:          { name: 'Gray 20',          value: '#dbdbdc' },
        brand:            { name: 'Brand Blue',       value: '#006699' },
        deep_blue:        { name: 'Deep Blue',        value: '#002533' },
        blush_pink:       { name: 'Blush Pink',       value: '#edcbca' },
        seabreeze_green:  { name: 'Seabreeze Green',  value: '#aacec5' },
        glacier_blue:     { name: 'Glacier Blue',     value: '#c5d0db' },
        tangerine_orange: { name: 'Tangerine Orange', value: '#fbd7b1' },
        sunbeam_yellow:   { name: 'Sunbeam Yellow',   value: '#e4ea8e' },
        black:            { name: 'Black',            value: '#000000' },
      },
    },
    viewport: {
      // Match viewport sizes in Drupal Canvas.
      // @see https://git.drupalcode.org/project/canvas/-/blob/197f387af2bea7c073e91ddeded4039dfdc03031/ui/src/types/Preview.ts#L7
      options: {
        desktopLarge: {
          name: 'Large Desktop',
          styles: {
            width: '2560px',
            height: '1440px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '468px',
            height: '800px',
          },
        },
      },
    },
    initialGlobals: {
      background: { value: 'light' },
      viewport: { value: 'mobile' },
    },
    options: {
      storySort: {
        includeNames: true,
        order: [
          'Introduction',
          'Example pages',
          'Components',
          ['Header', 'Footer', 'Layout', 'Assets'],
        ],
      },
    },
  },
  async beforeEach() {
    (JsonApiClient.prototype as any).getResource = async (type: string, resourceId: string) => {
      if (type === 'menu_items' && resourceId === 'main') {
        return mockMenuItems;
      }
      throw Object.assign(new Error('Not Found'), { status: 404 });
    };
    (JsonApiClient.prototype as any).getCollection = async (type: string) => {
      if (type === 'index--cms_content') {
        return mockSearchResults;
      }
      throw Object.assign(new Error('Not Found'), { status: 404 });
    };
  },
  initialGlobals: {
    viewport: { value: undefined, isRotated: false },
  },
  decorators: [
    (Story) => {
      // Ensure the drupalSettings structure exists
      window.drupalSettings = {
        ...window.drupalSettings,
        canvasData: {
          ...window.drupalSettings?.canvasData,
          v0: {
            ...window.drupalSettings?.canvasData?.v0,
            baseUrl: window.drupalSettings?.canvasData?.v0?.baseUrl || '/',
            jsonapiSettings: window.drupalSettings?.canvasData?.v0
              ?.jsonapiSettings || {
              apiPrefix: '/jsonapi',
            },
            pageTitle: 'Test Page',
            breadcrumbs: [
              { key: '<front>', text: 'Home', url: '/' },
              {
                key: 'page.section',
                text: 'Test Section',
                url: '/test-section',
              },
              { key: 'page.test', text: 'Test Page' },
            ],
            branding: {
              homeUrl: '/',
              siteName: 'Test Site',
              siteSlogan: 'Canvas + Storybook + AI',
            },
          },
        },
      };
      return <Story />;
    },
  ],
};
