import Heading from '@/components/heading';
import Text from '@/components/text';
import { cva } from 'class-variance-authority';
import { Image as ResponsiveImage } from 'drupal-canvas';

/**
 * @typedef {Object} TwoColumnLayoutVariantProps
 * @property {'Left aligned'|'Centered'} [layout] - Content alignment.
 */

/** @type {(props?: TwoColumnLayoutVariantProps) => string} Two-column layout classes. */
const heroVariants = cva('mx-auto flex w-full max-w-[1360px] flex-col gap-8', {
  variants: {
    layout: {
      'Left aligned': 'items-start justify-between md:flex-row',
      Centered: 'flex-col items-center justify-center text-center',
    },
  },
  defaultVariants: {
    layout: 'Left aligned',
  },
});

/**
 * Two-column layout with heading, text, optional buttons, and a side image.
 * Supports left-aligned and centered layouts.
 *
 * @param {Object} props
 * @param {'Left aligned'|'Centered'} [props.layout] - Content alignment.
 * @param {string} [props.preHeading] - Small text above the heading.
 * @param {string} [props.heading] - Heading text.
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.headingElement] - HTML heading element.
 * @param {'Extra Large'|'Large'|'Medium'|'Small'} [props.headingSize='Large'] - Heading size preset.
 * @param {string} [props.text] - Body text (HTML).
 * @param {React.ReactNode} [props.buttons] - Call-to-action button slot.
 * @param {'Dark'|'Light'} [props.textColor='Dark'] - Text color theme.
 * @param {{ src: string, alt?: string, width?: number, height?: number }} [props.image] - Side image source and metadata.
 * @param {React.ReactNode} [props.rightColumn] - Additional right column slot content.
 * @param {'Light'|'Medium'|'Heavy'} [props.textShadow] - Text shadow intensity.
 */
const TwoColumnText = ({
  layout,
  preHeading,
  heading,
  headingElement,
  headingSize = 'Large',
  text,
  buttons,
  textColor = 'Dark',
  image,
  rightColumn,
  textShadow,
}) => {
  return (
    <div className="flex w-full justify-start bg-cover bg-center bg-no-repeat py-24">
      <div className="mx-6 flex w-full items-center justify-center">
        <div className={heroVariants({ layout })}>
          <div
            className={`flex max-w-xl flex-col items-start justify-start gap-4 xl:max-w-lg ${layout === 'Centered' ? 'items-center' : 'items-start'}`}
          >
            <div className="mb-4">
              <Heading
                heading={heading}
                headingElement={headingElement}
                headingSize={headingSize}
                preHeading={preHeading}
                textColor={textColor}
                textShadow={textShadow}
              />
            </div>
            {text && (
              <Text
                className="mb-4"
                text={text}
                textColor={textColor}
                textSize="Large"
                textShadow={textShadow}
              />
            )}
            <div
              className={`flex w-full min-w-3xs gap-4 ${layout === 'Centered' ? 'justify-center' : 'justify-start'}`}
            >
              {buttons}
            </div>
          </div>
          <div className="flex max-w-3xl">
            <ContentImage image={image} className="h-auto max-w-full" />
            {rightColumn}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Renders the optional side image, or null when no image is provided. */
const ContentImage = ({ image, className }) => {
  if (!image) {
    return null;
  }
  const { src, alt, width, height } = image;
  return (
    <ResponsiveImage {...{ src, alt, width, height }} className={className} />
  );
};

export default TwoColumnText;
