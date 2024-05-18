interface InfiniteCarouselProps {
  children: React.ReactNode;
  background?: string;
  textColor?: string;
}
const InfiniteCarousel = ({
  children,
  background,
  textColor,
}: InfiniteCarouselProps) => {
  return (
    <div className="text-shadow-none group flex overflow-hidden">
      <div className=" flex animate-loop-scroll  text-nowrap group-hover:paused">
        <div
          className={`border-schema flex items-center gap-x-4 border-t-2  p-2 px-4 uppercase`}
          style={{ backgroundColor: background, color: textColor }}
        >
          {children}
          {children}
        </div>
      </div>
      <div className=" flex animate-loop-scroll  text-nowrap group-hover:paused">
        <div
          className={`border-schema  flex items-center gap-x-4 border-t-2 p-2 px-4 uppercase`}
          style={{ backgroundColor: background, color: textColor }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
