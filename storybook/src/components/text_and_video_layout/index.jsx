import { cn } from 'drupal-canvas';

const layoutMap = {
  'Video on left':  'flex-row-reverse',
  'Video on right': 'flex-row',
};

const TextAndVideoLayout = ({
  backgroundColor,
  videoUrl = '',
  videoPosition = 'Video on right',
  dropZoneContent,
}) => {
  return (
    <div
      className="w-full"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={cn('mx-auto max-w-screen-xl flex flex-col md:flex-row gap-8 px-8 py-12', layoutMap[videoPosition] ?? 'flex-row')}>
        {/* Text drop zone */}
        <div className="flex-1 flex flex-col justify-center">
          {dropZoneContent ?? <div className="rounded bg-gray-100 p-6 text-sm text-gray-400 text-center">[Text content drop zone]</div>}
        </div>

        {/* Video column */}
        <div className="flex-1">
          {videoUrl ? (
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={videoUrl}
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Video"
              />
            </div>
          ) : (
            <div className="flex h-56 items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-400">
              [Video]
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAndVideoLayout;
