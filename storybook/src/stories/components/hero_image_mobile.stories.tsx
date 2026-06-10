import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroImageMobile from '@/components/hero_image_mobile';

const meta = {
  title: 'Components/Hero with Mobile Image',
  component: HeroImageMobile,
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
- **Text and drop zone layout** — Controls text column position.
- **Text vertical alignment** — Top, Center, or Bottom.
- **Enable drop zone** — Show the drop zone slot for additional content alongside the text.

**Background image**
- **Desktop background image** — Select a desktop background image. Optional.
- **Desktop image style** — Desktop image crop preset.
- **Mobile background image** — Select a separate mobile background image. Optional.
- **Mobile image style** — Mobile image crop preset.
- **Background overlay** — None, Dark overlay, or Light overlay.

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
    headingElement: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Heading element',
    },
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
      ],
    },
    textVerticalAlignment: {
      control: 'select',
      name: 'Text vertical alignment',
      options: ['Top', 'Center', 'Bottom'],
    },
    enableDropZone: { control: 'boolean', name: 'Enable drop zone' },
    imageOverlay: {
      control: 'select',
      name: 'Background overlay',
      options: ['None', 'Dark overlay', 'Light overlay'],
    },
    backgroundImage: { control: 'object', name: 'Desktop background image' },
    imageStyleDesktop: {
      control: 'select',
      name: 'Desktop image style',
      options: [
        'Default (1600x1067)',
        'Raw (uncropped)',
        'Super wide (1360x640)',
        'Lister banner (1980×460)',
        'XXL Super wide (1600x800)',
      ],
    },
    mobileImage: { control: 'object', name: 'Mobile background image' },
    imageStyleMobile: {
      control: 'select',
      name: 'Mobile image style',
      options: [
        'Default',
        'Super wide (568x266)',
        'Super duper wide (1360x640)',
        'Small square (568x568)',
        'Medium portrait (512x768)',
        'Uncropped',
      ],
    },
    backgroundColor: { control: 'color', name: 'Background color' },
    headingTextColor: {
      control: 'select',
      name: 'Heading text color',
      options: ['Light', 'Dark', 'Colored'],
    },
    textColor: { control: 'select', name: 'Text color', options: ['Light', 'Dark'] },
  },
} satisfies Meta<typeof HeroImageMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usePageTitle: false,
    preHeading: 'Born in Scotland',
    heading: 'A better way to buy eyewear.',
    headingElement: 'h1',
    headingTextColor: 'Light',
    text: "<p>Discover a better way to buy glasses. Honest pricing, expert advice, and frames you'll love.</p>",
    textColor: 'Light',
    buttonLink: '/collections/glasses',
    buttonText: 'Shop glasses',
    buttonTarget: '_self',
    buttonStyle: 'Primary button dark blue',
    showBreadcrumbs: 'None',
    height: 'Short',
    layout: 'Text left - Drop zone right',
    textVerticalAlignment: 'Center',
    enableDropZone: false,
    imageOverlay: 'None',
    backgroundImage: {
      src: 'https://placehold.co/1600x900/002633/ffffff?text=Hero+Image',
      alt: 'iolla hero',
    },
    imageStyleDesktop: 'Default (1600x1067)',
    mobileImage: {
      src: 'https://placehold.co/1600x900/002633/ffffff?text=Hero+Image',
      alt: 'iolla hero mobile',
    },
    imageStyleMobile: 'Default',
  },
};

export const UsePageTitle: Story = {
  // Simulates Drupal wiring — node title pulled via [node:title] token.
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
    height: 'Tall',
    showBreadcrumbs: 'Show breadcrumbs on transparent background',
    imageOverlay: 'Dark overlay',
  },
};

export const Tall: Story = {
  args: {
    ...Default.args,
    height: 'Tall',
    imageOverlay: 'Dark overlay',
    buttonStyle: 'Primary button dark blue',
  },
};

export const WithMobileImage: Story = {
  args: {
    ...Default.args,
    height: 'Short',
    mobileImage: {
      src: 'https://placehold.co/1600x900/002633/ffffff?text=Hero+Image',
      alt: 'iolla hero mobile',
    },
    imageStyleMobile: 'Small square (568x568)',
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
