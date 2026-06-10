import type { Meta, StoryObj } from '@storybook/react-vite';

import ShowroomInformationCard from '@/components/showroom_information_card';

const meta = {
  title: 'Components/Showroom information card',
  component: ShowroomInformationCard,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    headingElement: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Heading element',
    },
    cardHeading: { control: 'text', name: 'Card heading' },
    addressLine1: { control: 'text', name: 'Address line 1' },
    addressLine2: { control: 'text', name: 'Address line 2' },
    addressLine3: { control: 'text', name: 'Address line 3' },
    postcode: { control: 'text', name: 'Postcode' },
    telephone: { control: 'text', name: 'Telephone' },
    openingTimes: { control: 'object', name: 'Opening times' },
    // --- Tab 2: Layout & Style ---
    layout: {
      control: 'select',
      options: [
        'Left aligned with image above text',
        'Left aligned with image left of text',
        'Center aligned with image above text',
      ],
      name: 'Layout',
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
    conditionallyApplyPadding: { control: 'text', name: 'Conditionally apply padding' },
    heightBehavior: {
      control: 'select',
      options: ['Fit to content', 'Fill space available'],
      name: 'Height behavior',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Space below',
    },
  },
} satisfies Meta<typeof ShowroomInformationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingElement: 'h2',
    cardHeading: 'Glasgow Showroom',
    addressLine1: '17 Wilson Street',
    addressLine2: 'Merchant City',
    addressLine3: 'Glasgow',
    postcode: 'G1 1SS',
    telephone: '+44 141 552 4520',
    openingTimes: ['Mon–Fri 9am–6pm', 'Sat 10am–5pm'],
    layout: 'Left aligned with image above text',
    backgroundColor: '',
    textColor: 'Dark text',
    conditionalTextColorDarkBackground: '',
    conditionalTextColorLightBackground: '',
    conditionalTextColorColoredBackground: '',
    border: 'None',
    borderColor: '',
    padding: 'Apply padding to card',
    conditionallyApplyPadding: '',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const DarkBackground: Story = {
  args: {
    headingElement: 'h2',
    cardHeading: 'Edinburgh Showroom',
    addressLine1: '113 George Street',
    addressLine2: 'New Town',
    addressLine3: 'Edinburgh',
    postcode: 'EH2 4JN',
    telephone: '+44 131 225 4500',
    openingTimes: ['Mon–Sat 9am–6pm', 'Sun 11am–5pm'],
    layout: 'Left aligned with image above text',
    backgroundColor: '#002633',
    textColor: 'Light text',
    border: 'None',
    borderColor: '',
    padding: 'Apply padding to card',
    conditionallyApplyPadding: '',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'None',
  },
};
