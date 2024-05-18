import Image from "next/image";

interface CollectionItem {
  id: number;
  title: string;
  after: string;
  image: string;
}

interface CollectionGallerySectionProps {
  collectionItems: CollectionItem[];
}

const CollectionGallerySection = ({
  collectionItems,
}: CollectionGallerySectionProps) => {
  return (
    <section className="border-schema h-fit bg-gradient-to-br from-app-main to-app-secondary p-2 text-3xl font-bold lg:text-7xl">
      <ul className="mt-4 space-y-10">
        {collectionItems.map((item, index) => {
          return (
            <li key={item.id} className="lg:inline">
              <span className="peer relative z-10 hover:text-white hover:underline">
                {item.title}
              </span>
              <sup className="peer-hover:text-white">{item.after}</sup>
              <span className="hidden lg:inline">
                {index === collectionItems.length - 1 ? "" : " | "}
              </span>
              <div className="pointer-events-none fixed left-1/2 top-16 z-20 flex -translate-x-1/2 items-center  justify-center opacity-0 transition-opacity duration-300 ease-out peer-hover:opacity-100 lg:top-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className=" hidden lg:block lg:size-2/3 "
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CollectionGallerySection;
