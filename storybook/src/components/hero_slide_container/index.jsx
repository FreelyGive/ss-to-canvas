import { cn } from 'drupal-canvas';

// cpt_hero_slide_container — a slick/autoplay carousel that wraps cpt_slide_item components.
// In SS the slides animate automatically; in Storybook we show slides stacked or in a simple
// static container since there is no Slick runtime.

const arrowStyleMap = {
  '':               '',
  'color-arrows':   'text-[#006699]',
  'dark-arrows':    'text-[#002633]',
  'light-arrows':   'text-white',
};

const paginationMap = {
  'move-pagination-up':   'bottom-4',
  'move-pagination-down': '-bottom-6',
};

const HeroSlideContainer = ({
  slidesDesktop = 1,
  slidesDesktopScroll = 1,
  slidesLg = 1,
  slidesLgScroll = 1,
  slidesSm = 1,
  slidesSmScroll = 1,
  showArrows = false,
  arrowStyle = '',
  showPagination = false,
  paginationPosition = 'move-pagination-up',
  slideSpacing = 'retain',
  sidePadding = '',
  marginBottom = '',
  children,
}) => {
  return (
    <div className={cn('relative w-full overflow-hidden', marginBottom === 'coh-style-margin-bottom-small' ? 'mb-4' : '')}>
      <div className="flex">
        {children ?? (
          <div className="flex h-[60vh] min-h-[320px] w-full items-center justify-center bg-[#002633] text-white text-lg">
            [Slide items go here]
          </div>
        )}
      </div>
      {showPagination && (
        <div className={cn('absolute left-0 right-0 flex justify-center gap-2', paginationMap[paginationPosition] ?? 'bottom-4')}>
          <span className="h-2 w-6 rounded-full bg-white opacity-90" />
          <span className="h-2 w-2 rounded-full bg-white opacity-50" />
          <span className="h-2 w-2 rounded-full bg-white opacity-50" />
        </div>
      )}
    </div>
  );
};

export default HeroSlideContainer;
