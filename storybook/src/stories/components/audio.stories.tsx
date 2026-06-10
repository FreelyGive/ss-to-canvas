import type { Meta, StoryObj } from '@storybook/react-vite';
import Audio from '@/components/audio';

const meta = {
  title: 'Components/Audio',
  component: Audio,
  parameters: {
    docs: {
      description: {
        component: `# Using the Audio component
- Use the Audio component to add audio to a layout from the media library.

# Audio
- **Audio media -** Select audio from the media library.

# Space below
- **Add space below -** Add a space (margin) below the audio player.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    src: { control: 'text', name: 'Audio media' },
    title: { control: 'text', name: 'Title' },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof Audio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://www.w3schools.com/html/horse.mp3',
    title: 'Sample Audio Track',
    addSpaceBelow: 'Add space below',
  },
};

export const NoSpaceBelow: Story = {
  args: {
    src: 'https://www.w3schools.com/html/horse.mp3',
    title: 'Episode 1: Getting Started',
    addSpaceBelow: 'None',
  },
};
