import type { Meta, StoryObj } from '@storybook/react-vite';
import AccordionContainer from '@/components/accordion_container';
import AccordionItem from '@/components/accordion_item';

const meta = {
  title: 'Components/Accordion container',
  component: AccordionContainer,
  parameters: {
    docs: {
      description: {
        component: `# Using the Accordion container component
- Use the Accordion container to add an accordion to a layout.
- To create an accordion, nest Accordion item components directly within this Accordion container.
- Add content to the Accordion item components.

# Accordion navigation style
- **Navigation style -** Select the style of the accordion navigation links. Choose a style that's appropriate the background color of where the accordion is placed.

# Color
- **Background color -** Choose the background color of the accordion container.

Space below
- **Add space below -** Add a space (margin) below the accordion. This is required if a space is desirable when adding this component above another component within the same parent layout component.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    navigationStyle: {
      control: 'select',
      options: ['Dark text with key-line', 'Light text with key-line', 'Solid (For any background)'],
      name: 'Navigation style',
    },
    backgroundColor: { control: 'color', name: 'Background color' },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof AccordionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const lensQuestions = (
  <>
    <AccordionItem
      navigationLabel="What are single vision lenses?"
      content={<p>Single vision lenses correct one field of vision — either distance or reading. They are the most common lens type.</p>}
      defaultOpen
    />
    <AccordionItem
      navigationLabel="What are varifocal lenses?"
      content={<p>Varifocal lenses correct multiple focal distances in a single lens — near, intermediate, and distance — with a smooth progression between them.</p>}
    />
    <AccordionItem
      navigationLabel="How do I choose my frame size?"
      content={<p>We measure frames by lens width, bridge width, and temple length in millimetres. Our team can advise on the best fit for your face shape.</p>}
    />
    <AccordionItem
      navigationLabel="What is your returns policy?"
      content={<p>We accept returns within 30 days of purchase for unworn frames in original condition. Prescription lenses are non-returnable for hygiene reasons.</p>}
    />
  </>
);

export const Default: Story = {
  args: {
    navigationStyle: 'Dark text with key-line',
    backgroundColor: '#ffffff',
    addSpaceBelow: 'Add space below',
    items: lensQuestions,
  },
};

export const LightKeyline: Story = {
  args: {
    navigationStyle: 'Light text with key-line',
    backgroundColor: '#006699',
    addSpaceBelow: 'None',
    items: lensQuestions,
  },
};

export const Solid: Story = {
  args: {
    navigationStyle: 'Solid (For any background)',
    backgroundColor: '#f5f2eb',
    addSpaceBelow: 'Add space below',
    items: lensQuestions,
  },
};
