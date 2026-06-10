import type { Meta, StoryObj } from '@storybook/react-vite';
import SupportCard from '@/components/support_card';

const meta = {
  title: 'Components/Support Card',
  component: SupportCard,
  argTypes: {
    icon: {
      control: 'select',
      options: ['Showroom', 'Email', 'Phone', 'Chat', 'Location'],
      name: 'Icon',
    },
    heading: { control: 'text', name: 'Heading' },
    text: { control: 'text', name: 'Text' },
    hours: { control: 'text', name: 'Hours' },
  },
} satisfies Meta<typeof SupportCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showroom: Story = {
  args: {
    icon: 'Showroom',
    heading: 'Visit a showroom',
    text: "Our stylists are friendly, experienced and always happy to help, whether you're a first-timer or coming back for a second pair. No pressure, no jargon, just a genuinely good experience. <a href='/showrooms'>Find your nearest showroom →</a>",
  },
};

export const Email: Story = {
  args: {
    icon: 'Email',
    heading: 'Email us',
    text: "Send a message to <a href='mailto:help@iolla.com'>help@iolla.com</a> and we'll get back to you as soon as we can - usually same day.",
    hours: 'Mon to Sat, 10am–5pm',
  },
};

export const Phone: Story = {
  args: {
    icon: 'Phone',
    heading: 'Call us',
    text: "Prefer to talk it through? Give us a call on <a href='tel:03301246525'>0330 124 6525</a> - Monday to Saturday, 10am to 5pm.",
    hours: 'Mon to Sat, 10am–5pm',
  },
};
