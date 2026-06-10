import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from '@/components/heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: `# Using the Heading
- Use the heading component to add a heading to a layout.

# Heading
- **Use page title -** Toggling this ON will use the page title as the heading text.
- **Heading -** Enter a heading.
- **Heading element -** Select H1 to H6 or Span.

# Heading size and alignment
- **Heading size override -** Override the style with a different heading element style.
- **Align heading text -** Set the alignment.

# Heading color
- **Heading color -** Select the heading color theme.

# Space below
- **Add space below -** Add additional space below the heading.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    usePageTitle: { control: 'boolean', name: 'Use page title' },
    pageTitle: { control: 'text', name: 'Page title' },
    heading: { control: 'text', name: 'Heading' },
    headingElement: { control: 'select', options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Span'], name: 'Heading element' },
    // --- Tab 2: Layout & Style ---
    sizeOverride: { control: 'select', options: ['No override', 'Pre heading', 'XL heading', 'Heading 1 size', 'Heading 2 size', 'Heading 3 size', 'Heading 4 size', 'Heading 5 size', 'Heading 6 size'], name: 'Heading size override' },
    textAlign: { control: 'select', options: ['Left', 'Center', 'Right'], name: 'Align heading text' },
    color: { control: 'select', options: ['Dark heading', 'Light heading', 'Color heading'], name: 'Heading color' },
    customColor: { control: 'color', name: 'Color' },
    addSpaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usePageTitle: false,
    heading: 'Enter a heading...',
    headingElement: 'H2',
    sizeOverride: 'No override',
    textAlign: 'Left',
    color: 'Dark heading',
    addSpaceBelow: 'None',
  },
};

export const ColorHeading: Story = {
  args: {
    usePageTitle: false,
    heading: 'Our Story',
    headingElement: 'H2',
    sizeOverride: 'Heading 2 size',
    textAlign: 'Center',
    color: 'Color heading',
    addSpaceBelow: 'Add space below',
  },
};

export const LightHeading: Story = {
  args: {
    usePageTitle: false,
    heading: 'Light heading on dark background',
    headingElement: 'H1',
    sizeOverride: 'Heading 1 size',
    textAlign: 'Left',
    color: 'Light heading',
    addSpaceBelow: 'None',
  },
};

export const WithCustomColor: Story = {
  args: {
    usePageTitle: false,
    heading: 'Custom color heading',
    headingElement: 'H3',
    sizeOverride: 'Heading 3 size',
    textAlign: 'Left',
    color: 'Dark heading',
    customColor: '#d95f2b',
    addSpaceBelow: 'None',
  },
};

export const UsePageTitle: Story = {
  args: {
    usePageTitle: true,
    pageTitle: 'My Page Title',
    heading: 'This heading is ignored',
    headingElement: 'H1',
    sizeOverride: 'Heading 1 size',
    textAlign: 'Left',
    color: 'Dark heading',
    addSpaceBelow: 'None',
  },
};
