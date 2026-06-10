import { cn, Image } from 'drupal-canvas';

const textColorMap = {
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
};

const paddingMap = {
  None: '',
  'Apply padding to card': 'p-6',
};

const heightMap = {
  'Fit to content': '',
  'Fill space available': 'h-full',
};

const spaceMap = {
  None: '',
  'Add space below': 'mb-8',
};

const TestimonialCard = ({
  quote = '',
  headingElement = 'h3',
  name = '',
  occupation = '',
  organization = '',
  image = '',
  altTag = '',
  backgroundColor = '',
  textColor = 'Dark text',
  conditionalTextColorLightBackground = '',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorColoredBackground = '',
  border = 'None',
  borderColor = '',
  padding = 'None',
  conditionallyApplyPadding = '',
  height = 'Fill space available',
  addSpaceBelow = 'None',
}) => {
  const HeadingEl = headingElement;

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        textColorMap[textColor] || 'text-[#002633]',
        border === 'Add border' ? 'border' : '',
        paddingMap[padding] || '',
        heightMap[height] || '',
        spaceMap[addSpaceBelow] || '',
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {quote && (
        <p className="text-base leading-relaxed italic">{quote}</p>
      )}
      {(image || name) && (
        <div className="mt-2 flex items-center gap-3">
          {image && (
            <Image
              src={image}
              alt={altTag || name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover object-center"
            />
          )}
          <div>
            {name && <HeadingEl className="text-sm font-bold">{name}</HeadingEl>}
            {(occupation || organization) && (
              <p className="text-xs opacity-70">
                {[occupation, organization].filter(Boolean).join(', ')}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
