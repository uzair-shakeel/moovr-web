import React, { useState } from "react";
import { Link } from "react-router-dom";

const Name = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8 text-center">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="mx-auto mb-6 w-20 h-20"
        />
        <h2 className="text-xl font-semibold mb-2">What's your name?</h2>
        <p className="text-gray-500 mb-6">
          Let us know how to properly address you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none"
          />
          <Link to={"/ride"}>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-purple-500 text-white rounded-full text-lg hover:bg-purple-600"
            >
              Done
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Name;
