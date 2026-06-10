import { useState, useEffect } from 'react';
import { cn } from 'drupal-canvas';

const sizeMap = {
  'Small': 'max-w-sm',
  'Medium': 'max-w-lg',
  'Large': 'max-w-3xl',
  'Full screen': 'max-w-full mx-4',
};

const closeButtonStyleMap = {
  'Color button': 'bg-[#006699] text-white hover:bg-[#005580] rounded-lg px-4 py-2 font-bold text-sm',
  'Light button': 'bg-white text-[#002633] hover:bg-[#f5f2eb] rounded-lg px-4 py-2 font-bold text-sm',
  'Dark button': 'bg-[#002633] text-white hover:bg-[#001a24] rounded-lg px-4 py-2 font-bold text-sm',
};

const ModalWindow = ({
  autoOpenModal = false,
  modalWindowId,
  modalSize = 'Medium',
  modalBackgroundColor = '#ffffff',
  closeButtonStyle = 'Color button',
  content,
}) => {
  const [open, setOpen] = useState(autoOpenModal);

  useEffect(() => {
    setOpen(autoOpenModal);
  }, [autoOpenModal]);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-[#006699] px-4 py-2 text-sm font-bold text-white hover:bg-[#005580]"
      >
        Preview Modal
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            id={modalWindowId}
            className={cn('relative w-full rounded-2xl p-8 shadow-2xl', sizeMap[modalSize])}
            style={{ backgroundColor: modalBackgroundColor }}
          >
            <button
              onClick={() => setOpen(false)}
              className={cn(
                'absolute right-4 top-4',
                closeButtonStyleMap[closeButtonStyle] || closeButtonStyleMap['Color button'],
              )}
              aria-label="Close modal"
            >
              Close
            </button>
            <div className="mt-4">
              {content || (
                <p className="text-[#5a554e]">Modal content slot — add components here.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
