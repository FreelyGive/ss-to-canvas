import { useState } from 'react';
import { cn } from 'drupal-canvas';

const buttonStyleMap = {
  'Read more link': 'p-0 text-primary-600 hover:text-primary-800 hover:underline hover:underline-offset-2',
  'Read more button color': 'inline-flex cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary-600 px-4 py-3 text-sm font-medium text-white hover:bg-primary-700',
  'Read more button dark': 'inline-flex cursor-pointer items-center justify-center rounded-lg border border-[#002633] px-4 py-3 text-sm font-medium text-[#002633] hover:bg-[#002633] hover:text-white',
  'Read more button light': 'inline-flex cursor-pointer items-center justify-center rounded-lg border border-white px-4 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#002633]',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const ReadMore = ({
  collapsedText = 'Read more',
  expandedText = 'Read less',
  buttonStyle = 'Read more link',
  spaceBelow = 'Add space below',
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn('w-full', spaceMap[spaceBelow])}>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          expanded ? 'max-h-[2000px]' : 'max-h-0',
        )}
        aria-hidden={!expanded}
      >
        {content || (
          <div className="py-4 text-[#5a554e]">
            <p>This is the hidden content revealed when the user clicks the button. In production, child components are placed in this slot via the Site Studio canvas.</p>
          </div>
        )}
      </div>
      <button
        type="button"
        className={cn(buttonStyleMap[buttonStyle] || buttonStyleMap['Read more link'])}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? expandedText : collapsedText}
      </button>
    </div>
  );
};

export default ReadMore;
