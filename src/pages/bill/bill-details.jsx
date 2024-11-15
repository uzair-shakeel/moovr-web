import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"; // Import icon for Google Pay

const BillDetails = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-8">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Bill Details</h1>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/user-avatar.png"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-gray-700 font-medium">Mr. Edmund</p>
        </div>
      </div>

      {/* Purple Banner */}
      <div className="bg-purple-600 rounded-lg w-full max-w-3xl p-6 flex flex-col md:flex-row items-center justify-between text-white">
        <div>
          <p className="text-sm">05/09/2024</p>
          <h2 className="text-lg font-semibold mt-2">
            Here is your receipt for your ride,
          </h2>
          <h2 className="text-lg font-semibold">Edmund</h2>
        </div>
        <img
          src="/path/to/car-image.png" // Replace with the actual car image path
          alt="Car"
          className="w-48 mt-4 md:mt-0"
        />
      </div>

      {/* Bill Details Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-sm text-gray-700 relative">
        {/* Download Icon */}
        <div className="absolute top-4 right-4">
          <FaDownload className="text-gray-400 cursor-pointer" size={18} />
        </div>
        <div className="flex justify-between items-center">
          <img
            src="/path/to/logo.png" // Replace with the logo image path
            alt="Logo"
            className="h-6 w-6"
          />
          <p className="text-3xl font-semibold text-gray-800">₦256</p>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Reference number</span>
            <span className="font-semibold">2089080</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Date</span>
            <span className="font-semibold">05/09/2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Trip charges</span>
            <span className="font-semibold">₦235</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Wait time</span>
            <span className="font-semibold">₦01</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span className="font-semibold">₦20</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span>Payment</span>
            <div className="flex items-center space-x-1">
              <FaGoogle className="text-gray-700" />
              <span className="font-semibold">Google Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
