import { MdAccessTime } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbManFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";


const VisaApplicationCard = ({ visa, handleCancle }) => {
  return (
    <div className="  bg-white text-black rounded-2xl  mx-auto">
      <div className=" flex flex-col justify-between  gap-4 ">
        <div className="rounded-2xl bg-gradient-to-br from-[#b976eb] via-[#e668ac] to-[#f18665] p-5">
          <div>
            <img
              className="w-full h-[380px] rounded-lg"
              src={visa?.visa_datail?.country_image}
              alt=""
            />
          </div>
          <div className="flex justify-between mt-8 text-white items-center">
            <h2 className="text-3xl font-semibold">{visa?.country_name}</h2>
            <p className="border px-4 py-1">{visa?.visa_datail?.visa_type}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between border rounded-xl min-h-[700px]">
          <div className="mx-5">
            <h2 className="text-2xl">Description</h2>
            <p className="opacity-70">{visa?.visa_datail?.description}</p>
          </div>
          <div className="mx-5">
            <h2 className="text-xl">Required Documents</h2>
            <ul>
              {visa?.visa_datail?.required_documents?.map((required, index) => (
                <li key={index} className="opacity-70 flex items-center gap-2">
                  <IoDocumentTextOutline /> {required}
                </li>
              ))}
            </ul>
          </div>

          <div className=" mx-3 mt-4">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <MdAccessTime />
                  <div>
                    <h2>Processing Time</h2>
                    <p className="opacity-70">
                      {visa?.visa_datail?.processing_time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaMoneyCheckDollar />
                  <div>
                    <h2>Fee</h2>
                    <p className="opacity-70">${visa?.fee}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <TbWorld />
                  <div>
                    <h2>Validity</h2>
                    <p className="opacity-70">
                      {visa?.visa_datail?.validity} months
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TbManFilled />
                  <div>
                    <h2>Age Restriction</h2>
                    <p className="opacity-70">
                      {visa?.visa_datail?.age_restriction}+ years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* name */}
          <div className="mt-6 mb-6">
            <div className=" mx-3">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <CiCalendarDate className="text-xl" />
                    <div>
                      <h2>Applied date.</h2>
                      <p className="opacity-70">{visa?.Application_date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineMail className="text-xl" />
                    <div>
                      <h2>Applicant's Email</h2>
                      <p className="opacity-70">{visa?.user_email}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <MdDriveFileRenameOutline className="text-xl" />
                    <div>
                      <h2>Applicant’s Name</h2>
                      <p className="opacity-70">
                        {visa?.first_name} {visa?.last_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* naem */}
          <div className="mx-3 border  px-2 mb-4 bg-[#f4f4f5]">
            <h2 className="text-xl mt-3 mb-2">Application Method</h2>
            <p className="opacity-70">
              {visa?.visa_datail?.application_method}
            </p>
          </div>
          <div className=" mx-auto mb-4">
            <button
              onClick={() => handleCancle(visa?._id)}
              className="btn bg-blue-500 hover:bg-purple-700 text-white font-bold text-[18px]"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationCard;
