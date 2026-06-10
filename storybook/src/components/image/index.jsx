import { cn } from 'drupal-canvas';

// coh-image + coh-image-responsive-xl apply display:block; width:100%; height:auto.
// "Natural size of image" constrains the wrapper to the image's intrinsic width and
// centres it — matching SS behaviour for small/fixed-size images.
const spaceMap = {
  'None':                  '',
  'Add space below image': 'mb-8',
};

const Image = ({
  image,
  imageStyle = 'Medium landscape (768x512)',
  size = 'Natural size of image',
  addSpaceBelow = 'None',
}) => {
  const { src, alt, width } = image;
  const natural = size === 'Natural size of image';
  return (
    <div
      className={cn(spaceMap[addSpaceBelow])}
      style={natural && width ? { maxWidth: width, margin: '0 auto' } : undefined}
    >
      <img
        src={src}
        alt={alt}
        className={cn('block w-full h-auto max-w-full', natural ? '' : 'object-cover')}
      />
    </div>
  );
};

export default Image;
