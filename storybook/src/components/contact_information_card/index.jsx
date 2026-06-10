import { cn, Image } from 'drupal-canvas';

const layoutMap = {
  'Left aligned with image above text': 'flex-col items-start',
  'Left aligned with image left of text': 'flex-row items-start',
  'Center aligned with image above text': 'flex-col items-center text-center',
};

const textColorMap = {
  'Dark text': '',
  'Light text': 'text-white',
};

const borderMap = {
  None: '',
  'Add border': 'border',
};

const paddingMap = {
  None: '',
  'Apply padding to card': 'p-6',
};

const heightBehaviorMap = {
  'Fit to content': '',
  'Fill space available': 'flex-1',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const ContactInformationCard = ({
  image = null,
  imageAlt = '',
  headingElement: HeadingEl = 'h3',
  cardHeading = '',
  contactName = '',
  company = '',
  address = '',
  telephone = '',
  email = '',
  layout = 'Left aligned with image above text',
  backgroundColor = '',
  textColor = 'Dark text',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorLightBackground = '',
  conditionalTextColorColoredBackground = '',
  border = 'None',
  borderColor = '',
  padding = 'Apply padding to card',
  conditionallyApplyPaddingIfBackgroundColorOrBorderIsSet = '',
  heightBehavior = 'Fill space available',
  addSpaceBelow = 'None',
}) => {
  return (
    <div
      className={cn(
        'flex gap-4',
        layoutMap[layout],
        textColorMap[textColor],
        borderMap[border],
        paddingMap[padding],
        heightBehaviorMap[heightBehavior],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {image && (
        <Image
          src={image.src}
          alt={imageAlt || image.alt || ''}
          width={image.width || 80}
          height={image.height || 80}
          className="h-20 w-20 object-cover"
        />
      )}
      <div className="flex flex-col gap-2">
        {cardHeading && (
          <HeadingEl className="text-lg font-bold">{cardHeading}</HeadingEl>
        )}
        {contactName && <p className="font-semibold">{contactName}</p>}
        {company && <p className="text-sm opacity-70">{company}</p>}
        {address && (
          <address className="not-italic text-sm leading-relaxed whitespace-pre-line opacity-70">
            {address}
          </address>
        )}
        {telephone && (
          <a href={`tel:${telephone}`} className="text-sm font-medium hover:underline">
            {telephone}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-sm font-medium hover:underline">
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInformationCard;
