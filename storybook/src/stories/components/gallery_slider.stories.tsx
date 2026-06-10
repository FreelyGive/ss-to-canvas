import type { Meta, StoryObj } from '@storybook/react-vite';
import GallerySlider from '@/components/gallery_slider';

const meta = {
  title: 'Components/Gallery slider',
  component: GallerySlider,
  parameters: {
    docs: {
      description: {
        component: `# Using the Gallery slider component
- Use this component to create a slider of images.

# Settings
- **Slider ID -** You must provide the gallery with an ID that is unique to the page.

# Gallery image
- **Image -** Upload and/or select an image.
- **Alt tag -** Enter alternative text for the image.

# Gallery size
- **Gallery image size -** Select the size of the images.

# Thumbnails to show
- **Thumbnails to show on (Desktop, Tablet, Phone) -** Set the number of thumbnails.

# Space below
- **Add space below -** Add a space below the slider.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    sliderId: { control: 'text', name: 'Slider ID' },
    images: { control: 'object', name: 'Image / Alt tag' },
    // --- Tab 2: Layout & Style ---
    imageSize: { control: 'select', options: ['XX Large landscape (1600x1067)', 'X Large landscape (1200x800)', 'Large landscape (1024x683)', 'Medium landscape (768x512)', 'Small landscape (568x352)', 'X Small landscape (480x320)'], name: 'Gallery display size' },
    desktopThumbnails: { control: 'select', options: ['3', '5', '7'], name: 'Desktop' },
    tabletThumbnails: { control: 'select', options: ['3', '5', '7'], name: 'Tablet' },
    phoneThumbnails: { control: 'select', options: ['3', '5'], name: 'Phone' },
    addSpaceBelow: { control: 'select', options: ['None', 'Add space below'], name: 'Add space below' },
  },
} satisfies Meta<typeof GallerySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sliderId: 'gallery-1',
    images: [
      { src: 'https://placehold.co/768x512/006699/ffffff?text=Frame+1', alt: 'Glasses frame 1' },
      { src: 'https://placehold.co/768x512/005580/ffffff?text=Frame+2', alt: 'Glasses frame 2' },
      { src: 'https://placehold.co/768x512/004466/ffffff?text=Frame+3', alt: 'Glasses frame 3' },
      { src: 'https://placehold.co/768x512/002633/ffffff?text=Frame+4', alt: 'Glasses frame 4' },
      { src: 'https://placehold.co/768x512/d95f2b/ffffff?text=Frame+5', alt: 'Glasses frame 5' },
    ],
    imageSize: 'Medium landscape (768x512)',
    desktopThumbnails: '5',
    tabletThumbnails: '5',
    phoneThumbnails: '3',
    addSpaceBelow: 'None',
  },
};

export const LargeWithSpaceBelow: Story = {
  args: {
    sliderId: 'gallery-2',
    images: [
      { src: 'https://placehold.co/1024x683/d95f2b/ffffff?text=Showroom+1', alt: 'Showroom 1' },
      { src: 'https://placehold.co/1024x683/c05528/ffffff?text=Showroom+2', alt: 'Showroom 2' },
      { src: 'https://placehold.co/1024x683/006699/ffffff?text=Showroom+3', alt: 'Showroom 3' },
    ],
    imageSize: 'Large landscape (1024x683)',
    desktopThumbnails: '3',
    tabletThumbnails: '3',
    phoneThumbnails: '3',
    addSpaceBelow: 'Add space below',
  },
};
