"use client";

import { FiUpload } from "react-icons/fi";
import Header from "../../components/driver-panel/header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateListing() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [formData, setFormData] = useState({
    vehicleName: "",
    make: "",
    model: "",
    description: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setSelectedImages((prev) => [...prev, ...newFiles]);

    // Create preview URLs for the new images
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log("Form data state:", formData);
    console.log("Selected images:", selectedImages);

    const url = "https://moovr-api.vercel.app/api/v1/cars/list";
    const token = localStorage.getItem("token");

    // Check if inputs are filled
    if (!formData.vehicleName || !formData.make || !formData.price) {
      alert("Please fill all required fields.");
      return;
    }

    const data = new FormData();
    data.append("vehicleName", formData.vehicleName);
    data.append("make", formData.make);
    data.append("model", formData.model);
    data.append("description", formData.description);
    data.append("price", formData.price);

    selectedImages.forEach((image) => {
      data.append("image", image);
    });

    console.log("Final FormData:", Array.from(data.entries())); // Log FormData for debugging

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("Car listing created successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error while creating the car listing:", error);
      alert(
        error.response?.data?.message ||
          "An error occurred while creating the listing. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-medium mb-8">Create New Listing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload Section */}
          <div
            onClick={() => document.getElementById("imageUpload")?.click()}
            className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-gray-200 cursor-pointer relative overflow-hidden"
          >
            {previewUrls.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 w-full">
                {previewUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <>
                <FiUpload className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 text-center mb-1">
                  Upload media from device
                </p>
                <p className="text-xs text-gray-500 text-center">
                  Supported formats: JPG, JPEG, WEBP, PNG
                </p>
              </>
            )}
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              accept=".jpg,.jpeg,.webp,.png"
              multiple
              onChange={handleImageUpload}
            />
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
                  name="vehicleName"
                  placeholder="Vehicle"
                  value={formData.vehicleName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle make and model
                </label>
                <input
                  type="text"
                  name="make"
                  placeholder="Vehicle make and model"
                  value={formData.make}
                  onChange={handleInputChange}
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
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-primaryPurple text-white py-3 rounded-full hover:bg-[#7347d5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8257E9]"
            >
              Create
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
