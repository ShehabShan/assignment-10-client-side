import { MdAccessTime } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbManFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import AllVisasCard from "./AllVisasCard";

const Feature = () => {
  const [visas, setVisa] = useState([]);

  console.log(visas);

  useEffect(() => {
    axios.get("http://localhost:5000/features").then((res) => {
      setVisa(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center">Feature Visa</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 
  p-10 bg-[ #8B4513] rounded-lg"
      >
        {visas.map((visa, index) => (
          <AllVisasCard key={index} visa={visa}></AllVisasCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
