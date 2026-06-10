import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroImageVideo from '@/components/hero_image_video';

const meta = {
  title: 'Components/Hero with Mobile Video',
  component: HeroImageVideo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Use this Hero component at the top of pages.

**Heading**
- **Use page title** — Toggle on to use the Drupal page title automatically.
- **Heading** — Enter a short heading (used when Use page title is off).

**Text**
- **Text** — Enter a short amount of supporting text. Optional.

**Call to action button**
- **Link to page or URL** — Add a link to an internal page or external URL.
- **Button text** — Enter the text for the button.
- **Target** — Select the target for the link (\`_self\` or \`_blank\`).
- **Button style** — Select a style for the button.

**Breadcrumbs**
- **Show breadcrumbs** — Show a breadcrumb navigation bar at the top of the Hero.

**Layout**
- **Hero height** — Fluid (80vh), Tall, or Short.
- **Text and drop zone layout** — Text centered - Drop zone below, Text left - Drop zone right, or Text right - Drop zone left.
- **Text vertical alignment** — Top, Center, or Bottom.
- **Enable drop zone** — Show the drop zone slot for additional content.

**Background**
- **Background overlay** — None, Dark overlay, or Light overlay.
- **Video URL** — MP4 video URL for the background.

**Text color**
- **Heading text color** — Light, Dark, or Colored.
- **Text color** — Light or Dark.
        `.trim(),
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content (SS form order) ---
    usePageTitle: { control: 'boolean', name: 'Use page title' },
    pageTitle: { control: 'text', name: 'Page title' },
    preHeading: { control: 'text', name: 'Pre heading' },
    heading: { control: 'text', name: 'Heading' },
    headingElement: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], name: 'Heading element' },
    text: { control: 'text', name: 'Text' },
    buttonLink: { control: 'text', name: 'Link to page or URL' },
    buttonText: { control: 'text', name: 'Button text' },
    buttonTarget: { control: 'select', options: ['_self', '_blank'], name: 'Target' },
    buttonStyle: {
      control: 'select',
      name: 'Button style',
      options: [
        'Link with icon',
        'Primary button blue',
        'Primary button dark blue',
        'Primary button green',
        'Primary button orange',
        'Secondary button blue',
        'Secondary button dark blue',
        'Secondary button green',
        'Secondary button orange',
        'Primary button cream',
        'Primary button dark red',
      ],
    },
    showBreadcrumbs: {
      control: 'select',
      name: 'Show breadcrumbs',
      options: [
        'None',
        'Show breadcrumbs on transparent background',
        'Show breadcrumbs on solid dark background',
        'Show breadcrumbs on solid light background',
        'Show breadcrumbs on semi-transparent dark background',
      ],
    },
    // --- Tab 2: Layout & Style (SS form order) ---
    height: { control: 'select', options: ['Fluid', 'Tall', 'Short'], name: 'Hero height' },
    layout: { control: 'select', options: ['Text centered - Drop zone below', 'Text left - Drop zone right', 'Text right - Drop zone left'], name: 'Text and drop zone layout' },
    textVerticalAlignment: { control: 'select', options: ['Top', 'Center', 'Bottom'], name: 'Text vertical alignment' },
    enableDropZone: { control: 'boolean', name: 'Enable drop zone' },
    imageOverlay: { control: 'select', options: ['None', 'Dark overlay', 'Light overlay'], name: 'Background overlay' },
    backgroundVideo: { control: 'text', name: 'Video URL' },
    headingTextColor: { control: 'select', options: ['Light', 'Dark', 'Colored'], name: 'Heading text color' },
    textColor: { control: 'select', options: ['Light', 'Dark'], name: 'Text color' },
  },
} satisfies Meta<typeof HeroImageVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usePageTitle: false,
    height: 'Short',
    layout: 'Text left - Drop zone right',
    textVerticalAlignment: 'Center',
    preHeading: 'New Collection',
    heading: 'Life in focus.',
    headingElement: 'h1',
    headingTextColor: 'Light',
    text: '<p>Shop the latest eyewear from iolla.</p>',
    textColor: 'Light',
    // Real iolla internal paths — from menu_link_content and node aliases
    buttonLink: '/collections/glasses',
    buttonText: 'Shop glasses',
    buttonTarget: '_self',
    buttonStyle: 'Primary button dark blue',
    showBreadcrumbs: 'None',
    enableDropZone: false,
    imageOverlay: 'None',
    backgroundVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
};

export const UsePageTitle: Story = {
  // Simulates Drupal wiring: node title is pulled automatically via [node:title] token.
  // Real page titles from the iolla site:
  //   'We design quality glasses at an upfront, honest price' — /we-design-quality-glasses-upfront-honest-price
  //   'Glasses' — /collections/glasses
  //   'Showrooms' — /showrooms
  //   'Sunglasses' — /collections/sunglasses
  args: {
    ...Default.args,
    usePageTitle: true,
    pageTitle: 'Glasses',
    heading: undefined,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    ...Default.args,
    showBreadcrumbs: 'Show breadcrumbs on transparent background',
    height: 'Tall',
    imageOverlay: 'Dark overlay',
  },
};

export const Tall: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    preHeading: 'Born in Scotland',
    heading: 'A better way to buy eyewear.',
    imageOverlay: 'Dark overlay',
    buttonStyle: 'Primary button cream',
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    height: 'Fluid',
    layout: 'Text centered - Drop zone below',
    preHeading: 'Iolla',
    heading: 'See the world differently.',
    imageOverlay: 'Light overlay',
    buttonText: undefined,
    buttonLink: undefined,
  },
};

export const RightAligned: Story = {
  args: {
    ...Default.args,
    layout: 'Text right - Drop zone left',
    textVerticalAlignment: 'Bottom',
    heading: 'Custom sunglasses.',
    headingElement: 'h2',
    text: '<p>Built to your prescription.</p>',
    imageOverlay: 'Dark overlay',
  },
};

export const WithDropZone: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    enableDropZone: true,
    dropZoneContent: (
      <div className="rounded bg-white/10 p-8 text-white text-sm">Drop zone content</div>
    ),
  },
};
