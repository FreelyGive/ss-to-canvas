const SlideItem = ({ content }) => {
  return (
    <div className="w-full">
      {content || (
        <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-[#f5f2eb] text-sm text-[#5a554e]">
          Slide item content
        </div>
      )}
    </div>
  );
};

export default SlideItem;
