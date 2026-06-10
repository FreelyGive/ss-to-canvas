import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import Spacer from '@/components/spacer';

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    docs: {
      description: {
        component: `# Using the Spacer component
- Use the spacer component to add additional vertical space within a layout.
- The spacer component is useful for fine control over content position by device width.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    desktopHeight: { control: 'number', name: 'Desktop' },
    tabletHeight: { control: 'number', name: 'Tablet' },
    phoneHeight: { control: 'number', name: 'Phone' },
  },
  decorators: [
    (Story) => (
      <>
        <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', textAlign: 'center' }}>Content Above</div>
        <Story />
        <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', textAlign: 'center' }}>Content Below</div>
      </>
    ),
  ],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    desktopHeight: 64,
    tabletHeight: 48,
    phoneHeight: 32,
  },
};
