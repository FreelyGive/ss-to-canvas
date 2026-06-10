import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import HeroImageVideo from '@/components/hero_image_video';
import Section from '@/components/section';
import Heading from '@/components/heading';
import Text from '@/components/text';
import Spacer from '@/components/spacer';
import CardContainer from '@/components/card_container';
import Card from '@/components/card';
import CtaBand from '@/components/cta_band';
import ProofStrip, { ProofItem } from '@/components/proof_strip';

const meta = {
  title: 'Pages/We Design Quality Glasses',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero_image_video — fluid, left, Vimeo bg, Dark text, dark blue button */}
      <HeroImageVideo
        height="Fluid"
        layout="Text left - Drop zone right"
        enableDropZone={true}
        imageOverlay="None"
        backgroundVideo="https://player.vimeo.com/progressive_redirect/playback/1179862453/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=e019654487195c9f36e515db232bb20651a5b49dad97a05fd7f5eee8853c32b3"
        buttonLink="/collections/sunglasses"
        buttonText="CUSTOM SUNGLASSES FOR £105"
        buttonStyle="Primary button dark blue"
        headingTextColor="Dark"
        textColor="Dark"
        showBreadcrumbs="None"
      />

      <ProofStrip
        theme="Cream"
        items={
          <>
            <ProofItem heading="Quality Products" text="Designed to last, built from premium materials." />
            <ProofItem heading="Affordable Prices" text="Complete pairs from £85, including lenses." />
            <ProofItem heading="Helpful Service" text="Expert stylists in every showroom." />
            <ProofItem heading="Happiness Guaranteed" text="30-day returns as standard." />
          </>
        }
      />

      {/* Collections */}
      <Section
        width="Wide"
        content={
          <CardContainer
            headingLevel="h2"
            headingSize="Large"
            headingPosition="Center aligned"
            textColor="Dark"
            layout="33-33-33"
            content={
              <>
                <Card
                  image={{ src: 'https://placehold.co/400x400/006699/ffffff?text=Sunglasses+%C2%A3105', alt: 'Sunglasses £105', width: 400, height: 400 }}
                  heading="Custom Sunglasses"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Customise your colour for £105. Shop with or without prescription."
                  link="/collections/sunglasses"
                  linkLabel="SHOP SUNGLASSES"
                  linkVariant="Solid"
                />
                <Card
                  image={{ src: 'https://placehold.co/400x400/005580/ffffff?text=Glasses+%C2%A385', alt: 'Glasses £85', width: 400, height: 400 }}
                  heading="Prescription Glasses"
                  headingElement="h3"
                  layout="Center aligned"
                  text="£85 including coatings & thinning. For all prescriptions."
                  link="/collections/glasses"
                  linkLabel="SHOP GLASSES"
                  linkVariant="Solid"
                />
                <Card
                  image={{ src: 'https://placehold.co/400x400/d95f2b/ffffff?text=Accessories', alt: 'Accessories', width: 400, height: 400 }}
                  heading="Accessories & Gifts"
                  headingElement="h3"
                  layout="Center aligned"
                  text="Complete your look. Chains, cases and gift cards."
                  link="/collections/accessories"
                  linkLabel="SHOP ACCESSORIES & GIFTS"
                  linkVariant="Solid"
                />
              </>
            }
          />
        }
      />

      <Spacer height="Medium" />

      <Section
        width="Normal"
        content={
          <Heading
            heading="What sets us apart"
            headingElement="h2"
            headingSize="Large"
            layout="Center aligned"
            textColor="Dark"
          />
        }
      />

      {/* How it works */}
      <Section
        width="Wide"
        content={
          <>
            <Heading
              heading="How it works"
              headingElement="h2"
              headingSize="Large"
              layout="Center aligned"
              textColor="Dark"
            />
            <CardContainer
              headingLevel="h3"
              headingSize="Medium"
              headingPosition="Center aligned"
              textColor="Dark"
              layout="33-33-33"
              content={
                <>
                  <Card
                    image={{ src: 'https://placehold.co/400x300/f5f2eb/006699?text=1.+Pick', alt: 'Pick frames', width: 400, height: 300 }}
                    heading="Pick your frames"
                    headingElement="h3"
                    layout="Left aligned"
                    text="View and try on the collection online using our Virtual Try-On, or visit a showroom."
                  />
                  <Card
                    image={{ src: 'https://placehold.co/400x300/f5f2eb/006699?text=2.+Add+Rx', alt: 'Add prescription', width: 400, height: 300 }}
                    heading="Add your prescription"
                    headingElement="h3"
                    layout="Left aligned"
                    text="When you've chosen the ones for you, complete your purchase and add your in-date prescription."
                  />
                  <Card
                    image={{ src: 'https://placehold.co/400x300/f5f2eb/006699?text=3.+New+Frame+Day', alt: 'New frame day', width: 400, height: 300 }}
                    heading="New frame day"
                    headingElement="h3"
                    layout="Left aligned"
                    text="We'll let you know when your new IOLLAs are ready and on their way to you."
                  />
                </>
              }
            />
          </>
        }
      />

      <Spacer height="Medium" />

      {/* Lens types */}
      <Section
        width="Wide"
        content={
          <>
            <Heading
              heading="Discover your lens type"
              headingElement="h2"
              headingSize="Large"
              layout="Center aligned"
              textColor="Dark"
            />
            <CardContainer
              headingLevel="h3"
              headingSize="Medium"
              headingPosition="Center aligned"
              textColor="Dark"
              layout="25-25-25-25"
              content={
                <>
                  <Card
                    image={{ src: 'https://placehold.co/400x400/006699/ffffff?text=Varifocals', alt: 'Varifocals', width: 400, height: 400 }}
                    heading="Varifocals"
                    headingElement="h3"
                    layout="Center aligned"
                    link="/varifocals"
                    linkLabel="Learn more"
                    linkVariant="Link"
                  />
                  <Card
                    image={{ src: 'https://placehold.co/400x400/005580/ffffff?text=Blue+Light', alt: 'Blue Light Filter', width: 400, height: 400 }}
                    heading="Blue Light Filter"
                    headingElement="h3"
                    layout="Center aligned"
                    link="/bluelightfilter"
                    linkLabel="Learn more"
                    linkVariant="Link"
                  />
                  <Card
                    image={{ src: 'https://placehold.co/400x400/004466/ffffff?text=Light+Responsive', alt: 'Light Responsive', width: 400, height: 400 }}
                    heading="Light Responsive"
                    headingElement="h3"
                    layout="Center aligned"
                    link="/light-responsive-lenses"
                    linkLabel="Learn more"
                    linkVariant="Link"
                  />
                  <Card
                    image={{ src: 'https://placehold.co/400x400/d95f2b/ffffff?text=Polarised', alt: 'Polarised', width: 400, height: 400 }}
                    heading="Polarised"
                    headingElement="h3"
                    layout="Center aligned"
                    link="/polarised-lenses"
                    linkLabel="Learn more"
                    linkVariant="Link"
                  />
                </>
              }
            />
          </>
        }
      />

      <CtaBand
        heading="Our showrooms"
        subtext="Visit us in Glasgow, Edinburgh, Manchester, Cambridge, and London."
        theme="Dark"
        primaryLinkUrl="/showrooms"
        primaryLinkLabel="Find out more"
      />
    </PageLayout>
  ),
};
