import type { Meta, StoryObj } from '@storybook/react-vite';
import ImpactCard from '@/components/impact_card';

const meta = {
  title: 'Components/Impact card',
  component: ImpactCard,
  parameters: {
    docs: {
      description: {
        component: `# Using the Impact card
- Use this card to provide a high impact highlight and link to internal and external content.

# Image
- **Background image -** Upload a .png or .jpg.
- **Image overlay -** Set dark or light overlay.

# Text
- **Card heading element -** Select the HTML heading element.
- **Card heading -** Enter a short card heading.
- **Description -** Enter a short description (optional).
- **Call to action -** Enter call to action text.

# Link
- **Link to page or URL -** Add a link. Required.

# Color
- **Text color -** Choose Light or Dark text.

# Border
- **Border -** Add border adds a 1px border.
- **Border color -** Set the border color.

# Card height
- **Minimum height -** Set a minimum height.
- **Height behavior -** Fit to minimum height or Fill space available.

# Space below
- Add space below adds a space (margin) below the card.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    backgroundImage: { control: 'object', name: 'Background image' },
    imageOverlay: { control: 'select', options: ['None', 'Dark overlay', 'Light overlay'], name: 'Image overlay' },
    headingElement: { control: 'select', options: ['Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'], name: 'Card heading element' },
    cardHeading: { control: 'text', name: 'Card heading' },
    description: { control: 'text', name: 'Description' },
    callToAction: { control: 'text', name: 'Call to action' },
    link: { control: 'object', name: 'Link to page or URL' },
    buttonStyle: { control: 'select', options: ['Primary button blue', 'Primary button green', 'Primary button orange', 'Secondary button blue', 'Secondary button green', 'Secondary button orange'], name: 'Button style' },
    // --- Tab 2: Layout & Style ---
    textColor: { control: 'select', options: ['Light text', 'Dark text'], name: 'Text color' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    borderColor: { control: 'color', name: 'Border color' },
    minimumHeight: { control: 'select', options: ['Tall', 'Medium', 'Shallow'], name: 'Minimum height' },
    heightBehavior: { control: 'select', options: ['Fit to minimum height', 'Fill space available'], name: 'Height behavior' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof ImpactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundImage: { src: 'https://placehold.co/800x500/002633/ffffff?text=Impact', alt: 'Impact card background' },
    imageOverlay: 'Dark overlay',
    headingElement: 'Heading 3',
    cardHeading: 'Glasses from £49',
    description: 'Complete pairs including single vision lenses. No hidden costs.',
    callToAction: 'Shop glasses',
    link: { url: '/glasses', target: '_self' },
    buttonStyle: 'Primary button blue',
    textColor: 'Light text',
    border: 'None',
    minimumHeight: 'Medium',
    heightBehavior: 'Fill space available',
    spaceBelow: 'Add space below',
  },
};

export const LightOverlay: Story = {
  args: {
    backgroundImage: { src: 'https://placehold.co/800x500/f5f2eb/002633?text=Impact', alt: 'Impact card background' },
    imageOverlay: 'Light overlay',
    headingElement: 'Heading 3',
    cardHeading: 'Our showrooms',
    description: 'Visit us in Glasgow, Edinburgh, or London for a personal consultation.',
    callToAction: 'Find a showroom',
    link: { url: '/showrooms', target: '_self' },
    buttonStyle: 'Secondary button blue',
    textColor: 'Dark text',
    border: 'None',
    minimumHeight: 'Medium',
    heightBehavior: 'Fill space available',
    spaceBelow: 'Add space below',
  },
};
