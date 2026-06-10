import type { Meta, StoryObj } from '@storybook/react-vite';
import ModalButton from '@/components/modal_button';

const meta = {
  title: 'Components/Modal button',
  component: ModalButton,
  parameters: {
    docs: {
      description: {
        component: `# Using the modal button component
- Use this component to add a button that can launch a modal window.

# Modal button
- **Open button ID -** A unique ID for the button.
- **Open button text -** The text on the button.
- **Open button style -** The style of the button.

# Modal
- **Modal window ID -** The ID of the modal to open.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    buttonId: { control: 'text', name: 'Button ID' },
    buttonText: { control: 'text', name: 'Button text' },
    buttonStyle: { control: 'select', options: ['Color button', 'Dark button', 'Light button'], name: 'Button style' },
    modalWindowId: { control: 'text', name: 'Modal window ID' },
  },
} satisfies Meta<typeof ModalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonId: 'open-modal-btn',
    buttonText: 'Open Modal',
    buttonStyle: 'Color button',
    modalWindowId: 'my-modal',
  },
};

export const DarkButton: Story = {
  args: {
    buttonId: 'open-modal-dark',
    buttonText: 'View Details',
    buttonStyle: 'Dark button',
    modalWindowId: 'details-modal',
  },
};

export const LightButton: Story = {
  decorators: [
    (Story) => (
      <div className="bg-[#006699] p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    buttonId: 'open-modal-light',
    buttonText: 'Learn More',
    buttonStyle: 'Light button',
    modalWindowId: 'info-modal',
  },
};
