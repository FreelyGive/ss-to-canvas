import type { Meta, StoryObj } from '@storybook/react-vite';

import ContactInformationCard from '@/components/contact_information_card';

const meta = {
  title: 'Components/Contact information card',
  component: ContactInformationCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    image: { control: 'object', name: 'Image icon' },
    imageAlt: { control: 'text', name: 'Alt tag' },
    headingElement: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Card heading element',
    },
    cardHeading: { control: 'text', name: 'Card heading' },
    contactName: { control: 'text', name: 'Contact name' },
    company: { control: 'text', name: 'Company' },
    address: { control: 'text', name: 'Address' },
    telephone: { control: 'text', name: 'Telephone' },
    email: { control: 'text', name: 'Email' },
    // --- Tab 2: Layout & Style ---
    layout: {
      control: 'select',
      options: [
        'Left aligned with image above text',
        'Left aligned with image left of text',
        'Center aligned with image above text',
      ],
      name: 'Card layout',
    },
    backgroundColor: { control: 'color', name: 'Background color' },
    textColor: {
      control: 'select',
      options: ['Dark text', 'Light text'],
      name: 'Text color',
    },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: {
      control: 'select',
      options: ['None', 'Add border'],
      name: 'Border',
    },
    borderColor: { control: 'color', name: 'Border color' },
    padding: {
      control: 'select',
      options: ['None', 'Apply padding to card'],
      name: 'Padding',
    },
    conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet: { control: 'text', name: 'Conditionally apply padding if background color or border is set' },
    heightBehavior: {
      control: 'select',
      options: ['Fit to content', 'Fill space available'],
      name: 'Height',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof ContactInformationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingElement: 'h3',
    cardHeading: 'Get in Touch',
    contactName: 'iolla Customer Care',
    company: 'iolla',
    address: '17 Wilson Street\nGlasgow G1 1SS',
    telephone: '+44 141 552 4520',
    email: 'hello@iolla.com',
    layout: 'Left aligned with image above text',
    backgroundColor: '',
    textColor: 'Dark text',
    border: 'None',
    borderColor: '#e5e7eb',
    padding: 'Apply padding to card',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'None',
  },
};

export const WithImage: Story = {
  args: {
    image: {
      src: 'https://placehold.co/80x80@2x.png',
      alt: 'Contact image',
      width: 80,
      height: 80,
    },
    imageAlt: 'iolla showroom',
    headingElement: 'h3',
    cardHeading: 'Visit Us',
    contactName: 'iolla Glasgow',
    company: 'iolla',
    address: '17 Wilson Street\nGlasgow G1 1SS',
    telephone: '+44 141 552 4520',
    email: 'hello@iolla.com',
    layout: 'Left aligned with image left of text',
    backgroundColor: '',
    textColor: 'Dark text',
    border: 'Add border',
    borderColor: '#e5e7eb',
    padding: 'Apply padding to card',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'None',
  },
};

export const DarkBackground: Story = {
  args: {
    headingElement: 'h3',
    cardHeading: 'Contact Us',
    contactName: 'iolla Customer Care',
    company: 'iolla',
    telephone: '+44 141 552 4520',
    email: 'hello@iolla.com',
    layout: 'Center aligned with image above text',
    backgroundColor: '#002633',
    textColor: 'Light text',
    border: 'None',
    padding: 'Apply padding to card',
    heightBehavior: 'Fit to content',
    addSpaceBelow: 'None',
  },
};
