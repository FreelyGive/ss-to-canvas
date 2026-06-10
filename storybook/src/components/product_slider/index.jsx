// cpt_product_slider — dynamic Shopify product carousel. No configurable form fields in SS.
// Renders a placeholder in Storybook; actual products are pulled at runtime from Shopify.

const ProductSlider = () => {
  const placeholderProducts = [
    { id: 1, name: 'Frame One', price: '£85', img: 'https://placehold.co/280x200/edcbca/002633?text=Frame+One' },
    { id: 2, name: 'Frame Two', price: '£85', img: 'https://placehold.co/280x200/aacec5/002633?text=Frame+Two' },
    { id: 3, name: 'Frame Three', price: '£85', img: 'https://placehold.co/280x200/d4c5b0/002633?text=Frame+Three' },
    { id: 4, name: 'Frame Four', price: '£85', img: 'https://placehold.co/280x200/c5d4e0/002633?text=Frame+Four' },
  ];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {placeholderProducts.map(p => (
            <div key={p.id} className="shrink-0 w-[280px]">
              <img src={p.img} alt={p.name} className="w-full rounded-lg" />
              <p className="mt-2 text-sm font-medium text-[#002633]">{p.name}</p>
              <p className="text-sm text-[#57606a]">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
