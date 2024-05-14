import Image from "next/image";
import Cart from "../_components/Cart";
import ChatBot from "../_components/ChatBot";
import Header from "../_components/Header";
import MobileSidebar from "../_components/MobileSidebar";
import Overlay from "../_components/Overlay";
import DescriptionSection from "../_components/DescriptionSection";
import FeaturedCollectionSection from "../_components/FeaturedCollectionSection";
import ImageSlider from "../_components/ImageSlider";
import InfiniteCarousel from "../_components/InfiniteCarousel";
import { ImageSliderImages } from "@/lib/Images";
import BrandingSection from "../_components/BrandingSection";
import Footer from "../_components/Footer";
import CollectionGallerySection from "../_components/CollectionGallerySection";
import { CollectionGallery } from "@/lib/CollectionGallery";
import { GridImages } from "@/lib/GridImages";

export default function Home() {
  return (
    <>
      {/* Header component */}
      <Header />
      <main className="overflow-x-hidden bg-[#f2f2eb]">
        {/* Overlay */}
        <Overlay />

        {/* Cart Component */}
        <Cart />

        {/* Sidebar Component */}
        <MobileSidebar />

        {/* chatbot */}
        {/* <ChatBot /> */}

        {/* Main Poster */}
        <section className="mt-24 size-full border-b-2 border-b-black lg:mt-32">
          <Image
            src={"/TakaOriginalPoster.jpg"}
            alt="Main Poster"
            width={1920}
            height={1080}
            className="size-full"
          />
        </section>
        {/* Image slider component */}
        <section className="border-schema">
          <ImageSlider images={ImageSliderImages} />
        </section>

        {/* description section */}
        <DescriptionSection />

        {/* featured collection section */}
        <FeaturedCollectionSection data={GridImages} />

        {/* infinite carousel */}
        <InfiniteCarousel background="#61ff5c">
          <span className="text-3xl font-semibold lg:text-5xl">
            Create The fun
          </span>
          <span className="text-3xl font-semibold lg:text-5xl">∞</span>
          <span className="text-3xl font-semibold lg:text-5xl">
            Create The fun
          </span>
          <span className="text-3xl font-semibold lg:text-5xl">∞</span>
        </InfiniteCarousel>
        {/* collection Gallery */}
        <CollectionGallerySection collectionItems={CollectionGallery} />

        {/* image Slider 2 */}
        <ImageSlider images={ImageSliderImages} />

        {/* InfiniteCarousel 2 */}
        <InfiniteCarousel background="#f2f2eb">
          <h1 className="text-2xl font-bold lg:text-8xl">Do what you want</h1>
          <span className="text-2xl font-bold lg:text-6xl">-</span>
          <h1 className="text-2xl font-bold lg:text-8xl">
            {"It's Your own Life"}
          </h1>
          <span className="text-2xl font-bold lg:text-6xl">-</span>
        </InfiniteCarousel>

        {/* featured collection 2 */}
        <FeaturedCollectionSection data={GridImages} />

        {/* branding section */}
        <BrandingSection />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
