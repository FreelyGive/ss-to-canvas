import { cn } from 'drupal-canvas';

const paddingMap = {
  'None': '',
  'Apply padding to component': 'p-4',
};

const ReviewsWidget = ({
  backgroundColor,
  padding = 'Apply padding to component',
  conditionallyApplyPaddingIfBackgroundColorIsSet,
}) => {
  return (
    <div
      className={cn('flex flex-col items-center gap-2 rounded-2xl', paddingMap[padding])}
      style={{ backgroundColor: backgroundColor || undefined }}
    >
      <div className="flex items-center gap-1 text-2xl text-[#d95f2b]">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < 5 ? 'opacity-100' : 'opacity-20'}>★</span>
        ))}
      </div>
      <p className="text-3xl font-extrabold text-[#006699]">4.8</p>
      <p className="text-sm text-[#5a554e]">
        Based on <strong>1,247</strong> verified reviews
      </p>
      <div className="mt-2 flex items-center gap-2">
        <span className="rounded-full bg-[#1a7a4a] px-3 py-1 text-xs font-bold text-white">
          Excellent
        </span>
        <span className="text-xs text-[#5a554e]">Powered by Reviews.io</span>
      </div>
    </div>
  );
};

export default ReviewsWidget;
