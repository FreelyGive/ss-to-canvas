import { cn, Image } from 'drupal-canvas';

const justifyMap = {
  'Distribute columns evenly': 'justify-between',
  'Left': 'justify-start',
  'Right': 'justify-end',
  'Center': 'justify-center',
};

const spacingMap = {
  'Add space between': 'gap-6',
  'No space between': 'gap-0',
};

const paddingMap = {
  'None': '',
  'Top and bottom large': 'py-16',
  'Top and bottom medium': 'py-10',
  'Top and bottom small': 'py-4',
  'Top only large': 'pt-16',
  'Top only medium': 'pt-10',
  'Top only small': 'pt-4',
  'Bottom only large': 'pb-16',
  'Bottom only medium': 'pb-10',
  'Bottom only small': 'pb-4',
};

const RowForColumns = ({
  width = 'Boxed width',
  columnAlignment = 'Center',
  spaceBetweenColumns = 'Add space between',
  padding = 'None',
  backgroundColor,
  backgroundImageDesktop,
  alternativeImageForPhone = false,
  backgroundImageMobile,
  columns,
}) => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: backgroundColor || undefined,
        backgroundImage: backgroundImageDesktop ? `url(${backgroundImageDesktop.src})` : undefined,
        backgroundSize: backgroundImageDesktop ? 'cover' : undefined,
        backgroundPosition: backgroundImageDesktop ? 'center' : undefined,
      }}
    >
      <div
        className={cn(
          'flex flex-wrap',
          width === 'Boxed width' ? 'mx-auto max-w-7xl px-4' : 'w-full',
          justifyMap[columnAlignment] || 'justify-center',
          spacingMap[spaceBetweenColumns] || 'gap-6',
          paddingMap[padding],
        )}
      >
        {columns || (
          <div className="w-full rounded border-2 border-dashed border-[#006699]/20 p-4 text-center text-sm text-[#5a554e]">
            Row — add column components here
          </div>
        )}
      </div>
    </div>
  );
};

export default RowForColumns;
