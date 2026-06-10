import { useState } from 'react';

const NewsletterSignup = ({
  newsletterCopy = 'Stay up to date with the latest frames, lens technology, and eye health advice from iolla.',
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="w-full">
      {newsletterCopy && (
        <p className="mb-4 text-base leading-relaxed">{newsletterCopy}</p>
      )}
      {submitted ? (
        <p className="font-semibold">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006699]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#006699] px-6 py-3 font-bold text-white transition-colors hover:bg-[#005580]"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
