import React from "react";
import Banner from "./Banner";
import Carousel from "../../Component/Carousel";
import Feature from "./Feature";
import Details from "../../Component/Details";

const Home = () => {
  return (
    <div className="bg-white rounded-tl-[50px] rounded-tr-[50px]">
      <Carousel></Carousel>
      <Feature></Feature>
      <Details></Details>
    </div>
  );
};

export default Home;
