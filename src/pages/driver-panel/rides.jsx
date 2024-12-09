"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Header from "../../components/driver-panel/header";

const totalRides = 50; // Total rides including completed and canceled
const rideData = [
  { name: "Completed", value: 45, color: "#8B5CF6", bgColor: "#F3E8FF" },
  { name: "Cancelled", value: 5, color: "#7C3AED", bgColor: "#EDE9FE" },
];

// Recent Rides data
const recentRides = [
  { id: 1, title: "Ride to hotel", date: "05/09/2024", status: "Completed" },
  {
    id: 2,
    title: "Ride to hill station",
    date: "05/09/2024",
    status: "Cancelled",
  },
  {
    id: 3,
    title: "Ride to university",
    date: "05/09/2024",
    status: "Completed",
  },
];

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export default function Rides() {
  const [selectedOption, setSelectedOption] = useState("This Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <Header />

      <div className="p-6 max-w-6xl mx-auto">
        {/* Ride Stats */}
        <Card className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total Rides</h2>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-purple-100 text-purple-500 rounded-full shadow-sm"
              >
                {selectedOption}
                {isDropdownOpen ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute top-12 right-0 w-40 bg-white shadow-lg rounded-lg mt-1">
                  <ul>
                    <li
                      onClick={() => handleOptionSelect("This Month")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      This Month
                    </li>
                    <li
                      onClick={() => handleOptionSelect("Last Month")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Last Month
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-10 mt-8">
            {rideData.map((data, index) => (
              <div key={index} className="text-center">
                <ResponsiveContainer width={120} height={120}>
                  <PieChart>
                    <Pie
                      data={[
                        { value: data.value, color: data.color },
                        { value: totalRides - data.value, color: data.bgColor },
                      ]}
                      dataKey="value"
                      outerRadius={60}
                      innerRadius={40}
                      startAngle={90}
                      endAngle={450}
                    >
                      {[
                        <Cell key="value" fill={data.color} />,
                        <Cell key="bg" fill={data.bgColor} />,
                      ]}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <p className="mt-4 text-lg font-medium">{data.name}</p>
                <p className="text-2xl font-bold text-gray-700">{data.value}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Rides */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Rides
          </h3>
          <div className="space-y-4">
            {recentRides.map((ride) => (
              <Card
                key={ride.id}
                className="flex justify-between items-center px-6 py-4"
              >
                <p className="text-gray-800 font-medium">{ride.title}</p>
                <p className="text-gray-500">{ride.date}</p>
                <p
                  className={`font-medium ${
                    ride.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {ride.status}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
