import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Klarna',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1206 (/klarna)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 1206 — background image, Content centered, Dark text */}
      <Hero
        height="Short"
        layout="Content centered - text align centre"
        heading="Shop now, pay with Klarna"
        headingElement="h1"
        backgroundImage={{ src: 'https://iolla.ddev.site/sites/default/files/2022-09/Klarna-webpage-banner_12.jpg', alt: 'Shop now, pay with Klarna' }}
        imageOverlay="None"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
