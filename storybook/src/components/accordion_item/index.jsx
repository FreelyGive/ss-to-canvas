import { useState } from 'react';
import { cn } from 'drupal-canvas';

const paddingMap = {
  'None': '',
  'Apply padding around content': 'p-4',
};

const AccordionItem = ({
  navigationLabel,
  padding = 'Apply padding around content',
  content,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e5e7eb]">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-[#006699] transition-colors hover:text-[#005580]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{navigationLabel}</span>
        <span
          className={cn(
            'ml-4 shrink-0 text-xl leading-none transition-transform duration-200',
            open ? 'rotate-180' : 'rotate-0',
          )}
          aria-hidden="true"
        >
          &#8964;
        </span>
      </button>
      {open && (
        <div className={cn('pb-4 text-[#5a554e]', paddingMap[padding])}>
          {content || (
            <p className="text-sm text-[#5a554e]">Accordion content goes here.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
