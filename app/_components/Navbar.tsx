"use client";
import {
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
const mainFont = localFont({ src: "../../public/fonts/VeniteAdoremus.ttf" });
interface navbarProps {
  scrollOffset: number;
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
  scrollOffset,
  isCollectionOpen,
  isShopOpen,
}: navbarProps) => {
  return (
    <nav
      className={cn(
        `fixed left-0 top-0 z-30 flex  h-24 w-full items-center justify-between border-b-2 border-b-white px-4 font-semibold text-white lg:h-32 ${mainFont.className}`,
        scrollOffset > 0
          ? " to-app-secondary border-b-black bg-gradient-to-tl from-app-main"
          : "bg-gradient-to-br from-purple-700 to-[#715097]",
      )}
    >
      <div className="relative flex w-40 items-center lg:w-[350px]">
        <Image
          src={"/Logo.png"}
          alt="NanaHana Logo"
          width={500}
          height={500}
          className=" w-40 translate-y-[10%] cursor-pointer"
        />
        <h1 className="hidden text-4xl text-white lg:block">NanaHana</h1>
      </div>

      <div className="hidden items-center gap-x-4 tracking-wider lg:flex xl:-translate-x-1/4">
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
        <UserRound className="size-6 cursor-pointer md:size-7" />
        <Search
          className="size-6 cursor-pointer md:size-7"
          onClick={() => {
            setCollectionClose();
            setShopClose();
            setSearchOpen();
          }}
        />
        <ShoppingBag
          className="size-6 cursor-pointer md:size-7"
          onClick={setCartOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
