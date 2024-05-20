"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="glowy-bubbles relative mx-auto w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative z-10 flex h-40 items-center justify-center overflow-hidden md:h-56 lg:h-96"
          >
            <Image
              src={img}
              alt={img.slice(1)}
              fill
              className="ml-2 max-h-full max-w-full cursor-pointer object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
