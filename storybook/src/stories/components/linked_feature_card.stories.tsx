import type { Meta, StoryObj } from '@storybook/react-vite';
import LinkedFeatureCard from '@/components/linked_feature_card';

const meta = {
  title: 'Components/Linked feature card',
  component: LinkedFeatureCard,
  parameters: {
    docs: {
      description: {
        component: 'Padding has been applied because you have set a background color or border.',
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
    callToAction: { control: 'text', name: 'Call to action' },
    link: { control: 'object', name: 'Link to page or URL' },
    buttonStyle: { control: 'select', options: ['Primary button blue', 'Primary button green', 'Primary button orange', 'Secondary button blue', 'Secondary button green', 'Secondary button orange'], name: 'Button style' },
    // --- Tab 2: Layout & Style ---
    layout: { control: 'select', options: ['Left aligned with image above text', 'Left aligned with image left of text', 'Center aligned with image above text'], name: 'Card layout' },
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: { control: 'select', options: ['Dark text', 'Light text'], name: 'Text color' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    roundEdges: { control: 'select', options: ['None', 'Add round edges'], name: 'Round border edges' },
    borderColor: { control: 'color', name: 'Border color' },
    padding: { control: 'select', options: ['None', 'Apply padding to card'], name: 'Padding' },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding if background color or border is set.' },
    height: { control: 'select', options: ['Fit to content', 'Fill space available'], name: 'Height' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof LinkedFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingElement: 'Heading 3',
    cardHeading: 'Our Glasses',
    description: 'Browse our extensive collection of frames for every face shape and style.',
    callToAction: 'Shop glasses',
    link: { url: '/glasses', target: '_self' },
    buttonStyle: 'Primary button blue',
    layout: 'Left aligned with image above text',
    textColor: 'Dark text',
    border: 'None',
    roundEdges: 'None',
    padding: 'None',
    height: 'Fill space available',
    spaceBelow: 'Add space below',
  },
};

export const WithImage: Story = {
  args: {
    image: { src: 'https://placehold.co/80x80/006699/ffffff?text=Img', alt: 'Card image', width: 80, height: 80 },
    altTag: 'Card image',
    headingElement: 'Heading 3',
    cardHeading: 'Sunglasses',
    description: 'Premium prescription sunglasses with polarised and photochromic lens options.',
    callToAction: 'Shop sunglasses',
    link: { url: '/sunglasses', target: '_self' },
    buttonStyle: 'Primary button green',
    layout: 'Center aligned with image above text',
    backgroundColor: '#f5f2eb',
    textColor: 'Dark text',
    border: 'None',
    roundEdges: 'Add round edges',
    padding: 'Apply padding to card',
    height: 'Fill space available',
    spaceBelow: 'Add space below',
  },
};

export const ImageLeft: Story = {
  args: {
    image: { src: 'https://placehold.co/80x80/002633/ffffff?text=Img', alt: 'Card image', width: 80, height: 80 },
    headingElement: 'Heading 3',
    cardHeading: 'Eye tests',
    description: 'Comprehensive eye exams by expert optometrists.',
    callToAction: 'Book an eye test',
    link: { url: '/eye-tests', target: '_self' },
    buttonStyle: 'Secondary button blue',
    layout: 'Left aligned with image left of text',
    textColor: 'Dark text',
    border: 'Add border',
    roundEdges: 'Add round edges',
    borderColor: '#e5e7eb',
    padding: 'Apply padding to card',
    height: 'Fill space available',
    spaceBelow: 'Add space below',
  },
};
