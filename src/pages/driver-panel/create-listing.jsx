"use client";

import { FiUpload } from "react-icons/fi";
import Header from "../../components/driver-panel/header";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateListing() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setSelectedImages((prev) => [...prev, ...newFiles]);

    // Create preview URLs for the new images
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const handleUploadClick = () => {
    document.getElementById("imageUpload")?.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-medium mb-8">Create New Listing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload Section */}
          <div
            onClick={handleUploadClick}
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
                  placeholder="Vehicle"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle make and model
                </label>
                <input
                  type="text"
                  placeholder="Vehicle make and model"
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
                placeholder="Description"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
              />
            </div>

            <Link to={"/d/vehicle/edit"}>
              <button
                type="button"
                className="w-full bg-primaryPurple text-white py-3 rounded-full hover:bg-[#7347d5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8257E9]"
              >
                Create
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
