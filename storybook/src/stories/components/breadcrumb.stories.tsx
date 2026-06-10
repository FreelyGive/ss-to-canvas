import type { Meta, StoryObj } from '@storybook/react-vite';

import Breadcrumbs from '@/components/breadcrumb';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'If using **Position absolute top left** place breadcrumbs on the **Layout canvas** at the outer most level.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    displayStyle: {
      control: 'select',
      options: [
        'Show breadcrumbs on transparent background',
        'Show breadcrumbs on semi-transparent dark background',
        'Show breadcrumbs on solid dark background',
        'Show breadcrumbs on solid light background',
      ],
      name: 'Breadcrumbs color',
    },
    position: {
      control: 'select',
      options: ['Relative to where placed', 'Absolute position top left'],
      name: 'Breadcrumbs position',
    },
    breadcrumbs: { control: 'object' },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultBreadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Glasses', url: '/collections/glasses' },
  { label: 'Sunglasses', url: '/collections/sunglasses' },
];

export const Default: Story = {
  args: {
    displayStyle: 'Show breadcrumbs on semi-transparent dark background',
    position: 'Relative to where placed',
    breadcrumbs: defaultBreadcrumbs,
  },
};

export const TransparentBackground: Story = {
  args: {
    displayStyle: 'Show breadcrumbs on transparent background',
    position: 'Relative to where placed',
    breadcrumbs: defaultBreadcrumbs,
  },
};

export const SolidLight: Story = {
  args: {
    displayStyle: 'Show breadcrumbs on solid light background',
    position: 'Relative to where placed',
    breadcrumbs: defaultBreadcrumbs,
  },
};
