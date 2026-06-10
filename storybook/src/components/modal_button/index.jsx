import { useState } from 'react';
import { cn } from 'drupal-canvas';

const buttonStyleMap = {
  'Color button': 'bg-[#006699] text-white hover:bg-[#005580]',
  'Dark button': 'bg-[#002633] text-white hover:bg-[#001a24]',
  'Light button': 'bg-white text-[#002633] hover:bg-[#f5f2eb]',
};

const ModalButton = ({
  buttonId,
  buttonText = 'Open Modal',
  buttonStyle = 'Color button',
  modalWindowId,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id={buttonId}
        onClick={() => setOpen(true)}
        className={cn(
          'inline-block rounded-lg px-6 py-3 font-bold transition-colors',
          buttonStyleMap[buttonStyle] || buttonStyleMap['Color button'],
        )}
        aria-haspopup="dialog"
        aria-controls={modalWindowId}
      >
        {buttonText}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#006699]">
                Modal: {modalWindowId || 'Demo'}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl leading-none text-[#5a554e] hover:text-[#002633]"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <p className="text-[#5a554e]">Modal content goes here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalButton;
