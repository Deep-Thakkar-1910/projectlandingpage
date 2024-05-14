import Image from "next/image";
import { GridImages, GridImageItem } from "@/lib/GridImages";
import { ChevronRight } from "lucide-react";

const FeaturedCollectionSection = () => {
  return (
    <section>
      <div className="border-schema ">
        <h2 className="p-2 px-4 text-2xl font-semibold lg:text-4xl">
          Featured Collection
        </h2>
      </div>
      <div className="flex flex-wrap">
        {GridImages.map((product) => {
          return (
            <FeaturedCollectionItem
              key={product.productId}
              gridImageItem={product}
            />
          );
        })}
        <div className=" ml-4 flex w-fit flex-col items-center justify-end py-4">
          <span className="cursor-pointer text-base font-semibold hover:text-blue-700 lg:text-xl">
            View All <ChevronRight className="inline-block size-6" />
          </span>
        </div>
      </div>
      {/* <div className="border-schema flex w-full justify-center border-t-2 p-2 px-4">
        <span className="cursor-pointer text-base font-semibold hover:text-blue-700 lg:text-xl">
          View All <ChevronRight className="inline-block size-6" />
        </span>
      </div> */}
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
    <div className="w-1/2 lg:w-1/4">
      <div className=" group/main size-full">
        {/* image container */}
        <div className="group/image border-image relative h-64 cursor-pointer border-8 lg:h-96 ">
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
            className="border-image absolute inset-0 object-cover opacity-0 transition-opacity duration-150 group-hover/image:opacity-100"
          />
        </div>
        <div className="border-image flex items-baseline justify-between border-2 border-l-0 p-4 ">
          <h3 className="w-1/2 text-base font-semibold tracking-wide group-hover/main:text-blue-700">
            {gridImageItem.title}
          </h3>
          <p className="font-bold group-hover/main:text-blue-700">
            {gridImageItem.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionSection;
