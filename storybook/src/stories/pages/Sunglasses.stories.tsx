import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import ProductLister from '@/components/product_lister';

const meta = {
  title: 'Pages/Sunglasses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 126 (/collections/sunglasses)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 126 */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        heading="CUSTOM SUNGLASSES FOR £105"
        headingElement="h1"
        text="<p>Choose any frame, choose your custom lens and add your prescription.</p>"
        imageOverlay="None"
        backgroundColor="#fbd7b1"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      {/* cpt_product_lister_filters + cpt_product_lister (bg #f2f2f2, boxed) */}
      <ProductLister width="Boxed width" />
    </PageLayout>
  ),
};
