import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';
import Spacer from '@/components/spacer';

const meta = {
  title: 'Pages/IOLLA Eco',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1406 (/eco)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 1406 */}
      <Hero
        height="Fluid"
        layout="Text left - Drop zone right"
        heading="IOLLA Eco"
        headingElement="h1"
        text="<p>We're on a journey to ensure our footprint stays minimal.</p>"
        backgroundImage={{ src: 'https://iolla.ddev.site/sites/default/files/2023-03/Eco-webpage-banner%20%282%29.jpg', alt: 'IOLLA Eco' }}
        imageOverlay="None"
        backgroundColor="#6699cc"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_text_and_video_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_image_media */}
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
