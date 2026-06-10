import Button from '@/components/button';
import { cn, Image } from 'drupal-canvas';

const headingColorMap = {
  'Dark': 'text-[#1a1a1a]',
  'Light': 'text-white',
  'Color': 'text-[#006699]',
};

const headingAlignmentMap = {
  'Left': 'text-left',
  'Center': 'text-center',
  'Right': 'text-right',
};

const paddingMap = {
  'None': '',
  'Top and bottom': 'py-16',
  'Top only': 'pt-16',
  'Bottom only': 'pb-16',
};

const cardTextColorMap = {
  'Dark text': 'text-[#1a1a1a]',
  'Light text': 'text-white',
};

const cardBorderMap = {
  'None': '',
  'Add border': 'border border-solid',
};

const defaultArticles = [
  {
    title: 'How to choose the right frames',
    excerpt: 'Finding the perfect pair of glasses is about more than just correcting your vision.',
    image: 'https://placehold.co/400x300/006699/ffffff?text=Article+1',
    url: '/news/choosing-frames',
    date: '5 June 2026',
  },
  {
    title: 'Our new Glasgow showroom',
    excerpt: 'We are thrilled to announce the opening of our newest showroom in the heart of Glasgow.',
    image: 'https://placehold.co/400x300/005580/ffffff?text=Article+2',
    url: '/news/glasgow-showroom',
    date: '20 May 2026',
  },
  {
    title: 'The science of lens coatings',
    excerpt: 'Lens coatings can make a huge difference to your everyday vision experience.',
    image: 'https://placehold.co/400x300/004466/ffffff?text=Article+3',
    url: '/news/lens-coatings',
    date: '10 April 2026',
  },
];

const ArticlesSlider = ({
  heading,
  headingColor = 'Dark',
  headingAlignment = 'Left',
  containerBackgroundColor,
  padding = 'Top and bottom',
  cardBackgroundColor,
  cardTextColor = 'Dark text',
  conditionalTextColorDarkBackground,
  conditionalTextColorLightBackground,
  conditionalTextColorColoredBackground,
  cardBorder = 'None',
  borderColor,
  articles,
}) => {
  const items = articles || defaultArticles;

  return (
    <section
      className={cn('w-full', paddingMap[padding])}
      style={containerBackgroundColor ? { backgroundColor: containerBackgroundColor } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <h2 className={cn('mb-8 text-3xl font-bold', headingColorMap[headingColor], headingAlignmentMap[headingAlignment])}>
            {heading}
          </h2>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((article, i) => (
            <article
              key={i}
              className={cn(
                'flex flex-col rounded-2xl overflow-hidden',
                cardBorderMap[cardBorder],
                cardTextColorMap[cardTextColor],
              )}
              style={{
                backgroundColor: cardBackgroundColor || undefined,
                borderColor: cardBorder === 'Add border' && borderColor ? borderColor : undefined,
              }}
            >
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-2 p-5">
                {article.date && (
                  <p className="text-xs opacity-70">{article.date}</p>
                )}
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="flex-1 text-sm leading-relaxed opacity-80">{article.excerpt}</p>
                <Button link={article.url} variant="Link Underline">
                  Read more
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSlider;
