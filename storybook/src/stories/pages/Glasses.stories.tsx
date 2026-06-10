import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import ProductLister from '@/components/product_lister';

const meta = {
  title: 'Pages/Glasses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero */}
      <Hero
        height="Short"
        layout="Content centered - text align centre"
        heading="GLASSES FOR £85"
        headingElement="h1"
        text="<p>Prescription glasses, lenses included.</p>"
        imageOverlay="None"
        backgroundColor="#edcbca"
        headingTextColor="Dark"
        textColor="Dark"
        enableDropZone={false}
        showBreadcrumbs="None"
      />

      {/* cpt_product_lister_filters + cpt_product_lister */}
      <ProductLister width="Boxed width" />
    </PageLayout>
  ),
};
