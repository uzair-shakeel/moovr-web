import React from "react";
import Header from "../../components/header"; // Import your Header component
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa"; // For the map marker icon
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const TrackPackage = () => {
  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative h-full">
        {/* Map Background */}
        <div className="absolute inset-0">
          <img
            title="Map"
            src="/images/full-map-img.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Card for Pickup Selection */}
        <div className="absolute top-[10%] left-[10%] transform md:w-[400px]  space-y-4 w-[80%] ">
          {/* Search Input */}

          {/* Back Button */}
          <Link
            to={"/package"}
            className="flex items-center mb-20 cursor-pointer"
          >
            <FaArrowLeft className="text-lg mr-2" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackPackage;
