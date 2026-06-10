import type { Meta, StoryObj } from '@storybook/react-vite';
import ProductListerFilters from '@/components/product_lister_filters';

const meta = {
  title: 'Components/Product lister filters',
  component: ProductListerFilters,
  argTypes: {
    showShapeFilter: { control: 'boolean', name: 'Shape filter' },
    showSizeFilter: { control: 'boolean', name: 'Size filter' },
    showMaterialFilter: { control: 'boolean', name: 'Material filter' },
    showColourFilter: { control: 'boolean', name: 'Colour filter' },
  },
} satisfies Meta<typeof ProductListerFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showShapeFilter: true,
    showSizeFilter: true,
    showMaterialFilter: true,
    showColourFilter: true,
  },
};

export const ShapeAndSizeOnly: Story = {
  args: {
    showShapeFilter: true,
    showSizeFilter: true,
    showMaterialFilter: false,
    showColourFilter: false,
  },
};
