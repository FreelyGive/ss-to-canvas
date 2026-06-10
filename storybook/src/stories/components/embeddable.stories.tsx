import type { Meta, StoryObj } from '@storybook/react-vite';
import Embeddable from '@/components/embeddable';

const meta = {
  title: 'Components/Embeddable',
  component: Embeddable,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    embedSnippet: { control: 'text', name: 'Embed snippet' },
  },
} satisfies Meta<typeof Embeddable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    embedSnippet: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
};
