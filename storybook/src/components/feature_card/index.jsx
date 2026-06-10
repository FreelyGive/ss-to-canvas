import { cn, Image } from 'drupal-canvas';

const layoutMap = {
  'Left aligned with image above text': 'flex-col items-start text-left',
  'Left aligned with image left of text': 'flex-row items-start text-left',
  'Center aligned with image above text': 'flex-col items-center text-center',
  'Left aligned with image left of text (How it works)': 'flex-row items-start text-left gap-6',
};

const cardTextColorMap = {
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
};

const borderMap = {
  'None': '',
  'Add border': 'border border-solid',
};

const roundedMap = {
  'None': '',
  'Round edges': 'rounded-2xl',
};

const paddingMap = {
  'None': '',
  'Apply padding to card': 'p-6',
};

const marginBelowMap = {
  'None': '',
  'Add space below': 'mb-4',
};

const fillMap = {
  'Fit to content': 'w-auto',
  'Fill space available': 'w-full',
};

const FeatureCard = ({
  image,
  altTag,
  headingElement = 'Heading 3',
  cardHeading,
  description,
  layout = 'Left aligned with image above text',
  backgroundColor,
  cardTextColor = 'Dark text',
  conditionalTextColorDarkBackground,
  conditionalTextColorLightBackground,
  conditionalTextColorColoredBackground,
  border = 'None',
  roundEdges = 'None',
  borderColor,
  padding = 'Apply padding to card',
  conditionallyApplyPadding,
  fillSpace = 'Fill space available',
  addSpaceBelow = 'Add space below',
}) => {
  const headingElementMap = {
    'Heading 2': 'h2',
    'Heading 3': 'h3',
    'Heading 4': 'h4',
    'Heading 5': 'h5',
    'Heading 6': 'h6',
  };

  const HeadingEl = headingElementMap[headingElement] || 'h3';

  return (
    <div
      className={cn(
        'flex gap-4',
        layoutMap[layout] || 'flex-col items-start text-left',
        cardTextColorMap[cardTextColor],
        borderMap[border],
        roundedMap[roundEdges],
        paddingMap[padding],
        marginBelowMap[addSpaceBelow],
        fillMap[fillSpace],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' ? borderColor || undefined : undefined,
      }}
    >
      {image && (
        <Image
          src={image.src}
          alt={altTag || image.alt || ''}
          width={image.width || 80}
          height={image.height || 80}
          className="object-contain"
        />
      )}
      <div className="flex flex-col gap-2">
        {cardHeading && (
          <HeadingEl className="text-xl font-bold">
            {cardHeading}
          </HeadingEl>
        )}
        {description && (
          <p className="text-base leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
