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
    <section className="border-schema h-fit text-4xl font-bold lg:text-8xl">
      <ul className="space-y-2">
        {collectionItems.map((item, index) => {
          return (
            <li key={item.id} className="lg:inline">
              <span className="peer relative z-10 mt-2  hover:text-blue-700 hover:underline">
                {item.title}
              </span>
              <sup className="peer-hover:text-blue-700">{item.after}</sup>
              <span className="hidden lg:inline">
                {index === collectionItems.length - 1 ? "" : "—"}
              </span>
              <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-out peer-hover:opacity-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="max-h-full max-w-full"
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
