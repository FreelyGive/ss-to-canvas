import type { Meta, StoryObj } from '@storybook/react-vite';
import ReviewsIoSlider from '@/components/reviews_io_slider';

// cpt_reviews_io_slider — dynamic Reviews.io carousel widget.
// No configurable SS form fields. Reviews are loaded at runtime from Reviews.io.
const meta = {
  title: 'Components/Reviews.io slider',
  component: ReviewsIoSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dynamic Reviews.io carousel loaded at runtime. No configurable fields in Site Studio. The Storybook preview shows representative placeholder reviews.',
      },
    },
  },
} satisfies Meta<typeof ReviewsIoSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
