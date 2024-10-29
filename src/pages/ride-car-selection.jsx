import React from "react";
import Header from "../components/header"; // Import your Header component
import RideOptions from "../components/ride-options";
import PaymentSelector from "../components/payment-selector";

const RideSelectionScreen = () => {
  
  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative h-full">
        {/* Map Background */}
        <div className="absolute inset-0 ">
          <img
            title="Map"
            src="/images/full-map-img.png"
            className="w-full h-full"
          />   
        </div>

        {/* Floating Cards */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          {/* Ride Options */}
          <RideOptions />

          {/* Payment Selector */}
          <PaymentSelector />
        </div>
      </div>
    </div>
  );
};

export default RideSelectionScreen;
