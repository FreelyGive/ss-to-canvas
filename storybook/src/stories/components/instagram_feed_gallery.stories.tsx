import type { Meta, StoryObj } from '@storybook/react-vite';
import InstagramFeedGallery from '@/components/instagram_feed_gallery';

// cpt_instagram_feed_gallery (Social Images Gallery) — dynamic Instagram feed.
// No configurable SS form fields. Posts are loaded at runtime from Instagram.
const meta = {
  title: 'Components/Social Images Gallery',
  component: InstagramFeedGallery,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dynamic Instagram feed gallery loaded at runtime. No configurable fields in Site Studio. The Storybook preview shows a placeholder grid of 6 posts.',
      },
    },
  },
} satisfies Meta<typeof InstagramFeedGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
