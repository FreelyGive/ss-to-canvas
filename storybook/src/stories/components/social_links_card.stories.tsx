import type { Meta, StoryObj } from '@storybook/react-vite';

import SocialLinksCard from '@/components/social_links_card';

const meta = {
  title: 'Components/Social links card',
  component: SocialLinksCard,
  parameters: {
    docs: {
      description: {
        component: 'Text and icon color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    label: { control: 'text', name: 'Label' },
    links: { control: 'object', name: 'Links' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      options: ['Dark text', 'Light text'],
      name: 'Text color',
    },
    iconStyle: {
      control: 'select',
      options: ['Color icons', 'Dark icons', 'Light icons'],
      name: 'Icon style',
    },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: {
      control: 'select',
      options: ['None', 'Add border'],
      name: 'Border',
    },
    borderColor: { control: 'color', name: 'Border color' },
    padding: {
      control: 'select',
      options: ['None', 'Apply padding to card'],
      name: 'Padding',
    },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding' },
    height: {
      control: 'select',
      options: ['Fit to content', 'Fill space available'],
      name: 'Height',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Space below',
    },
  },
} satisfies Meta<typeof SocialLinksCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Follow us',
    links: [
      { platform: 'instagram', url: 'https://www.instagram.com/iolla' },
      { platform: 'facebook', url: 'https://www.facebook.com/iolla' },
      { platform: 'twitter', url: 'https://twitter.com/iollaeyewear' },
      { platform: 'pinterest', url: 'https://www.pinterest.com/iolla' },
    ],
    backgroundColor: '',
    textColor: 'Dark text',
    iconStyle: 'Color icons',
    conditionalTextColorLightBackground: '',
    conditionalTextColorDarkBackground: '',
    conditionalTextColorColoredBackground: '',
    border: 'None',
    borderColor: '',
    padding: 'None',
    conditionallyApplyPadding: '',
    height: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const DarkBackground: Story = {
  args: {
    label: 'Follow us',
    links: [
      { platform: 'instagram', url: 'https://www.instagram.com/iolla' },
      { platform: 'facebook', url: 'https://www.facebook.com/iolla' },
      { platform: 'twitter', url: 'https://twitter.com/iollaeyewear' },
    ],
    backgroundColor: '#002633',
    textColor: 'Light text',
    iconStyle: 'Light icons',
    border: 'None',
    borderColor: '',
    padding: 'Apply padding to card',
    conditionallyApplyPadding: '',
    height: 'Fit to content',
    addSpaceBelow: 'None',
  },
};
