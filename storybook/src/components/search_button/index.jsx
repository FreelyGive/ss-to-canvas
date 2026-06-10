const SearchButton = ({ buttonText = 'Search' }) => {
  return (
    <button
      type="submit"
      className="rounded bg-[#006699] px-4 py-2 text-sm font-medium text-white hover:bg-[#005580]"
    >
      {buttonText}
    </button>
  );
};

export default SearchButton;
