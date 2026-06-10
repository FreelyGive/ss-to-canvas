import type { Meta, StoryObj } from '@storybook/react-vite';
import ProofStrip, { ProofItem } from '@/components/proof_strip';

const meta = {
  title: 'Components/Proof Strip',
  component: ProofStrip,
  argTypes: {
    theme: { control: 'select', options: ['Cream', 'Light', 'Dark'], name: 'Theme' },
  },
} satisfies Meta<typeof ProofStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cream: Story = {
  args: {
    theme: 'Cream',
    items: (
      <>
        <ProofItem heading="Clear starting price" text="We don't hide the essentials in the small print. £85 means £85." />
        <ProofItem heading="Fairer thinning policy" text="Stronger prescriptions shouldn't mean being penalised on price." />
        <ProofItem heading="Showroom support" text="Helpful advice, no pressure, no optical jargon overload." />
        <ProofItem heading="Designed in-house" text="Better control over quality and cost from the very start." />
      </>
    ),
  },
};

export const Dark: Story = {
  args: {
    theme: 'Dark',
    items: (
      <>
        <ProofItem heading="Clear starting price" text="We don't hide the essentials in the small print. £85 means £85." light />
        <ProofItem heading="Fairer thinning policy" text="Stronger prescriptions shouldn't mean being penalised on price." light />
        <ProofItem heading="Showroom support" text="Helpful advice, no pressure, no optical jargon overload." light />
        <ProofItem heading="Designed in-house" text="Better control over quality and cost from the very start." light />
      </>
    ),
  },
};
