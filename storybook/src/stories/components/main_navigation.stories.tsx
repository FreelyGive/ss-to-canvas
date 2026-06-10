import type { Meta, StoryObj } from '@storybook/react-vite';
import MainNavigation from '@/components/main_navigation';

const meta = {
  title: 'Components/Header/Main Navigation',
  component: MainNavigation,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    links: { control: false, name: 'Links' },
  },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="relative border-b border-gray-200 bg-white px-8 py-3">
        <div className="flex items-center justify-center">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const FewLinks: Story = {
  args: {
    links: [
      { id: '1', title: 'Glasses', url: '/glasses' },
      { id: '2', title: 'Sunglasses', url: '/sunglasses' },
      { id: '3', title: 'Varifocals', url: '/varifocals' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="relative border-b border-gray-200 bg-white px-8 py-3">
        <div className="flex items-center justify-center">
          <Story />
        </div>
      </div>
    ),
  ],
};
