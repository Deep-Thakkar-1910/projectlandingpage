import { HeadingFont } from "@/lib/FontDefinitions";
const DescriptionSection = () => {
  return (
    <section
      className={`glowy-bubbles-inverse relative flex flex-col border-b-2 border-gray-400`}
    >
      <div className="w-full border-b-2 border-gray-400 p-2 px-4">
        <h2
          className={`text-xl font-semibold lg:text-4xl ${HeadingFont.className}`}
        >
          NanaHana Online Gallery X
        </h2>
      </div>
      <div className={`flex flex-1 flex-col lg:flex-row`}>
        <div className="w-full  border-gray-400 p-2 px-4 lg:w-3/4  lg:border-r-2 ">
          <h3 className="text-2xl font-semibold">NanaHana Online Gallery</h3>
          <div className="mt-4 flex flex-col gap-y-4 text-base font-extrabold leading-tight">
            <p>
              NanaHana Online Gallery is a project dedicated to discovering and
              supporting independent artists and creators.
            </p>
            <p>
              It aims to allow joyful and beautiful art and creativity to flow
              freely.
            </p>
            <p>
              At NanaHana, you will find a variety of artworks, including
              paintings, photography, sculptures, and handicrafts, all created
              by independent artists from around the world.
            </p>
            <p>
              We strive to help artists sell their work to support their
              creativity. By purchasing these pieces, you not only provide
              direct support to the artists but also add unique art to your
              life, bringing healing power and a sense of joy.
            </p>
            <p>
              We organize online exhibitions, pop-up shows, art workshops, and
              artist interviews to give you the opportunity to delve deeper into
              the creative process and stories of the artists.
            </p>
            <p>
              Whether you{"'"}re an art enthusiast, collector, or simply looking
              for unique gifts, NanaHana Online Gallery welcomes you to join us
              in supporting independent artists and creating a better art world
              together!
            </p>
            <p>Create the fun!</p>
          </div>
        </div>
        <div className="flex w-full  border-t-2 border-gray-400 p-2 px-4 lg:w-1/4 lg:items-center lg:border-t-0">
          {":)"}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
