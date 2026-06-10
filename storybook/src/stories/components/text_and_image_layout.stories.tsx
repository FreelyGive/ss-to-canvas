import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import TextAndImageLayout from '@/components/text_and_image_layout';

const meta = {
  title: 'Components/Text and image layout',
  component: TextAndImageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `# Using the Text and image layout
- Use this component to create a two-column layout with an image panel on one side and content in the drop zone on the other.

# Background colour
- **Background colour -** Set an optional background colour for the layout.

# Image
- **Image -** Select the image to display in the image panel.

# Image position
- **Image position -** Select whether the image appears on the left or right side.

# Overflow
- **Overflow Hidden -** Clip content that overflows the layout bounds.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content & Style (SS form order) ---
    backgroundColor: { control: 'color', name: 'Background colour' },
    image: { control: 'object', name: 'Image' },
    imagePosition: {
      control: 'select',
      options: ['Image on left', 'Image on right'],
      name: 'Image position',
    },
    overflowHidden: { control: 'boolean', name: 'Overflow Hidden' },
  },
} satisfies Meta<typeof TextAndImageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: 'https://placehold.co/800x600/002633/ffffff?text=Image',
      alt: 'Layout image',
    },
    imagePosition: 'Image on right',
    overflowHidden: false,
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#002633]">Heading here</h2>
        <p className="text-[#5a554e]">Add content to this drop zone using nested components.</p>
      </div>
    ),
  },
};

export const ImageOnLeft: Story = {
  args: {
    image: {
      src: 'https://placehold.co/800x600/006699/ffffff?text=Image',
      alt: 'Layout image',
    },
    imagePosition: 'Image on left',
    overflowHidden: false,
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#002633]">Image on the left</h2>
        <p className="text-[#5a554e]">Content drop zone with image positioned to the left.</p>
      </div>
    ),
  },
};

export const WithBackgroundColor: Story = {
  args: {
    backgroundColor: '#f5f2eb',
    image: {
      src: 'https://placehold.co/800x600/002633/ffffff?text=Image',
      alt: 'Layout image',
    },
    imagePosition: 'Image on right',
    overflowHidden: false,
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#002633]">With background colour</h2>
        <p className="text-[#5a554e]">This layout has a background colour applied.</p>
      </div>
    ),
  },
};
