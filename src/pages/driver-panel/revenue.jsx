"use client";

import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { FaChevronDown } from "react-icons/fa";
import Header from "../../components/driver-panel/header";
// Sample data for the area chart
const data = [
  { day: "Sun", value: 30 },
  { day: "Mon", value: 40 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 45 },
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 45 },
];

// Sample data for recent rides
const recentRides = [
  { id: 1, date: "01/05/2024", amount: 50 },
  { id: 2, date: "01/05/2024", amount: 50 },
  { id: 3, date: "01/05/2024", amount: 50 },
];

const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export default function Revenue() {
  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Revenue Card */}
      <div className="p-6 max-w-6xl mx-auto">
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Total Revenue</h2>
            <Button className="bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200">
              This Month <FaChevronDown className="inline ml-2" />
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#C084FC" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#C084FC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent</h2>
          <div className="space-y-4">
            {recentRides.map((ride) => (
              <Card
                key={ride.id}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaChevronDown className="h-4 w-4 text-purple-600 transform rotate-90" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ride completed</p>
                    <p className="text-sm text-gray-500">{ride.date}</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">
                  +${ride.amount}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
