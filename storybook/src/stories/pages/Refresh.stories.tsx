import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Refresh',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 846 (/refresh)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 846 — empty heading, bg #f2f2f2, background image */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading=""
        headingElement="h1"
        backgroundImage={{ src: 'https://iolla.ddev.site/sites/default/files/2025-11/Refresh-Banner1-.jpg', alt: 'Refresh your eyewear' }}
        imageOverlay="None"
        backgroundColor="#f2f2f2"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_container × 5 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
