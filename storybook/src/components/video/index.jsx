import { cn } from 'drupal-canvas';

const spaceMap = {
  None: '',
  'Add space below video': 'mb-8',
};

const Video = ({
  src = '',
  addSpaceBelow = 'Add space below video',
}) => {
  return (
    <div className={cn(spaceMap[addSpaceBelow] || '')}>
      <video className="w-full" controls>
        <source src={src} />
        <track kind="captions" />
      </video>
    </div>
  );
};

export default Video;
