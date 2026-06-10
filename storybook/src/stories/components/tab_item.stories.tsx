import type { Meta, StoryObj } from '@storybook/react-vite';
import TabItem from '@/components/tab_item';

const meta = {
  title: 'Components/Tab item',
  component: TabItem,
  parameters: {
    docs: {
      description: {
        component: `# Using the Tab item component
- Use Tab items within the Horizontal and Vertical tabs container components.
- Add content to each Tab item.

# Navigation label
- **Navigation label -** Enter text for the tab navigation.

# Padding
- **Padding around content -** Add padding around the content.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    navigationLabel: { control: 'text', name: 'Navigation label' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    padding: {
      control: 'select',
      name: 'Padding',
      options: ['None', 'Apply padding around content'],
    },
  },
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationLabel: 'Single Vision',
    backgroundColor: '',
    padding: 'Apply padding around content',
    content: <p>Single vision lenses correct one field of vision — either distance or reading.</p>,
  },
};
