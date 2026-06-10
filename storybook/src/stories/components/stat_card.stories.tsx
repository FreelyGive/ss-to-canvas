import type { Meta, StoryObj } from '@storybook/react-vite';
import StatCard from '@/components/stat_card';

const meta = {
  title: 'Components/Stat card',
  component: StatCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    imageIcon: { control: 'text', name: 'Image icon' },
    altTag: { control: 'text', name: 'Alt tag' },
    stat: { control: 'text', name: 'Stat' },
    label: { control: 'text', name: 'Label' },
    // --- Tab 2: Layout & Style ---
    cardLayout: {
      control: 'select',
      name: 'Card layout',
      options: ['Left aligned', 'Center aligned'],
    },
    statSize: {
      control: 'select',
      name: 'Stat size',
      options: ['Large', 'Medium', 'Small'],
    },
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      name: 'Text color',
      options: ['Dark text', 'Light text'],
    },
    conditionalTextColorLightBackground: {
      control: 'text',
      name: 'Conditional text color light background',
    },
    conditionalTextColorDarkBackground: {
      control: 'text',
      name: 'Conditional text color dark background',
    },
    conditionalTextColorColoredBackground: {
      control: 'text',
      name: 'Conditional text color colored background',
    },
    border: {
      control: 'select',
      name: 'Border',
      options: ['None', 'Add border'],
    },
    borderColor: { control: 'color', name: 'Border color' },
    padding: {
      control: 'select',
      name: 'Padding',
      options: ['None', 'Apply padding to card'],
    },
    conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet: {
      control: 'text',
      name: 'Conditionally apply padding if background color or border is set',
    },
    height: {
      control: 'select',
      name: 'Height',
      options: ['Fit to content', 'Fill space available'],
    },
    addSpaceBelow: {
      control: 'select',
      name: 'Add space below',
      options: ['None', 'Add space below'],
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageIcon: 'https://placehold.co/60x60/006699/ffffff?text=Icon',
    altTag: 'Stat icon',
    stat: '1,250',
    label: 'Projects launched',
    cardLayout: 'Left aligned',
    statSize: 'Large',
    backgroundColor: '',
    textColor: 'Dark text',
    conditionalTextColorLightBackground: 'coh-style-card-text-light-background',
    conditionalTextColorDarkBackground: 'coh-style-card-text-dark-background',
    conditionalTextColorColoredBackground: 'coh-style-card-text-colored-background',
    border: 'None',
    borderColor: '',
    padding: 'None',
    conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet: 'coh-style-padding-small',
    height: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const CenterAligned: Story = {
  args: {
    imageIcon: '',
    altTag: '',
    stat: '15',
    label: 'Years in business',
    cardLayout: 'Center aligned',
    statSize: 'Large',
    backgroundColor: '#002633',
    textColor: 'Light text',
    conditionalTextColorLightBackground: 'coh-style-card-text-light-background',
    conditionalTextColorDarkBackground: 'coh-style-card-text-dark-background',
    conditionalTextColorColoredBackground: 'coh-style-card-text-colored-background',
    border: 'None',
    borderColor: '',
    padding: 'Apply padding to card',
    conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet: 'coh-style-padding-small',
    height: 'Fit to content',
    addSpaceBelow: 'None',
  },
};

export const WithBorder: Story = {
  args: {
    imageIcon: 'https://placehold.co/60x60/006699/ffffff?text=Icon',
    altTag: 'Stat icon',
    stat: '50,000+',
    label: 'Happy customers',
    cardLayout: 'Left aligned',
    statSize: 'Medium',
    backgroundColor: '#f5f2eb',
    textColor: 'Dark text',
    conditionalTextColorLightBackground: 'coh-style-card-text-light-background',
    conditionalTextColorDarkBackground: 'coh-style-card-text-dark-background',
    conditionalTextColorColoredBackground: 'coh-style-card-text-colored-background',
    border: 'Add border',
    borderColor: '#006699',
    padding: 'Apply padding to card',
    conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet: 'coh-style-padding-small',
    height: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};
