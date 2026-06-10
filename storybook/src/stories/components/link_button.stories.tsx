import type { Meta, StoryObj } from '@storybook/react-vite';
import LinkButton from '@/components/link_button';

const meta = {
  title: 'Components/Button(s)',
  component: LinkButton,
  parameters: {
    docs: {
      description: {
        component: `# Using the Button(s) component
- Use the Button(s) component to add one or multiple button styled links to a layout.

# Button(s)
- **Link to page or URL -** Add a link. Required.
- **Button text -** Enter the text for the button.
- **Target -** Select the target.
- **Button style -** Select a button style.
- **Add another button -** Add multiple buttons.

# Button layout
- **Align buttons -** Align Left, Center or Right.
- **Desktop/Tablet/Phone layout -** Row or Column.

# Space below
- **Add space below -** Add a space below.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    buttons: { control: 'object', name: 'Link to page or URL / Button text / Target / Button style' },
    // --- Tab 2: Layout & Style ---
    align: { control: 'select', options: ['Left', 'Center', 'Right'], name: 'Align buttons' },
    desktopLayout: { control: 'select', options: ['Row of links / buttons', 'Column of links / buttons'], name: 'Desktop layout' },
    tabletLayout: { control: 'select', options: ['Row of links / buttons', 'Column of links / buttons'], name: 'Tablet layout' },
    phoneLayout: { control: 'select', options: ['Row of links / buttons', 'Column of links / buttons'], name: 'Phone layout' },
    spaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: [
      { link: { url: '/contact' }, buttonText: 'Get in touch', target: '_self', buttonStyle: 'Primary button blue' },
    ],
    align: 'Left',
    desktopLayout: 'Row of links / buttons',
    tabletLayout: 'Row of links / buttons',
    phoneLayout: 'Column of links / buttons',
    spaceBelow: 'Add space below',
  },
};

export const MultipleButtons: Story = {
  args: {
    buttons: [
      { link: { url: '/glasses' }, buttonText: 'Shop glasses', target: '_self', buttonStyle: 'Primary button blue' },
      { link: { url: '/about' }, buttonText: 'Learn more', target: '_self', buttonStyle: 'Secondary button blue' },
    ],
    align: 'Center',
    desktopLayout: 'Row of links / buttons',
    tabletLayout: 'Row of links / buttons',
    phoneLayout: 'Column of links / buttons',
    spaceBelow: 'Add space below',
  },
};

export const Column: Story = {
  args: {
    buttons: [
      { link: { url: '/glasses' }, buttonText: 'Shop glasses', target: '_self', buttonStyle: 'Primary button blue' },
      { link: { url: '/sunglasses' }, buttonText: 'Shop sunglasses', target: '_self', buttonStyle: 'Primary button green' },
      { link: { url: '/contact' }, buttonText: 'Contact us', target: '_self', buttonStyle: 'Basic link (default)' },
    ],
    align: 'Left',
    desktopLayout: 'Column of links / buttons',
    tabletLayout: 'Column of links / buttons',
    phoneLayout: 'Column of links / buttons',
    spaceBelow: 'Add space below',
  },
};
