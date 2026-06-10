import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import Container from '@/components/container';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: `# Using column layout components
- Use this Flexible container component to group nested components and provide a background color or image.

# Background color
- **Background color -** Optionally set the background color of the container.

# Background image
- **Background image -** Optionally set a background image for the container.

# Border
- **Border -** Optionally add a 1px border to the container.

# Padding
- **Padding top and bottom -** Optionally set padding to the top and bottom of the container by device width.

# Height
- **Height -** Set the height to Fit to content or Fill space available.
- **Minimum height -** Set a minimum height by device width.

# Vertically align content
- **Vertical alignment -** Set the vertical position of the content.

# Space below
- **Add space below -** Add a space (margin) below the container.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Color' },
    backgroundImage: { control: 'object', name: 'Image' },
    imageOverlay: {
      control: 'select',
      options: ['None', 'Dark', 'Light'],
      name: 'Image overlay',
    },
    border: {
      control: 'select',
      options: ['None', 'Add border'],
      name: 'Border',
    },
    borderColor: { control: 'color', name: 'Border color' },
    paddingTopDesktop: {
      control: 'select',
      options: ['None', 'Small (32px)', 'Medium (64px)', 'Large (96px)'],
      name: 'Padding top (desktop)',
    },
    paddingBottomDesktop: {
      control: 'select',
      options: ['None', 'Small (32px)', 'Medium (64px)', 'Large (96px)'],
      name: 'Padding bottom (desktop)',
    },
    paddingTopTablet: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (24px)', 'Medium (48px)', 'Large (72px)'],
      name: 'Padding top (tablet)',
    },
    paddingBottomTablet: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (32px)', 'Medium (64px)', 'Large (96px)'],
      name: 'Padding bottom (tablet)',
    },
    paddingTopPhoneLg: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (24px)', 'Medium (32px)', 'Large (48px)'],
      name: 'Padding top (phone lg)',
    },
    paddingBottomPhoneLg: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (32px)', 'Medium (64px)', 'Large (96px)'],
      name: 'Padding bottom (phone lg)',
    },
    paddingTopPhoneSm: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (24px)', 'Medium (32px)', 'Large (48px)'],
      name: 'Padding top (phone sm)',
    },
    paddingBottomPhoneSm: {
      control: 'select',
      options: ['Inherit from above', 'None', 'Small (32px)', 'Medium (64px)', 'Large (96px)'],
      name: 'Padding bottom (phone sm)',
    },
    heightBehavior: {
      control: 'select',
      options: ['Fit to content (or minimum height set)', 'Fill space available'],
      name: 'Height',
    },
    minHeightDesktop: { control: 'number', name: 'Minimum height desktop' },
    minHeightTablet: { control: 'number', name: 'Minimum height tablet' },
    minHeightPhone: { control: 'number', name: 'Minimum height phone' },
    verticalAlignment: {
      control: 'select',
      options: ['Top', 'Middle', 'Bottom'],
      name: 'Vertical alignment',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paddingTopDesktop: 'None',
    paddingBottomDesktop: 'None',
    paddingTopTablet: 'Inherit from above',
    paddingBottomTablet: 'Inherit from above',
    paddingTopPhoneLg: 'Inherit from above',
    paddingBottomPhoneLg: 'Inherit from above',
    paddingTopPhoneSm: 'Inherit from above',
    paddingBottomPhoneSm: 'Inherit from above',
    verticalAlignment: 'Top',
    imageOverlay: 'None',
    border: 'None',
    heightBehavior: 'Fit to content (or minimum height set)',
    minHeightDesktop: 0,
    minHeightTablet: 0,
    minHeightPhone: 0,
    addSpaceBelow: 'None',
    content: (
      <p className="text-[#5a554e]">This is the container content slot.</p>
    ),
  },
};

export const WithBackgroundColor: Story = {
  args: {
    backgroundColor: '#f5f2eb',
    paddingTopDesktop: 'Medium (64px)',
    paddingBottomDesktop: 'Medium (64px)',
    paddingTopTablet: 'Inherit from above',
    paddingBottomTablet: 'Inherit from above',
    paddingTopPhoneLg: 'Inherit from above',
    paddingBottomPhoneLg: 'Inherit from above',
    paddingTopPhoneSm: 'Inherit from above',
    paddingBottomPhoneSm: 'Inherit from above',
    verticalAlignment: 'Top',
    border: 'None',
    imageOverlay: 'None',
    heightBehavior: 'Fit to content (or minimum height set)',
    minHeightDesktop: 0,
    minHeightTablet: 0,
    minHeightPhone: 0,
    addSpaceBelow: 'None',
    content: (
      <p className="text-[#5a554e]">Container with a background color.</p>
    ),
  },
};

export const WithBackgroundImage: Story = {
  args: {
    backgroundImage: {
      src: 'https://placehold.co/1920x600',
      alt: 'Container background',
    },
    imageOverlay: 'Dark',
    paddingTopDesktop: 'Large (96px)',
    paddingBottomDesktop: 'Large (96px)',
    paddingTopTablet: 'Inherit from above',
    paddingBottomTablet: 'Inherit from above',
    paddingTopPhoneLg: 'Inherit from above',
    paddingBottomPhoneLg: 'Inherit from above',
    paddingTopPhoneSm: 'Inherit from above',
    paddingBottomPhoneSm: 'Inherit from above',
    verticalAlignment: 'Middle',
    border: 'None',
    heightBehavior: 'Fit to content (or minimum height set)',
    minHeightDesktop: 400,
    minHeightTablet: 0,
    minHeightPhone: 0,
    addSpaceBelow: 'None',
    content: (
      <h2 className="text-3xl font-bold text-white">Container with Image Background</h2>
    ),
  },
};
