interface InfiniteCarouselProps {
  children: React.ReactNode;
  background: string;
}
const InfiniteCarousel = ({ children, background }: InfiniteCarouselProps) => {
  return (
    <div className="group flex overflow-hidden">
      <div className=" flex animate-loop-scroll  text-nowrap group-hover:paused">
        <div
          className={`border-schema flex items-center gap-x-4 border-t-2  p-2 px-4 uppercase`}
          style={{ backgroundColor: background }}
        >
          {children}
          {children}
        </div>
      </div>
      <div className=" flex animate-loop-scroll  text-nowrap group-hover:paused">
        <div
          className={`border-schema  flex items-center gap-x-4 border-t-2 p-2 px-4 uppercase`}
          style={{ backgroundColor: background }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
