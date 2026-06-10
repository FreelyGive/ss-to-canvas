/**
 * Full-width dark hero section with two side-by-side price comparison cards.
 * Used to contrast the brand's pricing against a typical competitor.
 *
 * @param {Object} props
 * @param {string} [props.preHeading] - Small uppercase label above the heading.
 * @param {string} [props.heading] - Main hero heading (supports <em> for accent colour).
 * @param {string} [props.intro] - Short intro sentence displayed beside the heading.
 * @param {string} [props.leftPrice] - Price displayed on the brand card (e.g. "£85").
 * @param {string} [props.leftSubtitle] - Subtitle for the brand card.
 * @param {string} [props.leftItems] - Newline-separated list of included items (brand card).
 * @param {string} [props.leftVerdict] - Footer tagline for the brand card.
 * @param {string} [props.rightPrice] - Price displayed on the competitor card.
 * @param {string} [props.rightSubtitle] - Subtitle for the competitor card.
 * @param {string} [props.rightItems] - Newline-separated list for the competitor card.
 * @param {string} [props.rightVerdict] - Footer tagline for the competitor card.
 */
const PricingHero = ({
  preHeading = 'Our pricing',
  heading = 'One fair price vs a whole world of complexity.',
  intro = 'We price the pair, not the parts.',
  leftPrice = '£85',
  leftSubtitle = 'Complete prescription glasses - The IOLLA Way',
  leftItems = 'Frames of your choice\nPrescription lenses included\nLens thinning, if you need it\nAnti-reflective coating included\nScratch-resistant coating included\nCase and cleaning cloth included',
  leftVerdict = 'Genuinely. That\'s it.',
  rightPrice = '£300+',
  rightSubtitle = 'What a "starting price" can become',
  rightItems = 'Prescription lenses (sold separately)\nAnti-reflective coating (add-on)\nThinner lenses (premium upgrade)\nScratch-resistant coating (extra)\nStronger prescriptions cost more\nMore small print at the checkout',
  rightVerdict = 'The price grows without your control',
}) => {
  const leftList = leftItems ? leftItems.split('\n').filter(Boolean) : [];
  const rightList = rightItems ? rightItems.split('\n').filter(Boolean) : [];

  return (
    <div className="bg-[#002633] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            {preHeading && (
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                <span className="block h-px w-6 shrink-0 bg-white/35" />
                {preHeading}
              </p>
            )}
            <h1
              className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>
          {intro && (
            <p className="text-lg leading-relaxed text-white/80 md:max-w-xs">{intro}</p>
          )}
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Brand card */}
          <div className="flex flex-col rounded-2xl bg-[#006699] p-8">
            <span className="mb-2 text-5xl font-bold">{leftPrice}</span>
            <span className="mb-6 text-sm font-semibold leading-snug text-white/80">{leftSubtitle}</span>
            <ul className="mb-6 flex flex-col gap-3">
              {leftList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base leading-snug">
                  <span className="mt-0.5 text-white/60">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-auto border-t border-white/20 pt-4 text-sm font-semibold italic text-white/70">
              {leftVerdict}
            </span>
          </div>

          {/* Competitor card */}
          <div className="flex flex-col rounded-2xl bg-white/10 p-8">
            <span className="mb-2 text-5xl font-bold text-white/60">{rightPrice}</span>
            <span className="mb-6 text-sm font-semibold leading-snug text-white/60">{rightSubtitle}</span>
            <ul className="mb-6 flex flex-col gap-3">
              {rightList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base leading-snug text-white/70">
                  <span className="mt-0.5 text-white/40">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-auto border-t border-white/10 pt-4 text-sm font-semibold italic text-white/40">
              {rightVerdict}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
