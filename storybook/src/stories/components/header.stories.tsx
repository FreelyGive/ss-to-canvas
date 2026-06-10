import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from '@/components/header';

const meta = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Site header matching the iolla.com header layout: logo left, main navigation center/left, utility links and search right.

**Theme**
- **Color theme** — Light (white bg) or Dark (navy bg).

**Logo**
- **Logo URL** — URL the logo links to (default \`/\`).

**Navigation**
- **Main links** — Array of \`{ id, title, url }\` objects for the primary navigation.
- **Utility links** — Array of \`{ id, title, url }\` objects for the secondary utility nav (Showrooms, Help).
- **Menu position** — Left (links left-aligned) or Center (links centered).

**Search**
- **Show search** — Toggle the search button on/off.
        `.trim(),
      },
    },
  },
  argTypes: {
    colorTheme: {
      control: 'select',
      options: ['Light', 'Dark'],
      name: 'Color theme',
    },
    logoUrl: {
      control: 'text',
      name: 'Logo URL',
    },
    mainLinks: {
      control: 'object',
      name: 'Main links',
    },
    utilityLinks: {
      control: 'object',
      name: 'Utility links',
    },
    showSearch: {
      control: 'boolean',
      name: 'Show search',
    },
    menuPosition: {
      control: 'select',
      options: ['Left', 'Center'],
      name: 'Menu position',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: 'Light',
    logoUrl: '/',
    showSearch: true,
    menuPosition: 'Left',
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    colorTheme: 'Dark',
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    menuPosition: 'Center',
  },
};

export const NoSearch: Story = {
  args: {
    ...Default.args,
    showSearch: false,
  },
};

export const CustomLinks: Story = {
  args: {
    ...Default.args,
    mainLinks: [
      { id: '1', title: 'Glasses', url: '/collections/glasses' },
      { id: '2', title: 'Sunglasses', url: '/sunglasses' },
      { id: '3', title: 'Varifocals', url: '/varifocals' },
      { id: '4', title: 'Our Lenses', url: '/our-lenses' },
      { id: '5', title: 'Our Story', url: '/our-story' },
      { id: '6', title: 'Showrooms', url: '/showrooms' },
    ],
    utilityLinks: [
      { id: '1', title: 'Help', url: 'https://support.iolla.com/' },
    ],
  },
};
