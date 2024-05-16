import Image from "next/image";
import { GridImageItem } from "@/lib/GridImages";
import { ChevronRight } from "lucide-react";
const FeaturedCollectionSection = ({ data }: { data: GridImageItem[] }) => {
  return (
    <section>
      <div className="border-schema flex items-center justify-between p-2 px-4 font-semibold">
        <h2 className="text-base  sm:text-2xl lg:text-4xl">
          Featured Collection
        </h2>
        <span className="cursor-pointer text-sm hover:text-white sm:translate-x-0 lg:text-xl">
          View All <ChevronRight className="inline-block  size-6" />
        </span>
      </div>
      <div className="flex flex-wrap">
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
    <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <div className=" group/main border-image size-full border-8">
        {/* image container */}
        <div className="group/image  relative h-64 cursor-pointer  lg:h-96 ">
          <Image
            src={gridImageItem.mainImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className=" border-black object-cover transition-opacity duration-150 group-hover/image:opacity-0"
          />
          <Image
            src={gridImageItem.altImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className="absolute inset-0 object-cover opacity-0 transition-opacity duration-150 group-hover/image:opacity-100"
          />
        </div>
        <div className=" flex items-baseline justify-between border-t-2  border-black p-4 ">
          <h3 className="w-2/3 text-xs font-semibold tracking-wide group-hover/main:text-white sm:text-base">
            {gridImageItem.title}
          </h3>
          <p className="font-bold group-hover/main:text-white">
            {gridImageItem.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionSection;
