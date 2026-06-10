import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';

/** Shared base style tokens for disabled, focus, and SVG states. */
const baseStyles = {
  disable: 'disabled:pointer-events-none disabled:opacity-50',
  focus:
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:no-underline focus-visible:outline-primary-500 focus-visible:rounded-lg focus-visible:border-transparent',
  svg: '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
};

/**
 * @typedef {Object} ButtonVariantProps
 * @property {'Solid'|'Outline Dark'|'Outline Light'|'Ghost'|'Ghost Neutral'|'Ghost Light'|'Link'|'Link Underline'|'Link Dark'|'Link Light'|'Nav Link Dark'} [variant] - Visual style variant.
 */

/** @type {(props?: ButtonVariantProps) => string} Button visual style classes. */
const buttonVariants = cva(
  cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors',
    baseStyles.disable,
    baseStyles.focus,
    baseStyles.svg,
  ),
  {
    variants: {
      variant: {
        Solid:
          'border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800',
        'Outline Dark':
          'border border-primary-600 text-primary-600 hover:border-primary-800 hover:bg-primary-100 hover:text-primary-800 focus:border-primary-800 focus:bg-primary-100 focus:text-primary-800 active:border-primary-900 active:bg-primary-200 active:text-primary-900',
        'Outline Light':
          'border border-white text-white hover:border-gray-300 hover:bg-gray-800 focus:border-gray-300 focus:bg-gray-800 active:border-gray-400 active:bg-gray-700',
        Ghost:
          'border border-transparent text-primary-600 hover:bg-primary-100 hover:text-primary-800 focus:bg-primary-100 focus:text-primary-800 active:bg-primary-200 active:text-primary-900',
        'Ghost Neutral':
          'border border-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-200 focus:text-gray-800 active:bg-gray-300 active:text-gray-900',
        'Ghost Light':
          'border border-transparent text-white hover:border-gray-300 hover:bg-gray-800 focus:border-gray-300 focus:bg-gray-800 active:border-gray-400 active:bg-gray-700',
        Link: 'p-0 text-primary-600 hover:text-primary-800 hover:underline hover:underline-offset-2 focus:text-primary-800 active:text-primary-900',
        'Link Underline':
          'p-0 text-gray-900 underline underline-offset-3 hover:text-primary-600 focus:text-primary-600 active:text-primary-800',
        'Link Dark':
          'p-0 text-gray-900 hover:text-primary-600 hover:underline hover:underline-offset-3 focus:text-primary-600 active:text-primary-800',
        'Link Light':
          'p-0 text-white hover:text-primary-200 hover:underline hover:underline-offset-3 focus:text-primary-200 active:text-primary-300',
        'Nav Link Dark':
          'rounded-none border border-transparent text-gray-900 hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-800 active:text-primary-800 md:border-b-2 md:border-s-0 md:px-3 md:py-3',
      },
    },
    defaultVariants: {
      variant: 'Solid',
    },
  },
);

/**
 * Link-styled button component with multiple visual variants.
 * Renders as an anchor tag, so it always navigates rather than submitting.
 *
 * @param {Object} props
 * @param {string} [props.text=''] - Button label text.
 * @param {React.ReactNode} [props.children=''] - Alternative/additional button content.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {string} [props.link='#'] - Destination URL.
 * @param {'Solid'|'Outline Dark'|'Outline Light'|'Ghost'|'Ghost Neutral'|'Ghost Light'|'Link'|'Link Underline'|'Link Dark'|'Link Light'|'Nav Link Dark'} [props.variant='Solid'] - Visual style variant.
 * @param {string} [props.target] - Anchor target (_self, _blank, etc.).
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.MouseEventHandler<HTMLAnchorElement>} [props.onClick] - Click handler.
 */
const Button = ({
  text = '',
  children = '',
  className = '',
  link = '#',
  variant,
  target,
  id,
  onClick,
  ...props
}) => {
  return (
    <a
      className={cn(buttonVariants({ variant }), className)}
      href={link}
      target={target}
      id={id}
      onClick={onClick}
      {...props}
    >
      {text}
      {children}
    </a>
  );
};

export default Button;
