import type { Meta, StoryObj } from '@storybook/react-vite';
import PriceCard from '@/components/price_card';

const meta = {
  title: 'Components/Price card',
  component: PriceCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    image: { control: 'object', name: 'Image' },
    altTag: { control: 'text', name: 'Alt tag' },
    headingElement: { control: 'select', options: ['h2', 'h3', 'h4', 'h5', 'h6'], name: 'Card heading element' },
    heading: { control: 'text', name: 'Heading' },
    subHeading: { control: 'text', name: 'Sub heading' },
    tickListItems: { control: 'object', name: 'Tick list item' },
    currency: { control: 'text', name: 'Currency' },
    price: { control: 'text', name: 'Price' },
    term: { control: 'text', name: 'Term' },
    callToAction: { control: 'text', name: 'Call to action' },
    link: { control: 'text', name: 'Link to page or URL' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: { control: 'select', options: ['Dark text', 'Light text'], name: 'Text color' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    borderColor: { control: 'color', name: 'Border color' },
    padding: { control: 'select', options: ['None', 'Apply padding to card'], name: 'Padding' },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding if background color or border is set' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof PriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingElement: 'h3',
    heading: 'Standard Lenses',
    subHeading: 'Single vision included',
    tickListItems: ['Single vision prescription', 'Scratch-resistant coating', 'UV protection'],
    currency: '£',
    price: '49',
    term: 'per pair',
    callToAction: 'Choose lenses',
    link: '/lenses',
    backgroundColor: '#ffffff',
    textColor: 'Dark text',
    border: 'None',
    borderColor: '#e5e7eb',
    padding: 'None',
    spaceBelow: 'Add space below',
  },
};

export const Premium: Story = {
  args: {
    image: { src: 'https://placehold.co/400x300/006699/ffffff?text=Premium', alt: 'Premium lenses', width: 400, height: 300 },
    headingElement: 'h3',
    heading: 'Premium Lenses',
    subHeading: 'Our most advanced option',
    tickListItems: ['Anti-reflective coating', 'UV protection', 'Scratch resistant', 'Blue light filter'],
    currency: '£',
    price: '125',
    term: 'per pair',
    callToAction: 'Choose premium',
    link: '/lenses/premium',
    backgroundColor: '#f5f2eb',
    textColor: 'Dark text',
    border: 'Add border',
    borderColor: '#e5e7eb',
    padding: 'Apply padding to card',
    spaceBelow: 'Add space below',
  },
};
