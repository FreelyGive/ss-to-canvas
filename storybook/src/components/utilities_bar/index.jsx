import { cn } from 'drupal-canvas';

const UtilitiesBar = ({ orientation = 'Horizontal' }) => {
  return (
    <div
      className={cn(
        'flex gap-2 bg-[#002633] px-4 py-2 text-sm text-white',
        orientation === 'Vertical' ? 'flex-col items-start' : 'flex-row items-center',
      )}
    >
      <a href="#" className="hover:underline">Find a Showroom</a>
      <span className="opacity-40">|</span>
      <a href="#" className="hover:underline">Book an Appointment</a>
      <span className="opacity-40">|</span>
      <a href="#" className="hover:underline">Contact Us</a>
    </div>
  );
};

export default UtilitiesBar;
