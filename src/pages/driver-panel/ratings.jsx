"use client";

import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { FaChevronDown } from "react-icons/fa";
import Header from "../../components/driver-panel/header";
import { FaStar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer as ResponsiveBarContainer,
} from "recharts";

const ratingsData = [{ value: 85, color: "#8B5CF6", bgColor: "#F3E8FF" }];

const ratingsTrend = [
  { day: "Sun", count: 10 },
  { day: "Mon", count: 20 },
  { day: "Tue", count: 15 },
  { day: "Wed", count: 30 },
  { day: "Thu", count: 25 },
  { day: "Fri", count: 18 },
  { day: "Sat", count: 22 },
];

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export default function Revenue() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [priceValue, setPriceValue] = useState("");

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

      {/* Revenue Card */}
      <div className="p-6 max-w-6xl mx-auto">
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Total Revenue</h2>
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
                <div className="absolute top-12 right-0 w-56 bg-white shadow-lg rounded-lg mt-1 p-2">
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
                      <label className="">Price</label>
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
          <div className="h-[300px]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Overall Ratings */}
              <Card className="border border-gray-200 shadow-lg p-8 flex flex-col justify-center items-center">
                <h3 className="text-lg font-medium mb-2">Overall Ratings</h3>
                <img src="/driver/stars.svg" alt="" />
                <p className="text-3xl font-bold text-gray-700">5.0</p>
                <p className="text-gray-500">Rated by 45 people</p>
              </Card>

              {/* Ratings Percentage */}
              <Card className="border border-gray-200 shadow-lg p-8">
                <h3 className="text-lg font-medium text-center mb-4">
                  Ratings Percentage
                </h3>
                <div className="flex justify-center">
                  <ResponsiveContainer width={150} height={150}>
                    <PieChart>
                      <Pie
                        data={[
                          {
                            value: ratingsData[0].value,
                            color: ratingsData[0].color,
                          },
                          {
                            value: 100 - ratingsData[0].value,
                            color: ratingsData[0].bgColor,
                          },
                        ]}
                        dataKey="value"
                        innerRadius={50} // Adjusted size
                        outerRadius={70} // Adjusted size
                        startAngle={90}
                        endAngle={450}
                      >
                        <Cell key="value" fill={ratingsData[0].color} />
                        <Cell key="bg" fill={ratingsData[0].bgColor} />
                      </Pie>
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xl font-bold"
                      >
                        {ratingsData[0].value}%
                      </text>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Ratings Trend */}
              <Card className="border border-gray-200 shadow-lg p-8">
                <h3 className="text-lg font-medium text-center mb-4">
                  Ratings Trend
                </h3>
                <ResponsiveBarContainer width="100%" height={150}>
                  <BarChart data={ratingsTrend}>
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "#4B5563", fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveBarContainer>
              </Card>
            </div>
          </div>
        </Card>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-lg text-start font-[600] text-gray-800 mt-4 my-4">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {[
              {
                type: "Payout for a ride",
                time: "9:54AM",
                name: "Emeka",
                review: "Smooth ride, friendly driver! Would recommend.",
                amount: "-₦10",
                rating: 5.0,
                color: "text-red-500",
              },
              {
                type: "Payout for a ride",
                time: "2:30PM",
                name: "Emeka",
                review: "Smooth ride, friendly driver! Would recommend.",
                amount: "-₦100",
                rating: 5.0,
                color: "text-red-500",
              },
              {
                type: "Cash added",
                time: "05/09/2024",
                name: "Emeka",
                review: "Smooth ride, friendly driver! Would recommend.",
                amount: "+₦50",

                rating: 5.0,
                color: "text-green-500",
              },
              {
                type: "Payout for a ride",
                time: "05/09/2024",
                name: "Emeka",
                review: "Smooth ride, friendly driver! Would recommend.",
                amount: "-₦100",
                rating: 5.0,
                color: "text-red-500",
              },
            ].map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-7 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex gap-3 items-center">
                    <div>
                      <img
                        src="/images/avatar.png"
                        alt=""
                        className="rounded-full h-12 w-12"
                      />
                    </div>
                    <p className="text-sm font-medium">{transaction.name}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{transaction.time}</p>
                <p className="text-xs text-gray-500">{transaction.review}</p>
                <span className={`text-md font-semibold `}>
                  {transaction.rating}.0
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
