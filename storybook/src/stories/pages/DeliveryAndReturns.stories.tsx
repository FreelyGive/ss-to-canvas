import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Delivery and Returns',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      <Hero
        height="Short"
        layout="Content centered - text align centre"
        heading="Delivery &amp; Returns"
        headingElement="h1"
        imageOverlay="Dark overlay"
        backgroundColor="#6699cc"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_2_column_layout × 6 */}
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
