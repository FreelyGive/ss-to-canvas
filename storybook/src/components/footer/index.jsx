const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const defaultNavColumns = [
  {
    heading: 'About Us',
    links: [
      { label: 'Pricing', url: '/pricing' },
      { label: 'Our Story', url: '/our-story' },
      { label: 'Our Design', url: '/our-design' },
      { label: 'Delivery & Returns', url: '/delivery-and-returns' },
      { label: 'Joint Venture Partnerships', url: '/jvp' },
      { label: 'Become a Stockist', url: '/become-a-stockist' },
      { label: 'Press', url: '/press' },
      { label: 'Jobs', url: '/jobs' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'Glasses', url: '/collections/glasses' },
      { label: 'Sunglasses', url: '/sunglasses' },
      { label: 'Accessories & Gifts', url: '/collections/accessoriesandgifts' },
      { label: 'Refresh', url: '/refresh' },
      { label: 'Our Lenses', url: '/our-lenses' },
      { label: 'Varifocal Lenses', url: '/varifocals' },
      { label: 'Blue Light Filter', url: '/bluelightfilter' },
      { label: 'Light Responsive Lenses', url: '/light-responsive-lenses' },
      { label: 'Custom Tints', url: '/custom-tints' },
      { label: 'Polarised Lenses', url: '/polarised-lenses' },
    ],
  },
  {
    heading: 'Education',
    links: [
      { label: 'Refer a Friend', url: '/refer' },
      { label: 'Virtual Try On', url: '/virtual-try-on' },
      { label: 'Glasses Care Guide', url: '/glasses-care-guide' },
      { label: 'Measure your PD', url: '/measure-your-pd' },
      { label: 'Reordering at IOLLA', url: '/reordering' },
      { label: 'Students', url: '/students' },
      { label: 'Pay with Klarna', url: '/klarna' },
      { label: 'Customer Reviews', url: '/customer-reviews' },
    ],
  },
];

const defaultSocialLinks = [
  { platform: 'instagram', url: 'https://www.instagram.com/iolla/', ariaLabel: 'Follow us on Instagram' },
  { platform: 'facebook', url: 'https://www.facebook.com/IOLLAsocial/', ariaLabel: 'Follow us on Facebook' },
  { platform: 'tiktok', url: 'https://www.tiktok.com/@heyiolla', ariaLabel: 'Follow us on TikTok' },
];

const defaultLegalLinks = [
  { label: 'Privacy Policy', url: '/privacy-policy' },
  { label: 'Acceptable Use', url: '/acceptable-use' },
  { label: 'Terms of Use', url: '/terms-of-use' },
];

const SocialIcon = ({ platform }) => {
  if (platform === 'instagram') return <InstagramIcon />;
  if (platform === 'facebook') return <FacebookIcon />;
  if (platform === 'tiktok') return <TikTokIcon />;
  return <span className="text-xs uppercase">{platform}</span>;
};

const Footer = ({
  colorTheme = 'Dark',
  helpHeading = 'Happy to help',
  helpText = 'Our customer support team is on hand to guide you to your perfect pair',
  helpCentreUrl = 'https://support.iolla.com',
  contactUrl = 'https://support.iolla.com/en/articles/41-how-to-reach-the-customer-support-team',
  navColumns = defaultNavColumns,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  copyrightYear = new Date().getFullYear(),
  onNavigate,
}) => {
  const handleLinkClick = (e, url) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(url);
  };
  const isDark = colorTheme === 'Dark';

  const bg = isDark ? 'bg-[#002633]' : 'bg-white';
  const text = isDark ? 'text-white' : 'text-[#002633]';
  const subText = isDark ? 'text-[#8ba8b3]' : 'text-[#5a554e]';
  const headingText = isDark ? 'text-white' : 'text-[#002633]';
  const linkHover = isDark ? 'hover:text-white' : 'hover:text-[#006699]';
  const divider = isDark ? 'border-[#ffffff1a]' : 'border-[#e5e7eb]';
  const ctaLink = isDark
    ? 'text-white underline underline-offset-2 hover:no-underline'
    : 'text-[#006699] underline underline-offset-2 hover:no-underline';
  const socialBg = isDark
    ? 'bg-[#ffffff1a] hover:bg-[#ffffff33] text-white'
    : 'bg-[#f5f2eb] hover:bg-[#e5e7eb] text-[#002633]';

  return (
    <footer className={`${bg} ${text}`}>
      {/* Main content row */}
      <div className="mx-auto max-w-screen-xl px-6 pt-12 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Left: Happy to help */}
          <div className="lg:col-span-4">
            <h2 className={`text-xl font-semibold ${headingText}`}>{helpHeading}</h2>
            <p className={`mt-2 text-sm leading-relaxed ${subText}`}>{helpText}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
              <a href={helpCentreUrl} target="_blank" rel="noopener noreferrer" className={`text-sm ${ctaLink}`}>
                Visit our help centre
              </a>
              <a href={contactUrl} target="_blank" rel="noopener noreferrer" className={`text-sm ${ctaLink}`}>
                Contact us
              </a>
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {navColumns.map((col, i) => (
                <div key={i}>
                  <h3 className={`text-sm font-semibold ${headingText}`}>{col.heading}</h3>
                  <ul className="mt-3 space-y-2">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href={link.url}
                          onClick={(e) => handleLinkClick(e, link.url)}
                          className={`text-sm ${subText} ${linkHover} transition-colors`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className={`mt-10 border-t ${divider} pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>

          {/* Social icons */}
          <ul className="flex gap-3">
            {socialLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel || item.platform}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${socialBg}`}
                >
                  <SocialIcon platform={item.platform} />
                </a>
              </li>
            ))}
          </ul>

          {/* Legal links + copyright */}
          <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${subText}`}>
            {legalLinks.map((link, i) => (
              <a key={i} href={link.url} onClick={(e) => handleLinkClick(e, link.url)} className={`${linkHover} transition-colors`}>
                {link.label}
              </a>
            ))}
            <span>© {copyrightYear}</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
