import Heading from '@/components/heading';
import Section from '@/components/section';
import Text from '@/components/text';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Layout/Section',
  component: Section,
  argTypes: {
    width: {
      control: 'select',
      options: ['Normal', 'Wide'],
      name: 'Width',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: 'Normal',
    content: (
      <>
        <Heading
          heading="Normal Width Section"
          headingElement="h2"
          headingSize="Medium"
        />
        <Text
          text="This section has a normal width container (max-w-2xl). It's suitable for text-heavy content like articles and blog posts."
          textSize="Normal"
          textColor="Dark"
        />
      </>
    ),
  },
};

export const Wide: Story = {
  args: {
    width: 'Wide',
    content: (
      <>
        <Heading
          heading="Wide Width Section"
          headingElement="h2"
          headingSize="Medium"
        />
        <Text
          text="This section has a wide width container (max-w-4xl). It's suitable for content that needs more horizontal space like grids and galleries."
          textSize="Normal"
          textColor="Dark"
        />
      </>
    ),
  },
};
