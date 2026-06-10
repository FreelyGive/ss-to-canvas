import type { Meta, StoryObj } from '@storybook/react-vite';
import AccordionItem from '@/components/accordion_item';

const meta = {
  title: 'Components/Accordion item',
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: `# Using the Accordion item component
- Use Accordion items within the Accordion container component to create an accordion.
- Add content to each Accordion item.

# Navigation label
- **Navigation label -** Enter text for the accordion navigation.

# Padding
- **Padding around content -** Add padding around the content within the Accordion item.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    navigationLabel: { control: 'text', name: 'Navigation label' },
    // --- Tab 2: Layout & Style ---
    padding: {
      control: 'select',
      options: ['None', 'Apply padding around content'],
      name: 'Padding around content',
    },
    defaultOpen: { control: 'boolean', name: 'Default open' },
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationLabel: 'What are single vision lenses?',
    padding: 'Apply padding around content',
    defaultOpen: false,
    content: <p>Single vision lenses correct one field of vision — either distance or reading. They are the most common lens type prescribed by opticians.</p>,
  },
};

export const Open: Story = {
  args: {
    navigationLabel: 'What are varifocal lenses?',
    padding: 'Apply padding around content',
    defaultOpen: true,
    content: <p>Varifocal lenses correct multiple focal distances in a single lens — near, intermediate, and distance — with a smooth progression between them, eliminating the need for separate pairs of glasses.</p>,
  },
};

export const NoPadding: Story = {
  args: {
    navigationLabel: 'What is your returns policy?',
    padding: 'None',
    defaultOpen: true,
    content: <p>We accept returns within 30 days of purchase for unworn frames in original condition.</p>,
  },
};
