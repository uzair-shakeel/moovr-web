// "use client";

// import { useState, useEffect } from "react";
// import { FiChevronDown, FiTrash2, FiEdit } from "react-icons/fi";
// import Header from "../../components/driver-panel/header";
// import { useLocation } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

// export default function Listings() {
//   const [filter, setFilter] = useState("All");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Retrieve token from location state
//   const location = useLocation();
//   const dummyToken = location.state?.token || "+923171150595"; // Dummy token

//   // Print the dummy token in the console
//   console.log(dummyToken);

//   // Check if token exists
//   if (!dummyToken) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-center">You are not authenticated. Please log in again.</p>
//         <Link to="/login">
//           <button className="mt-4 px-6 py-2 bg-[#8257E9] text-white rounded-full hover:bg-[#7347d5] transition-colors">
//             Log In
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   // Fetch listings from API
//   useEffect(() => {
//     const fetchListings = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://moovr-api.vercel.app/api/v1/cars/list", {
//           headers: {
//             Authorization: `Bearer ${dummyToken}`,
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch listings");
//         const data = await response.json();
//         setListings(data.carListings || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListings();
//   }, [dummyToken]);

//   // Handle status badge colors
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-[#8257E9] bg-opacity-20 text-[#8257E9]";
//       case "Inactive":
//         return "bg-[#4C1D95] text-white";
//       default:
//         return "bg-gray-200 text-gray-700";
//     }
//   };

//   // Handle Delete Listing
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this listing?")) return;
//     try {
//       const response = await fetch(`https://moovr-api.vercel.app/api/v1/cars/listings/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${dummyToken}`,
//         },
//       });
//       if (!response.ok) throw new Error("Failed to delete listing");
//       setListings((prev) => prev.filter((listing) => listing.id !== id));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <main className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-xl font-medium">Listings</h1>

//           <div className="flex items-center gap-4">
//             <Link to="/d/vehicle/create">
//               <button className="px-6 py-2 bg-[#8257E9] text-white rounded-full hover:bg-[#7347d5] transition-colors">
//                 Add New
//               </button>
//             </Link>

//             {/* Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="px-4 py-2 bg-[#8257E9] bg-opacity-10 rounded-full text-sm flex items-center gap-2"
//               >
//                 {filter}
//                 <FiChevronDown
//                   className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
//                   {["All", "Active", "Inactive"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => {
//                         setFilter(status);
//                         setIsDropdownOpen(false);
//                       }}
//                       className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Listings */}
//         <div className="grid lg:grid-cols-2 gap-6">
//           {listings
//             .filter((listing) => filter === "All" || listing.status === filter)
//             .map((listing) => (
//               <div key={listing.id} className="bg-white border border-gray-200 rounded-lg p-6">
//                 <div className="flex items-start gap-6">
//                   <div className="relative w-1/2">
//                     <img
//                       src={listing.image}
//                       alt={listing.vehicleName}
//                       className="w-full h-auto rounded-lg"
//                     />
//                     <span
//                       className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
//                         listing.status || "Active"
//                       )}`}
//                     >
//                       {listing.status || "Active"}
//                     </span>
//                   </div>

//                   <div className="w-1/2 space-y-3">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h3 className="font-semibold text-lg">{listing.vehicleName}</h3>
//                         <p className="text-sm text-gray-500">
//                           {listing.make} {listing.model}
//                         </p>
//                       </div>
//                       <p className="text-lg font-medium">₦{listing.price}</p>
//                     </div>
//                     <div className="flex gap-3">
//                       <Link to={`/d/vehicle/edit/${listing._id}`}>
//                         <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 flex items-center gap-2">
//                           <FiEdit />
//                           Edit
//                         </button>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(listing._id)}
//                         className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 flex items-center gap-2"
//                       >
//                         <FiTrash2 />
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Header from "../../components/driver-panel/header";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SetupLicense() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConfirm = async () => {
    if (!file) {
      alert("Please upload a file before confirming.");
      return;
    }

    const formData = new FormData();
    formData.append("documentType", "drivingLicense"); // Replace with dynamic document type
    formData.append("file", file);

    try {
      const response = await fetch("https://moovr-api.vercel.app/api/v1/driver/upload-document", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        // Redirect or update UI as needed
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      <div className="w-full max-w-5xl mx-auto mt-12 bg-white shadow-lg rounded-lg p-8">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Content */}
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            Driving License
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Upload your high quality picture, where your face is clearly visible.
          </p>

          {/* File Upload */}
          <div
            className="border-2 border-dashed h-[230px] border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => document.getElementById("file-input").click()}
          >
            <FaCloudUploadAlt className="text-gray-400 text-4xl mb-3" />
            <p className="text-gray-500 text-sm">
              {file ? file.name : "Upload CNIC Front side"}
            </p>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Confirm Button */}
          <Link to={"/d/"}>
            <button
              onClick={handleConfirm}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg mt-6 transition"
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
