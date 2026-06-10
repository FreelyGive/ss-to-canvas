import type { Meta, StoryObj } from '@storybook/react-vite';
import ReviewsWidget from '@/components/reviews_widget';

const meta = {
  title: 'Components/Reviews.io summary',
  component: ReviewsWidget,
  parameters: {
    docs: {
      description: {
        component: 'Padding has been applied because you have set a background color.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background colour' },
    padding: { control: 'select', options: ['None', 'Apply padding to component'], name: 'Padding' },
    conditionallyApplyPaddingIfBackgroundColorIsSet: { control: 'text', name: 'Conditionally apply padding if background color is set' },
  },
} satisfies Meta<typeof ReviewsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: 'Apply padding to component',
  },
};

export const WithBackground: Story = {
  args: {
    backgroundColor: '#f5f2eb',
    padding: 'Apply padding to component',
  },
};
