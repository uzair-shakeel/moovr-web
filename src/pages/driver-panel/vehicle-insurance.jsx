"use client";

import React from "react";
import { FiUpload } from "react-icons/fi";

export default function VehicleInsurance() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1180px] bg-white rounded-2xl shadow-md p-8 py-12 relative overflow-hidden">
        {/* Purple curved accent */}
        <div className="absolute top-0 right-0">
          <img src="/driver/vehicle-insurance.svg" alt="" />
        </div>

        <div className="max-w-[600px] mx-auto">
          <h2 className="text-lg font-medium mb-8">Vehicle Insurance</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9">
            <div className="space-y-2">
              <label
                htmlFor="insurerName"
                className="block text-sm font-medium text-gray-700"
              >
                Insurer name
              </label>
              <input
                id="insurerName"
                placeholder="Insurer name"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="policyNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Policy number
              </label>
              <input
                id="policyNumber"
                placeholder="Policy number"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="policyStartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Policy start date
              </label>
              <input
                id="policyStartDate"
                type="date"
                placeholder="Policy start date"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="policyExpiryDate"
                className="block text-sm font-medium text-gray-700"
              >
                Policy expiry date
              </label>
              <input
                id="policyExpiryDate"
                type="date"
                placeholder="Policy expiry date"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="policyCoverage"
                className="block text-sm font-medium text-gray-700"
              >
                Policy coverage
              </label>
              <input
                id="policyCoverage"
                placeholder="Policy coverage"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="uploadPolicy"
                className="block text-sm font-medium text-gray-700"
              >
                Upload policy certificate
              </label>
              <div className="relative">
                <input
                  id="uploadPolicy"
                  placeholder="Upload from device"
                  className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8257E9] focus:border-[#8257E9] cursor-pointer"
                  readOnly
                  onClick={() => document.getElementById("fileInput")?.click()}
                />
                <FiUpload className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*,.pdf"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-8 px-4 py-2 bg-[#8257E9] text-white rounded-md shadow-sm hover:bg-[#7347d5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8257E9]">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
