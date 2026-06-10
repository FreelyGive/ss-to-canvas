import type { Meta, StoryObj } from '@storybook/react-vite';
import TextAndVideoLayout from '@/components/text_and_video_layout';

const meta = {
  title: 'Components/Text and video layout',
  component: TextAndVideoLayout,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', name: 'Color picker' },
    videoUrl: { control: 'text', name: 'Video' },
    videoPosition: {
      control: 'select',
      options: ['Video on left', 'Video on right'],
      name: 'Select',
    },
  },
} satisfies Meta<typeof TextAndVideoLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoOnRight: Story = {
  args: {
    videoUrl: 'https://player.vimeo.com/video/76979871',
    videoPosition: 'Video on right',
  },
};

export const VideoOnLeft: Story = {
  args: {
    videoUrl: 'https://player.vimeo.com/video/76979871',
    videoPosition: 'Video on left',
  },
};

export const WithBackground: Story = {
  args: {
    videoUrl: 'https://player.vimeo.com/video/76979871',
    videoPosition: 'Video on right',
    backgroundColor: '#edcbca',
  },
};
