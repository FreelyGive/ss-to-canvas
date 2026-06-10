import { cn, FormattedText } from 'drupal-canvas';

const textColorMap = {
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
  'Color text': 'text-[#006699]',
};

const paddingMap = {
  None: '',
  'Apply padding around text': 'p-4',
};

const heightMap = {
  'Fit to content': '',
  'Fill available space': 'h-full',
};

const spaceMap = {
  None: '',
  'Add space below': 'mb-8',
};

const columnMap = {
  '1 Column text (Default)': '',
  '2 Column text': 'columns-2 gap-6',
  '3 Column text': 'columns-3 gap-6',
};

const Text = ({
  content = '',
  backgroundColor = '',
  textColor = 'Dark text',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorLightBackground = '',
  conditionalTextColorColoredBackground = '',
  border = 'None',
  borderColor = '',
  padding = 'None',
  conditionallyApplyPadding = '',
  height = 'Fit to content',
  addSpaceBelow = 'None',
  columnLayout = '1 Column text (Default)',
}) => {
  return (
    <div
      className={cn(
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
      <FormattedText className={columnMap[columnLayout] || ''}>
        {content}
      </FormattedText>
    </div>
  );
};

export default Text;
