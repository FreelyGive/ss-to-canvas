import { useState } from 'react';
import { cn } from 'drupal-canvas';

const navigationStyleMap = {
  'Semi-transparent buttons': 'bg-white/70',
  'Color arrows': 'bg-[#006699] text-white',
  'Dark arrows': 'bg-[#002633] text-white',
  'Light arrows': 'bg-white text-[#002633]',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const SlideContainer = ({
  desktopShow = 1,
  desktopScroll = 1,
  tabletShow = 1,
  tabletScroll = 1,
  phoneShow = 1,
  phoneScroll = 1,
  showNavigation = false,
  navigationStyle = 'Semi-transparent buttons',
  showPagination = false,
  paginationPosition = 'Over slides',
  spaceBetweenSlides = 'Retain space between slides',
  spaceLeftRight = 'No space',
  addSpaceBelow = 'Add space below',
  slides,
}) => {
  const slideItems = slides
    ? (Array.isArray(slides) ? slides : [slides])
    : [
        <div key={1} className="flex h-48 items-center justify-center rounded-xl bg-[#006699] text-white">Slide 1</div>,
        <div key={2} className="flex h-48 items-center justify-center rounded-xl bg-[#005580] text-white">Slide 2</div>,
        <div key={3} className="flex h-48 items-center justify-center rounded-xl bg-[#002633] text-white">Slide 3</div>,
      ];

  const perPage = Number(desktopShow) || 1;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(slideItems.length / perPage);
  const visibleSlides = slideItems.slice(page * perPage, page * perPage + perPage);

  const navBtnClass = cn(
    'absolute top-1/2 -translate-y-1/2 z-10 rounded-full px-3 py-1 text-lg shadow',
    navigationStyleMap[navigationStyle] || navigationStyleMap['Semi-transparent buttons'],
  );

  const gapClass = spaceBetweenSlides === 'No space between slides' ? 'gap-0' : 'gap-4';
  const paddingClass = spaceLeftRight === 'Add space to the left and right of slides' ? 'px-8' : '';

  return (
    <div className={cn('w-full', addSpaceBelowMap[addSpaceBelow])}>
      <div className={cn('relative', paddingClass)}>
        <div
          className={cn('grid', gapClass)}
          style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}
        >
          {visibleSlides}
        </div>
        {showNavigation && totalPages > 1 && (
          <>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className={cn(navBtnClass, 'left-0 -translate-x-1/2 disabled:opacity-30')}
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className={cn(navBtnClass, 'right-0 translate-x-1/2 disabled:opacity-30')}
              aria-label="Next"
            >
              &#8250;
            </button>
          </>
        )}
        {showPagination && paginationPosition === 'Over slides' && totalPages > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn('h-2 w-2 rounded-full transition-colors', i === page ? 'bg-white' : 'bg-white/50')}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {showPagination && paginationPosition === 'Below slides' && totalPages > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={cn('h-2 w-2 rounded-full transition-colors', i === page ? 'bg-[#006699]' : 'bg-[#e5e7eb]')}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideContainer;
