"use client";

import { useState, useEffect } from "react";
import Header from "../../components/driver-panel/header";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditListing() {
  const { id } = useParams(); // Get the vehicle id from the URL

  const [availability, setAvailability] = useState("Active");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCarDetails = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("auth_token"); // Fetch token securely from localStorage
      const response = await axios.get(`https://moovr-api.vercel.app/api/v1/cars/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCarDetails(response.data.carListing);
      setAvailability(response.data.carListing.status);
    } catch (err) {
      setError("Failed to fetch car details.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateCarDetails = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("auth_token"); // Securely fetch token
      const updatedDetails = {
        vehicleName: carDetails?.vehicleName,
        make: carDetails?.make,
        model: carDetails?.model,
        description: carDetails?.description,
        price: carDetails?.price,
        status: availability, // Update the status
      };

      await axios.put(
        `https://moovr-api.vercel.app/api/v1/cars/listings/${id}`,
        updatedDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Car listing updated successfully.");
    } catch (err) {
      setError("Failed to update car listing.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-medium mb-8">Edit Listing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            {carDetails?.image && (
              <img
                src={carDetails.image}
                alt={carDetails.vehicleName}
                className="w-auto h-[400px] object-cover"
              />
            )}
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle
                </label>
                <input
                  type="text"
                  value={carDetails?.vehicleName || ""}
                  onChange={(e) => setCarDetails({ ...carDetails, vehicleName: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle make and model
                </label>
                <input
                  type="text"
                  value={`${carDetails?.make} ${carDetails?.model}`}
                  onChange={(e) => {
                    const [make, model] = e.target.value.split(" ");
                    setCarDetails({ ...carDetails, make, model });
                  }}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={6}
                value={carDetails?.description || ""}
                onChange={(e) => setCarDetails({ ...carDetails, description: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2">₦</span>
                  <input
                    type="number"
                    value={carDetails?.price || ""}
                    onChange={(e) => setCarDetails({ ...carDetails, price: e.target.value })}
                    className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent text-left flex items-center justify-between"
                  >
                    {availability}
                    <FiChevronDown
                      className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-1">
                        {["Active", "Inactive", "Removed"].map((status) => (
                          <button
                            key={status}
                            onClick={() => {
                              setAvailability(status);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50"
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={updateCarDetails}
                className="flex-1 bg-primaryPurple text-white py-3 rounded-full hover:bg-[#7347d5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8257E9]"
              >
                Save
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
