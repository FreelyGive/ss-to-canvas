import type { Meta, StoryObj } from '@storybook/react-vite';
import UtilitiesBar from '@/components/utilities_bar';

const meta = {
  title: 'Components/Utilities bar',
  component: UtilitiesBar,
  parameters: {
    docs: {
      description: {
        component: `# Using the Horizontal utilities bar.
- This component displays a horizontal Utilities menu and Social icons.
- For narrow screens like tablets and phones, use the Utilities bar - vertical component.`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      name: 'Orientation',
      options: ['Horizontal', 'Vertical'],
    },
  },
} satisfies Meta<typeof UtilitiesBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'Horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'Vertical',
  },
};
