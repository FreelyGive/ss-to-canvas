import { cn, Image } from 'drupal-canvas';

const overlayMap = {
  'None': '',
  'Dark overlay': 'bg-black/60',
  'Light overlay': 'bg-white/30',
};

const headingElementMap = {
  'Heading 2': 'h2',
  'Heading 3': 'h3',
  'Heading 4': 'h4',
  'Heading 5': 'h5',
  'Heading 6': 'h6',
};

const buttonStyleMap = {
  'Primary button blue': 'btn-primary-blue',
  'Primary button green': 'btn-primary-green',
  'Primary button orange': 'btn-primary-orange',
  'Secondary button blue': 'btn-secondary-blue',
  'Secondary button green': 'btn-secondary-green',
  'Secondary button orange': 'btn-secondary-orange',
};

const textColorMap = {
  'Light text': 'text-white',
  'Dark text': 'text-[#002633]',
};

const borderMap = {
  'None': '',
  'Add border': 'border',
};

const heightMap = {
  'Tall': 'min-h-[500px]',
  'Medium': 'min-h-[360px]',
  'Shallow': 'min-h-[220px]',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const ImpactCard = ({
  backgroundImage,
  imageOverlay = 'Dark overlay',
  headingElement = 'Heading 3',
  cardHeading,
  description,
  callToAction,
  link,
  buttonStyle = '',
  textColor = 'Light text',
  border = 'None',
  borderColor,
  minimumHeight = 'Medium',
  heightBehavior = 'Fill space available',
  spaceBelow = 'Add space below',
}) => {
  const HeadingEl = headingElementMap[headingElement] || 'h3';
  const fillHeight = heightBehavior === 'Fill space available';

  return (
    <div
      className={cn(
        'relative flex flex-col justify-end overflow-hidden',
        heightMap[minimumHeight],
        fillHeight ? 'h-full' : '',
        borderMap[border],
        spaceMap[spaceBelow],
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: !backgroundImage ? '#002633' : undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {imageOverlay !== 'None' && (
        <div className={cn('absolute inset-0', overlayMap[imageOverlay])} />
      )}
      <div className={cn('relative z-10 flex flex-col gap-3 p-6', textColorMap[textColor])}>
        {cardHeading && (
          <HeadingEl className="text-2xl font-bold">{cardHeading}</HeadingEl>
        )}
        {description && (
          <p className="text-base leading-relaxed opacity-90">{description}</p>
        )}
        {callToAction && link && (
          <div className="mt-2">
            <a
              href={link.url || '#'}
              target={link.target || '_self'}
              className={cn('inline-block font-bold', buttonStyleMap[buttonStyle])}
            >
              {callToAction}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactCard;
