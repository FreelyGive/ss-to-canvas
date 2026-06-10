import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import SlideItem from '@/components/slide_item';

const meta = {
  title: 'Components/Slide item',
  component: SlideItem,
  parameters: {
    docs: {
      description: {
        component: `# Using the Slide item component
- This component has no editable settings.
- Drop multiple Slide items into the Slide container component.
- Drop content into each Slide item component.`,
      },
    },
  },
  argTypes: {
    content: { control: false, name: 'Content' },
  },
} satisfies Meta<typeof SlideItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-[#006699] text-white">
        Slide content here
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {},
};
