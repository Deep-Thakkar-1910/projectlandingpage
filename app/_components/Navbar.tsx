"use client";
import {
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  UserCircle2,
} from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
const HeadingFont = localFont({ src: "../../public/fonts/VeniteAdoremus.ttf" });
const mainFont = localFont({ src: "../../public/fonts/Neuropol.otf" });
interface navbarProps {
  isCollectionOpen: boolean;
  isShopOpen: boolean;
  setSearchOpen: () => void;
  setSidebarOpen: () => void;
  setCartOpen: () => void;
  setCollectionOpen: () => void;
  setShopOpen: () => void;
  setCollectionClose: () => void;
  setShopClose: () => void;
  setSearchClose: () => void;
}

const Navbar = ({
  setCartOpen,
  setSearchOpen,
  setSidebarOpen,
  setCollectionOpen,
  setCollectionClose,
  setSearchClose,
  setShopClose,
  setShopOpen,
  isCollectionOpen,
  isShopOpen,
}: navbarProps) => {
  return (
    <nav
      className={`fixed left-0 top-0 z-30 flex  h-24 w-full items-center justify-between border-b-2 border-b-white px-4 font-semibold text-white lg:h-32 ${mainFont.className} black-blur`}
    >
      <div className="relative flex w-40 items-center lg:w-[350px]">
        <Image
          src={"/Logos/NanaHanaLogo.png"}
          alt="NanaHana Logo"
          width={500}
          height={500}
          className="mr-4 hidden aspect-square w-24 cursor-pointer lg:block"
        />
        <Image
          src="/Logos/moth.png"
          alt="Logo Text"
          width={1920}
          height={1080}
          className="mr-4 size-20 lg:hidden"
        />
        <Image
          src="/Logos/NanaHanaWhiteText.png"
          alt="Logo Text"
          width={1920}
          height={1080}
          className="hidden h-20 w-64 sm:block"
        />
      </div>

      <div className="hidden items-center gap-x-4 tracking-wider lg:flex ">
        <span className="cursor-pointer">NEW</span>
        <div
          className="gap-x flex cursor-pointer items-center"
          onClick={() => {
            setSearchClose();
            setCollectionClose();
            isShopOpen ? setShopClose() : setShopOpen();
          }}
        >
          <span>SHOP</span>
          {isShopOpen ? <Minus /> : <Plus />}
        </div>

        <div
          className="gap-x flex cursor-pointer items-center"
          onClick={() => {
            setSearchClose();
            setShopClose();
            isCollectionOpen ? setCollectionClose() : setCollectionOpen();
          }}
        >
          <span>COLLECTION</span>
          {isCollectionOpen ? <Minus /> : <Plus />}
        </div>

        <span className="cursor-pointer">ABOUT</span>
      </div>

      <div className="flex items-center gap-4 font-normal">
        <div className="lg:hidden" onClick={setSidebarOpen}>
          <Menu className="size-8" />
        </div>
        <UserCircle2 className="size-6 cursor-pointer md:size-7" />
        <Search
          className="size-6 cursor-pointer md:size-7"
          onClick={() => {
            setCollectionClose();
            setShopClose();
            setSearchOpen();
          }}
        />
        <ShoppingCart
          className="size-6 cursor-pointer md:size-7"
          onClick={setCartOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
