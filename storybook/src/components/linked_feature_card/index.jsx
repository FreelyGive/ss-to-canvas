import { cn, Image } from 'drupal-canvas';

const layoutMap = {
  'Left aligned with image above text': 'flex-col items-start text-left',
  'Left aligned with image left of text': 'flex-row items-start text-left',
  'Center aligned with image above text': 'flex-col items-center text-center',
};

const textColorMap = {
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
};

const borderMap = {
  'None': '',
  'Add border': 'border',
};

const roundEdgesMap = {
  'None': '',
  'Add round edges': 'rounded-2xl',
};

const paddingMap = {
  'None': '',
  'Apply padding to card': 'p-6',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const buttonStyleMap = {
  'Primary button blue': 'btn-primary-blue',
  'Primary button green': 'btn-primary-green',
  'Primary button orange': 'btn-primary-orange',
  'Secondary button blue': 'btn-secondary-blue',
  'Secondary button green': 'btn-secondary-green',
  'Secondary button orange': 'btn-secondary-orange',
};

const LinkedFeatureCard = ({
  image,
  altTag,
  headingElement = 'Heading 3',
  cardHeading,
  description,
  callToAction,
  link,
  buttonStyle = '',
  layout = 'Left aligned with image above text',
  backgroundColor,
  textColor = 'Dark text',
  border = 'None',
  roundEdges = 'None',
  borderColor,
  padding = 'None',
  conditionallyApplyPadding,
  height = 'Fill space available',
  spaceBelow = 'Add space below',
}) => {
  const headingTagMap = {
    'Heading 2': 'h2',
    'Heading 3': 'h3',
    'Heading 4': 'h4',
    'Heading 5': 'h5',
    'Heading 6': 'h6',
  };
  const HeadingEl = headingTagMap[headingElement] || 'h3';
  const isRow = layout === 'Left aligned with image left of text';
  const fillHeight = height === 'Fill space available';

  return (
    <div
      className={cn(
        'flex gap-4 transition-shadow hover:shadow-md',
        layoutMap[layout] || 'flex-col items-start text-left',
        textColorMap[textColor],
        borderMap[border],
        roundEdgesMap[roundEdges],
        paddingMap[padding],
        fillHeight ? 'h-full' : '',
        spaceMap[spaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {image && (
        <Image
          src={image.src}
          alt={altTag || image.alt || ''}
          width={image.width || 80}
          height={image.height || 80}
          className={cn('object-contain', isRow ? 'h-16 w-16 shrink-0' : 'h-16 w-auto')}
        />
      )}
      <div className={cn('flex flex-col gap-3', isRow ? 'flex-1' : '')}>
        {cardHeading && (
          <HeadingEl className="text-xl font-bold text-[#006699]">{cardHeading}</HeadingEl>
        )}
        {description && (
          <p className="flex-1 text-base leading-relaxed text-[#5a554e]">{description}</p>
        )}
        {callToAction && link && (
          <a
            href={link.url || '#'}
            target={link.target || '_self'}
            className={cn('inline-block font-bold', buttonStyleMap[buttonStyle] || 'underline')}
          >
            {callToAction}
          </a>
        )}
      </div>
    </div>
  );
};

export default LinkedFeatureCard;
