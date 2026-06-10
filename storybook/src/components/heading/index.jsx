import { cn } from 'drupal-canvas';

const sizeOverrideMap = {
  'No override': '',
  'Pre heading': 'text-sm font-semibold uppercase tracking-wide',
  'XL heading': 'text-7xl font-bold',
  'Heading 1 size': 'text-5xl font-bold',
  'Heading 2 size': 'text-4xl font-bold',
  'Heading 3 size': 'text-3xl font-bold',
  'Heading 4 size': 'text-2xl font-bold',
  'Heading 5 size': 'text-xl font-bold',
  'Heading 6 size': 'text-lg font-bold',
};

const legacySizeMap = {
  'Extra Large': 'text-6xl font-bold',
  'Large': 'text-4xl font-bold',
  'Medium': 'text-2xl font-bold',
  'Small': 'text-lg font-bold',
};

const textAlignMap = {
  'Left': 'text-left',
  'Center': 'text-center',
  'Right': 'text-right',
  'Left aligned': 'text-left',
  'Center aligned': 'text-center',
  'Right aligned': 'text-right',
};

const colorMap = {
  'Dark heading': 'text-[#002633]',
  'Light heading': 'text-white',
  'Color heading': 'text-[#006699]',
  'Dark': 'text-[#002633]',
  'Light': 'text-white',
};

const spaceMap = {
  'None': '',
  'Add space below': 'pb-4',
};

const Heading = ({
  className,
  usePageTitle = false,
  pageTitle,
  heading,
  headingElement = 'H2',
  sizeOverride = 'No override',
  textAlign,
  color = 'Dark heading',
  customColor,
  addSpaceBelow = 'None',
  headingSize,
  layout,
  textColor,
  preHeading,
  textShadow,
}) => {
  const elementMap = {
    H1: 'h1', H2: 'h2', H3: 'h3', H4: 'h4', H5: 'h5', H6: 'h6', Span: 'span',
    h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  };

  const El = elementMap[headingElement] || 'h2';
  const text = usePageTitle ? pageTitle : heading;

  const resolvedAlign = textAlign || layout;
  const resolvedColor = textColor || color;

  const sizeClass = headingSize
    ? legacySizeMap[headingSize] || ''
    : sizeOverride === 'No override'
      ? 'text-2xl font-bold'
      : sizeOverrideMap[sizeOverride] || '';

  if (preHeading || text) {
    return (
      <div className={cn('flex flex-col', textAlignMap[resolvedAlign] || 'text-left', className)}>
        {preHeading && (
          <span className={cn('mb-2 text-base font-bold', colorMap[resolvedColor] || 'text-[#002633]')}>
            {preHeading}
          </span>
        )}
        {text && (
          <El
            className={cn(
              sizeClass,
              'leading-tight',
              customColor ? '' : colorMap[resolvedColor] || 'text-[#002633]',
              spaceMap[addSpaceBelow],
            )}
            style={customColor ? { color: customColor } : undefined}
          >
            {text}
          </El>
        )}
      </div>
    );
  }

  return null;
};

export default Heading;
