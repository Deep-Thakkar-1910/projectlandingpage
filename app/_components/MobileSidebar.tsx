"use client";
import { useHeaderItems } from "@/hooks/useHeaderItems";
import { cn } from "@/lib/utils";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ChevronDown, Mail, Plus, Search, X } from "lucide-react";
import Image from "next/image";

const MobileSidebar = () => {
  const isSidebarOpen = useHeaderItems((state) => state.isSidebarOpen);
  const setSidebarClose = useHeaderItems((state) => state.setSidebarClose);
  return (
    <aside
      className={cn(
        "text-shadow-none  fixed left-0 top-0 z-50 flex h-full w-10/12 -translate-x-full flex-col  border-2 border-t-0 border-black bg-[#24166b]  transition-transform duration-300 ease-in-out sm:w-2/3 md:w-2/5 lg:hidden",
        isSidebarOpen && "translate-x-0",
      )}
    >
      <div className="relative h-16 w-full  border-b-2 border-b-black bg-black px-4">
        <X
          className="absolute right-0 top-1/2 size-8 -translate-y-1/2 cursor-pointer text-white"
          onClick={setSidebarClose}
        />
      </div>

      <div className="flex flex-col text-2xl font-medium">
        <div className="w-full border-b-2 border-black p-2">
          <span className="cursor-pointer">NEW</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-between border-b-2 border-black p-2">
          <span>SHOP</span>
          <Plus />
        </div>

        <div className="flex w-full cursor-pointer items-center justify-between border-b-2 border-black p-2">
          <span>COLLECTION</span>
          <Plus />
        </div>

        <div className="w-full border-b-2 border-black p-2">
          <span className="cursor-pointer">ABOUT</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 font-medium">
        <p className="text-sm">
          India {"(INR) "}
          <span>&#8377;</span> <ChevronDown className="inline-block" />
        </p>

        <div className="flex flex-col">
          <span>Login</span>
          <span>Create Account</span>
        </div>

        <div className=" flex w-full items-center gap-x-4 font-semibold">
          <input
            type="text"
            className=" w-3/4 border-b-2 border-b-white bg-transparent outline-none placeholder:text-base placeholder:text-white "
            placeholder="Search"
          />
          <Search />
        </div>
        <div className="flex items-center gap-x-4">
          <InstagramLogoIcon className="size-6" />
          <Image
            src={"/tiktok.png"}
            alt="Tiktok logo"
            width={24}
            height={24}
            className="size-6 "
            loading="eager"
          />
          <Mail className="size-6" />
        </div>
      </div>
    </aside>
  );
};

export default MobileSidebar;
