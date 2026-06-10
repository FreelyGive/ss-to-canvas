import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Showrooms',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero — short, center, no bg color, Light text */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="Our Showrooms"
        headingElement="h1"
        imageOverlay="None"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_3_column_layout × 3 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_container */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
