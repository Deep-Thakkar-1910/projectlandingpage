"use client";
import { Search, X } from "lucide-react";
import Navbar from "./Navbar";
import { useHeaderItems } from "@/hooks/useHeaderItems";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
const Header = () => {
  // importing the state and actions from the useHeaderItems hook to manage the state of the header using zustand

  const isSearchOpen = useHeaderItems((state) => state.isSearchOpen);
  const isShopOpen = useHeaderItems((state) => state.isShopOpen);
  const isCollectionOpen = useHeaderItems((state) => state.isCollectionOpen);
  const setCollectionOpen = useHeaderItems((state) => state.setCollectionOpen);
  const setShopOpen = useHeaderItems((state) => state.setShopOpen);
  const setShopClose = useHeaderItems((state) => state.setShopClose);
  const setCollectionClose = useHeaderItems(
    (state) => state.setCollectionClose,
  );
  const setCartOpen = useHeaderItems((state) => state.setCartOpen);
  const setSearchOpen = useHeaderItems((state) => state.setSearchOpen);
  const setSidebarOpen = useHeaderItems((state) => state.setSidebarOpen);
  const setSearchClose = useHeaderItems((state) => state.setSearchClose);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="flex flex-col">
      <Navbar
        scrollOffset={scrollOffset}
        setCartOpen={setCartOpen}
        setSearchOpen={setSearchOpen}
        setSidebarOpen={setSidebarOpen}
        setCollectionClose={setCollectionClose}
        setCollectionOpen={setCollectionOpen}
        setSearchClose={setSearchClose}
        setShopOpen={setShopOpen}
        setShopClose={setShopClose}
        isCollectionOpen={isCollectionOpen}
        isShopOpen={isShopOpen}
      />
      {/* searchbar */}
      {isSearchOpen && (
        <div
          className={cn(
            "fixed left-0 top-24 z-10 flex h-16 w-full items-center justify-between border-b-2 bg-app-main px-4 text-white lg:top-32",
            scrollOffset > 0 ? "border-b-black " : "border-b-white ",
          )}
        >
          <div className=" flex items-center gap-x-4 font-semibold">
            <Search />
            <input
              type="text"
              className={`border-none bg-transparent outline-none placeholder:text-base placeholder:text-${scrollOffset > 0 ? "black" : "white"} `}
              placeholder="Search"
            />
          </div>

          <X
            onClick={setSearchClose}
            className="size-8 cursor-pointer font-light"
          />
        </div>
      )}
      {/* shop */}
      {isShopOpen && (
        <div
          className={cn(
            "fixed left-0 top-24  z-10 flex h-16 w-full  items-center border-b-2 px-4 lg:top-32",
            scrollOffset > 0
              ? "border-black bg-app-main "
              : "border-white bg-black ",
          )}
        >
          Shop
          {/* shop content */}
        </div>
      )}
      {isCollectionOpen && (
        <div
          className={cn(
            "fixed left-0 top-24  z-10 flex h-16 w-full items-center border-b-2 px-4 lg:top-32",
            scrollOffset > 0
              ? "border-black bg-app-main "
              : "border-white bg-black ",
          )}
        >
          Collection
          {/* shop content */}
        </div>
      )}
    </header>
  );
};

export default Header;
