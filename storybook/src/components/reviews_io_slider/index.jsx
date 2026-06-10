// cpt_reviews_io_slider — dynamic Reviews.io carousel widget. No configurable form fields in SS.
// Renders a representative placeholder in Storybook; actual reviews are loaded from Reviews.io at runtime.

const ReviewsIoSlider = () => {
  const reviews = [
    { id: 1, name: 'Sarah M.', rating: 5, text: 'Absolutely love my new glasses. The quality is incredible and the price is unbeatable. Will definitely be ordering again!' },
    { id: 2, name: 'James T.', rating: 5, text: 'Fast delivery and the frames are exactly as pictured. My prescription is spot on. Highly recommend IOLLA.' },
    { id: 3, name: 'Emma L.', rating: 5, text: 'Third pair from IOLLA now and still as impressed as the first time. Great customer service too.' },
  ];

  return (
    <div className="w-full bg-[#f6f8fa] py-12">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-1">
          {reviews.map(r => (
            <div key={r.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex gap-1 text-yellow-400">
                {'★'.repeat(r.rating)}
              </div>
              <p className="mb-4 text-sm text-[#24292f]">"{r.text}"</p>
              <p className="text-xs font-medium text-[#57606a]">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsIoSlider;
