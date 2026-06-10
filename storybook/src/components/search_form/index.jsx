import { cn } from 'drupal-canvas';

/**
 * Search input form that submits a query to the /search page.
 * Pre-populates the input with the current `q` query parameter.
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} [props.defaultQuery] - Default search query value (overrides URL param).
 */
export default function SearchForm({ className, defaultQuery }) {
  const q =
    defaultQuery !== undefined
      ? defaultQuery
      : typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('q') || ''
        : '';

  return (
    <form
      action="/search"
      method="get"
      className={cn('flex gap-2 leading-5', className)}
    >
      <div className="flex w-full items-center">
        <input
          type="search"
          name="q"
          id="search_input"
          defaultValue={q}
          placeholder="Search..."
          className="flex-grow rounded-md border-1 border-gray-200 bg-white px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-600 p-2.5 leading-0 text-white"
      >
        <svg
          className="h-4 w-4 stroke-white text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.7 16.7"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
