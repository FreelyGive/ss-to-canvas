import { cn, Image } from 'drupal-canvas';

const textColorMap = {
  'Light text': 'text-white',
  'Dark text': 'text-[#002633]',
};

const borderMap = {
  None: '',
  'Add border': 'border',
};

const minHeightMap = {
  Tall: 'min-h-[480px]',
  Medium: 'min-h-[320px]',
  Shallow: 'min-h-[200px]',
};

const heightBehaviorMap = {
  'Fit to minimum height': '',
  'Fill space available': 'flex-1',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const ShowroomCard = ({
  backgroundImage = null,
  headingElement: HeadingEl = 'h3',
  street = '',
  city = '',
  description = '',
  callToAction = '',
  link = null,
  textColor = 'Light text',
  border = 'None',
  borderColor = '',
  minimumHeight = 'Medium',
  heightBehavior = 'Fill space available',
  addSpaceBelow = 'Add space below',
}) => {
  const url = link?.url || '#';

  return (
    <div
      className={cn(
        'relative flex flex-col justify-end overflow-hidden rounded-2xl',
        minHeightMap[minimumHeight],
        heightBehaviorMap[heightBehavior],
        borderMap[border],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={{
        backgroundColor: !backgroundImage ? '#002633' : undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt || ''}
          width={backgroundImage.width || 600}
          height={backgroundImage.height || 400}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className={cn('relative z-10 flex flex-col gap-2 p-6', textColorMap[textColor])}>
        {(street || city) && (
          <HeadingEl className="text-2xl font-bold leading-tight">
            {street && <span className="block">{street}</span>}
            {city && <span className="block">{city}</span>}
          </HeadingEl>
        )}
        {description && (
          <p className="text-sm leading-relaxed opacity-90">{description}</p>
        )}
        {callToAction && (
          <div className="mt-2">
            <a
              href={url}
              className="inline-block rounded border border-current px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              {callToAction}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowroomCard;
