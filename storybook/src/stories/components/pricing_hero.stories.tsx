import type { Meta, StoryObj } from '@storybook/react-vite';
import PricingHero from '@/components/pricing_hero';

const meta = {
  title: 'Components/Pricing Hero',
  component: PricingHero,
  argTypes: {
    preHeading: { control: 'text', name: 'Pre heading' },
    heading: { control: 'text', name: 'Heading' },
    intro: { control: 'text', name: 'Intro' },
    leftPrice: { control: 'text', name: 'Left price' },
    leftSubtitle: { control: 'text', name: 'Left subtitle' },
    leftItems: { control: 'text', name: 'Left items' },
    leftVerdict: { control: 'text', name: 'Left verdict' },
    rightPrice: { control: 'text', name: 'Right price' },
    rightSubtitle: { control: 'text', name: 'Right subtitle' },
    rightItems: { control: 'text', name: 'Right items' },
    rightVerdict: { control: 'text', name: 'Right verdict' },
  },
} satisfies Meta<typeof PricingHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    preHeading: 'Our pricing',
    heading: 'One fair price<br>vs <em>a whole world of complexity.</em>',
    intro: 'We price the pair, not the parts.',
    leftPrice: '£85',
    leftSubtitle: 'Complete prescription glasses - The IOLLA Way',
    leftItems: 'Frames of your choice\nPrescription lenses included\nLens thinning, if you need it\nAnti-reflective coating included\nScratch-resistant coating included\nCase and cleaning cloth included',
    leftVerdict: "Genuinely. That's it.",
    rightPrice: '£300+',
    rightSubtitle: 'What a "starting price" can become',
    rightItems: 'Prescription lenses (sold separately)\nAnti-reflective coating (add-on)\nThinner lenses (premium upgrade)\nScratch-resistant coating (extra)\nStronger prescriptions cost more\nMore small print at the checkout',
    rightVerdict: 'The price grows without your control',
  },
};
