// cpt_instagram_feed_gallery (Social Images Gallery) — dynamic Instagram feed. No configurable form fields in SS.
// Renders a representative placeholder grid in Storybook; actual images are loaded from Instagram at runtime.

const InstagramFeedGallery = () => {
  const posts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `https://placehold.co/300x300/edcbca/002633?text=@iolla_${i + 1}`,
    alt: `IOLLA Instagram post ${i + 1}`,
  }));

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="grid grid-cols-6 gap-2 md:grid-cols-3">
          {posts.map(p => (
            <a key={p.id} href="https://www.instagram.com/iolla_eyewear" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-md hover:opacity-90 transition-opacity">
              <img src={p.src} alt={p.alt} className="w-full aspect-square object-cover" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeedGallery;
