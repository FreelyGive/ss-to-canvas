const Branding = ({ homeUrl = '/', siteName = 'Iolla' }) => {
  return (
    <a href={homeUrl} aria-label={siteName} className="max-h-full">
      <img
        src="https://iolla.ddev.site/sites/default/files/2021-05/logo-retina.png"
        alt="Iolla logo"
        width="180"
        height="43"
        className="h-auto w-[180px] lg:w-[118px]"
      />
    </a>
  );
};

export default Branding;
