import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import Spacer from '@/components/spacer';
import ProductLister from '@/components/product_lister';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Collections',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1231 (/collections/accessoriesandgifts)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 1231 */}
      <Hero
        height="Short"
        layout="Content centered - text align centre"
        heading="ACCESSORIES & GIFTS"
        headingElement="h1"
        text="<p>Browse our clip-ons, chains &amp; gift cards.</p>"
        imageOverlay="None"
        backgroundColor="#aacec5"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_spacer */}
      <Spacer height="Medium" />

      {/* cpt_1_column_layout + cpt_spacer + cpt_container + cpt_product_lister
          + cpt_spacer + cpt_1_column_layout + cpt_3_column_layout + cpt_container + cpt_product_lister */}
      <Section width="Normal" content={null} />
      <Spacer height="Medium" />
      <ProductLister width="Boxed width" />
      <Spacer height="Medium" />
      <Section width="Normal" content={null} />
      <ProductLister width="Boxed width" />
    </PageLayout>
  ),
};
