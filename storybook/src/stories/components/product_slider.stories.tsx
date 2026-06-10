import type { Meta, StoryObj } from '@storybook/react-vite';
import ProductSlider from '@/components/product_slider';

// cpt_product_slider — dynamic Shopify product carousel.
// No configurable SS form fields. Products are loaded at runtime from Shopify.
const meta = {
  title: 'Components/Product slider',
  component: ProductSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dynamic product carousel loaded from Shopify at runtime. No configurable fields in Site Studio. The Storybook preview shows placeholder product cards.',
      },
    },
  },
} satisfies Meta<typeof ProductSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
