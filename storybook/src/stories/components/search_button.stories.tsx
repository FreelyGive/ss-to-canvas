import type { Meta, StoryObj } from '@storybook/react-vite';

import SearchButton from '@/components/search_button';

const meta = {
  title: 'Components/Search button',
  component: SearchButton,
  argTypes: {
    buttonText: { control: 'text', name: 'Button text' },
  },
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: 'Search',
  },
};
