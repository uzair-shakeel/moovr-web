import { useState } from "react";
import {
  FiChevronDown,
  FiHome,
  FiGrid,
  FiCreditCard,
  FiList,
  FiCalendar,
  FiChevronRight,
} from "react-icons/fi";
import Header from "../../components/driver-panel/header";

export default function Bookings() {
  const [filter, setFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const bookings = [
    {
      id: 1,
      status: "Active",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      customer: "John Doe",
      dateRange: "Rent from 5:30 AM 05/10/2024 to 5:30PM 05/10/2024",
      price: 125,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      status: "Completed",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      customer: "John Doe",
      dateRange: "Rent from 5:30 AM 05/10/2024 to 5:30PM 05/10/2024",
      price: 125,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      status: "Cancelled",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      customer: "John Doe",
      dateRange: "Rent from 5:30 AM 05/10/2024 to 5:30PM 05/10/2024",
      price: 125,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      status: "Completed",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      customer: "John Doe",
      dateRange: "Rent from 5:30 AM 05/10/2024 to 5:30PM 05/10/2024",
      price: 125,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#8257E9] bg-opacity-20 text-[#8257E9]";
      case "Completed":
        return "bg-[#8257E9] text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const getActionButton = (status) => {
    switch (status) {
      case "Active":
        return (
          <button
            disabled
            className="px-6 py-4 bg-[#F3E9FE] cursor-not-allowed text-primaryPurple font-bold rounded-full transition-colors"
          >
            Cancel
          </button>
        );
      default:
        return (
          <button className="px-6 py-4 bg-[#8257E9] font-bold text-white rounded-full hover:bg-[#7347d5] transition-colors">
            Delete
          </button>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium">Bookings</h1>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 bg-[#8257E9] bg-opacity-10 rounded-full text-sm flex items-center gap-2"
            >
              {filter}
              <FiChevronDown
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                {["All", "Active", "Completed", "Cancelled"].map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setFilter(status);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className=" grid lg:grid-cols-2 gap-9">
          {bookings
            .filter((booking) => filter === "All" || booking.status === filter)
            .map((booking) => (
              <div
                key={booking.id}
                className="bg-white  border border-gray-300 shadow-md rounded-lg p-6 flex items-center justify-between"
              >
                <div className="grid grid-cols-2 items-center gap-6">
                  <div className="relative h-[250px] w-full flex items-center">
                    <img
                      src={"/images/BMW.png"}
                      alt={booking.vehicle}
                      className="w-full h-auto  object-cover rounded-lg"
                    />
                    <span
                      className={`px-3 py-1 absolute top-0
                          left-0 rounded-full text-sm font-medium ${getStatusColor(
                            booking.status
                          )}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-[600] text-[16px]">
                        {booking.vehicle}
                      </h3>
                      <p className="text-lg font-medium">₦{booking.price}</p>
                    </div>

                    <p className="text-sm text-gray-500 text-[14px]">
                      {booking.vehicleId}
                    </p>
                    <p className="text-[16px] font-medium py-3">
                      {booking.customer}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {booking.dateRange}
                    </p>
                    <div className="flex flex-col pt-4 w-3/4 gap-4">
                      {getActionButton(booking.status)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
