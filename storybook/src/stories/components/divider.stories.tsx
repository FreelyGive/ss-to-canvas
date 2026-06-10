import type { Meta, StoryObj } from '@storybook/react-vite';

import Divider from '@/components/divider';

const meta = {
  title: 'Components/Divider line',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: `# Using the divider line component
- Use the divider line to add a horizontal divider line to a layout.

# Layout
- **Thickness -** Set the thickness of the divider line.
- **Space above -** Set a vertical space above the divider.
- **Space below -** Set a vertical space below the divider.

# Divider color
- **Color -** Set the color of the divider.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    thickness: { control: 'number', name: 'Thickness' },
    spaceAbove: { control: 'number', name: 'Space above' },
    spaceBelow: { control: 'number', name: 'Space below' },
    color: { control: 'color', name: 'Divider color' },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thickness: 1,
    spaceAbove: 0,
    spaceBelow: 0,
    color: '#e5e7eb',
  },
};

export const Thick: Story = {
  args: {
    thickness: 4,
    spaceAbove: 24,
    spaceBelow: 24,
    color: '#006699',
  },
};

export const WithSpacing: Story = {
  args: {
    thickness: 1,
    spaceAbove: 48,
    spaceBelow: 48,
    color: '#5a554e',
  },
};
