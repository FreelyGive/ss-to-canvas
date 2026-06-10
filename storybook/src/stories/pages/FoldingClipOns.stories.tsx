import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Spacer from '@/components/spacer';
import ProductLister from '@/components/product_lister';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Folding Clip-ons',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1486 (/folding-clip-ons)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 1486 */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="FOLDING CLIP-ONS"
        headingElement="h1"
        text="<p>Turn your glasses into polarised sunglasses with a folding clip-on</p>"
        imageOverlay="None"
        backgroundColor="#edcbca"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_spacer */}
      <Spacer height="Medium" />

      {/* cpt_product_lister × 3 + cpt_1_column_layout + cpt_product_lister */}
      <ProductLister width="Boxed width" />
      <ProductLister width="Boxed width" />
      <ProductLister width="Boxed width" />
      <Section width="Normal" content={null} />
      <ProductLister width="Boxed width" />
    </PageLayout>
  ),
};
