import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import HeroImageVideo from '@/components/hero_image_video';

const meta = {
  title: 'Pages/Home',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero_image_video */}
      <HeroImageVideo
        height="Fluid"
        layout="Text left - Drop zone right"
        enableDropZone={true}
        imageOverlay="None"
        backgroundVideo="https://player.vimeo.com/progressive_redirect/playback/1179862453/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=e019654487195c9f36e515db232bb20651a5b49dad97a05fd7f5eee8853c32b3"
        buttonLink="/collections/sunglasses"
        buttonText="CUSTOM SUNGLASSES FOR £105"
        buttonStyle="Primary button dark blue"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* TODO: cpt_container — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_container placeholder</div>

      {/* TODO: cpt_3_column_layout — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_3_column_layout placeholder</div>

      {/* TODO: cpt_container — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_container placeholder</div>

      {/* TODO: cpt_1_column_layout — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_1_column_layout placeholder</div>

      {/* TODO: cpt_text_and_image_layout — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_text_and_image_layout placeholder</div>

      {/* TODO: cpt_newsletter_signup — not yet in Storybook */}
      <div className="p-8 bg-gray-100 text-sm text-gray-500">cpt_newsletter_signup placeholder</div>
    </PageLayout>
  ),
};
