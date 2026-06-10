import { cva } from 'class-variance-authority';

/**
 * @typedef {Object} SectionWidthVariantProps
 * @property {'Normal'|'Wide'} [width] - Content max-width constraint.
 */

/** @type {(props?: SectionWidthVariantProps) => string} Section inner content width classes. */
const sectionVariants = cva('m-auto my-8 px-4', {
  variants: {
    width: {
      Normal: 'max-w-2xl',
      Wide: 'max-w-4xl',
    },
  },
});

/**
 * Page section wrapper with configurable content width.
 *
 * @param {Object} props
 * @param {'Normal'|'Wide'} [props.width] - Content max-width constraint.
 * @param {React.ReactNode} [props.content] - Slot content to render inside the section.
 */
const Section = ({ width, content }) => {
  return <div className={sectionVariants({ width })}>{content}</div>;
};

export default Section;
