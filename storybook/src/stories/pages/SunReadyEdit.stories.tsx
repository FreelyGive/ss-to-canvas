import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Spacer from '@/components/spacer';
import Section from '@/components/section';
import ProductLister from '@/components/product_lister';

const meta = {
  title: 'Pages/Sun Ready Edit',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 886 (/sun-ready)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 886 — background image, light overlay, Dark text */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="The Sun-Ready Edit"
        headingElement="h1"
        backgroundImage={{ src: 'https://iolla.ddev.site/sites/default/files/2022-06/Sunshine-header.jpg', alt: 'The Sun-Ready Edit' }}
        imageOverlay="Light overlay"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_spacer */}
      <Spacer height="Medium" />

      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_product_lister */}
      <ProductLister width="Boxed width" />

      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
