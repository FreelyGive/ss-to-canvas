import { cn } from 'drupal-canvas';

const displayStyleMap = {
  'Show breadcrumbs on transparent background': 'bg-transparent',
  'Show breadcrumbs on semi-transparent dark background': 'bg-black/40',
  'Show breadcrumbs on solid dark background': 'bg-gray-900',
  'Show breadcrumbs on solid light background': 'bg-white',
};

const displayStyleTextMap = {
  'Show breadcrumbs on transparent background': 'text-white',
  'Show breadcrumbs on semi-transparent dark background': 'text-white',
  'Show breadcrumbs on solid dark background': 'text-white',
  'Show breadcrumbs on solid light background': 'text-gray-800',
};

const positionMap = {
  'Relative to where placed': '',
  'Absolute position top left': 'absolute top-0 left-0 z-10',
};

const Breadcrumbs = ({
  displayStyle = 'Show breadcrumbs on semi-transparent dark background',
  position = 'Absolute position top left',
  breadcrumbs = [],
}) => {
  return (
    <nav
      role="navigation"
      aria-labelledby="system-breadcrumb"
      className={cn(
        'px-4 py-2',
        displayStyleMap[displayStyle],
        positionMap[position],
      )}
    >
      <h2 id="system-breadcrumb" className="sr-only">
        Breadcrumb
      </h2>
      <ol className="flex items-center whitespace-nowrap">
        {breadcrumbs.map(({ label, url }, index) => (
          <li key={index} className="inline-flex items-center">
            {url && index !== breadcrumbs.length - 1 ? (
              <a
                href={url}
                className={cn(
                  'flex items-center text-sm hover:underline focus:underline focus:outline-none',
                  displayStyleTextMap[displayStyle],
                )}
              >
                {label}
              </a>
            ) : (
              <span
                className={cn(
                  'inline-flex items-center truncate text-sm font-semibold',
                  displayStyleTextMap[displayStyle],
                )}
              >
                {label}
              </span>
            )}
            {index !== breadcrumbs.length - 1 && (
              <svg
                className={cn('mx-2 size-4 shrink-0', displayStyleTextMap[displayStyle])}
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
