import Button from '@/components/button';

/**
 * Full-width call-to-action band with a heading, optional subtext, and CTA buttons.
 * Used at the end of a page to drive conversion.
 *
 * @param {Object} props
 * @param {string} props.heading - CTA heading (supports <em> for accent colour).
 * @param {string} [props.subtext] - Supporting sentence below the heading.
 * @param {'Dark'|'Brand'|'Light'} [props.theme='Dark'] - Background colour theme.
 * @param {string} [props.primaryLinkUrl] - Primary CTA URL.
 * @param {string} [props.primaryLinkLabel] - Primary CTA label.
 * @param {string} [props.secondaryLinkUrl] - Secondary CTA URL.
 * @param {string} [props.secondaryLinkLabel] - Secondary CTA label.
 */
const CtaBand = ({
  heading,
  subtext,
  theme = 'Dark',
  primaryLinkUrl,
  primaryLinkLabel,
  secondaryLinkUrl,
  secondaryLinkLabel,
}) => {
  const bgClass = {
    Dark: 'bg-[#002633]',
    Brand: 'bg-[#006699]',
    Light: 'bg-[#f5f2eb]',
  }[theme] ?? 'bg-[#002633]';

  const isLight = theme === 'Light';

  return (
    <div className={`px-6 py-24 ${bgClass}`}>
      <div className="mx-auto max-w-3xl text-center">
        {heading && (
          <h2
            className={`mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl ${isLight ? 'text-[#006699]' : 'text-white'}`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {subtext && (
          <p className={`mb-10 text-lg leading-relaxed ${isLight ? 'text-[#5a554e]' : 'text-white/70'}`}>
            {subtext}
          </p>
        )}
        {(primaryLinkUrl || secondaryLinkUrl) && (
          <div className="flex flex-wrap justify-center gap-4">
            {primaryLinkUrl && primaryLinkLabel && (
              <Button
                link={primaryLinkUrl}
                text={primaryLinkLabel}
                variant={isLight ? 'Solid' : 'Outline Light'}
              />
            )}
            {secondaryLinkUrl && secondaryLinkLabel && (
              <Button
                link={secondaryLinkUrl}
                text={secondaryLinkLabel}
                variant={isLight ? 'Outline Dark' : 'Ghost Light'}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CtaBand;
