import { cn } from 'drupal-canvas';

const paddingMap = {
  None: '',
  'Apply padding around content': 'p-4',
};

const TabItem = ({
  navigationLabel = '',
  backgroundColor = '',
  padding = 'Apply padding around content',
  content,
}) => {
  return (
    <div
      className={cn('w-full', paddingMap[padding] || '')}
      style={{ backgroundColor: backgroundColor || undefined }}
      role="tabpanel"
      aria-label={navigationLabel}
    >
      {content || (
        <p className="text-sm text-[#5a554e]">Content for "{navigationLabel}" tab goes here.</p>
      )}
    </div>
  );
};

export default TabItem;
