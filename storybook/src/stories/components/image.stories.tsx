import type { Meta, StoryObj } from '@storybook/react-vite';

import Image from '@/components/image';

const meta = {
  title: 'Components/Assets/Image',
  component: Image,
  argTypes: {
    // --- Tab 1: Content ---
    image: { control: 'object', name: 'Image' },
    imageStyle: {
      control: 'select',
      options: [
        'Large (W1360)',
        'Large landscape (1360x980)',
        'Medium (W768)',
        'Medium landscape (768x512)',
        'Small (W568)',
        'Small landscape (568x352)',
      ],
      name: 'Image style',
    },
    // --- Tab 2: Layout & Style ---
    size: {
      control: 'select',
      options: ['Natural size of image', 'Fill space available'],
      name: 'Size',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below image'],
      name: 'Add space below image',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: 'https://placehold.co/800x600',
      alt: 'Example image placeholder',
      width: 800,
      height: 600,
    },
    imageStyle: 'Medium landscape (768x512)',
    size: 'Natural size of image',
    addSpaceBelow: 'None',
  },
};

export const Wide: Story = {
  args: {
    image: {
      src: 'https://placehold.co/1200x400',
      alt: 'Wide image placeholder',
      width: 1200,
      height: 400,
    },
  },
};

export const Square: Story = {
  args: {
    image: {
      src: 'https://placehold.co/600x600',
      alt: 'Square image placeholder',
      width: 600,
      height: 600,
    },
  },
};

export const Portrait: Story = {
  args: {
    image: {
      src: 'https://placehold.co/400x600',
      alt: 'Portrait image placeholder',
      width: 400,
      height: 600,
    },
  },
};
