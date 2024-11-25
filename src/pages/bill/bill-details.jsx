import React from "react";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"; // Import icon for Google Pay
import Header from "../../components/header";

const BillDetails = () => {
  return (
    <div className="h-screen  w-screen ">
      {/* Header */}
      <Header />

      <div className="p-6 md:p-12">
        {/* Purple Banner */}
        <div className="bg-purple-600 rounded-lg w-full   flex flex-col md:flex-row items-center justify-between text-white">
          <div className="p-12 space-y-2">
            <p className="text-sm">05/09/2024</p>
            <h2 className="text-[24px] font-semibold mt-2">
              Here is your receipt
            </h2>
            <h2 className="text-[24px] font-semibold">for your ride,</h2>
            <h2 className="text-[24px] font-semibold">Edmund</h2>
          </div>
          <img
            src="/images/BMW.png" // Replace with the actual car image path
            alt="Car"
            className="h-[278px] w-auto mt-4 md:mt-0"
          />
        </div>

        {/* Bill Details Card */}
        <div className="bg-white mt-9 rounded-lg shadow-lg border-[1.8px] border-gray-100 p-6 max-w-sm ">
          {/* Logo */}
          <div className="flex justify-end items-start">
            <button className="text-gray-800 hover:text-black">
              {/* Download Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          {/* Total */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">Total</p>
            <h2 className="text-3xl font-bold text-gray-800">₦256</h2>
          </div>

          {/* Details */}
          <div className="mt-9 grid grid-cols-2 gap-y-4 gap-7 text-sm justify-between w-full text-gray-600">
            <div className="space-y-4">
              <p className="font-mediu">Reference number</p>
              <p className="text-black">2089080</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Date</p>
              <p className="text-black">05/09/2024</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Trip charges</p>
              <p className="text-black">₦235</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Wait time</p>
              <p className="text-black">₦01</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Tax</p>
              <p className="text-black">₦20</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium">Payment</p>
              <div className="flex items-center space-x-2">
                {/* Google Pay Icon */}
                <img src="/icons/general/google.svg" className="h-4" />
                <p className="text-black">Google Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
