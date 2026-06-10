import { cn } from 'drupal-canvas';

const platformLabels = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  vimeo: 'Vimeo',
  instagram: 'Instagram',
  medium: 'Medium',
  pinterest: 'Pinterest',
  rss: 'RSS',
  behance: 'Behance',
  drupal: 'Drupal',
  github: 'GitHub',
  xing: 'Xing',
  bitbucket: 'BitBucket',
  whatsapp: 'WhatsApp',
  slideshare: 'SlideShare',
  flickr: 'Flickr',
  vkontakte: 'VKontakte',
  tumblr: 'Tumblr',
  tiktok: 'TikTok',
};

const textColorMap = {
  'Dark text': '',
  'Light text': 'text-white',
};

const iconStyleMap = {
  'Color icons': 'bg-[#006699] text-white',
  'Dark icons': 'bg-[#002633] text-white',
  'Light icons': 'bg-white text-[#002633]',
};

const borderMap = {
  None: '',
  'Add border': 'border',
};

const paddingMap = {
  None: '',
  'Apply padding to card': 'p-6',
};

const heightMap = {
  'Fit to content': '',
  'Fill space available': 'flex-1',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const SocialLinksCard = ({
  label = '',
  links = [],
  backgroundColor = '',
  textColor = 'Dark text',
  iconStyle = 'Color icons',
  conditionalTextColorLightBackground = '',
  conditionalTextColorDarkBackground = '',
  conditionalTextColorColoredBackground = '',
  border = 'None',
  borderColor = '',
  padding = 'None',
  conditionallyApplyPadding = '',
  height = 'Fill space available',
  addSpaceBelow = 'Add space below',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        textColorMap[textColor],
        borderMap[border],
        paddingMap[padding],
        heightMap[height],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {label && <p className="text-sm font-semibold">{label}</p>}
      <ul className="flex flex-wrap gap-3">
        {links.map((item, i) => (
          <li key={i}>
            <a
              href={item.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platformLabels[item.platform] || item.platform}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium',
                iconStyleMap[iconStyle] || iconStyleMap['Color icons'],
              )}
            >
              {(platformLabels[item.platform] || item.platform || '').slice(0, 2)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinksCard;
