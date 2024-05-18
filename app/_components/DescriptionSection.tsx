const DescriptionSection = () => {
  return (
    <section className="to-app-secondary  flex flex-col border-b-2 border-black bg-gradient-to-r from-app-main ">
      <div className="w-full border-b-2 border-black p-2 px-4">
        <h2 className="text-xl font-semibold lg:text-4xl">
          Taka Online Gallery X <br className="hidden lg:block" /> P.T
        </h2>
      </div>
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="w-full  border-black p-2 px-4 lg:w-3/4  lg:border-r-2 ">
          <h3 className="text-2xl font-semibold">Taka Online Gallery</h3>
          <div className="mt-4 flex flex-col gap-y-4 text-base font-extrabold leading-tight">
            <p>
              Taka Online Gallery is a project dedicated to discovering and
              supporting independent artists and creators.
            </p>
            <p>
              It aims to allow joyful and beautiful art and creativity to flow
              freely.
            </p>
            <p>
              At Taka, you will find a variety of artworks, including paintings,
              photography, sculptures, and handicrafts, all created by
              independent artists from around the world.
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
              for unique gifts, Taka Online Gallery welcomes you to join us in
              supporting independent artists and creating a better art world
              together!
            </p>
            <p>Create the fun!</p>
          </div>
        </div>
        <div className="flex w-full  border-t-2 border-black p-2 px-4 lg:w-1/4 lg:items-center lg:border-t-0">
          {":)"}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
