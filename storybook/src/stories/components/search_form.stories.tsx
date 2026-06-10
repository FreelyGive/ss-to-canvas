import type { Meta, StoryObj } from '@storybook/react-vite';

import SearchForm from '@/components/search_form';

const meta = {
  title: 'Components/Search Form',
  component: SearchForm,
  argTypes: {
    defaultQuery: {
      control: 'text',
      name: 'Default query',
    },
    className: {
      control: 'text',
      name: 'Class name',
    },
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultQuery: '',
  },
};

export const WithQuery: Story = {
  args: {
    defaultQuery: 'glasses',
  },
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl">
        <Story />
      </div>
    ),
  ],
  args: {
    defaultQuery: '',
  },
};
