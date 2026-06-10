import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Our Lenses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 2231 (/our-lenses)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 2231 */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="The perfect lenses for your every day."
        headingElement="h1"
        imageOverlay="None"
        backgroundColor="#002533"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_2_column_layout × 7 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
