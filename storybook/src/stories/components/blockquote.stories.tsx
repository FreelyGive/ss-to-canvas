import type { Meta, StoryObj } from '@storybook/react-vite';

import Blockquote from '@/components/blockquote';

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    quote: { control: 'text', name: 'Quote' },
    name: { control: 'text', name: 'Name' },
    occupationOrganization: { control: 'text', name: 'Occupation / Organization' },
    sourceUrl: { control: 'text', name: 'Source URL' },
    showSource: { control: 'boolean', name: 'Show source' },
    nameOfSource: { control: 'text', name: 'Name of source' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      options: ['Dark text', 'Light text'],
      name: 'Text color',
    },
    leftBorderColor: { control: 'color', name: 'Left border color' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    conditionallyApplyPaddingIfBackgroundColorIsSet: { control: 'text', name: 'Conditionally apply padding if background color is set' },
    heightBehavior: {
      control: 'select',
      options: ['Fit to content', 'Fill space available'],
      name: 'Height',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote: 'The quality of the frames and the attention to detail is second to none.',
    name: 'Jane Smith',
    occupationOrganization: 'Director, Example Co.',
    sourceUrl: '',
    showSource: false,
    nameOfSource: '',
    backgroundColor: '',
    textColor: 'Dark text',
    leftBorderColor: '#006699',
    heightBehavior: 'Fit to content',
    addSpaceBelow: 'None',
  },
};

export const LightOnDark: Story = {
  args: {
    quote: 'iolla transformed how I see the world — quite literally.',
    name: 'Alex Johnson',
    occupationOrganization: 'Photographer',
    backgroundColor: '#002633',
    textColor: 'Light text',
    leftBorderColor: '#ffffff',
    heightBehavior: 'Fit to content',
    addSpaceBelow: 'None',
  },
};

export const WithSource: Story = {
  args: {
    quote: 'Five stars — exceptional service from start to finish.',
    name: 'Sam Lee',
    occupationOrganization: 'Customer',
    sourceUrl: 'https://www.trustpilot.com',
    showSource: true,
    nameOfSource: 'Trustpilot',
    backgroundColor: '',
    textColor: 'Dark text',
    leftBorderColor: '#006699',
    heightBehavior: 'Fit to content',
    addSpaceBelow: 'Add space below',
  },
};
