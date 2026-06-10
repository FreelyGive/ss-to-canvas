import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import HeroImageMobile from '@/components/hero_image_mobile';
import Section from '@/components/section';
import Heading from '@/components/heading';
import Text from '@/components/text';
import Spacer from '@/components/spacer';
import Button from '@/components/button';
import CardContainer from '@/components/card_container';
import Card from '@/components/card';
import MediaWithText from '@/components/media_with_text';
import CtaBand from '@/components/cta_band';

const meta = {
  title: 'Pages/Polarised Lenses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 3151 (/polarised-lenses) on iolla.ddev.site
// Hero images sourced from media entities 53b6c7f2 (desktop) and bc07623d (mobile)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* Hero — cpt_hero_image_mobile from node 3151.
          All content fields are empty in Drupal — pure background image only. */}
      <HeroImageMobile
        usePageTitle={false}
        heading=""
        headingElement="h1"
        headingTextColor="Light"
        text=""
        textColor="Light"
        showBreadcrumbs="None"
        height="Fluid"
        layout="Text left - Drop zone right"
        textVerticalAlignment="Center"
        enableDropZone={false}
        imageOverlay="None"
        backgroundImage={{
          src: 'https://iolla.ddev.site/sites/default/files/2026-03/Pol%20-%20Web%20Header%20%281%29.jpg',
          alt: 'Polarised sunglasses hero',
        }}
        mobileImage={{
          src: 'https://iolla.ddev.site/sites/default/files/2026-03/Pol%20-%20Web%20Header%20Mobile.jpg',
          alt: 'Polarised sunglasses hero mobile',
        }}
      />

      {/* cpt_1_column_layout (bg #002533, boxed, center) > cpt_text with coh-style-padding-small */}
      <div className="bg-[#002533] py-6">
        <div className="mx-auto max-w-screen-xl px-8 text-center">
          <Text
            content={`<h2 class="text-align-center"><strong>Glare is out. Clarity is in. Enjoy every bright moment with Polarised Sunglasses.</strong></h2><h3 class="text-align-center">Choose any frame, add your prescription and select one of our classic polar lenses for an additional £60.</h3>`}
            textColor="Light text"
          />
        </div>
      </div>

      <Spacer height="Medium" />

      {/* What are polarised lenses — cpt_text_and_image_layout from node 3151 */}
      <MediaWithText
        mediaType="Image"
        image={{
          src: 'https://placehold.co/800x600/004466/ffffff?text=Polarised+Lenses',
          alt: 'What are polarised lenses',
          width: 800,
          height: 600,
        }}
        mediaPosition="Right"
        theme="Light"
        heading="What are Polarised Lenses?"
        text="<p>Polarised lenses contain a special filter that blocks intense reflected light, reducing glare from surfaces like water, roads, and snow. They're perfect for driving, outdoor sports, and everyday life in bright conditions.</p>"
        primaryLinkUrl="/collections/sunglasses"
        primaryLinkLabel="Shop Polarised"
      />

      {/* How do they work */}
      <MediaWithText
        mediaType="Image"
        image={{
          src: 'https://placehold.co/800x600/005580/ffffff?text=How+It+Works',
          alt: 'How polarised lenses work',
          width: 800,
          height: 600,
        }}
        mediaPosition="Left"
        theme="Dark"
        heading="How do polarised sunglasses work?"
        text="<p>Light scatters in all directions when it bounces off reflective surfaces. Polarised lenses have a vertical filter that only lets through vertically-oriented light, eliminating the blinding horizontal glare.</p>"
        primaryLinkUrl="/collections/sunglasses"
        primaryLinkLabel="Shop Now"
      />

      <Spacer height="Medium" />

      <Section
        width="Wide"
        content={
          <Heading
            heading="Benefits of polarised lenses"
            headingElement="h2"
            headingSize="Large"
            layout="Center aligned"
            textColor="Dark"
          />
        }
      />

      <Section
        width="Wide"
        content={
          <CardContainer
            headingLevel="h3"
            headingSize="Medium"
            headingPosition="Center aligned"
            textColor="Dark"
            layout="25-25-25-25"
            content={
              <>
                <Card
                  image={{ src: 'https://placehold.co/400x300/006699/ffffff?text=Glare', alt: 'Reduces glare', width: 400, height: 300 }}
                  heading="Eliminates Glare"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Dramatically reduces reflected glare from water, roads, and other surfaces."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/006699/ffffff?text=Clarity', alt: 'Sharper vision', width: 400, height: 300 }}
                  heading="Sharper Vision"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Experience enhanced clarity and contrast in bright outdoor conditions."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/006699/ffffff?text=Driving', alt: 'Safer driving', width: 400, height: 300 }}
                  heading="Safer Driving"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Reduce blinding glare from wet roads and other vehicles for safer journeys."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/006699/ffffff?text=UV', alt: 'UV protection', width: 400, height: 300 }}
                  heading="UV400 Protection"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Full protection from harmful UVA and UVB rays as standard."
                />
              </>
            }
          />
        }
      />

      {/* How much */}
      <MediaWithText
        mediaType="Image"
        image={{
          src: 'https://placehold.co/800x600/006699/ffffff?text=Pricing',
          alt: 'How much are polarised sunglasses',
          width: 800,
          height: 600,
        }}
        mediaPosition="Left"
        theme="Light"
        heading="How much are polarised sunglasses?"
        text="<p>IOLLA polarised sunglasses start from £105 — that's the complete price including your chosen frames and polarised lenses. No hidden extras.</p>"
        primaryLinkUrl="/collections/sunglasses"
        primaryLinkLabel="Shop Polarised Sunglasses"
      />

      <Spacer height="Medium" />

      <Section
        width="Wide"
        content={
          <Heading
            heading="Designed for Everyday Life"
            headingElement="h2"
            headingSize="Large"
            layout="Center aligned"
            textColor="Dark"
          />
        }
      />

      <Section
        width="Wide"
        content={
          <CardContainer
            headingLevel="h3"
            headingSize="Medium"
            headingPosition="Center aligned"
            textColor="Dark"
            layout="25-25-25-25"
            content={
              <>
                <Card
                  image={{ src: 'https://placehold.co/400x300/004466/ffffff?text=Water', alt: 'Water sports', width: 400, height: 300 }}
                  heading="Water Sports"
                  headingElement="h3"
                  layout="Center aligned"
                  text="See clearly on the water without blinding glare."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/004466/ffffff?text=Cycling', alt: 'Cycling', width: 400, height: 300 }}
                  heading="Cycling"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Enhanced road visibility for safer, more enjoyable rides."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/004466/ffffff?text=Travel', alt: 'Travel', width: 400, height: 300 }}
                  heading="Travel"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Perfect for holidays with bright sun and reflective surfaces."
                />
                <Card
                  image={{ src: 'https://placehold.co/400x300/004466/ffffff?text=Everyday', alt: 'Everyday', width: 400, height: 300 }}
                  heading="Everyday Wear"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Comfortable enough for daily commuting and outdoor activities."
                />
              </>
            }
          />
        }
      />

      <CtaBand
        heading="Our customers' say it best"
        subtext="Join thousands of happy IOLLA customers."
        theme="Brand"
        primaryLinkUrl="/collections/sunglasses"
        primaryLinkLabel="Shop Polarised Sunglasses"
        secondaryLinkUrl="/customer-reviews"
        secondaryLinkLabel="Read Reviews"
      />
    </PageLayout>
  ),
};
