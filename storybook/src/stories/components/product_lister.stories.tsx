import type { Meta, StoryObj } from '@storybook/react-vite';
import ProductLister from '@/components/product_lister';
import ProductCard from '@/components/product_card';

const sampleProducts = (
  <>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[
        { title: 'Round Frame in Black', price: '£95', image: { src: 'https://placehold.co/400x300/006699/ffffff?text=Product+1', alt: 'Round frame', width: 400, height: 300 }, url: '/products/round-black' },
        { title: 'Oval Frame in Tortoiseshell', price: '£95', image: { src: 'https://placehold.co/400x300/005580/ffffff?text=Product+2', alt: 'Oval frame', width: 400, height: 300 }, url: '/products/oval-tort' },
        { title: 'Rectangle Frame in Slate', price: '£95', image: { src: 'https://placehold.co/400x300/004466/ffffff?text=Product+3', alt: 'Rectangle frame', width: 400, height: 300 }, url: '/products/rect-slate' },
        { title: 'Cat Eye Frame in Crystal', price: '£95', image: { src: 'https://placehold.co/400x300/002633/ffffff?text=Product+4', alt: 'Cat eye frame', width: 400, height: 300 }, url: '/products/cat-eye' },
      ].map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  </>
);

const meta = {
  title: 'Components/Product lister',
  component: ProductLister,
  parameters: {
    docs: {
      description: {
        component: 'Use the Product lister to display a grid of product cards. Products are sourced from Shopify and rendered as product reference cards. The number of columns adjusts automatically based on viewport width.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    width: { control: 'select', options: ['Boxed width', 'Full width'], name: 'Width of content area' },
    padding: { control: 'select', options: ['None', 'Top and bottom', 'Top only', 'Bottom only'], name: 'Padding top and bottom' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    backgroundImageDesktop: { control: 'object', name: 'Background image' },
    alternativeImageForPhone: { control: 'boolean', name: 'Alternative image for phone' },
    backgroundImageMobile: { control: 'object', name: 'Phone image' },
  },
} satisfies Meta<typeof ProductLister>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 'Boxed width',
    padding: 'Top and bottom',
    products: sampleProducts,
  },
};

export const FullWidth: Story = {
  args: {
    width: 'Full width',
    padding: 'Top and bottom',
    backgroundColor: '#f5f2eb',
    products: sampleProducts,
  },
};
