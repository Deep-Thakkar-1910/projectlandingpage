import Image from "next/image";
import Cart from "../_components/Cart";
// import ChatBot from "../_components/ChatBot";
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
import { inter } from "@/lib/FontDefinitions";
import "./homePage.css";
import EmailToggler from "../_components/EmailToggler";
import EmailPopup from "../_components/EmailPopup";
export default function Home() {
  return (
    <>
      {/* Header component */}
      <Header />
      <main
        className={`text-glow overflow-x-hidden bg-black text-white ${inter.className}`}
      >
        {/* Overlay */}
        <Overlay />

        {/* Cart Component */}
        <Cart />

        {/* Sidebar Component */}
        <MobileSidebar />

        <EmailToggler />
        <EmailPopup />

        {/* Main Poster */}
        <section className="h-[90vh] w-full border-b-2 border-b-black bg-white pt-20">
          <Image
            src={"/Logos/NanaHanaFooter.png"}
            alt="Main Poster"
            width={1920}
            height={1080}
            className="size-full object-scale-down sm:object-cover md:object-fill"
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
        <InfiniteCarousel background="#2b82d9" textColor="#000">
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
        <InfiniteCarousel
          background="#f2f2eb"
          textColor="#000"
          borderColor="#888"
        >
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
