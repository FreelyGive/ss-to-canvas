import type { Meta, StoryObj } from '@storybook/react-vite';
import NewsletterSignup from '@/components/newsletter_signup';

const meta = {
  title: 'Components/Newsletter signup',
  component: NewsletterSignup,
  argTypes: {
    newsletterCopy: { control: 'text', name: 'Newsletter copy' },
  },
} satisfies Meta<typeof NewsletterSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    newsletterCopy: 'Stay up to date with the latest frames, lens technology, and eye health advice from iolla.',
  },
};

export const AlternativeCopy: Story = {
  args: {
    newsletterCopy: 'Be the first to hear about new collections, showroom events, and exclusive offers.',
  },
};
