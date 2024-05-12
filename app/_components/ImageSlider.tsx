"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  const handleScrollButtonClick = (direction: "left" | "right") => {
    // Scroll button click logic
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
  const renderDots = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={cn(
          " size-2 rounded-full",
          activeIndex === index
            ? "border border-transparent bg-black"
            : "border border-black bg-[#f2f2eb]",
        )}
        onClick={() => handleDotClick(index)}
      ></span>
    ));
  };
  return (
    <>
      <div className="size-full overflow-hidden">
        <div className="flex ">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={image.slice(1)}
              width={1920}
              height={1080}
              className="size-full rounded-md transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`, // Sliding animation
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-2 px-4">
        <div className="flex items-center gap-x-2">{renderDots()}</div>
        <div className="flex items-center gap-x-4">
          <ChevronLeft onClick={() => handleScrollButtonClick("left")} />
          <ChevronRight onClick={() => handleScrollButtonClick("right")} />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
