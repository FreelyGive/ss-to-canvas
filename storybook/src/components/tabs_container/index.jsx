import { useState } from 'react';
import { cn } from 'drupal-canvas';

const navStyleMap = {
  'Dark text with key-line': {
    nav: 'border-b border-[#e5e7eb]',
    active: 'border-b-2 border-[#002633] text-[#002633] font-semibold',
    inactive: 'border-b-2 border-transparent text-[#5a554e] hover:text-[#002633]',
  },
  'Light text with key-line': {
    nav: 'border-b border-white/30',
    active: 'border-b-2 border-white text-white font-semibold',
    inactive: 'border-b-2 border-transparent text-white/70 hover:text-white',
  },
  'Solid (For any background)': {
    nav: 'gap-1',
    active: 'rounded bg-white text-[#002633] font-semibold shadow-sm',
    inactive: 'rounded text-[#5a554e] hover:bg-white/50',
  },
};

const tabPositionMap = {
  'Left aligned': 'justify-start',
  'Left aligned within boxed width of grid': 'justify-start max-w-screen-xl mx-auto',
  'Center aligned': 'justify-center',
  'Right aligned': 'justify-end',
  'Right aligned within boxed width of grid': 'justify-end max-w-screen-xl mx-auto',
  'Distributed equally': 'justify-between',
  'Distributed equally within boxed width of grid': 'justify-between max-w-screen-xl mx-auto',
};

const spaceMap = {
  None: '',
  'Add space below': 'mb-8',
};

const defaultTabs = [
  { label: 'Single Vision', content: <p className="text-[#5a554e]">Single vision lenses correct one field of vision — either distance or reading.</p> },
  { label: 'Bifocal', content: <p className="text-[#5a554e]">Bifocal lenses have two distinct optical powers — typically distance and reading.</p> },
  { label: 'Varifocal', content: <p className="text-[#5a554e]">Varifocal lenses provide a seamless graduation of optical power from distance to near.</p> },
];

const TabsContainer = ({
  orientation = 'Horizontal',
  tabPosition = 'Left aligned',
  navigationStyle = 'Dark text with key-line',
  spaceBetweenNavContent = true,
  backgroundColor = '',
  addSpaceBelow = 'None',
  items,
}) => {
  const tabs = items || defaultTabs;
  const [activeIndex, setActiveIndex] = useState(0);

  const styleConfig = navStyleMap[navigationStyle] || navStyleMap['Dark text with key-line'];
  const isVertical = orientation === 'Vertical';

  return (
    <div
      className={cn(
        'w-full',
        isVertical ? 'flex' : '',
        spaceMap[addSpaceBelow] || '',
      )}
      style={{ backgroundColor: backgroundColor || undefined }}
    >
      <div
        className={cn(
          'flex',
          isVertical
            ? cn('flex-col border-r border-[#e5e7eb]', spaceBetweenNavContent ? 'mr-6' : '')
            : cn(styleConfig.nav, tabPositionMap[tabPosition] || 'justify-start'),
        )}
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeIndex === i}
            className={cn(
              'px-4 py-2 text-sm transition-colors',
              activeIndex === i ? styleConfig.active : styleConfig.inactive,
            )}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 p-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default TabsContainer;
