import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { Link } from "react-router-dom";


const DriverRegister = () => {
  const location = useLocation();
  const { role } = location.state || { role: "driver" }; // Default to driver
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log("Selected Role:", role); // Log the selected role
  }, [role]);

  const handlePhoneNumberChange = (isValid, value, countryData) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl h-[550px] grid md:grid-cols-2">
        <div className="p-8 w-96 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Enter your mobile number</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <IntlTelInput
              preferredCountries={["ng", "us", "gb"]}
              defaultCountry={"ng"}
              containerClassName="intl-tel-input w-full"
              inputClassName="w-full border-2 border-gray-200 rounded-full p-2 focus:outline-none"
              fieldId="phoneNumber"
              onPhoneNumberChange={handlePhoneNumberChange}
            />
            <Link to={"/d/verification"}>
              <button
                type="submit"
                className="w-full py-2 mt-3 bg-purple-500 text-white rounded-full hover:bg-purple-600"
              >
                Continue
              </button>
            </Link>
          </form>
          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-purple-500">
                Log In
              </a>
            </p>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-1" />
            <span className="px-4 text-gray-400">or</span>
            <hr className="flex-1" />
          </div>
          <div className="space-y-3">
            <button className="w-full py-2 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>
            <button className="w-full py-2 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/633px-Apple_logo_black.svg.png"
                alt="Apple"
                className="w-5 h-5"
              />
              <span>Continue with Apple</span>
            </button>
            <button className="w-full py-2 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span>Continue with Facebook</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By proceeding, you consent to get calls, WhatsApp, or SMS messages,
            including by automated dialer, from our company and its affiliates
            to the number provided. Text "STOP" to opt out.
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="/driver/auth/signup-bg.png"
            alt="Signup Background"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DriverRegister;
// import React, { useState } from "react";
// import axios from "axios";

// const DriverRegister = () => {
//   const [phone, setPhone] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [step, setStep] = useState(1);
//   const [role, setRole] = useState("driver");  // Default to driver, or fetch dynamically

//   // Function to handle phone verification
//   const handlePhoneVerification = async () => {
//     try {
//       // Validate phone number
//       if (!isValidPhone(phone)) {
//         alert("Please enter a valid phone number.");
//         return;
//       }

//       // Get user location
//       const location = await getUserLocation();

//       // Prepare payload
//       const payload = {
//         phone: phone.trim(), // Ensure phone number is trimmed
//         location: {
//           coordinates: location, // Should be [longitude, latitude]
//           type: "Point", // Mandatory
//         },
//         role: role,  // Add the role of the user
//       };

//       console.log("Payload sent to the server:", JSON.stringify(payload, null, 2));

//       // Send request to the server
//       const response = await axios.post(
//         "https://moovr-api.vercel.app/api/v1/auth/verify-phone",
//         payload
//       );

//       console.log("Response:", response.data);

//       if (response.data.message === "OTP sent successfully") {
//         setOtpSent(true);
//         setStep(2);
//       }
//     } catch (error) {
//       console.error("Phone Verification Error:", error);

//       // Log detailed error message from the server
//       if (error.response) {
//         console.error("Error Data:", error.response.data);
//         alert(
//           `Error: ${error.response.data.message || "Unknown error"}\nDetails: ${
//             error.response.data.error || "No additional info."
//           }`
//         );
//       } else {
//         alert(`Request failed: ${error.message}`);
//       }
//     }
//   };

//   // Function to fetch user location using Geolocation API
//   const getUserLocation = () => {
//     return new Promise((resolve, reject) => {
//       if (!navigator.geolocation) {
//         reject(new Error("Geolocation is not supported by your browser."));
//       }
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           resolve([longitude, latitude]); // Ensure longitude, latitude format
//         },
//         (error) => {
//           reject(new Error("Unable to retrieve location. Please enable location access."));
//         }
//       );
//     });
//   };

//   // Function to validate phone number format (10-15 digits)
//   const isValidPhone = (phone) => {
//     const phoneRegex = /^[0-9]{10,15}$/; // Accepts 10-15 digit numbers
//     return phoneRegex.test(phone);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl h-[550px] grid md:grid-cols-2">
//         <div className="p-8 w-96 mx-auto">
//           <h2 className="text-2xl font-bold mb-4">Enter your mobile number</h2>
//           {step === 1 && (
//             <div>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full border-2 border-gray-200 rounded-full p-2 focus:outline-none"
//               />
//               <button
//                 onClick={handlePhoneVerification}
//                 className="w-full py-2 mt-3 bg-purple-500 text-white rounded-full hover:bg-purple-600"
//               >
//                 Verify Phone
//               </button>
//             </div>
//           )}
//           {step === 2 && otpSent && <p>OTP sent successfully. Please check your phone.</p>}
//           <div className="text-center mt-4">
//             <p>
//               Already have an account?{" "}
//               <a href="/login" className="text-purple-500">
//                 Log In
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <img
//             src="/driver/auth/signup-bg.png"
//             alt="Signup Background"
//             className="object-cover h-full w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverRegister;

