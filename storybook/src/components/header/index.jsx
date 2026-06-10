import { useState } from 'react';

const IollaLogo = () => (
  <img
    src="https://iolla.ddev.site/sites/default/files/2021-05/logo-retina.png"
    alt="Iolla logo"
    className="h-auto w-[121px]"
  />
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const defaultMainLinks = [
  { id: '1', title: 'Glasses', url: '/collections/glasses' },
  { id: '2', title: 'Sunglasses', url: '/sunglasses' },
  { id: '3', title: 'Clip-ons', url: '/folding-clip-ons' },
  { id: '4', title: 'Accessories & Gifts', url: '/collections/accessoriesandgifts' },
];

const defaultUtilityLinks = [
  { id: '1', title: 'Showrooms', url: '/showrooms' },
  { id: '2', title: 'Help', url: 'https://support.iolla.com/' },
];

const Header = ({
  colorTheme = 'Light',
  logoUrl = '/',
  mainLinks = defaultMainLinks,
  utilityLinks = defaultUtilityLinks,
  showSearch = true,
  menuPosition = 'Left',
  onNavigate,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, url) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(url);
  };

  const isDark = colorTheme === 'Dark';
  const bg = isDark ? 'bg-[#002633]' : 'bg-white';
  const border = isDark ? 'border-[#ffffff1a]' : 'border-[#e5e7eb]';
  const logoColor = isDark ? 'text-white' : 'text-[#020617]';
  const navLinkBase = isDark
    ? 'text-white hover:text-[#8ba8b3]'
    : 'text-[#002633] hover:text-[#006699]';
  const utilityLinkBase = isDark
    ? 'text-[#8ba8b3] hover:text-white'
    : 'text-[#5a554e] hover:text-[#002633]';
  const searchColor = isDark ? 'text-white hover:text-[#8ba8b3]' : 'text-[#002633] hover:text-[#006699]';
  const mobileMenuBg = isDark ? 'bg-[#002633]' : 'bg-white';
  const mobileBorder = isDark ? 'border-[#ffffff1a]' : 'border-[#e5e7eb]';

  const isLeft = menuPosition === 'Left';

  return (
    <header className={`${bg} border-b ${border} relative z-50`}>
      {/* Desktop header */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <a href={logoUrl} onClick={(e) => handleLinkClick(e, logoUrl)} aria-label="iolla" className="shrink-0 transition-opacity hover:opacity-80">
            <IollaLogo />
          </a>

          {/* Main nav — left or center */}
          <nav
            aria-label="Main navigation"
            className={`hidden lg:flex items-center gap-1 ${isLeft ? 'flex-1' : 'flex-1 justify-center'}`}
          >
            {mainLinks.map(({ id, title, url }) => (
              <a
                key={id}
                href={url}
                onClick={(e) => handleLinkClick(e, url)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${navLinkBase}`}
              >
                {title}
              </a>
            ))}
          </nav>

          {/* Right: utility links + search + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Utility links — desktop only */}
            <nav aria-label="Utility navigation" className="hidden lg:flex items-center gap-1">
              {utilityLinks.map(({ id, title, url }) => (
                <a
                  key={id}
                  href={url}
                  onClick={(e) => handleLinkClick(e, url)}
                  className={`px-3 py-2 text-sm transition-colors ${utilityLinkBase}`}
                >
                  {title}
                </a>
              ))}
            </nav>

            {/* Search button */}
            {showSearch && (
              <button
                type="button"
                aria-label="Search"
                className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors ${searchColor}`}
              >
                <SearchIcon />
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-md transition-colors ${searchColor}`}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={`lg:hidden border-t ${mobileBorder} ${mobileMenuBg} px-6 pb-6 pt-4`}>
          <nav aria-label="Mobile main navigation" className="flex flex-col gap-1">
            {mainLinks.map(({ id, title, url }) => (
              <a
                key={id}
                href={url}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${navLinkBase}`}
                onClick={(e) => { setMobileOpen(false); handleLinkClick(e, url); }}
              >
                {title}
              </a>
            ))}
          </nav>
          <div className={`mt-4 border-t ${mobileBorder} pt-4 flex flex-col gap-1`}>
            {utilityLinks.map(({ id, title, url }) => (
              <a
                key={id}
                href={url}
                className={`px-3 py-2 text-sm transition-colors ${utilityLinkBase}`}
                onClick={(e) => { setMobileOpen(false); handleLinkClick(e, url); }}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
