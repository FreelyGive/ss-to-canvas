/**
 * Maps Drupal URL paths to Storybook story IDs.
 *
 * Story IDs follow Storybook's convention:
 *   "Pages/Glasses" → "pages-glasses--default"
 *   "Pages/Our Story" → "pages-our-story--default"
 *
 * Add an entry here whenever a new page story is created.
 */
export const PAGE_LINKS: Record<string, string> = {
  '/': 'pages-home--default',
  '/collections/glasses': 'pages-glasses--default',
  '/collections/sunglasses': 'pages-sunglasses--default',
  '/sunglasses': 'pages-sunglasses--default',
  '/folding-clip-ons': 'pages-folding-clip-ons--default',
  '/collections/accessoriesandgifts': 'pages-collections--default',
  '/varifocals': 'pages-varifocals--default',
  '/our-lenses': 'pages-our-lenses--default',
  '/our-story': 'pages-our-story--default',
  '/showrooms': 'pages-showrooms--default',
  '/polarised-lenses': 'pages-polarised-lenses--default',
  '/blue-light-filter': 'pages-blue-light-filter--default',
  '/light-responsive-lenses': 'pages-light-responsive-lenses--default',
  '/virtual-try-on': 'pages-virtual-try-on--default',
  '/iolla-eco': 'pages-iolla-eco--default',
  '/our-design': 'pages-our-design--default',
  '/press': 'pages-press--default',
  '/reviews': 'pages-reviews--default',
  '/jobs': 'pages-jobs--default',
  '/klarna': 'pages-klarna--default',
  '/refer': 'pages-refer--default',
  '/book': 'pages-book--default',
  '/pricing': 'example-pages-pricing--default',
  '/delivery-and-returns': 'pages-delivery-and-returns--default',
  '/aftercare': 'pages-aftercare--default',
  '/glasses-care-guide': 'pages-glasses-care-guide--default',
  '/happiness-guarantee': 'pages-happiness-guarantee--default',
  '/privacy-policy': 'pages-privacy-policy--default',
  '/recycle-with-iolla': 'pages-recycle-with-iolla--default',
  '/reordering': 'pages-reordering--default',
  '/measure-your-pd': 'pages-measure-your-pd--default',
  '/glasses-with-nose-pads': 'pages-glasses-with-nose-pads--default',
  '/we-design-quality-glasses-upfront-honest-price': 'pages-we-design-quality-glasses--default',
  '/ten-years-of-iolla': 'pages-10-years-of-iolla--default',
  '/sun-ready-edit': 'pages-sun-ready-edit--default',
  '/a-pair-for-every-you': 'pages-a-pair-for-every-you--default',
  '/refresh': 'pages-refresh--default',
  '/iolla-x-st-james-1st-birthday': 'pages-iolla-x-st-james-1st-birthday--default',
  '/showrooms/bruntsfield': 'pages-bruntsfield--default',
  '/showrooms/finnieston': 'pages-finnieston--default',
  '/showrooms/richmond': 'pages-richmond--default',
  '/showrooms/cambridge': 'pages-cambridge--default',
  '/showrooms/st-james-quarter': 'pages-st-james-quarter--default',
};

/**
 * Converts a Drupal path to a Storybook ?path= URL, or returns null if
 * no page story exists for that path.
 */
export function toStorybookPath(href: string): string | null {
  const storyId = PAGE_LINKS[href];
  if (!storyId) return null;
  return `/?path=/story/${storyId}`;
}

/**
 * Navigate within the Storybook iframe by writing to the parent frame's
 * location (works in both embedded iframe and standalone canvas views).
 */
export function navigateToStory(href: string): boolean {
  const sbPath = toStorybookPath(href);
  if (!sbPath) return false;
  try {
    // Storybook wraps stories in an iframe; navigate the top frame.
    window.top!.location.href = sbPath;
  } catch {
    window.location.href = sbPath;
  }
  return true;
}
