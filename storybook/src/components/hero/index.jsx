import { cn } from 'drupal-canvas';

// Heights from iolla-theme-stylesheet.min.css (.fluid/.tall/.short.coh-ce-cpt_hero-be5d66f5)
const heightMap = {
  'Fluid': 'min-h-[80vh]',
  'Tall':  'min-h-[640px] xl:min-h-[600px] lg:min-h-[560px] md:min-h-[400px]',
  'Short': 'min-h-[320px] lg:min-h-[240px] md:min-h-[160px]',
};

// Text column widths from .left/center/right-align-content .text-content
const textWidthMap = {
  'Text centered - Drop zone below':     'w-[64%] lg:w-[72%] md:w-full',
  'Content centered - text align centre':'w-[64%] lg:w-[72%] md:w-full',
  'Text left - Drop zone right':          'w-[40%] md:w-[50%] sm:w-full',
  'Text right - Drop zone left':          'w-[40%] md:w-[50%] sm:w-full',
  'Content left - text align centre':     'w-[40%] md:w-[50%] sm:w-full',
  'Content right - text align centre':    'w-[40%] md:w-[50%] sm:w-full',
};

const layoutMap = {
  'Text centered - Drop zone below':     'flex-col items-center justify-center',
  'Content centered - text align centre':'flex-col items-center justify-center',
  'Text left - Drop zone right':          'flex-row items-center justify-between',
  'Content left - text align centre':     'flex-row items-center justify-between',
  'Text right - Drop zone left':          'flex-row-reverse items-center justify-between',
  'Content right - text align centre':    'flex-row-reverse items-center justify-between',
};

const textAlignMap = {
  'Text centered - Drop zone below':     'items-center text-center',
  'Content centered - text align centre':'items-center text-center',
  'Text left - Drop zone right':          'items-start text-left',
  'Content left - text align centre':     'items-center text-center',
  'Text right - Drop zone left':          'items-start text-left',
  'Content right - text align centre':    'items-center text-center',
};

const overlayMap = {
  'None':         '',
  'Dark overlay': 'bg-black/20',
  'Light overlay':'bg-white/30',
};

// Heading: brandon-grotesque 700 1.75rem/2.5rem (from .coh-ce-cpt_hero-58777479)
const headingColorMap = {
  'Light':   'text-white',
  'Dark':    'text-gray-900',
  'Colored': 'text-[#006699]',
};

const textColorMap = {
  'Light': 'text-white',
  'Dark':  'text-gray-900',
};

const breadcrumbBgMap = {
  'None': '',
  'Show breadcrumbs on transparent background':           'bg-transparent',
  'Show breadcrumbs on solid dark background':            'bg-[#222] text-white',
  'Show breadcrumbs on solid light background':           'bg-[#f2f2f2]',
  'Show breadcrumbs on semi-transparent dark background': 'bg-black/50 text-white',
};

const buttonStyleMap = {
  'Link with icon':            'underline',
  'Primary button blue':       'bg-[#006699] text-white hover:bg-[#005580]',
  'Primary button dark blue':  'bg-[#002633] text-white hover:bg-[#003d4d]',
  'Primary button green':      'bg-green-700 text-white hover:bg-green-800',
  'Primary button orange':     'bg-orange-600 text-white hover:bg-orange-700',
  'Secondary button blue':     'border border-[#006699] text-[#006699] hover:bg-[#006699] hover:text-white',
  'Secondary button dark blue':'border border-[#002633] text-[#002633] hover:bg-[#002633] hover:text-white',
  'Secondary button green':    'border border-green-700 text-green-700 hover:bg-green-700 hover:text-white',
  'Secondary button orange':   'border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white',
  'Primary button cream':      'bg-[#f5f2eb] text-[#002633] hover:bg-[#e8e4da]',
  'Primary button dark red':   'bg-red-900 text-white hover:bg-red-800',
};

const Hero = ({
  usePageTitle = false,
  pageTitle,
  preHeading,
  heading,
  headingElement: HeadingEl = 'h1',
  text,
  buttonLink,
  buttonText,
  buttonTarget = '_self',
  buttonStyle = 'Primary button dark blue',
  showBreadcrumbs = 'None',
  height = 'Short',
  layout = 'Text left - Drop zone right',
  enableDropZone = false,
  backgroundImage,
  imageStyle = 'Default',
  imageStyleTablet = 'Default',
  imageStyleMobile = 'Default',
  imageOverlay = 'None',
  backgroundColor,
  headingTextColor = 'Light',
  textColor = 'Light',
  dropZoneContent,
}) => {
  const resolvedHeading = usePageTitle ? pageTitle : heading;
  const isCentered = layout === 'Text centered - Drop zone below' || layout === 'Content centered - text align centre';

  return (
    <div
      className={cn(
        'relative flex flex-col w-full overflow-hidden bg-[#002633]',
        heightMap[height],
      )}
      style={{
        ...(backgroundImage?.src
          ? { backgroundImage: `url(${backgroundImage.src.replace(/\(/g, '%28').replace(/\)/g, '%29')})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : {}),
        ...(backgroundColor ? { backgroundColor } : {}),
      }}
    >
      {imageOverlay !== 'None' && (
        <div className={cn('absolute inset-0 z-[1]', overlayMap[imageOverlay])} />
      )}

      {showBreadcrumbs && showBreadcrumbs !== 'None' && (
        <nav
          aria-label="Breadcrumb"
          className={cn(
            'absolute top-0 left-0 right-0 z-10 px-8 py-2 text-sm',
            breadcrumbBgMap[showBreadcrumbs],
            textColorMap[textColor],
          )}
        >
          <span className="opacity-60">Home</span>
          <span className="mx-2 opacity-40">/</span>
          <span>{resolvedHeading}</span>
        </nav>
      )}

      {/* Content row */}
      <div
        className={cn(
          'relative z-[2] flex flex-1 w-full px-8 py-8 md:py-8',
          layoutMap[layout] ?? 'flex-row items-center justify-between',
        )}
      >
        {/* Text column */}
        <div
          className={cn(
            'flex flex-col gap-4',
            textWidthMap[layout] ?? 'w-[40%]',
            textAlignMap[layout] ?? 'items-start text-left',
          )}
        >
          {preHeading && (
            <p className={cn(
              'text-sm font-light tracking-[0.4px] leading-[1.3125rem]',
              textColorMap[textColor],
            )}>
              {preHeading}
            </p>
          )}

          {resolvedHeading && (
            <HeadingEl className={cn(
              'font-brandon font-bold leading-[2.5rem] text-[1.75rem] tracking-[0.9px]',
              headingColorMap[headingTextColor],
            )}>
              {resolvedHeading}
            </HeadingEl>
          )}

          {text && (
            <div
              className={cn('text-base font-light', textColorMap[textColor])}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}

          {buttonLink && buttonText && (
            <div className={cn('flex flex-wrap gap-3 mt-2', isCentered ? 'justify-center' : '')}>
              <a
                href={buttonLink}
                target={buttonTarget}
                className={cn(
                  'inline-block px-6 py-3 text-sm font-medium transition-colors',
                  buttonStyleMap[buttonStyle],
                )}
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>

        {/* Drop zone */}
        {!isCentered && enableDropZone && (
          <div className="flex grow items-center justify-end">
            {dropZoneContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
