import Image from "next/image";
import { GridImages, GridImageItem } from "@/lib/GridImages";

const FeaturedCollectionSection = () => {
  return (
    <section>
      <div className="border-schema">
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
    <div className="w-1/2 lg:w-1/4">
      <div className="group peer size-full">
        {/* image container */}
        <div className="group relative h-64 cursor-pointer border-r-2  border-black lg:h-96 ">
          <Image
            src={gridImageItem.mainImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className="object-cover transition-opacity duration-150 group-hover:opacity-0"
          />
          <Image
            src={gridImageItem.altImageurl}
            alt={gridImageItem.title}
            fill
            layout="fill"
            className="absolute inset-0 object-cover opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </div>
        <div className="flex items-baseline justify-between border-2 border-l-0 border-black p-4 ">
          <h3 className="w-1/2 text-base font-semibold tracking-wide group-hover:text-blue-700">
            {gridImageItem.title}
          </h3>
          <p className="font-bold group-hover:text-blue-700">
            {gridImageItem.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionSection;
