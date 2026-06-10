import type { Meta, StoryObj } from '@storybook/react-vite';
import GiftCardHowtoOptions from '@/components/gift_card_howto_options';

// cpt_gift_card_howto_options — Gift Card purchase options and how-to widget.
// No configurable SS form fields. Options and instructions are rendered from Shopify at runtime.
const meta = {
  title: 'Components/Gift Card how-to options',
  component: GiftCardHowtoOptions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Gift card value selector and how-to instructions, loaded from Shopify at runtime. No configurable fields in Site Studio. Storybook shows representative static placeholder content.',
      },
    },
  },
} satisfies Meta<typeof GiftCardHowtoOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
