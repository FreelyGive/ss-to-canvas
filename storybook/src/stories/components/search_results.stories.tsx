import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchResults from '@/components/search_results';

const meta = {
  title: 'Components/Search Results',
  component: SearchResults,
  parameters: { layout: 'padded' },
  argTypes: {
    query: { control: 'text', name: 'Query' },
  },
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { query: 'glasses' },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-5xl p-6">
        <Story />
      </div>
    ),
  ],
};

export const NoResults: Story = {
  args: { query: 'xyzzy', results: [] },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-5xl p-6">
        <Story />
      </div>
    ),
  ],
};
