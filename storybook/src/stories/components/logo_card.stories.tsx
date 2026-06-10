import type { Meta, StoryObj } from '@storybook/react-vite';
import LogoCard from '@/components/logo_card';

const meta = {
  title: 'Components/Logo card',
  component: LogoCard,
  parameters: {
    docs: {
      description: {
        component: `# Using the Logo card
- Use this card to add a logo with optional link to a layout.

# Image
- **Image -** Upload a brand logo image (.png with transparent background, 480px+ width).
- **Alt tag -** Enter an alt tag unless image is decorative.

# Link
- **Link to page or URL -** Add a link (required).

# Color
- **Background color -** Choose a background color.

# Border
- **Border -** Add a 1px border.
- **Border color -** Select a border color.

# Space below
- **Add space below -** Add a space below the card.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    image: { control: 'object', name: 'Image' },
    altTag: { control: 'text', name: 'Alt tag' },
    link: { control: 'object', name: 'Link to page or URL' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    borderColor: { control: 'color', name: 'Border color' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof LogoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: { src: 'https://placehold.co/200x80?text=Logo', alt: 'Partner logo', width: 200, height: 80 },
    altTag: 'Partner logo',
    link: { url: '/partner', target: '_self' },
    border: 'Add border',
    borderColor: '#e5e7eb',
    spaceBelow: 'Add space below',
  },
};

export const WithBackground: Story = {
  args: {
    image: { src: 'https://placehold.co/200x80?text=Logo', alt: 'Partner logo', width: 200, height: 80 },
    altTag: 'Partner logo',
    link: { url: '/partner', target: '_self' },
    backgroundColor: '#f5f2eb',
    border: 'Add border',
    borderColor: '#d4cfc8',
    spaceBelow: 'Add space below',
  },
};

export const NoBorder: Story = {
  args: {
    image: { src: 'https://placehold.co/200x80/002633/ffffff?text=Logo', alt: 'Partner logo', width: 200, height: 80 },
    altTag: 'Partner logo',
    backgroundColor: '#002633',
    border: 'None',
    spaceBelow: 'None',
  },
};
