import type { Meta, StoryObj } from '@storybook/react-vite';
import TabsContainer from '@/components/tabs_container';

const meta = {
  title: 'Components/Tabs container - horizontal tabs',
  component: TabsContainer,
  parameters: {
    docs: {
      description: {
        component: `# Using the Horizontal tabs container component
- Use the Horizontal tabs container to add a tabbed content area.
- The horizontal tabs container displays tabs in a horizontal row above the content.

# Tab position
- **Tab position -** Select the desired tab alignment.

# Tab navigation style
- **Navigation style -** Select the style of the tab navigation links.

# Color
- **Background color -** Choose the background color.

# Space below
- **Add space below -** Add a space below.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Layout & Style (SS form order) ---
    tabPosition: {
      control: 'select',
      name: 'Tab position',
      options: [
        'Left aligned',
        'Left aligned within boxed width of grid',
        'Center aligned',
        'Right aligned',
        'Right aligned within boxed width of grid',
        'Distributed equally',
        'Distributed equally within boxed width of grid',
      ],
    },
    navigationStyle: {
      control: 'select',
      name: 'Navigation style',
      options: ['Dark text with key-line', 'Light text with key-line', 'Solid (For any background)'],
    },
    backgroundColor: { control: 'color', name: 'Background color' },
    addSpaceBelow: {
      control: 'select',
      name: 'Add space below',
      options: ['None', 'Add space below'],
    },
  },
} satisfies Meta<typeof TabsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs = [
  { label: 'Single Vision', content: <p className="text-[#5a554e]">Single vision lenses correct one field of vision — either distance or reading. Perfect for most prescriptions.</p> },
  { label: 'Varifocals', content: <p className="text-[#5a554e]">Varifocal lenses provide seamless vision at all distances — near, intermediate, and far — in a single lens.</p> },
  { label: 'Bifocals', content: <p className="text-[#5a554e]">Bifocal lenses have two distinct zones — one for distance vision and one for reading — separated by a visible line.</p> },
];

export const Default: Story = {
  args: {
    tabPosition: 'Left aligned',
    navigationStyle: 'Dark text with key-line',
    backgroundColor: '',
    addSpaceBelow: 'None',
    items: sampleTabs,
  },
};

export const Centered: Story = {
  args: {
    tabPosition: 'Center aligned',
    navigationStyle: 'Dark text with key-line',
    backgroundColor: '',
    addSpaceBelow: 'None',
    items: sampleTabs,
  },
};

export const LightKeyline: Story = {
  args: {
    tabPosition: 'Center aligned',
    navigationStyle: 'Light text with key-line',
    backgroundColor: '#006699',
    addSpaceBelow: 'Add space below',
    items: sampleTabs,
  },
};
