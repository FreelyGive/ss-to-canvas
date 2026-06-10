import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ModalWindow from '@/components/modal_window';

const meta = {
  title: 'Components/Modal window',
  component: ModalWindow,
  parameters: {
    docs: {
      description: {
        component: `# Using the modal window component
- Use this component to add a modal to your page.

# Modal trigger
- **Auto open modal -** Toggle on to open the modal automatically on page load.

# Modal
- **Modal window ID -** A unique ID for the modal.
- **Modal size -** Set the size.
- **Modal background color -** Set the background color.
- **Close button style -** Set the close button style.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    autoOpenModal: { control: 'boolean', name: 'Auto open modal' },
    modalWindowId: { control: 'text', name: 'Modal window ID' },
    modalSize: { control: 'select', options: ['Small', 'Medium', 'Large', 'Full screen'], name: 'Modal size' },
    modalBackgroundColor: { control: 'color', name: 'Modal background color' },
    closeButtonStyle: { control: 'select', options: ['Color button', 'Light button', 'Dark button'], name: 'Close button style' },
  },
} satisfies Meta<typeof ModalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoOpenModal: true,
    modalWindowId: 'my-modal',
    modalSize: 'Medium',
    modalBackgroundColor: '#ffffff',
    closeButtonStyle: 'Color button',
    content: (
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#006699]">Modal Title</h2>
        <p className="text-[#5a554e]">This is the modal content. Add any components here.</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    autoOpenModal: true,
    modalWindowId: 'small-modal',
    modalSize: 'Small',
    modalBackgroundColor: '#ffffff',
    closeButtonStyle: 'Color button',
    content: (
      <p className="text-[#5a554e]">A compact small modal.</p>
    ),
  },
};

export const Large: Story = {
  args: {
    autoOpenModal: true,
    modalWindowId: 'large-modal',
    modalSize: 'Large',
    modalBackgroundColor: '#ffffff',
    closeButtonStyle: 'Dark button',
    content: (
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[#006699]">Large Modal</h2>
        <p className="mb-4 text-[#5a554e]">This large modal provides more space for rich content.</p>
        <p className="text-[#5a554e]">Additional content, images, or forms can be placed here.</p>
      </div>
    ),
  },
};

export const ColoredBackground: Story = {
  args: {
    autoOpenModal: true,
    modalWindowId: 'colored-modal',
    modalSize: 'Medium',
    modalBackgroundColor: '#f5f2eb',
    closeButtonStyle: 'Light button',
    content: (
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#002633]">Tinted Background</h2>
        <p className="text-[#5a554e]">Modal with a warm background color.</p>
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    autoOpenModal: false,
    modalWindowId: 'closed-modal',
    modalSize: 'Medium',
    modalBackgroundColor: '#ffffff',
    closeButtonStyle: 'Color button',
    content: (
      <p className="text-[#5a554e]">Click the button above to open this modal.</p>
    ),
  },
};
