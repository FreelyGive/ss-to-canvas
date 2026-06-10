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

const SocialLinks = ({ links = [] }) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((item, i) => {
        const label = item.ariaLabel || platformLabels[item.platform] || item.platform;
        return (
          <li key={i}>
            <a
              href={item.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex items-center gap-1 rounded-full bg-[#006699] px-3 py-1 text-sm text-white hover:bg-[#005580]"
            >
              {platformLabels[item.platform] || item.platform}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
