import { cn } from 'drupal-canvas';

const buttonStyleMap = {
  'Basic link (default)': 'underline',
  'Link with icon': 'underline',
  'Primary button blue': 'btn-primary-blue',
  'Primary button dark blue': 'btn-primary-dark-blue',
  'Primary button green': 'btn-primary-green',
  'Primary button orange': 'btn-primary-orange',
  'Secondary button blue': 'btn-secondary-blue',
  'Secondary button dark blue': 'btn-secondary-dark-blue',
  'Secondary button green': 'btn-secondary-green',
  'Secondary button orange': 'btn-secondary-orange',
  'Primary button dark red': 'btn-primary-dark-red',
  'Primary button cream': 'btn-primary-cream',
};

const alignMap = {
  Left: 'justify-start',
  Center: 'justify-center',
  Right: 'justify-end',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const LinkButton = ({
  buttons = [],
  align = 'Left',
  desktopLayout = 'Row of links / buttons',
  tabletLayout = 'Row of links / buttons',
  phoneLayout = 'Column of links / buttons',
  spaceBelow = 'Add space below',
}) => {
  const isRow = desktopLayout === 'Row of links / buttons';

  return (
    <div
      className={cn(
        'flex w-full flex-wrap gap-3',
        alignMap[align] || 'justify-start',
        isRow ? 'flex-row' : 'flex-col',
        spaceMap[spaceBelow],
      )}
    >
      {buttons.map((button, i) => (
        <a
          key={i}
          href={button.link?.url || '#'}
          target={button.target || '_self'}
          className={cn(
            'inline-block font-bold',
            buttonStyleMap[button.buttonStyle] || 'underline',
          )}
        >
          {button.buttonText || 'Button'}
        </a>
      ))}
    </div>
  );
};

export default LinkButton;
