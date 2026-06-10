import type { Meta, StoryObj } from '@storybook/react-vite';
import ProcessSteps, { ProcessStep } from '@/components/process_steps';

const meta = {
  title: 'Components/Process Steps',
  component: ProcessSteps,
  argTypes: {
    preHeading: { control: 'text', name: 'Pre heading' },
    heading: { control: 'text', name: 'Heading' },
    text: { control: 'text', name: 'Text' },
    videoUrl: { control: 'text', name: 'Video URL' },
    leftColumnTitle: { control: 'text', name: 'Left column title' },
    leftColumnFooter: { control: 'text', name: 'Left column footer' },
    rightColumnTitle: { control: 'text', name: 'Right column title' },
    rightColumnFooter: { control: 'text', name: 'Right column footer' },
  },
} satisfies Meta<typeof ProcessSteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    preHeading: 'How we keep pricing fair',
    heading: 'We cut out the <em>middleman</em>,<br>not the quality.',
    text: 'Traditional eyewear pricing often gets inflated by layers between design, manufacturing, distribution and retail. We keep things tighter, cleaner and closer to home so more of the value stays in the product.',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/809818220/rendition/720p/file.mp4?loc=external&signature=5357f6799b755736d6e7c8edb255ab55e2c45882ac667df251d40a90c7b2cd50',
    leftColumnTitle: 'The old way',
    leftColumnFooter: 'More layers often means more margin - not better glasses.',
    rightColumnTitle: 'The IOLLA way',
    rightColumnFooter: "That's the honest way to price good eyewear.",
    leftSteps: (
      <>
        <ProcessStep number={1} title="Big brand mark-up" text="Licence fees, celebrity endorsements, advertising - you pay for the name, not the glasses." />
        <ProcessStep number={2} title="Distributor layer" text="Another party in the chain, adding margin before the product even reaches a shelf." />
        <ProcessStep number={3} title="Retail add-ons" text="Lenses, coatings and thinning are broken out and priced individually at the till." />
        <ProcessStep number={4} title="You pay more" text="For margins that exist largely to fund layers that never benefit you directly." />
      </>
    ),
    rightSteps: (
      <>
        <ProcessStep number={1} title="Designed in-house" text="Every frame is designed by our own team. No licensing fees, no external studio costs." light />
        <ProcessStep number={2} title="Clean supply chain" text="We work directly with our manufacturing partners. No middlemen, no hidden steps." light />
        <ProcessStep number={3} title="Our showrooms - direct model" text="We sell directly, which means we control the experience and strip out the margin." light />
        <ProcessStep number={4} title="One fair price" text="£85, everything included. No extras, no surprises." light />
      </>
    ),
  },
};

export const NoVideo: Story = {
  args: {
    ...Default.args,
    videoUrl: undefined,
  },
};
