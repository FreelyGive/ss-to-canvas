import type { Meta, StoryObj } from '@storybook/react-vite';

import Text from '@/components/text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    content: { control: 'text', name: 'WYSIWYG' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      name: 'Text color',
      options: ['Dark text', 'Light text', 'Color text'],
    },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: {
      control: 'select',
      name: 'Border',
      options: ['None', 'Add border'],
    },
    borderColor: { control: 'color', name: 'Border color' },
    padding: {
      control: 'select',
      name: 'Padding',
      options: ['None', 'Apply padding around text'],
    },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding' },
    height: {
      control: 'select',
      name: 'Height',
      options: ['Fit to content', 'Fill available space'],
    },
    addSpaceBelow: {
      control: 'select',
      name: 'Add space below',
      options: ['None', 'Add space below'],
    },
    columnLayout: {
      control: 'select',
      name: 'Column layout',
      options: ['1 Column text (Default)', '2 Column text', '3 Column text'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: '<p>Enter some text...</p>',
    backgroundColor: '',
    textColor: 'Dark text',
    conditionalTextColorDarkBackground: '',
    conditionalTextColorLightBackground: '',
    conditionalTextColorColoredBackground: '',
    border: 'None',
    borderColor: '',
    padding: 'None',
    conditionallyApplyPadding: '',
    height: 'Fit to content',
    addSpaceBelow: 'None',
    columnLayout: '1 Column text (Default)',
  },
};

export const TwoColumns: Story = {
  args: {
    content: '<p>Varifocal lenses provide a seamless graduation of optical power from near to far, eliminating the need for multiple pairs of glasses. They are recommended for patients who need both distance and reading correction.</p><p>Our range includes premium digital varifocals optimised for screen use, and specialist lenses for driving and sports.</p>',
    backgroundColor: '',
    textColor: 'Dark text',
    border: 'None',
    padding: 'None',
    height: 'Fit to content',
    addSpaceBelow: 'None',
    columnLayout: '2 Column text',
  },
};

export const LightOnDark: Story = {
  args: {
    content: '<p>Premium eyewear crafted with care and precision.</p>',
    backgroundColor: '#002633',
    textColor: 'Light text',
    border: 'None',
    padding: 'Apply padding around text',
    height: 'Fit to content',
    addSpaceBelow: 'None',
    columnLayout: '1 Column text (Default)',
  },
};
