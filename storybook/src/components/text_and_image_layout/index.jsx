import { cn } from 'drupal-canvas';

/**
 * Text and image layout component (cpt_text_and_image_layout).
 * Provides a two-column layout with an image panel on the left or right,
 * and a drop-zone content slot on the opposite side.
 *
 * @param {Object} props
 * @param {string} [props.backgroundColor] - Background colour (hex).
 * @param {{ src: string, alt?: string }} [props.image] - Image source and alt text.
 * @param {'Image on left'|'Image on right'} [props.imagePosition='Image on right'] - Image panel position.
 * @param {boolean} [props.overflowHidden=false] - Whether to clip overflowing content.
 * @param {React.ReactNode} [props.content] - Drop-zone content slot.
 */
const TextAndImageLayout = ({
  backgroundColor,
  image,
  imagePosition = 'Image on right',
  overflowHidden = false,
  content,
}) => {
  const isImageLeft = imagePosition === 'Image on left';

  return (
    <div
      className={cn('flex w-full', isImageLeft ? 'flex-row' : 'flex-row-reverse', overflowHidden && 'overflow-hidden')}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {image && (
        <div className="w-1/2 shrink-0">
          <img
            src={image.src}
            alt={image.alt ?? ''}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex w-1/2 flex-col justify-center p-8">
        {content}
      </div>
    </div>
  );
};

export default TextAndImageLayout;
