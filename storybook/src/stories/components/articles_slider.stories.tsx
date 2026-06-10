import type { Meta, StoryObj } from '@storybook/react-vite';
import ArticlesSlider from '@/components/articles_slider';

const meta = {
  title: 'Components/Articles slider',
  component: ArticlesSlider,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    heading: { control: 'text', name: 'Heading' },
    // --- Tab 2: Layout & Style ---
    headingColor: {
      control: 'select',
      options: ['Dark', 'Light', 'Color'],
      name: 'Heading color',
    },
    headingAlignment: {
      control: 'select',
      options: ['Left', 'Center', 'Right'],
      name: 'Align heading text',
    },
    containerBackgroundColor: { control: 'color', name: 'Container background color' },
    padding: {
      control: 'select',
      options: ['None', 'Top and bottom', 'Top only', 'Bottom only'],
      name: 'Padding top and bottom',
    },
    cardBackgroundColor: { control: 'color', name: 'Background color' },
    cardTextColor: {
      control: 'select',
      options: ['Dark text', 'Light text'],
      name: 'Text color',
    },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    cardBorder: {
      control: 'select',
      options: ['None', 'Add border'],
      name: 'Border',
    },
    borderColor: { control: 'color', name: 'Border color' },
  },
} satisfies Meta<typeof ArticlesSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Latest News',
    headingColor: 'Dark',
    headingAlignment: 'Left',
    containerBackgroundColor: '#ffffff',
    padding: 'Top and bottom',
    cardBackgroundColor: '#ffffff',
    cardTextColor: 'Dark text',
    cardBorder: 'None',
  },
};

export const LightTextOnDark: Story = {
  args: {
    heading: 'From Our Blog',
    headingColor: 'Light',
    headingAlignment: 'Center',
    containerBackgroundColor: '#006699',
    padding: 'Top and bottom',
    cardBackgroundColor: '#005580',
    cardTextColor: 'Light text',
    cardBorder: 'Add border',
    borderColor: '#ffffff33',
  },
};
