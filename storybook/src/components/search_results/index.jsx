import { useCallback, useMemo, useState } from 'react';
import { cn } from 'drupal-canvas';

const ITEMS_PER_PAGE = 10;

/** @type {Array<{id: string, type: string, attributes: {title: string, path: {alias: string}}}>} */
const MOCK_RESULTS = [
  { id: '1', type: 'page--page', attributes: { title: 'Glasses', path: { alias: '/glasses' } } },
  { id: '2', type: 'page--page', attributes: { title: 'Sunglasses', path: { alias: '/sunglasses' } } },
  { id: '3', type: 'page--page', attributes: { title: 'Our Story', path: { alias: '/our-story' } } },
  { id: '4', type: 'page--page', attributes: { title: 'Varifocals', path: { alias: '/varifocals' } } },
  { id: '5', type: 'page--page', attributes: { title: 'Our Lenses', path: { alias: '/our-lenses' } } },
  { id: '6', type: 'node--article', attributes: { title: 'How to choose the right frames for your face shape', path: { alias: '/blog/choose-right-frames' } } },
  { id: '7', type: 'node--article', attributes: { title: 'A guide to polarised lenses', path: { alias: '/blog/polarised-lenses-guide' } } },
  { id: '8', type: 'node--article', attributes: { title: 'Light responsive lenses explained', path: { alias: '/blog/light-responsive-lenses' } } },
  { id: '9', type: 'node--person', attributes: { title: 'Ali Ganjavian', path: { alias: '/team/ali-ganjavian' } } },
  { id: '10', type: 'node--person', attributes: { title: 'Stuart Macpherson', path: { alias: '/team/stuart-macpherson' } } },
  { id: '11', type: 'page--page', attributes: { title: 'Showrooms', path: { alias: '/showrooms' } } },
  { id: '12', type: 'node--article', attributes: { title: 'Meet the makers behind iolla', path: { alias: '/blog/meet-the-makers' } } },
];

/**
 * @param {Array<{type: string}>} data
 * @returns {{ entityTypes: Record<string, number>, contentTypes: Record<string, number> }}
 */
function calculateFacets(data) {
  /** @type {Record<string, number>} */
  const entityTypes = {};
  /** @type {Record<string, number>} */
  const contentTypes = {};
  data.forEach((item) => {
    const [entityType, contentType] = item.type.split('--');
    entityTypes[entityType] = (entityTypes[entityType] || 0) + 1;
    if (entityType === 'node' && contentType) {
      contentTypes[contentType] = (contentTypes[contentType] || 0) + 1;
    }
  });
  return { entityTypes, contentTypes };
}

/**
 * Static search results component with faceted filtering — uses mock data in Storybook.
 *
 * @param {Object} props
 * @param {string} [props.query='glasses'] - Search query displayed in the heading.
 * @param {Array<{id: string, type: string, attributes: {title: string, path: {alias: string}}}>} [props.results] - Override mock results.
 */
export default function SearchResults({ query = 'glasses', results = MOCK_RESULTS }) {
  const [selectedEntityTypes, setSelectedEntityTypes] = useState(/** @type {string[]} */ ([]));
  const [selectedContentTypes, setSelectedContentTypes] = useState(/** @type {string[]} */ ([]));
  const [page, setPage] = useState(0);

  const allFacets = useMemo(() => calculateFacets(results), [results]);

  const filtered = useMemo(() => {
    if (selectedEntityTypes.length === 0 && selectedContentTypes.length === 0) return results;
    return results.filter((item) => {
      const [entityType, contentType] = item.type.split('--');
      if (selectedEntityTypes.includes(entityType)) return true;
      if (selectedContentTypes.length > 0 && entityType === 'node' && selectedContentTypes.includes(contentType)) return true;
      return false;
    });
  }, [results, selectedEntityTypes, selectedContentTypes]);

  const paginated = useMemo(
    () => filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE),
    [filtered, page],
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const toggleEntityType = useCallback((type) => {
    setSelectedEntityTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
    setPage(0);
  }, []);

  const toggleContentType = useCallback((type) => {
    setSelectedContentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
    setPage(0);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedEntityTypes([]);
    setSelectedContentTypes([]);
    setPage(0);
  }, []);

  const hasFilters = selectedEntityTypes.length > 0 || selectedContentTypes.length > 0;

  return (
    <div className="flex gap-6">
      <aside className="w-64 flex-shrink-0">
        <div className="sticky top-4 rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
            {hasFilters && (
              <button onClick={clearFilters} className="text-sm text-[#006699] hover:underline">
                Clear all
              </button>
            )}
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-gray-700">Type</h4>
            {Object.entries(allFacets.entityTypes).map(([type, count]) => (
              <label key={type} className="mb-2 flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={selectedEntityTypes.includes(type)}
                  onChange={() => toggleEntityType(type)}
                  className="h-4 w-4 rounded accent-[#006699]"
                />
                <span className="flex-1 text-sm text-gray-700">
                  {type === 'node' ? 'Content' : type === 'page' ? 'Page' : type}
                </span>
                <span className="text-xs font-medium text-gray-400">({count})</span>
              </label>
            ))}
          </div>

          {Object.keys(allFacets.contentTypes).length > 0 && !selectedEntityTypes.includes('page') && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-700">Content type</h4>
              {Object.entries(allFacets.contentTypes).map(([type, count]) => (
                <label key={type} className="mb-2 flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={selectedContentTypes.includes(type)}
                    onChange={() => toggleContentType(type)}
                    className="h-4 w-4 rounded accent-[#006699]"
                  />
                  <span className="flex-1 text-sm text-gray-700 capitalize">{type}</span>
                  <span className="text-xs font-medium text-gray-400">({count})</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <h2 className="mb-1 text-2xl font-bold text-[#002633]">Search results</h2>
        <p className="mb-6 text-sm text-[#5a554e]">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
        </p>

        {paginated.length === 0 ? (
          <div className="py-12 text-center">
            <p className="mb-2 text-[#5a554e]">No results found.</p>
            {hasFilters && (
              <button onClick={clearFilters} className="text-sm text-[#006699] hover:underline">
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <>
            <ul className="space-y-0">
              {paginated.map((item, index) => {
                const [entityType, contentType] = item.type.split('--');
                const typeLabel = entityType === 'page' ? 'Page' : contentType ? contentType.charAt(0).toUpperCase() + contentType.slice(1) : entityType;
                return (
                  <li key={item.id || index} className="border-b border-gray-100 py-4">
                    <span className={cn(
                      'mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                      entityType === 'page' ? 'bg-[#006699]/10 text-[#006699]' : 'bg-[#d95f2b]/10 text-[#d95f2b]',
                    )}>
                      {typeLabel}
                    </span>
                    <h3 className="font-semibold">
                      <a href={item.attributes?.path?.alias || '#'} className="text-[#006699] hover:underline">
                        {item.attributes?.title}
                      </a>
                    </h3>
                    <p className="mt-0.5 text-xs text-[#5a554e]">{item.attributes?.path?.alias}</p>
                  </li>
                );
              })}
            </ul>

            {totalPages > 1 && (
              <div className="mt-6 flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
                >
                  <svg className="mr-1 size-4" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Previous
                </button>
                <span className="text-sm text-gray-500">
                  Page {page + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
                >
                  Next
                  <svg className="ml-1 size-4" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
