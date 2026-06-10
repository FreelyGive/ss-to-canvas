import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ReadMore from '@/components/read_more';

const meta = {
  title: 'Components/Read more',
  component: ReadMore,
  parameters: {
    docs: {
      description: {
        component: `# Using the Read more component
- Use the Read more component to add content that is collapsed (hidden) until a button is clicked.

# Button
- **Button text collapsed -** Text for the button when collapsed.
- **Button text expanded -** Text for the button when expanded.
- **Button style -** Select the button style.

# Space below
- **Add space below -** Add a space below.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    collapsedText: { control: 'text', name: 'Button text - collapsed' },
    expandedText: { control: 'text', name: 'Button text expanded' },
    buttonStyle: { control: 'select', options: ['Read more link', 'Read more button color', 'Read more button dark', 'Read more button light'], name: 'Button style' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsedText: 'Read more',
    expandedText: 'Read less',
    buttonStyle: 'Read more link',
    spaceBelow: 'Add space below',
    content: (
      <div className="py-4">
        <p className="text-[#5a554e]">
          This is the hidden content revealed when the user clicks "Read more". You can place any components here
          using the Site Studio canvas editor.
        </p>
      </div>
    ),
  },
};

export const ButtonColor: Story = {
  args: {
    collapsedText: 'Show more details',
    expandedText: 'Hide details',
    buttonStyle: 'Read more button color',
    spaceBelow: 'Add space below',
    content: (
      <div className="py-4">
        <p className="text-[#5a554e]">Additional details revealed by the read more button.</p>
      </div>
    ),
  },
};
