"use client";
import { useEffect, useState } from "react";
import NeonButton from "./_components/NeonButton";
import { LandingPageVideos } from "@/lib/LandingPageVideos";
import localFont from "next/font/local";
const HeadingFont = localFont({ src: "../public/fonts/font.woff2" });
const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === LandingPageVideos.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main
      className={`flex h-screen w-screen flex-col items-center justify-center ${HeadingFont.className}`}
    >
      <video
        src={LandingPageVideos[activeIndex].videoUrl}
        muted
        loop
        playsInline
        autoPlay
        className="absolute left-0 top-0 -z-10 size-full object-cover opacity-80"
      />
      <h1 className="text-shadow mb-4 text-2xl text-[#715097] lg:text-4xl">
        Nana Hana
      </h1>
      <NeonButton content="Press to Enter" />
    </main>
  );
};

export default LandingPage;
