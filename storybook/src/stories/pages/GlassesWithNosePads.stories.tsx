import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import ProductLister from '@/components/product_lister';

const meta = {
  title: 'Pages/Glasses with Nose Pads',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 2996 (/glasses-nose-pads)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero from node 2996 */}
      <Hero
        height="Short"
        layout="Text left - Drop zone right"
        heading="Glasses with nose pads"
        headingElement="h1"
        text="<p class=&quot;p1&quot;>Designed for a secure, slip-free fit and all-day comfort. Our nose pads are adjustable to offer a unique fit for you.</p>"
        imageOverlay="Light overlay"
        backgroundColor="#006699"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_product_lister_filters + cpt_product_lister + cpt_2_column_layout + cpt_product_lister */}
      <ProductLister width="Boxed width" />
      <ProductLister width="Boxed width" />
    </PageLayout>
  ),
};
