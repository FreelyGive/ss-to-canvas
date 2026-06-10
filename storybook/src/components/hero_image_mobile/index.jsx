import { cn } from 'drupal-canvas';

// Heights on the inner row (coh-ce-cpt_hero_image_mobile-7a8c6533)
const heightMap = {
  'Fluid': 'min-h-[80vh]',
  'Tall':  'min-h-[800px] xl:min-h-[600px] lg:min-h-[560px] md:min-h-[80vh]',
  'Short': 'min-h-[320px] lg:min-h-[240px] md:min-h-[80vh]',
};

// Row direction + alignment per layout (left-align-content / center-align-content / right-align-content)
const rowLayoutMap = {
  'Text centered - Drop zone below': 'flex-col items-center justify-center',
  'Text left - Drop zone right':     'flex-row items-center justify-between',
  'Text right - Drop zone left':     'flex-row-reverse items-center justify-between',
};

// text-content width per layout (.left-align-content .text-content { width:40% } etc.)
const textWidthMap = {
  'Text centered - Drop zone below': 'w-[64%] lg:w-[72%] md:w-[65%] sm:w-full',
  'Text left - Drop zone right':     'w-[40%] md:w-1/2 sm:w-full',
  'Text right - Drop zone left':     'w-[40%] md:w-1/2 sm:w-full',
};

const textAlignMap = {
  'Text centered - Drop zone below': 'text-center',
  'Text left - Drop zone right':     'text-left',
  'Text right - Drop zone left':     'text-right',
};

// wysiwyg right/left padding (.left-align-content .text-content > .coh-wysiwyg { padding-right: 9rem })
const wysiwygPaddingMap = {
  'Text centered - Drop zone below': '',
  'Text left - Drop zone right':     'xl:pr-36 lg:pr-16',
  'Text right - Drop zone left':     'xl:pl-36 lg:pl-16',
};

// Vertical alignment modifiers on the row (top/center/bottom + layout combo)
const verticalAlignMap = {
  'Top':    'items-start pt-4',
  'Center': '',
  'Bottom': 'items-end pb-4',
};

const overlayMap = {
  'None':          '',
  'Dark overlay':  'bg-black/20',
  'Light overlay': 'bg-white/30',
};

const headingColorMap = {
  'Light':   'text-white',
  'Dark':    'text-[#1a1a1a]',
  'Colored': 'text-[#006699]',
};

const textColorMap = {
  'Light': 'text-white',
  'Dark':  'text-[#1a1a1a]',
};

const breadcrumbBgMap = {
  'None': '',
  'Show breadcrumbs on transparent background':           'bg-transparent',
  'Show breadcrumbs on solid dark background':            'bg-[#222] text-white',
  'Show breadcrumbs on solid light background':           'bg-[#f2f2f2]',
  'Show breadcrumbs on semi-transparent dark background': 'bg-black/50 text-white',
};

const buttonStyleMap = {
  'Link with icon':             'underline text-current',
  'Primary button blue':        'bg-[#006699] text-white hover:bg-[#005580] px-6 py-3 text-sm font-medium',
  'Primary button dark blue':   'bg-[#002633] text-white hover:bg-[#003d4d] px-6 py-3 text-sm font-medium',
  'Primary button green':       'bg-green-700 text-white hover:bg-green-800 px-6 py-3 text-sm font-medium',
  'Primary button orange':      'bg-[#d95f2b] text-white hover:bg-[#c0521f] px-6 py-3 text-sm font-medium',
  'Secondary button blue':      'border border-[#006699] text-[#006699] hover:bg-[#006699] hover:text-white px-6 py-3 text-sm font-medium',
  'Secondary button dark blue': 'border border-[#002633] text-[#002633] hover:bg-[#002633] hover:text-white px-6 py-3 text-sm font-medium',
  'Secondary button green':     'border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 text-sm font-medium',
  'Secondary button orange':    'border border-[#d95f2b] text-[#d95f2b] hover:bg-[#d95f2b] hover:text-white px-6 py-3 text-sm font-medium',
  'Primary button cream':       'bg-[#f5f2eb] text-[#002633] hover:bg-[#e8e4da] px-6 py-3 text-sm font-medium',
  'Primary button dark red':    'bg-red-900 text-white hover:bg-red-800 px-6 py-3 text-sm font-medium',
};

const HeroImageMobile = ({
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
  textVerticalAlignment = 'Center',
  enableDropZone = false,
  imageOverlay = 'None',
  backgroundImage,
  mobileImage,
  backgroundColor,
  headingTextColor = 'Light',
  textColor = 'Light',
  dropZoneContent,
}) => {
  const resolvedHeading = usePageTitle ? pageTitle : heading;
  const isCentered = layout === 'Text centered - Drop zone below';

  // Vertical alignment overrides the default row alignment when not Center
  const verticalClass = textVerticalAlignment !== 'Center' ? verticalAlignMap[textVerticalAlignment] ?? '' : '';

  return (
    /*
     * Outer wrapper: background image lives here (z-index:-1 in SS).
     * No height — height is on the inner boxed row.
     */
    <div
      className="relative w-full overflow-hidden bg-[#002633]"
      style={{
        ...(backgroundImage?.src
          ? { backgroundImage: `url(${backgroundImage.src.replace(/\(/g, '%28').replace(/\)/g, '%29')})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : {}),
        ...(backgroundColor ? { backgroundColor } : {}),
      }}
    >
      {/* Overlay sits between background and content */}
      {imageOverlay !== 'None' && (
        <div className={cn('absolute inset-0', overlayMap[imageOverlay])} />
      )}

      {/* Breadcrumbs strip across top */}
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

      {/*
       * Inner boxed row: carries the min-height, flex direction, and max-width.
       * Mirrors: fluid/tall/short + left-align-content/center-align-content + center-vertical-align-content
       */}
      <div
        className={cn(
          'relative z-[2] flex w-full max-w-screen-xl mx-auto px-8 md:px-6 md:py-8',
          heightMap[height],
          rowLayoutMap[layout] ?? 'flex-row items-center justify-between',
          verticalClass,
        )}
      >
        {/* Text column — flex-shrink:0, width from layout */}
        <div
          className={cn(
            'flex flex-col gap-4 shrink-0',
            textWidthMap[layout] ?? 'w-[40%]',
            textAlignMap[layout] ?? 'text-left',
          )}
        >
          {preHeading && (
            <p className={cn(
              'font-museo text-sm font-light tracking-[0.4px] leading-5 mb-4',
              textColorMap[textColor],
            )}>
              {preHeading}
            </p>
          )}

          {resolvedHeading && (
            <HeadingEl className={cn(
              'font-brandon font-medium text-[2.5rem] leading-[2.5rem] tracking-[0px] mb-4 z-[2] pb-2',
              headingColorMap[headingTextColor],
            )}>
              {resolvedHeading}
            </HeadingEl>
          )}

          {text && (
            <div
              className={cn(
                'font-museo font-medium text-base tracking-[0.4px] mb-4',
                wysiwygPaddingMap[layout],
                textColorMap[textColor],
              )}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}

          {buttonLink && buttonText && (
            <div className={cn('flex flex-wrap gap-3 mb-4', isCentered ? 'justify-center' : '')}>
              <a
                href={buttonLink}
                target={buttonTarget}
                className={cn('inline-block transition-colors', buttonStyleMap[buttonStyle])}
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>

        {/* Drop zone — right/left column when not centered */}
        {!isCentered && enableDropZone && (
          <div className={cn('grow', layout === 'Text right - Drop zone left' ? 'text-left' : 'text-right md:text-left')}>
            {dropZoneContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroImageMobile;
