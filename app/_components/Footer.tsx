import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronDown, Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { inter, HeadingFont } from "@/lib/FontDefinitions";
const Footer = () => {
  return (
    <footer
      className={`glowy-bubbles-footer w-full border-b-2 border-gray-400 bg-black text-white ${HeadingFont.className}`}
    >
      {/* top footer */}
      <div className=" flex w-full flex-col justify-between gap-y-6 border-b-2 border-b-gray-400  p-2  lg:flex-row  lg:items-center">
        <p className="font text-base font-medium lg:text-xl">
          {"Let's create the fun together! Subscribe to get in touch."}
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            type="email"
            className="border-0 border-b-2 border-gray-400  bg-transparent text-base font-semibold  outline-none  placeholder:text-base placeholder:text-white"
            placeholder="Email"
          />
          <div className="mb-4 w-fit border-b-2 lg:mb-0">
            <p className=" cursor-pointer text-base font-semibold">
              Subscribe <span>&rarr;</span>
            </p>
          </div>
        </div>
      </div>
      {/* mid footer */}
      <div className="flex w-full flex-col   items-center border-b-2 border-gray-400 px-4  pb-4  lg:flex-row lg:justify-between">
        <div className="relative py-4">
          <Image
            src={"/Logos/NanaHanaWhiteText.png"}
            width={300}
            height={300}
            className="w-40 object-contain"
            alt="NanaHana Logo"
          />
        </div>
        <div
          className={`${inter.className} flex flex-col items-center text-sm font-semibold`}
        >
          <h1 className="text-xl">Contact Us</h1>
          <span className=" cursor-pointer text-sky-500">
            YOUREMAIL@GMAIL.COM
            <Mail className="ml-2 inline text-sky-500" />
          </span>
          <span className=" cursor-pointer text-sky-500">
            +91 9999999999
            <Phone className="ml-2 inline text-sky-500" />
          </span>
        </div>
      </div>
      {/* bottom footer */}
      <div
        className={`text base flex w-full flex-col items-center gap-y-8 p-2 px-4 font-semibold lg:flex-row lg:justify-between ${inter.className}`}
      >
        <div className="flex flex-col items-center gap-y-4 lg:w-1/3 lg:items-start">
          <p>
            <span>&copy;</span>
            2024, NanaHana Limited.
          </p>
          <div
            className={`mx-auto w-1/2 text-center text-xs lg:mx-0  lg:text-balance  lg:text-sm`}
          >
            <span>Powered By Shopify</span>
            <span>&bull;</span>
            <span>Refund Policy</span>
            <span>&bull;</span>
            <span>Privacy Policy</span>
            <span>&bull;</span>
            <span>Terms of Service</span>
            <span>&bull;</span>
            <span>Shipping Policy</span>
            <span>&bull;</span>
          </div>
        </div>
        {/* icons */}
        <div className="flex items-center gap-x-6 lg:ml-auto lg:-translate-x-1/4 xl:-translate-x-full">
          <InstagramLogoIcon className="size-6 transition-all duration-300 ease-out hover:scale-125 hover:text-[#4e3ab2] hover:shadow-md" />
          <TwitterLogoIcon className="size-6 transition-all duration-300 ease-out hover:scale-125 hover:text-[#4e3ab2] hover:shadow-md" />
          <Facebook className="size-6 transition-all duration-300 ease-out hover:scale-125 hover:text-[#4e3ab2] hover:shadow-md" />
        </div>
        <p className="w-fit p-2 lg:ml-auto">
          India {"(INR) "}
          <span>&#8377;</span>
          <ChevronDown className="inline-block" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
