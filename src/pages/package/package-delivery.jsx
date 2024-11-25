import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header";
import { Link } from "react-router-dom";

const PackageDelivery = () => {
  return (
    <div className="h-screen  w-screen ">
      {/* Header */}
      <Header />

      <div className="p-6 md:p-12">
        {/* Back Button */}
        <div className="flex items-center  mb-4 cursor-pointer">
          <FaArrowLeft className="text-lg mr-2" />
          <span className="text-sm font-medium">Back</span>
        </div>
        <div className="flex items-center ">
          <div className="max-w-[50%]">
            {/* Content Section */}
            <div className="text-start py-8">
              {/* Title and Description */}
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Delivering Happiness, On-Time, Every Time
              </h2>
              <p className="text-gray-500 mb-10">
                We prioritize your happiness with reliable, punctual service,
                ensuring every interaction brings joy and satisfaction.
              </p>

              {/* Buttons for Sending and Receiving Packages */}
              <div className=" justify-center grid grid-cols-2 space-x-4">
                <Link
                  to={"/package/pickup"}
                  className="bg-purple-500 text-center hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full"
                >
                  Send a package
                </Link>
                <button className="bg-purple-100 text-purple-500 font-semibold py-3 px-6 rounded-full">
                  Receive a package
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] mx-auto h-auto">
            <img
              src="/images/package-delivery.svg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDelivery;
