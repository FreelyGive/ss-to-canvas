import { cn } from 'drupal-canvas';

const textColorMap = {
  'Dark text': '',
  'Light text': 'text-white',
};

const nameTextColorMap = {
  'Dark text': '',
  'Light text': 'text-white',
};

const titleTextColorMap = {
  'Dark text': 'text-gray-500',
  'Light text': 'text-gray-200',
};

const heightBehaviorMap = {
  'Fit to content': '',
  'Fill space available': 'flex-1',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const Blockquote = ({
  quote = '',
  name = '',
  occupationOrganization = '',
  sourceUrl = '',
  showSource = false,
  nameOfSource = '',
  backgroundColor = '',
  textColor = 'Dark text',
  leftBorderColor = '',
  conditionalTextColorLightBackground = '',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorColoredBackground = '',
  conditionallyApplyPaddingIfBackgroundColorIsSet = '',
  heightBehavior = 'Fit to content',
  addSpaceBelow = 'None',
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col leading-[normal]',
        textColorMap[textColor],
        heightBehaviorMap[heightBehavior],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        padding: backgroundColor ? '2rem' : undefined,
      }}
    >
      <div className="flex flex-grow justify-center gap-6">
        <div
          className="w-1 shrink-0"
          style={{ backgroundColor: leftBorderColor || '#e5e7eb' }}
        />
        <div className="flex-grow font-medium">
          <div className="flex items-start self-stretch text-xl leading-8">
            {quote}
          </div>
          {name && (
            <div
              className={cn(
                'flex items-end self-stretch pt-5 leading-6 font-bold whitespace-pre-wrap',
                nameTextColorMap[textColor],
              )}
            >
              {name}
            </div>
          )}
          {occupationOrganization && (
            <div
              className={cn(
                'text-sm leading-5 whitespace-pre-wrap',
                titleTextColorMap[textColor],
              )}
            >
              {occupationOrganization}
            </div>
          )}
          {showSource && sourceUrl && (
            <div className="mt-2 text-sm">
              <a
                href={sourceUrl}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {nameOfSource || sourceUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blockquote;
