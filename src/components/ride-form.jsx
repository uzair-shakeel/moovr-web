import React, { useState } from "react";
import { Link } from "react-router-dom";
import DateTimeModal from "../components/modals/time-date";

const RideForm = ({ pageLink }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pickupOption, setPickupOption] = useState("Pickup Now");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupTime, setPickupTime] = useState("");

  const handleSetPickupTime = (time) => {
    setPickupTime(time);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setPickupOption(option);
    pickupOption === "Pickup Now" && setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full max-w-lg mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4">Get your ride</h3>
      <form className="space-y-6">
        {/* Pickup Location */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-4">
          <img
            src="/icons/ride/search.svg"
            alt="Search Icon"
            className="w-6 h-6 mr-3"
          />
          <input
            type="text"
            placeholder="Pickup location"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Dropoff Location */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-4">
          <img
            src="/icons/ride/search.svg"
            alt="Location Icon"
            className="w-6 h-6 mr-3"
          />
          <input
            type="text"
            placeholder="Dropoff location"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Pickup Time */}
        <div className="relative">
          <div
            className="flex items-center bg-gray-100 rounded-full px-4 py-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src="/icons/ride/timer.svg"
              alt="Clock Icon"
              className="w-6 h-6 mr-3"
            />
            <span className="bg-transparent focus:outline-none w-full">
              {pickupOption}
            </span>
            <img
              src="/icons/ride/chevron.svg"
              alt="Chevron Down"
              className={`w-4 h-4 ml-2 ${
                isDropdownOpen === false ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-full max-w-xs right-0 z-10">
              <ul className="py-2">
                <li
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect("Pickup Now")}
                >
                  <img
                    src="/icons/ride/timer.svg"
                    alt="Pickup Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>Pickup Now</span>
                </li>
                <li
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect("Schedule Later")}
                >
                  <img
                    src="/icons/ride/schedule.svg"
                    alt="Schedule Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <span>Schedule Later</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Link to={pageLink}>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-500 text-white rounded-full text-lg hover:bg-purple-600"
          >
            Search
          </button>
        </Link>
      </form>
      <DateTimeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSetPickupTime={handleSetPickupTime}
      />
    </div>
  );
};

export default RideForm;
