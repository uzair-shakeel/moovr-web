import React from "react";
import Header from "../../../components/user-panel/header";
import Carousel from "../../../components/user-panel/carousel";
import RideForm from "../../../components/user-panel/ride-form";

const Ride = () => {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-1 min-h-[500px] items-center p-4">
        <RideForm />
        {/* <Map /> */}
      </div>
      <Carousel />
    </div>
  );
};

export default Ride;
