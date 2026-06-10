import type { Meta, StoryObj } from '@storybook/react-vite';
import BackgroundVideo from '@/components/background_video';

const meta = {
  title: 'Components/Background video',
  component: BackgroundVideo,
  parameters: {
    docs: {
      description: {
        component: `# Using the Background video component
- Use the background video component to add a container with a video background to your layout.
- Nest other components within the drop zone of the video background component.

# Video
- **Video URL -** Enter a full URL to a video file (.mp4).

# Fallback image
- **Image -** Upload a fallback image for browsers/devices that cannot display video.

# Padding
- **Padding -** Add padding around the content within the Background video container.

# Space below
- **Add space below -** Add a space (margin) below the Background video.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    videoUrl: { control: 'text', name: 'Video URL' },
    backgroundImage: { control: 'object', name: 'Image' },
    // --- Tab 2: Layout & Style ---
    padding: {
      control: 'select',
      options: ['None', 'Apply padding around content'],
      name: 'Padding',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Add space below',
    },
  },
} satisfies Meta<typeof BackgroundVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    backgroundImage: {
      src: 'https://placehold.co/1920x1080',
      alt: 'Video fallback',
    },
    padding: 'Apply padding around content',
    addSpaceBelow: 'None',
    content: (
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Background Video</h2>
        <p className="mt-4 text-lg">Content overlaid on the video</p>
      </div>
    ),
  },
};

export const FallbackImageOnly: Story = {
  args: {
    backgroundImage: {
      src: 'https://placehold.co/1920x1080/006699/ffffff',
      alt: 'Background image',
    },
    padding: 'Apply padding around content',
    addSpaceBelow: 'Add space below',
    content: (
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Fallback Image</h2>
      </div>
    ),
  },
};
