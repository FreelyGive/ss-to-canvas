import { cn, Image } from 'drupal-canvas';

const heightMap = {
  'Fit to content': '',
  'Fill space available': 'h-full',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const ProductCard = ({
  product,
  overlayText,
  textColour,
  toggleFeaturedProductCard = false,
  conditionalTextColorLightBackground,
  conditionalTextColorDarkBackground,
  conditionalTextColorColoredBackground,
  border = 'None',
  borderColor,
  height = 'Fill space available',
  spaceBelow = 'None',
}) => {
  const title = product?.title || '';
  const price = product?.price || '';
  const image = product?.image;
  const url = product?.url || '#';

  return (
    <a
      href={url}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-white no-underline transition-shadow hover:shadow-lg',
        toggleFeaturedProductCard ? 'col-span-2 row-span-2' : '',
        border === 'Add border' ? 'border' : '',
        heightMap[height],
        spaceMap[spaceBelow],
      )}
      style={{
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image?.src || 'https://placehold.co/400x300/f5f2eb/5a554e?text=Product'}
          alt={image?.alt || title || 'Product'}
          width={image?.width || 400}
          height={image?.height || 300}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {overlayText && (
          <span
            className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wide"
            style={{ color: textColour || '#ffffff', backgroundColor: textColour ? undefined : '#d95f2b' }}
          >
            {overlayText}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        {title && (
          <h3 className="text-sm font-semibold text-[#002633] group-hover:text-[#006699]">{title}</h3>
        )}
        {price && (
          <p className="text-sm font-bold text-[#006699]">{price}</p>
        )}
      </div>
    </a>
  );
};

export default ProductCard;
