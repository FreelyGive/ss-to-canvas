import { FormattedText } from 'drupal-canvas';

const ICONS = {
  Showroom: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
    </svg>
  ),
  Chat: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Location: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

/**
 * Contact/support card with an icon, heading, body text, and optional hours.
 * Designed for use in a 3-column support band section.
 *
 * @param {Object} props
 * @param {'Showroom'|'Email'|'Phone'|'Chat'|'Location'} [props.icon='Showroom'] - Icon to display.
 * @param {string} props.heading - Card heading.
 * @param {string} [props.text] - Body text HTML (may include links).
 * @param {string} [props.hours] - Opening hours line displayed at the bottom.
 */
const SupportCard = ({ icon = 'Showroom', heading, text, hours }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2eb] text-[#006699]">
        {ICONS[icon] ?? ICONS.Showroom}
      </span>
      <h3 className="text-lg font-bold text-[#006699]">{heading}</h3>
      {text && (
        <FormattedText className="text-sm leading-relaxed text-[#5a554e] [&_a]:text-[#006699] [&_a]:underline">
          {text}
        </FormattedText>
      )}
      {hours && (
        <p className="mt-auto text-xs font-semibold text-[#5a554e]/60">{hours}</p>
      )}
    </div>
  );
};

export default SupportCard;
