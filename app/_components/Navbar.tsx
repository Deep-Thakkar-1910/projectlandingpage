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
        "fixed left-0 top-0 z-30 flex h-24 w-full items-center border-b-2 border-b-white px-4 font-semibold text-white lg:h-32",
        scrollOffset > 0
          ? "border-b-black bg-[#f2f2eb] text-black"
          : "bg-gradient-to-b from-sky-300 to-sky-200/80",
      )}
    >
      <div className="relative w-40 lg:w-[350px]">
        <Image
          src={"/TakaOriginal.png"}
          alt="Logo"
          width={500}
          height={500}
          className="cursor-pointer"
        />
      </div>

      <div className="ml-8 hidden items-center gap-x-4 tracking-wider lg:flex">
        <span className="cursor-pointer">NEW</span>
        <div
          className="items center gap-x flex cursor-pointer"
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
          className="items center gap-x flex cursor-pointer"
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

      <div className="ml-auto flex items-center gap-4 font-normal">
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
