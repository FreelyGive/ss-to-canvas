import { cn, Image } from 'drupal-canvas';

const paddingMap = {
  'None': '',
  'Top and bottom': 'py-16',
  'Top only': 'pt-16',
  'Bottom only': 'pb-16',
};

const ProductLister = ({
  width = 'Boxed width',
  padding = 'Top and bottom',
  backgroundColor,
  backgroundImageDesktop,
  alternativeImageForPhone = false,
  backgroundImageMobile,
  products,
}) => {
  return (
    <section
      className={cn('w-full relative', paddingMap[padding])}
      style={{
        backgroundColor: backgroundColor || undefined,
        backgroundImage: backgroundImageDesktop ? `url(${backgroundImageDesktop.src})` : undefined,
        backgroundSize: backgroundImageDesktop ? 'cover' : undefined,
        backgroundPosition: backgroundImageDesktop ? 'center' : undefined,
      }}
    >
      <div className={cn(width === 'Boxed width' ? 'mx-auto max-w-7xl px-4' : 'w-full px-4')}>
        {products || (
          <div className="rounded border-2 border-dashed border-[#006699]/20 p-8 text-center text-sm text-[#5a554e]">
            Product lister — product cards slot
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductLister;
