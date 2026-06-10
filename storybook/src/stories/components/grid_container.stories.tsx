import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from '@/components/card';
import GridContainer from '@/components/grid_container';

const placeholderImage = {
  src: 'https://placehold.co/400x300',
  alt: 'Placeholder',
  width: 400,
  height: 300,
};

const meta = {
  title: 'Components/Layout/Grid Container',
  component: GridContainer,
  argTypes: {
    layout: {
      control: 'select',
      options: ['50-50', '33-33-33', '75-25', '25-75', '67-33', '33-67', '50-25-25', '25-25-50', '25-25-25-25'],
      name: 'Layout',
    },
    gap: {
      control: 'select',
      options: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
      name: 'Gap',
    },
  },
} satisfies Meta<typeof GridContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
  args: {
    layout: '50-50',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Column 1" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 2" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    layout: '33-33-33',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Column 1" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 2" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 3" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    layout: '25-25-25-25',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Column 1" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 2" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 3" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 4" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const Sidebar75_25: Story = {
  args: {
    layout: '75-25',
    gap: 'Large',
    content: (
      <>
        <Card heading="Main Content (75%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Sidebar (25%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const Sidebar25_75: Story = {
  args: {
    layout: '25-75',
    gap: 'Large',
    content: (
      <>
        <Card heading="Sidebar (25%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Main Content (75%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const Asymmetric67_33: Story = {
  args: {
    layout: '67-33',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Wide Column (67%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Narrow Column (33%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const Asymmetric33_67: Story = {
  args: {
    layout: '33-67',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Narrow Column (33%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Wide Column (67%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const ThreeColumnLeftHeavy: Story = {
  args: {
    layout: '50-25-25',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Main Content (50%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Side 1 (25%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Side 2 (25%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const ThreeColumnRightHeavy: Story = {
  args: {
    layout: '25-25-50',
    gap: 'Medium',
    content: (
      <>
        <Card heading="Side 1 (25%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Side 2 (25%)" layout="Center aligned" image={placeholderImage} />
        <Card heading="Main Content (50%)" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    layout: '50-50',
    gap: 'Extra Large',
    content: (
      <>
        <Card heading="Column 1" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 2" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};

export const SmallGap: Story = {
  args: {
    layout: '50-50',
    gap: 'Extra Small',
    content: (
      <>
        <Card heading="Column 1" layout="Center aligned" image={placeholderImage} />
        <Card heading="Column 2" layout="Center aligned" image={placeholderImage} />
      </>
    ),
  },
};
