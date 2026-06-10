import { useState } from 'react';
import { cn } from 'drupal-canvas';
import Button from '@/components/button';

/** @type {Array<{id: string, title: string, url: string}>} */
const DEFAULT_LINKS = [
  { id: '1', title: 'Glasses', url: '/glasses' },
  { id: '2', title: 'Sunglasses', url: '/sunglasses' },
  { id: '3', title: 'Varifocals', url: '/varifocals' },
  { id: '4', title: 'Our lenses', url: '/our-lenses' },
  { id: '5', title: 'Our story', url: '/our-story' },
  { id: '6', title: 'Showrooms', url: '/showrooms' },
];

/**
 * Main navigation menu. Renders a responsive nav with a mobile hamburger drawer
 * and desktop horizontal links styled with the Nav Link Dark button variant.
 *
 * @param {Object} props
 * @param {Array<{id: string, title: string, url: string}>} [props.links] - Navigation links.
 */
const MainNavigation = ({ links = DEFAULT_LINKS }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger toggle */}
      <div className="flex justify-end md:hidden">
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg
            className={cn('size-4', open ? 'hidden' : 'block')}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            className={cn('size-4 shrink-0', open ? 'block' : 'hidden')}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {/* Nav links */}
      <nav
        className={cn(
          'absolute left-0 z-50 w-screen bg-white px-8 py-4 shadow-md md:static md:block md:w-full md:px-0 md:py-0 md:shadow-none',
          open ? 'block' : 'hidden md:block',
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-center md:gap-0">
          {links.map(({ id, title, url }) => (
            <Button
              key={id}
              link={url}
              variant="Nav Link Dark"
              className="text-sm font-medium"
            >
              {title}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
