import type { Meta, StoryObj } from '@storybook/react-vite';

import ShowroomCard from '@/components/showroom_card';

const meta = {
  title: 'Components/Showroom card',
  component: ShowroomCard,
  parameters: {
    docs: {
      description: {
        component: `# Using the Showroom card
- Use this card to provide a high impact showroom link.

# Image
- **Background image -** For best results, upload a .png or .jpg.

# Text
- **Card heading element -** Select the HTML heading element.
- **Street, City -** Showroom address fields.
- **Description -** Enter a short description (optional).
- **Call to action -** Enter call to action text.

# Link
- **Link to page or URL -** Add a link. Required.

# Color
- **Text color -** Choose Light or Dark text.

# Card height
- **Minimum height -** Set a minimum height.
- **Height behavior -** Fit or Fill space available.

# Space below
- Add space below.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    backgroundImage: { control: 'object', name: 'Background image' },
    headingElement: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Heading element',
    },
    street: { control: 'text', name: 'Street' },
    city: { control: 'text', name: 'City' },
    description: { control: 'text', name: 'Description' },
    callToAction: { control: 'text', name: 'Call to action' },
    link: { control: 'object', name: 'Link to page or URL' },
    // --- Tab 2: Layout & Style ---
    textColor: {
      control: 'select',
      options: ['Light text', 'Dark text'],
      name: 'Text color',
    },
    border: {
      control: 'select',
      options: ['None', 'Add border'],
      name: 'Border',
    },
    borderColor: { control: 'color', name: 'Border color' },
    minimumHeight: {
      control: 'select',
      options: ['Tall', 'Medium', 'Shallow'],
      name: 'Minimum height',
    },
    heightBehavior: {
      control: 'select',
      options: ['Fit to minimum height', 'Fill space available'],
      name: 'Height behavior',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Space below',
    },
  },
} satisfies Meta<typeof ShowroomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundImage: {
      src: 'https://placehold.co/600x400/002633/ffffff?text=Glasgow',
      alt: 'Glasgow showroom',
      width: 600,
      height: 400,
    },
    headingElement: 'h3',
    street: '17 Wilson Street',
    city: 'Glasgow',
    description: 'Open Mon–Sat 9am–6pm. Appointments available.',
    callToAction: 'Visit showroom',
    link: { url: '/showrooms/glasgow', title: 'Visit showroom' },
    textColor: 'Light text',
    border: 'None',
    borderColor: '',
    minimumHeight: 'Medium',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'Add space below',
  },
};

export const DarkText: Story = {
  args: {
    backgroundImage: {
      src: 'https://placehold.co/600x400/f5f2eb/002633?text=Edinburgh',
      alt: 'Edinburgh showroom',
      width: 600,
      height: 400,
    },
    headingElement: 'h3',
    street: '113 George Street',
    city: 'Edinburgh',
    description: 'Open Mon–Sat 9am–6pm, Sun 11am–5pm.',
    callToAction: 'Visit showroom',
    link: { url: '/showrooms/edinburgh', title: 'Visit showroom' },
    textColor: 'Dark text',
    border: 'Add border',
    borderColor: '#e5e7eb',
    minimumHeight: 'Tall',
    heightBehavior: 'Fill space available',
    addSpaceBelow: 'None',
  },
};
