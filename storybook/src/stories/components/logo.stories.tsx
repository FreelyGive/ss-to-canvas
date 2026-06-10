import type { Meta, StoryObj } from '@storybook/react-vite';

import Logo from '@/components/logo';

const meta = {
  title: 'Components/Assets/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Site branding/logo component. Links to the home page and displays the site name for accessibility.',
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <Story />
      </div>
    ),
  ],
};
