import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-schema w-full">
      {/* top footer */}
      <div className="border-schema flex w-full flex-col justify-between bg-[#61ff5c] p-2 lg:flex-row  lg:items-center">
        <p className="font text-base font-medium lg:text-xl">
          {"Let's create the fun together! Subscribe to get in touch."}
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            type="email"
            className="border-0 border-b-2 border-black  bg-transparent text-base font-semibold text-black outline-none  placeholder:text-base placeholder:text-black"
            placeholder="Email"
          />
          <div className="border-schema w-fit p-2">
            <p className=" cursor-pointer text-base font-semibold">
              Subscribe <span>&rarr;</span>
            </p>
          </div>
        </div>
      </div>
      {/* mid footer */}
      <div className="border-schema flex w-full flex-col justify-between gap-y-4 bg-[#f2f2eb] p-2 px-4 lg:flex-row">
        <div className="relative  w-32">
          <Image
            src={"/TakaOriginal.png"}
            width={300}
            height={300}
            className="size-full object-contain"
            alt="TakaOriginal Logo"
          />
        </div>
        <p className="text-base font-semibold ">
          Use this to add additional information about your store, e.g. address
          / contact details.
        </p>
      </div>
      {/* bottom footer */}
      <div className="text base flex w-full flex-col bg-[#f2f2eb] p-2 px-4 font-semibold lg:flex-row lg:items-center">
        <div className="flex-col gap-y-2 lg:w-1/3">
          <p>
            <span>&copy;</span>
            2024, Taka Original Limited.
          </p>
          <div className="flex w-1/2 flex-wrap items-center gap-x-1 text-xs lg:text-sm">
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
        <div className="ml-auto flex w-full flex-wrap items-center gap-x-2 lg:w-1/3">
          <Image
            src={"/AmericanExpress.svg"}
            alt="American Express"
            width={50}
            height={50}
          />
          <Image src={"/ApplePay.svg"} alt="Apple pay" width={50} height={50} />
          <Image
            src={"/GooglePay.svg"}
            alt="Google Pay"
            width={50}
            height={50}
          />
          <Image
            src={"/MasterCard.svg"}
            alt="MasterCard"
            width={50}
            height={50}
          />
        </div>
        <p className="w-fit p-2 lg:ml-auto">
          United States {"(USD $)"}
          <ChevronDown className="inline-block" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
