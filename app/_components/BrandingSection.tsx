import Image from "next/image";

const BrandingSection = () => {
  return (
    <section className="border-schema flex max-h-96 w-full items-center justify-center gap-x-6 border-t-2 p-8">
      <div className="relative w-1/4">
        <Image
          src={"/VOGUE.png"}
          alt="VOGUE LOGO"
          width={500}
          height={300}
          className="aspect-video size-full object-contain"
        />
      </div>

      <div className="relative w-1/4 md:ml-8">
        <Image
          src={"/highsnobiety.png"}
          alt="Highsnobiety LOGO"
          width={500}
          height={300}
          className="aspect-video size-full object-contain"
        />
      </div>
      <div className="relative w-1/4">
        <Image
          src={"/nylon.png"}
          alt="Nylon LOGO"
          width={500}
          height={300}
          className="aspect-video size-full object-contain"
        />
      </div>
    </section>
  );
};

export default BrandingSection;
