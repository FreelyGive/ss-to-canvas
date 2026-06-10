import Button from '@/components/button';

/**
 * Pricing card for a single product or add-on option.
 * Shows a chip label, heading, description, price, and optional CTA button.
 *
 * @param {Object} props
 * @param {string} [props.chip] - Small badge label (e.g. "Our core pair", "Optional add-on").
 * @param {string} props.heading - Card heading.
 * @param {string} [props.text] - Body description text.
 * @param {string} props.price - Price display string (e.g. "£85 = everything included").
 * @param {string} [props.linkUrl] - CTA button destination URL.
 * @param {string} [props.linkLabel] - CTA button label text.
 * @param {'Solid'|'Outline Dark'|'Outline Light'} [props.linkVariant='Solid'] - CTA button variant.
 */
const PricingCard = ({
  chip,
  heading,
  text,
  price,
  linkUrl,
  linkLabel,
  linkVariant = 'Solid',
}) => {
  return (
    <div className="flex flex-col rounded-2xl border border-[#006699]/10 bg-white p-8">
      {chip && (
        <span className="mb-4 inline-block self-start rounded-full bg-[#f5f2eb] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5a554e]">
          {chip}
        </span>
      )}
      <h3 className="mb-3 text-xl font-bold text-[#006699]">{heading}</h3>
      {text && (
        <p className="mb-6 flex-1 text-base leading-relaxed text-[#5a554e]">{text}</p>
      )}
      <span className="mb-6 block text-sm font-bold text-[#006699]">{price}</span>
      {linkUrl && linkLabel && (
        <Button link={linkUrl} variant={linkVariant} text={linkLabel} />
      )}
    </div>
  );
};

export default PricingCard;
