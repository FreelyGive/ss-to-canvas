import AccordionItem from '@/components/accordion_item';
import { cn } from 'drupal-canvas';

const navigationStyleMap = {
  'Dark text with key-line': 'border border-[#e5e7eb] divide-y divide-[#e5e7eb]',
  'Light text with key-line': 'border border-[#ffffff33] divide-y divide-[#ffffff33]',
  'Solid (For any background)': 'divide-y divide-[#e5e7eb]',
};

const addSpaceBelowMap = {
  'None': '',
  'Add space below': 'mb-6',
};

const AccordionContainer = ({
  navigationStyle = 'Dark text with key-line',
  backgroundColor,
  addSpaceBelow = 'Add space below',
  items,
}) => {
  return (
    <div
      className={cn('w-full', navigationStyleMap[navigationStyle], addSpaceBelowMap[addSpaceBelow])}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {items || (
        <>
          <AccordionItem
            navigationLabel="What are single vision lenses?"
            content={<p>Single vision lenses correct one field of vision — either distance or reading.</p>}
            defaultOpen={true}
          />
          <AccordionItem
            navigationLabel="How do I choose my frame size?"
            content={<p>We measure frames by lens width, bridge width, and temple length in millimetres.</p>}
          />
          <AccordionItem
            navigationLabel="What is your returns policy?"
            content={<p>We accept returns within 30 days of purchase for unworn frames in original condition.</p>}
          />
        </>
      )}
    </div>
  );
};

export default AccordionContainer;
