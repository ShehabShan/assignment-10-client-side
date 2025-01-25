import React, { useEffect, useRef, useState } from "react";
import AllVisasCard from "./AllVisasCard";
import axios from "axios";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [originalVisa, setOriginalVisa] = useState([]);

  const searchInputRef = useRef(null);

  console.log(visas);

  useEffect(() => {
    axios.get("http://localhost:5000/visas").then((res) => {
      setVisas(res.data);
      setOriginalVisa(res.data);
    });
  }, []);

  const handleSearchInput = (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase();
    console.log(search.length);

    if (search) {
      const result = visas.filter((visa) =>
        visa.country_name.toLowerCase().includes(search)
      );

      setVisas(result);
    } else {
      setVisas(visas);
    }

    if (search.length === 0) {
      setVisas(originalVisa);
    }
  };

  const handleGoBack = () => {
    setVisas(originalVisa);

    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSearchInput}
        className="input input-bordered flex items-center w-[40%] mx-auto mt-5 mb-5"
      >
        <input
          type="text"
          className="grow"
          placeholder="Search"
          name="search"
          ref={searchInputRef}
        />

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-90"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 
      p-10 bg-[ #8B4513] rounded-lg"
      >
        {visas.map((visa, index) => (
          <AllVisasCard key={index} visa={visa}></AllVisasCard>
        ))}

        {visas.length === 0 && (
          <p onClick={handleGoBack} className="text-2xl btn text-red-200">
            Go Back
          </p>
        )}
      </div>
    </div>
  );
};

export default AllVisas;
