import Button from '@/components/button';
import { FormattedText, Image as ResponsiveImage } from 'drupal-canvas';

/**
 * Two-column section with a media panel (video embed or image) alongside
 * a copy block with optional bullet list and CTA buttons.
 *
 * @param {Object} props
 * @param {'Video Embed'|'Image'} [props.mediaType='Image'] - Which media type to render.
 * @param {string} [props.videoEmbedUrl] - iframe src for an embedded video (Vimeo/YouTube background player).
 * @param {{ src: string, alt?: string, width?: number, height?: number }} [props.image] - Image source data.
 * @param {'Left'|'Right'} [props.mediaPosition='Left'] - Which side the media appears on.
 * @param {'Dark'|'Light'} [props.theme='Dark'] - Overall colour theme for the section background and text.
 * @param {string} [props.preHeading] - Small uppercase label above the heading.
 * @param {string} props.heading - Section heading (supports <em>).
 * @param {string} [props.text] - Body text HTML.
 * @param {string} [props.bulletItems] - Newline-separated bullet list items.
 * @param {string} [props.primaryLinkUrl] - Primary CTA URL.
 * @param {string} [props.primaryLinkLabel] - Primary CTA label.
 * @param {string} [props.secondaryLinkUrl] - Secondary CTA URL.
 * @param {string} [props.secondaryLinkLabel] - Secondary CTA label.
 */
const MediaWithText = ({
  mediaType = 'Image',
  videoEmbedUrl,
  image,
  mediaPosition = 'Left',
  theme = 'Dark',
  preHeading,
  heading,
  text,
  bulletItems,
  primaryLinkUrl,
  primaryLinkLabel,
  secondaryLinkUrl,
  secondaryLinkLabel,
}) => {
  const isDark = theme === 'Dark';
  const bullets = bulletItems ? bulletItems.split('\n').filter(Boolean) : [];
  const isMediaLeft = mediaPosition === 'Left';

  const mediaEl = mediaType === 'Video Embed' && videoEmbedUrl ? (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-full md:min-h-[420px]">
      <iframe
        src={videoEmbedUrl}
        className="absolute inset-0 h-full w-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Media"
      />
    </div>
  ) : image ? (
    <ResponsiveImage
      {...image}
      className="h-full w-full rounded-2xl object-cover"
    />
  ) : null;

  const copyEl = (
    <div className="flex flex-col justify-center">
      {preHeading && (
        <p className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] ${isDark ? 'text-white/55' : 'text-[#d95f2b]'}`}>
          <span className={`block h-px w-6 shrink-0 ${isDark ? 'bg-white/35' : 'bg-[#d95f2b]'}`} />
          {preHeading}
        </p>
      )}
      {heading && (
        <h2
          className={`mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-[#006699]'}`}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}
      {text && (
        <FormattedText className={`mb-4 text-base leading-relaxed ${isDark ? 'text-white/75' : 'text-[#5a554e]'}`}>
          {text}
        </FormattedText>
      )}
      {bullets.length > 0 && (
        <ul className="mb-6 flex flex-col gap-2">
          {bullets.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 text-base ${isDark ? 'text-white/80' : 'text-[#5a554e]'}`}>
              <span className={`mt-1 shrink-0 ${isDark ? 'text-white/40' : 'text-[#006699]/40'}`}>—</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {(primaryLinkUrl || secondaryLinkUrl) && (
        <div className="flex flex-wrap gap-3">
          {primaryLinkUrl && primaryLinkLabel && (
            <Button
              link={primaryLinkUrl}
              text={primaryLinkLabel}
              variant={isDark ? 'Outline Light' : 'Solid'}
            />
          )}
          {secondaryLinkUrl && secondaryLinkLabel && (
            <Button
              link={secondaryLinkUrl}
              text={secondaryLinkLabel}
              variant={isDark ? 'Ghost Light' : 'Outline Dark'}
            />
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={`px-6 py-20 ${isDark ? 'bg-[#004466]' : 'bg-white'}`}>
      <div className="mx-auto max-w-5xl">
        <div className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${isMediaLeft ? '' : 'md:[&>*:first-child]:order-2'}`}>
          {isMediaLeft ? (
            <>
              <div>{mediaEl}</div>
              {copyEl}
            </>
          ) : (
            <>
              {copyEl}
              <div>{mediaEl}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaWithText;
