import mystries from "../assets/team/detail1.png";
import pot from "../assets/team/detail2.png";
const Details = () => {
  return (
    <div className="mt-16 mb-8 pb-2">
      <h2 className="text-center text-4xl text-[#000000] font-bold mb-8">
        Unlock Your Future Through Visas
      </h2>

      <div className="mb-24 text-[#000000] ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:w-5/6">
            <div className="h-38 bg-gradient-to-r from-red-100 to-red-50 rounded-xl"></div>
            <div className="rounded-xl row-span-2">
              <img
                className="mx-auto my-5 w-[260px] h-[240px] rounded-xl"
                src={pot}
                alt=""
              />
            </div>
            <div className=" rounded-xl row-span-2">
              <img
                className="mx-auto my-5 w-[290px] h-[260px] rounded-xl"
                src={mystries}
                alt=""
              />
            </div>
            <div className="h-38 bg-gradient-to-r from-stone-200 to-stone-100 rounded-xl"></div>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-5">
              Destinations, Richly Presented
            </h1>
            <p className="text-gray-500">
              Explore the world with ease through our platform, where every
              destination is a gateway to new cultures, opportunities, and
              experiences. Each journey tells a story of connection and growth.
            </p>
            <br />
            <h1 className="text-2xl font-bold mb-5">Unique Significance</h1>
            <p className="text-gray-500">
              Every destination is unique, reflecting the diversity of cultures,
              traditions, and histories. Our platform simplifies the process,
              helping you navigate requirements and opportunities with
              confidence.
            </p>
            <br />
            <h1 className="text-2xl font-bold mb-5">Timeless Legacy</h1>
            <p className="text-gray-500">
              Preserving the spirit of exploration, our services ensure smooth
              navigation of visa processes, empowering you to create lifelong
              memories and meaningful connections across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
