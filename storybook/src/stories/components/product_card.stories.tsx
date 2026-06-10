import type { Meta, StoryObj } from '@storybook/react-vite';
import ProductCard from '@/components/product_card';

const meta = {
  title: 'Components/Product card',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    product: { control: 'object', name: 'Product reference' },
    overlayText: { control: 'text', name: 'Overlay Text' },
    textColour: { control: 'color', name: 'Text Colour' },
    toggleFeaturedProductCard: { control: 'boolean', name: 'Toggle featured product card' },
    // --- Tab 2: Layout & Style ---
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    borderColor: { control: 'color', name: 'Border color' },
    height: { control: 'select', options: ['Fit to content', 'Fill space available'], name: 'Height' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      title: 'Round Frame in Black',
      price: '£95',
      image: { src: 'https://placehold.co/400x300/006699/ffffff?text=Round+Frames', alt: 'Round frames', width: 400, height: 300 },
      url: '/products/round-black',
    },
    toggleFeaturedProductCard: false,
    border: 'None',
    height: 'Fill space available',
    spaceBelow: 'None',
  },
};

export const WithOverlay: Story = {
  args: {
    product: {
      title: 'Oval Frame in Tortoiseshell',
      price: '£95',
      image: { src: 'https://placehold.co/400x300/005580/ffffff?text=New+Frames', alt: 'New frames', width: 400, height: 300 },
      url: '/products/oval-tort',
    },
    overlayText: 'New',
    toggleFeaturedProductCard: false,
    border: 'None',
    height: 'Fill space available',
    spaceBelow: 'None',
  },
};

export const Featured: Story = {
  args: {
    product: {
      title: 'Rectangle Frame in Slate',
      price: '£95',
      image: { src: 'https://placehold.co/800x600/004466/ffffff?text=Featured', alt: 'Featured product', width: 800, height: 600 },
      url: '/products/rect-slate',
    },
    toggleFeaturedProductCard: true,
    border: 'None',
    height: 'Fill space available',
    spaceBelow: 'None',
  },
};
