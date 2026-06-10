// cpt_gift_card_howto_options — Gift Card how-to options widget. No configurable form fields in SS.
// The component renders gift card purchase options and instructions dynamically from Shopify.
// Storybook shows a representative static placeholder.

const GiftCardHowtoOptions = () => {
  const options = [
    { value: '£25', label: '£25 Gift Card' },
    { value: '£50', label: '£50 Gift Card' },
    { value: '£75', label: '£75 Gift Card' },
    { value: '£100', label: '£100 Gift Card' },
    { value: '£150', label: '£150 Gift Card' },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-8 py-12">
      <div className="grid grid-cols-2 gap-12 md:grid-cols-1">
        <div>
          <h2 className="mb-6 font-brandon text-2xl font-bold text-[#002633]">Choose your gift card value</h2>
          <div className="flex flex-wrap gap-3">
            {options.map(o => (
              <button
                key={o.value}
                className="rounded border border-[#002633] px-6 py-3 text-sm font-medium text-[#002633] hover:bg-[#002633] hover:text-white transition-colors"
              >
                {o.label}
              </button>
            ))}
          </div>
          <button className="mt-8 bg-[#002633] px-8 py-3 text-sm font-medium text-white hover:bg-[#003d4d] transition-colors">
            Add to basket
          </button>
        </div>
        <div>
          <h3 className="mb-4 font-brandon text-lg font-bold text-[#002633]">How it works</h3>
          <ol className="space-y-3 text-sm text-[#57606a]">
            <li className="flex gap-3"><span className="font-bold text-[#002633]">1.</span> Choose a gift card value and add to basket.</li>
            <li className="flex gap-3"><span className="font-bold text-[#002633]">2.</span> Complete checkout — you'll receive a digital gift card by email.</li>
            <li className="flex gap-3"><span className="font-bold text-[#002633]">3.</span> Forward the gift card to your recipient — they can redeem it at iolla.com.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GiftCardHowtoOptions;
