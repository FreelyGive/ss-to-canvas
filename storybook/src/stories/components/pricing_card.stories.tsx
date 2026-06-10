import type { Meta, StoryObj } from '@storybook/react-vite';
import PricingCard from '@/components/pricing_card';

const meta = {
  title: 'Components/Pricing Card',
  component: PricingCard,
  argTypes: {
    chip: { control: 'text', name: 'Chip' },
    heading: { control: 'text', name: 'Heading' },
    text: { control: 'text', name: 'Text' },
    price: { control: 'text', name: 'Price' },
    linkUrl: { control: 'text', name: 'Link URL' },
    linkLabel: { control: 'text', name: 'Link label' },
    linkVariant: {
      control: 'select',
      options: ['Solid', 'Outline Dark', 'Outline Light'],
      name: 'Link variant',
    },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CorePair: Story = {
  args: {
    chip: 'Our core pair',
    heading: 'Complete prescription glasses',
    text: 'Frames, prescription lenses, thinning if needed, and anti-reflective and scratch-resistant coatings. Everything in one honest price - nothing more to add.',
    price: '£85 = everything included',
    linkUrl: '/collections/glasses',
    linkLabel: 'Shop glasses',
    linkVariant: 'Solid',
  },
};

export const AddOn: Story = {
  args: {
    chip: 'Optional add-on',
    heading: 'Blue light filtering',
    text: 'For people spending long days in front of screens. Can be added to prescription and non-prescription glasses alike.',
    price: 'Add for +£30',
    linkUrl: '/bluelightfilter',
    linkLabel: 'Find out more',
    linkVariant: 'Outline Dark',
  },
};

export const Varifocal: Story = {
  args: {
    chip: 'Multifocal lenses',
    heading: 'Varifocal lenses',
    text: 'Available in the showroom so we can get measurements right and ensure the fit is comfortable. Premium and Advanced Premium options available.',
    price: 'Just £185 = frame, lenses, coating & thinning',
    linkUrl: '/varifocals',
    linkLabel: 'Learn more',
    linkVariant: 'Outline Dark',
  },
};
