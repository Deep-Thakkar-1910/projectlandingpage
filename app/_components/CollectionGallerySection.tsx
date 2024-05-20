import { HeadingFont } from "@/lib/FontDefinitions";
interface CollectionItem {
  id: number;
  title: string;
  after: string;
}

interface CollectionGallerySectionProps {
  collectionItems: CollectionItem[];
}

const CollectionGallerySection = ({
  collectionItems,
}: CollectionGallerySectionProps) => {
  return (
    <section
      className={`border-schema ${HeadingFont.className}  glowy-bubbles h-fit p-2 text-3xl font-bold lg:text-6xl`}
    >
      <ul className="mt-4 space-y-10">
        {collectionItems.map((item, index) => {
          return (
            <li key={item.id} className="lg:inline">
              <span className="peer relative z-10 hover:text-white hover:underline">
                {item.title}
              </span>
              <sup className={`peer-hover:text-white`}>{item.after}</sup>
              <span className="hidden lg:inline">
                {index === collectionItems.length - 1 ? "" : " | "}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CollectionGallerySection;
