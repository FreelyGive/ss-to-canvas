import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Aftercare',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero — short, center, bg #006699, Light text */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="Sign up for IOLLA Aftercare"
        headingElement="h1"
        imageOverlay="None"
        backgroundColor="#006699"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_text_and_image_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
