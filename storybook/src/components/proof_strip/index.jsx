/**
 * Horizontal strip of trust/proof items — typically 3–5 short facts or benefits.
 * Renders as an evenly-spaced row that wraps to a grid on mobile.
 *
 * @param {Object} props
 * @param {'Light'|'Dark'|'Cream'} [props.theme='Cream'] - Background colour theme.
 * @param {React.ReactNode} [props.items] - Slot: one or more ProofItem components.
 */
const ProofStrip = ({ theme = 'Cream', items }) => {
  const bgClass = {
    Light: 'bg-white',
    Dark: 'bg-[#002633] text-white',
    Cream: 'bg-[#ede9df]',
  }[theme] ?? 'bg-[#ede9df]';

  return (
    <div className={`px-6 py-12 ${bgClass}`}>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {items}
      </div>
    </div>
  );
};

/**
 * Single item inside a ProofStrip.
 *
 * @param {Object} props
 * @param {string} props.heading - Bold label for this proof point.
 * @param {string} [props.text] - Supporting sentence.
 * @param {boolean} [props.light] - Use light text (for dark backgrounds).
 */
export const ProofItem = ({ heading, text, light = false }) => (
  <div className="flex flex-col gap-2">
    <strong className={`text-sm font-bold ${light ? 'text-white' : 'text-[#006699]'}`}>
      {heading}
    </strong>
    {text && (
      <p className={`text-sm leading-relaxed ${light ? 'text-white/70' : 'text-[#5a554e]'}`}>
        {text}
      </p>
    )}
  </div>
);

export default ProofStrip;
