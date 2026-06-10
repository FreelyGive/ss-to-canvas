import type { Meta, StoryObj } from '@storybook/react-vite';

import SocialLinks from '@/components/social_links';

const meta = {
  title: 'Components/Social links',
  component: SocialLinks,
  argTypes: {
    // --- Tab 1: Content ---
    links: { control: 'object', name: 'Links' },
  },
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { platform: 'instagram', url: 'https://www.instagram.com/iolla', ariaLabel: 'Follow iolla on Instagram' },
      { platform: 'facebook', url: 'https://www.facebook.com/iolla', ariaLabel: 'Follow iolla on Facebook' },
      { platform: 'twitter', url: 'https://twitter.com/iollaeyewear', ariaLabel: 'Follow iolla on Twitter' },
      { platform: 'pinterest', url: 'https://www.pinterest.com/iolla', ariaLabel: 'Follow iolla on Pinterest' },
    ],
  },
};

export const Single: Story = {
  args: {
    links: [
      { platform: 'instagram', url: 'https://www.instagram.com/iolla', ariaLabel: 'Follow iolla on Instagram' },
    ],
  },
};
