import type { Meta, StoryObj } from '@storybook/react-vite';
import MediaWithText from '@/components/media_with_text';

const meta = {
  title: 'Components/Media With Text',
  component: MediaWithText,
  argTypes: {
    mediaType: { control: 'select', options: ['Video Embed', 'Image'], name: 'Media type' },
    mediaPosition: { control: 'select', options: ['Left', 'Right'], name: 'Media position' },
    theme: { control: 'select', options: ['Dark', 'Light'], name: 'Theme' },
    preHeading: { control: 'text', name: 'Pre heading' },
    heading: { control: 'text', name: 'Heading' },
    text: { control: 'text', name: 'Text' },
    bulletItems: { control: 'text', name: 'Bullet items' },
    videoEmbedUrl: { control: 'text', name: 'Video embed URL' },
    primaryLinkUrl: { control: 'text', name: 'Primary link URL' },
    primaryLinkLabel: { control: 'text', name: 'Primary link label' },
    secondaryLinkUrl: { control: 'text', name: 'Secondary link URL' },
    secondaryLinkLabel: { control: 'text', name: 'Secondary link label' },
  },
} satisfies Meta<typeof MediaWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoLeft: Story = {
  args: {
    mediaType: 'Video Embed',
    videoEmbedUrl: 'https://player.vimeo.com/video/1177642536?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1',
    mediaPosition: 'Left',
    theme: 'Dark',
    preHeading: 'Prescription sunglasses',
    heading: 'Prescription sunglasses,<br><em>without the usual faff.</em>',
    text: 'Choose from tint, gradient and polarised options - all starting from our core pricing model, with the same honest approach to what\'s included.',
    bulletItems: 'Prescription tint sunglasses for £105\nGradient and polarised options available\nSame lenses and coatings included as standard\nTry them on in any of our showrooms',
    primaryLinkUrl: '/collections/sunglasses',
    primaryLinkLabel: 'Shop sunglasses',
    secondaryLinkUrl: '/showrooms',
    secondaryLinkLabel: 'Find a showroom',
  },
};

export const ImageRight: Story = {
  args: {
    mediaType: 'Image',
    image: {
      src: 'https://placehold.co/800x600',
      alt: 'Prescription sunglasses',
      width: 800,
      height: 600,
    },
    mediaPosition: 'Right',
    theme: 'Light',
    preHeading: 'Our frames',
    heading: 'Designed in-house,<br><em>made to last.</em>',
    text: 'Every frame is designed by our own team. No licensing fees, no external studio costs.',
    primaryLinkUrl: '/collections/glasses',
    primaryLinkLabel: 'Browse frames',
  },
};
