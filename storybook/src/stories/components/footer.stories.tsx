import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from '@/components/footer';

const meta = {
  title: 'Components/Footer/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Site footer matching the iolla.com footer layout.

**Help section**
- **Color theme** — Dark (navy) or Light (white) background.
- **Help heading** — Heading above the help text.
- **Help text** — Short supporting text.
- **Help centre URL** — URL for the "Visit our help centre" link.
- **Contact URL** — URL for the "Contact us" link.

**Navigation**
- **Nav columns** — Array of \`{ heading, links: [{ label, url }] }\` objects rendered as footer nav columns.

**Social links**
- **Social links** — Array of \`{ platform, url, ariaLabel }\` objects. Supported platforms: instagram, facebook, tiktok.

**Legal**
- **Legal links** — Array of \`{ label, url }\` objects rendered in the bottom bar.
- **Copyright year** — Year shown in the copyright notice.
        `.trim(),
      },
    },
  },
  argTypes: {
    colorTheme: {
      control: 'select',
      options: ['Dark', 'Light'],
      name: 'Color theme',
    },
    helpHeading: {
      control: 'text',
      name: 'Help heading',
    },
    helpText: {
      control: 'text',
      name: 'Help text',
    },
    helpCentreUrl: {
      control: 'text',
      name: 'Help centre URL',
    },
    contactUrl: {
      control: 'text',
      name: 'Contact URL',
    },
    navColumns: {
      control: 'object',
      name: 'Nav columns',
    },
    socialLinks: {
      control: 'object',
      name: 'Social links',
    },
    legalLinks: {
      control: 'object',
      name: 'Legal links',
    },
    copyrightYear: {
      control: 'number',
      name: 'Copyright year',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: 'Dark',
    helpHeading: 'Happy to help',
    helpText: 'Our customer support team is on hand to guide you to your perfect pair',
    helpCentreUrl: 'https://support.iolla.com',
    contactUrl: 'https://support.iolla.com/en/articles/41-how-to-reach-the-customer-support-team',
    copyrightYear: new Date().getFullYear(),
  },
};

export const Light: Story = {
  args: {
    ...Default.args,
    colorTheme: 'Light',
  },
};

export const CustomNav: Story = {
  args: {
    ...Default.args,
    navColumns: [
      {
        heading: 'Shop',
        links: [
          { label: 'Glasses', url: '/collections/glasses' },
          { label: 'Sunglasses', url: '/sunglasses' },
          { label: 'Accessories', url: '/collections/accessoriesandgifts' },
        ],
      },
      {
        heading: 'Help',
        links: [
          { label: 'Contact Us', url: '/contact' },
          { label: 'FAQs', url: '/faqs' },
          { label: 'Delivery & Returns', url: '/delivery-and-returns' },
        ],
      },
    ],
  },
};
