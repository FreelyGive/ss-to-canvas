import type { Meta, StoryObj } from '@storybook/react-vite';
import Hero from '@/components/hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
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
- **Text and drop zone layout** — Six options controlling text column position and text alignment.
- **Enable drop zone** — Show the drop zone slot for additional content alongside the text.

**Background image**
- **Image** — Select a background image. Optional.
- **Image overlay** — None, Dark overlay, or Light overlay.
- **Image style** — Desktop, tablet, and mobile image crop presets.

**Background color**
- **Background color** — Select a background color. Optional, used when no image is set.

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
    layout: {
      control: 'select',
      name: 'Text and drop zone layout',
      options: [
        'Text centered - Drop zone below',
        'Text left - Drop zone right',
        'Text right - Drop zone left',
        'Content centered - text align centre',
        'Content left - text align centre',
        'Content right - text align centre',
      ],
    },
    enableDropZone: { control: 'boolean', name: 'Enable drop zone' },
    backgroundImage: { control: 'object', name: 'Image' },
    imageStyle: { control: 'select', options: ['Default', 'Super wide (1360x640)', 'Lister banner (1980x460)'], name: 'Image style (desktop)' },
    imageStyleTablet: { control: 'select', options: ['Default', 'Super wide (768x360)', 'Super duper wide (1360x640)'], name: 'Image style (tablet)' },
    imageStyleMobile: { control: 'select', options: ['Default', 'Super wide (568x266)', 'Super duper wide (1360x640)', 'Small square (568x568)'], name: 'Image style (mobile)' },
    imageOverlay: { control: 'select', options: ['None', 'Dark overlay', 'Light overlay'], name: 'Image overlay' },
    backgroundColor: { control: 'color', name: 'Background color' },
    headingTextColor: { control: 'select', options: ['Light', 'Dark', 'Colored'], name: 'Heading text color' },
    textColor: { control: 'select', options: ['Light', 'Dark'], name: 'Text color' },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usePageTitle: false,
    preHeading: 'Born in Scotland',
    heading: 'A better way to buy eyewear.',
    headingElement: 'h1',
    headingTextColor: 'Light',
    text: '<p>Discover a better way to buy glasses. Honest pricing, expert advice, and frames you\'ll love.</p>',
    textColor: 'Light',
    // Real iolla internal paths from menu_link_content and node aliases
    buttonLink: '/collections/glasses',
    buttonText: 'Shop glasses',
    buttonTarget: '_self',
    buttonStyle: 'Primary button dark blue',
    showBreadcrumbs: 'None',
    height: 'Short',
    layout: 'Text left - Drop zone right',
    enableDropZone: false,
    backgroundImage: {
      src: 'https://placehold.co/1600x900/002633/ffffff?text=Hero+Image',
      alt: 'iolla hero',
    },
    imageStyle: 'Default',
    imageStyleTablet: 'Default',
    imageStyleMobile: 'Default',
    imageOverlay: 'None',
  },
};

export const UsePageTitle: Story = {
  // Simulates Drupal wiring — node title pulled via [node:title] token.
  // Real page titles from iolla.com:
  //   'Glasses' — /collections/glasses
  //   'Sunglasses' — /collections/sunglasses
  //   'Showrooms' — /showrooms
  //   'Virtual Try On' — /virtual-try-on
  //   'We design quality glasses at an upfront, honest price' — /we-design-quality-glasses-upfront-honest-price
  args: {
    ...Default.args,
    usePageTitle: true,
    pageTitle: 'Glasses',
    heading: undefined,
  },
};

export const Tall: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    imageOverlay: 'Dark overlay',
    buttonStyle: 'Primary button dark blue',
    buttonText: 'Shop glasses',
    buttonLink: '/collections/glasses',
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    height: 'Fluid',
    layout: 'Text centered - Drop zone below',
    imageOverlay: 'Light overlay',
  },
};

export const RightAligned: Story = {
  args: {
    ...Default.args,
    layout: 'Text right - Drop zone left',
    heading: 'Custom sunglasses.',
    headingElement: 'h2',
    text: '<p>Built to your prescription.</p>',
    imageOverlay: 'Dark overlay',
  },
};

export const ContentCentered: Story = {
  args: {
    ...Default.args,
    layout: 'Content centered - text align centre',
    preHeading: 'iolla',
    heading: 'See the world differently.',
    imageOverlay: 'Dark overlay',
  },
};

export const WithBackgroundColor: Story = {
  args: {
    ...Default.args,
    backgroundImage: undefined,
    backgroundColor: '#002633',
    headingTextColor: 'Light',
    textColor: 'Light',
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    showBreadcrumbs: 'Show breadcrumbs on transparent background',
    imageOverlay: 'Dark overlay',
  },
};

export const WithDropZone: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    layout: 'Text left - Drop zone right',
    enableDropZone: true,
    dropZoneContent: (
      <div className="rounded bg-white/10 p-8 text-white text-sm">Drop zone content</div>
    ),
  },
};
