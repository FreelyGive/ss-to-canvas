import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Hero from '@/components/hero';
import TextAndVideoLayout from '@/components/text_and_video_layout';
import RowForColumns from '@/components/row_for_columns';
import Column from '@/components/column';
import Heading from '@/components/heading';
import Text from '@/components/text';
import Image from '@/components/image';
import Spacer from '@/components/spacer';

const meta = {
  title: 'Pages/Varifocals',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1476 (/varifocals)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_hero */}
      <Hero
        height="Short"
        layout="Text centered - Drop zone below"
        preHeading="Lenses you can rely on"
        heading="Varifocal Eyewear"
        headingElement="h1"
        buttonText="GET STARTED"
        buttonLink=""
        buttonTarget="_self"
        buttonStyle="Primary button orange"
        imageOverlay="Dark overlay"
        backgroundColor="#002533"
        headingTextColor="Light"
        textColor="Light"
        showBreadcrumbs="None"
      />

      {/* cpt_1_column_layout — intro text */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Center"
        spaceBetweenColumns="No space between"
        padding="Top and bottom medium"
        columns={
          <Column
            xlWidth="8  (2/3)"
            lgWidth="8  (2/3)"
            mdWidth="12  (full width)"
            smWidth="12  (full width)"
            content={
              <Text
                content="<p>We care about your eyewear needs. That's why we offer Premium Varifocals, available in our full collection of glasses and sunglasses.&nbsp;Choose between our Premium Varifocals and our Advanced Premium Varifocals. Available to purchase from £185. Ordering IOLLA Varifocals for the first time? Visit one of our showrooms, and a stylist will take the necessary measurements needed to give you the perfect fit.</p>"
                textColor="Dark text"
              />
            }
          />
        }
      />

      {/* cpt_text_and_video_layout */}
      <TextAndVideoLayout
        videoUrl="https://player.vimeo.com/progressive_redirect/playback/809818220/rendition/720p/file.mp4?loc=external"
        videoPosition="Video on right"
        dropZoneContent={
          <>
            <Heading
              heading="Varifocal Lenses"
              headingElement="h2"
              textAlign="Center"
              color="Color heading"
            />
            <Text
              content="<p>Varifocal lenses include two prescriptions, meaning you can use the same pair of glasses or sunglasses for looking at short and long distances. No matter what you're doing throughout your day, from reading, driving, watching TV, to gaming, you can do everything wearing your favourite pair. This means you can see your full field of vision, with no need to switch between multiple pairs of glasses.</p>"
              textColor="Dark text"
            />
          </>
        }
      />

      {/* cpt_1_column_layout — Advanced Premium — bg #002533 */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Center"
        spaceBetweenColumns="No space between"
        padding="Top and bottom medium"
        backgroundColor="#002533"
        columns={
          <Column
            xlWidth="8  (2/3)"
            lgWidth="8  (2/3)"
            mdWidth="12  (full width)"
            smWidth="12  (full width)"
            content={
              <>
                <Heading
                  heading="Advanced Premium Varifocals"
                  headingElement="h2"
                  textAlign="Center"
                  color="Color heading"
                />
                <Text
                  content="<p>Our Advanced Premium Varifocal lens option gives wider fields of view for computer and reading, providing the most natural viewing experience. State of the art technology allows for precise calculations to be carried out across many pinpointed spots on the lens surface to give the best power and reduce distortions.&nbsp;Advanced Premium Varifocal lenses also feature a premium lens coating with anti-smudge and anti-grease protection as well anti-reflective and anti-scratch coatings, for a complete cost of £265.</p>"
                  textColor="Light text"
                />
                <Spacer />
                <Image
                  image={{ src: 'https://iolla.ddev.site/sites/default/files/2024-04/Advanced-vari-webpage.png', alt: 'Advanced Varifocals' }}
                  imageStyle="Large (W1360)"
                  size="Fill space available"
                />
              </>
            }
          />
        }
      />

      {/* cpt_2_column_layout — Exceptional Lens Design + image */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Distribute columns evenly"
        spaceBetweenColumns="Add space between"
        padding="Top and bottom medium"
        columns={
          <>
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <>
                  <Heading
                    heading="Exceptional Lens Design"
                    headingElement="h2"
                    textAlign="Center"
                    color="Color heading"
                  />
                  <Text
                    content="<p>All of our lenses use freeform technology which make them more advanced than traditional designs.</p><p>Last year we had a returns rate of just 1% on our varifocals.</p><p>We're confident you'll notice a better viewing experience with our varifocals. Visit a showroom or contact our Customer Support team for expert advice on the best lens for you.</p>"
                    textColor="Dark text"
                  />
                </>
              }
            />
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <Image
                  image={{ src: 'https://iolla.ddev.site/sites/default/files/2022-05/About-1.jpg', alt: 'About iolla' }}
                  imageStyle="Large (W1360)"
                  size="Fill space available"
                />
              }
            />
          </>
        }
      />

      {/* cpt_2_column_layout — image + Sunglasses / Varifocal Pricing */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Distribute columns evenly"
        spaceBetweenColumns="Add space between"
        padding="Top and bottom medium"
        columns={
          <>
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <Image
                  image={{ src: 'https://iolla.ddev.site/sites/default/files/2025-03/varifocal%20sunglasses.jpg', alt: 'Varifocal sunglasses' }}
                  imageStyle="Large (W1360)"
                  size="Fill space available"
                />
              }
            />
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <>
                  <Heading
                    heading="Sunglasses"
                    headingElement="h2"
                    textAlign="Center"
                    color="Color heading"
                  />
                  <Text
                    content="<p>Want to turn your glasses into sunglasses? For £105, choose from our classic lens options in brown, green or grey.</p>"
                    textColor="Dark text"
                  />
                  <Heading
                    heading="Varifocal Pricing"
                    headingElement="h2"
                    textAlign="Center"
                    color="Color heading"
                  />
                  <Text
                    content="<p>Premium Varifocal&nbsp;lenses: + £100</p><p>Advanced Premium Varifocal&nbsp;lenses: + £180</p><p>All options available as optical lenses or sun lenses, with coatings and lens thinning included as standard.</p>"
                    textColor="Dark text"
                  />
                </>
              }
            />
          </>
        }
      />

      {/* cpt_1_column_layout — Ordered Varifocals with us before? — bg #f2f2f2 */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Center"
        spaceBetweenColumns="No space between"
        padding="Top and bottom medium"
        backgroundColor="#f2f2f2"
        columns={
          <Column
            xlWidth="8  (2/3)"
            lgWidth="8  (2/3)"
            mdWidth="12  (full width)"
            smWidth="12  (full width)"
            content={
              <>
                <Spacer />
                <Heading
                  heading="Ordered Varifocals with us before?"
                  headingElement="h1"
                  textAlign="Center"
                  color="Dark heading"
                />
                <Text
                  content="<p>If you have ordered Varifocals with us before and would like to Refresh or upgrade your lenses, please visit a showroom, call us at 0330 124 6525, or click below to contact us. We're happy to help!</p>"
                  textColor="Dark text"
                  padding="Apply padding around text"
                />
              </>
            }
          />
        }
      />

      {/* cpt_2_column_layout — Occupational Lenses + image */}
      <RowForColumns
        width="Boxed width"
        columnAlignment="Distribute columns evenly"
        spaceBetweenColumns="Add space between"
        padding="Top and bottom medium"
        columns={
          <>
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <>
                  <Heading
                    heading="Occupational Lenses"
                    headingElement="h2"
                    textAlign="Center"
                    color="Color heading"
                  />
                  <Text
                    content="<p>Occupational lenses are specifically designed to make prolonged near and computer work more comfortable.</p><p>Your full reading prescription is placed at the bottom of the lens and the power slowly reduces as your gaze moves up, allowing you to see objects at an intermediate distance.</p><p>As your intermediate prescription sits higher in the lens you can maintain a more comfortable head posture, resulting in an all round better viewing experience.</p><p>Premium Occupational&nbsp;lenses: + £100</p>"
                    textColor="Dark text"
                  />
                  <Image
                    image={{ src: 'https://iolla.ddev.site/sites/default/files/2024-05/occupational%20lenses_300.png', alt: 'Occupational lenses', width: 300 }}
                    imageStyle="Small (W568)"
                    size="Natural size of image"
                  />
                </>
              }
            />
            <Column
              xlWidth="6  (1/2)"
              lgWidth="6  (1/2)"
              mdWidth="12  (full width)"
              smWidth="12  (full width)"
              content={
                <Image
                  image={{ src: 'https://iolla.ddev.site/sites/default/files/2022-03/Frame_Tracer_FW-compressor_2.jpg', alt: 'Frame tracer' }}
                  imageStyle="Large (W1360)"
                  size="Fill space available"
                />
              }
            />
          </>
        }
      />
    </PageLayout>
  ),
};
