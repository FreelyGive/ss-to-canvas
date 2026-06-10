import { cn, Image } from 'drupal-canvas';

const headingColorMap = {
  'Dark': 'text-[#002633]',
  'Light': 'text-white',
  'Color': 'text-[#006699]',
};

const headingAlignMap = {
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
  'Dark text': 'text-[#002633]',
  'Light text': 'text-white',
};

const borderStyleMap = {
  'None': 'border-0',
  'Add border': 'border border-solid',
};

const defaultEvents = [
  {
    title: 'Eye Health Awareness Day',
    date: '15 July 2026',
    image: { src: 'https://placehold.co/400x300/006699/ffffff?text=Event+1', alt: 'Eye Health Awareness Day', width: 400, height: 300 },
    url: '/events/eye-health-day',
  },
  {
    title: 'Summer Frames Launch',
    date: '1 August 2026',
    image: { src: 'https://placehold.co/400x300/005580/ffffff?text=Event+2', alt: 'Summer Frames Launch', width: 400, height: 300 },
    url: '/events/summer-frames',
  },
  {
    title: 'Kids Eye Check Clinic',
    date: '5 September 2026',
    image: { src: 'https://placehold.co/400x300/004466/ffffff?text=Event+3', alt: 'Kids Eye Check Clinic', width: 400, height: 300 },
    url: '/events/kids-clinic',
  },
];

const EventsSlider = ({
  heading,
  eventSource = 'Upcoming events',
  headingColor = 'Dark',
  headingAlign = 'Left',
  containerBackgroundColor,
  padding = 'Top and bottom',
  cardBackgroundColor,
  cardTextColor = 'Dark text',
  conditionalTextColorDarkBackground,
  conditionalTextColorLightBackground,
  conditionalTextColorColoredBackground,
  border = 'None',
  borderColor,
  events,
}) => {
  const items = events && events.length > 0 ? events : defaultEvents;

  return (
    <section
      className={cn('w-full', paddingMap[padding])}
      style={{ backgroundColor: containerBackgroundColor || undefined }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <h2
            className={cn(
              'mb-8 text-3xl font-bold',
              headingColorMap[headingColor],
              headingAlignMap[headingAlign],
            )}
          >
            {heading}
          </h2>
        )}
        <div className="flex gap-6 overflow-x-auto pb-2">
          {items.map((event, i) => (
            <a
              key={i}
              href={event.url}
              className={cn(
                'flex shrink-0 flex-col rounded-2xl overflow-hidden w-72',
                cardTextColorMap[cardTextColor],
                borderStyleMap[border],
              )}
              style={{
                backgroundColor: cardBackgroundColor || undefined,
                borderColor: border === 'Add border' ? borderColor || undefined : undefined,
              }}
            >
              {event.image && (
                <Image
                  src={event.image.src}
                  alt={event.image.alt || ''}
                  width={event.image.width || 400}
                  height={event.image.height || 300}
                  className="w-full object-cover"
                />
              )}
              <div className="p-4 flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{event.date}</p>
                <h3 className="text-base font-bold">{event.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;
