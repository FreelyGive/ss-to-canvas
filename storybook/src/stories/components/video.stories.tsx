import type { Meta, StoryObj } from '@storybook/react-vite';

import Video from '@/components/video';

const meta = {
  title: 'Components/Video',
  component: Video,
  parameters: {
    docs: {
      description: {
        component: `# Using the Video component
- Use the Video component to add a video to a layout from the media library.

# Video
- **Video media -** Select a video from the media library.

# Space below
- **Add space below -** Add a space below the video.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    src: { control: 'text', name: 'Video media' },
    // --- Tab 2: Layout & Style ---
    addSpaceBelow: {
      control: 'select',
      name: 'Space below',
      options: ['None', 'Add space below video'],
    },
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    addSpaceBelow: 'Add space below video',
  },
};
