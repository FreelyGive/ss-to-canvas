import { cn, Image } from 'drupal-canvas';

const cardLayoutMap = {
  'Left aligned': 'items-start text-left',
  'Center aligned': 'items-center text-center',
};

const statSizeMap = {
  Large: 'text-6xl',
  Medium: 'text-5xl',
  Small: 'text-3xl',
};

const textColorMap = {
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
};

const paddingMap = {
  None: '',
  'Apply padding to card': 'p-6',
};

const spaceMap = {
  None: '',
  'Add space below': 'mb-8',
};

const heightMap = {
  'Fit to content': '',
  'Fill space available': 'h-full',
};

const StatCard = ({
  imageIcon = '',
  altTag = '',
  stat = '1,250',
  label = 'Projects launched',
  cardLayout = 'Left aligned',
  statSize = 'Large',
  backgroundColor = '',
  textColor = 'Dark text',
  conditionalTextColorLightBackground = 'coh-style-card-text-light-background',
  conditionalTextColorDarkBackground = 'coh-style-card-text-dark-background',
  conditionalTextColorColoredBackground = 'coh-style-card-text-colored-background',
  border = 'None',
  borderColor = '',
  padding = 'None',
  conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet = 'coh-style-padding-small',
  height = 'Fill space available',
  addSpaceBelow = 'Add space below',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        cardLayoutMap[cardLayout] || 'items-start text-left',
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
      {imageIcon && (
        <Image
          src={imageIcon}
          alt={altTag}
          width={60}
          height={60}
          className="h-12 w-12 object-contain"
        />
      )}
      {stat && (
        <span className={cn('font-extrabold leading-tight', statSizeMap[statSize] || 'text-6xl')}>
          {stat}
        </span>
      )}
      {label && <p className="text-sm font-medium uppercase tracking-wide">{label}</p>}
    </div>
  );
};

export default StatCard;
