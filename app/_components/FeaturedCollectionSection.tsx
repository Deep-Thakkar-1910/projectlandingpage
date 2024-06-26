import Image from "next/image";
import { GridImageItem } from "@/lib/GridImages";
import { ChevronRight } from "lucide-react";
import { HeadingFont } from "@/lib/FontDefinitions";
const FeaturedCollectionSection = ({ data }: { data: GridImageItem[] }) => {
  return (
    <section className="glowy-bubbles-inverse">
      <div
        className={`${HeadingFont.className} border-schema relative z-50 flex items-center justify-between p-4  font-semibold`}
      >
        <h2 className="flex-1 text-balance text-sm  sm:text-2xl lg:text-4xl">
          Featured Collection
        </h2>
        <span className="cursor-pointer text-xs hover:text-white sm:translate-x-0 sm:text-base lg:text-xl">
          View All <ChevronRight className="inline-block  size-6" />
        </span>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 p-4 pt-10 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => {
          return (
            <FeaturedCollectionItem
              key={product.productId}
              gridImageItem={product}
            />
          );
        })}
      </div>
    </section>
  );
};

interface FeaturedCollectionItemProps {
  gridImageItem: GridImageItem;
}
const FeaturedCollectionItem = ({
  gridImageItem,
}: FeaturedCollectionItemProps) => {
  return (
    <div className=" min-h-fit rounded-md ">
      <div className=" group/main  size-full ">
        {/* image container */}
        <div className="group/image  relative h-64 cursor-pointer  lg:h-96 ">
          <Image
            src={gridImageItem.mainImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className=" border-image border-4 object-cover  transition-opacity duration-150 group-hover/image:opacity-0"
          />
          <Image
            src={gridImageItem.altImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className="border-image absolute inset-0 border-4 object-cover opacity-0  transition-opacity duration-300 group-hover/image:opacity-100"
          />
        </div>
        <div className={`flex items-baseline justify-between gap-x-4  p-4`}>
          <h3 className="w-2/3 text-xs font-semibold tracking-wide group-hover/main:text-white sm:text-base">
            {gridImageItem.title}
          </h3>
          <p className="flex-1 font-bold group-hover/main:text-white">
            {gridImageItem.price}
            <span> &#8377;</span>
            {/*currency symbol here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionSection;
