import type { Meta, StoryObj } from '@storybook/react-vite';
import TestimonialCard from '@/components/testimonial_card';

const meta = {
  title: 'Components/Testimonial card',
  component: TestimonialCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    quote: { control: 'text', name: 'Quote' },
    headingElement: {
      control: 'select',
      name: 'Card heading element',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
    },
    name: { control: 'text', name: 'Name' },
    occupation: { control: 'text', name: 'Occupation' },
    organization: { control: 'text', name: 'Organization' },
    image: { control: 'text', name: 'Image' },
    altTag: { control: 'text', name: 'Alt tag' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      name: 'Text color',
      options: ['Dark text', 'Light text'],
    },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: {
      control: 'select',
      name: 'Border',
      options: ['None', 'Add border'],
    },
    borderColor: { control: 'color', name: 'Border color' },
    padding: {
      control: 'select',
      name: 'Padding',
      options: ['None', 'Apply padding to card'],
    },
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding if background color or border is set' },
    height: {
      control: 'select',
      name: 'Height',
      options: ['Fit to content', 'Fill space available'],
    },
    addSpaceBelow: {
      control: 'select',
      name: 'Add space below',
      options: ['None', 'Add space below'],
    },
  },
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote: 'The service was exceptional. My new glasses are perfect and the team made the whole process effortless.',
    headingElement: 'h3',
    name: 'Sarah Thompson',
    occupation: 'Marketing Director',
    organization: 'Acme Ltd',
    image: 'https://placehold.co/80x80/006699/ffffff?text=ST',
    altTag: 'Sarah Thompson',
    backgroundColor: '',
    textColor: 'Dark text',
    conditionalTextColorLightBackground: '',
    conditionalTextColorDarkBackground: '',
    conditionalTextColorColoredBackground: '',
    border: 'None',
    borderColor: '',
    padding: 'Apply padding to card',
    conditionallyApplyPadding: '',
    height: 'Fit to content',
    addSpaceBelow: 'None',
  },
};

export const LightOnDark: Story = {
  args: {
    quote: "I've never experienced such a personal and professional eyewear service. Absolutely worth every penny.",
    headingElement: 'h3',
    name: 'James Wilson',
    occupation: 'Architect',
    organization: '',
    image: '',
    altTag: '',
    backgroundColor: '#002633',
    textColor: 'Light text',
    border: 'None',
    padding: 'Apply padding to card',
    height: 'Fit to content',
    addSpaceBelow: 'None',
  },
};
