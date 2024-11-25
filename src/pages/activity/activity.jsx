import React, { useState } from "react";
import Header from "../../components/header";
import { BiArrowBack } from "react-icons/bi";
import {
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
  FaTrashAlt,
} from "react-icons/fa";

const Activity = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Available");
  const [priceValue, setPriceValue] = useState("");
  const [activeItemIndex, setActiveItemIndex] = useState(null); // Track active item

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Handle item click and toggle its active state
  const handleActivityClick = (index) => {
    setActiveItemIndex(index === activeItemIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center mb-4 hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-[12px] w-fit">
            <BiArrowBack size={23} />
            <h1 className="text-lg font-semibold">Back</h1>
          </div>
          <div className="relative">
            {/* Dropdown Button */}
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between px-4 py-2 bg-purple-100 text-purple-500 rounded-full shadow-sm"
            >
              {selectedOption}
              {isDropdownOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 top-12 right-0 w-56 bg-white shadow-lg rounded-lg mt-1 p-2">
                <ul className="flex flex-col">
                  <li
                    onClick={() => handleOptionSelect("All")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Available")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Available
                  </li>
                  <li className="px-4 py-2 flex justify-between items-center gap-4">
                    <label>Price</label>
                    <input
                      type="text"
                      value={priceValue}
                      onChange={(e) => setPriceValue(e.target.value)}
                      placeholder="Price"
                      className="w-2/3 mt-1 px-2 py-1 bg-gray-100 rounded text-gray-500 focus:outline-none"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Activity Sections */}
        <div className="mt-8 space-y-6">
          {/* Today Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Today</h2>
            <div className="mt-4 space-y-4">
              {/* Activity Item */}
              <ActivityItem
                index={0}
                isActive={activeItemIndex === 0}
                onClick={handleActivityClick}
                logo="/path-to-your-logo.png"
                text="You have successfully Payout for a ride"
                time="9:55 AM"
              />
              <ActivityItem
                index={1}
                isActive={activeItemIndex === 1}
                onClick={handleActivityClick}
                logo="/path-to-your-logo.png"
                text="Your parcel has successfully been delivered"
                time="7:50 AM"
              />
            </div>
          </div>

          {/* Previous Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">04/09/2024</h2>
            <div className="mt-4 space-y-4">
              <ActivityItem
                index={2}
                isActive={activeItemIndex === 2}
                onClick={handleActivityClick}
                logo="/path-to-your-logo.png"
                text="Your ride has ended."
                time="7:50 AM"
              />
              <ActivityItem
                index={3}
                isActive={activeItemIndex === 3}
                onClick={handleActivityClick}
                logo="/path-to-your-logo.png"
                text="Your ride has been scheduled successfully."
                time="7:50 AM"
              />
              <ActivityItem
                index={4}
                isActive={activeItemIndex === 4}
                onClick={handleActivityClick}
                logo="/path-to-your-logo.png"
                text="Your account has been recharged."
                time="7:50 AM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ index, isActive, onClick, logo, text, time }) => (
  <div className="relative">
    {/* Trash Button */}
    <button className="absolute top-0 right-0 bottom-0 w-12 flex justify-center items-center bg-primaryPurple text-white rounded-r-lg">
      <FaTrashAlt />
    </button>

    {/* Main Activity Item */}
    <div
      onClick={() => onClick(index)} // Handle the click to toggle active state
      className={`relative z-10 flex justify-between items-center duration-300 bg-white rounded-lg shadow-sm border-[1.4px] border-gray-100 p-4 transform ${
        isActive ? "-translate-x-10" : "" // Apply left shift when active
      }`}
    >
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-[16px]">{text}</p>
          <p className="text-gray-500 text-[14px]">{time}</p>
        </div>
      </div>
      <button>
        {/* Chevron Icon */}
        <FaChevronRight />
      </button>
    </div>
  </div>
);

export default Activity;
