import { cn } from 'drupal-canvas';

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

const ShowroomInformationCard = ({
  headingElement: HeadingEl = 'h2',
  cardHeading = '',
  addressLine1 = '',
  addressLine2 = '',
  addressLine3 = '',
  postcode = '',
  telephone = '',
  openingTimes = [],
  layout = 'Left aligned with image above text',
  backgroundColor = '',
  textColor = 'Dark text',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorLightBackground = '',
  conditionalTextColorColoredBackground = '',
  border = 'None',
  borderColor = '',
  padding = 'Apply padding to card',
  conditionallyApplyPadding = '',
  heightBehavior = 'Fill space available',
  addSpaceBelow = 'Add space below',
}) => {
  const addressLines = [addressLine1, addressLine2, addressLine3, postcode].filter(Boolean);
  const times = Array.isArray(openingTimes) ? openingTimes : [];

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
      <div className="flex flex-col gap-3">
        {cardHeading && (
          <HeadingEl className="text-xl font-bold">{cardHeading}</HeadingEl>
        )}
        {addressLines.length > 0 && (
          <address className="not-italic text-sm leading-relaxed">
            {addressLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </address>
        )}
        {telephone && (
          <a href={`tel:${telephone}`} className="text-sm font-medium hover:underline">
            {telephone}
          </a>
        )}
        {times.length > 0 && (
          <ul className="flex flex-col gap-1 text-sm">
            {times.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShowroomInformationCard;
