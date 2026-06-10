import Button from '@/components/button';
import Heading from '@/components/heading';
import { cva } from 'class-variance-authority';
import { cn, FormattedText, Image } from 'drupal-canvas';

/**
 * @typedef {Object} CardVariantProps
 * @property {'Left aligned'|'Center aligned'|'Right aligned'} [layout] - Content alignment.
 * @property {'Default'|'Dark'|'Light'} [textColor] - Text color theme.
 * @property {boolean|string} [image] - Whether the card has an image.
 */

/** @type {(props?: CardVariantProps) => string} Card layout and color classes. */
const cardVariants = cva(
  'flex w-full max-w-md flex-col items-center gap-4 rounded-2xl pb-6 leading-[normal]',
  {
    variants: {
      layout: {
        'Left aligned': 'items-start text-left',
        'Center aligned': 'items-center text-center',
        'Right aligned': 'items-end text-right',
      },
      textColor: {
        Default: null,
        Dark: 'text-primary-dark',
        Light: 'text-white',
      },
      image: {
        true: null,
        false: 'pt-8',
      },
    },
    defaultVariants: {
      textColor: 'Default',
    },
  },
);

/**
 * Content card with optional image, heading, body text, and call-to-action link.
 * Supports multiple layouts and color themes.
 *
 * @param {Object} props
 * @param {string} [props.backgroundColor='#ffffff'] - Card background color.
 * @param {string} [props.backgroundColorOnHover='#E2E8F0'] - Card background color on hover.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {{ src: string, alt?: string, width?: number, height?: number }} props.image - Card image source and metadata.
 * @param {string} [props.heading] - Card heading text.
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.headingElement='h2'] - HTML heading element to render.
 * @param {'Left aligned'|'Center aligned'|'Right aligned'} [props.layout='Left aligned'] - Content alignment.
 * @param {string} [props.link] - Destination URL for the call-to-action.
 * @param {string} [props.linkLabel] - Label text for the call-to-action link.
 * @param {'Solid'|'Outline Dark'|'Link'|'Link Underline'} [props.linkVariant='Link'] - Button variant for the call-to-action.
 * @param {string} [props.text] - Body copy displayed below the heading (HTML).
 * @param {'Dark'|'Light'} [props.textColor] - Text color theme.
 */
const Card = ({
  backgroundColor = '#ffffff',
  backgroundColorOnHover = '#E2E8F0',
  className,
  image,
  heading,
  headingElement = 'h2',
  layout = 'Left aligned',
  link,
  linkLabel,
  linkVariant = 'Link',
  text,
  textColor,
}) => {
  const cardBackgroundClassName = `card-${backgroundColor.substring(1)}`;
  const cardBackgroundClassNameOnHover = `card-${backgroundColorOnHover.substring(1)}`;
  const { src, alt, width, height } = image;

  return (
    <>
      <style>
        {`
          .${cardBackgroundClassName} {
            background-color: ${backgroundColor};
          }
          .${cardBackgroundClassNameOnHover}:hover {
            background-color: ${backgroundColorOnHover};
          }
        `}
      </style>
      <div
        className={cn(
          cardVariants({ layout, textColor, image: !!image }),
          cardBackgroundClassName,
          cardBackgroundClassNameOnHover,
          className,
        )}
      >
        {image && (
          <Image
            {...{ src, alt, width, height }}
            className="w-full rounded-2xl object-cover object-center"
          />
        )}
        <div className="px-6 pt-2">
          {heading && (
            <Heading
              className="mb-2"
              heading={heading}
              headingElement={headingElement}
              headingSize="Small"
              layout={layout}
              textColor={textColor}
            />
          )}
          {text && (
            <FormattedText className="mb-4 leading-6">{text}</FormattedText>
          )}
          {link && linkLabel && (
            <Button link={link} variant={linkVariant}>
              {linkLabel}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
