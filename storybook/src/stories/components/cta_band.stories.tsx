import type { Meta, StoryObj } from '@storybook/react-vite';
import CtaBand from '@/components/cta_band';

const meta = {
  title: 'Components/CTA Band',
  component: CtaBand,
  argTypes: {
    heading: { control: 'text', name: 'Heading' },
    subtext: { control: 'text', name: 'Subtext' },
    theme: { control: 'select', options: ['Dark', 'Brand', 'Light'], name: 'Theme' },
    primaryLinkUrl: { control: 'text', name: 'Primary link URL' },
    primaryLinkLabel: { control: 'text', name: 'Primary link label' },
    secondaryLinkUrl: { control: 'text', name: 'Secondary link URL' },
    secondaryLinkLabel: { control: 'text', name: 'Secondary link label' },
  },
} satisfies Meta<typeof CtaBand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    heading: 'A better way<br>to buy <em>eyewear.</em>',
    subtext: 'Good design, proper lenses, fair pricing.\n£85 - everything you need included.',
    theme: 'Dark',
    primaryLinkUrl: '/collections/glasses',
    primaryLinkLabel: 'Shop glasses',
    secondaryLinkUrl: '/showrooms',
    secondaryLinkLabel: 'Visit a showroom',
  },
};

export const Brand: Story = {
  args: {
    ...Dark.args,
    theme: 'Brand',
  },
};

export const Light: Story = {
  args: {
    heading: 'Ready to find your frames?',
    subtext: 'Free shipping, free returns, free love.',
    theme: 'Light',
    primaryLinkUrl: '/collections/glasses',
    primaryLinkLabel: 'Shop glasses',
    secondaryLinkUrl: '/showrooms',
    secondaryLinkLabel: 'Visit a showroom',
  },
};
