import React from "react";
import Header from "../../../components/user-panel/header";
import Carousel from "../../../components/user-panel/carousel";
import RideForm from "../../../components/user-panel/ride-form";

const Ride = () => {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 min-h-[500px] items-center p-4">
        <RideForm pageLink={"/ride/selection"} />
        {/* <Map /> */}
        <img
          src="/images/map-img.png"
          alt=""
          className="h-[422px] rounded-[12px]"
        />
      </div>
      <Carousel />
    </div>
  );
};

export default Ride;
