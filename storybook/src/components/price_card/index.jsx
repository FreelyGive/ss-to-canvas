import Button from '@/components/button';
import { cn, Image } from 'drupal-canvas';

const paddingMap = {
  'None': '',
  'Apply padding to card': 'p-4',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const PriceCard = ({
  image,
  altTag,
  headingElement: HeadingEl = 'h3',
  heading,
  subHeading,
  tickListItems = [],
  currency,
  price,
  term,
  callToAction,
  link,
  backgroundColor,
  textColor = 'Dark text',
  conditionalTextColorLightBackground,
  conditionalTextColorDarkBackground,
  conditionalTextColorColoredBackground,
  border = 'None',
  borderColor,
  padding = 'None',
  conditionallyApplyPadding,
  spaceBelow = 'Add space below',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl overflow-hidden',
        border === 'Add border' ? 'border' : '',
        paddingMap[padding],
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
          alt={altTag || image.alt || heading || ''}
          width={image.width || 400}
          height={image.height || 300}
          className="w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {heading && (
          <HeadingEl className="text-xl font-bold text-[#006699]">{heading}</HeadingEl>
        )}
        {subHeading && (
          <p className="text-sm text-[#5a554e]">{subHeading}</p>
        )}
        {tickListItems.length > 0 && (
          <ul className="flex flex-col gap-1">
            {tickListItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#5a554e]">
                <span className="mt-0.5 shrink-0 text-[#1a7a4a]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}
        {price && (
          <div className="mt-auto pt-4">
            <span className="text-3xl font-extrabold text-[#006699]">
              {currency}{price}
            </span>
            {term && <span className="ml-1 text-sm text-[#5a554e]">{term}</span>}
          </div>
        )}
        {callToAction && (
          <Button link={link || '#'} variant="Solid">
            {callToAction}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceCard;
