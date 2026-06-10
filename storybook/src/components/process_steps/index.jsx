import { FormattedText } from 'drupal-canvas';

/**
 * Section comparing two processes side-by-side with numbered steps.
 * Optional video break sits between the intro copy and the step columns.
 *
 * @param {Object} props
 * @param {string} [props.preHeading] - Small uppercase label above the heading.
 * @param {string} [props.heading] - Section heading (supports <em> for accent colour).
 * @param {string} [props.text] - Body text HTML below the heading.
 * @param {string} [props.videoUrl] - Direct mp4 URL to autoplay as a muted looping video.
 * @param {string} [props.leftColumnTitle] - Title for the left (negative) column.
 * @param {string} [props.leftColumnFooter] - Footer note for the left column.
 * @param {React.ReactNode} [props.leftSteps] - Slot: numbered step items for the left column.
 * @param {string} [props.rightColumnTitle] - Title for the right (positive) column.
 * @param {string} [props.rightColumnFooter] - Footer note for the right column.
 * @param {React.ReactNode} [props.rightSteps] - Slot: numbered step items for the right column.
 */
const ProcessSteps = ({
  preHeading,
  heading,
  text,
  videoUrl,
  leftColumnTitle = 'The old way',
  leftColumnFooter,
  leftSteps,
  rightColumnTitle = 'The new way',
  rightColumnFooter,
  rightSteps,
}) => {
  return (
    <div className="bg-[#f5f2eb] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Intro */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            {preHeading && (
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d95f2b]">
                <span className="block h-px w-6 shrink-0 bg-[#d95f2b]" />
                {preHeading}
              </p>
            )}
            {heading && (
              <h2
                className="text-3xl font-bold leading-tight tracking-tight text-[#006699] md:text-4xl"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
            )}
          </div>
          {text && (
            <FormattedText className="text-base leading-relaxed text-[#5a554e]">
              {text}
            </FormattedText>
          )}
        </div>

        {/* Optional video */}
        {videoUrl && (
          <div className="mb-12 overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-72 w-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left column */}
          <div className="rounded-2xl bg-white/60 p-8">
            {leftColumnTitle && (
              <span className="mb-6 block text-sm font-bold uppercase tracking-wider text-[#5a554e]">
                {leftColumnTitle}
              </span>
            )}
            <div className="flex flex-col gap-6">{leftSteps}</div>
            {leftColumnFooter && (
              <p className="mt-6 border-t border-[#006699]/10 pt-4 text-sm italic text-[#5a554e]">
                {leftColumnFooter}
              </p>
            )}
          </div>

          {/* Right column */}
          <div className="rounded-2xl bg-[#006699] p-8 text-white">
            {rightColumnTitle && (
              <span className="mb-6 block text-sm font-bold uppercase tracking-wider text-white/70">
                {rightColumnTitle}
              </span>
            )}
            <div className="flex flex-col gap-6">{rightSteps}</div>
            {rightColumnFooter && (
              <p className="mt-6 border-t border-white/20 pt-4 text-sm italic text-white/70">
                {rightColumnFooter}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Single numbered step item for use inside ProcessSteps slots.
 *
 * @param {Object} props
 * @param {number|string} props.number - Step number.
 * @param {string} props.title - Step title.
 * @param {string} [props.text] - Step description.
 * @param {boolean} [props.light] - Use light text (for dark background columns).
 */
export const ProcessStep = ({ number, title, text, light = false }) => (
  <div className="flex items-start gap-4">
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
        light
          ? 'bg-white/20 text-white'
          : 'bg-[#006699]/10 text-[#006699]'
      }`}
    >
      {number}
    </span>
    <div>
      <span
        className={`block text-sm font-bold ${light ? 'text-white' : 'text-[#006699]'}`}
      >
        {title}
      </span>
      {text && (
        <p className={`mt-1 text-sm leading-relaxed ${light ? 'text-white/70' : 'text-[#5a554e]'}`}>
          {text}
        </p>
      )}
    </div>
  </div>
);

export default ProcessSteps;
