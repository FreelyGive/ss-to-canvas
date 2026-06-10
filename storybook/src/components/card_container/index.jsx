import GridContainer from '@/components/grid_container';
import Heading from '@/components/heading';
import { cn } from 'drupal-canvas';

/**
 * Card container with an optional heading and a configurable grid layout.
 * Combines a Heading component with a GridContainer for structured content sections.
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes.
 * @param {'Left aligned'|'Center aligned'|'Right aligned'} [props.headingPosition] - Heading alignment.
 * @param {string} [props.heading] - Section heading text.
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.headingLevel] - HTML heading element.
 * @param {'Extra Large'|'Large'|'Medium'|'Small'} [props.headingSize='Large'] - Heading size preset.
 * @param {string} [props.preHeading] - Small text displayed above the heading.
 * @param {'Dark'|'Light'} [props.textColor] - Text color theme.
 * @param {'50-50'|'33-33-33'|'75-25'|'25-75'|'67-33'|'33-67'|'50-25-25'|'25-25-50'|'25-25-25-25'} [props.layout] - Grid column layout.
 * @param {React.ReactNode} [props.content] - Slot content (grid children).
 */
const ThreeColumnCardContainer = ({
  className,
  headingPosition,
  heading,
  headingLevel,
  headingSize = 'Large',
  preHeading,
  textColor,
  layout,
  content,
}) => {
  return (
    <div className={cn('mx-6 flex flex-col items-center gap-16', className)}>
      {heading ? (
        <Heading
          heading={heading}
          headingElement={headingLevel}
          headingSize={headingSize}
          layout={headingPosition}
          preHeading={preHeading}
          textColor={textColor}
        />
      ) : null}
      <GridContainer content={content} layout={layout} />
    </div>
  );
};

export default ThreeColumnCardContainer;
