import { cn } from 'drupal-canvas';

const paddingMap = {
  'None': '',
  'Apply padding around content': 'py-16',
};

const addSpaceBelowMap = {
  'None': '',
  'Add space below': 'mb-6',
};

const BackgroundVideo = ({
  videoUrl,
  backgroundImage,
  padding = 'None',
  addSpaceBelow = 'None',
  content,
}) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        paddingMap[padding],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={
        !videoUrl && backgroundImage?.src
          ? { backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : undefined
      }
    >
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={backgroundImage?.src}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {content && (
        <div className="relative z-10">{content}</div>
      )}
    </div>
  );
};

export default BackgroundVideo;
