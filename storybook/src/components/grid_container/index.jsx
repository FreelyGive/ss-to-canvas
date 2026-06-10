import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';

/**
 * @typedef {Object} GridVariantProps
 * @property {'50-50'|'33-33-33'|'75-25'|'25-75'|'67-33'|'33-67'|'50-25-25'|'25-25-50'|'25-25-25-25'} [layout] - Column ratio preset.
 * @property {'Extra Small'|'Small'|'Medium'|'Large'|'Extra Large'} [gap] - Gap size between grid items.
 */

/** @type {(props?: GridVariantProps) => string} CSS Grid layout and gap classes. */
const gridVariants = cva('grid w-full', {
  variants: {
    layout: {
      '50-50': 'md:grid-cols-[1fr_1fr]',
      '33-33-33': 'md:grid-cols-[1fr_1fr_1fr]',
      '75-25': 'md:grid-cols-[3fr_1fr]',
      '25-75': 'md:grid-cols-[1fr_3fr]',
      '67-33': 'md:grid-cols-[2fr_1fr]',
      '33-67': 'md:grid-cols-[1fr_2fr]',
      '50-25-25': 'md:grid-cols-[2fr_1fr_1fr]',
      '25-25-50': 'md:grid-cols-[1fr_1fr_2fr]',
      '25-25-25-25': 'sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]',
    },
    gap: {
      'Extra Small': 'gap-1',
      Small: 'gap-2',
      Medium: 'gap-4',
      Large: 'gap-6',
      'Extra Large': 'gap-8',
    },
  },
  defaultVariants: {
    gap: 'Medium',
    layout: '33-33-33',
  },
});

/**
 * Responsive CSS Grid container with predefined column ratio layouts.
 * Columns stack to single-column on mobile and expand at the `md` breakpoint.
 *
 * @param {Object} props
 * @param {'50-50'|'33-33-33'|'75-25'|'25-75'|'67-33'|'33-67'|'50-25-25'|'25-25-50'|'25-25-25-25'} [props.layout='33-33-33'] - Column ratio preset.
 * @param {'Extra Small'|'Small'|'Medium'|'Large'|'Extra Large'} [props.gap='Medium'] - Gap size between grid items.
 * @param {string} [props.className] - Additional CSS classes for the inner grid element.
 * @param {React.ReactNode} props.content - Slot content (grid children).
 */
const GridContainer = ({ layout, gap, className, content, ...props }) => {
  return (
    <div className="m-auto mx-6 w-full max-w-[1360px]">
      <div className={cn(gridVariants({ layout, gap }), className)} {...props}>
        {content}
      </div>
    </div>
  );
};
export default GridContainer;
