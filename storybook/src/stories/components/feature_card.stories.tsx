import type { Meta, StoryObj } from '@storybook/react-vite';
import FeatureCard from '@/components/feature_card';

const meta = {
  title: 'Components/Feature card',
  component: FeatureCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    image: { control: 'object', name: 'Image icon' },
    altTag: { control: 'text', name: 'Alt tag' },
    headingElement: { control: 'select', options: ['Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'], name: 'Card heading element' },
    cardHeading: { control: 'text', name: 'Card heading' },
    description: { control: 'text', name: 'Description' },
    // --- Tab 2: Layout & Style ---
    layout: { control: 'select', options: ['Left aligned with image above text', 'Left aligned with image left of text', 'Center aligned with image above text', 'Left aligned with image left of text (How it works)'], name: 'Card layout' },
    backgroundColor: { control: 'color', name: 'Background color' },
    cardTextColor: { control: 'select', options: ['Dark text', 'Light text'], name: 'Text color' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    roundEdges: { control: 'select', options: ['None', 'Round edges'], name: 'Round border edges' },
    borderColor: { control: 'color', name: 'Border color' },
    padding: { control: 'select', options: ['None', 'Apply padding to card'], name: 'Padding' },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding if background color or border is set' },
    fillSpace: { control: 'select', options: ['Fit to content', 'Fill space available'], name: 'Height' },
    addSpaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingElement: 'Heading 3',
    cardHeading: 'Expert craftsmanship',
    description: 'We take pride in every detail, from the quality of materials to the precision of our manufacturing process.',
    layout: 'Left aligned with image above text',
    cardTextColor: 'Dark text',
    border: 'None',
    roundEdges: 'None',
    padding: 'Apply padding to card',
    fillSpace: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const WithImage: Story = {
  args: {
    image: { src: 'https://placehold.co/80x80/006699/ffffff?text=✓', alt: 'Quality icon', width: 80, height: 80 },
    altTag: 'Quality icon',
    headingElement: 'Heading 3',
    cardHeading: 'Free home delivery',
    description: 'Order by 2pm for next working day delivery. Free on all orders over £49.',
    layout: 'Center aligned with image above text',
    backgroundColor: '#f5f2eb',
    cardTextColor: 'Dark text',
    border: 'None',
    roundEdges: 'Round edges',
    padding: 'Apply padding to card',
    fillSpace: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const ImageLeft: Story = {
  args: {
    image: { src: 'https://placehold.co/80x80/006699/ffffff?text=i', alt: 'Info icon', width: 80, height: 80 },
    headingElement: 'Heading 3',
    cardHeading: 'How it works',
    description: 'Choose your frames, enter your prescription, and we handle the rest.',
    layout: 'Left aligned with image left of text',
    cardTextColor: 'Dark text',
    border: 'Add border',
    borderColor: '#e5e7eb',
    roundEdges: 'Round edges',
    padding: 'Apply padding to card',
    fillSpace: 'Fill space available',
    addSpaceBelow: 'None',
  },
};
