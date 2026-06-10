import { cn } from 'drupal-canvas';

const addSpaceBelowMap = {
  'None': '',
  'Add space below': 'mb-6',
};

const Audio = ({
  src,
  title,
  addSpaceBelow = 'Add space below',
}) => {
  return (
    <div className={cn('w-full', addSpaceBelowMap[addSpaceBelow])}>
      {title && (
        <p className="mb-2 text-sm font-semibold text-[#006699]">{title}</p>
      )}
      {src ? (
        <audio controls className="w-full rounded-lg">
          <source src={src} />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <div className="flex h-14 w-full items-center justify-center rounded-lg bg-[#f5f2eb] text-sm text-[#5a554e]">
          No audio source provided
        </div>
      )}
    </div>
  );
};

export default Audio;
