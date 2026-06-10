import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Light Responsive Lenses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 2031 (/light-responsive-lenses)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 2031 */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="Light Responsive Lenses"
        headingElement="h1"
        imageOverlay="Dark overlay"
        backgroundColor="#002533"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
