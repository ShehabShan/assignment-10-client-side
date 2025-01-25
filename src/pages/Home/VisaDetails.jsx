import axios from "axios";
import { MdAccessTime } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbManFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/visas/${id}`).then((res) => {
      setVisa(res.data);
    });
  }, [id]);

  return (
    <div className="bg-white rounded-tl-[100px] rounded-tr-[100px]">
      <div className="  bg-white text-black rounded-2xl w-[800px] mx-auto  pt-6">
        <div className=" flex flex-col justify-between  gap-4 border">
          <div className="rounded-2xl bg-gradient-to-br from-[#b976eb] via-[#e668ac] to-[#f18665] p-5">
            <div>
              <img
                className="w-full h-[380px] rounded-lg"
                src={visa?.country_image}
                alt=""
              />
            </div>
            <div className="flex justify-between mt-8 text-white items-center">
              <h2 className="text-3xl font-semibold">{visa?.country_name}</h2>
              <p className="border px-4 py-1">{visa?.visa_type}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between border min-h-[560px]">
            <div className="mx-5">
              <h2 className="text-2xl">Description</h2>
              <p className="opacity-70">{visa?.description}</p>
            </div>
            <div className="mx-5">
              <h2 className="text-xl">Required Documents</h2>
              <ul>
                {visa?.required_documents?.map((required, index) => (
                  <li
                    key={index}
                    className="opacity-70 flex items-center gap-2"
                  >
                    <IoDocumentTextOutline /> {required}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" mx-3">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <MdAccessTime />
                    <div>
                      <h2>Processing Time</h2>
                      <p className="opacity-70">{visa?.processing_time}</p>
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
                      <p className="opacity-70">{visa?.validity} months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbManFilled />
                    <div>
                      <h2>Age Restriction</h2>
                      <p className="opacity-70">
                        {visa?.age_restriction}+ years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 border  px-2 mb-4 bg-[#f4f4f5]">
              <h2 className="text-xl mt-3 mb-2">Application Method</h2>
              <p className="opacity-70">{visa?.application_method}</p>
            </div>
            <div className=" mx-auto mb-4">
              <Link to={`/apply/${visa?._id}`}>
                <button className="btn bg-blue-500 hover:bg-purple-700 text-white font-bold text-[18px]">
                  Click here to Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
