import { useState } from 'react';
import { cn, Image } from 'drupal-canvas';

const imageSizeMap = {
  'XX Large landscape (1600x1067)': { width: 1600, height: 1067 },
  'X Large landscape (1200x800)': { width: 1200, height: 800 },
  'Large landscape (1024x683)': { width: 1024, height: 683 },
  'Medium landscape (768x512)': { width: 768, height: 512 },
  'Small landscape (568x352)': { width: 568, height: 352 },
  'X Small landscape (480x320)': { width: 480, height: 320 },
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-4',
};

const GallerySlider = ({
  sliderId,
  images = [],
  imageSize = 'Medium landscape (768x512)',
  desktopThumbnails = '5',
  tabletThumbnails = '5',
  phoneThumbnails = '3',
  addSpaceBelow = 'None',
}) => {
  const [current, setCurrent] = useState(0);

  const fallbackImages = images.length > 0 ? images : [
    { src: 'https://placehold.co/768x512/006699/ffffff?text=1', alt: 'Gallery image 1' },
    { src: 'https://placehold.co/768x512/005580/ffffff?text=2', alt: 'Gallery image 2' },
    { src: 'https://placehold.co/768x512/004466/ffffff?text=3', alt: 'Gallery image 3' },
  ];

  const dims = imageSizeMap[imageSize] || imageSizeMap['Medium landscape (768x512)'];
  const thumbCount = parseInt(desktopThumbnails, 10) || 5;

  const prev = () => setCurrent((i) => (i - 1 + fallbackImages.length) % fallbackImages.length);
  const next = () => setCurrent((i) => (i + 1) % fallbackImages.length);

  return (
    <div
      id={sliderId}
      className={cn('mx-auto w-full', spaceMap[addSpaceBelow])}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={fallbackImages[current].src}
          alt={fallbackImages[current].alt || ''}
          width={dims.width}
          height={dims.height}
          className="w-full object-cover"
          style={{ aspectRatio: `${dims.width} / ${dims.height}` }}
        />
        {fallbackImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      {fallbackImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {fallbackImages.slice(0, thumbCount).map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn('shrink-0 overflow-hidden rounded-lg border-2 transition-colors', i === current ? 'border-[#006699]' : 'border-transparent')}
            >
              <Image
                src={img.src}
                alt={img.alt || ''}
                width={80}
                height={60}
                className="h-16 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GallerySlider;
