
import { Link } from "react-router-dom";

const AllVisasCard = ({ visa }) => {
  return (
    <div className=" border bg-white text-black rounded-2xl">
      <div className=" flex flex-col justify-between  gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#b976eb] via-[#e668ac] to-[#f18665] p-5">
          <div>
            <img
              className="w-full h-[250px] rounded-lg"
              src={visa?.country_image}
              alt=""
            />
          </div>
          <div className="flex justify-between mt-8 text-white items-center">
            <h2 className="text-3xl font-semibold">{visa?.country_name}</h2>
            <p className="border px-4 py-1">{visa?.visa_type}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between border gap-6">
          <div className="mx-5">
            <h2 className="text-2xl">Description</h2>
            <p className="opacity-70">{visa?.description}</p>
          </div>

          <div className="mx-3 border  px-2 mb-4 bg-[#f4f4f5]">
            <h2 className="text-xl mt-3 mb-2">Application Method</h2>
            <p className="opacity-70">{visa?.application_method}</p>
          </div>
          <div className=" mx-auto mb-4">
            <Link to={`/visas/${visa?._id}`}>
              <button className="btn bg-blue-500 hover:bg-purple-700 text-white font-bold text-[18px]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVisasCard;
